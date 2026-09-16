import React from 'react';
import { Globe, ShieldCheck } from 'lucide-react';
import { YouTubeIcon, FacebookIcon, InstagramIcon, TikTokIcon } from '../PlatformIcons';

export default function AboutUsSection() {
  return (
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
  );
}
