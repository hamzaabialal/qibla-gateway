import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact Qibla Gateway | Book Your Umrah Package from USA",
  description:
    "Contact Qibla Gateway to book your Umrah package from USA. Call +1 (916) 299-3388, email info@qiblagateway.com, or fill out our online form for a free quote.",
  alternates: { canonical: "https://qiblagateway.com/contact" },
  openGraph: {
    title: "Contact Qibla Gateway | Book Umrah from USA",
    description: "Get in touch for a free Umrah consultation. Call, email, or WhatsApp us today.",
    url: "https://qiblagateway.com/contact",
  },
};

export default function ContactPage() {
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
              Get In Touch
            </p>
            <h1 className="font-playfair text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              Contact Qibla Gateway
            </h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Ready to book your Umrah or have questions? Reach out to us — our team
              is here to help you plan a spiritually fulfilling pilgrimage from the USA.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-10 sm:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="tel:+19162993388"
              className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition group"
            >
              <div className="w-14 h-14 rounded-full bg-brand-dark flex items-center justify-center mb-4 group-hover:bg-brand-gold transition">
                <FaPhone className="text-white" size={20} />
              </div>
              <h3 className="font-bold mb-1">Call Us</h3>
              <p className="text-gray-500 text-sm">+1 (916) 299-3388</p>
            </a>

            <a
              href="mailto:info@qiblagateway.com"
              className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition group"
            >
              <div className="w-14 h-14 rounded-full bg-brand-dark flex items-center justify-center mb-4 group-hover:bg-brand-gold transition">
                <FaEnvelope className="text-white" size={20} />
              </div>
              <h3 className="font-bold mb-1">Email Us</h3>
              <p className="text-gray-500 text-sm">info@qiblagateway.com</p>
            </a>

            <a
              href="https://wa.me/19162993388"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition group"
            >
              <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center mb-4 group-hover:bg-green-600 transition">
                <FaWhatsapp className="text-white" size={22} />
              </div>
              <h3 className="font-bold mb-1">WhatsApp</h3>
              <p className="text-gray-500 text-sm">+1 (916) 299-3388</p>
            </a>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50">
              <div className="w-14 h-14 rounded-full bg-brand-dark flex items-center justify-center mb-4">
                <FaClock className="text-white" size={20} />
              </div>
              <h3 className="font-bold mb-1">Working Hours</h3>
              <p className="text-gray-500 text-sm">Mon — Sun: 9AM — 6PM</p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactForm />

        {/* Location */}
        <section className="py-10 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaMapMarkerAlt className="text-brand-gold" size={24} />
              <h2 className="text-2xl sm:text-3xl font-bold">Our Location</h2>
            </div>
            <p className="text-gray-600 mb-2">Sacramento, California, USA</p>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Qibla Gateway serves Muslim pilgrims from all major US cities including
              Houston, Chicago, New York, Dallas, Los Angeles, and beyond.
              We arrange everything remotely — no need to visit our office.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
