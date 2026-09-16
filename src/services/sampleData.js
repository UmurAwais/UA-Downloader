/**
 * Rich Sample and Preset Data for YouTube, Facebook, Instagram, and TikTok
 */

export const SAMPLE_VIDEOS = {
  youtube: {
    id: 'yt-sample-1',
    platform: 'youtube',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    title: 'Rick Astley - Never Gonna Give You Up (Official Music Video 4K Remaster)',
    author: 'Rick Astley',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    verified: true,
    views: '1,582,931,204',
    likes: '17.4M',
    uploadDate: 'Oct 25, 2009',
    duration: '3:33',
    durationSec: 213,
    thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80',
    previewUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    formats: [
      { id: 'v-4k', type: 'video', quality: '4K Ultra HD (2160p)', format: 'MP4', size: '148.6 MB', bitrate: '18.5 Mbps', fps: '60fps', isRecommended: true, is4K: true, streamUrl: '' },
      { id: 'v-2k', type: 'video', quality: '2K Quad HD (1440p)', format: 'MP4', size: '84.2 MB', bitrate: '10.2 Mbps', fps: '60fps', isRecommended: false, is4K: false, streamUrl: '' },
      { id: 'v-1080', type: 'video', quality: '1080p Full HD', format: 'MP4', size: '54.2 MB', bitrate: '6.4 Mbps', fps: '60fps', isRecommended: false, streamUrl: '' },
      { id: 'v-720', type: 'video', quality: '720p HD', format: 'MP4', size: '28.6 MB', bitrate: '3.2 Mbps', fps: '30fps', isRecommended: false, streamUrl: '' },
      { id: 'v-480', type: 'video', quality: '480p SD', format: 'MP4', size: '14.1 MB', bitrate: '1.5 Mbps', fps: '30fps', isRecommended: false, streamUrl: '' },
      { id: 'v-360', type: 'video', quality: '360p Low', format: 'MP4', size: '8.4 MB', bitrate: '800 Kbps', fps: '30fps', isRecommended: false, streamUrl: '' },
      { id: 'a-320', type: 'audio', quality: '320 Kbps HQ Audio', format: 'MP3', size: '8.1 MB', bitrate: '320 Kbps', isAudioOnly: true, isRecommended: true, streamUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
      { id: 'a-128', type: 'audio', quality: '128 Kbps Standard', format: 'MP3', size: '3.4 MB', bitrate: '128 Kbps', isAudioOnly: true, isRecommended: false, streamUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' }
    ]
  },
  instagram: {
    id: 'ig-sample-1',
    platform: 'instagram',
    url: 'https://www.instagram.com/reel/C3b4XyzA123/',
    title: 'Mind-Blowing Nature Cinematography • Swiss Alps 4K Drone Reel',
    author: 'earth.wonders',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    verified: true,
    views: '4,892,100',
    likes: '642.5K',
    uploadDate: '3 days ago',
    duration: '0:45',
    durationSec: 45,
    thumbnail: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=80',
    previewUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    formats: [
      { id: 'v-4k', type: 'video', quality: '4K Ultra HD (2160p)', format: 'MP4', size: '42.8 MB', bitrate: '16.0 Mbps', fps: '60fps', isRecommended: true, is4K: true, streamUrl: '' },
      { id: 'v-1080', type: 'video', quality: '1080p HD Reel', format: 'MP4', size: '18.4 MB', bitrate: '5.2 Mbps', fps: '60fps', isRecommended: false, streamUrl: '' },
      { id: 'v-720', type: 'video', quality: '720p HD', format: 'MP4', size: '9.8 MB', bitrate: '2.8 Mbps', fps: '30fps', isRecommended: false, streamUrl: '' },
      { id: 'a-320', type: 'audio', quality: 'Original Audio (HQ)', format: 'MP3', size: '1.8 MB', bitrate: '320 Kbps', isAudioOnly: true, isRecommended: false, streamUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' }
    ]
  },
  tiktok: {
    id: 'tt-sample-1',
    platform: 'tiktok',
    url: 'https://www.tiktok.com/@creativehacks/video/732891823910283',
    title: 'Top 5 Tech Productivity Setups that Feel Illegal to Know! 🔥🚀',
    author: '@creativehacks',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    verified: true,
    views: '8,210,400',
    likes: '1.2M',
    uploadDate: '1 week ago',
    duration: '0:58',
    durationSec: 58,
    thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80',
    previewUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    formats: [
      { id: 'v-4k-nowm', type: 'video', quality: '4K Ultra HD (No Watermark)', format: 'MP4', size: '36.5 MB', bitrate: '15.0 Mbps', fps: '60fps', isRecommended: true, is4K: true, streamUrl: '' },
      { id: 'v-hd-nowm', type: 'video', quality: '1080p Full HD (No Watermark)', format: 'MP4', size: '14.6 MB', bitrate: '4.8 Mbps', fps: '60fps', isRecommended: false, streamUrl: '' },
      { id: 'v-hd-wm', type: 'video', quality: '720p (With Watermark)', format: 'MP4', size: '8.2 MB', bitrate: '2.4 Mbps', fps: '30fps', isRecommended: false, streamUrl: '' },
      { id: 'a-320', type: 'audio', quality: 'TikTok Trending Sound (MP3)', format: 'MP3', size: '2.1 MB', bitrate: '320 Kbps', isAudioOnly: true, isRecommended: false, streamUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' }
    ]
  },
  facebook: {
    id: 'fb-sample-1',
    platform: 'facebook',
    url: 'https://www.facebook.com/watch/?v=9876543210',
    title: 'Incredible Innovation: Autonomous Electric Supercar Deep Dive ⚡',
    author: 'Future Tech Global',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    verified: true,
    views: '3,450,000',
    likes: '290K',
    uploadDate: 'May 12, 2024',
    duration: '4:18',
    durationSec: 258,
    thumbnail: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80',
    previewUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    formats: [
      { id: 'v-4k', type: 'video', quality: '4K Ultra HD (2160p)', format: 'MP4', size: '154.2 MB', bitrate: '18.0 Mbps', fps: '60fps', isRecommended: true, is4K: true, streamUrl: '' },
      { id: 'v-1080', type: 'video', quality: '1080p Full HD', format: 'MP4', size: '62.4 MB', bitrate: '6.0 Mbps', fps: '60fps', isRecommended: false, streamUrl: '' },
      { id: 'v-720', type: 'video', quality: '720p HD', format: 'MP4', size: '32.1 MB', bitrate: '3.0 Mbps', fps: '30fps', isRecommended: false, streamUrl: '' },
      { id: 'v-480', type: 'video', quality: '480p SD', format: 'MP4', size: '16.5 MB', bitrate: '1.5 Mbps', fps: '30fps', isRecommended: false, streamUrl: '' },
      { id: 'a-320', type: 'audio', quality: 'High Quality MP3', format: 'MP3', size: '9.8 MB', bitrate: '320 Kbps', isAudioOnly: true, isRecommended: false, streamUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' }
    ]
  }
};

/**
 * Returns a list of all sample video objects
 */
export function getAllSampleVideos() {
  return Object.values(SAMPLE_VIDEOS);
}

/**
 * Gets a random sample video for "I'm Feeling Lucky"
 */
export function getRandomSampleVideo() {
  const samples = getAllSampleVideos();
  const randomIndex = Math.floor(Math.random() * samples.length);
  return samples[randomIndex];
}
