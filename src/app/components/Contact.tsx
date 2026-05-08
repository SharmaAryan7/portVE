import { useState } from "react";
import { MessageCircle, Instagram, Mail, Send, ChevronDown } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const faqs = [
    {
      question: "What's your turnaround time?",
      answer: "Typical turnaround time is 3-5 business days for most projects. Rush delivery is available for an additional fee. Complex projects may require more time, which we'll discuss during the consultation.",
    },
    {
      question: "Do you offer revisions?",
      answer: "Yes! All packages include 2 rounds of revisions. Additional revisions can be purchased if needed. I want to make sure you're completely satisfied with the final result.",
    },
    {
      question: "What file formats do you deliver?",
      answer: "For videos, I typically deliver MP4 files optimized for your platform of choice. For designs, I provide PNG, JPG, and source files (PSD, AI, etc.) as needed. Let me know your specific requirements!",
    },
    {
      question: "How do we communicate during the project?",
      answer: "I'm flexible! We can communicate via email, WhatsApp, or scheduled video calls. I provide regular updates and am always available to answer questions throughout the project.",
    },
    {
      question: "What's your pricing structure?",
      answer: "Pricing varies based on project complexity, deliverables, and timeline. Contact me with your project details for a custom quote. I offer competitive rates and package deals for ongoing work.",
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely! I work with clients worldwide. I'm experienced in remote collaboration and can accommodate different time zones for meetings and deadlines.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-32 px-8 text-center">
        <div className="max-w-[1440px] mx-auto">
          <h1 style={{ fontSize: '64px', lineHeight: '1.1', letterSpacing: '-0.02em' }} className="text-white mb-6">
            Let's Work <span className="bg-gradient-to-r from-[#FF6B00] to-[#E6C07B] bg-clip-text text-transparent">Together</span>
          </h1>
          <p className="text-[#B8B8B8] text-xl max-w-2xl mx-auto leading-relaxed">
            Ready to elevate your brand? Get in touch and let's create something amazing
          </p>
        </div>
      </section>

      <section className="px-8 pb-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <a
              href="https://wa.me/6398498216"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-8 text-center hover:border-[#FF6B00] hover:shadow-[0_0_30px_rgba(255,107,0,0.3)] transition-all group"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#E6C07B] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle size={32} className="text-white" />
              </div>
              <h3 className="text-white text-xl mb-2">WhatsApp</h3>
              <p className="text-[#B8B8B8] text-sm">Quick response, direct communication</p>
            </a>

            <a
              href="mailto:agency@neuroworks.online"
              className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-8 text-center hover:border-[#FF6B00] hover:shadow-[0_0_30px_rgba(255,107,0,0.3)] transition-all group"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#E6C07B] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail size={32} className="text-white" />
              </div>
              <h3 className="text-white text-xl mb-2">Email</h3>
              <p className="text-[#B8B8B8] text-sm">Detailed project inquiries</p>
            </a>

            <a
              href="https://www.instagram.com/neuroworksai?igsh=MXJ5OXIwcDMxOWtvMw=="
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-8 text-center hover:border-[#FF6B00] hover:shadow-[0_0_30px_rgba(255,107,0,0.3)] transition-all group"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#E6C07B] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Instagram size={32} className="text-white" />
              </div>
              <h3 className="text-white text-xl mb-2">Instagram</h3>
              <p className="text-[#B8B8B8] text-sm">See my latest work & DM me</p>
            </a>
          </div>
        </div>
      </section>

      <section className="px-8 pb-16">
        <div className="max-w-[900px] mx-auto">
          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-8 md:p-12">
            <h2 className="text-white text-3xl mb-8">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0D0D0D] border border-white/10 rounded-lg text-white placeholder-[#B8B8B8] focus:border-[#FF6B00] focus:outline-none transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0D0D0D] border border-white/10 rounded-lg text-white placeholder-[#B8B8B8] focus:border-[#FF6B00] focus:outline-none transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-white mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0D0D0D] border border-white/10 rounded-lg text-white focus:border-[#FF6B00] focus:outline-none transition-colors"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="reel-editing">Reel Editing</option>
                  <option value="youtube-editing">YouTube Editing</option>
                  <option value="motion-graphics">Motion Graphics</option>
                  <option value="thumbnail-design">Thumbnail Design</option>
                  <option value="poster-design">Poster Design</option>
                  <option value="logo-design">Logo Design</option>
                  <option value="ad-creatives">Ad Creatives</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 bg-[#0D0D0D] border border-white/10 rounded-lg text-white placeholder-[#B8B8B8] focus:border-[#FF6B00] focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-[#FF6B00] to-[#E6C07B] text-white rounded-full hover:shadow-[0_0_30px_rgba(255,107,0,0.6)] transition-all flex items-center justify-center gap-2"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="px-8 pb-32">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-white text-3xl mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] border border-white/10 rounded-2xl overflow-hidden hover:border-[#FF6B00]/50 transition-colors"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <span className="text-white text-lg">{faq.question}</span>
                  <ChevronDown
                    size={24}
                    className={`text-[#FF6B00] transition-transform ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-[#B8B8B8] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
