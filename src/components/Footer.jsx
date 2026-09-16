import React, { useState } from 'react';
import { Globe, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const [modalContent, setModalContent] = useState(null);

  const openInfo = (title, text) => {
    setModalContent({ title, text });
  };

  return (
    <>
      <footer className="w-full bg-[#F8F9FA] text-[#5F6368] text-xs border-t border-[#DADCE0] mt-auto">
        {/* Upper footer line */}
        <div className="px-6 py-3 border-b border-[#DADCE0] flex items-center justify-between flex-wrap gap-2 text-xs">
          <div className="flex items-center space-x-2">
            <Globe className="w-3.5 h-3.5 text-[#5F6368]" />
            <span>Worldwide • Fast & Free Video Downloader</span>
          </div>
          <div className="flex items-center space-x-2 text-[11px] text-[#146C2E] font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>100% Safe, No Ads, No Registration</span>
          </div>
        </div>

        {/* Lower footer links */}
        <div className="px-6 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          {/* Left links */}
          <div className="flex items-center space-x-5 flex-wrap gap-y-2">
            <button 
              type="button"
              onClick={() => openInfo('About UA Downloader', 'UA Downloader is a high-speed, lightweight media utility designed to fetch and convert high definition video and audio from YouTube, Facebook, Instagram, and TikTok with zero clutter.')}
              className="hover:underline hover:text-[#1F1F1F] transition-colors cursor-pointer"
            >
              About
            </button>
            <button 
              type="button"
              onClick={() => openInfo('How it Works', '1. Copy any video URL from YouTube, Instagram, TikTok, or Facebook.\n2. Paste it into the search bar.\n3. Choose your desired resolution (4K, 1080p, 720p, MP3 Audio).\n4. Click Download to save the file directly to your device.')}
              className="hover:underline hover:text-[#1F1F1F] transition-colors cursor-pointer"
            >
              How it works
            </button>
            <button 
              type="button"
              onClick={() => openInfo('Supported Platforms', '• YouTube (4K, 2K, 1080p, 720p, Shorts, Audio MP3)\n• Instagram (Reels, Feed Videos, Audio)\n• TikTok (HD 1080p No-Watermark, Sounds)\n• Facebook (Watch, Public Videos, Reels)')}
              className="hover:underline hover:text-[#1F1F1F] transition-colors cursor-pointer"
            >
              Supported Platforms
            </button>
          </div>

          {/* Right links */}
          <div className="flex items-center space-x-5 flex-wrap gap-y-2">
            <button 
              type="button"
              onClick={() => openInfo('Privacy Policy', 'We do not store your downloads, personal files, or browsing history on our servers. All downloads are fetched securely and processed for personal use.')}
              className="hover:underline hover:text-[#1F1F1F] transition-colors cursor-pointer"
            >
              Privacy
            </button>
            <button 
              type="button"
              onClick={() => openInfo('Terms of Service', 'This tool is provided for personal and educational use. Please respect copyright laws and the terms of service of respective content creators.')}
              className="hover:underline hover:text-[#1F1F1F] transition-colors cursor-pointer"
            >
              Terms
            </button>
            <button 
              type="button"
              onClick={() => openInfo('Legal Disclaimer', 'UA Downloader is an independent utility and is not affiliated with, endorsed by, or sponsored by YouTube, Meta, Instagram, TikTok, or Google.')}
              className="hover:underline hover:text-[#1F1F1F] transition-colors cursor-pointer"
            >
              Disclaimer
            </button>
          </div>
        </div>
      </footer>

      {/* Info Dialog */}
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 p-4 animate-in fade-in">
          <div className="bg-white rounded-[28px] max-w-md w-full p-6 sm:p-7 shadow-[0_24px_48px_rgba(0,0,0,0.14)] border border-[#DADCE0]">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8EAED]">
              <h3 className="text-base font-medium text-[#1F1F1F]">
                {modalContent.title}
              </h3>
              <button 
                type="button"
                onClick={() => setModalContent(null)}
                className="text-[#5F6368] hover:text-[#1F1F1F] p-1 rounded-full hover:bg-[#F0F4F9] transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>
            
            <div className="mt-4 text-xs sm:text-sm text-[#444746] leading-relaxed whitespace-pre-line font-normal">
              {modalContent.text}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setModalContent(null)}
                className="px-6 py-2.5 text-sm font-medium bg-[#0B57D0] hover:bg-[#0842A0] text-white rounded-full transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
