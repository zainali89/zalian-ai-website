"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "Free 30-minute call to understand your business, current lead flow, and where AI will have the biggest impact.",
    detail: "No commitment. Just clarity.",
  },
  {
    number: "02",
    title: "Strategy & Proposal",
    description: "I map out the exact solution — tools, flows, and expected outcomes. You get a clear proposal with timeline and fixed cost.",
    detail: "No vague quotes.",
  },
  {
    number: "03",
    title: "Build & Test",
    description: "I build your chatbot, voice agent, or automation and put it through rigorous testing before anything touches your audience.",
    detail: "Quality before speed.",
  },
  {
    number: "04",
    title: "Go Live",
    description: "Your solution launches. I monitor performance, fix edge cases, and make sure it works exactly as scoped from day one.",
    detail: "Hands-on launch support.",
  },
  {
    number: "05",
    title: "Ongoing Support",
    description: "I stay available to iterate, improve, and expand your AI stack as your business grows and needs evolve.",
    detail: "Long-term partner, not a vendor.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-teal-500 text-sm font-semibold uppercase tracking-widest mb-3"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-navy-800 mb-4"
          >
            From First Call to Live in Days
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-slate-500 max-w-lg mx-auto"
          >
            A clear, predictable process — no surprises, no scope creep.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative flex flex-col"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-teal-200 to-transparent z-0 -translate-y-px" />
              )}

              <div className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col gap-4 h-full relative z-10">
                <div className="w-14 h-14 rounded-xl bg-teal-400 flex items-center justify-center text-navy-950 font-bold text-xl">
                  {step.number}
                </div>
                <h3 className="text-base font-semibold text-navy-800">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-1">{step.description}</p>
                <p className="text-xs font-semibold text-teal-500">{step.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
