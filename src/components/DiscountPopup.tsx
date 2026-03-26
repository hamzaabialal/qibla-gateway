"use client";
import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

export default function DiscountPopup() {
  const [show, setShow] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setShow(false);
      setClosing(false);
    }, 300);
  };

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center ${
        closing ? "opacity-0" : "popup-backdrop"
      }`}
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        transition: closing ? "opacity 0.3s ease-out" : undefined,
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Special discount offer for Umrah packages"
    >
      <div
        className={`relative bg-white rounded-xl shadow-2xl max-w-2xl w-[92%] mx-4 flex overflow-hidden ${
          closing ? "opacity-0 scale-95" : "popup-modal"
        }`}
        style={{
          transition: closing
            ? "opacity 0.3s ease-out, transform 0.3s ease-out"
            : undefined,
        }}
      >
        {/* Left Image */}
        <div className="hidden md:block w-1/2 relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1564769625905-50e93615e769?w=400&q=70&fm=webp"
            loading="eager"
            decoding="async"
            alt="Holy Kaaba in Makkah — Umrah packages from USA by Qibla Gateway"
            width={400}
            height={500}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 p-8 relative">
          <button
            onClick={handleClose}
            aria-label="Close discount popup"
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 hover:rotate-90 flex items-center justify-center transition-all duration-300"
          >
            <FaTimes size={14} className="text-gray-600" />
          </button>

          <h3 className="font-playfair text-2xl font-bold mb-2 text-gray-800">
            Get Special Umrah Discounts
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            Exclusive deals on Umrah packages from the USA. Fill in your details and we&apos;ll send you our best offers.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! We will send you exclusive Umrah deals.");
              handleClose();
            }}
            className="space-y-3"
          >
            <input
              type="text"
              placeholder="Full Name"
              required
              aria-label="Full Name"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-all duration-200"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              aria-label="Email Address"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-all duration-200"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              aria-label="Phone Number"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-all duration-200"
            />
            <textarea
              placeholder="Tell us about your Umrah plans..."
              rows={3}
              aria-label="Message about your Umrah plans"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-all duration-200 resize-none"
            />
            <button
              type="submit"
              className="w-full bg-brand-dark text-white py-3.5 rounded-md font-semibold text-base transition-all duration-300 ease-in-out hover:bg-brand-brown hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
            >
              Get My Exclusive Deal
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
