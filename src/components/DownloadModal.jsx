import React, { useState, useEffect, useRef } from 'react';
import { Download, Check, X, ArrowDownToLine, AlertCircle, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { subscribeToLiveDownload, triggerBrowserFileDownload } from '../services/api';

export default function DownloadModal({
  isOpen,
  onClose,
  video,
  format,
  onComplete,
  onDownloadAnother
}) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Connecting to stream...');
  const [speed, setSpeed] = useState('0 KB/s');
  const [eta, setEta] = useState('--');
  const [isCompleted, setIsCompleted] = useState(false);
  const [error, setError] = useState(null);
  const [downloadedMb, setDownloadedMb] = useState('0.0 MB');
  const [totalMb, setTotalMb] = useState(format?.size || '50.0 MB');
  const [deliveredUrl, setDeliveredUrl] = useState(null);
  const [deliveredFilename, setDeliveredFilename] = useState(null);
  const unsubscribeRef = useRef(null);

  const startLiveDownload = () => {
    if (!video || !format) return;

    if (unsubscribeRef.current) {
      unsubscribeRef.current();
      unsubscribeRef.current = null;
    }

    setError(null);
    setIsCompleted(false);
    setProgress(0);
    setDownloadedMb('0.0 MB');
    setTotalMb(format.size || '50.0 MB');
    setDeliveredUrl(null);
    setDeliveredFilename(null);
    setStatusText('Downloading media stream...');
    setSpeed('Calculating...');
    setEta('--');

    const cleanup = subscribeToLiveDownload(
      video,
      format,
      (data) => {
        // Live progress event from backend
        if (typeof data.percent === 'number') {
          setProgress(Math.round(data.percent));
        }
        if (data.downloadedMb) {
          setDownloadedMb(data.downloadedMb);
        }
        if (data.totalMb) {
          setTotalMb(data.totalMb);
        }
        if (data.speed) {
          setSpeed(data.speed);
        }
        if (data.eta) {
          setEta(data.eta);
        }
        if (data.status) {
          setStatusText(data.status);
        }
      },
      (data) => {
        // Completed event
        setProgress(100);
        setIsCompleted(true);
        setStatusText('Download completed! Saved to your Downloads folder.');
        setDownloadedMb(data.totalMb || format.size || 'Done');
        setSpeed('Complete');
        setEta('00:00');
        if (data.downloadUrl) {
          setDeliveredUrl(data.downloadUrl);
          setDeliveredFilename(data.filename);
        }

        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.6 }
          });
        } catch {}

        if (onComplete) {
          onComplete({
            id: `${video.id}-${Date.now()}`,
            videoTitle: video.title,
            platform: video.platform,
            format: format.format,
            quality: format.quality,
            size: data.totalMb || format.size,
            thumbnail: video.thumbnail,
            url: video.url,
            date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          });
        }
      },
      (err) => {
        // Error event
        console.error('Download error:', err);
        setError(err || 'Failed to download media stream. Please try again.');
      }
    );

    unsubscribeRef.current = cleanup;
  };

  const handleManualSave = () => {
    if (deliveredUrl) {
      triggerBrowserFileDownload(deliveredUrl, deliveredFilename);
    } else {
      startLiveDownload();
    }
  };

  useEffect(() => {
    if (isOpen && format && video) {
      startLiveDownload();
    } else {
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
        unsubscribeRef.current = null;
      }
      setProgress(0);
      setIsCompleted(false);
      setError(null);
      setDeliveredUrl(null);
    }

    return () => {
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
        unsubscribeRef.current = null;
      }
    };
  }, [isOpen, format?.id, video?.id]);

  if (!isOpen || !video || !format) return null;

  const is4k = format.is4K || format.quality?.includes('4K');

  // Format ETA nicely (e.g. 01:25 -> 1m 25s left)
  const formatEtaText = (etaStr) => {
    if (!etaStr || etaStr === '--' || etaStr === '00:00' || etaStr === 'calculating') return '';
    const parts = etaStr.split(':');
    if (parts.length === 2) {
      const mins = parseInt(parts[0], 10);
      const secs = parseInt(parts[1], 10);
      if (mins > 0) return `${mins}m ${secs}s left`;
      return `${secs}s left`;
    }
    return `${etaStr} left`;
  };

  const etaLabel = formatEtaText(eta);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 p-4 animate-in fade-in duration-150">
      <div className="bg-white rounded-[28px] max-w-115 w-full p-6 sm:p-7 shadow-[0_24px_48px_rgba(0,0,0,0.14)] border border-[#DADCE0] relative transition-all">
        
        {/* Top Header Row with Google Material 3 Icon Container */}
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3.5">
            {error ? (
              <div className="w-11 h-11 rounded-full bg-[#F9DEDC] text-[#B3261E] flex items-center justify-center shrink-0">
                <AlertCircle className="w-5 h-5 stroke-[2.2]" />
              </div>
            ) : isCompleted ? (
              <div className="w-11 h-11 rounded-full bg-[#C4EED0] text-[#146C2E] flex items-center justify-center shrink-0">
                <Check className="w-5 h-5 stroke-[2.5]" />
              </div>
            ) : (
              <div className="w-11 h-11 rounded-full bg-[#D3E3FD] text-[#0B57D0] flex items-center justify-center shrink-0">
                <Download className="w-5 h-5 stroke-[2.2] animate-bounce" />
              </div>
            )}

            <div>
              <h3 className="text-lg font-normal text-[#1F1F1F] tracking-tight">
                {error ? 'Download failed' : isCompleted ? 'Download completed' : 'Downloading file...'}
              </h3>
              <p className="text-xs text-[#444746] mt-0.5 font-normal">
                {error ? error : statusText}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#444746] hover:text-[#1F1F1F] hover:bg-[#F0F4F9] rounded-full transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Media Preview Snapshot (Google Material 3 Container) */}
        <div className="mt-5 p-3.5 rounded-2xl bg-[#F0F4F9] border border-[#E0E2EC] flex items-center space-x-3.5">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-16 h-11 rounded-xl object-cover shrink-0 bg-gray-200"
          />
          <div className="flex-1 min-w-0">
            <h4 className="text-xs sm:text-sm font-medium text-[#1F1F1F] truncate leading-tight">
              {video.title}
            </h4>
            <div className="flex items-center space-x-2 mt-1 text-xs text-[#444746] flex-wrap">
              <span className="font-medium text-[#0B57D0]">{format.quality}</span>
              <span>•</span>
              <span>{format.format}</span>
              <span>•</span>
              <span>{totalMb}</span>
              {is4k && (
                <span className="px-2 py-0.2 rounded-full bg-[#E8DEF8] text-[#1D192B] text-[10px] font-bold">
                  4K
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Real Live Progress & Stats (Google Material 3 Typography) */}
        {!error && (
          <div className="mt-5 space-y-2">
            <div className="flex justify-between items-center text-xs text-[#1F1F1F] font-normal">
              <span className="font-medium text-[#1F1F1F]">
                {isCompleted ? 'File ready' : `${downloadedMb} / ${totalMb}`}
              </span>
              <span className={`font-medium ${isCompleted ? 'text-[#146C2E]' : 'text-[#0B57D0]'}`}>
                {progress}%
              </span>
            </div>

            {/* Google Material 3 Linear Progress Bar */}
            <div className="w-full h-1.5 bg-[#E0E2EC] rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-150 ease-out ${
                  isCompleted 
                    ? 'bg-[#146C2E]' 
                    : 'bg-[#0B57D0]'
                }`}
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {!isCompleted && (
              <div className="flex justify-between items-center text-xs text-[#444746] pt-1 font-normal">
                <span>Speed: <strong className="font-medium text-[#1F1F1F]">{speed}</strong></span>
                {etaLabel && <span>{etaLabel}</span>}
              </div>
            )}
          </div>
        )}

        {/* Google Material 3 Action Buttons */}
        <div className="mt-6 flex items-center justify-end space-x-2">
          {error ? (
            <>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-full text-sm font-medium text-[#0B57D0] hover:bg-[#D3E3FD]/40 active:bg-[#D3E3FD]/70 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={startLiveDownload}
                className="px-6 py-2.5 rounded-full text-sm font-medium bg-[#0B57D0] hover:bg-[#0842A0] active:bg-[#063580] text-white flex items-center space-x-2 shadow-xs hover:shadow transition-all active:scale-95 cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Retry</span>
              </button>
            </>
          ) : isCompleted ? (
            <>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  if (onDownloadAnother) onDownloadAnother();
                }}
                className="px-5 py-2.5 rounded-full text-sm font-medium text-[#0B57D0] hover:bg-[#D3E3FD]/40 active:bg-[#D3E3FD]/70 transition-colors cursor-pointer"
              >
                Download another
              </button>
              <button
                type="button"
                onClick={handleManualSave}
                className="px-6 py-2.5 rounded-full text-sm font-medium bg-[#0B57D0] hover:bg-[#0842A0] active:bg-[#063580] text-white flex items-center space-x-2 shadow-xs hover:shadow transition-all active:scale-95 cursor-pointer"
              >
                <ArrowDownToLine className="w-4 h-4" />
                <span>Download again</span>
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full text-sm font-medium text-[#0B57D0] hover:bg-[#D3E3FD]/40 active:bg-[#D3E3FD]/70 transition-colors cursor-pointer"
            >
              Cancel
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
