import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Packages from "@/components/Packages";
import Footer from "@/components/Footer";
import { FaArrowRight } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Umrah Packages from USA 2026 | Luxury & Affordable — Qibla Gateway",
  description:
    "Browse affordable & luxury Umrah packages from USA. 5-star and 4-star hotels in Makkah & Madinah, visa, transportation & insurance included. 5, 7, and 10-night options.",
  alternates: { canonical: "https://qiblagateway.com/packages" },
  openGraph: {
    title: "Umrah Packages from USA 2026 | Qibla Gateway",
    description: "Luxury & affordable Umrah packages with 5-star hotels, visa, transport included.",
    url: "https://qiblagateway.com/packages",
  },
};

export default function PackagesPage() {
  return (
    <div className="overflow-x-hidden">
      <TopBar />
      <Header />
      <main>
        {/* Hero */}
        <section
          className="relative py-12 sm:py-16 md:py-24 text-center text-white"
          style={{
            backgroundImage:
              "linear-gradient(rgba(44, 24, 16, 0.85), rgba(44, 24, 16, 0.85)), url('https://images.unsplash.com/photo-1564769625905-50e93615e769?w=1920&q=75&fm=webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-4xl mx-auto px-4">
            <p className="gold-text uppercase tracking-widest text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              Trusted by Pilgrims Across the USA
            </p>
            <h1 className="font-playfair text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              Umrah Packages from USA — 2026
            </h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Choose from our luxury 5-star and affordable 4-star Umrah packages. All include
              visa processing, hotel stays in Makkah &amp; Madinah, transportation, breakfast, and insurance.
            </p>
          </div>
        </section>

        {/* Packages Component */}
        <Packages />

        {/* CTA */}
        <section className="py-10 sm:py-16 bg-brand-dark text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Need Help Choosing a Package?
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
              Our Umrah travel experts are ready to help you find the perfect package
              for your family. Get a free personalized consultation today.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 btn-gold rounded-md text-sm sm:text-base"
            >
              Get a Free Quote <FaArrowRight />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
