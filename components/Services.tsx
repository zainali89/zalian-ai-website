const services = [
  {
    icon: "💬",
    title: "Conversational AI Chatbots",
    description:
      "Custom AI chatbots embedded on your website that qualify leads, answer enquiries, and route conversations — 24/7 without human involvement.",
    tags: ["CloseBot", "GoHighLevel", "HubSpot"],
  },
  {
    icon: "🎙️",
    title: "AI Voice Agents",
    description:
      "Inbound and outbound voice agents that handle calls, qualify prospects, book discovery appointments, and route callers automatically.",
    tags: ["ElevenLabs", "Retell AI", "Vapi", "Twilio"],
  },
  {
    icon: "⚡",
    title: "Automation Workflows",
    description:
      "End-to-end automation connecting your CRM, marketing tools, and communication channels so leads are followed up instantly.",
    tags: ["n8n", "GoHighLevel", "Zapier"],
  },
  {
    icon: "🔗",
    title: "CRM Setup & Integration",
    description:
      "Full GoHighLevel CRM configuration — pipelines, workflows, calendars, custom fields, and third-party integrations tailored to your process.",
    tags: ["GoHighLevel", "GHL", "CRM"],
  },
  {
    icon: "🏗️",
    title: "Full-Stack Development",
    description:
      "Custom web apps, dashboards, and APIs built with modern frameworks. From internal tools to client-facing platforms.",
    tags: ["Next.js", "React", "Node.js", "Laravel"],
  },
  {
    icon: "🧠",
    title: "AI Strategy & Consulting",
    description:
      "Not sure where to start with AI? I'll audit your current setup, identify automation opportunities, and build a practical roadmap.",
    tags: ["Strategy", "Audit", "Roadmap"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-teal-400 font-semibold text-sm uppercase tracking-widest">
            What I Do
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-800">
            Services Built to Scale Your Business
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Practical AI and automation solutions — not experiments. Every
            service is designed to create real, measurable impact on your lead
            flow and operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-teal-200 hover:shadow-lg hover:shadow-teal-50 transition-all duration-300"
            >
              <div className="text-4xl mb-5">{s.icon}</div>
              <h3 className="text-lg font-semibold text-navy-800 mb-3">
                {s.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                {s.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-teal-50 text-teal-600 text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
