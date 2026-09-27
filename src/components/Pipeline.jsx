import React from 'react';

export default function Pipeline() {
  const steps = [
    { num: 1, title: 'Discovery & Audit', desc: 'Requirements gathering & current-state tech audit.' },
    { num: 2, title: 'Strategy & Roadmap', desc: 'Proposing tech stack, budgets & delivery timeline.' },
    { num: 3, title: 'Design & Prototype', desc: 'High-fidelity UI screens & interactive system workflows.' },
    { num: 4, title: 'Build & QA', desc: 'Clean, production-grade development & comprehensive QA.' },
    { num: 5, title: 'Launch & Scale', desc: 'Continuous deployment, optimization & growth marketing.' }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAFAFA] border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Our Delivery Pipeline</h2>
          <p className="text-gray-500 mt-3 text-base sm:text-lg">
            A structured workflow designed for clarity, velocity and success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-7 left-12 right-12 h-0.5 bg-gray-200 -z-0"></div>

          {steps.map((s, idx) => (
            <div key={idx} className="text-center relative z-10 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-black text-white font-bold flex items-center justify-center text-lg mb-5 shadow-md">
                {s.num}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed max-w-[200px]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
