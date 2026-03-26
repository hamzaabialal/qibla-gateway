"use client";
import { useEffect, useRef } from "react";
import { FaCheck, FaStar } from "react-icons/fa";

const luxuryPackages = [
  { nights: "10", hotel: "5-Star Hotels (Makkah & Madina)", slug: "luxury-10-nights" },
  { nights: "07", hotel: "5-Star Hotels (Makkah & Madina)", slug: "luxury-7-nights" },
  { nights: "05", hotel: "5-Star Hotels (Makkah & Madina)", slug: "luxury-5-nights" },
];

const affordablePackages = [
  { nights: "10", hotel: "4-Star Hotels (Makkah & Madina)", slug: "affordable-10-nights" },
  { nights: "07", hotel: "4-Star Hotels (Makkah & Madina)", slug: "affordable-7-nights" },
  { nights: "05", hotel: "4-Star Hotels (Makkah & Madina)", slug: "affordable-5-nights" },
];

const features = [
  "Transportation",
  "Buffet Breakfast",
  "Holy Sightseeing",
  "Visa & Insurance",
];

const images = [
  "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=400&q=70&fm=webp",
  "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=400&q=70&fm=webp",
  "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=400&q=70&fm=webp",
];

const imageAlts = [
  "Masjid al-Haram Makkah — Umrah Package from USA",
  "Masjid an-Nabawi Madinah — Umrah Pilgrimage",
  "Holy Kaaba during Umrah — Sacred Pilgrimage",
];

function PackageCard({
  title,
  hotel,
  imgIndex,
  delay,
}: {
  title: string;
  hotel: string;
  imgIndex: number;
  delay: number;
}) {
  return (
    <a
      href="/contact"
      className="reveal-card package-card bg-white rounded-2xl overflow-hidden shadow-md block cursor-pointer group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="h-56 overflow-hidden">
        <img
          src={images[imgIndex % images.length]}
          alt={imageAlts[imgIndex % imageAlts.length]}
          loading="lazy"
          decoding="async"
          width={400}
          height={224}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <div className="grid grid-cols-2 gap-3 mb-4">
          {features.map((f) => (
            <div
              key={f}
              className="flex items-center gap-2 text-sm text-gray-600"
            >
              <FaCheck className="text-brand-gold flex-shrink-0" size={14} />
              {f}
            </div>
          ))}
        </div>
        <div className="border-t-2 border-dashed border-gray-300 my-4" />
        <div className="flex items-center gap-2 mb-4">
          <FaStar className="text-yellow-500" />
          <span className="text-sm font-medium">{hotel}</span>
        </div>
        <span className="btn-brown text-sm group-hover:bg-brand-gold group-hover:text-white transition-colors">
          Get Details & Pricing
        </span>
      </div>
    </a>
  );
}

function useRevealObserver(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".reveal-card");
            cards.forEach((card) => card.classList.add("revealed"));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [ref]);
}

export default function Packages() {
  const luxuryRef = useRef<HTMLDivElement>(null);
  const affordableRef = useRef<HTMLDivElement>(null);

  useRevealObserver(luxuryRef);
  useRevealObserver(affordableRef);

  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center gold-text uppercase tracking-widest text-sm font-semibold mb-4">
          Trusted by Pilgrims Across the USA
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Umrah Packages from USA — Best Deals for 2026
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Choose from our luxury and affordable Umrah packages designed for American Muslim families.
          All packages include visa processing, hotel stays in Makkah &amp; Madinah, transportation,
          buffet breakfast, and travel insurance.
        </p>

        {/* Luxury */}
        <h3 className="text-xl font-bold text-center mb-10">
          Luxury Umrah Packages from USA — 5-Star Hotels
        </h3>
        <div ref={luxuryRef} className="grid md:grid-cols-3 gap-8 mb-16">
          {luxuryPackages.map((pkg, i) => (
            <PackageCard
              key={`luxury-${pkg.nights}`}
              title={`Luxury Umrah Package from USA (${pkg.nights} Nights)`}
              hotel={pkg.hotel}
              imgIndex={i}
              delay={i * 150}
            />
          ))}
        </div>

        {/* Affordable */}
        <h3 className="text-xl font-bold text-center gold-text mb-10">
          Affordable Umrah Packages from USA — 4-Star Hotels
        </h3>
        <div ref={affordableRef} className="grid md:grid-cols-3 gap-8">
          {affordablePackages.map((pkg, i) => (
            <PackageCard
              key={`affordable-${pkg.nights}`}
              title={`Affordable Umrah Package from USA (${pkg.nights} Nights)`}
              hotel={pkg.hotel}
              imgIndex={i}
              delay={i * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
