import React from 'react';
import { YouTubeIcon, FacebookIcon, InstagramIcon, TikTokIcon } from './PlatformIcons';

export default function PlatformPills({ activePlatform, onSelectPlatform }) {
  const platforms = [
    { id: 'youtube', name: 'YouTube', icon: <YouTubeIcon className="w-4 h-4" /> },
    { id: 'instagram', name: 'Instagram', icon: <InstagramIcon className="w-4 h-4" /> },
    { id: 'tiktok', name: 'TikTok', icon: <TikTokIcon className="w-4 h-4 text-black" /> },
    { id: 'facebook', name: 'Facebook', icon: <FacebookIcon className="w-4 h-4" /> },
  ];

  return (
    <div className="flex items-center justify-center space-x-2 sm:space-x-3 my-5 max-w-2xl mx-auto px-2 flex-wrap sm:flex-nowrap gap-y-2">
      {platforms.map((p) => {
        const isActive = activePlatform === p.id;
        return (
          <button
            key={p.id}
            type="button"
            onClick={() => onSelectPlatform(p.id)}
            className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-medium cursor-pointer transition-all ${
              isActive 
                ? 'bg-[#E8F0FE] text-[#1A73E8] border border-[#1A73E8] font-semibold shadow-sm ring-2 ring-[#1A73E8]/20' 
                : 'bg-[#F8F9FA] hover:bg-[#F1F3F4] text-[#3C4043] border border-[#DADCE0] hover:border-[#BEC1C5] shadow-[0_1px_2px_rgba(0,0,0,0.04)]'
            }`}
          >
            <span className="shrink-0">{p.icon}</span>
            <span>{p.name}</span>
          </button>
        );
      })}
    </div>
  );
}
