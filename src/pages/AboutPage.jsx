import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  Globe, 
  Rocket, 
  Clock, 
  MessageCircle, 
  Code2, 
  Sparkles, 
  Building2, 
  Layers, 
  Zap, 
  TrendingUp, 
  Users,
  Linkedin,
  Terminal,
  Cpu,
  ShoppingBag
} from 'lucide-react';

export default function AboutPage() {
  const milestones = [
    {
      year: '2022',
      badge: 'The Inception',
      title: 'Founded on Engineering First Principles',
      desc: 'Started by engineering bespoke high-converting Shopify, WooCommerce, and custom web applications for emerging consumer brands. Eliminated junior agency fluff from day one.'
    },
    {
      year: '2023',
      badge: 'Enterprise Expansion',
      title: 'B2B Portals & Complex Migrations',
      desc: 'Scaled into 50,000+ SKU Magento 2 B2B distributor architectures, European PrestaShop operations, and real-time NetSuite/SAP ERP database synchronization pipelines.'
    },
    {
      year: '2024',
      badge: 'Headless Revolution',
      title: 'Sub-Second Next.js Storefronts',
      desc: 'Pioneered decoupled commerce architectures with Next.js 14 SSR, Algolia instant visual search, and edge serverless deployments that lowered mobile LCP under 0.9s.'
    },
    {
      year: '2025–2026',
      badge: 'Global Scale',
      title: '40+ Enterprise Deployments & AI Pipelines',
      desc: 'Delivering end-to-end commerce platforms across the USA, UK, UAE, EU, and India, with 99.9% uptime SLA contracts, automated CI/CD, and custom AI commerce workflows.'
    }
  ];

  const pillars = [
    {
      icon: Code2,
      color: 'bg-blue-500/10 text-cyan-400 border-cyan-500/30',
      title: 'Zero Technical Debt Architecture',
      desc: 'We do not build fragile websites that collapse when traffic surges 10x. Every line of code is clean, modular, and type-safe — designed to scale for years without costly rewrites.'
    },
    {
      icon: Zap,
      color: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      title: 'Sub-Second Speed as a Feature',
      desc: 'Speed directly dictates revenue. We rigorously optimize every asset, query, and edge cache to guarantee 90+ Core Web Vitals and sub-1.5s mobile LCP on every deployment.'
    },
    {
      icon: TrendingUp,
      color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      title: 'Revenue-First Engineering',
      desc: 'We are software engineers who think like eCommerce founders. Every checkout flow, 1-click upsell, and API integration is measured strictly by conversion rate and ROI.'
    },
    {
      icon: Users,
      color: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      title: 'Direct Senior Engineer Access',
      desc: 'Zero non-technical account managers playing telephone. You collaborate directly with senior technical architects on Slack/WhatsApp with daily transparent updates.'
    }
  ];

  const team = [
    {
      name: 'Saksham Jain',
      role: 'Founder & Lead Technologist',
      image: '/team/saksham-jain.jpg',
      initials: 'SJ',
      bio: 'Enterprise tech architect spearheading technical vision, headless commerce engineering, and cloud scalability for global retail brands.',
      tags: ['System Architecture', 'Shopify Plus', 'Next.js 14', 'Cloud DevOps']
    },
    {
      name: 'Harshil Bansal',
      role: 'Finance & Operations Manager',
      image: '/team/harshil-bansal.jpg',
      initials: 'HB',
      bio: 'Directing fiscal strategy, commercial operations, project resource allocation, and international contract governance.',
      tags: ['Fiscal Strategy', 'Ops Scaling', 'Contract Governance']
    },
    {
      name: 'Navneet Jain',
      role: 'Business Development Manager',
      image: '/team/navneet-jain.jpg',
      initials: 'NJ',
      bio: 'Leading strategic international client partnerships, enterprise acquisitions, and omnichannel brand consulting across US, UK & UAE.',
      tags: ['Global Partnerships', 'Enterprise Scoping', 'Account Growth']
    },
    {
      name: 'Ananya Sharma',
      role: 'Lead UI/UX Designer',
      initials: 'AS',
      bio: 'Specializing in research-backed design systems, conversion-rate optimization (CRO), and seamless mobile-first checkout experiences.',
      tags: ['Figma Systems', 'CRO Audits', 'Mobile UX']
    },
    {
      name: 'Rohan Mehta',
      role: 'Senior Full-Stack & DevOps Architect',
      initials: 'RM',
      bio: 'Building resilient backend microservices, high-throughput database syncs, Dockerized environments, and AWS serverless infrastructures.',
      tags: ['Node.js', 'PostgreSQL', 'Kubernetes', 'AWS Lambda']
    },
    {
      name: 'Priya Patel',
      role: 'Head of QA & Performance Engineering',
      initials: 'PP',
      bio: 'Leading automated regression testing, WCAG accessibility audits, penetration testing, and Core Web Vitals benchmarking.',
      tags: ['Cypress E2E', 'Lighthouse 90+', 'OWASP Security']
    }
  ];

  const partners = [
    { name: 'Shopify Plus Partner', category: 'Accredited Agency' },
    { name: 'Adobe Solution Partner', category: 'Magento Commerce' },
    { name: 'Google Official Partner', category: 'Ads & Analytics' },
    { name: 'Meta Business Partner', category: 'CAPI & Growth' },
    { name: 'Shopware Community', category: 'EU Commerce' },
    { name: 'PrestaShop Verified', category: 'Core Developer' },
    { name: 'Cloudflare Enterprise', category: 'Edge CDN & Security' },
    { name: 'Stripe Verified Partner', category: 'Global Payments' },
  ];

  const steps = [
    {
      num: '01',
      title: 'Discovery & Technical Audit',
      desc: 'We dissect your existing codebase, database bottlenecks, third-party apps, and conversion funnel to uncover root technical blockers.'
    },
    {
      num: '02',
      title: 'Architecture Blueprint & UX',
      desc: 'We design pixel-perfect Figma component systems and define technical API schemas before writing a single line of production code.'
    },
    {
      num: '03',
      title: 'Bi-Weekly Sprint Engineering',
      desc: 'We ship production-grade code in rapid bi-weekly sprints deployed to private staging environments with automated E2E regression tests.'
    },
    {
      num: '04',
      title: 'Zero-Downtime Launch & SLA',
      desc: 'Comprehensive cutover checklists, DNS failover routing, and 24/7 post-launch monitoring to safeguard your live order volume.'
    }
  ];

  return (
    <div className="bg-[#030712] text-white min-h-screen pt-24 sm:pt-28">
      
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative py-16 sm:py-24 overflow-hidden border-b border-gray-800/80">
        {/* Ambient Gradient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[400px] bg-gradient-to-b from-cyan-500/15 via-blue-600/10 to-transparent rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <a href="/" className="hover:text-cyan-400 transition">Home</a>
            <span className="text-gray-600">/</span>
            <span className="text-cyan-400 font-semibold">About SquareSphere</span>
          </div>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" /> High-Performance Digital Commerce Engineering
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-heading leading-[1.12]">
              Engineering Digital Experiences That <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#12C2E9] via-[#38BDF8] to-[#C471ED]">Actually Compound.</span>
            </h1>
            <p className="text-gray-300 mt-6 text-base sm:text-xl leading-relaxed max-w-3xl">
              We founded <strong className="text-white font-semibold">SquareSphere Technologies</strong> to eliminate the frustration of bloated agencies, junior developer hand-offs, and crippling technical debt. We are a senior engineering squad that builds sub-second, resilient commerce platforms built to handle millions in revenue.
            </p>

            {/* Quick CTA Actions */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a
                href="#founder-story"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#12C2E9] via-[#2A4CF0] to-[#C471ED] text-white font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition flex items-center gap-2"
              >
                <span>Read Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/917427097207"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#0A0F1D] border border-gray-700 hover:border-emerald-500/40 text-gray-200 hover:text-emerald-400 font-semibold text-sm transition flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat with Senior Tech Lead</span>
              </a>
            </div>
          </div>

          {/* 4 Core Quantitative Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 pt-12 border-t border-gray-800/80">
            <div className="p-5 rounded-2xl bg-[#0A0F1D] border border-gray-800 hover:border-cyan-500/40 transition">
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-heading">
                40+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white mt-1">Enterprise Stores Delivered</div>
              <div className="text-[11px] text-gray-400 mt-1">Across USA, UK, UAE & India</div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0A0F1D] border border-gray-800 hover:border-cyan-500/40 transition">
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-heading">
                99.9%
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white mt-1">Uptime SLA Reliability</div>
              <div className="text-[11px] text-gray-400 mt-1">Zero downtime during flash sales</div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0A0F1D] border border-gray-800 hover:border-cyan-500/40 transition">
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-heading">
                $50M+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white mt-1">Client GMV Processed</div>
              <div className="text-[11px] text-gray-400 mt-1">Handled via our custom architectures</div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0A0F1D] border border-gray-800 hover:border-cyan-500/40 transition">
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 font-heading">
                &lt; 1.2s
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white mt-1">Sub-Second Mobile LCP</div>
              <div className="text-[11px] text-gray-400 mt-1">90+ Lighthouse Core Web Vitals</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. FOUNDER'S STORY & WHY WE EXIST ================= */}
      <section id="founder-story" className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Founder Profile Card */}
            <div className="lg:col-span-5">
              <div className="relative group">
                {/* Glow ring */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#12C2E9] via-[#2A4CF0] to-[#C471ED] opacity-40 blur-xl group-hover:opacity-75 transition duration-500"></div>

                <div className="relative bg-[#0A0F1D] rounded-3xl border border-gray-800 overflow-hidden p-6 sm:p-8">
                  <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-gradient-to-tr from-[#12C2E9] to-[#2A4CF0] relative">
                    <img 
                      src="/team/saksham-jain.jpg" 
                      alt="Saksham Jain - Founder & Lead Technologist" 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute bottom-3 left-3 right-3 px-3 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span className="text-[11px] font-semibold text-white">Active Tech Lead</span>
                      </div>
                      <span className="text-[10px] text-cyan-300 font-mono">100% In-House</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white font-heading">Saksham Jain</h3>
                      <p className="text-sm font-medium text-cyan-400 mt-0.5">Founder & Lead Technologist</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-cyan-400 flex items-center justify-center font-mono font-bold text-sm">
                      SJ
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 mt-4 leading-relaxed border-t border-gray-800/80 pt-4">
                    Architecting scalable eCommerce platforms, decoupled headless Next.js applications, and high-concurrency cloud infrastructures.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {['Shopify Plus', 'Magento B2B', 'Next.js 14', 'AWS Cloud'].map((tech, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/[0.04] text-gray-300 border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative & The "Why" */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-400 text-xs font-semibold mb-4">
                <Terminal className="w-3.5 h-3.5" /> The Founder's Note
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight">
                Why I Started SquareSphere Technologies.
              </h2>

              <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed mt-6">
                <p>
                  Having spent years deep inside the digital commerce trenches, I noticed a painful pattern across the agency landscape:
                </p>
                <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-sm text-gray-300">
                  <strong className="text-rose-400 font-semibold block mb-1">The Traditional Agency Trap:</strong>
                  Creative studios make visually appealing mockups that load at a snail's pace and crash on Black Friday, while low-cost outsourcing shops write spaghetti code that requires complete rebuilding within 12 months.
                </div>
                <p>
                  I built <strong className="text-white">SquareSphere</strong> to be the definitive antithesis: an elite, engineering-first technology agency where <span className="text-cyan-300 font-semibold">every store is treated like a mission-critical revenue engine</span>.
                </p>
                <p>
                  When you work with us, you don't talk to non-technical account managers reading off a script. You talk directly with technical architects who write clean code, optimize database indexes, and personally guarantee your store's uptime and checkout velocity.
                </p>
              </div>

              {/* Guarantees checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 pt-6 border-t border-gray-800">
                <div className="flex items-center gap-2.5 text-sm text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>100% In-House Dedicated Senior Squad</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Full IP & Source Code Ownership</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Daily Updates via Private Slack/WhatsApp</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>99.9% Uptime SLA Contract Protection</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 3. CORE OPERATING PILLARS ================= */}
      <section className="py-20 md:py-28 bg-[#050B18] border-y border-gray-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4">
              <Layers className="w-3.5 h-3.5" /> Architectural DNA
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
              Our 4 Engineering Pillars
            </h2>
            <p className="text-gray-400 mt-4 text-base sm:text-lg">
              Every system we ship is governed by four uncompromising engineering principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div 
                  key={idx}
                  className="bg-[#0A0F1D] p-8 sm:p-10 rounded-3xl border border-gray-800 hover:border-cyan-500/40 transition-all duration-300 card-hover shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-2xl ${p.color} border flex items-center justify-center mb-6`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-white font-heading mb-3">{p.title}</h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 4. COMPANY MILESTONES & TIMELINE ================= */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold mb-4">
              <Clock className="w-3.5 h-3.5" /> Proven Growth Track Record
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
              Our Growth Journey & Milestones
            </h2>
            <p className="text-gray-400 mt-4 text-base sm:text-lg">
              From building high-converting stores for local brands to delivering enterprise-grade commerce platforms worldwide.
            </p>
          </div>

          <div className="relative">
            {/* Center Vertical Line on Desktop */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-blue-600 to-purple-600/30 pointer-events-none"></div>

            <div className="space-y-8 md:space-y-12">
              {milestones.map((m, idx) => (
                <div 
                  key={idx}
                  className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                    idx % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Card */}
                  <div className="w-full md:w-1/2">
                    <div className="bg-[#0A0F1D] p-7 sm:p-8 rounded-3xl border border-gray-800 hover:border-cyan-500/40 transition shadow-xl">
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                          {m.badge}
                        </span>
                        <span className="text-2xl font-black text-white/40 font-mono">{m.year}</span>
                      </div>
                      <h4 className="text-xl font-bold text-white font-heading mb-2">{m.title}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>

                  {/* Center Dot Indicator */}
                  <div className="hidden md:flex w-10 h-10 rounded-full bg-[#0A0F1D] border-2 border-cyan-400 shadow-[0_0_15px_rgba(18,194,233,0.5)] items-center justify-center flex-shrink-0 z-10">
                    <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                  </div>

                  {/* Empty Spacer Column for Alignment */}
                  <div className="hidden md:block w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. LEADERSHIP & CORE SQUAD ================= */}
      <section className="py-20 md:py-28 bg-[#050B18] border-t border-gray-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-400 text-xs font-semibold mb-4">
              <Users className="w-3.5 h-3.5" /> The People Behind The Code
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
              Meet Our Leadership & Engineering Team
            </h2>
            <p className="text-gray-400 mt-4 text-base sm:text-lg">
              Seasoned software architects, UI/UX strategists, and operations leaders dedicated to your digital growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {team.map((member, idx) => (
              <div 
                key={idx}
                className="bg-[#0A0F1D] rounded-3xl border border-gray-800 hover:border-cyan-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 card-hover shadow-xl"
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    {member.image ? (
                      <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gradient-to-tr from-[#12C2E9] to-[#2A4CF0] flex-shrink-0 border-2 border-cyan-400/40">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#12C2E9] to-[#2A4CF0] flex items-center justify-center text-white font-mono font-bold text-xl flex-shrink-0 shadow-md">
                        {member.initials}
                      </div>
                    )}
                    <div>
                      <h4 className="text-lg font-bold text-white font-heading">{member.name}</h4>
                      <p className="text-xs font-semibold text-cyan-400 mt-0.5">{member.role}</p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-5">
                    {member.bio}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-800/80">
                  {member.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white/[0.04] text-gray-300 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 6. HOW WE WORK (4-STEP MODEL) ================= */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4">
              <Rocket className="w-3.5 h-3.5" /> High-Velocity Execution
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
              Our 4-Step Engagement Model
            </h2>
            <p className="text-gray-400 mt-4 text-base sm:text-lg">
              A transparent, battle-tested development lifecycle engineered to ship on time and on budget.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, idx) => (
              <div 
                key={idx}
                className="bg-[#0A0F1D] p-7 rounded-3xl border border-gray-800 hover:border-cyan-500/40 transition-all card-hover shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-mono mb-4">
                    {s.num}
                  </div>
                  <h4 className="text-lg font-bold text-white font-heading mb-2">{s.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 7. OFFICIAL ACCREDITATIONS & BADGES ================= */}
      <section className="py-16 bg-[#050B18] border-y border-gray-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Verified Ecosystem Credentials</h3>
            <p className="text-sm text-gray-300">Officially certified across premier commerce, cloud, and growth networks.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {partners.map((p, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#0A0F1D] border border-gray-800 text-center">
                <div className="text-sm font-bold text-white">{p.name}</div>
                <div className="text-[11px] font-mono text-cyan-400 mt-1">{p.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 8. CLOSING CTA BANNER ================= */}
      <section className="py-20 md:py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-6">
            <span>🚀 Ready To Upgrade Your Stack?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight">
            Let's Engineer Your Next High-Performance Commerce Asset.
          </h2>
          <p className="text-gray-300 mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Speak directly with Saksham Jain and our senior technical squad. No sales fluff — just honest, actionable technical scoping.
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
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
