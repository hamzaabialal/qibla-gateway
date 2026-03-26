"use client";
import { useEffect, useRef } from "react";

const destinations = [
  {
    name: "Istanbul, Turkey",
    price: "Starting From $325 Per Person",
    dark: false,
    emoji: "\uD83D\uDD4C",
    desc: "Explore the rich Islamic heritage of Istanbul with halal-friendly hotels and guided tours of historic mosques.",
  },
  {
    name: "Dubai, UAE",
    price: "Starting From $470 Per Person",
    dark: true,
    emoji: "\uD83C\uDFD9\uFE0F",
    desc: "Experience luxury halal travel in Dubai with world-class amenities, halal dining, and stunning architecture.",
  },
  {
    name: "Malaysia",
    price: "Starting From $375 Per Person",
    dark: false,
    emoji: "\uD83C\uDF06",
    desc: "Discover Malaysia's vibrant Muslim culture, halal street food, and beautiful Islamic landmarks.",
  },
];

export default function HalalDestinations() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = gridRef.current;
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
  }, []);

  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="gold-text font-semibold italic mb-2">Qibla Gateway</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Halal Travel Destinations from USA
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Beyond Umrah, Qibla Gateway offers halal-friendly travel packages to
          top Muslim destinations worldwide. All trips include halal
          accommodations, dining, and guided tours.
        </p>
        <div ref={gridRef} className="grid md:grid-cols-3 gap-8">
          {destinations.map((dest, i) => (
            <div
              key={dest.name}
              className={`reveal-card destination-card rounded-2xl p-8 text-center shadow-md ${
                dest.dark ? "bg-brand-dark" : "bg-[#F5F0E8]"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div
                className="w-40 h-40 mx-auto rounded-full bg-sky-200 flex items-center justify-center mb-6 text-6xl overflow-hidden"
                role="img"
                aria-label={`${dest.name} halal travel destination`}
              >
                <span>{dest.emoji}</span>
              </div>
              <h3
                className={`text-xl font-bold mb-2 ${
                  dest.dark ? "text-white" : "text-gray-800"
                }`}
              >
                {dest.name}
              </h3>
              <p
                className={`text-sm mb-4 ${
                  dest.dark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {dest.desc}
              </p>
              <p
                className={`text-sm font-semibold mb-6 ${
                  dest.dark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {dest.price}
              </p>
              <a
                href="#contact"
                className={`inline-block px-8 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ease-in-out hover:scale-105 ${
                  dest.dark
                    ? "bg-white text-brand-dark hover:bg-gray-100 hover:shadow-lg"
                    : "bg-brand-dark text-white hover:bg-brand-brown hover:shadow-lg"
                }`}
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
