import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import HalalDestinations from "@/components/HalalDestinations";
import Footer from "@/components/Footer";
import { FaArrowRight } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Halal Travel Destinations from USA | Istanbul, Dubai, Malaysia — Qibla Gateway",
  description:
    "Explore halal-friendly travel destinations from the USA. Book halal trips to Istanbul, Dubai, and Malaysia with Qibla Gateway — halal hotels, dining & guided tours.",
  alternates: { canonical: "https://qiblagateway.com/destinations" },
  openGraph: {
    title: "Halal Travel Destinations from USA | Qibla Gateway",
    description: "Halal-friendly travel packages to Istanbul, Dubai & Malaysia from the USA.",
    url: "https://qiblagateway.com/destinations",
  },
};

export default function DestinationsPage() {
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
              "linear-gradient(rgba(44, 24, 16, 0.85), rgba(44, 24, 16, 0.85)), url('https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=1920&q=75&fm=webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-4xl mx-auto px-4">
            <p className="gold-text uppercase tracking-widest text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              Beyond Umrah
            </p>
            <h1 className="font-playfair text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              Halal Travel Destinations from USA
            </h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Explore the world with halal-friendly travel packages. Halal hotels,
              dining, and guided tours to the most beautiful Muslim destinations.
            </p>
          </div>
        </section>

        {/* Destinations */}
        <HalalDestinations />

        {/* Extra Content */}
        <section className="py-10 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Why Choose Halal Travel with Qibla Gateway?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
              At Qibla Gateway, we understand that Muslim travelers need more than just a
              destination — they need halal accommodations, prayer-friendly schedules,
              and dining options that respect their faith. Every trip we plan ensures
              halal hotels, halal restaurants, and guided tours of Islamic heritage sites.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Whether you&apos;re looking for a family vacation to Istanbul&apos;s historic mosques,
              a luxury getaway in Dubai, or a cultural trip to Malaysia, our travel experts
              will craft the perfect halal-friendly itinerary for you.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 sm:py-16 bg-brand-dark text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Plan Your Halal Trip Today
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
              Contact us for a custom halal travel itinerary tailored to your
              family&apos;s needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a href="/packages" className="btn-gold rounded-md text-center text-sm sm:text-base">
                View Umrah Packages
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold hover:bg-white hover:text-brand-brown transition text-sm sm:text-base"
              >
                Contact Us <FaArrowRight />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
