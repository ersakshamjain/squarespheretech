import React from 'react';
import { Layers, Zap, TrendingUp, Users } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      title: 'End-To-End Ownership',
      desc: 'One team handles strategy, design, dev and growth — no hand-off gaps.',
      icon: Layers,
      color: 'bg-blue-500/10 text-cyan-400'
    },
    {
      title: 'Speed Without Shortcuts',
      desc: 'Production-grade code shipped in weeks, not months.',
      icon: Zap,
      color: 'bg-cyan-500/10 text-cyan-400'
    },
    {
      title: 'Revenue-First Mindset',
      desc: 'Every decision is filtered through ROI — we track what moves the needle.',
      icon: TrendingUp,
      color: 'bg-purple-500/10 text-purple-400'
    },
    {
      title: 'Transparent Collaboration',
      desc: 'Daily Slack updates, weekly demos, shared dashboards — zero black boxes.',
      icon: Users,
      color: 'bg-emerald-500/10 text-emerald-400'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#030712] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-3xl font-heading">
            A Technology Partner That Stays Accountable For Results
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#0A0F1D] border border-gray-800/80 hover:border-gray-700 transition"
              >
                <div className={`w-11 h-11 rounded-xl ${p.color} flex items-center justify-center mb-6`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-heading">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
