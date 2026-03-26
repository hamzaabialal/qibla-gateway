"use client";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    passengers: "",
    departureDate: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will get back to you soon.");
  };

  return (
    <section
      id="contact"
      className="relative py-20"
      aria-label="Contact Qibla Gateway for Umrah Packages"
      style={{
        backgroundImage:
          "linear-gradient(rgba(44, 24, 16, 0.8), rgba(44, 24, 16, 0.8)), url('https://images.unsplash.com/photo-1564769625905-50e93615e769?w=1280&q=70&fm=webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="text-white">
          <p className="gold-text uppercase tracking-widest text-sm font-semibold mb-4">
            Book Your Umrah Package from USA Today
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Ready to Begin Your Umrah Journey?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Fill out the form to get personalized assistance, detailed package
            pricing, or to reserve your spot today. Whether you&apos;re looking for
            an affordable or luxury Umrah package from the USA, our dedicated
            team is here to help.
          </p>
          <p className="text-gray-300 leading-relaxed mb-8">
            We serve pilgrims from all major US cities including Houston,
            Chicago, New York, Dallas, Los Angeles, and Sacramento. Call us
            directly at{" "}
            <a href="tel:+19162993388" className="text-brand-gold font-semibold hover:underline">
              +1 (916) 299-3388
            </a>{" "}
            or email{" "}
            <a href="mailto:info@qiblagateway.com" className="text-brand-gold font-semibold hover:underline">
              info@qiblagateway.com
            </a>
            .
          </p>
          <a
            href="/packages"
            className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-brand-brown transition font-semibold"
          >
            View Our Umrah Packages <FaArrowRight />
          </a>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white rounded-lg p-8 shadow-xl">
          <h3 className="text-2xl font-bold mb-2">
            Get a Free Umrah Quote
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            Fill in your details and we&apos;ll send you a customized Umrah package quote within 24 hours.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                required
                aria-label="First Name"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-brand-gold"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                aria-label="Last Name"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-brand-gold"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              required
              aria-label="Email Address"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-brand-gold"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Number of Passengers"
              min="1"
              aria-label="Number of Passengers"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-brand-gold"
              value={formData.passengers}
              onChange={(e) =>
                setFormData({ ...formData, passengers: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Preferred Departure Date"
              aria-label="Preferred Departure Date"
              onFocus={(e) => (e.target.type = "date")}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-brand-gold"
              value={formData.departureDate}
              onChange={(e) =>
                setFormData({ ...formData, departureDate: e.target.value })
              }
            />
            <textarea
              placeholder="Tell us about your Umrah travel plans..."
              rows={4}
              aria-label="Message"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-brand-gold resize-none"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            <button
              type="submit"
              className="w-full bg-brand-dark text-white py-4 rounded-md font-semibold hover:bg-brand-brown transition text-lg"
            >
              Request My Free Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
