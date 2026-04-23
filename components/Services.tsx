"use client";

import { motion } from "framer-motion";
import { MessageSquare, Phone, Zap, Database, Code2, Lightbulb } from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "Conversational AI Chatbots",
    description:
      "Custom AI chatbots that qualify leads, answer enquiries, and route conversations 24/7 — no human required. Embedded directly on your website.",
    tags: ["CloseBot", "GoHighLevel", "HubSpot"],
    size: "large",
  },
  {
    icon: Phone,
    title: "AI Voice Agents",
    description:
      "Inbound and outbound voice agents that handle calls, qualify prospects, and book appointments automatically.",
    tags: ["ElevenLabs", "Retell AI", "Vapi", "Twilio"],
    size: "large",
  },
  {
    icon: Zap,
    title: "Automation Workflows",
    description:
      "End-to-end workflows connecting your CRM, marketing, and comms tools so leads are followed up instantly.",
    tags: ["n8n", "GoHighLevel", "Zapier"],
    size: "large",
  },
  {
    icon: Database,
    title: "CRM Setup & Integration",
    description:
      "Full GoHighLevel configuration — pipelines, calendars, custom fields, and integrations.",
    tags: ["GoHighLevel", "GHL"],
    size: "small",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Custom web apps, dashboards, and APIs built with modern frameworks.",
    tags: ["Next.js", "React", "Node.js"],
    size: "small",
  },
  {
    icon: Lightbulb,
    title: "AI Strategy & Consulting",
    description:
      "Audit your setup, identify automation opportunities, and get a clear AI roadmap.",
    tags: ["Strategy", "Audit"],
    size: "small",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-teal-500 text-sm font-semibold uppercase tracking-widest mb-3"
          >
            What I Build
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-navy-800 mb-4"
          >
            AI Solutions That Drive Real Results
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-slate-500 max-w-xl mx-auto"
          >
            Not experiments — production-grade AI systems designed to generate
            leads and save your team hours every week.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Top row — 3 large cards */}
          {services.filter(s => s.size === "large").map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-7 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-teal-200 hover:shadow-xl hover:shadow-teal-50 transition-all duration-300 cursor-default"
            >
              <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-500 mb-5 group-hover:bg-teal-400 group-hover:border-teal-400 group-hover:text-white transition-all duration-300">
                <s.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-navy-800 mb-3">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">{s.description}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md bg-teal-50 text-teal-600 text-xs font-medium border border-teal-100">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Bottom row — 3 smaller cards */}
          {services.filter(s => s.size === "small").map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="group p-6 rounded-2xl border border-slate-100 bg-white hover:border-teal-200 hover:shadow-lg hover:shadow-teal-50 transition-all duration-300 cursor-default"
            >
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-500 flex-shrink-0 group-hover:bg-teal-400 group-hover:border-teal-400 group-hover:text-white transition-all duration-300">
                  <s.icon size={16} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-navy-800 mb-1.5">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-3">{s.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 text-xs font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
