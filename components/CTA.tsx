"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Mic, Zap } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-navy-950 overflow-hidden relative">
      {/* Background accents */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-400/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Icon trio */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {[Bot, Mic, Zap].map((Icon, i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-xl bg-teal-400/10 border border-teal-400/20 flex items-center justify-center text-teal-400 animate-float"
                style={{ animationDelay: `${i * 0.8}s` }}
              >
                <Icon size={20} />
              </div>
            ))}
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-5">
            Ready to Automate Your Lead Flow?
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto mb-10">
            Let&apos;s find the fastest, highest-impact AI change we can make for your business. Free 30-minute call, no commitment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-teal-400 text-navy-950 font-bold text-base hover:bg-teal-300 transition-all shadow-xl shadow-teal-400/20 hover:-translate-y-0.5"
            >
              Get a Free Quote
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="https://metaviz.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/12 text-slate-300 font-semibold text-base hover:border-teal-400/40 hover:text-white transition-all"
            >
              Learn About Metaviz
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
