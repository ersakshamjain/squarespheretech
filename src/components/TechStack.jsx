import React from 'react';
import { 
  Cpu, 
  ShoppingBag, 
  Layout, 
  Server, 
  Cloud, 
  CreditCard, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';

export default function TechStack() {
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

  return (
    <section id="tech-stack" className="py-20 md:py-28 bg-[#030712] text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4">
            <Cpu className="w-3.5 h-3.5" /> Battle-Tested Engineering Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            Our Modern Tech Stack & Tools
          </h2>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">
            We build with high-performance frameworks, resilient cloud infrastructure, and modern APIs designed to handle millions of transactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stackCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div 
                key={idx} 
                className="bg-[#0A0F1D] p-7 rounded-2xl border border-gray-800 hover:border-cyan-500/40 transition-all card-hover shadow-xl flex flex-col justify-between"
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
