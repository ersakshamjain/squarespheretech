import React, { useState } from 'react';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';

export default function Navbar({ currentPage = 'home' }) {
  const [isOpen, setIsOpen] = useState(false);

  const isAbout = currentPage === 'about';

  const navLinks = [
    { name: 'Home', href: isAbout ? '/#home' : '#home' },
    { name: 'About', href: '#/about', isActive: isAbout },
    { name: 'Services', href: isAbout ? '/#services' : '#services' },
    { name: 'Projects', href: isAbout ? '/#projects' : '#projects' },
    { name: 'Testimonials', href: isAbout ? '/#testimonials' : '#testimonials' },
    { name: 'Team', href: isAbout ? '/#team' : '#team' },
    { name: 'Contact', href: isAbout ? '/#contact' : '#contact' },
  ];

  return (
    <header className="site-header fixed top-0 left-0 right-0 z-50 transition-all">
      {/* High-Impact Top Continuous News Ticker / Announcement Bar */}
      <div className="ticker-wrapper bg-gradient-to-r from-[#030712] via-[#0A1A3A] to-[#030712] border-b border-cyan-500/25 py-2 relative overflow-hidden z-20 select-none">
        {/* Subtle Fade Edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#030712] to-transparent z-10"></div>
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#030712] to-transparent z-10"></div>

        {/* Continuous News Marquee Track */}
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="animate-news-ticker flex items-center gap-8 text-[11px] sm:text-xs text-gray-200 flex-shrink-0 pr-8">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-bold text-[10px] tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
              Live Update
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="text-cyan-400 font-bold">🚀 Q2/Q3 Onboarding:</span>
              <span>Accepting 3 Enterprise Projects for Scaled Commerce &amp; Headless Engineering</span>
              <a href="#contact" className="text-cyan-300 font-bold underline underline-offset-2 hover:text-white transition">Claim Slot &rarr;</a>
            </span>
            <span className="text-gray-600">•</span>
            <span className="inline-flex items-center gap-2">
              <span className="text-amber-400 font-bold">⚡ Certified Partners:</span>
              <span>Accredited Experts in Shopify Plus, Adobe Magento, Shopware, Google &amp; Meta</span>
            </span>
            <span className="text-gray-600">•</span>
            <span className="inline-flex items-center gap-2">
              <span className="text-emerald-400 font-bold">🌐 Global Delivery:</span>
              <span>40+ High-Performance Commerce Platforms Deployed Across USA, UK, UAE &amp; India (99.9% Uptime)</span>
            </span>
            <span className="text-gray-600">•</span>
            <span className="inline-flex items-center gap-2">
              <span className="text-purple-400 font-bold">💬 Instant Technical Scoping:</span>
              <span>Direct WhatsApp Chat with Senior Technical Architect within 15 Mins</span>
              <a href="https://wa.me/917427097207" target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-bold underline underline-offset-2 hover:text-emerald-300 transition">WhatsApp Now 💬</a>
            </span>
          </div>

          {/* Duplicate track for seamless infinite marquee loop */}
          <div className="animate-news-ticker flex items-center gap-8 text-[11px] sm:text-xs text-gray-200 flex-shrink-0 pr-8" aria-hidden="true">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-bold text-[10px] tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
              Live Update
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="text-cyan-400 font-bold">🚀 Q2/Q3 Onboarding:</span>
              <span>Accepting 3 Enterprise Projects for Scaled Commerce &amp; Headless Engineering</span>
              <a href="#contact" className="text-cyan-300 font-bold underline underline-offset-2 hover:text-white transition">Claim Slot &rarr;</a>
            </span>
            <span className="text-gray-600">•</span>
            <span className="inline-flex items-center gap-2">
              <span className="text-amber-400 font-bold">⚡ Certified Partners:</span>
              <span>Accredited Experts in Shopify Plus, Adobe Magento, Shopware, Google &amp; Meta</span>
            </span>
            <span className="text-gray-600">•</span>
            <span className="inline-flex items-center gap-2">
              <span className="text-emerald-400 font-bold">🌐 Global Delivery:</span>
              <span>40+ High-Performance Commerce Platforms Deployed Across USA, UK, UAE &amp; India (99.9% Uptime)</span>
            </span>
            <span className="text-gray-600">•</span>
            <span className="inline-flex items-center gap-2">
              <span className="text-purple-400 font-bold">💬 Instant Technical Scoping:</span>
              <span>Direct WhatsApp Chat with Senior Technical Architect within 15 Mins</span>
              <a href="https://wa.me/917427097207" target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-bold underline underline-offset-2 hover:text-emerald-300 transition">WhatsApp Now 💬</a>
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Official SquareSphere Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="flex items-center gap-2.5">
            <img src="/brand/logo-mark.png" alt="SquareSphere Technologies" className="w-10 h-10 object-contain drop-shadow-[0_4px_14px_rgba(0,122,255,0.45)] transition-transform duration-300 group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="brand-title text-white font-extrabold text-lg sm:text-xl tracking-tight font-heading leading-tight" style={{ color: '#ffffff' }}>SquareSphere</span>
              <span className="text-[#12C2E9] text-[8.5px] sm:text-[9.5px] font-bold tracking-[0.22em] -mt-0.5">TECHNOLOGIES</span>
            </div>
          </div>
        </a>

        {/* Desktop Nav Links (High Visibility Hover) */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`nav-link ${link.isActive ? 'text-[#38BDF8] !text-cyan-400 bg-white/10 font-bold' : ''}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button with Running Glowing Border */}
        <div className="hidden sm:flex items-center">
          <div className="running-border-box shadow-lg shadow-cyan-500/20">
            <a
              href="#contact"
              className="running-border-inner px-5 py-2.5 text-white text-sm font-semibold tracking-wide flex items-center gap-2 hover:text-cyan-300 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Get a Free Consultation
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg bg-gray-900/60 border border-gray-800"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Premium Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#030712]/98 backdrop-blur-2xl border-b border-gray-800/90 px-5 pt-3 pb-6 space-y-2 shadow-2xl animate-fadeIn">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 text-sm font-semibold transition-all group"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-cyan-400 transition-colors" />
              </a>
            ))}
          </div>

          {/* Premium Glowing CTA Button */}
          <div className="pt-3">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#12C2E9] via-[#2A4CF0] to-[#C471ED] text-white font-bold text-sm shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 active:scale-98 transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              Get a Free Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Direct WhatsApp Quick Connect in Mobile Drawer */}
          <div className="pt-2 text-center">
            <a
              href="https://wa.me/917427097207"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-emerald-400 hover:text-emerald-300 font-medium py-1.5 px-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Direct WhatsApp Scoping: +91 7427097207
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
