import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import UALogo from './components/UALogo';
import SearchBar from './components/SearchBar';
import PlatformPills from './components/PlatformPills';
import VideoCard from './components/VideoCard';
import DownloadModal from './components/DownloadModal';
import HistoryDrawer from './components/HistoryDrawer';
import Footer from './components/Footer';
import { fetchVideoInfo } from './services/api';
import { SAMPLE_VIDEOS } from './services/sampleData';
import { AlertCircle, RefreshCw } from 'lucide-react';

export default function App() {
  const [url, setUrl] = useState('');
  const [activePlatform, setActivePlatform] = useState('all');
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Download Modal state
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState(null);

  // History Drawer & state
  const [historyOpen, setHistoryOpen] = useState(false);
  const [history, setHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('ua_downloader_history') || localStorage.getItem('google_downloader_history');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Ensure light theme on mount
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    try {
      localStorage.removeItem('google_downloader_theme');
      localStorage.removeItem('ua_downloader_theme');
    } catch {
      // ignore
    }
  }, []);

  // Save history to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ua_downloader_history', JSON.stringify(history));
    } catch (e) {
      console.warn('Failed to persist history', e);
    }
  }, [history]);

  // Search / Fetch video handler
  const handleSearch = async (overrideUrl) => {
    const targetUrl = overrideUrl || url;
    if (!targetUrl.trim()) return;

    setIsLoading(true);
    setErrorMessage('');

    try {
      const videoData = await fetchVideoInfo(targetUrl);
      setCurrentVideo(videoData);
    } catch (err) {
      setErrorMessage(err.message || 'Unable to fetch video. Please check the URL and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Platform pill selector
  const handleSelectPlatform = (platformId) => {
    setActivePlatform(platformId === activePlatform ? '' : platformId);
  };

  // Reset to initial clean Google home
  const handleReset = () => {
    setUrl('');
    setCurrentVideo(null);
    setErrorMessage('');
    setActivePlatform('all');
  };

  // Trigger Download Modal
  const handleStartDownload = (video, format) => {
    setSelectedFormat(format);
    setDownloadModalOpen(true);
  };

  // On successful download completion
  const handleDownloadComplete = (historyItem) => {
    setHistory((prev) => [historyItem, ...prev.filter(h => h.id !== historyItem.id)].slice(0, 50));
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  const handleReDownload = (item) => {
    setUrl(item.url);
    handleSearch(item.url);
    setHistoryOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-gray-900">

      {/* Top Header */}
      <Header
        onSelectPlatform={handleSelectPlatform}
        onReset={handleReset}
        onOpenHistory={() => setHistoryOpen(true)}
        historyCount={history.length}
      />

      {/* Main Container */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 sm:py-12 w-full max-w-5xl mx-auto">

        {/* Logo (Centered Hero when idle, slightly smaller when results exist) */}
        <div className="mb-6 sm:mb-8 text-center">
          <UALogo
            size={currentVideo ? "small" : "large"}
            onClick={handleReset}
          />
          {!currentVideo && (
            <p className="text-xs sm:text-sm text-gray-500 mt-2 font-normal">
              Download YouTube, Facebook, Instagram & TikTok videos in one click
            </p>
          )}
        </div>

        {/* Search Bar Pill */}
        <SearchBar
          url={url}
          setUrl={setUrl}
          onSearch={handleSearch}
          isLoading={isLoading}
          selectedPlatform={activePlatform}
        />

        {/* Platform Quick Filter Pills */}
        {!currentVideo && (
          <PlatformPills
            activePlatform={activePlatform}
            onSelectPlatform={handleSelectPlatform}
          />
        )}

        {/* Error Notification */}
        {errorMessage && (
          <div className="w-full max-w-4xl mx-auto mt-4 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center space-x-2.5 animate-in fade-in">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
            <span className="flex-1">{errorMessage}</span>
            <button
              onClick={() => setErrorMessage('')}
              className="text-xs font-semibold hover:underline cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Video Card Results */}
        {currentVideo && !isLoading && (
          <div className="w-full">
            <VideoCard
              video={currentVideo}
              onDownload={handleStartDownload}
            />

            <div className="text-center mt-5">
              <button
                onClick={handleReset}
                className="text-xs text-blue-600 hover:underline font-medium inline-flex items-center space-x-1"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Search another video</span>
              </button>
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <Footer />

      {/* Download Progress Modal */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
        video={currentVideo}
        format={selectedFormat}
        onComplete={handleDownloadComplete}
        onDownloadAnother={handleReset}
      />

      {/* History Drawer */}
      <HistoryDrawer
        isOpen={historyOpen}
        onClose={() => setHistoryOpen(false)}
        history={history}
        onClearHistory={handleClearHistory}
        onReDownload={handleReDownload}
      />

    </div>
  );
}