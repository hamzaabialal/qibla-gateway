import { FaCheckCircle, FaDollarSign, FaBriefcase, FaSmile } from "react-icons/fa";

const features = [
  { icon: FaCheckCircle, label: "100% Legal and Trusted", position: "top-8 left-8" },
  { icon: FaDollarSign, label: "Economical Price", position: "top-8 right-8" },
  { icon: FaBriefcase, label: "Top Notch Services", position: "bottom-8 left-8" },
  { icon: FaSmile, label: "Friendly Staff Service", position: "bottom-8 right-8" },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Image with features */}
        <div className="relative">
          <div className="relative bg-yellow-300 rounded-3xl p-8 flex items-center justify-center min-h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&q=70&fm=webp"
              loading="lazy"
              decoding="async"
              alt="Happy traveler with luggage ready for Umrah pilgrimage from USA"
              width={288}
              height={288}
              className="w-72 h-72 object-cover rounded-full mx-auto"
            />
            {features.map((f) => (
              <div
                key={f.label}
                className={`absolute ${f.position} bg-brand-dark text-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg`}
              >
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                  <f.icon className="text-white" size={20} />
                </div>
                <span className="font-semibold text-sm">{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Text */}
        <div>
          <p className="text-gray-500 uppercase tracking-widest text-sm mb-2">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose Qibla Gateway for Your Umrah from USA?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            At Qibla Gateway, we believe your spiritual journey should begin
            with ease and comfort. As a trusted Umrah travel agency based in
            Sacramento, California, we offer seamless Umrah travel services for
            Muslim families across the United States — from Houston and Chicago
            to New York, Dallas, and Los Angeles.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            From your doorstep to the sacred cities of Makkah and Madinah, we
            take care of everything — visa processing, 4-star and 5-star hotel
            accommodations, ground transportation, buffet meals, guided
            sightseeing, and comprehensive travel insurance. Our dedicated team
            ensures a worry-free, spiritually fulfilling Umrah experience so you
            can focus on what truly matters.
          </p>
          <ul className="space-y-2 mb-8 text-gray-600">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-brand-gold flex-shrink-0" />
              Licensed &amp; legal Umrah travel agency in the USA
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-brand-gold flex-shrink-0" />
              Affordable &amp; luxury packages with transparent pricing
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-brand-gold flex-shrink-0" />
              Serving pilgrims from all major US cities
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-brand-gold flex-shrink-0" />
              24/7 customer support before, during &amp; after your trip
            </li>
          </ul>
          <a href="/contact" className="btn-brown">
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
}
