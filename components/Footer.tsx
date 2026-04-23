import Image from "next/image";

const links = {
  Services: [
    { label: "AI Chatbots", href: "#services" },
    { label: "Voice Agents", href: "#services" },
    { label: "Automation", href: "#services" },
    { label: "CRM Setup", href: "#services" },
    { label: "Development", href: "#services" },
  ],
  Company: [
    { label: "About Zain Ali", href: "#about" },
    { label: "How It Works", href: "#process" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
    { label: "Metaviz.io", href: "https://metaviz.io" },
    { label: "Upwork Profile", href: "https://www.upwork.com/freelancers/~01fcd98c58afb8fa79" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-white rounded-lg p-1.5">
              <Image src="/logo.png" alt="Zalian AI" width={80} height={28} className="h-7 w-auto object-contain" />
            </div>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
            Intelligence Through Software. AI chatbots, voice agents, and automation for trade businesses and SMEs.
          </p>
          <div className="mt-5 flex flex-col gap-1.5">
            <span className="text-xs text-slate-600">PSEB Reg. Z-25-19671/26</span>
            <span className="text-xs text-slate-600">FBR NTN 3520241809369</span>
            <span className="text-xs text-slate-600">166, Ali Town, Raiwind Road, Lahore</span>
          </div>
        </div>

        {/* Links */}
        {Object.entries(links).map(([group, items]) => (
          <div key={group}>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">{group}</p>
            <ul className="flex flex-col gap-2.5">
              {items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-slate-500 hover:text-teal-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <span>© {year} Zalian AI — Sole Proprietorship. All rights reserved.</span>
          <a href="mailto:hello@zalian-ai.com" className="hover:text-teal-400 transition-colors">
            hello@zalian-ai.com
          </a>
        </div>
      </div>
    </footer>
  );
}
