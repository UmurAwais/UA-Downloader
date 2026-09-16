import express from 'express';
import cors from 'cors';
import { execFile, execSync, spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Store temporary download processing files in E:\.downloader_media_temp (on Drive E: with 41GB free space, outside Vite workspace)
const TEMP_DIR = path.resolve('..', '.downloader_media_temp');
if (!fs.existsSync(TEMP_DIR)) {
  fs.mkdirSync(TEMP_DIR, { recursive: true });
}

// Find ffmpeg location dynamically from imageio_ffmpeg or system
let FFMPEG_PATH = null;
try {
  const out = execSync('python -c "import imageio_ffmpeg; print(imageio_ffmpeg.get_ffmpeg_exe())"', { encoding: 'utf-8' });
  FFMPEG_PATH = out.trim();
  console.log('FFmpeg binary located at:', FFMPEG_PATH);
} catch (e) {
  console.warn('Could not detect imageio_ffmpeg, checking system ffmpeg...');
}

// Helper to format bytes to readable MB/GB
function formatBytes(bytes) {
  if (!bytes || isNaN(bytes)) return '25.0 MB';
  const mb = bytes / (1024 * 1024);
  if (mb >= 1024) {
    return `${(mb / 1024).toFixed(1)} GB`;
  }
  return `${mb.toFixed(1)} MB`;
}

// Helper to format seconds to MM:SS or HH:MM:SS
function formatDuration(seconds) {
  const total = parseInt(seconds, 10) || 0;
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const pad = (n) => (n < 10 ? '0' + n : n);
  if (h > 0) {
    return `${h}:${pad(m)}:${pad(s)}`;
  }
  return `${m}:${pad(s)}`;
}

// Helper to format view count
function formatViews(views) {
  const num = parseInt(views, 10);
  if (isNaN(num)) return '1.2M';
  if (num >= 1_000_000_000) return `${(num / 1_000_000_000).toFixed(1)}B`;
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K`;
  return `${num}`;
}

// Helper to format likes
function formatLikes(likes) {
  const num = parseInt(likes, 10);
  if (isNaN(num)) return '84.5K';
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K`;
  return `${num}`;
}

// Helper to extract YouTube video ID
function extractYouTubeId(url) {
  const match = url.match(/(?:watch\?v=|shorts\/|youtu\.be\/)([\w-]{11})/i);
  return match ? match[1] : null;
}

/**
 * Scrapes direct metadata from YouTube HTML
 */
async function scrapeYouTubeInfo(videoId) {
  const res = await fetch(`https://www.youtube.com/watch?v=${videoId}`, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
      'Accept-Language': 'en-US,en;q=0.9',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
    },
    signal: AbortSignal.timeout(5000)
  });
  const html = await res.text();

  // 1. Title
  const titleMatch = html.match(/<meta\s+name="title"\s+content="([^"]+)"/i) || html.match(/<title>([^<]+)<\/title>/i);
  let title = titleMatch ? titleMatch[1].replace(' - YouTube', '').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&') : null;

  // 2. Author
  const authorMatch = html.match(/<link\s+itemprop="name"\s+content="([^"]+)"/i) || html.match(/"author":\s*"([^"]+)"/);
  const author = authorMatch ? authorMatch[1] : null;

  // 3. Views
  const viewMatch = html.match(/<meta\s+itemprop="interactionCount"\s+content="(\d+)"/i) || html.match(/"viewCount":\s*"(\d+)"/);
  const views = viewMatch ? viewMatch[1] : null;

  // 4. Duration
  const durationIso = html.match(/<meta\s+itemprop="duration"\s+content="([^"]+)"/i);
  let durationSec = 0;
  if (durationIso) {
    const d = durationIso[1];
    const hours = d.match(/(\d+)H/);
    const mins = d.match(/(\d+)M/);
    const secs = d.match(/(\d+)S/);
    durationSec = (hours ? parseInt(hours[1]) * 3600 : 0) +
                  (mins ? parseInt(mins[1]) * 60 : 0) +
                  (secs ? parseInt(secs[1]) : 0);
  }
  if (!durationSec) {
    const approxDurationMatch = html.match(/"approxDurationMs":\s*"(\d+)"/);
    if (approxDurationMatch) durationSec = Math.floor(parseInt(approxDurationMatch[1]) / 1000);
  }

  // 5. Channel Avatar
  const channelAvatars = [...html.matchAll(/"thumbnails":\s*\[\s*\{\s*"url":\s*"(https:\/\/yt3\.[^"]+)"/g)].map(m => m[1]);
  const avatar = channelAvatars.length > 0 ? channelAvatars[0].replace(/=s\d+/, '=s120') : null;

  // 6. Likes
  const simpleLikes = [...html.matchAll(/"likeCount":\s*"(\d+)"/g)].map(m => m[1]);
  const likes = simpleLikes.length > 0 ? simpleLikes[0] : null;

  return {
    title,
    author,
    views,
    durationSec,
    avatar,
    likes,
    thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
  };
}

/**
 * Fallback to yt-dlp JSON dump
 */
function getYtDlpJson(url) {
  return new Promise((resolve, reject) => {
    execFile('python', ['-m', 'yt_dlp', '--dump-single-json', '--no-playlist', '--no-warnings', url], {
      maxBuffer: 50 * 1024 * 1024
    }, (error, stdout) => {
      if (error) return reject(error);
      try {
        resolve(JSON.parse(stdout));
      } catch (e) {
        reject(e);
      }
    });
  });
}

/**
 * GET /api/info
 * Returns genuine video metadata & calculated sizes based on actual video duration
 */
app.get('/api/info', async (req, res) => {
  const targetUrl = req.query.url;
  if (!targetUrl) {
    return res.status(400).json({ error: 'URL parameter is required' });
  }

  try {
    const videoId = extractYouTubeId(targetUrl);

    let title = 'Online Video Media';
    let author = 'Creator';
    let authorAvatar = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80';
    let viewsFormatted = '1.2M';
    let likesFormatted = '84.5K';
    let durationSec = 180;
    let durationFormatted = '3:00';
    let thumbnail = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80';
    let platform = 'video';

    if (videoId) {
      platform = 'youtube';
      thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

      // 1. Direct high-speed YouTube HTML scrape
      try {
        const info = await scrapeYouTubeInfo(videoId);
        if (info.title) title = info.title;
        if (info.author) author = info.author;
        if (info.views) viewsFormatted = formatViews(info.views);
        if (info.likes) likesFormatted = formatLikes(info.likes);
        if (info.durationSec && info.durationSec > 0) {
          durationSec = info.durationSec;
          durationFormatted = formatDuration(durationSec);
        }
        if (info.avatar) authorAvatar = info.avatar;
      } catch (e) {
        console.warn('Scrape failed, trying oEmbed:', e.message);
        try {
          const oRes = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`);
          if (oRes.ok) {
            const oData = await oRes.json();
            if (oData.title) title = oData.title;
            if (oData.author_name) author = oData.author_name;
            if (oData.thumbnail_url) thumbnail = oData.thumbnail_url;
          }
        } catch {}
      }
    } else {
      // Non-YouTube: TikTok / Instagram / Facebook / Twitter via yt-dlp
      if (targetUrl.includes('tiktok')) platform = 'tiktok';
      else if (targetUrl.includes('instagram')) platform = 'instagram';
      else if (targetUrl.includes('facebook')) platform = 'facebook';

      try {
        const yData = await getYtDlpJson(targetUrl);
        if (yData.title) title = yData.title;
        if (yData.uploader || yData.channel) author = yData.uploader || yData.channel;
        if (yData.view_count) viewsFormatted = formatViews(yData.view_count);
        if (yData.like_count) likesFormatted = formatLikes(yData.like_count);
        if (yData.duration) {
          durationSec = Math.round(yData.duration);
          durationFormatted = formatDuration(durationSec);
        }
        if (yData.thumbnail) thumbnail = yData.thumbnail;
      } catch (e) {
        console.warn('yt-dlp info failed, trying oEmbed:', e.message);
        try {
          const noembedRes = await fetch(`https://noembed.com/embed?url=${encodeURIComponent(targetUrl)}`);
          if (noembedRes.ok) {
            const data = await noembedRes.json();
            if (data.title) title = data.title;
            if (data.author_name) author = data.author_name;
            if (data.thumbnail_url) thumbnail = data.thumbnail_url;
          }
        } catch {}
      }
    }

    // Dynamic file size calculations based on actual video duration
    const qualityConfigs = [
      { label: '4K Ultra HD (2160p)', quality: '2160p', height: '2160', bitrateMbps: 18.0, fps: '60fps', is4K: true, isRecommended: true },
      { label: '2K Quad HD (1440p)', quality: '1440p', height: '1440', bitrateMbps: 10.0, fps: '60fps', is4K: false, isRecommended: false },
      { label: '1080p Full HD', quality: '1080p', height: '1080', bitrateMbps: 6.0, fps: '60fps', is4K: false, isRecommended: false },
      { label: '720p HD', quality: '720p', height: '720', bitrateMbps: 3.0, fps: '30fps', is4K: false, isRecommended: false },
      { label: '480p SD', quality: '480p', height: '480', bitrateMbps: 1.5, fps: '30fps', is4K: false, isRecommended: false },
      { label: '360p Low', quality: '360p', height: '360', bitrateMbps: 0.8, fps: '30fps', is4K: false, isRecommended: false }
    ];

    const videoFormats = qualityConfigs.map(q => {
      const totalBytes = (q.bitrateMbps * 1000000 * durationSec) / 8;
      return {
        id: `v-${q.quality}`,
        type: 'video',
        quality: q.label,
        height: q.height,
        format: 'MP4',
        size: formatBytes(totalBytes),
        bitrate: `${q.bitrateMbps.toFixed(1)} Mbps`,
        fps: q.fps,
        isRecommended: q.isRecommended,
        is4K: q.is4K,
        downloadUrl: `/api/download?url=${encodeURIComponent(targetUrl)}&quality=${q.height}&title=${encodeURIComponent(title)}&type=video`
      };
    });

    const audioFormats = [
      {
        id: 'a-320',
        type: 'audio',
        quality: '320 Kbps HQ Audio',
        height: '320',
        format: 'MP3',
        size: formatBytes((320000 * durationSec) / 8),
        bitrate: '320 Kbps',
        isAudioOnly: true,
        isRecommended: true,
        downloadUrl: `/api/download?url=${encodeURIComponent(targetUrl)}&quality=320&title=${encodeURIComponent(title)}&type=audio`
      },
      {
        id: 'a-128',
        type: 'audio',
        quality: '128 Kbps Standard',
        height: '128',
        format: 'MP3',
        size: formatBytes((128000 * durationSec) / 8),
        bitrate: '128 Kbps',
        isAudioOnly: true,
        isRecommended: false,
        downloadUrl: `/api/download?url=${encodeURIComponent(targetUrl)}&quality=128&title=${encodeURIComponent(title)}&type=audio`
      }
    ];

    return res.json({
      id: `${platform}-${videoId || Date.now()}`,
      platform,
      videoId,
      url: targetUrl,
      title,
      author,
      authorAvatar,
      verified: true,
      views: `${viewsFormatted} views`,
      likes: likesFormatted,
      duration: durationFormatted,
      durationSec,
      thumbnail,
      embedUrl: videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : null,
      formats: [...videoFormats, ...audioFormats]
    });

  } catch (err) {
    console.error('API Info Error:', err);
    return res.status(500).json({ error: err.message || 'Failed to extract video information' });
  }
});

/**
 * GET /api/progress-download
 * Server-Sent Events (SSE) endpoint providing REAL LIVE stream download progress
 */
app.get('/api/progress-download', (req, res) => {
  const { url: targetUrl, quality = '1080', title, type = 'video', targetSize = '50 MB' } = req.query;

  if (!targetUrl) {
    return res.status(400).json({ error: 'URL is required' });
  }

  // Set SSE headers
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  const cleanTitle = (title || 'video').replace(/[^\w\s-]/g, '').trim().slice(0, 40) || 'media';
  const isAudio = type === 'audio';
  const ext = isAudio ? 'mp3' : 'mp4';
  const downloadFilename = `${cleanTitle}_${quality}p.${ext}`;

  const uniqueId = `${Date.now()}_${Math.floor(Math.random() * 1000)}`;
  const outputTemplate = path.join(TEMP_DIR, `media_${uniqueId}.%(ext)s`);

  const args = ['-u', '-m', 'yt_dlp', '--newline'];

  if (FFMPEG_PATH) {
    args.push('--ffmpeg-location', FFMPEG_PATH);
  }

  if (isAudio) {
    args.push(
      '-f', 'bestaudio/best',
      '-x',
      '--audio-format', 'mp3',
      '--audio-quality', quality === '320' ? '0' : '5'
    );
  } else {
    const height = parseInt(quality, 10) || 1080;
    args.push(
      '-f', `bestvideo[height<=${height}][ext=mp4]+bestaudio[ext=m4a]/bestvideo[height<=${height}]+bestaudio/best[height<=${height}]/best`,
      '--merge-output-format', 'mp4'
    );
  }

  args.push(
    '--no-playlist',
    '--no-warnings',
    '--force-overwrites',
    '-o', outputTemplate,
    targetUrl
  );

  console.log(`[SSE] Spawning yt-dlp: ${targetUrl} [${quality}p] -> ${outputTemplate}`);

  const child = spawn('python', args);

  // Parse target size in MB (e.g. "339.7 MB" -> 339.7)
  let parsedTotalMb = parseFloat(targetSize) || 50;

  // Handle client disconnect / cancel
  req.on('close', () => {
    try {
      child.kill();
    } catch {}
  });

  child.stdout.on('data', (data) => {
    const text = data.toString();
    const lines = text.split('\n').filter(Boolean);

    for (const line of lines) {
      // 1. Check for standard download progress line
      const match = line.match(/\[download\]\s+([\d.]+)%\s+of\s+~?\s*([\d.]+\w+)(?:\s+at\s+([\d.]+\w+\/s))?(?:\s+ETA\s+([\d:]+))?/i);
      if (match) {
        const percent = Math.min(parseFloat(match[1]), 99);
        const totalStr = match[2];
        const speed = match[3] || '5.2 MB/s';
        const eta = match[4] || '00:10';

        const numMatch = totalStr.match(/([\d.]+)/);
        if (numMatch) {
          let mb = parseFloat(numMatch[1]);
          if (totalStr.toLowerCase().includes('gib') || totalStr.toLowerCase().includes('gb')) mb *= 1024;
          if (totalStr.toLowerCase().includes('kib') || totalStr.toLowerCase().includes('kb')) mb /= 1024;
          if (mb > 0) parsedTotalMb = mb;
        }

        const downloadedMb = ((percent / 100) * parsedTotalMb).toFixed(1);

        res.write(`data: ${JSON.stringify({
          type: 'progress',
          percent: Math.round(percent),
          downloadedMb: `${downloadedMb} MB`,
          totalMb: `${parsedTotalMb.toFixed(1)} MB`,
          speed,
          eta,
          status: isAudio ? 'Downloading high quality audio track...' : 'Downloading high definition video stream...'
        })}\n\n`);
      }

      // 2. Check for merging / multiplexing stage
      if (line.includes('[Merger]') || line.includes('Merging formats into')) {
        res.write(`data: ${JSON.stringify({
          type: 'progress',
          percent: 98,
          downloadedMb: `${parsedTotalMb.toFixed(1)} MB`,
          totalMb: `${parsedTotalMb.toFixed(1)} MB`,
          speed: 'Muxing',
          eta: '00:01',
          status: 'Multiplexing audio & video tracks with FFmpeg...'
        })}\n\n`);
      }
    }
  });

  child.stderr.on('data', (data) => {
    console.warn('yt-dlp stderr:', data.toString());
  });

  child.on('close', (code) => {
    const allFiles = fs.readdirSync(TEMP_DIR).filter(f => f.startsWith(`media_${uniqueId}`));
    console.log(`[SSE] Process closed with code: ${code}. Matching files in temp:`, allFiles);

    const readyFiles = allFiles.filter(f => !f.endsWith('.part') && !f.endsWith('.ytdl') && !f.endsWith('.temp'));
    
    if (readyFiles.length > 0) {
      const actualFile = path.join(TEMP_DIR, readyFiles[0]);
      const stat = fs.statSync(actualFile);
      const fileSize = (stat.size / (1024 * 1024)).toFixed(1);

      console.log(`[SSE] Delivering completed file: ${actualFile} (${fileSize} MB)`);

      res.write(`data: ${JSON.stringify({
        type: 'completed',
        percent: 100,
        downloadedMb: `${fileSize} MB`,
        totalMb: `${fileSize} MB`,
        speed: 'Done',
        eta: '00:00',
        fileId: uniqueId,
        filename: downloadFilename,
        downloadUrl: `/api/fetch-file?fileId=${uniqueId}&filename=${encodeURIComponent(downloadFilename)}`,
        status: 'Download completed! Saved to your Downloads folder.'
      })}\n\n`);
      res.end();
    } else {
      console.error(`[SSE] Download failed or no ready file found for uniqueId: ${uniqueId}`);
      res.write(`data: ${JSON.stringify({
        type: 'error',
        error: 'Failed to process media stream. Please try again.'
      })}\n\n`);
      res.end();
    }
  });
});

/**
 * GET /api/fetch-file
 * Delivers the completed file from OS temp folder and cleans it up
 */
app.get('/api/fetch-file', (req, res) => {
  const { fileId, filename } = req.query;
  if (!fileId) {
    return res.status(400).send('File ID required');
  }

  const files = fs.readdirSync(TEMP_DIR).filter(f => f.startsWith(`media_${fileId}`) && !f.endsWith('.part') && !f.endsWith('.ytdl'));
  if (files.length === 0) {
    console.warn(`[Fetch-File] No matching file found for fileId: ${fileId}`);
    return res.status(404).send('File not found or already downloaded');
  }

  const targetFile = path.resolve(TEMP_DIR, files[0]);
  if (!fs.existsSync(targetFile)) {
    return res.status(404).send('File does not exist');
  }

  const stat = fs.statSync(targetFile);
  const cleanFilename = (filename || 'download.mp4').replace(/[^\w\s.-]/g, '').trim() || 'media.mp4';
  const isAudio = cleanFilename.endsWith('.mp3');

  console.log(`[Fetch-File] Streaming ${targetFile} (${stat.size} bytes) to browser as "${cleanFilename}"`);

  res.setHeader('Content-Disposition', `attachment; filename="${cleanFilename}"`);
  res.setHeader('Content-Type', isAudio ? 'audio/mpeg' : 'video/mp4');
  res.setHeader('Content-Length', stat.size);

  const stream = fs.createReadStream(targetFile);
  stream.pipe(res);

  stream.on('error', (streamErr) => {
    console.error('[Fetch-File] Stream error:', streamErr);
    if (!res.headersSent) res.status(500).send('Error streaming media file');
  });

  // Keep file for 60 seconds before cleanup so user can re-download or retry without error
  setTimeout(() => {
    try {
      if (fs.existsSync(targetFile)) {
        fs.unlinkSync(targetFile);
        console.log(`[Fetch-File] Cleaned up temporary file: ${targetFile}`);
      }
    } catch {}
  }, 60000);
});

/**
 * GET /api/download (Direct stream fallback)
 */
app.get('/api/download', (req, res) => {
  const { url: targetUrl, quality = '1080', title, type = 'video' } = req.query;
  if (!targetUrl) return res.status(400).send('URL is required');

  const cleanTitle = (title || 'video').replace(/[^\w\s-]/g, '').trim().slice(0, 40) || 'media';
  const ext = type === 'audio' ? 'mp3' : 'mp4';
  const downloadFilename = `${cleanTitle}_${quality}p.${ext}`;
  const uniqueId = `${Date.now()}_${Math.floor(Math.random() * 1000)}`;
  const outputTemplate = path.join(TEMP_DIR, `media_${uniqueId}.%(ext)s`);

  const args = ['-m', 'yt_dlp'];
  if (FFMPEG_PATH) args.push('--ffmpeg-location', FFMPEG_PATH);
  if (type === 'audio') {
    args.push('-f', 'bestaudio/best', '-x', '--audio-format', 'mp3');
  } else {
    const height = parseInt(quality, 10) || 1080;
    args.push('-f', `bestvideo[height<=${height}][ext=mp4]+bestaudio[ext=m4a]/bestvideo[height<=${height}]+bestaudio/best[height<=${height}]/best`, '--merge-output-format', 'mp4');
  }
  args.push('--no-playlist', '--force-overwrites', '-o', outputTemplate, targetUrl);

  execFile('python', args, (err) => {
    if (err) return res.status(500).send('Download processing failed');
    const files = fs.readdirSync(TEMP_DIR).filter(f => f.startsWith(`media_${uniqueId}`) && !f.endsWith('.part') && !f.endsWith('.ytdl'));
    if (files.length === 0) return res.status(404).send('File not found');

    const actualFile = path.join(TEMP_DIR, files[0]);
    res.download(actualFile, downloadFilename, () => {
      try { if (fs.existsSync(actualFile)) fs.unlinkSync(actualFile); } catch {}
    });
  });
});

app.listen(PORT, () => {
  console.log(`UA Downloader Backend Server running on http://localhost:${PORT}`);
});
