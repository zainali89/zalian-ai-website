"use client";

import { motion } from "framer-motion";
import { Mail, Globe, Briefcase } from "lucide-react";

const contactItems = [
  { Icon: Mail, label: "Email", value: "hello@zalian-ai.com", href: "mailto:hello@zalian-ai.com" },
  { Icon: Globe, label: "Agency", value: "metaviz.io", href: "https://metaviz.io" },
  { Icon: Briefcase, label: "Upwork", value: "Hire on Upwork", href: "https://www.upwork.com/freelancers/~01fcd98c58afb8fa79" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Left info — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <span className="text-teal-500 text-sm font-semibold uppercase tracking-widest">Get In Touch</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-navy-800 mb-5">
              Let&apos;s Build<br />Your AI Stack
            </h2>
            <p className="text-slate-500 leading-relaxed mb-10">
              Fill in the form and I&apos;ll get back to you within 24 hours with a clear plan and quote.
            </p>

            <div className="flex flex-col gap-6">
              {contactItems.map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-500 flex-shrink-0">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wide font-semibold">{label}</p>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-navy-800 hover:text-teal-500 transition-colors text-sm font-medium"
                    >
                      {value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="mt-10 pt-8 border-t border-slate-100">
              <p className="text-xs text-slate-400 mb-3">Verified &amp; Registered</p>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-medium text-slate-500">✅ PSEB Registered · Z-25-19671/26</span>
                <span className="text-xs font-medium text-slate-500">✅ FBR Income Tax Active · NTN 3520241809369</span>
                <span className="text-xs font-medium text-slate-500">✅ 80+ Clients · UK-focused</span>
              </div>
            </div>
          </motion.div>

          {/* GHL Form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 rounded-2xl border border-slate-100 overflow-hidden shadow-sm"
          >
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/ofrhYDImWoLObcgLGWq4"
              style={{ width: "100%", height: "789px", border: "none", borderRadius: "0px" }}
              id="inline-ofrhYDImWoLObcgLGWq4"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Get a Quote - Zalian AI"
              data-height="789"
              data-layout-iframe-id="inline-ofrhYDImWoLObcgLGWq4"
              data-form-id="ofrhYDImWoLObcgLGWq4"
              title="Get a Quote - Zalian AI"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
