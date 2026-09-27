import React from 'react';
import { Shirt, Sparkles, Cpu, Utensils, Laptop, Home } from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      title: 'Fashion, Apparel & Luxury',
      desc: 'High-aesthetic visual storytelling, swatch selectors, lookbooks, custom size charts, and sub-second headless checkout for high-velocity catalog drops.',
      icon: Shirt,
      bg: 'bg-blue-50 text-blue-600',
      borderHover: 'hover:border-blue-400',
      tags: ['Shopify Plus', 'Headless Next.js', 'Visual Lookbooks']
    },
    {
      title: 'Health, Beauty & Cosmetics',
      desc: 'Seamless subscription logic (Recharge/Smartrr), shade finders, bundle builders, ingredient accordions, and high-converting recurring checkout flows.',
      icon: Sparkles,
      bg: 'bg-emerald-50 text-emerald-600',
      borderHover: 'hover:border-emerald-400',
      tags: ['Subscriptions', 'Recharge / Smartrr', 'Retention CRO']
    },
    {
      title: 'B2B Industrial, Auto & Wholesale',
      desc: '50,000+ SKU faceted catalog search, tiered wholesale pricing, quick-order CSV uploads, and real-time NetSuite/SAP ERP connectors.',
      icon: Cpu,
      bg: 'bg-orange-50 text-orange-600',
      borderHover: 'hover:border-orange-400',
      tags: ['Magento B2B', 'ERP Connectors', 'High-SKU Scale']
    },
    {
      title: 'Food, Beverage & Grocery',
      desc: 'Geolocated delivery radius, scheduled delivery slots, perishable inventory management, and custom recurring pantry boxes.',
      icon: Utensils,
      bg: 'bg-red-50 text-red-600',
      borderHover: 'hover:border-red-400',
      tags: ['Local Delivery', 'Custom Box Builder', 'POS Integration']
    },
    {
      title: 'Consumer Electronics & Tech',
      desc: 'Serial number warranty registration, automated trade-in calculators, multi-warehouse global routing, and flash-sale DDoS resiliency.',
      icon: Laptop,
      bg: 'bg-cyan-50 text-cyan-600',
      borderHover: 'hover:border-cyan-400',
      tags: ['Multi-Warehouse', 'Flash Sale Scaled', 'Global Edge CDN']
    },
    {
      title: 'Home, Living & Interior',
      desc: 'Custom dimensions calculator, white-glove freight shipping APIs, room visualization previews, and swatch sampling workflows.',
      icon: Home,
      bg: 'bg-purple-50 text-purple-600',
      borderHover: 'hover:border-purple-400',
      tags: ['Custom Dimension', 'Freight Logistics', 'AR & 3D Config']
    }
  ];

  return (
    <section id="industries" className="py-20 md:py-28 bg-[#FAFAFA] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Centered like Projects) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-4">
            <span>Domain Specialization</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight font-heading">
            Industries We Specialize In
          </h2>
          <p className="text-gray-500 mt-3 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We design specialized eCommerce architectures and omnichannel growth systems purpose-built for each vertical's unique buyer journey.
          </p>
        </div>

        {/* Mobile Touch Carousel / Desktop 3-Col Grid */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 overflow-x-auto md:overflow-visible scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div 
                key={idx} 
                className={`w-[85vw] max-w-[340px] flex-shrink-0 snap-center md:w-auto md:max-w-none md:flex-shrink bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-sm card-hover ${ind.borderHover} transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${ind.bg} flex items-center justify-center mb-6`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 font-heading mb-2">{ind.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">{ind.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                  {ind.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className={`px-2.5 py-1 rounded-md text-[11px] font-semibold ${
                        tIdx === ind.tags.length - 1 ? `${ind.bg}` : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="md:hidden flex items-center justify-center gap-1.5 text-xs text-gray-500 mt-4 font-medium">
          <span>← Swipe 6 industry domains →</span>
        </div>
      </div>
    </section>
  );
}
