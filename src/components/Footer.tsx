import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="brown-bg text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <a href="/" className="flex items-center gap-3 mb-4">
            <img
              src="https://qiblagateway.com/wp-content/uploads/2025/05/1-1.png"
              alt="Qibla Gateway Logo"
              className="h-14 w-auto object-contain"
              width={160}
              height={56}
              loading="lazy"
            />
          </a>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Your trusted partner for seamless Umrah experiences from the USA.
            Guiding hearts to the sacred cities of Makkah and Madinah with
            care, devotion, and professional service since day one.
          </p>
          <p className="text-gray-500 text-xs">
            Licensed Umrah travel agency serving pilgrims from Houston,
            Chicago, New York, Dallas, Los Angeles &amp; all US cities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { label: "Home", href: "/" },
              { label: "Umrah Packages", href: "/#packages" },
              { label: "About Us", href: "/#about" },
              { label: "Halal Destinations", href: "/#destinations" },
              { label: "Resources", href: "/resources" },
              { label: "FAQ", href: "/#faq" },
              { label: "Contact Us", href: "/#contact" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-brand-gold transition text-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Packages */}
        <div>
          <h4 className="font-bold text-lg mb-4">Our Umrah Packages</h4>
          <ul className="space-y-2">
            {[
              "Luxury Umrah — 10 Nights",
              "Luxury Umrah — 7 Nights",
              "Luxury Umrah — 5 Nights",
              "Affordable Umrah — 10 Nights",
              "Affordable Umrah — 7 Nights",
              "Affordable Umrah — 5 Nights",
            ].map((pkg) => (
              <li key={pkg}>
                <a
                  href="/#packages"
                  className="text-gray-400 hover:text-brand-gold transition text-sm"
                >
                  {pkg}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-lg mb-4">Contact Us</h4>
          <div className="space-y-3">
            <a href="tel:+19162993388" className="flex items-center gap-3 hover:text-brand-gold transition">
              <FaPhone className="text-brand-gold flex-shrink-0" />
              <span className="text-gray-400 text-sm">+1 (916) 299-3388</span>
            </a>
            <a href="mailto:info@qiblagateway.com" className="flex items-center gap-3 hover:text-brand-gold transition">
              <FaEnvelope className="text-brand-gold flex-shrink-0" />
              <span className="text-gray-400 text-sm">info@qiblagateway.com</span>
            </a>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-brand-gold flex-shrink-0 mt-1" />
              <span className="text-gray-400 text-sm">
                Sacramento, California, USA
              </span>
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Qibla Gateway on Facebook"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold transition"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Qibla Gateway on LinkedIn"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold transition"
            >
              <FaLinkedinIn size={14} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Qibla Gateway on Instagram"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold transition"
            >
              <FaInstagram size={14} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-700">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2026 Qibla Gateway. All Rights Reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Umrah Packages from USA | Affordable &amp; Luxury Umrah Travel | Hajj Services
          </p>
        </div>
      </div>
    </footer>
  );
}
