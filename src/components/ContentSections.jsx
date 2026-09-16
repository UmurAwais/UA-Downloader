import React, { useState } from 'react';
import {
  Zap,
  Info,
  Layers,
  HelpCircle,
  Shield,
  Lock
} from 'lucide-react';
import HowItWorksSection from './sections/HowItWorksSection';
import AboutUsSection from './sections/AboutUsSection';
import FeaturesPlatformsSection from './sections/FeaturesPlatformsSection';
import FaqSection from './sections/FaqSection';
import TermsSection from './sections/TermsSection';
import PrivacyPolicySection from './sections/PrivacyPolicySection';

/**
 * ContentSections - Master container managing tabs and rendering modular sections
 */
export default function ContentSections() {
  const [activeTab, setActiveTab] = useState('how-it-works');

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

      {/* Render Selected Modular Section */}
      {activeTab === 'how-it-works' && <HowItWorksSection />}
      {activeTab === 'about' && <AboutUsSection />}
      {activeTab === 'features' && <FeaturesPlatformsSection />}
      {activeTab === 'faqs' && <FaqSection />}
      {activeTab === 'terms' && <TermsSection />}
      {activeTab === 'privacy' && <PrivacyPolicySection />}

    </section>
  );
}
