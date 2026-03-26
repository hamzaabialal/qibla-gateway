# CLAUDE.md — AI Assistant Context for Qibla Gateway

This file provides context for AI assistants (Claude, Copilot, etc.) working on this project.

## Project Summary

Qibla Gateway is a **Next.js 14 (App Router)** single-page website for a USA-based Umrah travel agency. It targets the US Muslim community searching for Umrah packages online.

## Key Technical Details

- **Framework:** Next.js 14.2.3 with App Router (NOT Pages Router)
- **Language:** TypeScript (strict mode off)
- **Styling:** Tailwind CSS 3.4 + custom CSS in `globals.css`
- **Icons:** react-icons (FontAwesome set — `FaXxx` imports)
- **Build:** `npm run build` or `node node_modules/next/dist/bin/next build`
- **No database, no API routes, no authentication** — this is a static marketing site

## Architecture Rules

- Single-page app — all content on `/`, navigation via hash anchors (`#home`, `#packages`, etc.)
- Server Components by default, `"use client"` only for interactivity
- Below-fold components use `next/dynamic` with `ssr: true`
- ONE `<h1>` tag on the entire page (in `Hero.tsx`) — all other headings are `<h2>` or `<h3>`

## SEO is Critical

- All JSON-LD schemas are in `layout.tsx` — do NOT remove or break them
- Every image MUST have keyword-rich `alt` text
- Target keyword is "Umrah Packages from USA" — keep it in H1, title, and meta description
- `public/robots.txt` and `public/sitemap.xml` must stay updated
- Do NOT introduce Lorem Ipsum or placeholder text anywhere

## Logo

Use the SAME logo image everywhere:
```
https://qiblagateway.com/wp-content/uploads/2025/05/1-1.png
```
Do NOT create SVG placeholder logos. The real logo is used in Header, Footer, and Reviews.

## Brand Colors

- `brand-brown: #3D2B1F` — primary brown
- `brand-dark: #2C1810` — darker brown
- `brand-gold: #C4A24E` — gold accent
- `brand-cream: #F5F0E8` — light cream

## Common Pitfalls

- `npm run dev` may fail with "'next' not found" — use `node node_modules/next/dist/bin/next dev` instead
- There are external images from Unsplash — they need `remotePatterns` in `next.config.js`
- ESLint may show config errors (pre-existing `resolveFrom` issue) — build still succeeds
- Do NOT add `output: "export"` to next.config.js — it breaks `headers()` and Vercel SSR features
