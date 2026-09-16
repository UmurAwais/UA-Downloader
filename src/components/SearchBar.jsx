import React, { useState, useRef } from 'react';
import { Search, Clipboard, X, ArrowRight, Loader2 } from 'lucide-react';
import { detectPlatform, PLATFORMS, PLATFORM_INFO } from '../utils/urlDetector';
import { PlatformIcon } from './PlatformIcons';

export default function SearchBar({
  url,
  setUrl,
  onSearch,
  isLoading,
  selectedPlatform
}) {
  const [pasteSuccess, setPasteSuccess] = useState(false);
  const inputRef = useRef(null);

  const { platform, info, isValid } = detectPlatform(url);
  const activeInfo = (!url && selectedPlatform && PLATFORM_INFO[selectedPlatform]) 
    ? PLATFORM_INFO[selectedPlatform] 
    : info;

  // Handle Clipboard Paste
  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setUrl(text.trim());
        setPasteSuccess(true);
        setTimeout(() => setPasteSuccess(false), 2000);
        inputRef.current?.focus();
      }
    } catch {
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSearch();
    } else if (e.key === 'Escape') {
      setUrl('');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Search Input Container */}
      <div className="relative flex items-center w-full min-h-[58px] sm:min-h-[62px] px-5 sm:px-6 rounded-full transition-all duration-200 google-search-bar focus-within:ring-2 focus-within:ring-blue-500/20 shadow-xs">
        {/* Left Icon (Platform badge or Search icon) */}
        <div className="flex items-center justify-center mr-3.5 shrink-0">
          {isValid && platform !== PLATFORMS.UNKNOWN ? (
            <PlatformIcon platform={platform} className="w-5 h-5 sm:w-6 sm:h-6 transition-transform scale-110" />
          ) : (
            <Search className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
          )}
        </div>

        {/* Input */}
        <input
          ref={inputRef}
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={activeInfo.placeholder || 'Paste YouTube, Facebook, Instagram, or TikTok link here...'}
          className="w-full py-3.5 bg-transparent text-gray-900 text-sm sm:text-base outline-none placeholder:text-gray-400 font-normal"
          autoComplete="off"
          spellCheck="false"
        />

        {/* Right Tools: Clear, Paste, Submit */}
        <div className="flex items-center space-x-2 shrink-0 ml-2">

          {/* Clear Button */}
          {url && (
            <button
              onClick={() => {
                setUrl('');
                inputRef.current?.focus();
              }}
              className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
              title="Clear text"
              aria-label="Clear input"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          )}

          {/* Paste Button */}
          {!url && (
            <button
              onClick={handlePaste}
              className={`flex items-center space-x-1.5 px-3.5 py-1.5 text-xs font-medium rounded-full border transition-all cursor-pointer ${
                pasteSuccess
                  ? 'bg-green-50 text-green-700 border-green-300'
                  : 'text-gray-600 hover:text-blue-600 bg-gray-50 border-gray-200 hover:border-blue-300 hover:bg-gray-100'
              }`}
              title="Paste link from clipboard"
            >
              <Clipboard className="w-3.5 h-3.5" />
              <span>{pasteSuccess ? 'Pasted!' : 'Paste'}</span>
            </button>
          )}

          {/* Action Download / Submit Button right inside the search bar */}
          {url.trim() && (
            <button
              onClick={() => onSearch()}
              disabled={isLoading}
              className="flex items-center justify-center p-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xs transition-transform active:scale-95 disabled:opacity-50 cursor-pointer"
              title="Download / Fetch Video"
              aria-label="Download"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
              ) : (
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
