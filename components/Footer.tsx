import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-slate-500">
        <div className="flex flex-col items-center sm:items-start gap-2">
          <Image
            src="/logo.png"
            alt="Zalian AI"
            width={100}
            height={34}
            className="h-8 w-auto object-contain brightness-0 invert opacity-70"
          />
          <span className="text-xs">
            PSEB Reg. Z-25-19671/26 · FBR NTN 3520241809369 · {year}
          </span>
        </div>
        <div className="flex gap-6">
          <a
            href="https://metaviz.io"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors"
          >
            Metaviz
          </a>
          <a
            href="mailto:hello@zalian-ai.com"
            className="hover:text-teal-400 transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.upwork.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors"
          >
            Upwork
          </a>
        </div>
      </div>
    </footer>
  );
}
