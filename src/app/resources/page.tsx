import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogListing from "@/components/BlogListing";
import { FaArrowRight } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Umrah Resources & Travel Guides | Blog — Qibla Gateway",
  description:
    "Explore Umrah travel guides, tips, packing lists, and spiritual preparation resources for pilgrims traveling from the USA. Expert advice from Qibla Gateway.",
  alternates: {
    canonical: "https://qiblagateway.com/resources",
  },
  openGraph: {
    title: "Umrah Resources & Travel Guides | Qibla Gateway",
    description:
      "Umrah travel guides, tips, and resources for American pilgrims. Expert advice from a trusted USA-based Umrah travel agency.",
    url: "https://qiblagateway.com/resources",
  },
};

export default function ResourcesPage() {
  return (
    <div className="overflow-x-hidden">
      <TopBar />
      <Header />

      <main>
        {/* Hero Banner */}
        <section
          className="relative py-12 sm:py-16 md:py-24 text-center text-white"
          style={{
            backgroundImage:
              "linear-gradient(rgba(44, 24, 16, 0.85), rgba(44, 24, 16, 0.85)), url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1920&q=75&fm=webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-4xl mx-auto px-4">
            <p className="gold-text uppercase tracking-widest text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              Qibla Gateway Blog
            </p>
            <h1 className="font-playfair text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              Umrah Resources &amp; Travel Guides
            </h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Expert guides, travel tips, and spiritual preparation resources
              for Muslim pilgrims traveling from the USA to Makkah &amp; Madinah.
            </p>
          </div>
        </section>

        {/* Interactive Blog Listing with Category Filter */}
        <BlogListing />

        {/* CTA Section */}
        <section className="py-10 sm:py-16 bg-brand-dark text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Ready to Book Your Umrah Package?
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
              Browse our affordable and luxury Umrah packages from the USA, or
              contact our team for a free personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a href="/#packages" className="btn-gold rounded-md text-center text-sm sm:text-base">
                View Umrah Packages
              </a>
              <a
                href="/#contact"
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
