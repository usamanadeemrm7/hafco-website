# HAFCO — Corporate Website

A production-ready Next.js 14 (App Router) website for HAFCO, an international
food import, export and distribution company.

## Tech Stack

- Next.js 14 (App Router) + React 18 + TypeScript
- Tailwind CSS (custom brand tokens in `tailwind.config.ts`)
- Framer Motion (scroll reveals, hero crossfade, animated counters)
- Lucide React (icons)

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000. The Google Fonts (Poppins, Inter, Manrope) are
fetched at build time via `next/font/google`, so an internet connection is
required for `npm run dev` / `npm run build` the first time.

## Project Structure

```
src/
  app/
    layout.tsx        Root layout, fonts, global metadata, JSON-LD schema
    page.tsx           Home page
    about/page.tsx      About page
    products/page.tsx   Products page
    contact/page.tsx    Contact page
    sitemap.ts          Auto-generated sitemap.xml
    robots.ts           Auto-generated robots.txt
    globals.css         Tailwind layers + brand utility classes
  components/          Reusable, single-responsibility components
  lib/data.ts          All site copy/content in one place (edit here first)
public/
  logo.png             Brand logo, transparent background (from your upload)
  favicon.png          Favicon generated from the same logo
```

## Editing Content

Almost everything (company info, product categories, stats, process steps,
core values, nav links) lives in `src/lib/data.ts`. Update it there and it
propagates through the header, footer, home page, and products page
automatically.

## Brand

| Token | Value |
|---|---|
| Primary red | `#E32227` |
| Secondary green | `#2F8F2F` |
| Deep green (dark sections) | `#0F3D2E` |
| Background | `#FFFFFF` |
| Text | `#1E1E1E` |
| Light background | `#F8F9FA` |

Fonts: Poppins (display/headings), Inter (body), Manrope (labels, nav, eyebrows, stats).

## Images

Product, hero and section imagery uses hotlinked Unsplash photos (free to
use, no attribution required) as placeholders so the site is fully
functional out of the box. Swap the URLs in `src/lib/data.ts` and the
individual components (`Hero.tsx`, `AboutSection.tsx`, `CTA.tsx`, page files
in `src/app/*`) with your own licensed photography before going live.

## Logo & Favicon

`public/logo.png` was generated from your uploaded image with the white
background made transparent. If you have a higher-resolution or vector
version of the HAFCO logo, replace `public/logo.png` and `public/favicon.png`
with it for the sharpest results, especially at small sizes.

## Contact Form

`src/components/ContactForm.tsx` currently validates client-side and shows a
success state after a simulated submit — there's no backend wired up yet.
To make it functional, connect the `handleSubmit` function to an email
service (e.g. Resend, SendGrid) or your own API route.

## Deployment

The project builds to a fully static-friendly Next.js app. It deploys
cleanly to Vercel, Netlify, or any Node hosting:

```bash
npm run build
npm run start
```
