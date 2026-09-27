import React from 'react';
import { Linkedin, Instagram, MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#030712] text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-gray-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4 group">
              <img src="/brand/logo-mark.png" alt="SquareSphere Technologies" className="w-9 h-9 object-contain drop-shadow-[0_4px_12px_rgba(0,122,255,0.4)] transition-transform duration-300 group-hover:scale-105" />
              <div className="flex flex-col">
                <span className="text-white font-extrabold text-lg tracking-tight font-heading leading-tight">SquareSphere</span>
                <span className="text-[#12C2E9] text-[8.5px] font-bold tracking-[0.22em] -mt-0.5">TECHNOLOGIES</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 max-w-sm leading-relaxed">
              Engineering digital experiences, custom eCommerce stores, and growth systems designed to compound.
            </p>
          </div>

          {/* 1. Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-4">Company</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400">
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#team" className="hover:text-white transition">Team</a></li>
              <li><a href="#projects" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
            </ul>
          </div>

          {/* 2. Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-4">Services</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400">
              <li><a href="#services" className="hover:text-white transition">Shopify & Plus</a></li>
              <li><a href="#services" className="hover:text-white transition">Magento B2B</a></li>
              <li><a href="#services" className="hover:text-white transition">PrestaShop 8</a></li>
              <li><a href="#services" className="hover:text-white transition">WooCommerce</a></li>
              <li><a href="#services" className="hover:text-white transition">Custom Web & Apps</a></li>
              <li><a href="#services" className="hover:text-white transition">Digital Growth</a></li>
            </ul>
          </div>

          {/* 3. Industries */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-4">Industries</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400">
              <li><a href="#industries" className="hover:text-white transition">Retail</a></li>
              <li><a href="#industries" className="hover:text-white transition">Finance</a></li>
              <li><a href="#industries" className="hover:text-white transition">Healthcare</a></li>
              <li><a href="#industries" className="hover:text-white transition">Education</a></li>
            </ul>
          </div>

          {/* 4. Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-4">Legal</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms</a></li>
              <li><a href="#" className="hover:text-white transition">Cookies</a></li>
              <li><a href="#" className="hover:text-white transition">Sitemap</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © 2026 SquareSphere Technologies. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <a
              href="https://www.linkedin.com/company/squaresphere-technologies/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0A66C2] transition"
              title="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.59 1.59 0 0 0-1.6 1.6 1.59 1.59 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/squarespheretech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E4405F] transition"
              title="Instagram"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="https://wa.me/917427097207"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#25D366] transition"
              title="WhatsApp"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.178L2 22l4.981-1.309A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.636 0-3.15-.494-4.421-1.34l-.317-.212-2.972.78.794-2.898-.233-.37A8.156 8.156 0 0 1 3.8 12c0-4.521 3.679-8.2 8.2-8.2 4.521 0 8.2 3.679 8.2 8.2 0 4.521-3.679 8.2-8.2 8.2z"/>
              </svg>
            </a>
            <a
              href="mailto:techsquaresphere@gmail.com"
              className="hover:text-white transition"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
