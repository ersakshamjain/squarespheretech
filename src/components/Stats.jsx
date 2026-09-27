import React, { useEffect, useRef, useState } from 'react';

function Counter({ target, decimals = 0, suffix = '' }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1800;
          const startTime = performance.now();

          const updateCount = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentVal = target * easeOut;

            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.25 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={elementRef}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="bg-[#030712] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-[#0A0F1D] border border-gray-800/90 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-800/80 relative z-10">
            <div className="pt-4 md:pt-0">
              <div className="text-4xl sm:text-5xl font-extrabold text-white font-heading">
                <Counter target={3} suffix="+" />
              </div>
              <div className="text-xs sm:text-sm text-gray-400 mt-2 font-medium">Years Of Experience</div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-4xl sm:text-5xl font-extrabold text-white font-heading">
                <Counter target={40} suffix="+" />
              </div>
              <div className="text-xs sm:text-sm text-gray-400 mt-2 font-medium">Projects Delivered</div>
            </div>

            <div className="pt-4 md:pt-0 col-span-2 sm:col-span-1">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#12C2E9] font-heading drop-shadow-[0_0_15px_rgba(18,194,233,0.4)]">
                <Counter target={20} suffix="+" />
              </div>
              <div className="text-xs sm:text-sm text-cyan-300 mt-2 font-medium">Industries Served</div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-4xl sm:text-5xl font-extrabold text-white font-heading">
                <Counter target={99.9} decimals={1} suffix="%" />
              </div>
              <div className="text-xs sm:text-sm text-gray-400 mt-2 font-medium">Uptime & Retention</div>
            </div>

            <div className="pt-4 md:pt-0 col-span-2 sm:col-span-1">
              <div className="text-4xl sm:text-5xl font-extrabold text-cyan-400 font-heading">
                <Counter target={15} suffix="+" />
              </div>
              <div className="text-xs sm:text-sm text-gray-400 mt-2 font-medium">Global Markets Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
