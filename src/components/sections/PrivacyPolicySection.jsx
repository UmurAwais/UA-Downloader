import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function PrivacyPolicySection() {
  return (
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
  );
}
