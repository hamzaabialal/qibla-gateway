"use client";
import { useState, useEffect } from "react";
import { FaPhone, FaSearch, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Packages", href: "/packages" },
  { label: "About Us", href: "/about" },
  { label: "Destinations", href: "/destinations" },
  { label: "Resources", href: "/resources" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`brown-bg sticky top-0 z-50 shadow-lg transition-all duration-300 ${
        scrolled ? "header-collapsed" : ""
      }`}
    >
      <nav
        aria-label="Main navigation"
        className={`max-w-7xl mx-auto flex items-center justify-between px-4 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <a href="/" aria-label="Qibla Gateway - Home">
            <img
              src="https://qiblagateway.com/wp-content/uploads/2025/05/1-1.png"
              alt="Qibla Gateway - Trusted Umrah Travel Agency from USA"
              className={`w-auto object-contain transition-all duration-300 ${
                scrolled ? "h-10" : "h-14"
              }`}
              width={160}
              height={56}
            />
          </a>
          <div className="border-l border-gray-600 h-12 mx-4 hidden lg:block" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white hover:text-brand-gold transition font-medium text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Phone & Icons */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+19162993388"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold transition"
              aria-label="Call Qibla Gateway"
            >
              <FaPhone className="text-white" />
            </a>
            <div>
              <p className="text-white text-xs">Book With Us!</p>
              <a href="tel:+19162993388" className="text-white font-bold text-sm hover:text-brand-gold transition">
                +1 (916) 299-3388
              </a>
            </div>
          </div>
          <button
            className="text-white hover:text-brand-gold transition hidden lg:block"
            aria-label="Search"
          >
            <FaSearch size={18} />
          </button>
          <button
            className="text-white hover:text-brand-gold transition lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-brand-dark border-t border-gray-700 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-3 text-white hover:text-brand-gold transition border-b border-gray-700 last:border-0"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3 mt-4">
            <FaPhone className="text-brand-gold" />
            <a href="tel:+19162993388" className="text-white font-bold">+1 (916) 299-3388</a>
          </div>
        </div>
      )}
    </header>
  );
}
