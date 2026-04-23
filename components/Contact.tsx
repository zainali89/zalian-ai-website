"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 bg-navy-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-teal-400 font-semibold text-sm uppercase tracking-widest">
              Get In Touch
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight">
              Ready to Add AI to Your Business?
            </h2>
            <p className="mt-5 text-slate-300 leading-relaxed">
              Book a free 30-minute discovery call and I&apos;ll show you exactly
              where AI can cut costs, capture more leads, and save your team
              hours every week.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              {[
                {
                  icon: "📧",
                  label: "Email",
                  text: "hello@zalian-ai.com",
                  href: "mailto:hello@zalian-ai.com",
                },
                {
                  icon: "💼",
                  label: "Upwork",
                  text: "Hire me on Upwork",
                  href: "https://www.upwork.com",
                },
                {
                  icon: "🌐",
                  label: "Agency",
                  text: "metaviz.io",
                  href: "https://metaviz.io",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-400/10 border border-teal-400/20 flex items-center justify-center text-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide font-medium">
                      {item.label}
                    </div>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-slate-200 hover:text-teal-400 transition-colors"
                    >
                      {item.text}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-navy-800 border border-white/10 rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold mb-2">Message Received!</h3>
                <p className="text-slate-400">
                  I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">
                    What do you need help with?
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-white/10 text-white focus:outline-none focus:border-teal-400 transition-colors text-sm"
                  >
                    <option value="">Select a service...</option>
                    <option>AI Chatbot</option>
                    <option>Voice Agent</option>
                    <option>Automation Workflow</option>
                    <option>CRM Setup</option>
                    <option>Full-Stack Development</option>
                    <option>AI Strategy / Consulting</option>
                    <option>Not sure — let&apos;s talk</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">
                    Tell me about your business
                  </label>
                  <textarea
                    rows={4}
                    placeholder="What does your business do, and what problem are you trying to solve?"
                    className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-navy-900 font-bold transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
