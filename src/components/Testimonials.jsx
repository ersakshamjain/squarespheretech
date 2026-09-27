import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: '"SquareSphere rebuilt our Shopify Plus store in 6 weeks and conversion jumped 34%. They feel like an in-house engineering team, not an agency."',
      name: 'Sarah Mitchell',
      role: 'Head of Digital',
      brand: 'LuxeThread',
      platform: 'Shopify Plus',
      initials: 'SM',
      bg: 'bg-blue-600',
      hoverBorder: 'hover:border-blue-300',
    },
    {
      quote: '"The engineering precision and UI craftsmanship are second to none. Our custom B2B Magento portal handles over 10,000 SKUs seamlessly with our ERP."',
      name: 'Marcus Vance',
      role: 'CTO',
      brand: 'AutoParts Direct',
      platform: 'Magento B2B',
      initials: 'MV',
      bg: 'bg-emerald-600',
      hoverBorder: 'hover:border-emerald-300',
    },
    {
      quote: '"Their speed and communication were incredible. They delivered our entire headless luxury platform on time and under budget, with 99.9% uptime."',
      name: 'Elena Rostova',
      role: 'VP of Growth',
      brand: 'SwissTime Watches',
      platform: 'Shopware',
      initials: 'ER',
      bg: 'bg-purple-600',
      hoverBorder: 'hover:border-purple-300',
    },
    {
      quote: '"From custom checkout flows to marketing automation, SquareSphere accelerated our online revenue by 52% in just 4 months. Exceptional ROI."',
      name: 'David Harrison',
      role: 'Founder & CEO',
      brand: 'PureBotanics',
      platform: 'WordPress & Woo',
      initials: 'DH',
      bg: 'bg-amber-600',
      hoverBorder: 'hover:border-amber-300',
    },
    {
      quote: '"Migrated 85,000 product variants to BigCommerce with zero downtime. Site speed improved by 60% and our Core Web Vitals are all green."',
      name: 'Jessica Lin',
      role: 'Director of eCommerce',
      brand: 'UrbanEdge',
      platform: 'BigCommerce',
      initials: 'JL',
      bg: 'bg-cyan-600',
      hoverBorder: 'hover:border-cyan-300',
    },
    {
      quote: '"Their full-stack team engineered our custom multi-currency commerce engine with astonishing speed. They are true masters of modern web engineering."',
      name: 'Alex Mercer',
      role: 'Co-Founder & COO',
      brand: 'NovaTech Labs',
      platform: 'Custom Stack',
      initials: 'AM',
      bg: 'bg-indigo-600',
      hoverBorder: 'hover:border-indigo-300',
    }
  ];

  const sliderRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('div');
      const cardWidth = card ? card.offsetWidth + 24 : 360;
      sliderRef.current.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
    }
  };

  const goToPage = (pageIndex) => {
    if (sliderRef.current) {
      const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
      let targetScroll = 0;
      if (pageIndex === 1) targetScroll = maxScroll * 0.5;
      else if (pageIndex === 2) targetScroll = maxScroll;
      sliderRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
      setActiveDot(pageIndex);
    }
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
      if (maxScroll > 10) {
        const ratio = sliderRef.current.scrollLeft / maxScroll;
        const page = ratio < 0.3 ? 0 : ratio > 0.7 ? 2 : 1;
        setActiveDot(page);
      }
    }
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#FAFAFA] border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Centered like Projects) */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-4">
            <span className="text-amber-500 font-bold">★★★★★</span> Verified Client Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight font-heading">
            What Clients Say About Working With Us
          </h2>
          <p className="text-gray-500 mt-3 text-base sm:text-lg leading-relaxed">
            Real feedback from enterprise founders, CTOs and eCommerce leaders who scaled their digital presence with SquareSphere.
          </p>
        </div>

        {/* 3-Cards Carousel Slider with Flanking Desktop Arrows */}
        <div className="relative group/testi">
          <button
            onClick={() => scroll(-1)}
            className="hidden md:flex absolute -left-3 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-white border border-gray-200 shadow-xl text-gray-700 hover:text-blue-600 hover:border-blue-400 hover:scale-110 active:scale-95 transition-all items-center justify-center cursor-pointer"
            aria-label="Previous Testimonials"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll(1)}
            className="hidden md:flex absolute -right-3 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-white border border-gray-200 shadow-xl text-gray-700 hover:text-blue-600 hover:border-blue-400 hover:scale-110 active:scale-95 transition-all items-center justify-center cursor-pointer"
            aria-label="Next Testimonials"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4 px-1 -mx-4 px-4 sm:mx-0 sm:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`w-[85vw] max-w-[340px] flex-shrink-0 snap-center sm:w-[calc(50%-12px)] sm:max-w-none lg:w-[calc(33.333%-16px)] sm:min-w-[340px] lg:min-w-[380px] bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/90 shadow-sm card-hover ${t.hoverBorder} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center text-amber-400 gap-0.5 text-sm">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    <span className="text-xs font-bold text-gray-800 ml-1.5">5.0</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-full">
                    <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg> Verified
                  </span>
                </div>
                <blockquote className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {t.quote}
                </blockquote>
              </div>
              <div className="flex items-center gap-3.5 pt-4 border-t border-gray-100">
                <div className={`w-11 h-11 rounded-full ${t.bg} text-white font-bold flex items-center justify-center text-sm shadow-md`}>
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 font-heading">{t.name}</h4>
                  <p className="text-xs text-gray-500 font-medium">
                    {t.role}, <span className="text-blue-600 font-semibold">{t.brand}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* Mobile Carousel Navigation for Testimonials */}
        <div className="md:hidden flex items-center justify-between mt-5 px-1">
          <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
            <span>Swipe client reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => scroll(-1)} className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-700 active:scale-95 shadow-sm" aria-label="Previous Testimonial">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={() => scroll(1)} className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-700 active:scale-95 shadow-sm" aria-label="Next Testimonial">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Interactive Pagination Dots */}
        <div className="flex justify-center items-center gap-2.5 mt-8">
          {[0, 1, 2].map((page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeDot === page
                  ? 'w-8 bg-blue-600 shadow-md shadow-blue-500/30'
                  : 'w-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to page ${page + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

