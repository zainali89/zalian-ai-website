const industries = [
  { icon: "🔥", name: "Heating & Plumbing" },
  { icon: "☀️", name: "Solar & Renewables" },
  { icon: "❄️", name: "Air Conditioning" },
  { icon: "⚡", name: "Electrical & EV Charging" },
  { icon: "🏠", name: "Home Improvements" },
  { icon: "🏗️", name: "Construction & Roofing" },
  { icon: "💼", name: "Professional Services" },
  { icon: "🛒", name: "E-Commerce & Retail" },
];

const testimonials = [
  {
    quote:
      "The AI chatbot captures leads around the clock. We went from missing enquiries overnight to waking up to qualified leads every morning.",
    author: "Heating Company",
    location: "UK",
  },
  {
    quote:
      "The voice agent handles our overflow calls perfectly. Customers get an instant response, and our team only deals with the warm prospects.",
    author: "Solar Installer",
    location: "UK",
  },
  {
    quote:
      "Zain understood our process better than we did and automated the parts that were killing our time. ROI was clear within the first month.",
    author: "Trade Business Owner",
    location: "UK",
  },
];

export default function Clients() {
  return (
    <section id="clients" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-teal-400 font-semibold text-sm uppercase tracking-widest">
            Industries I Serve
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-800">
            Built for Businesses That Rely on Leads
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            I specialise in trade businesses and SMEs — the kinds of companies
            where every missed call or slow response is a lost sale.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-teal-200 hover:bg-teal-50 transition-colors text-center"
            >
              <span className="text-3xl">{ind.icon}</span>
              <span className="text-sm font-medium text-navy-800">
                {ind.name}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <span className="text-teal-400 font-semibold text-sm uppercase tracking-widest">
            Client Feedback
          </span>
          <h2 className="mt-3 text-3xl font-bold text-navy-800">
            What Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between"
            >
              <p className="text-slate-600 leading-relaxed italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div className="font-semibold text-navy-800 text-sm">
                  {t.author}
                </div>
                <div className="text-slate-400 text-xs mt-0.5">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
