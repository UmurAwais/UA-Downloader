import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  Laptop, 
  Smartphone, 
  Tablet, 
  ChevronDown, 
  ChevronUp, 
  Copy, 
  Download, 
  Search, 
  Video, 
  Layers, 
  Globe, 
  HelpCircle, 
  Info, 
  Shield, 
  Lock,
  Flame,
  ArrowRight,
  Tv,
  Check,
  X
} from 'lucide-react';
import { YouTubeIcon, FacebookIcon, InstagramIcon, TikTokIcon } from './PlatformIcons';

export default function ContentSections() {
  const [activeTab, setActiveTab] = useState('how-it-works');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [faqSearchQuery, setFaqSearchQuery] = useState('');

  const faqs = [
    {
      q: "Q1. What is UA Save?",
      a: "UA Save is a free online video downloader that allows you to download videos from YouTube, Facebook, Instagram, and TikTok in just one click — without any software, registration, or fees."
    },
    {
      q: "Q2. Is UA Save free to use?",
      a: "Yes! UA Save is completely free to use. There are no hidden charges, subscription fees, or premium plans. Simply visit the website, paste your video link, and download."
    },
    {
      q: "Q3. Which platforms does UA Save support?",
      a: "UA Save currently supports YouTube, Facebook, Instagram, and TikTok. More platforms will be added in future updates."
    },
    {
      q: "Q4. Do I need to install any software or app?",
      a: "No! UA Save is a 100% browser-based tool. You don't need to download or install any software or application. It works directly in your web browser on any device."
    },
    {
      q: "Q5. Is it safe to use UA Save?",
      a: "Absolutely. UA Save uses secure HTTPS encryption to protect your connection. We do not collect, store, or share your video links or personal data. Your privacy and security are our top priorities."
    },
    {
      q: "Q6. What video quality options are available?",
      a: "UA Save supports multiple video quality options depending on the source platform, including 360p (Standard), 720p (HD), 1080p (Full HD), and 4K (Ultra HD – where available)."
    },
    {
      q: "Q7. Can I download TikTok videos without a watermark?",
      a: "Yes! UA Save allows you to download TikTok videos without a watermark, giving you clean, high-quality video files ready to share or store."
    },
    {
      q: "Q8. Can I download Instagram Reels and Stories?",
      a: "Yes! UA Save supports downloading Instagram Reels, Stories, and regular video posts quickly and easily."
    },
    {
      q: "Q9. How long does it take to download a video?",
      a: "Downloads are typically processed within seconds, depending on the video length and your internet connection speed. UA Save uses fast servers to ensure minimal wait time."
    },
    {
      q: "Q10. Do I need to create an account or sign up?",
      a: "No registration or sign-up is required. Simply visit the website, paste the video link, and download — it's that quick and easy."
    },
    {
      q: "Q11. Is there a limit on how many videos I can download?",
      a: "No. UA Save places no limit on the number of videos you can download. You can download as many videos as you want, completely free."
    },
    {
      q: "Q12. Is downloading videos legal?",
      a: "UA Save is intended for personal, offline use only. Downloading copyrighted content for redistribution or commercial use may violate platform terms of service and copyright laws. We recommend downloading only content that you own or have permission to save."
    },
    {
      q: "Q13. Who owns and operates UA Save?",
      a: "UA Save is developed, owned, and operated by Worcco. Worcco is dedicated to building fast, safe, and accessible web utilities for users worldwide."
    }
  ];

  const filteredFaqs = faqs.filter(
    item => item.q.toLowerCase().includes(faqSearchQuery.toLowerCase()) || 
            item.a.toLowerCase().includes(faqSearchQuery.toLowerCase())
  );

  return (
    <section className="w-full max-w-5xl mx-auto mb-12 px-4 space-y-9">
      
      {/* Navigation Pills Header */}
      <div className="flex items-center justify-center space-x-2 sm:space-x-3 border-b border-[#DADCE0] pb-4 flex-wrap gap-y-2">
        <button
          onClick={() => setActiveTab('how-it-works')}
          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
            activeTab === 'how-it-works'
              ? 'bg-[#E8F0FE] text-[#1A73E8] shadow-sm font-semibold'
              : 'text-[#5F6368] hover:text-[#1F1F1F] hover:bg-[#F1F3F4]'
          }`}
        >
          How It Works
        </button>
        <button
          onClick={() => setActiveTab('about')}
          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
            activeTab === 'about'
              ? 'bg-[#E8F0FE] text-[#1A73E8] shadow-sm font-semibold'
              : 'text-[#5F6368] hover:text-[#1F1F1F] hover:bg-[#F1F3F4]'
          }`}
        >
          About Us
        </button>
        <button
          onClick={() => setActiveTab('features')}
          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
            activeTab === 'features'
              ? 'bg-[#E8F0FE] text-[#1A73E8] shadow-sm font-semibold'
              : 'text-[#5F6368] hover:text-[#1F1F1F] hover:bg-[#F1F3F4]'
          }`}
        >
          Features & Platforms
        </button>
        <button
          onClick={() => setActiveTab('faqs')}
          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
            activeTab === 'faqs'
              ? 'bg-[#E8F0FE] text-[#1A73E8] shadow-sm font-semibold'
              : 'text-[#5F6368] hover:text-[#1F1F1F] hover:bg-[#F1F3F4]'
          }`}
        >
          FAQs
        </button>
        <button
          onClick={() => setActiveTab('terms')}
          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
            activeTab === 'terms'
              ? 'bg-[#E8F0FE] text-[#1A73E8] shadow-sm font-semibold'
              : 'text-[#5F6368] hover:text-[#1F1F1F] hover:bg-[#F1F3F4]'
          }`}
        >
          Terms & Conditions
        </button>
        <button
          onClick={() => setActiveTab('privacy')}
          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
            activeTab === 'privacy'
              ? 'bg-[#E8F0FE] text-[#1A73E8] shadow-sm font-semibold'
              : 'text-[#5F6368] hover:text-[#1F1F1F] hover:bg-[#F1F3F4]'
          }`}
        >
          Privacy Policy
        </button>
      </div>

      {/* ========================================================================= */}
      {/* 1. HOW IT WORKS SECTION */}
      {/* ========================================================================= */}
      {(activeTab === 'how-it-works' || activeTab === 'all') && (
        <div id="how-it-works-section" className="space-y-8 animate-in fade-in duration-300">
          
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#E8F0FE] text-[#1A73E8] mb-3">
              <Zap className="w-3.5 h-3.5" />
              <span>3 Simple Steps</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#1F1F1F] tracking-tight">
              How UA Save Works
            </h2>
            <p className="text-xs sm:text-sm text-[#5F6368] mt-2">
              Downloading your favorite videos from YouTube, Facebook, Instagram, or TikTok has never been easier. No technical skills or software required.
            </p>
          </div>

          {/* 3 Steps Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* Step 1 */}
            <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center font-bold text-base mb-4">
                  1
                </div>
                <h3 className="text-base font-medium text-[#1F1F1F] mb-2 flex items-center space-x-2">
                  <span>Copy the Video Link</span>
                </h3>
                <p className="text-xs text-[#5F6368] leading-relaxed">
                  Go to YouTube, Facebook, Instagram, or TikTok and find the video you want. Click <strong className="text-[#1F1F1F]">Share</strong> or copy the URL directly from the address bar.
                </p>
              </div>
              
              <div className="mt-4 p-3 bg-[#FEF7E0] border border-[#FEEFC3] rounded-xl text-[11px] text-[#B06000] flex items-start space-x-2">
                <span className="text-sm shrink-0">💡</span>
                <span><strong>Pro Tip:</strong> On mobile, tap the three-dot menu (⋮) on the video and select &quot;Copy Link.&quot;</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FCE8E6] text-[#D93025] flex items-center justify-center font-bold text-base mb-4">
                  2
                </div>
                <h3 className="text-base font-medium text-[#1F1F1F] mb-2 flex items-center space-x-2">
                  <span>Paste on UA Save</span>
                </h3>
                <p className="text-xs text-[#5F6368] leading-relaxed">
                  Head over to UA Save and paste the copied URL into the search box at the top of the homepage.
                </p>
              </div>

              <div className="mt-4 p-3 bg-[#E8F0FE] border border-[#D2E3FC] rounded-xl text-[11px] text-[#1967D2] flex items-start space-x-2">
                <Sparkles className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>Our smart link detector automatically identifies the platform and fetches available qualities.</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#E6F4EA] text-[#137333] flex items-center justify-center font-bold text-base mb-4">
                  3
                </div>
                <h3 className="text-base font-medium text-[#1F1F1F] mb-2 flex items-center space-x-2">
                  <span>Click Download & Save</span>
                </h3>
                <p className="text-xs text-[#5F6368] leading-relaxed">
                  Hit Download and choose your preferred quality (HD, Full HD, or 4K). Click Save to store the video directly on your device.
                </p>
              </div>

              <div className="mt-4 p-3 bg-[#E6F4EA] border border-[#CEEAD6] rounded-xl text-[11px] text-[#137333] flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span><strong>Ready!</strong> Your video is saved and ready to watch offline anytime, anywhere.</span>
              </div>
            </div>

          </div>

          {/* Works on all devices */}
          <div className="bg-[#F8F9FA] border border-[#E8EAED] rounded-2xl p-6 sm:p-8">
            <h3 className="text-base sm:text-lg font-medium text-[#1F1F1F] text-center mb-6">
              Works Seamlessly on All Devices & Browsers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white border border-[#DADCE0] rounded-xl p-4 flex items-center space-x-3.5">
                <div className="p-2.5 rounded-lg bg-[#E8F0FE] text-[#1A73E8]">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#1F1F1F]">Desktop</h4>
                  <p className="text-[11px] text-[#5F6368]">Windows, macOS, Linux (Chrome, Safari, Edge, Firefox)</p>
                </div>
              </div>

              <div className="bg-white border border-[#DADCE0] rounded-xl p-4 flex items-center space-x-3.5">
                <div className="p-2.5 rounded-lg bg-[#E6F4EA] text-[#137333]">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#1F1F1F]">Mobile</h4>
                  <p className="text-[11px] text-[#5F6368]">Android & iOS (No app installation needed)</p>
                </div>
              </div>

              <div className="bg-white border border-[#DADCE0] rounded-xl p-4 flex items-center space-x-3.5">
                <div className="p-2.5 rounded-lg bg-[#FEF7E0] text-[#B06000]">
                  <Tablet className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#1F1F1F]">Tablet</h4>
                  <p className="text-[11px] text-[#5F6368]">iPad, Android Tablets, Touch optimized</p>
                </div>
              </div>
            </div>
          </div>

          {/* Supported Platforms at a Glance Table */}
          <div className="bg-white border border-[#DADCE0] rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-[#DADCE0] bg-[#F8F9FA] flex items-center justify-between">
              <h3 className="text-sm font-medium text-[#1F1F1F]">
                Supported Platforms at a Glance
              </h3>
              <span className="text-[11px] text-[#137333] font-medium bg-[#E6F4EA] px-2.5 py-0.5 rounded-full">
                100% Free & Unlimited
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-[#E8EAED] text-[#5F6368] font-medium bg-[#FAFAFA]">
                    <th className="py-3 px-6">Platform</th>
                    <th className="py-3 px-6">Supported Formats</th>
                    <th className="py-3 px-6 text-center">Watermark-Free</th>
                    <th className="py-3 px-6 text-right">Max Resolution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8EAED] text-[#1F1F1F]">
                  <tr className="hover:bg-[#F8F9FA] transition-colors">
                    <td className="py-3.5 px-6 font-medium flex items-center space-x-2.5">
                      <YouTubeIcon className="w-4 h-4 shrink-0" />
                      <span>YouTube</span>
                    </td>
                    <td className="py-3.5 px-6 text-[#5F6368]">MP4, Shorts, Audio MP3</td>
                    <td className="py-3.5 px-6 text-center">
                      <span className="inline-flex items-center text-[#137333] font-semibold text-[11px] bg-[#E6F4EA] px-2 py-0.5 rounded-md">
                        <Check className="w-3 h-3 mr-1" /> Yes
                      </span>
                    </td>
                    <td className="py-3.5 px-6 text-right font-medium text-[#1A73E8]">4K / 1080p 60fps</td>
                  </tr>
                  <tr className="hover:bg-[#F8F9FA] transition-colors">
                    <td className="py-3.5 px-6 font-medium flex items-center space-x-2.5">
                      <FacebookIcon className="w-4 h-4 shrink-0" />
                      <span>Facebook</span>
                    </td>
                    <td className="py-3.5 px-6 text-[#5F6368]">MP4, Public Videos, Reels</td>
                    <td className="py-3.5 px-6 text-center">
                      <span className="inline-flex items-center text-[#137333] font-semibold text-[11px] bg-[#E6F4EA] px-2 py-0.5 rounded-md">
                        <Check className="w-3 h-3 mr-1" /> Yes
                      </span>
                    </td>
                    <td className="py-3.5 px-6 text-right font-medium text-[#1A73E8]">Full HD 1080p</td>
                  </tr>
                  <tr className="hover:bg-[#F8F9FA] transition-colors">
                    <td className="py-3.5 px-6 font-medium flex items-center space-x-2.5">
                      <InstagramIcon className="w-4 h-4 shrink-0" />
                      <span>Instagram</span>
                    </td>
                    <td className="py-3.5 px-6 text-[#5F6368]">MP4, Reels, Stories, Audio</td>
                    <td className="py-3.5 px-6 text-center">
                      <span className="inline-flex items-center text-[#137333] font-semibold text-[11px] bg-[#E6F4EA] px-2 py-0.5 rounded-md">
                        <Check className="w-3 h-3 mr-1" /> Yes
                      </span>
                    </td>
                    <td className="py-3.5 px-6 text-right font-medium text-[#1A73E8]">Original HD</td>
                  </tr>
                  <tr className="hover:bg-[#F8F9FA] transition-colors">
                    <td className="py-3.5 px-6 font-medium flex items-center space-x-2.5">
                      <TikTokIcon className="w-4 h-4 shrink-0 text-black" />
                      <span>TikTok</span>
                    </td>
                    <td className="py-3.5 px-6 text-[#5F6368]">MP4, Sounds, No-Watermark</td>
                    <td className="py-3.5 px-6 text-center">
                      <span className="inline-flex items-center text-[#137333] font-semibold text-[11px] bg-[#E6F4EA] px-2 py-0.5 rounded-md">
                        <Check className="w-3 h-3 mr-1" /> Yes
                      </span>
                    </td>
                    <td className="py-3.5 px-6 text-right font-medium text-[#1A73E8]">Full HD 1080p</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. ABOUT US SECTION */}
      {/* ========================================================================= */}
      {(activeTab === 'about' || activeTab === 'all') && (
        <div id="about-section" className="space-y-8 animate-in fade-in duration-300">
          
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#E8F0FE] text-[#1A73E8] mb-3">
              <Globe className="w-3.5 h-3.5" />
              <span>About Us</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#1F1F1F] tracking-tight">
              Welcome to UA Save
            </h2>
            <p className="text-xs sm:text-sm text-[#5F6368] mt-2">
              Your ultimate free, fast, and reliable online video downloader.
            </p>
          </div>

          {/* Hero Story Card */}
          <div className="bg-white border border-[#DADCE0] rounded-2xl p-6 sm:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06)] space-y-6">
            <p className="text-xs sm:text-sm text-[#444746] leading-relaxed">
              In today&apos;s digital age, video content rules the internet. From viral TikTok clips to inspiring YouTube tutorials, engaging Facebook reels to stunning Instagram stories — great content deserves to be saved and enjoyed anytime, anywhere. That&apos;s exactly why <strong className="text-[#1F1F1F]">UA Save</strong> was built.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#E8EAED]">
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-[#1F1F1F] flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#1A73E8]"></span>
                  <span>Who We Are</span>
                </h3>
                <p className="text-xs text-[#5F6368] leading-relaxed">
                  UA Save is a powerful, browser-based video downloading platform designed for everyday users. We understand how frustrating it can be when you find an amazing video online and have no easy way to save it for offline viewing. Our platform eliminates that frustration with a single-click solution.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-[#1F1F1F] flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#137333]"></span>
                  <span>Our Mission</span>
                </h3>
                <p className="text-xs text-[#5F6368] leading-relaxed">
                  Our mission is simple — to empower users worldwide to access, save, and enjoy their favorite online video content effortlessly, without any technical barriers. We believe great content should never be out of reach, whether you&apos;re online or offline.
                </p>
              </div>
            </div>
          </div>

          {/* What We Do - 4 Cards */}
          <div>
            <h3 className="text-base sm:text-lg font-medium text-[#1F1F1F] mb-4">
              What We Do
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-xl p-5">
                <div className="w-9 h-9 rounded-lg bg-[#FCE8E6] flex items-center justify-center mb-3">
                  <YouTubeIcon className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-semibold text-[#1F1F1F] mb-1">YouTube Downloader</h4>
                <p className="text-[11px] text-[#5F6368] leading-relaxed">
                  Download YouTube videos and Shorts in HD, Full HD, and 4K quality.
                </p>
              </div>

              <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-xl p-5">
                <div className="w-9 h-9 rounded-lg bg-[#E8F0FE] flex items-center justify-center mb-3">
                  <FacebookIcon className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-semibold text-[#1F1F1F] mb-1">Facebook Downloader</h4>
                <p className="text-[11px] text-[#5F6368] leading-relaxed">
                  Save public Facebook videos, stories, and reels instantly to your device.
                </p>
              </div>

              <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-xl p-5">
                <div className="w-9 h-9 rounded-lg bg-[#FCE4EC] flex items-center justify-center mb-3">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-semibold text-[#1F1F1F] mb-1">Instagram Downloader</h4>
                <p className="text-[11px] text-[#5F6368] leading-relaxed">
                  Download Instagram videos, reels, and stories with high fidelity audio.
                </p>
              </div>

              <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-xl p-5">
                <div className="w-9 h-9 rounded-lg bg-[#F1F3F4] flex items-center justify-center mb-3">
                  <TikTokIcon className="w-5 h-5 text-black" />
                </div>
                <h4 className="text-xs font-semibold text-[#1F1F1F] mb-1">TikTok No-Watermark</h4>
                <p className="text-[11px] text-[#5F6368] leading-relaxed">
                  Save clean TikTok videos without watermarks in just one click.
                </p>
              </div>

            </div>
          </div>

          {/* Privacy & Safety Commitment */}
          <div className="bg-[#E6F4EA] border border-[#CEEAD6] rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-5">
            <div className="p-3 rounded-xl bg-white text-[#137333] shadow-sm shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#137333] mb-1">
                Our Commitment to Privacy & Safety
              </h4>
              <p className="text-xs text-[#3C4043] leading-relaxed">
                Your privacy matters to us. UA Save does not store, collect, or share any of your personal data or video links. All downloads are processed securely through encrypted connections (HTTPS), ensuring your safety at every step.
              </p>
            </div>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. FEATURES & COMPARISON SECTION */}
      {/* ========================================================================= */}
      {(activeTab === 'features' || activeTab === 'all') && (
        <div id="features-section" className="space-y-8 animate-in fade-in duration-300">
          
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#E8F0FE] text-[#1A73E8] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Comparison</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#1F1F1F] tracking-tight">
              Why Choose UA Save?
            </h2>
            <p className="text-xs sm:text-sm text-[#5F6368] mt-2">
              See how UA Save compares with traditional video download tools.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white border border-[#DADCE0] rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-[#DADCE0] bg-[#F8F9FA] text-[#5F6368] font-medium">
                  <th className="py-3.5 px-6">Feature</th>
                  <th className="py-3.5 px-6 font-bold text-[#1A73E8] bg-[#E8F0FE]/40">UA Save</th>
                  <th className="py-3.5 px-6 text-[#70757A]">Other Downloaders</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8EAED] text-[#1F1F1F]">
                
                <tr className="hover:bg-[#F8F9FA] transition-colors">
                  <td className="py-3.5 px-6 font-medium">Supported Platforms</td>
                  <td className="py-3.5 px-6 font-semibold text-[#137333] bg-[#E8F0FE]/20">
                    YouTube, Facebook, Instagram, TikTok
                  </td>
                  <td className="py-3.5 px-6 text-[#70757A]">Limited / Single Platform</td>
                </tr>

                <tr className="hover:bg-[#F8F9FA] transition-colors">
                  <td className="py-3.5 px-6 font-medium">Download Speed</td>
                  <td className="py-3.5 px-6 font-semibold text-[#137333] bg-[#E8F0FE]/20">
                    Ultra-Fast (8x Multi-threaded)
                  </td>
                  <td className="py-3.5 px-6 text-[#70757A]">Slow & Throttled</td>
                </tr>

                <tr className="hover:bg-[#F8F9FA] transition-colors">
                  <td className="py-3.5 px-6 font-medium">Cost & Subscription</td>
                  <td className="py-3.5 px-6 font-semibold text-[#137333] bg-[#E8F0FE]/20">
                    100% Free Forever
                  </td>
                  <td className="py-3.5 px-6 text-[#70757A]">Paid Plans / Paywalls</td>
                </tr>

                <tr className="hover:bg-[#F8F9FA] transition-colors">
                  <td className="py-3.5 px-6 font-medium">Registration Required</td>
                  <td className="py-3.5 px-6 font-semibold text-[#137333] bg-[#E8F0FE]/20">
                    Not Required (Instant)
                  </td>
                  <td className="py-3.5 px-6 text-[#70757A]">Sign-up & Email Required</td>
                </tr>

                <tr className="hover:bg-[#F8F9FA] transition-colors">
                  <td className="py-3.5 px-6 font-medium">Device Compatibility</td>
                  <td className="py-3.5 px-6 font-semibold text-[#137333] bg-[#E8F0FE]/20">
                    Mobile, Tablet & Desktop
                  </td>
                  <td className="py-3.5 px-6 text-[#70757A]">App installation needed</td>
                </tr>

                <tr className="hover:bg-[#F8F9FA] transition-colors">
                  <td className="py-3.5 px-6 font-medium">Security & Privacy</td>
                  <td className="py-3.5 px-6 font-semibold text-[#137333] bg-[#E8F0FE]/20">
                    Safe & Encrypted (HTTPS)
                  </td>
                  <td className="py-3.5 px-6 text-[#70757A]">Adware / Popups</td>
                </tr>

                <tr className="hover:bg-[#F8F9FA] transition-colors">
                  <td className="py-3.5 px-6 font-medium">Video Quality</td>
                  <td className="py-3.5 px-6 font-semibold text-[#137333] bg-[#E8F0FE]/20">
                    HD, Full HD & 4K
                  </td>
                  <td className="py-3.5 px-6 text-[#70757A]">Compressed to 720p/480p</td>
                </tr>

              </tbody>
            </table>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. FAQS SECTION */}
      {/* ========================================================================= */}
      {(activeTab === 'faqs' || activeTab === 'all') && (
        <div id="faqs-section" className="space-y-6 animate-in fade-in duration-300">
          
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#E8F0FE] text-[#1A73E8] mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#1F1F1F] tracking-tight">
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-xs sm:text-sm text-[#5F6368] mt-2">
              Everything you need to know about UA Save and video downloading.
            </p>
          </div>

          {/* Search bar inside FAQs */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-[#70757A] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              placeholder="Search frequently asked questions..."
              value={faqSearchQuery}
              onChange={(e) => setFaqSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-[#DADCE0] bg-white text-xs text-[#1F1F1F] placeholder-[#70757A] focus:outline-none focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] transition-all shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            />
            {faqSearchQuery && (
              <button 
                onClick={() => setFaqSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#70757A] hover:text-[#1F1F1F]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Accordion List */}
          <div className="space-y-3 max-w-3xl mx-auto">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-8 bg-[#F8F9FA] rounded-2xl border border-[#DADCE0] text-xs text-[#5F6368]">
                No questions found matching &quot;{faqSearchQuery}&quot;. Try searching something else.
              </div>
            ) : (
              filteredFaqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div 
                    key={index}
                    className="bg-white border border-[#DADCE0] rounded-xl overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full px-5 py-4 text-left flex items-center justify-between space-x-3 cursor-pointer select-none bg-white hover:bg-[#F8F9FA] transition-colors"
                    >
                      <span className="text-xs sm:text-sm font-medium text-[#1F1F1F]">
                        {faq.q}
                      </span>
                      <span className="p-1 rounded-full text-[#5F6368] shrink-0">
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-[#1A73E8]" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 text-xs sm:text-sm text-[#444746] leading-relaxed border-t border-[#F1F3F4] pt-3 bg-[#FAFAFA] animate-in fade-in">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. TERMS AND CONDITIONS SECTION */}
      {/* ========================================================================= */}
      {(activeTab === 'terms' || activeTab === 'all') && (
        <div id="terms-section" className="space-y-8 animate-in fade-in duration-300">
          
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#E8F0FE] text-[#1A73E8] mb-3">
              <Shield className="w-3.5 h-3.5" />
              <span>Legal & Policies</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#1F1F1F] tracking-tight">
              Terms and Conditions
            </h2>
            <p className="text-xs sm:text-sm text-[#5F6368] mt-2">
              Please read these terms carefully before using the UA Save web utility.
            </p>
          </div>

          {/* Terms Overview Notice */}
          <div className="bg-white border border-[#DADCE0] rounded-2xl p-6 sm:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06)] space-y-4">
            <p className="text-xs sm:text-sm text-[#444746] leading-relaxed">
              Welcome to <strong className="text-[#1F1F1F]">UA Save</strong>. These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the UA Save website (the &quot;Website&quot;) and all related tools, features, and services offered through it.
            </p>
            <p className="text-xs sm:text-sm text-[#444746] leading-relaxed">
              By accessing, browsing, or using UA Save in any manner, you confirm that you have read, understood, and agreed to be bound by these Terms and Conditions, along with our Privacy Policy.
            </p>
            <p className="text-xs sm:text-sm text-[#444746] leading-relaxed">
              If you do not agree with any part of these Terms, you must discontinue the use of UA Save immediately. These Terms apply to all visitors, users, and anyone else who accesses or uses the Website.
            </p>
          </div>

          {/* Table of Contents Grid */}
          <div className="bg-[#F8F9FA] border border-[#DADCE0] rounded-2xl p-6">
            <h3 className="text-xs font-bold text-[#1F1F1F] uppercase tracking-wider mb-4">
              Table of Contents
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs text-[#1A73E8]">
              <span className="p-1.5 rounded-lg hover:bg-[#E8F0FE] transition-colors cursor-default">1. Acceptance of Terms</span>
              <span className="p-1.5 rounded-lg hover:bg-[#E8F0FE] transition-colors cursor-default">2. Description of Service</span>
              <span className="p-1.5 rounded-lg hover:bg-[#E8F0FE] transition-colors cursor-default">3. Eligibility</span>
              <span className="p-1.5 rounded-lg hover:bg-[#E8F0FE] transition-colors cursor-default">4. Permitted Use</span>
              <span className="p-1.5 rounded-lg hover:bg-[#E8F0FE] transition-colors cursor-default">5. Prohibited Use</span>
              <span className="p-1.5 rounded-lg hover:bg-[#E8F0FE] transition-colors cursor-default">6. Intellectual Property Rights</span>
              <span className="p-1.5 rounded-lg hover:bg-[#E8F0FE] transition-colors cursor-default">7. Third-Party Platforms</span>
              <span className="p-1.5 rounded-lg hover:bg-[#E8F0FE] transition-colors cursor-default">8. Disclaimer of Warranties</span>
              <span className="p-1.5 rounded-lg hover:bg-[#E8F0FE] transition-colors cursor-default">9. Limitation of Liability</span>
              <span className="p-1.5 rounded-lg hover:bg-[#E8F0FE] transition-colors cursor-default">10. Copyright & DMCA</span>
              <span className="p-1.5 rounded-lg hover:bg-[#E8F0FE] transition-colors cursor-default">11. User Responsibilities</span>
              <span className="p-1.5 rounded-lg hover:bg-[#E8F0FE] transition-colors cursor-default">12. Indemnification</span>
              <span className="p-1.5 rounded-lg hover:bg-[#E8F0FE] transition-colors cursor-default">13. Modifications to Service</span>
              <span className="p-1.5 rounded-lg hover:bg-[#E8F0FE] transition-colors cursor-default">14. Termination</span>
              <span className="p-1.5 rounded-lg hover:bg-[#E8F0FE] transition-colors cursor-default">15. Governing Law</span>
              <span className="p-1.5 rounded-lg hover:bg-[#E8F0FE] transition-colors cursor-default">16. Changes to Terms</span>
              <span className="p-1.5 rounded-lg hover:bg-[#E8F0FE] transition-colors cursor-default">17. Contact Us</span>
            </div>
          </div>

          {/* 17 Structured Terms Cards */}
          <div className="space-y-5">

            {/* 1. Acceptance of Terms */}
            <div className="bg-white border border-[#DADCE0] rounded-2xl p-6 sm:p-7 space-y-3">
              <h3 className="text-sm sm:text-base font-semibold text-[#1F1F1F] flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-xs font-bold">1</span>
                <span>Acceptance of Terms</span>
              </h3>
              <p className="text-xs text-[#5F6368] leading-relaxed">
                By using UA Save, you acknowledge and agree that:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-[#444746] pl-2 leading-relaxed">
                <li>You are at least 13 years of age or older.</li>
                <li>You have the legal capacity to enter into a binding agreement.</li>
                <li>You will use the Website in full compliance with these Terms and all applicable local, national, and international laws and regulations.</li>
                <li>Your use of UA Save does not violate any obligations you may have to any third party.</li>
              </ul>
              <p className="text-xs text-[#5F6368] pt-1">
                If you are using UA Save on behalf of an organization or business, you represent that you have the authority to bind that entity to these Terms.
              </p>
            </div>

            {/* 2. Description of Service */}
            <div className="bg-white border border-[#DADCE0] rounded-2xl p-6 sm:p-7 space-y-3">
              <h3 className="text-sm sm:text-base font-semibold text-[#1F1F1F] flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-xs font-bold">2</span>
                <span>Description of Service</span>
              </h3>
              <p className="text-xs text-[#444746] leading-relaxed">
                UA Save is a free, browser-based online video downloading tool that allows users to download publicly available videos from major social media platforms including YouTube, Facebook, Instagram, and TikTok.
              </p>
              <p className="text-xs text-[#444746] leading-relaxed">
                The service is provided entirely through a web browser without the need for any software installation or user registration. UA Save enables users to enter a public video URL and download the corresponding video file in various quality formats for personal, offline use.
              </p>
              <p className="text-xs text-[#5F6368]">
                UA Save reserves the right to modify, suspend, or discontinue any part of its service at any time without prior notice.
              </p>
            </div>

            {/* 3. Eligibility */}
            <div className="bg-white border border-[#DADCE0] rounded-2xl p-6 sm:p-7 space-y-3">
              <h3 className="text-sm sm:text-base font-semibold text-[#1F1F1F] flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-xs font-bold">3</span>
                <span>Eligibility</span>
              </h3>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-[#444746] pl-2 leading-relaxed">
                <li>You must be at least 13 years of age. If you are between 13 and 18 years of age, you may only use the Website under the supervision and with the consent of a parent or legal guardian.</li>
                <li>You must not be prohibited from using our services under the laws of your country or jurisdiction.</li>
                <li>You must not have been previously suspended or banned from using UA Save.</li>
              </ul>
              <p className="text-xs text-[#5F6368]">
                UA Save does not knowingly provide services to individuals under the age of 13. If we become aware that a user is under 13, we will take appropriate steps to restrict access.
              </p>
            </div>

            {/* 4. Permitted Use */}
            <div className="bg-white border border-[#DADCE0] rounded-2xl p-6 sm:p-7 space-y-3">
              <h3 className="text-sm sm:text-base font-semibold text-[#1F1F1F] flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-xs font-bold">4</span>
                <span>Permitted Use</span>
              </h3>
              <p className="text-xs text-[#5F6368]">
                UA Save is intended to be used strictly under the following permitted conditions:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-[#444746] pl-2 leading-relaxed">
                <li><strong>Personal and Non-Commercial Use Only:</strong> You may use UA Save solely for personal, private, and non-commercial purposes.</li>
                <li><strong>Downloading Public Content:</strong> You may only download videos that are publicly available and accessible to any user without login restrictions.</li>
                <li><strong>Offline Viewing:</strong> Downloaded content may be used for personal offline viewing purposes only.</li>
                <li><strong>Compliance with Platform Policies:</strong> You agree to respect and comply with the Terms of Service of the originating platform (YouTube, Facebook, Instagram, TikTok) when downloading their content.</li>
                <li><strong>Lawful Use:</strong> You agree to use UA Save only for lawful purposes and in a way that does not infringe upon the rights of others.</li>
              </ul>
            </div>

            {/* 5. Prohibited Use */}
            <div className="bg-[#FFF8F7] border border-[#FCE8E6] rounded-2xl p-6 sm:p-7 space-y-4">
              <h3 className="text-sm sm:text-base font-semibold text-[#D93025] flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-[#FCE8E6] text-[#D93025] flex items-center justify-center text-xs font-bold">5</span>
                <span>Prohibited Use</span>
              </h3>
              
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-[#1F1F1F]">Content and Copyright Violations:</h4>
                <ul className="list-disc list-inside space-y-1 text-xs text-[#444746] pl-2">
                  <li>Downloading, reproducing, or distributing copyrighted content without the permission of the copyright owner.</li>
                  <li>Using downloaded content for commercial purposes, including selling, licensing, or monetizing third-party content.</li>
                  <li>Uploading downloaded videos to other platforms without the original creator&apos;s consent.</li>
                  <li>Circumventing digital rights management (DRM) protections on any content.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-[#1F1F1F]">Technical and Security Violations:</h4>
                <ul className="list-disc list-inside space-y-1 text-xs text-[#444746] pl-2">
                  <li>Attempting to hack, disrupt, overload, or damage the UA Save platform or its servers.</li>
                  <li>Using automated bots, scrapers, crawlers, or scripts to access or use the service.</li>
                  <li>Attempting to reverse-engineer, decompile, or extract source code from UA Save.</li>
                  <li>Introducing viruses, malware, or any other malicious code into the website.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-[#1F1F1F]">Legal and Ethical Violations:</h4>
                <ul className="list-disc list-inside space-y-1 text-xs text-[#444746] pl-2">
                  <li>Downloading or distributing content that is illegal, defamatory, obscene, or harmful.</li>
                  <li>Violating any applicable local, national, or international laws or regulations.</li>
                  <li>Infringing upon the intellectual property, privacy, or other legal rights of any third party.</li>
                  <li>Using UA Save to harass, stalk, or harm any individual or group.</li>
                </ul>
              </div>
            </div>

            {/* 6. Intellectual Property Rights */}
            <div className="bg-white border border-[#DADCE0] rounded-2xl p-6 sm:p-7 space-y-3">
              <h3 className="text-sm sm:text-base font-semibold text-[#1F1F1F] flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-xs font-bold">6</span>
                <span>Intellectual Property Rights</span>
              </h3>
              <p className="text-xs text-[#444746] leading-relaxed">
                <strong>UA Save&apos;s Own Intellectual Property:</strong> All content, design, layout, graphics, code, software, text, and other materials that form part of UA Save — including but not limited to the website name, logo, branding, and written content — are the exclusive intellectual property of UA Save and are protected by applicable intellectual property laws.
              </p>
              <p className="text-xs text-[#444746] leading-relaxed">
                <strong>Third-Party Content:</strong> UA Save does not claim any ownership over videos or content downloaded through our platform. All downloaded content remains the intellectual property of its original creators and the respective platforms from which it was sourced.
              </p>
            </div>

            {/* 7. Third-Party Platforms and Content */}
            <div className="bg-white border border-[#DADCE0] rounded-2xl p-6 sm:p-7 space-y-3">
              <h3 className="text-sm sm:text-base font-semibold text-[#1F1F1F] flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-xs font-bold">7</span>
                <span>Third-Party Platforms and Content</span>
              </h3>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-[#444746] pl-2 leading-relaxed">
                <li><strong>No Affiliation:</strong> UA Save is an independent service and is not affiliated with, endorsed by, sponsored by, or officially connected to YouTube (Google LLC), Facebook (Meta Platforms, Inc.), Instagram (Meta Platforms, Inc.), TikTok (ByteDance Ltd.), or any other third-party platform.</li>
                <li><strong>Third-Party Terms of Service:</strong> When you download content from third-party platforms using UA Save, you remain responsible for complying with the Terms of Service of those platforms.</li>
                <li><strong>No Control Over Third-Party Content:</strong> UA Save does not control, endorse, or take responsibility for the accuracy, legality, or appropriateness of any content available on third-party platforms.</li>
              </ul>
            </div>

            {/* 8. Disclaimer of Warranties */}
            <div className="bg-white border border-[#DADCE0] rounded-2xl p-6 sm:p-7 space-y-3">
              <h3 className="text-sm sm:text-base font-semibold text-[#1F1F1F] flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-xs font-bold">8</span>
                <span>Disclaimer of Warranties</span>
              </h3>
              <p className="text-xs text-[#444746] leading-relaxed">
                UA Save provides its service on an &quot;as is&quot; and &quot;as available&quot; basis without any warranties of any kind, either express or implied, including warranties of merchantability, fitness for a particular purpose, non-infringement, or uninterrupted, error-free operation.
              </p>
            </div>

            {/* 9. Limitation of Liability */}
            <div className="bg-white border border-[#DADCE0] rounded-2xl p-6 sm:p-7 space-y-3">
              <h3 className="text-sm sm:text-base font-semibold text-[#1F1F1F] flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-xs font-bold">9</span>
                <span>Limitation of Liability</span>
              </h3>
              <p className="text-xs text-[#444746] leading-relaxed">
                To the maximum extent permitted by applicable law, UA Save, its owners, directors, employees, affiliates, agents, and licensors shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, or loss of profits, revenue, data, or goodwill resulting from the use or inability to use the service.
              </p>
            </div>

            {/* 10. Copyright and DMCA Policy */}
            <div className="bg-white border border-[#DADCE0] rounded-2xl p-6 sm:p-7 space-y-3">
              <h3 className="text-sm sm:text-base font-semibold text-[#1F1F1F] flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-xs font-bold">10</span>
                <span>Copyright and DMCA Policy</span>
              </h3>
              <p className="text-xs text-[#444746] leading-relaxed">
                UA Save respects the intellectual property rights of others. If you believe that any content accessible through UA Save infringes upon your copyright, please provide a valid DMCA takedown notice with identification of the work, proof of authority, and contact information.
              </p>
              <div className="p-3 bg-[#F8F9FA] rounded-xl border border-[#DADCE0] text-xs text-[#1F1F1F]">
                <span>Submit DMCA notices directly to our support desk via our contact portal.</span>
              </div>
            </div>

            {/* 11. User Responsibilities */}
            <div className="bg-white border border-[#DADCE0] rounded-2xl p-6 sm:p-7 space-y-3">
              <h3 className="text-sm sm:text-base font-semibold text-[#1F1F1F] flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-xs font-bold">11</span>
                <span>User Responsibilities</span>
              </h3>
              <p className="text-xs text-[#444746] leading-relaxed">
                By using UA Save, you accept full responsibility for all activities conducted through your use of the Website, ensuring that any content you download is used in compliance with applicable copyright laws and platform terms of service.
              </p>
            </div>

            {/* 12. Indemnification */}
            <div className="bg-white border border-[#DADCE0] rounded-2xl p-6 sm:p-7 space-y-3">
              <h3 className="text-sm sm:text-base font-semibold text-[#1F1F1F] flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-xs font-bold">12</span>
                <span>Indemnification</span>
              </h3>
              <p className="text-xs text-[#444746] leading-relaxed">
                You agree to defend, indemnify, and hold harmless UA Save, its owners, officers, directors, employees, agents, and licensors from and against any and all claims, damages, losses, liabilities, and expenses arising from your use or misuse of UA Save or violation of these Terms.
              </p>
            </div>

            {/* 13. Modifications to the Service */}
            <div className="bg-white border border-[#DADCE0] rounded-2xl p-6 sm:p-7 space-y-3">
              <h3 className="text-sm sm:text-base font-semibold text-[#1F1F1F] flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-xs font-bold">13</span>
                <span>Modifications to the Service</span>
              </h3>
              <p className="text-xs text-[#444746] leading-relaxed">
                UA Save reserves the right, at any time and without prior notice, to modify, update, suspend, or discontinue any feature, supported platform, or aspect of the service without liability.
              </p>
            </div>

            {/* 14. Termination */}
            <div className="bg-white border border-[#DADCE0] rounded-2xl p-6 sm:p-7 space-y-3">
              <h3 className="text-sm sm:text-base font-semibold text-[#1F1F1F] flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-xs font-bold">14</span>
                <span>Termination</span>
              </h3>
              <p className="text-xs text-[#444746] leading-relaxed">
                UA Save reserves the right to terminate or restrict your access to the Website and its services at any time, with or without notice, for violation of these Terms or any activity deemed unlawful or abusive.
              </p>
            </div>

            {/* 15. Governing Law and Jurisdiction */}
            <div className="bg-white border border-[#DADCE0] rounded-2xl p-6 sm:p-7 space-y-3">
              <h3 className="text-sm sm:text-base font-semibold text-[#1F1F1F] flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-xs font-bold">15</span>
                <span>Governing Law and Jurisdiction</span>
              </h3>
              <p className="text-xs text-[#444746] leading-relaxed">
                These Terms and Conditions shall be governed by and construed in accordance with the applicable laws of the jurisdiction in which UA Save operates, without regard to conflict of law provisions.
              </p>
            </div>

            {/* 16. Changes to Terms and Conditions */}
            <div className="bg-white border border-[#DADCE0] rounded-2xl p-6 sm:p-7 space-y-3">
              <h3 className="text-sm sm:text-base font-semibold text-[#1F1F1F] flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-xs font-bold">16</span>
                <span>Changes to Terms and Conditions</span>
              </h3>
              <p className="text-xs text-[#444746] leading-relaxed">
                UA Save reserves the right to update or replace these Terms at any time. Your continued use of UA Save after any modifications constitutes your acceptance of the revised Terms.
              </p>
            </div>

            {/* 17. Contact Us */}
            <div className="bg-[#E8F0FE] border border-[#D2E3FC] rounded-2xl p-6 sm:p-7 space-y-3">
              <h3 className="text-sm sm:text-base font-semibold text-[#1967D2] flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-white text-[#1967D2] flex items-center justify-center text-xs font-bold">17</span>
                <span>Contact Us</span>
              </h3>
              <p className="text-xs text-[#3C4043] leading-relaxed">
                If you have any questions, concerns, or inquiries regarding these Terms and Conditions, please contact our team:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#1F1F1F]">
                <div className="bg-white p-3 rounded-xl border border-[#DADCE0]">
                  <span className="text-[#5F6368] block text-[11px]">Platform Name</span>
                  <span className="font-medium">UA Save</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-[#DADCE0]">
                  <span className="text-[#5F6368] block text-[11px]">Owned & Operated by</span>
                  <a href="https://worcco.com" target="_blank" rel="noopener noreferrer" className="font-medium text-[#1A73E8] hover:underline">
                    Worcco
                  </a>
                </div>
                <div className="bg-white p-3 rounded-xl border border-[#DADCE0]">
                  <span className="text-[#5F6368] block text-[11px]">Response Time</span>
                  <span className="font-medium">Within 24 to 48 business hours</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-[#DADCE0]">
                  <span className="text-[#5F6368] block text-[11px]">Security Protocol</span>
                  <span className="font-medium text-[#137333]">HTTPS 256-bit Encrypted</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* 6. PRIVACY POLICY SECTION */}
      {/* ========================================================================= */}
      {(activeTab === 'privacy' || activeTab === 'all') && (
        <div id="privacy-policy-section" className="space-y-8 animate-in fade-in duration-300">
          
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#E8F0FE] text-[#1A73E8] mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>User Privacy & Data Protection</span>
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1F1F1F]">Privacy Policy</h2>
            <p className="text-xs sm:text-sm text-[#5F6368] mt-2 leading-relaxed">
              Your privacy is not just a policy for us — it is a promise. Learn how UA Save processes data with strict privacy safeguards and zero URL logging.
            </p>
            <p className="text-[11px] text-[#80868B] mt-1">Last Updated: September 2026</p>
          </div>

          {/* Quick Summary / Intro Card */}
          <div className="bg-white border border-[#DADCE0] rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
            <h3 className="text-base sm:text-lg font-semibold text-[#1F1F1F]">Welcome to UA Save</h3>
            <p className="text-xs sm:text-sm text-[#444746] leading-relaxed">
              Welcome to <strong>UA Save</strong> — your trusted, free, and secure online video downloader for YouTube, Facebook, Instagram, and TikTok. At UA Save, we are deeply committed to protecting the privacy and personal information of every user who visits and uses our platform.
            </p>
            <p className="text-xs sm:text-sm text-[#444746] leading-relaxed">
              This Privacy Policy explains in detail what information we collect, how we use it, how we protect it, and what rights you have as a user. By accessing or using UA Save (the "Website"), you agree to the terms and practices described in this Privacy Policy.
            </p>
            <p className="text-xs sm:text-sm text-[#444746] leading-relaxed">
              We encourage you to read this document carefully to understand our approach to your privacy and data protection.
            </p>

            {/* Quick Table of Contents Grid */}
            <div className="bg-[#F8F9FA] rounded-xl p-4 sm:p-5 border border-[#DADCE0] mt-4">
              <h4 className="text-xs font-bold text-[#1F1F1F] uppercase tracking-wider mb-3">Table of Contents</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs text-[#1A73E8]">
                <a href="#privacy-1" className="hover:underline flex items-center space-x-1.5 py-0.5">
                  <span className="w-4 h-4 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-[10px] font-bold">1</span>
                  <span>Information We Collect</span>
                </a>
                <a href="#privacy-2" className="hover:underline flex items-center space-x-1.5 py-0.5">
                  <span className="w-4 h-4 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-[10px] font-bold">2</span>
                  <span>How We Use Information</span>
                </a>
                <a href="#privacy-3" className="hover:underline flex items-center space-x-1.5 py-0.5">
                  <span className="w-4 h-4 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-[10px] font-bold">3</span>
                  <span>Cookies & Tracking</span>
                </a>
                <a href="#privacy-4" className="hover:underline flex items-center space-x-1.5 py-0.5">
                  <span className="w-4 h-4 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-[10px] font-bold">4</span>
                  <span>Third-Party Services</span>
                </a>
                <a href="#privacy-5" className="hover:underline flex items-center space-x-1.5 py-0.5">
                  <span className="w-4 h-4 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-[10px] font-bold">5</span>
                  <span>Storage & Retention</span>
                </a>
                <a href="#privacy-6" className="hover:underline flex items-center space-x-1.5 py-0.5">
                  <span className="w-4 h-4 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-[10px] font-bold">6</span>
                  <span>Data Security</span>
                </a>
                <a href="#privacy-7" className="hover:underline flex items-center space-x-1.5 py-0.5">
                  <span className="w-4 h-4 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-[10px] font-bold">7</span>
                  <span>Children's Privacy</span>
                </a>
                <a href="#privacy-8" className="hover:underline flex items-center space-x-1.5 py-0.5">
                  <span className="w-4 h-4 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-[10px] font-bold">8</span>
                  <span>User Rights & Choices</span>
                </a>
                <a href="#privacy-9" className="hover:underline flex items-center space-x-1.5 py-0.5">
                  <span className="w-4 h-4 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-[10px] font-bold">9</span>
                  <span>GDPR (EU Users)</span>
                </a>
                <a href="#privacy-10" className="hover:underline flex items-center space-x-1.5 py-0.5">
                  <span className="w-4 h-4 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-[10px] font-bold">10</span>
                  <span>CCPA (California)</span>
                </a>
                <a href="#privacy-11" className="hover:underline flex items-center space-x-1.5 py-0.5">
                  <span className="w-4 h-4 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-[10px] font-bold">11</span>
                  <span>Changes to Policy</span>
                </a>
                <a href="#privacy-12" className="hover:underline flex items-center space-x-1.5 py-0.5">
                  <span className="w-4 h-4 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-[10px] font-bold">12</span>
                  <span>Contact Us</span>
                </a>
              </div>
            </div>
          </div>

          {/* Privacy Articles */}
          <div className="space-y-6">

            {/* 1. Information We Collect */}
            <div id="privacy-1" className="bg-white border border-[#DADCE0] rounded-2xl p-6 sm:p-7 space-y-4">
              <h3 className="text-sm sm:text-base font-semibold text-[#1F1F1F] flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-xs font-bold">1</span>
                <span>Information We Collect</span>
              </h3>
              <p className="text-xs text-[#444746] leading-relaxed">
                UA Save is designed with user privacy as a core principle. We collect minimal data necessary to operate the website efficiently. Below is a breakdown of what we may collect.
              </p>

              <div className="space-y-3 pt-2">
                <div className="bg-[#F8F9FA] p-4 rounded-xl border border-[#DADCE0]">
                  <h4 className="text-xs font-bold text-[#1F1F1F] mb-1.5">A. Information You Provide Voluntarily</h4>
                  <p className="text-xs text-[#444746] leading-relaxed">
                    We do not require you to create an account, sign up, or provide any personal information to use UA Save. However, if you choose to contact us via our contact form or email, we may collect:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-xs text-[#444746]">
                    <li><strong>Your name</strong> (optional)</li>
                    <li><strong>Your email address</strong></li>
                    <li><strong>Your message or inquiry</strong></li>
                  </ul>
                  <p className="text-xs text-[#5F6368] mt-2 italic">
                    This information is used solely to respond to your queries and is never shared with third parties for marketing purposes.
                  </p>
                </div>

                <div className="bg-[#F8F9FA] p-4 rounded-xl border border-[#DADCE0]">
                  <h4 className="text-xs font-bold text-[#1F1F1F] mb-1.5">B. Information Collected Automatically</h4>
                  <p className="text-xs text-[#444746] leading-relaxed">
                    When you visit UA Save, certain technical information may be automatically collected by our servers and third-party analytics tools, including:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-xs text-[#444746]">
                    <li><strong>IP Address</strong> – Used for security monitoring and fraud prevention</li>
                    <li><strong>Browser Type and Version</strong> – To optimize website performance across different browsers</li>
                    <li><strong>Device Type</strong> – Mobile, tablet, or desktop for responsive design purposes</li>
                    <li><strong>Operating System</strong> – Windows, macOS, Android, iOS, etc.</li>
                    <li><strong>Referring URL</strong> – The webpage that directed you to UA Save</li>
                    <li><strong>Pages Visited and Time Spent</strong> – To understand how users interact with the website</li>
                    <li><strong>Date and Time of Visit</strong> – For analytics and security logging</li>
                  </ul>
                </div>

                {/* Important Notice */}
                <div className="bg-[#E6F4EA] border border-[#CEEAD6] p-4 rounded-xl flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-[#137333] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#137333] leading-relaxed font-medium">
                    <strong>Important:</strong> UA Save does NOT collect, store, or log any video URLs that you paste into the download tool. Your video links are processed in real-time and are never saved on our servers.
                  </p>
                </div>

                <div className="bg-[#F8F9FA] p-4 rounded-xl border border-[#DADCE0]">
                  <h4 className="text-xs font-bold text-[#1F1F1F] mb-1.5">C. Video URLs and Download Requests</h4>
                  <p className="text-xs text-[#444746] leading-relaxed">
                    When you paste a video link into UA Save's download tool:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-xs text-[#444746]">
                    <li>The link is processed instantly to fetch download options</li>
                    <li>The link is NOT stored on our servers after the session ends</li>
                    <li>We do NOT track, log, or monitor which videos you download</li>
                    <li>No download history is maintained or associated with your identity</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2. How We Use Your Information */}
            <div id="privacy-2" className="bg-white border border-[#DADCE0] rounded-2xl p-6 sm:p-7 space-y-4">
              <h3 className="text-sm sm:text-base font-semibold text-[#1F1F1F] flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-xs font-bold">2</span>
                <span>How We Use Your Information</span>
              </h3>
              <p className="text-xs text-[#444746] leading-relaxed">
                Any information collected by UA Save is used strictly for the following legitimate purposes:
              </p>

              {/* Purposes Table */}
              <div className="overflow-x-auto rounded-xl border border-[#DADCE0]">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#F8F9FA] border-b border-[#DADCE0] text-[#1F1F1F] font-bold">
                    <tr>
                      <th className="p-3">Purpose</th>
                      <th className="p-3">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#DADCE0] text-[#444746]">
                    <tr>
                      <td className="p-3 font-semibold text-[#1F1F1F] whitespace-nowrap">Website Operation</td>
                      <td className="p-3">To ensure the website functions properly and efficiently</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#1F1F1F] whitespace-nowrap">Analytics and Improvement</td>
                      <td className="p-3">To analyze usage trends and improve the user experience</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#1F1F1F] whitespace-nowrap">Security and Fraud Prevention</td>
                      <td className="p-3">To detect and prevent unauthorized access or malicious activity</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#1F1F1F] whitespace-nowrap">Customer Support</td>
                      <td className="p-3">To respond to inquiries, feedback, and support requests</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#1F1F1F] whitespace-nowrap">Service Announcements</td>
                      <td className="p-3">To notify users of important policy changes or updates</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* What We Do Not Do */}
              <div className="bg-[#FEF7E0] border border-[#FEEFC3] p-4 rounded-xl space-y-2">
                <h4 className="text-xs font-bold text-[#B06000]">We do not:</h4>
                <ul className="list-disc pl-5 space-y-1 text-xs text-[#7C4A00]">
                  <li>Sell your personal data to any third party</li>
                  <li>Use your data for targeted advertising without consent</li>
                  <li>Share your information with unauthorized parties</li>
                  <li>Store your downloaded video history</li>
                </ul>
              </div>
            </div>

            {/* 3. Cookies and Tracking Technologies */}
            <div id="privacy-3" className="bg-white border border-[#DADCE0] rounded-2xl p-6 sm:p-7 space-y-4">
              <h3 className="text-sm sm:text-base font-semibold text-[#1F1F1F] flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-xs font-bold">3</span>
                <span>Cookies and Tracking Technologies</span>
              </h3>
              <p className="text-xs text-[#444746] leading-relaxed">
                UA Save uses cookies and similar tracking technologies to enhance your browsing experience and improve our services.
              </p>

              <div className="bg-[#F8F9FA] p-4 rounded-xl border border-[#DADCE0] space-y-2">
                <h4 className="text-xs font-bold text-[#1F1F1F]">What Are Cookies?</h4>
                <p className="text-xs text-[#444746] leading-relaxed">
                  Cookies are small text files stored on your device by your web browser when you visit a website. They help websites remember your preferences and understand how you use the site.
                </p>
              </div>

              {/* Cookies Table */}
              <div className="overflow-x-auto rounded-xl border border-[#DADCE0]">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#F8F9FA] border-b border-[#DADCE0] text-[#1F1F1F] font-bold">
                    <tr>
                      <th className="p-3">Cookie Type</th>
                      <th className="p-3">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#DADCE0] text-[#444746]">
                    <tr>
                      <td className="p-3 font-semibold text-[#1F1F1F] whitespace-nowrap">Essential Cookies</td>
                      <td className="p-3">Required for the website to function properly</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#1F1F1F] whitespace-nowrap">Analytics Cookies</td>
                      <td className="p-3">Collect anonymous data to help us understand user behavior (e.g., Google Analytics)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#1F1F1F] whitespace-nowrap">Preference Cookies</td>
                      <td className="p-3">Remember your language or display preferences</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#1F1F1F] whitespace-nowrap">Advertising Cookies</td>
                      <td className="p-3">Used by third-party ad networks to display relevant ads (if applicable)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-2 pt-1">
                <h4 className="text-xs font-bold text-[#1F1F1F]">Managing Your Cookie Preferences</h4>
                <p className="text-xs text-[#444746] leading-relaxed">
                  You have full control over cookies. You can:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-[#444746]">
                  <li>Accept or decline non-essential cookies via our cookie consent banner</li>
                  <li>Disable cookies entirely through your browser settings</li>
                  <li>Clear existing cookies at any time via your browser's history settings</li>
                </ul>
                <p className="text-xs text-[#5F6368] italic pt-1">
                  Note: Disabling essential cookies may affect the functionality of certain features on UA Save. For more information on managing cookies, visit{' '}
                  <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#1A73E8] hover:underline">
                    www.allaboutcookies.org
                  </a>.
                </p>
              </div>
            </div>

            {/* 4. Third-Party Services and Links */}
            <div id="privacy-4" className="bg-white border border-[#DADCE0] rounded-2xl p-6 sm:p-7 space-y-4">
              <h3 className="text-sm sm:text-base font-semibold text-[#1F1F1F] flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-xs font-bold">4</span>
                <span>Third-Party Services and Links</span>
              </h3>
              <p className="text-xs text-[#444746] leading-relaxed">
                UA Save may integrate or link to third-party services and websites. This section explains how third-party services interact with your data.
              </p>

              <div className="space-y-3 pt-1">
                <div className="bg-[#F8F9FA] p-4 rounded-xl border border-[#DADCE0] space-y-1.5">
                  <h4 className="text-xs font-bold text-[#1F1F1F]">Google Analytics</h4>
                  <p className="text-xs text-[#444746] leading-relaxed">
                    We use Google Analytics to collect anonymous, aggregated data about website traffic and user behavior. Google Analytics uses cookies to track sessions but does not identify individual users personally.
                  </p>
                  <p className="text-xs text-[#1A73E8]">
                    To opt out of Google Analytics tracking, visit:{' '}
                    <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="hover:underline font-medium">
                      https://tools.google.com/dlpage/gaoptout
                    </a>
                  </p>
                </div>

                <div className="bg-[#F8F9FA] p-4 rounded-xl border border-[#DADCE0] space-y-1.5">
                  <h4 className="text-xs font-bold text-[#1F1F1F]">Advertising Networks</h4>
                  <p className="text-xs text-[#444746] leading-relaxed">
                    UA Save may display advertisements served by third-party ad networks such as Google AdSense. These networks may use cookies to serve ads based on your previous visits to our website or other websites.
                  </p>
                  <p className="text-xs text-[#1A73E8]">
                    To opt out of personalized advertising, visit:{' '}
                    <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="hover:underline font-medium">
                      https://www.google.com/settings/ads
                    </a>
                  </p>
                </div>

                <div className="bg-[#F8F9FA] p-4 rounded-xl border border-[#DADCE0] space-y-2">
                  <h4 className="text-xs font-bold text-[#1F1F1F]">External Platform Links</h4>
                  <p className="text-xs text-[#444746] leading-relaxed">
                    Our website provides tools to download videos from platforms such as:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-[#444746]">
                    <li><strong>YouTube</strong> (owned by Google LLC) – <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#1A73E8] hover:underline">Privacy Policy</a></li>
                    <li><strong>Facebook</strong> (owned by Meta Platforms, Inc.) – <a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer" className="text-[#1A73E8] hover:underline">Privacy Policy</a></li>
                    <li><strong>Instagram</strong> (owned by Meta Platforms, Inc.) – <a href="https://help.instagram.com/519522125107875" target="_blank" rel="noopener noreferrer" className="text-[#1A73E8] hover:underline">Privacy Policy</a></li>
                    <li><strong>TikTok</strong> (owned by ByteDance Ltd.) – <a href="https://www.tiktok.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#1A73E8] hover:underline">Privacy Policy</a></li>
                  </ul>
                  <p className="text-xs text-[#5F6368] pt-1">
                    UA Save is not affiliated with, endorsed by, or officially connected to any of these platforms. Each platform has its own Privacy Policy and Terms of Service. UA Save is not responsible for the privacy practices or content of any third-party websites.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Data Storage and Retention */}
            <div id="privacy-5" className="bg-white border border-[#DADCE0] rounded-2xl p-6 sm:p-7 space-y-4">
              <h3 className="text-sm sm:text-base font-semibold text-[#1F1F1F] flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-xs font-bold">5</span>
                <span>Data Storage and Retention</span>
              </h3>
              <p className="text-xs text-[#444746] leading-relaxed">
                UA Save follows strict data minimization principles:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs text-[#444746]">
                <li><strong>Video URLs</strong> entered into the download tool are never stored after the session ends.</li>
                <li><strong>Analytics data</strong> is retained in anonymized, aggregated form for up to 26 months (standard Google Analytics retention).</li>
                <li><strong>Contact form data</strong> (if submitted) is retained only for as long as necessary to resolve your inquiry.</li>
                <li><strong>Server logs</strong> (IP addresses, access times) are retained for a maximum of 30 days for security monitoring, after which they are automatically deleted.</li>
              </ul>
              <p className="text-xs text-[#444746] leading-relaxed pt-1">
                We store all retained data on secure, encrypted servers and apply industry-standard access controls.
              </p>
            </div>

            {/* 6. Data Security */}
            <div id="privacy-6" className="bg-white border border-[#DADCE0] rounded-2xl p-6 sm:p-7 space-y-4">
              <h3 className="text-sm sm:text-base font-semibold text-[#1F1F1F] flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-xs font-bold">6</span>
                <span>Data Security</span>
              </h3>
              <p className="text-xs text-[#444746] leading-relaxed">
                The security of your information is extremely important to us. UA Save implements the following security measures to protect your data:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="bg-[#F8F9FA] p-3.5 rounded-xl border border-[#DADCE0]">
                  <span className="font-semibold text-xs text-[#1F1F1F] block mb-1">SSL/TLS Encryption (HTTPS)</span>
                  <span className="text-xs text-[#5F6368]">All data transmitted between your browser and our servers is encrypted.</span>
                </div>
                <div className="bg-[#F8F9FA] p-3.5 rounded-xl border border-[#DADCE0]">
                  <span className="font-semibold text-xs text-[#1F1F1F] block mb-1">Firewalls & Intrusion Detection</span>
                  <span className="text-xs text-[#5F6368]">Our servers are protected by advanced firewall systems.</span>
                </div>
                <div className="bg-[#F8F9FA] p-3.5 rounded-xl border border-[#DADCE0]">
                  <span className="font-semibold text-xs text-[#1F1F1F] block mb-1">Strict Access Controls</span>
                  <span className="text-xs text-[#5F6368]">Only authorized personnel can access server configurations.</span>
                </div>
                <div className="bg-[#F8F9FA] p-3.5 rounded-xl border border-[#DADCE0]">
                  <span className="font-semibold text-xs text-[#1F1F1F] block mb-1">No URL Storage</span>
                  <span className="text-xs text-[#5F6368]">We do not store video URLs or download activity logs.</span>
                </div>
              </div>
              <p className="text-xs text-[#5F6368] italic pt-1">
                <strong>Disclaimer:</strong> While we take every reasonable precaution to protect your data, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to maintaining the highest possible standards.
              </p>
            </div>

            {/* 7. Children's Privacy */}
            <div id="privacy-7" className="bg-white border border-[#DADCE0] rounded-2xl p-6 sm:p-7 space-y-3">
              <h3 className="text-sm sm:text-base font-semibold text-[#1F1F1F] flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-xs font-bold">7</span>
                <span>Children's Privacy</span>
              </h3>
              <p className="text-xs text-[#444746] leading-relaxed">
                UA Save is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13 years of age.
              </p>
              <p className="text-xs text-[#444746] leading-relaxed">
                If you are a parent or guardian and believe that your child has provided us with personal information without your consent, please contact us immediately. We will take prompt action to delete such information from our records.
              </p>
              <p className="text-xs text-[#5F6368] font-medium">
                In compliance with the Children's Online Privacy Protection Act (COPPA), we are committed to protecting the privacy of minors online.
              </p>
            </div>

            {/* 8. User Rights and Choices */}
            <div id="privacy-8" className="bg-white border border-[#DADCE0] rounded-2xl p-6 sm:p-7 space-y-4">
              <h3 className="text-sm sm:text-base font-semibold text-[#1F1F1F] flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-xs font-bold">8</span>
                <span>User Rights and Choices</span>
              </h3>
              <p className="text-xs text-[#444746] leading-relaxed">
                As a user of UA Save, you have the following rights regarding your personal data:
              </p>

              {/* Rights Table */}
              <div className="overflow-x-auto rounded-xl border border-[#DADCE0]">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#F8F9FA] border-b border-[#DADCE0] text-[#1F1F1F] font-bold">
                    <tr>
                      <th className="p-3">Right</th>
                      <th className="p-3">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#DADCE0] text-[#444746]">
                    <tr>
                      <td className="p-3 font-semibold text-[#1F1F1F] whitespace-nowrap">Right to Access</td>
                      <td className="p-3">Request a copy of personal data we hold about you</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#1F1F1F] whitespace-nowrap">Right to Rectification</td>
                      <td className="p-3">Request correction of inaccurate personal data</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#1F1F1F] whitespace-nowrap">Right to Erasure</td>
                      <td className="p-3">Request deletion of your personal data ("Right to be Forgotten")</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#1F1F1F] whitespace-nowrap">Right to Object</td>
                      <td className="p-3">Object to the processing of your personal data</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#1F1F1F] whitespace-nowrap">Right to Data Portability</td>
                      <td className="p-3">Request transfer of your data in a structured, machine-readable format</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#1F1F1F] whitespace-nowrap">Right to Withdraw Consent</td>
                      <td className="p-3">Withdraw consent for cookie usage or data processing at any time</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-[#5F6368] pt-1">
                To exercise any of these rights, please contact us. We will respond to all valid requests within 30 business days.
              </p>
            </div>

            {/* 9. GDPR Compliance (For European Union Users) */}
            <div id="privacy-9" className="bg-white border border-[#DADCE0] rounded-2xl p-6 sm:p-7 space-y-3">
              <h3 className="text-sm sm:text-base font-semibold text-[#1F1F1F] flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-xs font-bold">9</span>
                <span>GDPR Compliance (For European Union Users)</span>
              </h3>
              <p className="text-xs text-[#444746] leading-relaxed">
                If you are located in the European Economic Area (EEA), your personal data is protected under the General Data Protection Regulation (GDPR) (EU) 2016/679.
              </p>
              <p className="text-xs text-[#444746] leading-relaxed">
                Under GDPR, UA Save acts as a Data Controller for any personal information voluntarily provided (e.g., contact inquiries). Our legal bases for processing your data include:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-[#444746]">
                <li><strong>Legitimate Interests</strong> – To operate and improve our website securely</li>
                <li><strong>Consent</strong> – For cookies and analytics tracking (where applicable)</li>
                <li><strong>Legal Obligation</strong> – To comply with applicable laws and regulations</li>
              </ul>
              <p className="text-xs text-[#5F6368] pt-1">
                You have the right to lodge a complaint with your local Data Protection Authority (DPA) if you believe your data is being processed unlawfully.
              </p>
            </div>

            {/* 10. CCPA Compliance (For California Residents) */}
            <div id="privacy-10" className="bg-white border border-[#DADCE0] rounded-2xl p-6 sm:p-7 space-y-3">
              <h3 className="text-sm sm:text-base font-semibold text-[#1F1F1F] flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-xs font-bold">10</span>
                <span>CCPA Compliance (For California Residents)</span>
              </h3>
              <p className="text-xs text-[#444746] leading-relaxed">
                If you are a resident of California, you are protected under the California Consumer Privacy Act (CCPA). Under CCPA, you have the right to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-[#444746]">
                <li>Know what personal data we collect and how it is used</li>
                <li>Request deletion of your personal data</li>
                <li>Opt out of the sale of your personal data</li>
              </ul>
              <div className="bg-[#E6F4EA] border border-[#CEEAD6] p-3 rounded-xl">
                <p className="text-xs text-[#137333] font-semibold">
                  UA Save does NOT sell your personal data to any third party, period.
                </p>
              </div>
              <p className="text-xs text-[#5F6368] pt-1">
                To exercise your CCPA rights, contact us and we will respond within 45 days as required by law.
              </p>
            </div>

            {/* 11. Changes to This Privacy Policy */}
            <div id="privacy-11" className="bg-white border border-[#DADCE0] rounded-2xl p-6 sm:p-7 space-y-3">
              <h3 className="text-sm sm:text-base font-semibold text-[#1F1F1F] flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center text-xs font-bold">11</span>
                <span>Changes to This Privacy Policy</span>
              </h3>
              <p className="text-xs text-[#444746] leading-relaxed">
                UA Save reserves the right to update or modify this Privacy Policy at any time to reflect changes in:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-[#444746]">
                <li>Our data practices or services</li>
                <li>Applicable laws and regulations</li>
                <li>Third-party service integrations</li>
              </ul>
              <p className="text-xs text-[#444746] leading-relaxed pt-1">
                When changes are made, we will update the "Last Updated" date at the top of this page. Your continued use of UA Save after any changes constitutes your acceptance of the revised policy.
              </p>
            </div>

            {/* 12. Contact Us */}
            <div id="privacy-12" className="bg-[#E8F0FE] border border-[#D2E3FC] rounded-2xl p-6 sm:p-7 space-y-3">
              <h3 className="text-sm sm:text-base font-semibold text-[#1967D2] flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-white text-[#1967D2] flex items-center justify-center text-xs font-bold">12</span>
                <span>Contact Us</span>
              </h3>
              <p className="text-xs text-[#3C4043] leading-relaxed">
                If you have any questions, concerns, or requests related to this Privacy Policy or how UA Save handles your personal data, please do not hesitate to contact us.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#1F1F1F]">
                <div className="bg-white p-3 rounded-xl border border-[#DADCE0]">
                  <span className="text-[#5F6368] block text-[11px]">Website Name</span>
                  <span className="font-medium">UA Save</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-[#DADCE0]">
                  <span className="text-[#5F6368] block text-[11px]">Owned & Operated by</span>
                  <a href="https://worcco.com" target="_blank" rel="noopener noreferrer" className="font-medium text-[#1A73E8] hover:underline">
                    Worcco
                  </a>
                </div>
                <div className="bg-white p-3 rounded-xl border border-[#DADCE0]">
                  <span className="text-[#5F6368] block text-[11px]">Response Time</span>
                  <span className="font-medium">Within 24 to 48 business hours</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-[#DADCE0]">
                  <span className="text-[#5F6368] block text-[11px]">Data Promise</span>
                  <span className="font-medium text-[#137333]">Zero URL Logging Guaranteed</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      )}

    </section>
  );
}
