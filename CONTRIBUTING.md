# Contributing to Qibla Gateway

Thank you for your interest in contributing to the Qibla Gateway project. This guide will help you get up and running quickly.

---

## Development Setup

```bash
# 1. Clone the repo
git clone https://github.com/YOUR-USERNAME/qibla-gateway.git
cd qibla-gateway

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
# If 'next' not found, use:
node node_modules/next/dist/bin/next dev

# 4. Open http://localhost:3000
```

---

## Project Overview

This is a **Next.js 14 (App Router)** single-page website for a USA-based Umrah travel agency.

### Key Files to Know

| File | What it does |
| ---- | ------------ |
| `src/app/layout.tsx` | Root layout with all meta tags, SEO schemas (JSON-LD), font loading |
| `src/app/page.tsx` | Home page — imports and assembles all section components |
| `src/app/globals.css` | Custom CSS animations, brand styles, Tailwind directives |
| `src/components/*.tsx` | Individual section components (Header, Hero, Packages, etc.) |
| `next.config.js` | Next.js config — image domains, caching headers, compression |
| `tailwind.config.js` | Brand colors (`brand-brown`, `brand-dark`, `brand-gold`, `brand-cream`) |
| `public/robots.txt` | SEO — search engine crawling rules |
| `public/sitemap.xml` | SEO — XML sitemap for Google indexing |

### Component Rendering Order (top to bottom)

```
TopBar → Header → Hero → Partners → ContactForm → Packages →
WhyChooseUs → HalalDestinations → HowItWorks → FAQ → Reviews → Footer
```

Floating overlays: `WhatsAppButton` (bottom-left), `DiscountPopup` (centered modal)

---

## Code Conventions

### TypeScript

- All components must be TypeScript (`.tsx`)
- Use explicit types for props — no `any`
- Prefer interfaces over type aliases for component props

### Components

- One component per file in `src/components/`
- Functional components with hooks only (no class components)
- Server Components by default — add `"use client"` only when needed (state, effects, event handlers)
- Export components as `default export`

### Styling

- Use **Tailwind CSS** utility classes as the primary styling method
- Custom CSS goes in `globals.css` only for animations or complex selectors
- Use brand color classes: `text-brand-gold`, `bg-brand-dark`, `bg-brand-brown`, `bg-brand-cream`
- Button styles: `btn-gold` (gold CTA) and `btn-brown` (dark CTA)

### Images

- All `<img>` tags MUST have descriptive `alt` text with target keywords
- Include `width` and `height` attributes to prevent CLS (layout shift)
- Use `loading="lazy"` for below-the-fold images
- Use `loading="eager"` only for hero/LCP images
- Add `decoding="async"` for non-critical images
- Append `?fm=webp` to Unsplash URLs for WebP format

### SEO Rules

- Every section `<h2>` should include a target keyword naturally
- The `<h1>` tag only exists in `Hero.tsx` — there must be exactly ONE h1 per page
- All interactive elements need `aria-label` attributes
- Use semantic HTML: `<section>`, `<article>`, `<nav>`, `<footer>`, `<main>`
- Phone numbers should be wrapped in `<a href="tel:...">` links
- Email addresses should be wrapped in `<a href="mailto:...">` links

### Logo

The official logo is used from:
```
https://qiblagateway.com/wp-content/uploads/2025/05/1-1.png
```

Use this SAME logo everywhere (Header, Footer, Reviews, etc.) — do NOT create SVG placeholders.

---

## Brand Colors

```
Brown:  #3D2B1F  (brand-brown) — primary dark background
Dark:   #2C1810  (brand-dark)  — darker shade for depth
Gold:   #C4A24E  (brand-gold)  — accent color, CTAs, highlights
Cream:  #F5F0E8  (brand-cream) — light background sections
```

---

## Git Workflow

1. **Never push directly to `main`** — always use feature branches
2. Branch naming: `feature/description`, `fix/description`, `seo/description`
3. Write clear commit messages describing what and why
4. Open a Pull Request with a description of changes
5. Request review before merging

### Commit Message Examples

```
feat: add city-based landing pages for Houston and Chicago
fix: broken image URL in HowItWorks section
seo: add FAQ schema markup and expand meta descriptions
style: update package card hover animation
```

---

## Testing Your Changes

Before submitting a PR:

```bash
# 1. Build must succeed
npm run build

# 2. Check for TypeScript errors
npx tsc --noEmit

# 3. Verify all images load correctly
# Open http://localhost:3000 and check every section

# 4. Test on mobile viewport (Chrome DevTools → Toggle Device Toolbar)
```

---

## Common Tasks

### Adding a New Section

1. Create component in `src/components/NewSection.tsx`
2. Import in `src/app/page.tsx` using `next/dynamic`:
   ```tsx
   const NewSection = dynamic(() => import("@/components/NewSection"), { ssr: true });
   ```
3. Add it in the JSX at the correct position
4. Add corresponding section `id` for hash navigation

### Updating SEO / Schema

- Meta tags and JSON-LD schemas are in `src/app/layout.tsx`
- Update `public/sitemap.xml` if you add new pages/sections
- Test schemas at: https://search.google.com/test/rich-results

### Changing Brand Colors

- Update `tailwind.config.js` → `theme.extend.colors`
- Update CSS variables in `globals.css` (`.gold-text`, `.brown-bg`, `.dark-brown-bg`)
- Update button styles (`.btn-gold`, `.btn-brown`)

---

## Questions?

Contact the project owner or open a GitHub Issue.
