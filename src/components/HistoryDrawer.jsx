import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Download, 
  Search, 
  Clock, 
  FileCheck,
  Share2,
  Check
} from 'lucide-react';
import { PlatformIcon } from './PlatformIcons';

export default function HistoryDrawer({
  isOpen,
  onClose,
  history = [],
  onClearHistory,
  onReDownload
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState(null);

  if (!isOpen) return null;

  const filteredHistory = history.filter(item => 
    item.videoTitle?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.platform?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.format?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCopy = (item) => {
    navigator.clipboard.writeText(item.url);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/35 animate-in fade-in">
      {/* Background dismiss */}
      <div className="flex-1" onClick={onClose}></div>

      {/* Drawer Container */}
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col border-l border-[#DADCE0] animate-in slide-in-from-right duration-200">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#E8EAED] flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <Clock className="w-5 h-5 text-[#0B57D0]" />
            <h3 className="font-normal text-base text-[#1F1F1F]">
              Download History ({history.length})
            </h3>
          </div>

          <div className="flex items-center space-x-1">
            {history.length > 0 && (
              <button
                type="button"
                onClick={onClearHistory}
                className="p-2 rounded-full text-[#444746] hover:text-[#B3261E] hover:bg-[#F9DEDC]/50 transition-colors cursor-pointer"
                title="Clear all history"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full text-[#444746] hover:text-[#1F1F1F] hover:bg-[#F0F4F9] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Search inside history */}
        {history.length > 0 && (
          <div className="p-3 border-b border-[#E8EAED]">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 absolute left-3.5 text-[#444746]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search past downloads..."
                className="w-full pl-9 pr-3 py-2 text-xs bg-[#F0F4F9] border border-[#E0E2EC] rounded-full outline-none text-[#1F1F1F] placeholder:text-[#444746] focus:border-[#0B57D0]"
              />
            </div>
          </div>
        )}

        {/* List of items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
          {history.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#444746]">
              <div className="p-4 rounded-full bg-[#F0F4F9] mb-3">
                <FileCheck className="w-8 h-8 opacity-40 text-[#0B57D0]" />
              </div>
              <p className="text-sm font-medium text-[#1F1F1F]">No downloads yet</p>
              <p className="text-xs text-[#444746] mt-1 max-w-xs">
                Videos and audio tracks you download will appear here for easy re-access.
              </p>
            </div>
          ) : filteredHistory.length === 0 ? (
            <div className="text-center py-8 text-[#444746] text-xs">
              No matching items found for "{searchQuery}".
            </div>
          ) : (
            filteredHistory.map((item) => (
              <div
                key={item.id}
                className="p-3 rounded-2xl border border-[#E0E2EC] bg-[#F8F9FA] hover:bg-[#F0F4F9] transition-colors flex items-center justify-between space-x-3"
              >
                {/* Thumbnail & Title */}
                <div className="flex items-center space-x-3 min-w-0 flex-1">
                  <div className="relative shrink-0">
                    <img
                      src={item.thumbnail}
                      alt={item.videoTitle}
                      className="w-12 h-10 rounded-lg object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 p-0.5 rounded-full bg-white shadow-xs">
                      <PlatformIcon platform={item.platform} className="w-3 h-3" />
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-[#1F1F1F] truncate">
                      {item.videoTitle}
                    </p>
                    <p className="text-[11px] text-[#444746] mt-0.5 space-x-1.5">
                      <span className="font-medium text-[#0B57D0]">{item.quality}</span>
                      <span>•</span>
                      <span>{item.size}</span>
                      <span>•</span>
                      <span>{item.date}</span>
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-1 shrink-0">
                  <button
                    type="button"
                    onClick={() => handleCopy(item)}
                    className="p-2 rounded-full text-[#444746] hover:text-[#1F1F1F] hover:bg-[#E0E2EC] transition-colors cursor-pointer"
                    title="Copy Source Link"
                  >
                    {copiedId === item.id ? (
                      <Check className="w-3.5 h-3.5 text-[#146C2E]" />
                    ) : (
                      <Share2 className="w-3.5 h-3.5" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => onReDownload(item)}
                    className="p-2 rounded-full bg-[#D3E3FD] text-[#041E49] hover:bg-[#C2E7FF] transition-colors cursor-pointer"
                    title="Download again"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="p-3.5 border-t border-[#E8EAED] text-[11px] text-center text-[#5F6368]">
          Saved locally in your browser
        </div>

      </div>
    </div>
  );
}
