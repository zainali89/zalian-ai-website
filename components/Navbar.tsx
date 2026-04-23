"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          {scrolled ? (
            <Image src="/logo.png" alt="Zalian AI" width={120} height={40} className="h-9 w-auto object-contain" priority />
          ) : (
            <span className="text-xl font-bold text-white tracking-tight">
              Zalian<span className="text-teal-400">AI</span>
            </span>
          )}
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-teal-400 ${
                scrolled ? "text-navy-800" : "text-white/80"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded-lg bg-teal-400 text-navy-950 text-sm font-bold hover:bg-teal-300 transition-all shadow-lg shadow-teal-400/20"
          >
            Get a Quote
          </a>
        </nav>

        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-navy-800 hover:bg-slate-100" : "text-white hover:bg-white/10"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-slate-100 px-6 py-5 flex flex-col gap-4 shadow-lg">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-navy-800 hover:text-teal-400 transition-colors py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="px-5 py-2.5 rounded-lg bg-teal-400 text-navy-950 text-sm font-bold text-center hover:bg-teal-300 transition-colors"
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
}
