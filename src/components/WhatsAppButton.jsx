import React from 'react';

export default function WhatsAppButton() {
  const waUrl = "https://wa.me/917427097207?text=Hi%20SquareSphere%20Technologies,%20I%20have%20an%20enquiry%20regarding%20a%20project.";

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3">
      {/* Floating Live Prompt Pill */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/95 backdrop-blur-md text-gray-900 text-xs font-semibold shadow-xl border border-gray-200/90 hover:border-emerald-400 hover:shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span>Online now &bull; <span className="text-emerald-600 font-bold">Chat for fast quote</span></span>
      </a>

      {/* Pulse WhatsApp Icon Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 transform hover:scale-105 active:scale-95 transition-all duration-200 relative group"
        aria-label="Chat on WhatsApp"
        title="Chat directly on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3 sm:w-3.5 h-3 sm:h-3.5 bg-emerald-400 rounded-full border-2 border-white animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-3 sm:w-3.5 h-3 sm:h-3.5 bg-emerald-400 rounded-full border-2 border-white"></span>
        <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.178L2 22l4.981-1.309A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.636 0-3.15-.494-4.421-1.34l-.317-.212-2.972.78.794-2.898-.233-.37A8.156 8.156 0 0 1 3.8 12c0-4.521 3.679-8.2 8.2-8.2 4.521 0 8.2 3.679 8.2 8.2 0 4.521-3.679 8.2-8.2 8.2z"/>
        </svg>
      </a>
    </div>
  );
}
