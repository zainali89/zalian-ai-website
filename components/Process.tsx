const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We jump on a free 30-minute call to understand your business, your current lead flow, and where AI can have the biggest impact.",
  },
  {
    number: "02",
    title: "Strategy & Proposal",
    description:
      "I map out a clear solution — which tools, which flows, and what outcomes to expect. You get a detailed proposal with timeline and cost.",
  },
  {
    number: "03",
    title: "Build & Test",
    description:
      "I build your chatbot, voice agent, or automation and put it through rigorous testing before anything goes live.",
  },
  {
    number: "04",
    title: "Go Live",
    description:
      "Your solution launches. I monitor performance, fix any issues, and make sure everything works exactly as expected from day one.",
  },
  {
    number: "05",
    title: "Ongoing Support",
    description:
      "I stay available to iterate, improve, and expand your AI stack as your business grows and your needs evolve.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-teal-400 font-semibold text-sm uppercase tracking-widest">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-800">
            Simple, Transparent Process
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            From first call to live deployment — here&apos;s exactly what working
            together looks like.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-teal-100 hidden md:block" />

          <div className="flex flex-col gap-10">
            {steps.map((step, i) => (
              <div key={step.number} className="flex gap-8 items-start">
                <div className="relative flex-shrink-0 w-16 h-16 rounded-2xl bg-teal-400 flex items-center justify-center text-navy-900 font-bold text-lg shadow-lg shadow-teal-200 z-10">
                  {step.number}
                </div>
                <div
                  className={`flex-1 pb-8 ${
                    i < steps.length - 1 ? "border-b border-slate-100" : ""
                  }`}
                >
                  <h3 className="text-lg font-semibold text-navy-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
