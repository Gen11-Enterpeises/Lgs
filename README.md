# Linga Global School — Next.js + React + Tailwind

A fully dynamic, componentized rebuild of the school website using Next.js (App Router), React, and Tailwind CSS. All animations (scroll reveals, counters, tabs, accordion, marquee, cursor glow, ripple buttons) are real React state/effects instead of static CSS.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Deploy

Push this folder to a GitHub repo and import it on [Vercel](https://vercel.com/new) — zero config needed, it's a standard Next.js app.

## Structure

- `app/layout.js` — root layout, fonts, metadata
- `app/page.js` — assembles all sections
- `app/globals.css` — Tailwind directives + custom reveal/animation utility classes
- `components/` — one component per section (Navbar, Hero, About, VisionMission, Motto, Features, Academics, Infrastructure, Leadership, Stats, Voices, Admissions, Faq, Contact, Footer)
- `components/PageEffects.js` — preloader, scroll progress bar, cursor glow, back-to-top
- `components/Reveal.js` / `useReveal.js` — IntersectionObserver-based scroll reveal wrapper
- `components/Counter.js` — animated number counter
- `components/RippleButton.js` — material-style ripple click effect
- `tailwind.config.js` — custom color palette (amber/orange gradient on white/grey/fog) + keyframe animations

## Notes

- Images are currently linked directly from `lingaschool.org` via `next.config.js` remotePatterns. Swap in your own assets under `public/img/` and update the `src` props for full control and faster builds.
- The contact form currently simulates a "sent" state client-side — wire it up to an API route (`app/api/contact/route.js`) or a service like Formspree/Resend to actually deliver enquiries.
