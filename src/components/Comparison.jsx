import React from 'react';
import { AlertTriangle, Zap } from 'lucide-react';

export default function Comparison() {
  const bottlenecks = [
    { title: 'Scattered Teams', desc: 'No unified ownership. Project gets handed off between disconnected freelancers or silos.' },
    { title: 'Cookie-Cutter Templates', desc: 'Forcing your unique business model into standard rigid pre-built layouts.' },
    { title: 'Vanity Metrics', desc: 'Focusing on traffic and impressions instead of real revenue and conversion rate.' },
    { title: 'Slow Turnaround', desc: 'Layers of bureaucracy, endless meetings, and months before you see any code.' },
  ];

  const approach = [
    { title: 'Unified Pod Model', desc: 'Dedicated squad of experts staying on your project from discovery through growth.' },
    { title: 'Custom-Built Solutions', desc: 'Bespoke engineering optimized for your exact conversion flows and tech stack.' },
    { title: 'Revenue-Linked KPIs', desc: 'Every metric we optimize is directly connected to your bottom-line sales.' },
    { title: 'Rapid Sprint Cycles', desc: 'Agile delivery, continuous deployment, and fully-functional code in weeks.' },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAFAFA] border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight max-w-3xl font-heading">
            Why Businesses Choose SquareSphere Over A Typical Agency
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 1. The Typical Agency Bottleneck */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#140C0E] border border-red-950/80 text-white shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-7 h-7 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-sm font-bold">
                ✕
              </div>
              <h3 className="text-xl font-bold text-white font-heading">The Typical Agency Bottleneck</h3>
            </div>

            <div className="space-y-6">
              {bottlenecks.map((b, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white font-heading">{b.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. The SquareSphere Approach */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#09151B] border border-cyan-900/60 text-white shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-7 h-7 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm font-bold">
                ✓
              </div>
              <h3 className="text-xl font-bold text-white font-heading">The SquareSphere Approach</h3>
            </div>

            <div className="space-y-6">
              {approach.map((a, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <Zap className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white font-heading">{a.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed">
                      {a.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
