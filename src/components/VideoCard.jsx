import React, { useState } from 'react';
import { 
  Play, 
  Download, 
  Film, 
  Music, 
  CheckCircle2, 
  Eye, 
  Heart, 
  Clock, 
  Share2, 
  ExternalLink, 
  Check
} from 'lucide-react';
import { PlatformIcon } from './PlatformIcons';

export default function VideoCard({ video, onDownload }) {
  const [activeTab, setActiveTab] = useState('video'); // 'video' | 'audio'
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);
  const [copied, setCopied] = useState(false);
  const [thumbSrc, setThumbSrc] = useState(video?.thumbnail);

  // Reset player and update thumbnail when video changes
  React.useEffect(() => {
    setIsPlayingPreview(false);
    setThumbSrc(video?.thumbnail);
  }, [video?.id, video?.url, video?.thumbnail]);

  if (!video) return null;

  const videoFormats = video.formats?.filter(f => f.type === 'video') || [];
  const audioFormats = video.formats?.filter(f => f.type === 'audio') || [];

  const displayedFormats = activeTab === 'video' ? videoFormats : audioFormats;
  const bestVideoFormat = videoFormats.find(f => f.isRecommended) || videoFormats[0];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(video.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-6 bg-white rounded-[28px] border border-[#DADCE0] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-200">
      
      {/* Google Material Top Header Bar */}
      <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 bg-[#F8F9FA] border-b border-[#E8EAED] text-xs">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white border border-[#DADCE0] text-[#3C4043] font-medium shadow-2xs">
            <PlatformIcon platform={video.platform} className="w-4 h-4 shrink-0" />
            <span className="capitalize text-xs">{video.platform}</span>
          </div>

          <span className="hidden sm:inline-flex items-center space-x-1.5 text-[#146C2E] bg-[#C4EED0]/50 px-3 py-0.5 rounded-full text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#146C2E] animate-pulse"></span>
            <span>Ready to download</span>
          </span>
        </div>

        <div className="flex items-center space-x-1 sm:space-x-2">
          <button
            type="button"
            onClick={handleCopyLink}
            className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-[#444746] hover:text-[#1F1F1F] hover:bg-[#F0F4F9] transition-colors cursor-pointer text-xs font-medium"
            title="Copy Source Link"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#146C2E]" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Share'}</span>
          </button>
          
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-[#444746] hover:text-[#1F1F1F] hover:bg-[#F0F4F9] transition-colors cursor-pointer text-xs font-medium"
            title="Open Original Link"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Open</span>
          </a>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6 sm:p-7 flex flex-col space-y-6">
        
        {/* Title & Creator Header */}
        <div>
          <h2 className="text-lg sm:text-xl font-normal text-[#1F1F1F] leading-snug">
            {video.title}
          </h2>
          
          {/* Metadata Row */}
          <div className="flex items-center space-x-4 mt-2 text-xs text-[#444746] flex-wrap gap-y-1.5">
            <div className="flex items-center space-x-2">
              {video.authorAvatar && (
                <img
                  src={video.authorAvatar}
                  alt={video.author}
                  className="w-4.5 h-4.5 rounded-full object-cover border border-[#E0E2EC]"
                />
              )}
              <span className="font-medium text-[#1F1F1F]">
                {video.author}
              </span>
              {video.verified && (
                <CheckCircle2 className="w-3.5 h-3.5 fill-[#0B57D0] text-white" />
              )}
            </div>

            {video.views && (
              <div className="flex items-center space-x-1">
                <Eye className="w-3.5 h-3.5 text-[#444746]" />
                <span>{video.views}</span>
              </div>
            )}

            {video.likes && (
              <div className="flex items-center space-x-1">
                <Heart className="w-3.5 h-3.5 text-[#B3261E]" />
                <span>{video.likes}</span>
              </div>
            )}

            {video.duration && (
              <div className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-[#444746]" />
                <span>{video.duration}</span>
              </div>
            )}
          </div>
        </div>

        {/* Media & Formats Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Left: Thumbnail Player & Quick Download */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col space-y-3">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-inner group">
              {isPlayingPreview ? (
                video.embedUrl ? (
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={video.previewUrl || videoFormats[0]?.streamUrl}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                )
              ) : (
                <>
                  <img
                    src={thumbSrc || video.thumbnail}
                    alt={video.title}
                    onError={() => {
                      if (video.videoId) {
                        setThumbSrc(`https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`);
                      }
                    }}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                  
                  {/* Play Overlay Button */}
                  <button
                    type="button"
                    onClick={() => setIsPlayingPreview(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/35 transition-colors cursor-pointer"
                    aria-label="Play video preview"
                  >
                    <div className="w-12 h-12 rounded-full bg-white text-[#0B57D0] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 ml-0.5 fill-current" />
                    </div>
                  </button>

                  {/* Duration Tag */}
                  {video.duration && (
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-black/80 text-white text-[11px] font-medium backdrop-blur-xs flex items-center space-x-1">
                      <Clock className="w-2.5 h-2.5" />
                      <span>{video.duration}</span>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Quick Best Quality Action Button */}
            {bestVideoFormat && (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  onDownload(video, bestVideoFormat);
                }}
                className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-full bg-[#0B57D0] hover:bg-[#0842A0] active:scale-[0.99] text-white text-xs font-medium shadow-xs hover:shadow transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Quick Download ({bestVideoFormat.quality.split(' ')[0]})</span>
              </button>
            )}
          </div>

          {/* Right: Google Material Format Selector & Table */}
          <div className="md:col-span-7 lg:col-span-8 flex flex-col space-y-3.5">
            
            {/* Google Material Filter Chips (Tabs) */}
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => setActiveTab('video')}
                className={`flex items-center space-x-1.5 px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  activeTab === 'video'
                    ? 'bg-[#D3E3FD] text-[#041E49] font-medium'
                    : 'bg-white text-[#444746] hover:bg-[#F0F4F9] border border-[#DADCE0]'
                }`}
              >
                <Film className="w-3.5 h-3.5" />
                <span>Video MP4</span>
                <span className="ml-1 text-[11px] opacity-75">({videoFormats.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('audio')}
                className={`flex items-center space-x-1.5 px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  activeTab === 'audio'
                    ? 'bg-[#D3E3FD] text-[#041E49] font-medium'
                    : 'bg-white text-[#444746] hover:bg-[#F0F4F9] border border-[#DADCE0]'
                }`}
              >
                <Music className="w-3.5 h-3.5" />
                <span>Audio MP3</span>
                <span className="ml-1 text-[11px] opacity-75">({audioFormats.length})</span>
              </button>
            </div>

            {/* Google Material Table */}
            <div className="rounded-2xl border border-[#DADCE0] bg-white overflow-hidden">
              
              {/* Column Headers */}
              <div className="grid grid-cols-12 px-4 py-2.5 bg-[#F8F9FA] border-b border-[#E8EAED] text-xs font-medium text-[#444746]">
                <div className="col-span-6">Resolution / Quality</div>
                <div className="col-span-3 text-right">Size</div>
                <div className="col-span-3 text-right">Action</div>
              </div>

              {/* Rows List */}
              <div className="divide-y divide-[#F1F3F4] max-h-64 sm:max-h-72 overflow-y-auto">
                {displayedFormats.map((format) => {
                  const is4k = format.is4K || format.quality.includes('4K');
                  const is2k = format.quality.includes('2K');

                  return (
                    <div
                      key={format.id}
                      className="grid grid-cols-12 items-center px-4 py-3 hover:bg-[#F8F9FA] transition-colors"
                    >
                      {/* Left: Quality & Badges */}
                      <div className="col-span-6 pr-2">
                        <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                          <span className="text-xs sm:text-sm font-medium text-[#1F1F1F]">
                            {format.quality}
                          </span>
                          
                          {is4k && (
                            <span className="px-2 py-0.2 text-[10px] font-bold rounded-full bg-[#E8DEF8] text-[#1D192B] uppercase">
                              4K
                            </span>
                          )}

                          {is2k && (
                            <span className="px-2 py-0.2 text-[10px] font-bold rounded-full bg-indigo-100 text-indigo-800 uppercase">
                              2K
                            </span>
                          )}

                          {format.isRecommended && (
                            <span className="px-2 py-0.2 text-[10px] font-medium rounded-full bg-[#C4EED0]/60 text-[#146C2E]">
                              Recommended
                            </span>
                          )}
                        </div>

                        <div className="text-[11px] text-[#444746] space-x-1.5 mt-0.5">
                          <span className="font-medium text-[#1F1F1F]">{format.format}</span>
                          {format.fps && <span>• {format.fps}</span>}
                          {format.bitrate && <span>• {format.bitrate}</span>}
                        </div>
                      </div>

                      {/* Middle: File Size */}
                      <div className="col-span-3 text-right">
                        <span className="text-xs font-normal text-[#444746]">
                          {format.size}
                        </span>
                      </div>

                      {/* Right: Google Download Button */}
                      <div className="col-span-3 text-right">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            onDownload(video, format);
                          }}
                          className="inline-flex items-center justify-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#0B57D0] hover:bg-[#0842A0] text-white shadow-2xs hover:shadow-xs transition-all active:scale-95 cursor-pointer"
                          title={`Download ${format.quality}`}
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
