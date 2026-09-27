import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Search, 
  Lock, 
  ArrowRight, 
  ChevronRight, 
  Filter, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  MessageCircle, 
  SlidersHorizontal,
  ExternalLink
} from 'lucide-react';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Platforms' },
    { id: 'shopify', label: 'Shopify Plus' },
    { id: 'magento', label: 'Magento B2B' },
    { id: 'headless', label: 'Headless (Next.js)' },
    { id: 'prestashop', label: 'PrestaShop' },
    { id: 'wordpress', label: 'WooCommerce' },
    { id: 'shopware', label: 'Shopware' },
    { id: 'bigcommerce', label: 'BigCommerce' },
  ];

  const allProjects = [
    {
      id: 'luxethread',
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
      details: 'Migrated from legacy monolithic setup to a high-speed headless stack. Page load dropped from 4.1s to 0.9s with zero order loss during high-volume catalog drops.',
      stack: ['Next.js 14', 'Tailwind', 'Klaviyo', 'Shopify Plus'],
      linkColor: 'text-blue-600 hover:text-blue-800'
    },
    {
      id: 'autoparts-direct',
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
      stack: ['Magento 2', 'NetSuite ERP', 'ElasticSearch', 'B2B Pricing'],
      linkColor: 'text-orange-600 hover:text-orange-800'
    },
    {
      id: 'greenleaf-organics',
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
      stack: ['WooCommerce', 'Subscriptions', 'React.js', 'Stripe'],
      linkColor: 'text-emerald-600 hover:text-emerald-800'
    },
    {
      id: 'swisstime-watches',
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
      industry: 'Luxury Horology EU',
      desc: '3D interactive AR watch inspection & white-glove EU checkout.',
      architecture: 'Shopware 6 Enterprise · 3D WebGL Config',
      details: 'Built multi-lingual EU flagship with high-definition 3D model renders, VIP concierge live chat, and automated serial number registration.',
      stack: ['Shopware 6', '3D WebGL', 'Multi-Lang', 'EU Vault'],
      linkColor: 'text-purple-600 hover:text-purple-800'
    },
    {
      id: 'voltaudio-pro',
      title: 'VoltAudio Pro',
      domain: 'voltaudio.tech',
      platform: 'Headless Next.js',
      category: 'headless',
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
      stack: ['Next.js 14', 'Algolia', 'Edge SSR', 'Shopify API'],
      linkColor: 'text-cyan-600 hover:text-cyan-800'
    },
    {
      id: 'nordic-living',
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
      stack: ['BigCommerce', 'Freight APIs', 'Multi-Store', 'React'],
      linkColor: 'text-teal-600 hover:text-teal-800'
    },
    {
      id: 'maison-parfums',
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
      stack: ['PrestaShop 8', 'Automated VAT', 'Redis Cache', 'Stripe'],
      linkColor: 'text-[#DF0067] hover:text-pink-800'
    },
    {
      id: 'medixcare-supply',
      title: 'MedixCare Supply',
      domain: 'medixcare-supply.com',
      platform: 'Custom Web & Laravel',
      category: 'magento',
      badgeColor: 'text-indigo-700 bg-indigo-50 border-indigo-200',
      gradient: 'from-[#0A1A3A] via-[#1E293B] to-[#1E3A8A]',
      accentBg: 'bg-blue-400/20',
      glowText: 'group-hover:text-blue-300',
      tag: 'Healthcare Equipment B2B',
      metric: '99.9% Uptime Guarantee',
      metricBg: 'bg-blue-400/20 text-blue-200 border-blue-300/30',
      industry: 'Medical & Healthcare B2B',
      desc: 'High-compliance medical supply portal with hospital PO invoicing.',
      architecture: 'React.js · Laravel 10 Core · HIPAA Gateway',
      details: 'Engineered high-concurrency B2B distributor portal with custom hospital credit lines, tiered pricing rules, and encrypted HIPAA-compliant patient order flows.',
      stack: ['React.js', 'Laravel 10', 'PostgreSQL', 'HIPAA Ready'],
      linkColor: 'text-indigo-600 hover:text-indigo-800'
    },
    {
      id: 'apexkicks-global',
      title: 'ApexKicks Global',
      domain: 'apexkicks.io',
      platform: 'Headless Next.js',
      category: 'headless',
      badgeColor: 'text-rose-700 bg-rose-50 border-rose-200',
      gradient: 'from-[#1A0B1E] via-[#380E2B] to-[#500724]',
      accentBg: 'bg-rose-400/20',
      glowText: 'group-hover:text-rose-300',
      tag: 'Limited Drop Streetwear',
      metric: '0.6s Flash Sale LCP',
      metricBg: 'bg-rose-400/20 text-rose-200 border-rose-300/30',
      industry: 'Sneakers & Streetwear',
      desc: 'DDoS-resilient flash-sale infrastructure handling 8,000+ orders/min.',
      architecture: 'Next.js 14 · Cloudflare Enterprise · Shopify Cart',
      details: 'Architected queue-based high-concurrency flash sale storefront with Cloudflare Waiting Room integration, preventing bot scalping and server crashes during midnight drops.',
      stack: ['Next.js 14', 'Cloudflare Edge', 'Anti-Bot', 'Shopify Plus'],
      linkColor: 'text-rose-600 hover:text-rose-800'
    }
  ];

  // Live filter and search logic
  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const matchesCategory = 
        activeCategory === 'all' || 
        project.category === activeCategory ||
        (activeCategory === 'shopify' && project.platform.toLowerCase().includes('shopify')) ||
        (activeCategory === 'headless' && project.architecture.toLowerCase().includes('next.js'));

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch = 
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.industry.toLowerCase().includes(query) ||
        project.platform.toLowerCase().includes(query) ||
        project.desc.toLowerCase().includes(query) ||
        project.stack.some((s) => s.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-gray-900 pt-24 sm:pt-28">
      
      {/* ================= 1. COMPACT PROFESSIONAL HERO (NOT full page image) ================= */}
      <section className="bg-[#030712] text-white py-14 sm:py-20 relative overflow-hidden border-b border-gray-800">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/15 via-cyan-500/10 to-transparent rounded-full blur-[130px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-5">
            <a href="/" className="hover:text-cyan-400 transition">Home</a>
            <span className="text-gray-600">/</span>
            <span className="text-cyan-400 font-semibold">Our Work &amp; Case Studies</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Proven Engineering Portfolio
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight">
              Enterprise Commerce Platforms Built For <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#12C2E9] via-[#38BDF8] to-[#C471ED]">Scale &amp; Conversion.</span>
            </h1>
            <p className="text-gray-400 mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
              Explore our delivered systems across Shopify Plus, Magento B2B, Headless Next.js, and custom cloud architectures engineered across USA, UK, UAE &amp; India.
            </p>
          </div>

          {/* 4 Quantitative Proof Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-10 pt-8 border-t border-gray-800/80">
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#0A0F1D] border border-gray-800">
              <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-heading">40+</div>
              <div className="text-xs text-gray-300 font-medium mt-0.5">Enterprise Stores Shipped</div>
            </div>
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#0A0F1D] border border-gray-800">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-heading">99.9%</div>
              <div className="text-xs text-gray-300 font-medium mt-0.5">Uptime SLA Reliability</div>
            </div>
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#0A0F1D] border border-gray-800">
              <div className="text-2xl sm:text-3xl font-black text-purple-400 font-heading">$50M+</div>
              <div className="text-xs text-gray-300 font-medium mt-0.5">Client GMV Processed</div>
            </div>
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#0A0F1D] border border-gray-800">
              <div className="text-2xl sm:text-3xl font-black text-amber-400 font-heading">&lt; 0.9s</div>
              <div className="text-xs text-gray-300 font-medium mt-0.5">Sub-Second Mobile LCP</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. INTERACTIVE FILTER & SEARCH BAR ================= */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200/90 shadow-sm transition-all py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            
            {/* Platform Filter Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide py-1 -mx-4 px-4 sm:mx-0 sm:px-0">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 scale-[1.02]'
                        : 'bg-gray-100/90 hover:bg-gray-200 text-gray-700 hover:text-gray-900 border border-gray-200/60'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Quick Live Search Bar */}
            <div className="relative w-full lg:w-72 flex-shrink-0">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search brand, tech (Next.js, B2B)..."
                className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-700"
                >
                  ✕
                </button>
              )}
            </div>

          </div>

          {/* Filter Status Count */}
          <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-gray-100 text-xs text-gray-500">
            <span>
              Showing <strong className="text-gray-900 font-semibold">{filteredProjects.length}</strong> of {allProjects.length} delivered systems
            </span>
            {(activeCategory !== 'all' || searchQuery) && (
              <button
                onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                className="text-blue-600 hover:text-blue-800 font-medium underline"
              >
                Reset all filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ================= 3. THE PROJECTS DIRECTORY GRID ================= */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <Layers className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-gray-900 font-heading">No matching projects found</h3>
              <p className="text-sm text-gray-500 mt-1 max-w-sm mx-auto">
                Try selecting a different platform filter or clearing your search keywords.
              </p>
              <button
                onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                className="mt-4 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition"
              >
                Show All Projects
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProjects.map((p) => (
                <div
                  key={p.id}
                  className="project-card border border-gray-200/90 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white flex flex-col justify-between group"
                >
                  {/* Browser Chrome Header */}
                  <div className="px-4 py-3 bg-gray-100/90 border-b border-gray-200/90 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block"></span>
                    </div>
                    <div className="px-3 py-0.5 rounded-full bg-white border border-gray-200 text-[11px] font-mono text-gray-500 flex items-center gap-1.5 truncate max-w-[150px]">
                      <Lock className="w-2.5 h-2.5 text-emerald-500 flex-shrink-0" />
                      <span className="truncate">{p.domain}</span>
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${p.badgeColor}`}>
                      {p.platform}
                    </span>
                  </div>

                  {/* Visual Showcase Area */}
                  <div className={`h-52 sm:h-56 bg-gradient-to-br ${p.gradient} p-6 relative overflow-hidden flex flex-col justify-between`}>
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
                      <h3 className={`text-2xl font-black text-white font-heading tracking-tight ${p.glowText} transition-colors`}>
                        {p.title}
                      </h3>
                      <p className="text-xs text-gray-300 mt-1 line-clamp-1">{p.desc}</p>
                    </div>
                  </div>

                  {/* Card Details & Architecture */}
                  <div className="p-6 bg-white flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center gap-2 mb-2.5">
                        <span className="text-xs font-bold text-gray-900">Architecture:</span>
                        <span className="text-xs text-gray-600 truncate">{p.architecture}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                        {p.details}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {p.stack.map((stk, sIdx) => (
                          <span key={sIdx} className="px-2 py-0.5 rounded text-[10px] font-semibold bg-gray-100 text-gray-700 border border-gray-200/50">
                            {stk}
                          </span>
                        ))}
                      </div>

                      {/* Primary Action Button (Ready for detail page linking) */}
                      <a
                        href="/#contact"
                        className={`text-xs font-bold ${p.linkColor} transition flex items-center gap-1 group/btn`}
                      >
                        <span>View Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ================= 4. PROOF / CONFIDENCE BANNER ================= */}
      <section className="py-12 bg-white border-y border-gray-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 via-cyan-50 to-indigo-50 border border-blue-100 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mb-3">
                <CheckCircle2 className="w-3.5 h-3.5" /> High-Performance Benchmark
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-heading">
                Average +38% Conversion Lift Within 90 Days of Launch
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-xl">
                Every commerce asset built by SquareSphere undergoes strict WCAG accessibility checks, automated Cypress E2E regression tests, and sub-1s Core Web Vitals audits.
              </p>
            </div>
            <a
              href="/#contact"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/25 whitespace-nowrap transition"
            >
              Request a Technical Audit →
            </a>
          </div>
        </div>
      </section>

      {/* ================= 5. CLOSING LEAD MAGNET CTA (Dark Theme) ================= */}
      <section className="py-20 bg-[#030712] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-6">
            <span>🚀 Have A Similar Technical Challenge?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight">
            Let's Scope Your High-Growth Commerce Store.
          </h2>
          <p className="text-gray-400 mt-4 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Speak directly with our senior technology team. Get an unfiltered technical evaluation of your architecture, database bottlenecks, and migration roadmap within 24 hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="/#contact"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#12C2E9] via-[#2A4CF0] to-[#C471ED] text-white font-bold text-sm sm:text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition flex items-center gap-2"
            >
              <span>Schedule 15-Min Scoping Call</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/917427097207"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-[#0A0F1D] border border-gray-700 hover:border-emerald-500 text-gray-200 hover:text-emerald-400 font-bold text-sm sm:text-base transition flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>Direct WhatsApp Scoping</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
