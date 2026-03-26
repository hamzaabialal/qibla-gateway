import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="bg-brand-dark text-white py-2 px-4 text-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="#packages" className="hover:text-brand-gold transition gold-text font-medium">
            Umrah Package
          </a>
          <span className="text-gray-500">|</span>
          <a href="#contact" className="hover:text-brand-gold transition gold-text font-medium">
            Customer Service
          </a>
        </div>
        <div className="hidden md:block">
          <span className="gold-text font-medium">
            Secure and Reliable Umrah Experience.{" "}
            <a href="#contact" className="underline font-semibold hover:text-white transition">
              Secure Your Seat Now
            </a>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Facebook"
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold transition"
          >
            <FaFacebookF size={14} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on LinkedIn"
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold transition"
          >
            <FaLinkedinIn size={14} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold transition"
          >
            <FaInstagram size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
