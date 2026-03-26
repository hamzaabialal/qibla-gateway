# Qibla Gateway — Umrah Travel Services Website

A modern, SEO-optimized website for **Qibla Gateway**, a USA-based Umrah travel agency offering affordable and luxury Umrah packages from the United States.

**Live URL:** [qiblagateway.com](https://qiblagateway.com)

---

## Tech Stack

| Technology     | Version  | Purpose                          |
| -------------- | -------- | -------------------------------- |
| Next.js        | 14.2.3   | React framework (App Router)     |
| React          | 18.3.1   | UI library                       |
| TypeScript     | 5.9.3    | Type safety                      |
| Tailwind CSS   | 3.4.19   | Utility-first CSS styling        |
| react-icons    | 5.6.0    | SVG icon library (FontAwesome)   |
| PostCSS        | 8.5.8    | CSS processing                   |

---

## Project Structure

```
qibla-gateway/
├── public/
│   ├── images/              # Local images (if any)
│   ├── robots.txt           # Search engine crawling rules
│   └── sitemap.xml          # XML sitemap for Google indexing
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout — meta tags, JSON-LD schemas, fonts
│   │   ├── page.tsx         # Home page — assembles all sections
│   │   ├── globals.css      # Global styles, animations, Tailwind directives
│   │   └── favicon.ico      # Site favicon
│   └── components/
│       ├── TopBar.tsx        # Top announcement bar with social links
│       ├── Header.tsx        # Sticky collapsing navigation header
│       ├── Hero.tsx          # Hero section with H1 & CTAs
│       ├── Partners.tsx      # Airline partners marquee carousel
│       ├── ContactForm.tsx   # Contact section with inquiry form
│       ├── Packages.tsx      # Umrah package cards (luxury & affordable)
│       ├── WhyChooseUs.tsx   # About section with trust signals
│       ├── HalalDestinations.tsx  # Halal travel destination cards
│       ├── HowItWorks.tsx    # 4-step booking process
│       ├── FAQ.tsx           # Accordion FAQ section (7 questions)
│       ├── Reviews.tsx       # Customer testimonials & ratings
│       ├── Footer.tsx        # Footer with links, contact, socials
│       ├── WhatsAppButton.tsx # Floating WhatsApp chat button
│       └── DiscountPopup.tsx # Popup modal for discount offers
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── postcss.config.js        # PostCSS configuration
└── package.json             # Dependencies & scripts
```

---

## Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/qibla-gateway.git
cd qibla-gateway

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Note:** If `npm run dev` throws a "'next' not found" error, use:
> ```bash
> node node_modules/next/dist/bin/next dev
> ```

### Production Build

```bash
npm run build
npm run start
```

---

## Architecture

### Single-Page Application

The site is a **single-page application** using hash-based navigation (`#home`, `#packages`, `#contact`, etc.). All content is rendered on the root `/` route.

### Component Loading Strategy

- **Above-the-fold** components (`TopBar`, `Header`, `Hero`, `Partners`) are imported directly for instant rendering
- **Below-the-fold** components are loaded via `next/dynamic` with `ssr: true` for code splitting
- **Client-only** components (`WhatsAppButton`, `DiscountPopup`) use `ssr: false`

### Styling

- **Tailwind CSS** for utility classes
- **Custom CSS** in `globals.css` for animations (hero entrance, marquee, popups, scroll reveals)
- **Brand Colors** defined in `tailwind.config.js`:
  - `brand-brown`: `#3D2B1F`
  - `brand-dark`: `#2C1810`
  - `brand-gold`: `#C4A24E`
  - `brand-cream`: `#F5F0E8`
- **Fonts**: Playfair Display (headings) + Inter (body) via Google Fonts

---

## SEO Implementation

### Meta Tags (layout.tsx)

- Front-loaded title tag: `"Umrah Packages from USA | Affordable Hajj & Umrah — Qibla Gateway"`
- Keyword-optimized meta description targeting USA market
- Open Graph + Twitter Card meta tags
- Canonical URL
- Google Bot directives (`max-image-preview: large`, `max-snippet: -1`)

### JSON-LD Structured Data (layout.tsx)

Eight schema types implemented:

| Schema            | Purpose                                         |
| ----------------- | ----------------------------------------------- |
| TravelAgency      | Identifies business as a travel agency           |
| LocalBusiness     | USA location, hours, contact info               |
| WebSite           | Enables sitelinks search box                    |
| FAQPage           | 7 FAQ items for FAQ rich snippets               |
| TouristTrip (x2)  | Defines luxury & affordable packages            |
| Review/Rating     | Customer reviews + aggregate 4.1 rating         |
| BreadcrumbList    | Navigation breadcrumbs                          |

### Target Keywords

**High Priority:** `umrah packages from usa`, `umrah package`, `affordable umrah packages`

**Quick Wins (Easy KD):** `umrah package from houston`, `umrah package from chicago`, `umrah package from new york`, `umrah package from dallas`, `ramadan umrah package`

### Static SEO Files

- `public/robots.txt` — allows all crawlers, points to sitemap
- `public/sitemap.xml` — lists all sections with priorities

---

## Key Features

- **Collapsing Sticky Header** — shrinks on scroll to free up viewport space
- **Fully Clickable Package Cards** — entire card is an anchor, not just the button
- **FAQ Accordion** — interactive Q&A section with smooth animations
- **Scroll Reveal Animations** — cards animate in using IntersectionObserver
- **Partners Marquee** — infinite scroll carousel of airline logos
- **Discount Popup** — appears 800ms after page load with backdrop blur
- **WhatsApp Float Button** — fixed bottom-left for quick contact
- **Responsive Design** — mobile-first with hamburger navigation
- **Accessibility** — aria-labels, semantic HTML, keyboard navigation

---

## External Resources

### Images

All images are hosted on **Unsplash** (external CDN). No local images are stored locally.

| Image                          | Unsplash ID                        |
| ------------------------------ | ---------------------------------- |
| Hero background (Makkah)       | `photo-1591604129939-f1efa4d9f7fa` |
| Contact section background     | `photo-1564769625905-50e93615e769` |
| How It Works (Pilgrims)        | `photo-1580418827493-f2b22c0a76cb` |
| Why Choose Us (Traveler)       | `photo-1540959733332-eab4deabeeaf` |
| Kaaba (Package cards + Popup)  | `photo-1542816417-0983c9c9ad53`    |

### Logo

The official Qibla Gateway logo is hosted at:
```
https://qiblagateway.com/wp-content/uploads/2025/05/1-1.png
```

This logo is used in: **Header**, **Footer**, **Reviews section**, and **favicon preload**.

### Fonts

- **Playfair Display** — Google Fonts (serif, headings)
- **Inter** — Google Fonts (sans-serif, body text)

---

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Vercel auto-detects Next.js — click Deploy
4. Set custom domain: `qiblagateway.com`

### Environment Variables

No environment variables are required for the current build.

---

## Business Information

| Field      | Value                              |
| ---------- | ---------------------------------- |
| Company    | Qibla Gateway                      |
| Phone      | +1 (916) 299-3388                  |
| Email      | info@qiblagateway.com              |
| Location   | Sacramento, California, USA        |
| WhatsApp   | +1 (916) 299-3388                  |
| Website    | https://qiblagateway.com           |

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m "Add your feature"`
4. Push to branch: `git push origin feature/your-feature`
5. Open a Pull Request

### Code Conventions

- Use **TypeScript** for all components
- Use **Tailwind CSS** utility classes (avoid inline styles unless necessary)
- Components are **functional** with hooks
- Keep components in `src/components/` — one component per file
- Use **semantic HTML** (`<section>`, `<article>`, `<nav>`, `<footer>`)
- Add **aria-labels** for interactive elements
- All images must have descriptive **ALT text** with target keywords

---

## License

Private project. All rights reserved by Qibla Gateway.
