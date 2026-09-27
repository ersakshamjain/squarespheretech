import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#090E1D] rounded-3xl p-10 sm:p-16 text-center text-white border border-gray-800 shadow-2xl relative overflow-hidden">
          {/* Subtle glow orb */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 relative z-10 font-heading">
            Have A Project In Mind? Let's Build Something That Actually Converts.
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg mb-8 relative z-10">
            Tell us where you're stuck — we'll reply within one business day with next steps.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-cyan-50 hover:text-blue-900 transition-all duration-200 shadow-lg relative z-10 transform hover:scale-105 active:scale-95"
          >
            Start A Conversation <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
