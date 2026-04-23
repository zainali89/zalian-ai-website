"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "80+", label: "AI Chatbots Deployed" },
  { value: "15+", label: "Voice Agents Built" },
  { value: "100+", label: "Automation Workflows" },
  { value: "12+", label: "Industries Served" },
];

const stack = [
  "CloseBot", "GoHighLevel", "ElevenLabs", "Retell AI",
  "Vapi", "n8n", "Twilio", "Next.js", "React Native",
  "Node.js", "Supabase", "AWS", "Zapier",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-navy-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-teal-400 text-sm font-semibold uppercase tracking-widest">About Me</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
              Hi, I&apos;m{" "}
              <span className="text-teal-400">Zain Ali</span>
            </h2>
            <p className="mt-5 text-slate-400 leading-relaxed">
              I&apos;m an AI specialist and Director of{" "}
              <a href="https://metaviz.io" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:text-teal-400 underline underline-offset-2 transition-colors">Metaviz</a>
              {" "}— a PSEB-registered technology firm delivering AI solutions globally. Through Zalian AI I work directly with clients who want hands-on expertise, not an agency layer.
            </p>
            <p className="mt-4 text-slate-400 leading-relaxed">
              I specialise in trade businesses and SMEs — helping them capture more leads and convert faster using AI chatbots, voice agents, and intelligent automation. I&apos;ve built solutions for 80+ clients across the UK.
            </p>

            {/* PSEB badge */}
            <div className="mt-8 flex items-start gap-4 p-5 rounded-xl border border-teal-400/15 bg-teal-400/5">
              <div className="text-2xl flex-shrink-0">🏛️</div>
              <div>
                <p className="text-sm font-semibold text-teal-300">
                  Pakistan Software Export Board (PSEB)
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Reg. Z-25-19671/26 · Valid Apr 2026 – Mar 2027
                </p>
                <p className="text-xs text-slate-600 mt-0.5">
                  Ministry of IT &amp; Telecommunication, Government of Pakistan
                </p>
              </div>
            </div>

            <div className="mt-8 flex gap-3 flex-wrap">
              <a
                href="#contact"
                className="px-6 py-2.5 rounded-lg bg-teal-400 text-navy-950 font-bold text-sm hover:bg-teal-300 transition-colors"
              >
                Work With Me
              </a>
              <a
                href="https://metaviz.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-lg border border-white/10 text-slate-300 font-semibold text-sm hover:border-teal-400/40 hover:text-white transition-colors"
              >
                Visit Metaviz <ExternalLink size={13} />
              </a>
            </div>
          </motion.div>

          {/* Right — stats + stack */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="p-6 rounded-2xl bg-navy-800/60 border border-white/6 gradient-border"
                >
                  <div className="text-3xl font-bold text-teal-400">{s.value}</div>
                  <div className="text-sm text-slate-400 mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="p-6 rounded-2xl bg-navy-800/40 border border-white/6">
              <p className="text-xs font-semibold text-slate-600 uppercase tracking-widest mb-4">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {stack.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-lg bg-navy-950 text-slate-400 text-xs font-medium border border-white/6 hover:border-teal-400/30 hover:text-teal-300 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Logo */}
            <div className="flex justify-center p-6 rounded-2xl bg-white border border-slate-100">
              <Image src="/logo.png" alt="Zalian AI" width={160} height={60} className="h-14 w-auto object-contain" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
