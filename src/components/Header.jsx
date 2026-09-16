import React from 'react';
import { History } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

export default function Header({ 
  onSelectPlatform,
  onReset,
  onOpenHistory,
  historyCount = 0
}) {
  return (
    <header className="w-full flex items-center justify-between md:grid md:grid-cols-3 px-4 sm:px-8 py-3.5 border-b border-[#DADCE0] bg-white text-sm">
      {/* Left Column: Mobile Logo / Desktop Platform Links */}
      <div className="flex items-center justify-start">
        {/* Mobile Brand Logo */}
        <button 
          type="button"
          onClick={onReset}
          className="md:hidden text-[#1F1F1F] flex items-center space-x-1 cursor-pointer group select-none"
        >
          <img 
            src={logoImg} 
            alt="UA Logo" 
            className="h-7 w-auto object-contain" 
          />
          <span className="font-semibold text-xl text-[#111827] tracking-tight leading-none">
            Save
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-3 lg:space-x-5 text-xs font-medium text-[#5F6368]">
          <button 
            type="button"
            onClick={() => onSelectPlatform('youtube')}
            className="hover:text-[#1F1F1F] hover:bg-[#F0F4F9] px-2.5 py-1 rounded-full transition-colors cursor-pointer"
          >
            YouTube
          </button>
          <button 
            type="button"
            onClick={() => onSelectPlatform('instagram')}
            className="hover:text-[#1F1F1F] hover:bg-[#F0F4F9] px-2.5 py-1 rounded-full transition-colors cursor-pointer"
          >
            Instagram
          </button>
          <button 
            type="button"
            onClick={() => onSelectPlatform('tiktok')}
            className="hover:text-[#1F1F1F] hover:bg-[#F0F4F9] px-2.5 py-1 rounded-full transition-colors cursor-pointer"
          >
            TikTok
          </button>
          <button 
            type="button"
            onClick={() => onSelectPlatform('facebook')}
            className="hover:text-[#1F1F1F] hover:bg-[#F0F4F9] px-2.5 py-1 rounded-full transition-colors cursor-pointer"
          >
            Facebook
          </button>
        </nav>
      </div>

      {/* Center Column: UA Save Logo on Desktop */}
      <div className="hidden md:flex items-center justify-center">
        <button 
          type="button"
          onClick={onReset}
          className="text-[#1F1F1F] flex items-center space-x-1 transition-transform hover:opacity-90 active:scale-98 cursor-pointer group select-none"
        >
          <img 
            src={logoImg} 
            alt="UA Logo" 
            className="h-8 w-auto object-contain" 
          />
          <span className="font-semibold text-2xl text-[#111827] tracking-tight leading-none">
            Save
          </span>
        </button>
      </div>

      {/* Right Column: History Button */}
      <div className="flex items-center justify-end">
        {onOpenHistory && (
          <button
            type="button"
            onClick={onOpenHistory}
            className="flex items-center space-x-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-medium text-[#444746] hover:text-[#1F1F1F] hover:bg-[#F0F4F9] border border-[#DADCE0] transition-colors cursor-pointer shrink-0"
            title="View Download History"
          >
            <History className="w-3.5 h-3.5 text-[#0B57D0]" />
            <span>History</span>
            {historyCount > 0 && (
              <span className="ml-1 px-1.5 py-0.2 rounded-full bg-[#D3E3FD] text-[#041E49] text-[10px] font-bold">
                {historyCount}
              </span>
            )}
          </button>
        )}
      </div>
    </header>
  );
}
