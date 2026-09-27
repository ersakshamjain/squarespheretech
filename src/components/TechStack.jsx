import React, { useRef, useState } from 'react';
import { 
  Cpu, 
  ShoppingBag, 
  Layout, 
  Server, 
  Cloud, 
  CreditCard, 
  ShieldCheck, 
  CheckCircle2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function TechStack() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const stackCategories = [
    {
      title: 'eCommerce Platforms',
      icon: ShoppingBag,
      iconBg: 'bg-blue-500/10 text-cyan-400',
      tools: [
        { name: 'Shopify Plus', tag: 'Certified Partner', tagColor: 'text-cyan-400' },
        { name: 'Magento 2 / Adobe Commerce', tag: 'B2B Enterprise', tagColor: 'text-orange-400' },
        { name: 'PrestaShop 8 / 1.7', tag: 'Expert Partner', tagColor: 'text-pink-400' },
        { name: 'WooCommerce / WordPress', tag: 'VIP Scaled', tagColor: 'text-blue-400' },
        { name: 'Shopware 6', tag: 'EU Commerce', tagColor: 'text-purple-400' },
        { name: 'BigCommerce', tag: 'Certified Agency', tagColor: 'text-emerald-400' },
      ]
    },
    {
      title: 'Frontend & Headless',
      icon: Layout,
      iconBg: 'bg-cyan-500/10 text-cyan-400',
      tools: [
        { name: 'Next.js 14 (App Router)', tag: 'Sub-Second SSR', tagColor: 'text-cyan-400' },
        { name: 'React.js & TypeScript', tag: 'Type-Safe UI', tagColor: 'text-blue-400' },
        { name: 'Tailwind CSS & Motion', tag: 'Modern UI/UX', tagColor: 'text-emerald-400' },
        { name: 'Vue.js & Nuxt 3', tag: 'Reactive Web', tagColor: 'text-green-400' },
        { name: 'Shopify Liquid & GraphQL', tag: 'Storefront API', tagColor: 'text-purple-400' },
      ]
    },
    {
      title: 'Backend & APIs',
      icon: Server,
      iconBg: 'bg-purple-500/10 text-purple-400',
      tools: [
        { name: 'Node.js & NestJS', tag: 'Event-Driven', tagColor: 'text-emerald-400' },
        { name: 'Python / FastAPI & Django', tag: 'AI & Automations', tagColor: 'text-yellow-400' },
        { name: 'PHP 8.3 & Laravel', tag: 'Robust Core', tagColor: 'text-rose-400' },
        { name: 'REST & GraphQL Microservices', tag: 'High-Throughput', tagColor: 'text-cyan-400' },
        { name: 'PostgreSQL, Redis & MySQL', tag: 'ACID Scaled', tagColor: 'text-indigo-400' },
      ]
    },
    {
      title: 'Cloud, Hosting & DevOps',
      icon: Cloud,
      iconBg: 'bg-emerald-500/10 text-emerald-400',
      tools: [
        { name: 'Amazon Web Services (AWS)', tag: 'ECS, S3, Lambda', tagColor: 'text-amber-400' },
        { name: 'Google Cloud Platform (GCP)', tag: 'BigQuery & AI', tagColor: 'text-blue-400' },
        { name: 'Cloudflare Enterprise', tag: 'DDoS & Global Edge', tagColor: 'text-orange-400' },
        { name: 'Docker & Kubernetes', tag: 'Containerized', tagColor: 'text-cyan-400' },
        { name: 'Vercel & Netlify', tag: 'Serverless Edge', tagColor: 'text-gray-300' },
      ]
    },
    {
      title: 'Payments, ERP & Ecosystem',
      icon: CreditCard,
      iconBg: 'bg-amber-500/10 text-amber-400',
      tools: [
        { name: 'Stripe, PayPal, Razorpay', tag: 'Global Gateways', tagColor: 'text-emerald-400' },
        { name: 'NetSuite & SAP Business One', tag: 'ERP Connectors', tagColor: 'text-blue-400' },
        { name: 'Klaviyo & Omnisend', tag: 'Retention Flow', tagColor: 'text-purple-400' },
        { name: 'Gorgias & Zendesk AI', tag: 'Helpdesk CRM', tagColor: 'text-rose-400' },
        { name: 'Algolia & Elasticsearch', tag: 'Instant Search', tagColor: 'text-cyan-400' },
      ]
    },
    {
      title: 'Enterprise Standards',
      icon: ShieldCheck,
      iconBg: 'bg-rose-500/10 text-rose-400',
      isGuarantees: true,
      guarantees: [
        '99.9% Uptime Infrastructure SLA Guarantee',
        '90+ Mobile Core Web Vitals (LCP < 1.8s)',
        'PCI-DSS Level 1 & GDPR Compliant Security',
        'Automated CI/CD with E2E Regression Testing',
        '24/7 SLA Monitoring & Sentry Alerts',
      ]
    }
  ];

  const slide = (direction) => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.querySelector('div');
    const scrollAmount = card ? card.offsetWidth + 20 : 300;
    sliderRef.current.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  };

  const scrollToSlide = (index) => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.querySelector('div');
    const scrollAmount = card ? card.offsetWidth + 20 : 300;
    sliderRef.current.scrollTo({ left: index * scrollAmount, behavior: 'smooth' });
    setActiveIndex(index);
  };

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    if (maxScroll <= 5) return;
    const scrollRatio = slider.scrollLeft / maxScroll;
    const index = Math.min(Math.round(scrollRatio * (stackCategories.length - 1)), stackCategories.length - 1);
    setActiveIndex(index);
  };

  return (
    <section id="tech-stack" className="py-20 md:py-28 bg-[#030712] text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4">
            <Cpu className="w-3.5 h-3.5" /> Battle-Tested Engineering Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            Our Modern Tech Stack & Tools
          </h2>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">
            We build with high-performance frameworks, resilient cloud infrastructure, and modern APIs designed to handle millions of transactions.
          </p>

          {/* Mobile Swipe Hint */}
          <div className="md:hidden flex items-center justify-center gap-1.5 text-xs text-cyan-400 font-medium mt-4 bg-cyan-500/10 border border-cyan-500/20 py-1.5 px-3.5 rounded-full w-fit mx-auto">
            <span>← Swipe 6 tech domains →</span>
          </div>
        </div>

        {/* Mobile Touch Carousel / Desktop 3-Col Grid */}
        <div 
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 overflow-x-auto md:overflow-visible scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {stackCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div 
                key={idx} 
                className="w-[85vw] max-w-[340px] flex-shrink-0 snap-center md:w-auto md:max-w-none md:flex-shrink bg-[#0A0F1D] p-6 sm:p-7 rounded-2xl border border-gray-800 hover:border-cyan-500/40 transition-all card-hover shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-800/80">
                    <div className={`w-9 h-9 rounded-lg ${cat.iconBg} flex items-center justify-center`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white font-heading">{cat.title}</h3>
                  </div>

                  {cat.isGuarantees ? (
                    <div className="space-y-3.5 text-sm">
                      {cat.guarantees.map((item, gIdx) => (
                        <div key={gIdx} className="flex items-start gap-2.5 p-2 rounded-xl bg-white/[0.02]">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-gray-300 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-3 text-sm">
                      {cat.tools.map((tool, tIdx) => (
                        <div key={tIdx} className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                          <span className="font-semibold text-gray-200">{tool.name}</span>
                          <span className={`text-xs font-mono ${tool.tagColor}`}>{tool.tag}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {cat.isGuarantees && (
                  <div className="mt-5 p-3 rounded-xl bg-cyan-500/5 border border-cyan-500/20 text-xs text-gray-300 flex items-center justify-between">
                    <span className="font-semibold text-white">Need a custom stack?</span>
                    <a href="#contact" className="text-cyan-400 hover:text-cyan-300 font-bold transition">Consult our team →</a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Carousel Navigation */}
        <div className="md:hidden flex items-center justify-between mt-5 px-1">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
            <span className="text-cyan-400 font-semibold">{activeIndex + 1}</span>
            <span>/</span>
            <span>{stackCategories.length}</span>
            <span className="text-gray-500 ml-1">· Swipe tech stacks</span>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => slide(-1)}
              className="w-8 h-8 rounded-full border border-gray-800 bg-[#0A0F1D] flex items-center justify-center text-gray-300 active:scale-95 hover:border-cyan-500/40 transition shadow-sm"
              aria-label="Previous Tech Stack"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-1.5">
              {stackCategories.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToSlide(i)}
                  className={`h-2 transition-all rounded-full ${
                    activeIndex === i ? 'w-5 bg-cyan-400' : 'w-2 bg-gray-700 hover:bg-gray-600'
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={() => slide(1)}
              className="w-8 h-8 rounded-full border border-gray-800 bg-[#0A0F1D] flex items-center justify-center text-gray-300 active:scale-95 hover:border-cyan-500/40 transition shadow-sm"
              aria-label="Next Tech Stack"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
