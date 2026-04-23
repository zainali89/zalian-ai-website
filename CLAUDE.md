# Zalian AI Website — CLAUDE.md

## Project Overview

This is the official website for **Zalian AI** (zalian-ai.com), a sole proprietorship run by **Zain Ali** — AI Manager at Metaviz and freelance AI specialist. The site showcases AI chatbot, voice agent, and automation services for trade businesses and SMEs.

**Brand:**
- Company: Zalian AI
- Tagline: "Intelligence Through Software"
- Owner: Zain Ali
- Agency: Metaviz (metaviz.io)
- PSEB Reg: Z-25-19671/26 (valid Apr 2026 – Mar 2027)
- FBR NTN: 3520241809369

**Brand Colors:**
- Navy: `#0B1D51` — primary dark brand color
- Teal: `#00C4BE` — accent / CTA color
- Page dark: `#030C1F` — hero / dark section backgrounds
- Custom Tailwind tokens: `bg-navy-800`, `text-teal-400` etc. (defined in globals.css @theme)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 (`@import "tailwindcss"` — NOT `@tailwind base/components/utilities`)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript
- **Deploy target:** Hostinger Node.js (Node 20)

## File Structure

```
app/
  layout.tsx       — metadata, global CSS, GHL script tag
  page.tsx         — assembles all section components in order
  globals.css      — Tailwind v4 import + @theme custom colors
components/
  Navbar.tsx       — sticky nav, transparent→frosted on scroll
  Hero.tsx         — dark hero, beam animations, badge, headline, stats
  LogoBar.tsx      — scrolling tech stack logos
  Services.tsx     — bento grid (6 services)
  About.tsx        — split layout, PSEB badge, animated stats
  Process.tsx      — numbered timeline (5 steps)
  Testimonials.tsx — 3 client quote cards + industry grid
  FAQ.tsx          — accordion
  CTA.tsx          — full-width call-to-action
  Contact.tsx      — GHL embedded iframe form
  Footer.tsx       — multi-column footer
public/
  logo.png         — Zalian AI logo, cropped 657x650px, white bg (use on white sections only)
  og-image.png     — 1200x630 social share image (logo on navy bg)
app/
  favicon.ico      — 16/32/48px browser tab icon
  apple-icon.png   — 180x180 iOS homescreen icon
assets/            — original source files (logo PNG, PSEB cert PDF, FBR reg PDF)
```

## Design System

### Tailwind v4 Custom Colors (@theme in globals.css)
```
navy-950 → #030C1F   (hero / dark page bg)
navy-900 → #05112A
navy-800 → #0B1D51   (brand navy)
navy-700 → #162472
teal-400 → #00C4BE   (primary accent)
teal-300 → #33D9D3
teal-500 → #00ADAB
teal-50  → #E6FAFA
teal-100 → #B3F0EE
```

### Typography Conventions
- Section labels: `text-teal-400 text-sm font-semibold uppercase tracking-widest`
- H2 headlines: `text-3xl sm:text-4xl font-bold tracking-tight`
- Body copy: `text-slate-500` (light sections) / `text-slate-300` (dark sections)

### Section Alternation
Dark (`bg-navy-950`) → Light (`bg-white`) → Dark → Light for visual rhythm.

### Animations
- Framer Motion: `initial={{opacity:0, y:24}}` → `whileInView={{opacity:1, y:0}}`
- Always use `viewport={{ once: true }}` to animate only once
- Stagger children: `transition={{delay: index * 0.1}}`

### Navbar
- **On hero (unscrolled):** transparent, text logo `Zalian<span>AI</span>` in white/teal
- **After 60px scroll:** `bg-white/95 backdrop-blur shadow-sm`, image logo `/logo.png`
- Mobile: hamburger → slide-down menu

### Logo Usage Rule
- **Dark backgrounds:** text logo only (PNG has white bg, looks bad on dark)
- **White/light backgrounds:** `<Image src="/logo.png" />`

## Key Links

- **Upwork:** https://www.upwork.com/freelancers/~01fcd98c58afb8fa79
- **Metaviz:** https://metaviz.io
- **Email:** hello@zalian-ai.com
- **GitHub repo:** https://github.com/zainali89/zalian-ai-website

## Contact Form (GHL)

The contact form is a GHL embedded iframe — do NOT replace with a custom React form.

```html
<iframe
  src="https://api.leadconnectorhq.com/widget/form/ofrhYDImWoLObcgLGWq4"
  style="width:100%;height:100%;border:none;border-radius:0px"
  id="inline-ofrhYDImWoLObcgLGWq4"
  data-layout="{'id':'INLINE'}"
  data-trigger-type="alwaysShow"
  data-form-name="Get a Quote - Zalian AI"
  data-height="789"
  data-form-id="ofrhYDImWoLObcgLGWq4"
  title="Get a Quote - Zalian AI"
/>
```
The required script `https://link.msgsndr.com/js/form_embed.js` is loaded in `layout.tsx` via Next.js `<Script>` component with `strategy="afterInteractive"`.

## Commands

```bash
npm run dev      # Dev server at localhost:3000
npm run build    # Production build — MUST pass before any commit
npm run lint     # ESLint check
```

## Deployment

- **GitHub:** https://github.com/zainali89/zalian-ai-website
- **Hosting:** Hostinger Node.js, Node 20
- **Build:** `npm run build` | **Start:** `npm start`
- **Domain:** zalian-ai.com (connected via Hostinger DNS)
- **metadataBase:** set to `https://zalian-ai.com` in `layout.tsx` — do not remove

## Rules

1. **Build before committing** — `npm run build` must succeed
2. **Tailwind v4 only** — `@import "tailwindcss"` + `@theme {}`, never v3 syntax
3. **No dark mode variants** — single-theme design using alternating dark/light sections
4. **One page** — everything in `app/page.tsx` via components
5. **GHL form is sacred** — never replace the iframe with a custom form
