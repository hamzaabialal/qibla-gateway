"use client";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center text-center text-white"
      role="banner"
      aria-label="Umrah Packages from USA - Qibla Gateway Hero"
      style={{
        backgroundImage:
          "linear-gradient(rgba(44, 24, 16, 0.7), rgba(44, 24, 16, 0.7)), url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1920&q=75&fm=webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 py-20">
        <p className="hero-animate-subtitle gold-text uppercase tracking-[0.3em] text-sm font-semibold mb-6">
          Trusted Umrah Travel Agency in the USA
        </p>
        <h1 className="hero-animate-title font-playfair text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
          Umrah Packages from USA — Your Spiritual Journey Starts Here
        </h1>
        <p className="hero-animate-desc text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          Qibla Gateway offers affordable and luxury Umrah packages from the USA
          with 5-star hotels in Makkah &amp; Madinah, visa processing,
          transportation, and insurance. Serving Muslim families from Houston,
          Chicago, New York, Dallas, Los Angeles, and all across America.
        </p>
        <div className="hero-animate-cta flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/packages"
            className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 ease-in-out hover:bg-white hover:text-brand-brown hover:scale-105"
          >
            Explore Umrah Packages <FaArrowRight />
          </a>
          <a href="/contact" className="btn-gold rounded-md text-center">
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
