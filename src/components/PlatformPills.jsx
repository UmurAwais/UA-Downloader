import React from 'react';
import { YouTubeIcon, FacebookIcon, InstagramIcon, TikTokIcon } from './PlatformIcons';

export default function PlatformPills({ activePlatform, onSelectPlatform }) {
  const platforms = [
    { id: 'youtube', name: 'YouTube', icon: <YouTubeIcon className="w-4 h-4" />, count: '4K/1080p' },
    { id: 'instagram', name: 'Instagram', icon: <InstagramIcon className="w-4 h-4" />, count: 'Reels' },
    { id: 'tiktok', name: 'TikTok', icon: <TikTokIcon className="w-4 h-4" />, count: 'No WM' },
    { id: 'facebook', name: 'Facebook', icon: <FacebookIcon className="w-4 h-4" />, count: 'HD Video' },
  ];

  return (
    <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-2.5 my-6 max-w-xl mx-auto px-2">
      {platforms.map((p) => {
        const isActive = activePlatform === p.id;
        return (
          <button
            key={p.id}
            onClick={() => onSelectPlatform(p.id)}
            className={`google-pill inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all duration-150 ${
              isActive ? 'active ring-2 ring-blue-500/20' : 'text-gray-600'
            }`}
          >
            <span className="shrink-0">{p.icon}</span>
            <span>{p.name}</span>
            {p.count && (
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-normal ${
                isActive 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'bg-gray-100 text-gray-500'
              }`}>
                {p.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
