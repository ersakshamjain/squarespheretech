import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Team() {
  const sliderRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  const team = [
    {
      name: 'Saksham Jain',
      role: 'Founder & Lead Technologist',
      image: '/team/saksham-jain.jpg',
      initials: 'SJ',
      roleColor: 'text-blue-600',
      bg: 'bg-gradient-to-tr from-[#12C2E9] to-[#2A4CF0]',
      ring: 'ring-cyan-100',
      hoverBorder: 'hover:border-cyan-200',
      shadow: 'shadow-cyan-500/25',
      line1: 'Spearheading company vision, executive leadership &',
      line2: 'enterprise tech architecture to scale brands.'
    },
    {
      name: 'Harshil Bansal',
      role: 'Finance Manager',
      image: '/team/harshil-bansal.jpg',
      initials: 'HB',
      roleColor: 'text-emerald-600',
      bg: 'bg-gradient-to-tr from-[#064E3B] to-[#059669]',
      ring: 'ring-emerald-100',
      hoverBorder: 'hover:border-emerald-200',
      shadow: 'shadow-emerald-500/25',
      line1: 'Financial planning, revenue operations, fiscal',
      line2: 'governance & commercial growth strategy.'
    },
    {
      name: 'Navneet Jain',
      role: 'Business Development Manager',
      image: '/team/navneet-jain.jpg',
      initials: 'NJ',
      roleColor: 'text-indigo-600',
      bg: 'bg-gradient-to-tr from-[#1E1B4B] to-[#4338CA]',
      ring: 'ring-indigo-100',
      hoverBorder: 'hover:border-indigo-200',
      shadow: 'shadow-indigo-500/25',
      line1: 'Strategic global partnerships, enterprise',
      line2: 'client acquisition & digital brand expansion.'
    },
    {
      name: 'Ananya Sharma',
      role: 'Lead UI/UX Designer',
      initials: 'AS',
      roleColor: 'text-purple-600',
      bg: 'bg-gradient-to-tr from-[#7928CA] to-[#FF0080]',
      ring: 'ring-purple-100',
      hoverBorder: 'hover:border-purple-200',
      shadow: 'shadow-purple-500/25',
      line1: 'Crafting high-converting eCommerce UI/UX.',
      line2: 'Modern design systems & user experiences.'
    },
    {
      name: 'Vikram Mehta',
      role: 'Technical Lead, eCommerce',
      initials: 'VM',
      roleColor: 'text-indigo-600',
      bg: 'bg-gradient-to-tr from-[#1E1B4B] to-[#4338CA]',
      ring: 'ring-indigo-100',
      hoverBorder: 'hover:border-indigo-200',
      shadow: 'shadow-indigo-500/25',
      line1: 'Shopify Plus & Magento B2B integration lead.',
      line2: 'Custom ERP connectors & high-volume APIs.'
    },
    {
      name: 'Priya Nair',
      role: 'Digital Growth Manager',
      initials: 'PN',
      roleColor: 'text-emerald-600',
      bg: 'bg-gradient-to-tr from-[#064E3B] to-[#059669]',
      ring: 'ring-emerald-100',
      hoverBorder: 'hover:border-emerald-200',
      shadow: 'shadow-emerald-500/25',
      line1: 'Multi-channel acquisition & performance growth.',
      line2: 'Scaling paid media ROI & customer retention.'
    },
    {
      name: 'Rohan Verma',
      role: 'Senior Full-Stack Engineer',
      initials: 'RV',
      roleColor: 'text-pink-600',
      bg: 'bg-gradient-to-tr from-[#831843] to-[#DB2777]',
      ring: 'ring-pink-100',
      hoverBorder: 'hover:border-pink-200',
      shadow: 'shadow-pink-500/25',
      line1: 'Senior full-stack & headless commerce engineer.',
      line2: 'React, Next.js & high-speed microservices.'
    },
    {
      name: 'Neha Gupta',
      role: 'Lead QA & Performance',
      initials: 'NG',
      roleColor: 'text-amber-600',
      bg: 'bg-gradient-to-tr from-[#78350F] to-[#D97706]',
      ring: 'ring-amber-100',
      hoverBorder: 'hover:border-amber-200',
      shadow: 'shadow-amber-500/25',
      line1: 'Core Web Vitals & performance optimization.',
      line2: 'Automated testing & zero-defect deployments.'
    }
  ];

  const slide = (direction) => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('div');
      const cardWidth = card ? card.offsetWidth + 24 : 380;
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
    <section id="team" className="py-20 md:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight font-heading">
              Meet The Team Behind SquareSphere
            </h2>
            <p className="text-gray-500 mt-3 text-base sm:text-lg max-w-2xl">
              A focused squad of engineers, designers and strategists working as one unit on every project.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => slide(-1)}
              className="w-11 h-11 rounded-full border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-400 flex items-center justify-center text-gray-700 shadow-sm transition active:scale-95"
              aria-label="Previous Team Members"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => slide(1)}
              className="w-11 h-11 rounded-full border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-400 flex items-center justify-center text-gray-700 shadow-sm transition active:scale-95"
              aria-label="Next Team Members"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3-Cards Carousel Slider Track */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4 px-1 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {team.map((member, idx) => (
            <div
              key={idx}
              className={`w-[85vw] max-w-[320px] flex-shrink-0 snap-center sm:w-[calc(50%-12px)] sm:max-w-none lg:w-[calc(33.333%-16px)] sm:min-w-[340px] lg:min-w-[380px] p-6 sm:p-8 rounded-2xl border border-gray-100 bg-[#FCFCFD] text-center card-hover ${member.hoverBorder} shadow-sm transition-all flex flex-col justify-between`}
            >
              <div>
                <div
                  className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ${member.bg} text-white font-extrabold text-2xl sm:text-3xl flex items-center justify-center mx-auto mb-5 sm:mb-6 shadow-xl ${member.shadow} ring-4 ${member.ring}`}
                >
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      className="w-full h-full object-cover object-center scale-105 hover:scale-115 transition-transform duration-500"
                    />
                  ) : (
                    member.initials
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-heading">{member.name}</h3>
                <p className={`text-xs ${member.roleColor} mt-1.5 font-semibold uppercase tracking-wider`}>
                  {member.role}
                </p>
              </div>
              <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                {member.line1}
                {member.line2 && (
                  <>
                    <br className="hidden sm:inline" /> {member.line2}
                  </>
                )}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Carousel Navigation for Team */}
        <div className="md:hidden flex items-center justify-between mt-5 px-1">
          <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
            <span>Swipe 8 squad members</span>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => slide(-1)} className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-700 active:scale-95 shadow-sm" aria-label="Previous Team Member">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={() => slide(1)} className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-700 active:scale-95 shadow-sm" aria-label="Next Team Member">
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
              aria-label={`Go to team page ${page + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
