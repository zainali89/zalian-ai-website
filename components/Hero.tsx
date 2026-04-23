"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Star } from "lucide-react";

const stats = [
  { value: "80+", label: "Clients Served" },
  { value: "24/7", label: "Lead Capture" },
  { value: "100+", label: "Workflows Built" },
  { value: "5+", label: "Years Experience" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-navy-950">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Beam top-center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-72 bg-gradient-to-b from-teal-400/60 to-transparent animate-beam" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-teal-400/8 rounded-full blur-3xl" />

      {/* Side glows */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-navy-800/80 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-400/25 bg-teal-400/8 text-teal-300 text-sm font-medium mb-8"
        >
          <Shield size={13} className="text-teal-400" />
          PSEB Registered · Reg No. Z-25-19671/26
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-6"
        >
          Stop Losing Leads
          <br />
          <span className="text-teal-400 glow-teal">While You Sleep</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          AI chatbots, voice agents, and automation workflows that qualify every
          lead 24/7 — so your team only speaks to warm prospects ready to buy.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-teal-400 text-navy-950 font-bold text-base hover:bg-teal-300 transition-all shadow-xl shadow-teal-400/20 hover:shadow-teal-400/30 hover:-translate-y-0.5"
          >
            Get a Free Quote
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-white/15 text-white/80 font-semibold text-base hover:border-teal-400/50 hover:text-white transition-all hover:-translate-y-0.5"
          >
            See My Services
          </a>
        </motion.div>

        {/* Trust signal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex items-center justify-center gap-2 text-slate-500 text-sm"
        >
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={13} className="text-teal-400 fill-teal-400" />
            ))}
          </div>
          <span>Trusted by 80+ businesses across the UK</span>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-navy-900/60 px-6 py-6 text-center">
              <div className="text-3xl font-bold text-teal-400 mb-1">{s.value}</div>
              <div className="text-xs text-slate-500 font-medium">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" />
    </section>
  );
}
