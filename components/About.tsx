const highlights = [
  { label: "AI Chatbots Built", value: "80+" },
  { label: "Voice Agents Deployed", value: "15+" },
  { label: "Automation Workflows", value: "100+" },
  { label: "Industries Served", value: "12+" },
];

const stack = [
  "CloseBot", "GoHighLevel", "ElevenLabs", "Retell AI",
  "Vapi", "n8n", "Twilio", "Next.js", "React Native",
  "Node.js", "Supabase", "AWS", "Zapier",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-navy-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <span className="text-teal-400 font-semibold text-sm uppercase tracking-widest">
              About Me
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-teal-300 to-teal-400 bg-clip-text text-transparent">
                Zain Ali
              </span>
            </h2>
            <p className="mt-5 text-slate-300 leading-relaxed">
              I&apos;m an AI specialist and the Director of Metaviz — a
              PSEB-registered technology company delivering AI-powered solutions
              for businesses globally. Through Zalian AI, I offer the same
              cutting-edge capabilities directly to clients who want a focused,
              hands-on expert.
            </p>
            <p className="mt-4 text-slate-300 leading-relaxed">
              My speciality is helping trade businesses and SMEs capture more
              leads and convert them faster using AI chatbots, voice agents, and
              intelligent automation workflows. I&apos;ve built and deployed
              solutions for 80+ clients across the UK and beyond — from heating
              companies and solar installers to SaaS platforms.
            </p>

            {/* PSEB badge */}
            <div className="mt-6 inline-flex items-start gap-3 px-5 py-4 rounded-xl border border-teal-400/20 bg-teal-400/5">
              <span className="text-2xl">🏛️</span>
              <div>
                <div className="text-sm font-semibold text-teal-300">
                  PSEB Registered — Pakistan Software Export Board
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Registration No. Z-25-19671/26 · Valid Apr 2026 – Mar 2027
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Ministry of Information Technology &amp; Telecommunication,
                  Government of Pakistan
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-teal-400 hover:bg-teal-300 text-navy-900 font-bold text-sm transition-colors"
              >
                Work With Me
              </a>
              <a
                href="https://metaviz.io"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border border-white/20 hover:border-teal-400 text-slate-300 hover:text-white font-semibold text-sm transition-colors"
              >
                Visit Metaviz
              </a>
            </div>
          </div>

          {/* Stats + stack */}
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="p-6 rounded-2xl bg-navy-800 border border-white/10"
                >
                  <div className="text-3xl font-bold text-teal-400">
                    {h.value}
                  </div>
                  <div className="text-sm text-slate-400 mt-1">{h.label}</div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-navy-800 border border-white/10">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {stack.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-lg bg-navy-900 text-slate-300 text-xs font-medium border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
