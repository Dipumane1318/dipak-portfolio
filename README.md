# Dipak Mane — Portfolio

A premium, dark-themed, glassmorphism developer portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Design language

- **Look:** near-black base, violet → cyan signal gradient, amber as a sparing third accent, glass panels with soft glow.
- **Signature element:** section eyebrows styled like terminal commands (`$ cat about.md`, `$ ls ./projects`) — a nod to a CS student's day-to-day tools.
- **Type:** Space Grotesk (display), Inter (body), JetBrains Mono (terminal labels/data).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
```

> **Note:** `next/font/google` fetches font files at build time, so the
> machine running `npm run build` / `npm run dev` needs normal internet
> access (this is unrelated to your hosting; Vercel, Netlify, etc. all work
> fine).

## Replacing placeholder content

| What | Where |
|---|---|
| Profile photo | `public/assets/profile.jpg` — replace with your real photo (square, ≥800×800px works best with the circular crop) |
| Resume | `public/assets/Dipak_Mane_Resume.pdf` — your uploaded CV is already wired up to the "Download Resume" button |
| Open Graph cover image | `public/assets/og-cover.jpg` — shown when the link is shared on social/chat apps |
| All text content (bio, skills, projects, experience, certifications, education, links) | `lib/data.ts` — single source of truth, no need to touch components |
| Site URL for SEO/sitemap | `app/layout.tsx` (`siteUrl`) and `app/sitemap.ts` / `app/robots.ts` |

## Contact form

The form validates name, email format, and a minimum message length on the client. It currently has **no backend** — submitting opens the visitor's email client with the message pre-filled (`mailto:`), so it works with zero setup.

To wire up real form submissions instead, add a Next.js API route (e.g. `app/api/contact/route.ts`) that sends the message via a provider like Resend, SendGrid, or Nodemailer, and swap the `mailto:` redirect in `components/Contact.tsx` for a `fetch()` call to that route.

## Project structure

```
app/
  layout.tsx        Fonts, metadata, JSON-LD
  page.tsx           Assembles all sections
  globals.css        Tokens, glass utilities, accessibility
  sitemap.ts / robots.ts
components/
  Hero.tsx, About.tsx, Skills.tsx, Experience.tsx,
  Projects.tsx, Certifications.tsx, Education.tsx, Contact.tsx
  Navbar.tsx, Footer.tsx
  LoadingScreen.tsx, ParticlesBackground.tsx, CursorGlow.tsx
  ui/SectionHeading.tsx, ui/GlassCard.tsx
lib/
  data.ts            All editable content
  utils.ts
public/assets/        Profile photo, resume, OG image
```

## Accessibility & performance

- Respects `prefers-reduced-motion` (disables ambient particle/cursor animation, shortens transitions).
- Visible focus rings on all interactive elements.
- Profile photo uses `next/image` with responsive `sizes` and priority loading.
- Particle background runs on `<canvas>`, not DOM nodes, to stay cheap on mobile.
