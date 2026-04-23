export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-900 text-white">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,196,190,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,196,190,0.4) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-navy-800/60 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-400/30 bg-teal-400/10 text-teal-300 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          PSEB Registered · Reg No. Z-25-19671/26
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
          Intelligence Through{" "}
          <span className="bg-gradient-to-r from-teal-300 to-teal-400 bg-clip-text text-transparent">
            Software
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-4 leading-relaxed">
          AI-powered chatbots, voice agents, and automation workflows that capture
          leads 24/7, qualify prospects automatically, and free your team to
          focus on closing.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-navy-900 font-bold transition-colors shadow-lg shadow-teal-400/20"
          >
            Book a Free Call
          </a>
          <a
            href="#services"
            className="px-8 py-3.5 rounded-xl border border-white/20 hover:border-teal-400 text-slate-300 hover:text-white font-semibold transition-colors"
          >
            See My Services
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto">
          {[
            { value: "80+", label: "Clients Served" },
            { value: "24/7", label: "Lead Capture" },
            { value: "5+", label: "Years Experience" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold text-teal-400">{s.value}</div>
              <div className="text-xs text-slate-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs">
        <span>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
      </div>
    </section>
  );
}
