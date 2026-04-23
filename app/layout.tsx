import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zalian AI — AI Chatbots, Voice Agents & Automation",
  description:
    "Zalian AI helps trade businesses and SMEs grow with conversational AI chatbots, voice agents, and automation workflows that capture leads 24/7. PSEB Registered.",
  keywords: ["AI chatbot", "voice agent", "automation", "GoHighLevel", "n8n", "trade business", "lead generation"],
  openGraph: {
    title: "Zalian AI — Intelligence Through Software",
    description:
      "AI chatbots, voice agents, and automation for trade businesses. Built by Zain Ali — PSEB registered AI specialist.",
    url: "https://zalian-ai.com",
    siteName: "Zalian AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </html>
  );
}
