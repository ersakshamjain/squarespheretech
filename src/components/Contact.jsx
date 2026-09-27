import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Shopify / Shopify Plus',
    budget: '$5k – $15k',
    timeline: '1 – 2 Months',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const services = [
    'Shopify / Shopify Plus',
    'Magento / Adobe Commerce',
    'PrestaShop 8 / Migration',
    'WordPress / WooCommerce',
    'Headless & Next.js',
    'UI/UX & CRO Audit',
    'Growth & Performance SEO'
  ];

  const budgets = [
    '< $5k',
    '$5k – $15k',
    '$15k – $30k',
    '$30k+'
  ];

  const timelines = [
    '⚡ ASAP (< 1 Mo)',
    '1 – 2 Months',
    '3+ Months'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmittedName(formData.name);
    setLoading(true);

    const waText = `Hi SquareSphere Technologies!%0A%0A*New Project Brief:*%0A• *Name:* ${encodeURIComponent(formData.name)}%0A• *Email:* ${encodeURIComponent(formData.email)}%0A• *Company:* ${encodeURIComponent(formData.company || 'N/A')}%0A• *Service:* ${encodeURIComponent(formData.service)}%0A• *Budget:* ${encodeURIComponent(formData.budget)}%0A• *Timeline:* ${encodeURIComponent(formData.timeline)}%0A• *Brief:* ${encodeURIComponent(formData.message)}`;

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '434edcff-2ed2-42b4-afb2-f4811726c078',
          name: formData.name,
          email: formData.email,
          company: formData.company,
          service: formData.service,
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.message,
          from_name: 'SquareSphere Website',
          subject: `New Project Inquiry from ${formData.name} (${formData.company || 'Direct'}) - SquareSphere Technologies`
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err) {
      window.open(`https://wa.me/917427097207?text=${waText}`, '_blank');
      setSubmitted(true);
    } finally {
      setLoading(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: 'Shopify / Shopify Plus',
        budget: '$5k – $15k',
        timeline: '1 – 2 Months',
        message: ''
      });
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Centered like Projects) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-4">
            <span>Direct Engineering Access</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight font-heading">
            Tell Us About Your Project
          </h2>
          <p className="text-gray-500 mt-3 text-base sm:text-lg leading-relaxed">
            Fill out the brief and our senior technical team will respond within 24 hours with an actionable roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Contact Info Card */}
          <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Information</h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-8 leading-relaxed">
                Prefer direct communication? Reach out to us via email or WhatsApp.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">Email Us</div>
                    <a href="mailto:techsquaresphere@gmail.com" className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition">
                      techsquaresphere@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">Call / WhatsApp</div>
                    <a
                      href="https://wa.me/917427097207"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-gray-900 hover:text-emerald-600 transition flex items-center gap-1.5"
                    >
                      +91 7427097207 <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold">Online</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">Location</div>
                    <div className="text-sm font-semibold text-gray-900">
                      India / Serving Clients Worldwide
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Box */}
              <div className="mt-8 p-4 rounded-xl bg-emerald-50/80 border border-emerald-200">
                <div className="text-xs font-semibold text-emerald-900 mb-1">Need quick response?</div>
                <p className="text-xs text-emerald-700 mb-3">Chat directly with our team on WhatsApp for instant scoping.</p>
                <a
                  href="https://wa.me/917427097207?text=Hi%20SquareSphere%20Technologies,%20I%20have%20an%20enquiry%20regarding%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition"
                >
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-gray-100">
              <div className="text-xs font-medium text-gray-500 mb-3">Follow Our Journey</div>
              <div className="flex items-center gap-3 text-gray-500">
                <a
                  href="https://www.linkedin.com/company/squaresphere-technologies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:border-blue-600 hover:bg-blue-50 hover:text-[#0A66C2] transition-all shadow-sm"
                  title="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.59 1.59 0 0 0-1.6 1.6 1.59 1.59 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/squarespheretech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:border-pink-500 hover:bg-pink-50 hover:text-[#E4405F] transition-all shadow-sm"
                  title="Instagram"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="https://wa.me/917427097207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:border-emerald-500 hover:bg-emerald-50 hover:text-[#25D366] transition-all shadow-sm"
                  title="WhatsApp"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.178L2 22l4.981-1.309A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.636 0-3.15-.494-4.421-1.34l-.317-.212-2.972.78.794-2.898-.233-.37A8.156 8.156 0 0 1 3.8 12c0-4.521 3.679-8.2 8.2-8.2 4.521 0 8.2 3.679 8.2 8.2 0 4.521-3.679 8.2-8.2 8.2z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Form with Chips */}
          <div className="lg:col-span-8 bg-white p-5 sm:p-8 lg:p-10 rounded-2xl border border-gray-200/80 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2">Full name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-sm transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2">Work email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-sm transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">Company / Brand Name</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Acme Lifestyle Co."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-sm transition"
                />
              </div>

              {/* Service Chips */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2.5">
                  Service Needed <span className="text-blue-600">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {services.map((srv, idx) => {
                    const isSelected = formData.service === srv;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setFormData({ ...formData, service: srv })}
                        className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all border active:scale-95 ${
                          isSelected
                            ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                            : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-400 hover:bg-white'
                        }`}
                      >
                        {srv}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Budget & Timeline Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2.5">
                    Project Budget <span className="text-blue-600">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((bgt, idx) => {
                      const isSelected = formData.budget === bgt;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: bgt })}
                          className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all border active:scale-95 ${
                            isSelected
                              ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                              : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-400 hover:bg-white'
                          }`}
                        >
                          {bgt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2.5">
                    Target Timeline <span className="text-blue-600">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {timelines.map((tml, idx) => {
                      const isSelected = formData.timeline === tml;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeline: tml })}
                          className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all border active:scale-95 ${
                            isSelected
                              ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                              : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-400 hover:bg-white'
                          }`}
                        >
                          {tml}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">Project Brief / Message</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your conversion goals, target platforms, custom integrations or reference stores..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-sm transition"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 rounded-xl bg-black text-white font-semibold text-sm hover:bg-gray-800 disabled:opacity-60 transition flex items-center justify-center gap-2 shadow-lg active:scale-[0.99]"
              >
                {loading ? 'Sending Project Brief... ⏳' : <>Send Project Brief <ArrowRight className="w-4 h-4" /></>}
              </button>

              {submitted && (
                <div className="text-center p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm font-medium animate-fadeIn">
                  <div className="font-extrabold text-base mb-1 text-emerald-950">
                    ✓ Project Brief Delivered Successfully!
                  </div>
                  <p className="text-xs text-emerald-800 mb-3">
                    Thank you <strong>{submittedName}</strong>, your inquiry has been forwarded directly to our inbox (<strong>techsquaresphere@gmail.com</strong>).
                  </p>
                  <a
                    href="https://wa.me/917427097207"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition"
                  >
                    Also Connect on WhatsApp 💬
                  </a>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
