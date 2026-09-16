import React from 'react';
import { Shield } from 'lucide-react';

export default function TermsSection() {
  return (
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
  );
}
