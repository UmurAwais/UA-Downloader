import React from 'react';
import { Globe, ShieldCheck, Copyright } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#F8F9FA] text-[#5F6368] text-xs border-t border-[#DADCE0] mt-auto select-none">
      <div className="px-6 py-3.5 grid grid-cols-1 md:grid-cols-3 items-center gap-3 text-xs w-full">
        {/* Left item */}
        <div className="flex items-center space-x-2 justify-center md:justify-start">
          <Globe className="w-3.5 h-3.5 text-[#5F6368] shrink-0" />
          <span>Worldwide • Fast & Free Video Downloader</span>
        </div>

        {/* Center item - Copyright */}
        <div className="flex items-center justify-center gap-0.5 text-center text-[#5F6368] text-xs my-0.5 md:my-0">
          <Copyright className="w-2.5 h-2.5 text-[#5F6368] shrink-0" />
          <span>
            {new Date().getFullYear()} <span className="font-medium text-[#1F1F1F]">UA Save</span> by{' '}
            <a 
              href="https://worcco.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-medium text-[#1F1F1F] hover:text-[#0B57D0] hover:underline transition-colors"
            >
              Worcco
            </a>
          </span>
        </div>

        {/* Right item */}
        <div className="flex items-center space-x-2 justify-center md:justify-end text-[11px] text-[#146C2E] font-medium">
          <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
          <span>100% Safe, No Ads, No Registration</span>
        </div>
      </div>
    </footer>
  );
}
