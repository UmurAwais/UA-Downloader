import React from 'react';
import logoImg from '../assets/logo.jpg';

/**
 * UA Downloader - Center Brand Logo & Typography
 */
export default function GoogleLogo({ size = 'large', onClick }) {
  const isSmall = size === 'small';

  return (
    <div 
      onClick={onClick}
      className={`inline-flex items-center select-none ${onClick ? 'cursor-pointer' : ''} transition-transform active:scale-98`}
      style={{
        fontFamily: "'Google Sans', 'Roboto', sans-serif"
      }}
    >
      <div className="flex items-center space-x-2 sm:space-x-3.5">
        {/* UA Logo Image */}
        <div className="flex items-center">
          <img 
            src={logoImg} 
            alt="UA Logo" 
            className={`object-contain inline-block ${
              isSmall 
                ? 'h-6 sm:h-7 w-auto' 
                : 'h-10 sm:h-12 md:h-11 w-auto'
            }`}
          />
        </div>

        {/* Downloader Text in Black matching Header */}
        <span 
          className={`font-medium text-[#1F1F1F] tracking-tight ${
            isSmall 
              ? 'text-xl sm:text-2xl' 
              : 'text-4xl sm:text-5xl md:text-6xl'
          }`}
        >
          Downloader
        </span>
      </div>
    </div>
  );
}
