import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Navaid Rafiq",
    initials: "N",
    date: "2025-08-10",
    color: "bg-green-500",
    title: "Great experience with Umrah package from USA",
    text: "Very good experience dealing with Mr Ali. He is very cooperative and friendly and spent too much time to bring multiple options on the table to match our requirements. Qibla Gateway made our Umrah journey from the USA completely stress-free.",
    stars: 5,
  },
  {
    name: "Fatima Mbodj",
    initials: "FM",
    date: "2025-07-21",
    color: "bg-teal-400",
    title: "Trustworthy Umrah travel agency in the USA",
    text: "I found the Qibla Gateway agency through a proposed ad on Instagram and was a bit skeptical at first due to online scams etc. I went ahead and contacted the team and was pleasantly surprised by their professionalism and transparent pricing for our Umrah package.",
    stars: 5,
  },
  {
    name: "Ayesha Siddiqua",
    initials: "AS",
    date: "2025-07-01",
    color: "bg-teal-400",
    title: "Best Umrah package experience for our family",
    text: "First and foremost, I would like to sincerely thank the entire Qibla Gateway team who guided us through every step with patience and clarity, and were always available to answer our questions. The hotels in Makkah and Madinah were excellent. Highly recommend for any USA-based family planning Umrah.",
    stars: 5,
  },
];

export default function Reviews() {
  return (
    <section className="py-20 bg-white" id="reviews">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center gold-text uppercase tracking-widest text-sm font-semibold mb-4">
          Customer Reviews
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          What Our Pilgrims Say About Their Umrah Experience
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Read real reviews from Muslim families across the USA who trusted
          Qibla Gateway for their sacred Umrah journey.
        </p>

        {/* Trustpilot-style header */}
        <div className="flex items-center gap-4 mb-10">
          <img
            src="https://qiblagateway.com/wp-content/uploads/2025/05/1-1.png"
            alt="Qibla Gateway Logo"
            className="h-14 w-auto object-contain"
            width={160}
            height={56}
            loading="lazy"
          />
          <div>
            <h3 className="text-2xl font-bold">Qibla Gateway</h3>
            <p className="text-sm text-gray-500">Trusted Umrah Travel Agency — Sacramento, CA</p>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-10">
          <span className="text-lg font-medium">4.1</span>
          <div className="flex">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="w-8 h-8 bg-green-500 flex items-center justify-center">
                <FaStar className="text-white" size={16} />
              </div>
            ))}
            <div className="w-8 h-8 bg-gray-300 flex items-center justify-center">
              <FaStar className="text-white" size={16} />
            </div>
          </div>
          <span className="text-gray-500 text-sm">Based on 5 Reviews</span>
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-full ${review.color} text-white flex items-center justify-center font-bold text-sm`}
                  aria-hidden="true"
                >
                  {review.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm">{review.name}</p>
                  <p className="text-gray-400 text-xs">{review.date}</p>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-4 mb-3">
                <div className="flex mb-3" aria-label={`${review.stars} out of 5 stars`}>
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 bg-green-500 flex items-center justify-center"
                    >
                      <FaStar className="text-white" size={12} />
                    </div>
                  ))}
                </div>
              </div>
              <h4 className="font-bold mb-2">{review.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {review.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
