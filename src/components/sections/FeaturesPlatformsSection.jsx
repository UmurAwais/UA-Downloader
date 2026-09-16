import React from 'react';
import { Sparkles } from 'lucide-react';

export default function FeaturesPlatformsSection() {
  return (
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
  );
}
