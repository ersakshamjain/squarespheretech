import React from 'react';
import { ShoppingBag, Code, Layout, BarChart2, GitMerge, Cpu } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'eCommerce Development',
      desc: 'Shopify, Magento, PrestaShop, Shopware, BigCommerce and headless builds — migrated, customized or launched from scratch.',
      icon: ShoppingBag,
      iconColor: 'bg-blue-50 text-blue-600',
      tags: [
        { label: 'Shopify', color: 'bg-blue-50 text-blue-600' },
        { label: 'Magento', color: 'bg-orange-50 text-orange-600' },
        { label: 'PrestaShop', color: 'bg-pink-50 text-pink-600' },
        { label: 'Shopware', color: 'bg-cyan-50 text-cyan-600' },
        { label: 'BigCommerce', color: 'bg-indigo-50 text-indigo-600' },
        { label: 'Headless', color: 'bg-gray-100 text-gray-700' },
      ]
    },
    {
      title: 'Web & App Development',
      desc: 'React, Next.js, Laravel and Flutter apps built for speed, scale and conversion.',
      icon: Code,
      iconColor: 'bg-purple-50 text-purple-600',
      tags: [
        { label: 'React', color: 'bg-purple-50 text-purple-600' },
        { label: 'Next.js', color: 'bg-gray-100 text-gray-800' },
        { label: 'Laravel', color: 'bg-red-50 text-red-600' },
        { label: 'Flutter', color: 'bg-cyan-50 text-cyan-600' },
        { label: 'REST APIs', color: 'bg-emerald-50 text-emerald-600' },
      ]
    },
    {
      title: 'UI/UX & CRO',
      desc: 'Research-backed interfaces and conversion-rate optimization that turn visitors into buyers.',
      icon: Layout,
      iconColor: 'bg-cyan-50 text-cyan-600',
      tags: [
        { label: 'Figma', color: 'bg-pink-50 text-pink-600' },
        { label: 'Prototyping', color: 'bg-blue-50 text-blue-600' },
        { label: 'A/B Testing', color: 'bg-emerald-50 text-emerald-600' },
        { label: 'Heatmaps', color: 'bg-amber-50 text-amber-600' },
        { label: 'UX Audit', color: 'bg-indigo-50 text-indigo-600' },
      ]
    },
    {
      title: 'Digital Growth',
      desc: 'SEO, paid media, email flows and analytics dashboards that drive measurable revenue growth.',
      icon: BarChart2,
      iconColor: 'bg-amber-50 text-amber-600',
      tags: [
        { label: 'SEO', color: 'bg-amber-50 text-amber-600' },
        { label: 'Google Ads', color: 'bg-blue-50 text-blue-600' },
        { label: 'Meta Ads', color: 'bg-indigo-50 text-indigo-600' },
        { label: 'Klaviyo', color: 'bg-emerald-50 text-emerald-600' },
        { label: 'GA4', color: 'bg-orange-50 text-orange-600' },
      ]
    },
    {
      title: 'CRM, ERP & Automation',
      desc: 'HubSpot, Salesforce and custom ERP integrations that unify your operations.',
      icon: GitMerge,
      iconColor: 'bg-emerald-50 text-emerald-600',
      tags: [
        { label: 'HubSpot', color: 'bg-orange-50 text-orange-600' },
        { label: 'Salesforce', color: 'bg-blue-50 text-blue-600' },
        { label: 'Custom ERP', color: 'bg-emerald-50 text-emerald-600' },
        { label: 'Zapier', color: 'bg-red-50 text-red-600' },
        { label: 'n8n', color: 'bg-rose-50 text-rose-600' },
      ]
    },
    {
      title: 'AI & Technology',
      desc: 'AI chatbots, workflow automation and cloud/DevOps that keep your systems reliable at scale.',
      icon: Cpu,
      iconColor: 'bg-pink-50 text-pink-600',
      tags: [
        { label: 'AI Chatbots', color: 'bg-pink-50 text-pink-600' },
        { label: 'Workflow Automation', color: 'bg-purple-50 text-purple-600' },
        { label: 'AWS', color: 'bg-amber-50 text-amber-600' },
        { label: 'Azure', color: 'bg-blue-50 text-blue-600' },
        { label: 'Docker', color: 'bg-cyan-50 text-cyan-600' },
      ]
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-4">
            <ShoppingBag className="w-3.5 h-3.5" /> Full-Lifecycle Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight font-heading">
            Services We Provide
          </h2>
          <p className="text-gray-500 mt-3 text-base sm:text-lg leading-relaxed">
            From bespoke architecture and headless stores to AI automation and performance marketing — everything required to scale digital commerce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="p-8 rounded-2xl border border-gray-200/90 bg-white card-hover flex flex-col justify-between">
                <div>
                  <div className={`w-12 h-12 rounded-xl ${s.iconColor} flex items-center justify-center mb-6`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">{s.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                  {s.tags.map((t, tIdx) => (
                    <span key={tIdx} className={`px-2.5 py-1 rounded-md ${t.color} text-xs font-medium`}>
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
