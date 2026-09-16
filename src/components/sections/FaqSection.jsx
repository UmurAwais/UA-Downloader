import React, { useState } from 'react';
import { HelpCircle, Search, ChevronDown, ChevronUp } from 'lucide-react';

export default function FaqSection() {
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
  );
}
