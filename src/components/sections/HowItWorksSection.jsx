import React from 'react';
import { 
  Zap, 
  Sparkles, 
  CheckCircle2, 
  Laptop, 
  Smartphone, 
  Tablet, 
  Check 
} from 'lucide-react';
import { YouTubeIcon, FacebookIcon, InstagramIcon, TikTokIcon } from '../PlatformIcons';

export default function HowItWorksSection() {
  return (
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
  );
}
