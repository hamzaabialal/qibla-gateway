const steps = [
  {
    num: "01",
    title: "Inquiry and Consultation",
    desc: "Begin your Umrah journey with confidence. Contact our expert travel consultants at +1 (916) 299-3388 or fill out our online form for a free, personalized consultation. We'll guide you through all available Umrah packages from the USA and help you choose the perfect option for your family.",
  },
  {
    num: "02",
    title: "Documentation Submission",
    desc: "Once you've selected your Umrah package, submit the required documents including passport copies and identification. Our experienced team handles all Umrah visa processing and ensures everything meets Saudi Arabia's travel requirements — hassle-free for you.",
  },
  {
    num: "03",
    title: "Payment and Confirmation",
    desc: "Secure your Umrah booking with our seamless and secure payment process. Upon confirmation, you'll receive your full itinerary with hotel details in Makkah and Madinah, flight information, transportation schedule, and essential travel guidelines.",
  },
  {
    num: "04",
    title: "Perform Your Sacred Umrah",
    desc: "With all arrangements in place, focus on what truly matters — your spiritual experience in the Holy Cities. From airport pickup to hotel check-in, guided Ziyarat tours, and 24/7 on-ground support, Qibla Gateway is with you every step of the way.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        {/* Left */}
        <div>
          <p className="gold-text uppercase tracking-widest text-sm font-semibold mb-4">
            How It Works
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold leading-tight mb-4">
            Book Your Umrah Package from USA in 4 Simple Steps
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            At Qibla Gateway, we&apos;ve made booking your Umrah from the USA as
            simple as possible. Whether you&apos;re traveling from Houston, Chicago,
            New York, or any other US city, our streamlined process ensures a
            smooth journey from start to finish.
          </p>
          <div className="rounded-2xl overflow-hidden mb-6">
            <img
              src="https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=400&q=70&fm=webp"
              loading="lazy"
              decoding="async"
              alt="Muslim pilgrims performing Umrah at Masjid al-Haram in Makkah"
              width={400}
              height={320}
              className="w-full h-80 object-cover"
            />
          </div>
          <div className="bg-[#F5F0E8] rounded-xl p-4 inline-flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <svg className="w-6 h-6 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <span className="font-semibold text-brand-dark">A Trusted Name in Umrah Travel from USA</span>
          </div>
          <div className="flex items-center gap-1 mt-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <span key={s} className="text-yellow-500 text-xl">&#9733;</span>
            ))}
            <span className="ml-2 text-sm font-medium text-gray-600 italic">
              Your Spiritual Voyage Awaits — Book Your Umrah with Confidence.
            </span>
          </div>
        </div>

        {/* Right - Steps */}
        <div className="space-y-8">
          {steps.map((step, i) => (
            <div key={step.num} className={`${i > 0 ? "border-t border-gray-200 pt-8" : ""}`}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
                <span className="text-6xl font-bold text-gray-200 flex-shrink-0">
                  {step.num}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
