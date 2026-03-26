"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How much do Umrah packages from USA cost?",
    answer:
      "Qibla Gateway offers affordable Umrah packages from the USA starting with comfortable 4-star hotel accommodations, as well as luxury packages with 5-star hotels in Makkah and Madinah. All packages include visa processing, ground transportation, buffet breakfast, guided sightseeing, and comprehensive travel insurance. Contact us at +1 (916) 299-3388 for the latest pricing.",
  },
  {
    question: "What is included in Qibla Gateway's Umrah packages?",
    answer:
      "Every Umrah package includes: round-trip ground transportation, hotel accommodation in Makkah and Madinah (4-star or 5-star depending on package), daily buffet breakfast, Umrah visa processing, travel insurance, and guided holy sightseeing tours of significant Islamic sites. We offer packages in 5-night, 7-night, and 10-night durations to suit your schedule.",
  },
  {
    question: "Can I book an Umrah package from Houston, Chicago, or New York?",
    answer:
      "Yes! Qibla Gateway proudly serves pilgrims from all major US cities including Houston, Chicago, New York, Dallas, Los Angeles, Sacramento, and beyond. We arrange flights from your nearest international airport and handle all travel logistics so you can focus on your spiritual journey.",
  },
  {
    question: "Is Qibla Gateway a licensed and trusted Umrah travel agency?",
    answer:
      "Absolutely. Qibla Gateway is a fully licensed and legal Umrah travel agency based in Sacramento, California, USA. We are trusted by Muslim families across America and maintain excellent customer reviews for our reliable, transparent, and caring service throughout the entire Umrah process.",
  },
  {
    question: "How do I book an Umrah package with Qibla Gateway?",
    answer:
      "Booking is simple: 1) Contact us via phone at +1 (916) 299-3388, WhatsApp, or fill out our online form for a free consultation. 2) Choose your preferred package and submit your passport documents. 3) Complete payment and receive your confirmed itinerary with hotel and flight details. 4) Embark on your sacred pilgrimage with full support from our team.",
  },
  {
    question: "Do you offer Ramadan Umrah packages from USA?",
    answer:
      "Yes, Qibla Gateway offers special Ramadan Umrah packages from the USA. Performing Umrah during Ramadan holds immense spiritual significance — the Prophet (PBUH) said that Umrah in Ramadan is equal in reward to Hajj. Our Ramadan packages include premium hotel stays close to Masjid al-Haram, ensuring you can maximize your worship during this blessed month.",
  },
  {
    question: "What is the difference between luxury and affordable Umrah packages?",
    answer:
      "Our luxury Umrah packages feature 5-star hotels in Makkah and Madinah located within walking distance of the Haram, with premium room amenities and services. Our affordable packages offer comfortable 4-star hotel accommodations that provide excellent value without compromising on essential services. Both tiers include visa processing, transportation, buffet breakfast, sightseeing, and insurance.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-gray-50" id="faq">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-center gold-text uppercase tracking-widest text-sm font-semibold mb-4">
          Frequently Asked Questions
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Common Questions About Umrah Packages from USA
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Everything you need to know about booking your Umrah with Qibla
          Gateway. Can&apos;t find your answer?{" "}
          <a href="#contact" className="text-brand-gold font-semibold hover:underline">
            Contact us directly
          </a>
          .
        </p>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <h3 className="font-bold text-lg pr-4">{faq.question}</h3>
                <FaChevronDown
                  className={`text-brand-gold flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  size={16}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className="px-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
