import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Umrah Packages from USA | Affordable Hajj & Umrah — Qibla Gateway",
  description:
    "Book affordable Umrah packages from USA with Qibla Gateway. 5-star & 4-star hotel stays in Makkah & Madinah, visa, transportation & insurance included. Trusted by pilgrims across America.",
  metadataBase: new URL("https://qiblagateway.com"),
  keywords: [
    "umrah packages from usa",
    "umrah package",
    "affordable umrah packages",
    "cheap umrah packages",
    "umrah package from houston",
    "umrah package from chicago",
    "umrah package from new york",
    "umrah package from dallas",
    "umrah package from los angeles",
    "ramadan umrah package",
    "luxury umrah packages",
    "hajj packages from usa",
    "umrah travel agency usa",
  ],
  openGraph: {
    title: "Umrah Packages from USA | Affordable Hajj & Umrah — Qibla Gateway",
    description:
      "Book affordable Umrah packages from USA. 5-star hotels, visa, transportation & insurance included. Serving pilgrims from Houston, Chicago, New York, Dallas & LA.",
    type: "website",
    locale: "en_US",
    siteName: "Qibla Gateway",
    url: "https://qiblagateway.com",
    images: [
      {
        url: "https://qiblagateway.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Qibla Gateway — Umrah Packages from USA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Umrah Packages from USA | Qibla Gateway",
    description:
      "Affordable & luxury Umrah packages from USA. 5-star hotels, visa, transport included.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://qiblagateway.com",
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-verification-code",
  },
};

// JSON-LD Structured Data
const travelAgencySchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Qibla Gateway",
  url: "https://qiblagateway.com",
  logo: "https://qiblagateway.com/wp-content/uploads/2025/05/1-1.png",
  description:
    "Qibla Gateway is a trusted USA-based Umrah travel agency offering affordable and luxury Umrah packages with 5-star hotels, visa processing, transportation, and insurance.",
  telephone: "+1-916-299-3388",
  email: "info@qiblagateway.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sacramento",
    addressRegion: "CA",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.5816,
    longitude: -121.4944,
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  priceRange: "$$",
  sameAs: [],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.1",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "5",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://qiblagateway.com/#business",
  name: "Qibla Gateway",
  image: "https://qiblagateway.com/wp-content/uploads/2025/05/1-1.png",
  telephone: "+1-916-299-3388",
  email: "info@qiblagateway.com",
  url: "https://qiblagateway.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sacramento",
    addressRegion: "CA",
    addressCountry: "US",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "09:00",
    closes: "18:00",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Qibla Gateway",
  url: "https://qiblagateway.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://qiblagateway.com/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const touristTripSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Luxury Umrah Package from USA — 10 Nights",
    description:
      "10-night luxury Umrah package from USA with 5-star hotels in Makkah and Madinah. Includes visa, transportation, buffet breakfast, and holy sightseeing.",
    touristType: "Pilgrims",
    itinerary: {
      "@type": "ItemList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Visa & Insurance Processing" },
        { "@type": "ListItem", position: 2, name: "5-Star Hotel in Makkah" },
        { "@type": "ListItem", position: 3, name: "5-Star Hotel in Madinah" },
        { "@type": "ListItem", position: 4, name: "Transportation & Sightseeing" },
      ],
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://qiblagateway.com/#packages",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Affordable Umrah Package from USA — 10 Nights",
    description:
      "10-night affordable Umrah package from USA with 4-star hotels in Makkah and Madinah. Budget-friendly pilgrimage with visa, transport, and breakfast included.",
    touristType: "Pilgrims",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://qiblagateway.com/#packages",
    },
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much do Umrah packages from USA cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Qibla Gateway offers affordable Umrah packages from the USA starting with 4-star hotel accommodations, and luxury packages with 5-star hotels in Makkah and Madinah. All packages include visa processing, transportation, buffet breakfast, and insurance. Contact us at +1 (916) 299-3388 for current pricing.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in Qibla Gateway's Umrah packages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every Umrah package includes: round-trip transportation, hotel accommodation in Makkah and Madinah (4-star or 5-star), buffet breakfast, Umrah visa processing, travel insurance, and guided holy sightseeing tours. Packages are available in 5-night, 7-night, and 10-night durations.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book an Umrah package from Houston, Chicago, or New York?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Qibla Gateway serves pilgrims from all major US cities including Houston, Chicago, New York, Dallas, Los Angeles, and Sacramento. We arrange flights from your nearest airport and handle all travel logistics.",
      },
    },
    {
      "@type": "Question",
      name: "Is Qibla Gateway a licensed and trusted Umrah travel agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Qibla Gateway is a fully licensed and legal Umrah travel agency based in Sacramento, California, USA. We are trusted by pilgrims across America and have excellent reviews from our customers for our reliable, transparent, and caring service.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book an Umrah package with Qibla Gateway?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Booking is simple: 1) Contact us via phone at +1 (916) 299-3388 or fill out our online form for a free consultation. 2) Submit your passport and documents. 3) Make payment and receive your confirmed itinerary. 4) Perform your sacred pilgrimage with full support from our team.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer Ramadan Umrah packages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Qibla Gateway offers special Ramadan Umrah packages from the USA. Performing Umrah during Ramadan holds immense spiritual significance. Our Ramadan packages include premium hotel stays close to the Haram, ensuring you can maximize your worship during this blessed month.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between luxury and affordable Umrah packages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our luxury Umrah packages feature 5-star hotels in Makkah and Madinah with premium amenities, while our affordable packages offer comfortable 4-star hotel stays. Both package tiers include visa processing, transportation, buffet breakfast, holy sightseeing, and travel insurance.",
      },
    },
  ],
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Qibla Gateway",
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Navaid Rafiq" },
      datePublished: "2025-08-10",
      reviewBody:
        "Very good experience dealing with Mr Ali. He is very cooperative and friendly and spent too much time to bring multiple options on the table to match our requirements.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Fatima Mbodj" },
      datePublished: "2025-07-21",
      reviewBody:
        "I found the Qibla Gateway agency through a proposed ad on instagram and was pleasantly surprised by the quality of service and professionalism.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Ayesha Siddiqua" },
      datePublished: "2025-07-01",
      reviewBody:
        "First and foremost, I would like to sincerely thank the entire team who guided us through every step with patience and clarity, and were always available to answer our questions.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.1",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "5",
    ratingCount: "5",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://qiblagateway.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Umrah Packages from USA",
      item: "https://qiblagateway.com/#packages",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Contact Us",
      item: "https://qiblagateway.com/#contact",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />

        {/* Preload critical fonts with display swap */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@300;400;500;600;700&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@300;400;500;600;700&display=swap"
        />

        {/* Preload hero background image (LCP element) */}
        <link
          rel="preload"
          as="image"
          href="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1920&q=75"
        />
        {/* Preload logo */}
        <link
          rel="preload"
          as="image"
          href="https://qiblagateway.com/wp-content/uploads/2025/05/1-1.png"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAgencySchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        {touristTripSchemas.map((schema, i) => (
          <script
            key={`trip-${i}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
