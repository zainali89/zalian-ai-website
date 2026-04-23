"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const industries = [
  { icon: "🔥", name: "Heating & Plumbing" },
  { icon: "☀️", name: "Solar & Renewables" },
  { icon: "❄️", name: "Air Conditioning" },
  { icon: "⚡", name: "Electrical & EV" },
  { icon: "🏠", name: "Home Improvements" },
  { icon: "🏗️", name: "Construction" },
  { icon: "💼", name: "Professional Services" },
  { icon: "🛒", name: "E-Commerce" },
];

const testimonials = [
  {
    quote: "The AI chatbot captures leads around the clock. We went from missing enquiries overnight to waking up to qualified leads every morning. It paid for itself in the first week.",
    author: "Managing Director",
    company: "UK Heating Company",
    stars: 5,
  },
  {
    quote: "The voice agent handles all our overflow calls without fail. Customers get an instant response and our team only deals with the warm prospects — it's changed how we operate.",
    author: "Operations Manager",
    company: "UK Solar Installer",
    stars: 5,
  },
  {
    quote: "Zain understood our process better than we did and automated the parts that were costing us the most time. ROI was clear within the first month. I wouldn't go back.",
    author: "Director",
    company: "UK Trade Business",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="clients" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Industries */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-teal-500 text-sm font-semibold uppercase tracking-widest mb-3"
          >
            Industries Served
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-navy-800 mb-4"
          >
            Built for Businesses That Live and Die by Leads
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-20">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex flex-col items-center gap-2.5 py-5 px-3 rounded-xl border border-slate-100 hover:border-teal-200 hover:bg-teal-50/50 transition-all text-center cursor-default"
            >
              <span className="text-2xl">{ind.icon}</span>
              <span className="text-xs font-semibold text-navy-800">{ind.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <span className="text-teal-500 text-sm font-semibold uppercase tracking-widest">Client Feedback</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-800">What Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-7 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-lg hover:shadow-slate-100 transition-all flex flex-col"
            >
              <div className="flex mb-5">
                {[...Array(t.stars)].map((_, j) => (
                  <Star key={j} size={14} className="text-teal-400 fill-teal-400" />
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-navy-800 text-sm">{t.author}</p>
                <p className="text-slate-400 text-xs mt-0.5">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
