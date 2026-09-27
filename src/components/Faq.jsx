import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'How fast can we launch our eCommerce store or custom web platform?',
      a: 'Most custom store builds, redesigns, and platform migrations take between 4 to 8 weeks. We work in structured 1-week agile sprints, giving you live staging links and weekly milestone demos so you see continuous progress from day one. Complex enterprise architectures with heavy custom ERP connectors typically launch in 10 to 12 weeks.'
    },
    {
      q: 'Do you work with international clients across US, UK & European time zones?',
      a: 'Yes, over 70% of our enterprise clients are located in North America, the UK, Europe, and the Middle East. Our technical project leads and client managers schedule daily standups, sprint reviews, and direct communication in Slack, WhatsApp, or Teams to overlap seamlessly with your local business hours (EST, CST, GMT, and CET).'
    },
    {
      q: 'Will our existing SEO rankings or customer data drop during a store migration?',
      a: 'Zero SEO loss guarantee. We follow a battle-tested migration protocol where every single legacy URL is audited and mapped to 301 permanent redirects. All customer accounts, historical order data, and product variations are verified via automated scripts before DNS switchover, ensuring zero downtime and immediate SEO indexing continuity.'
    },
    {
      q: 'What happens after launch? Do you provide ongoing maintenance and SLA support?',
      a: "Yes. We don't disappear after launch day. We offer flexible Dedicated Engineering Retainers and 24/7 SLA Uptime Monitoring. This covers ongoing Core Web Vitals speed optimization, conversion rate A/B tests, seasonal promotional landing pages, and rapid emergency bug fixes with guaranteed response times."
    },
    {
      q: 'What is your pricing model and how are project payments structured?',
      a: 'We provide 100% transparent pricing with no hidden fees. For scoped projects, payments are linked to tangible milestones (e.g. 30% initial deposit, 30% architecture & design sign-off, 30% functional staging build, 10% final production launch). For continuous development, we offer monthly agile team squads on dedicated hourly or sprint allocations.'
    },
    {
      q: 'Who owns the code and intellectual property (IP) after the project is finished?',
      a: 'You own 100% of everything. All Git repositories, Figma design source files, domain configurations, custom code, and deployment pipelines belong exclusively to your business. We provide complete hand-off documentation and staff training videos with zero proprietary lock-in.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAFAFA] border-b border-gray-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-4">
            <HelpCircle className="w-3.5 h-3.5" /> Clear Answers, No Jargon
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 mt-3 text-base sm:text-lg">
            Everything you need to know about partnering with SquareSphere Technologies.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-blue-400 shadow-md' : 'border-gray-200/90 shadow-sm'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 sm:px-8 sm:py-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-gray-900 hover:text-blue-600 transition"
                >
                  <span>{faq.q}</span>
                  <span 
                    className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-blue-50 text-blue-600' : 'text-gray-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 sm:px-8 sm:pb-7 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
