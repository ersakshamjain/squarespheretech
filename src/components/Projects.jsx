import React, { useState, useRef } from 'react';
import { Lock, Sparkles, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [activeDot, setActiveDot] = useState(0);
  const sliderRef = useRef(null);

  const slideProjects = (dir) => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.querySelector('.project-card');
    const cardWidth = card ? card.offsetWidth + 24 : 380;
    const count = window.innerWidth >= 1024 ? 3 : (window.innerWidth >= 640 ? 2 : 1);
    sliderRef.current.scrollBy({ left: dir * cardWidth * count, behavior: 'smooth' });
  };

  const handleFilter = (catId) => {
    setFilter(catId);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      setActiveDot(0);
    }
  };

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    if (maxScroll > 10) {
      const ratio = sliderRef.current.scrollLeft / maxScroll;
      const page = ratio < 0.3 ? 0 : (ratio > 0.7 ? 2 : 1);
      setActiveDot(page);
    }
  };

  const goToPage = (pageIndex) => {
    if (!sliderRef.current) return;
    const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    let target = 0;
    if (pageIndex === 1) target = maxScroll * 0.5;
    else if (pageIndex === 2) target = maxScroll;
    sliderRef.current.scrollTo({ left: target, behavior: 'smooth' });
    setActiveDot(pageIndex);
  };

  const categories = [
    { id: 'all', label: 'All Platforms' },
    { id: 'shopify', label: 'Shopify Plus' },
    { id: 'magento', label: 'Magento B2B' },
    { id: 'prestashop', label: 'PrestaShop' },
    { id: 'wordpress', label: 'WordPress & Woo' },
    { id: 'shopware', label: 'Shopware' },
    { id: 'bigcommerce', label: 'BigCommerce' },
  ];

  const projects = [
    {
      title: 'LuxeThread',
      domain: 'luxethread.store',
      platform: 'Shopify Plus',
      category: 'shopify',
      badgeColor: 'text-blue-700 bg-blue-50 border-blue-200',
      gradient: 'from-[#090E1D] via-[#111A35] to-[#1E1B4B]',
      accentBg: 'bg-cyan-500/20',
      glowText: 'group-hover:text-cyan-300',
      tag: 'Autumn / Winter Drop',
      metric: '+34% CRO Jump',
      metricBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30',
      industry: 'Luxury Apparel Brand',
      desc: 'Sub-second headless checkout with localized European multi-currency.',
      architecture: 'Next.js 14 SSR · Storefront API',
      details: 'Migrated from legacy monolithic setup to a high-speed headless stack. Page load dropped from 4.1s to 0.9s with zero order loss.',
      stack: ['Next.js', 'Tailwind', 'Klaviyo'],
      linkColor: 'text-blue-600 hover:text-blue-800'
    },
    {
      title: 'AutoParts Direct',
      domain: 'autoparts-direct.com',
      platform: 'Magento B2B',
      category: 'magento',
      badgeColor: 'text-orange-700 bg-orange-50 border-orange-200',
      gradient: 'from-[#0F172A] via-[#1E293B] to-[#431407]',
      accentBg: 'bg-orange-500/20',
      glowText: 'group-hover:text-orange-300',
      tag: 'B2B Tiered Portal',
      metric: '50k+ SKUs Synced',
      metricBg: 'bg-amber-500/20 text-amber-300 border-amber-400/30',
      industry: 'Industrial Automotive',
      desc: 'Custom VIN search, NetSuite ERP live sync & CSV bulk ordering.',
      architecture: 'Magento 2.4 · NetSuite ERP · Redis',
      details: 'Architected high-concurrency B2B distributor portal. Handles 10,000+ daily quote requests and automated dealer invoicing with zero lag.',
      stack: ['ERP Sync', 'ElasticSearch', 'B2B Pricing'],
      linkColor: 'text-orange-600 hover:text-orange-800'
    },
    {
      title: 'GreenLeaf Organics',
      domain: 'greenleaf-botanicals.co',
      platform: 'WooCommerce',
      category: 'wordpress',
      badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      gradient: 'from-[#064E3B] via-[#065F46] to-[#022C22]',
      accentBg: 'bg-emerald-400/20',
      glowText: 'group-hover:text-emerald-300',
      tag: 'Subscribe & Save D2C',
      metric: '+52% Recurring MRR',
      metricBg: 'bg-emerald-400/20 text-emerald-200 border-emerald-300/30',
      industry: 'Health & Wellness',
      desc: 'Custom recurring subscription builder & high-speed checkout flow.',
      architecture: 'WordPress VIP · Custom React Checkout',
      details: 'Engineered a friction-free recurring subscription flow with custom bundle builders, reducing cart abandonment from 68% down to 39%.',
      stack: ['Subscriptions', 'Speed Boost', 'CRO Tuned'],
      linkColor: 'text-emerald-600 hover:text-emerald-800'
    },
    {
      title: 'SwissTime Watches',
      domain: 'swisstime-atelier.ch',
      platform: 'Shopware 6',
      category: 'shopware',
      badgeColor: 'text-purple-700 bg-purple-50 border-purple-200',
      gradient: 'from-[#1E1B4B] via-[#2E1065] to-[#581C87]',
      accentBg: 'bg-purple-400/20',
      glowText: 'group-hover:text-purple-300',
      tag: 'Swiss Luxury Horology',
      metric: '99.99% Uptime SLA',
      metricBg: 'bg-purple-400/20 text-purple-200 border-purple-300/30',
      industry: 'Luxury Horology',
      desc: '3D interactive AR watch inspection & white-glove EU checkout.',
      architecture: 'Shopware 6 Enterprise · 3D WebGL Config',
      details: 'Built multi-lingual EU flagship with high-definition 3D model renders, VIP concierge live chat, and automated serial number registration.',
      stack: ['3D AR', 'Multi-Lang', 'EU Vault'],
      linkColor: 'text-purple-600 hover:text-purple-800'
    },
    {
      title: 'VoltAudio Pro',
      domain: 'voltaudio.tech',
      platform: 'Shopify + Next',
      category: 'shopify',
      badgeColor: 'text-cyan-700 bg-cyan-50 border-cyan-200',
      gradient: 'from-[#020617] via-[#082F49] to-[#0E7490]',
      accentBg: 'bg-cyan-400/20',
      glowText: 'group-hover:text-cyan-200',
      tag: 'Pro Audio Hardware',
      metric: '0.7s Edge LCP',
      metricBg: 'bg-cyan-400/20 text-cyan-200 border-cyan-300/30',
      industry: 'Consumer Electronics',
      desc: 'Interactive frequency curve visualizer & edge SSR store.',
      architecture: 'Shopify Storefront · Next.js 14 · Algolia',
      details: 'Sub-second audio gear storefront with interactive acoustic comparison sliders, instant faceted search, and zero flash-sale checkout latency.',
      stack: ['Sub-Second', 'Algolia', 'Edge SSR'],
      linkColor: 'text-cyan-600 hover:text-cyan-800'
    },
    {
      title: 'Nordic Living Co.',
      domain: 'nordicliving.design',
      platform: 'BigCommerce',
      category: 'bigcommerce',
      badgeColor: 'text-teal-700 bg-teal-50 border-teal-200',
      gradient: 'from-[#1C1917] via-[#292524] to-[#44403C]',
      accentBg: 'bg-amber-400/20',
      glowText: 'group-hover:text-amber-200',
      tag: 'Architectural Furniture',
      metric: '+41% AOV Growth',
      metricBg: 'bg-amber-400/20 text-amber-200 border-amber-300/30',
      industry: 'Home & Living',
      desc: 'Custom room dimension freight shipping calculator & fabric kits.',
      architecture: 'BigCommerce Multi-Storefront · Freight API',
      details: 'Integrated real-time dimensional weight freight shipping calculators and physical swatch dispatch pipelines across 4 regional warehouses.',
      stack: ['Freight APIs', 'Multi-Store', 'BigCommerce'],
      linkColor: 'text-teal-600 hover:text-teal-800'
    },
    {
      title: 'Maison & Parfums',
      domain: 'maison-parfums.eu',
      platform: 'PrestaShop 8',
      category: 'prestashop',
      badgeColor: 'text-[#DF0067] bg-pink-50 border-pink-200',
      gradient: 'from-[#1E112A] via-[#2F1132] to-[#45123C]',
      accentBg: 'bg-[#DF0067]/25',
      glowText: 'group-hover:text-pink-200',
      tag: 'Haute Parfumerie & Beauty',
      metric: '+48% EU Conversion Lift',
      metricBg: 'bg-pink-400/20 text-pink-200 border-pink-300/30',
      industry: 'Luxury Fragrance EU',
      desc: 'Pan-European PrestaShop 8 architecture with automated EU VAT compliance.',
      architecture: 'PrestaShop 8 · Redis Cache · Stripe Elements EU',
      details: 'Migrated legacy catalog with 28,000+ SKUs across France, Germany and Italy with automated cross-border tax calculation and sub-700ms TTFB.',
      stack: ['PrestaShop 8', 'Automated VAT', 'Redis Cache'],
      linkColor: 'text-[#DF0067] hover:text-pink-800'
    }
  ];

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#F8FAFC] border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Clean, Centered & Authoritative) */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Proven Engineering Work
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight font-heading">
            Projects We Have Delivered
          </h2>
          <p className="text-gray-500 mt-3 text-base sm:text-lg leading-relaxed">
            Real enterprise commerce stores, high-load portals and headless architectures engineered for speed, conversion, and global scale.
          </p>
        </div>

        {/* 3-Cards Carousel Wrapper with Side-Flanking Arrows */}
        <div className="relative group/carousel px-1 sm:px-3">
          {/* Left Flanking Arrow (Before First Project) */}
          {projects.length > 3 && (
            <button
              onClick={() => slideProjects(-1)}
              className="hidden sm:flex absolute -left-3 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-white border border-gray-200 shadow-xl shadow-gray-900/10 text-gray-700 hover:text-blue-600 hover:border-blue-400 hover:scale-110 active:scale-95 transition-all items-center justify-center cursor-pointer"
              aria-label="Previous Projects"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Right Flanking Arrow (After Last Project) */}
          {projects.length > 3 && (
            <button
              onClick={() => slideProjects(1)}
              className="hidden sm:flex absolute -right-3 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-white border border-gray-200 shadow-xl shadow-gray-900/10 text-gray-700 hover:text-blue-600 hover:border-blue-400 hover:scale-110 active:scale-95 transition-all items-center justify-center cursor-pointer"
              aria-label="Next Projects"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Projects 3-Cards Carousel Track */}
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex gap-6 sm:gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4 px-1 -mx-4 px-4 sm:mx-0 sm:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
          {filtered.map((p, idx) => (
            <div
              key={idx}
              className="project-card border border-gray-200/90 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white flex flex-col justify-between flex-shrink-0 snap-center w-[85vw] max-w-[340px] sm:w-[calc(50%-12px)] sm:max-w-none lg:w-[calc(33.333%-16px)] sm:min-w-[340px] lg:min-w-[380px] group"
            >
              {/* Browser Chrome Bar */}
              <div className="px-4 py-3 bg-gray-100/80 border-b border-gray-200/90 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block"></span>
                </div>
                <div className="px-3 py-0.5 rounded-full bg-white border border-gray-200 text-[11px] font-mono text-gray-500 flex items-center gap-1.5 truncate">
                  <Lock className="w-2.5 h-2.5 text-emerald-500" />
                  <span>{p.domain}</span>
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${p.badgeColor}`}>
                  {p.platform}
                </span>
              </div>

              {/* Visual Showcase Area */}
              <div className={`h-56 bg-gradient-to-br ${p.gradient} p-6 relative overflow-hidden flex flex-col justify-between`}>
                <div className={`absolute -top-12 -right-12 w-36 h-36 ${p.accentBg} rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500`}></div>
                <div className="flex items-center justify-between relative z-10">
                  <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-[11px] font-semibold border border-white/10">
                    {p.tag}
                  </span>
                  <span className={`px-3 py-1 rounded-full backdrop-blur-md text-[11px] font-bold border flex items-center gap-1 ${p.metricBg}`}>
                    {p.metric}
                  </span>
                </div>
                <div className="relative z-10">
                  <div className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1">{p.industry}</div>
                  <h4 className={`text-2xl font-black text-white font-heading tracking-tight ${p.glowText} transition-colors`}>
                    {p.title}
                  </h4>
                  <p className="text-xs text-gray-300 mt-1 line-clamp-1">{p.desc}</p>
                </div>
              </div>

              {/* Card Details Body */}
              <div className="p-6 bg-white flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-gray-900">Architecture:</span>
                    <span className="text-xs text-gray-600">{p.architecture}</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {p.details}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((stk, sIdx) => (
                      <span key={sIdx} className="px-2 py-0.5 rounded text-[10px] font-semibold bg-gray-100 text-gray-700">
                        {stk}
                      </span>
                    ))}
                  </div>
                  <a href="#contact" className={`text-xs font-bold ${p.linkColor} transition flex items-center gap-1`}>
                    Details <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* Carousel Pagination Dots (Only visible when > 3 projects) */}
        {projects.length > 3 && (
          <div className="flex items-center justify-center gap-2 mt-6">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                onClick={() => goToPage(idx)}
                className={`transition-all duration-300 rounded-full ${
                  activeDot === idx
                    ? 'h-2.5 w-8 bg-blue-600 shadow-md shadow-blue-500/30'
                    : 'h-2.5 w-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to project page ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Minimal "See More" Underline Link */}
        <div className="mt-8 text-center">
          <a
            href="#/projects"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-blue-600 hover:text-blue-800 transition-colors group"
          >
            <span className="underline underline-offset-8 decoration-blue-300 group-hover:decoration-blue-600 transition-all">
              See all case studies &amp; projects
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </a>
          <p className="text-xs text-gray-500 mt-2">
            Explore our complete directory of enterprise builds, migrations &amp; custom applications.
          </p>
        </div>
      </div>
    </section>
  );
}
