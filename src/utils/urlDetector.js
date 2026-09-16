/**
 * URL Detector and Validator for Video Platforms
 * Supports YouTube, Facebook, Instagram, and TikTok
 */

export const PLATFORMS = {
  YOUTUBE: 'youtube',
  FACEBOOK: 'facebook',
  INSTAGRAM: 'instagram',
  TIKTOK: 'tiktok',
  UNKNOWN: 'unknown'
};

export const PLATFORM_INFO = {
  [PLATFORMS.YOUTUBE]: {
    id: 'youtube',
    name: 'YouTube',
    color: '#FF0000',
    bgColor: 'rgba(255, 0, 0, 0.1)',
    textColor: '#FF0000',
    placeholder: 'Paste YouTube link here...'
  },
  [PLATFORMS.FACEBOOK]: {
    id: 'facebook',
    name: 'Facebook',
    color: '#1877F2',
    bgColor: 'rgba(24, 119, 242, 0.1)',
    textColor: '#1877F2',
    placeholder: 'Paste Facebook video or reel link here...'
  },
  [PLATFORMS.INSTAGRAM]: {
    id: 'instagram',
    name: 'Instagram',
    color: '#E4405F',
    bgColor: 'rgba(228, 64, 95, 0.1)',
    textColor: '#E4405F',
    placeholder: 'Paste Instagram reel or post link here...'
  },
  [PLATFORMS.TIKTOK]: {
    id: 'tiktok',
    name: 'TikTok',
    color: '#00F2FE',
    bgColor: 'rgba(0, 242, 254, 0.1)',
    textColor: '#000000',
    placeholder: 'Paste TikTok video link here...'
  },
  [PLATFORMS.UNKNOWN]: {
    id: 'unknown',
    name: 'Auto Detect',
    color: '#4285F4',
    bgColor: 'rgba(66, 133, 244, 0.1)',
    textColor: '#4285F4',
    placeholder: 'Paste YouTube, Facebook, Instagram, or TikTok link here...'
  }
};

/**
 * Detects the platform from a URL
 * @param {string} url 
 * @returns {object} Platform details
 */
export function detectPlatform(url) {
  if (!url || typeof url !== 'string') {
    return { platform: PLATFORMS.UNKNOWN, info: PLATFORM_INFO[PLATFORMS.UNKNOWN], isValid: false };
  }

  const cleanUrl = url.trim();

  // YouTube matchers
  const ytRegex = /^(https?:\/\/)?(www\.|m\.|music\.)?(youtube\.com\/(watch\?v=|shorts\/|v\/|embed\/)|youtu\.be\/)([\w-]{11})([^\s]*)$/i;
  if (ytRegex.test(cleanUrl) || cleanUrl.includes('youtube.com') || cleanUrl.includes('youtu.be')) {
    const match = cleanUrl.match(/(?:watch\?v=|shorts\/|youtu\.be\/)([\w-]{11})/i);
    return {
      platform: PLATFORMS.YOUTUBE,
      info: PLATFORM_INFO[PLATFORMS.YOUTUBE],
      isValid: true,
      videoId: match ? match[1] : null
    };
  }

  // Instagram matchers
  const igRegex = /^(https?:\/\/)?(www\.)?instagram\.com\/(p|reel|tv|stories)\/([\w-]+)/i;
  if (igRegex.test(cleanUrl) || cleanUrl.includes('instagram.com') || cleanUrl.includes('instagr.am')) {
    const match = cleanUrl.match(/instagram\.com\/(p|reel|tv|stories)\/([\w-]+)/i);
    return {
      platform: PLATFORMS.INSTAGRAM,
      info: PLATFORM_INFO[PLATFORMS.INSTAGRAM],
      isValid: true,
      mediaType: match ? match[1] : 'reel',
      videoId: match ? match[2] : null
    };
  }

  // TikTok matchers
  const ttRegex = /^(https?:\/\/)?((www|vt|vm|t)\.)?tiktok\.com\/(@[\w.-]+\/video\/\d+|[\w-]+)/i;
  if (ttRegex.test(cleanUrl) || cleanUrl.includes('tiktok.com')) {
    return {
      platform: PLATFORMS.TIKTOK,
      info: PLATFORM_INFO[PLATFORMS.TIKTOK],
      isValid: true
    };
  }

  // Facebook matchers
  const fbRegex = /^(https?:\/\/)?(www\.|m\.|web\.)?(facebook\.com|fb\.watch|fb\.gg)\/(watch\/\?v=\d+|reel\/\d+|.*\/videos\/\d+|[\w.-]+)/i;
  if (fbRegex.test(cleanUrl) || cleanUrl.includes('facebook.com') || cleanUrl.includes('fb.watch')) {
    return {
      platform: PLATFORMS.FACEBOOK,
      info: PLATFORM_INFO[PLATFORMS.FACEBOOK],
      isValid: true
    };
  }

  // Generic valid URL check
  try {
    const parsed = new URL(cleanUrl);
    if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
      return { platform: PLATFORMS.UNKNOWN, info: PLATFORM_INFO[PLATFORMS.UNKNOWN], isValid: true };
    }
  } catch {
    // not a valid url
  }

  return { platform: PLATFORMS.UNKNOWN, info: PLATFORM_INFO[PLATFORMS.UNKNOWN], isValid: false };
}
