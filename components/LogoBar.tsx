const tools = [
  "CloseBot", "GoHighLevel", "ElevenLabs", "Retell AI",
  "Vapi", "n8n", "Twilio", "Next.js", "React Native",
  "Node.js", "Supabase", "AWS", "Zapier", "HubSpot",
  "CloseBot", "GoHighLevel", "ElevenLabs", "Retell AI",
  "Vapi", "n8n", "Twilio", "Next.js", "React Native",
  "Node.js", "Supabase", "AWS", "Zapier", "HubSpot",
];

export default function LogoBar() {
  return (
    <section className="py-12 bg-navy-950 border-y border-white/5 overflow-hidden">
      <div className="mb-6 text-center">
        <p className="text-xs text-slate-600 uppercase tracking-widest font-semibold">
          Platforms &amp; Tools I Work With
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-navy-950 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-navy-950 to-transparent pointer-events-none" />

        <div className="flex animate-scroll-x gap-8 whitespace-nowrap">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/8 bg-white/3 text-slate-400 text-sm font-medium flex-shrink-0 hover:border-teal-400/30 hover:text-teal-300 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400/60" />
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
