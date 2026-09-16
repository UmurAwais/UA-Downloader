import React from 'react';
import logoImg from '../assets/logo.jpg';

/**
 * UA Save - Brand Logo & Typography
 */
export default function UALogo({ size = 'large', onClick }) {
  const isSmall = size === 'small';

  return (
    <div 
      onClick={onClick}
      className={`inline-flex items-center select-none ${onClick ? 'cursor-pointer' : ''} transition-transform active:scale-98`}
      style={{
        fontFamily: "'Google Sans', 'Roboto', sans-serif"
      }}
    >
      <div className="flex items-center space-x-1 sm:space-x-1">
        {/* UA Logo Image */}
        <div className="flex items-center">
          <img 
            src={logoImg} 
            alt="UA Logo" 
            className={`object-contain inline-block ${
              isSmall 
                ? 'h-8 sm:h-9 w-auto' 
                : 'h-12 sm:h-12 md:h-12 w-auto'
            }`}
          />
        </div>

        {/* Save Text */}
        <span 
          className={`font-semibold text-[#111827] tracking-tight leading-none ${
            isSmall 
              ? 'text-2xl sm:text-3xl' 
              : 'text-5xl sm:text-4xl md:text-4xl'
          }`}
        >
          Save
        </span>
      </div>
    </div>
  );
}
