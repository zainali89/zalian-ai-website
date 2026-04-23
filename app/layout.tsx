import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zalian AI — AI Chatbots, Voice Agents & Automation",
  description:
    "Zalian AI helps trade businesses and SMEs grow with conversational AI chatbots, voice agents, and automation workflows. Powered by Zain Ali.",
  openGraph: {
    title: "Zalian AI — AI Chatbots, Voice Agents & Automation",
    description:
      "Conversational AI chatbots, voice agents, and automation workflows for growing businesses.",
    url: "https://zalian-ai.com",
    siteName: "Zalian AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-full">{children}</body>
    </html>
  );
}
