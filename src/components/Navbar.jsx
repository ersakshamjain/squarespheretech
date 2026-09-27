import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header fixed top-0 left-0 right-0 z-50 transition-all">
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
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#testimonials" className="nav-link">Testimonials</a>
          <a href="#team" className="nav-link">Team</a>
          <a href="#contact" className="nav-link">Contact</a>
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
          className="md:hidden text-gray-300 hover:text-white p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0F1D] border-b border-gray-800 px-6 py-6 space-y-4">
          <a href="#home" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-white text-base font-medium">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-white text-base font-medium">About</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-white text-base font-medium">Services</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-white text-base font-medium">Projects</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-white text-base font-medium">Testimonials</a>
          <a href="#team" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-white text-base font-medium">Team</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-white text-base font-medium">Contact</a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-center w-full py-3 rounded-lg bg-blue-600 text-white font-medium text-sm"
          >
            Get a Free Consultation
          </a>
        </div>
      )}
    </header>
  );
}
