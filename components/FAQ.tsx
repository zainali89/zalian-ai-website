"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What types of businesses do you work with?",
    a: "Primarily UK trade businesses — heating & plumbing, solar, air conditioning, electrical, home improvements — and SMEs in other sectors. If your business relies on inbound leads and phone calls, I can almost certainly make a meaningful difference.",
  },
  {
    q: "How long does it take to go live?",
    a: "A standard AI chatbot takes 3–7 days from sign-off to go-live. Voice agents typically take 5–10 days. Automation workflows vary — simple ones are done in a day, complex multi-step flows in 1–2 weeks. I'll give you a precise timeline in the proposal.",
  },
  {
    q: "Do I need to be technical to use what you build?",
    a: "No. Everything I build is designed to run in the background without your team needing to touch it. I handle setup, testing, and go-live. For anything ongoing, I provide simple documentation and stay available for support.",
  },
  {
    q: "What's the difference between an AI chatbot and a voice agent?",
    a: "An AI chatbot handles text conversations on your website or via SMS — qualifying leads, answering questions, routing to the right person. A voice agent handles phone calls with a natural-sounding AI voice — useful for inbound overflow, out-of-hours calls, or outbound follow-up sequences.",
  },
  {
    q: "Will the AI be accurate about my business?",
    a: "Yes. Before building anything I gather detailed information about your services, pricing, FAQs, service areas, and sales process. The AI is trained on your specific business — it won't give generic or incorrect answers.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on what you need. A single AI chatbot typically starts from £500–£1,500 for setup. Voice agents start from £800. Ongoing retainer support is available. Fill in the contact form and I'll give you an accurate quote within 24 hours.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="border border-slate-100 rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-navy-800 text-sm pr-4">{faq.q}</span>
        <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-500">
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-1 bg-white">
              <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-teal-500 text-sm font-semibold uppercase tracking-widest mb-3"
          >
            FAQs
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-navy-800"
          >
            Common Questions
          </motion.h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-slate-400 mt-10"
        >
          Still have questions?{" "}
          <a href="#contact" className="text-teal-500 font-semibold hover:text-teal-400 transition-colors">
            Drop me a message →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
