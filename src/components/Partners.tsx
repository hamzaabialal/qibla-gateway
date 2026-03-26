"use client";

function LufthansaLogo() {
  return (
    <div className="flex items-center gap-3">
      <svg viewBox="0 0 50 50" className="w-12 h-12" fill="none">
        <circle cx="25" cy="25" r="23" stroke="#05164D" strokeWidth="2" fill="none" />
        <path d="M25 8 C15 18, 12 28, 25 42 C38 28, 35 18, 25 8Z" fill="#05164D" />
        <path d="M14 22 Q25 18 36 22" stroke="white" strokeWidth="1.5" fill="none" />
        <path d="M16 28 Q25 24 34 28" stroke="white" strokeWidth="1.5" fill="none" />
      </svg>
      <span className="text-3xl font-bold text-[#05164D] tracking-tight">Lufthansa</span>
    </div>
  );
}

function AirFranceLogo() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-2xl font-bold tracking-wider" style={{ color: '#002157' }}>
        AIR<span className="text-[#E2001A]">FRANCE</span>
      </span>
      <svg viewBox="0 0 30 30" className="w-7 h-7" fill="none">
        <path d="M5 25 L15 5 L18 15 L28 12" stroke="#E2001A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function RoyalJordanianLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="text-center">
        <p className="text-[10px] text-[#8B6914] font-semibold" style={{ fontFamily: 'serif' }}>الملكيّة الأردنيّة</p>
        <span className="text-lg font-bold text-[#8B6914] tracking-wide">ROYAL JORDANIAN</span>
      </div>
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="#8B6914">
        <circle cx="20" cy="18" r="8" fill="#8B6914" />
        <path d="M10 18 Q12 8 20 6 Q28 8 30 18" fill="#8B6914" />
        <path d="M8 20 L14 18 L20 22 L26 18 L32 20 L28 24 L20 28 L12 24Z" fill="#8B6914" />
        <circle cx="20" cy="15" r="3" fill="#C4A24E" />
      </svg>
    </div>
  );
}

function GulfAirLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
        <path d="M5 30 Q10 10 30 8 L35 12 Q15 15 10 32Z" fill="#8B6914" />
        <path d="M30 8 L38 6 L35 12Z" fill="#C4A24E" />
      </svg>
      <div>
        <p className="text-[10px] text-[#8B6914]" style={{ fontFamily: 'serif' }}>طيران الخليج</p>
        <span className="text-xl font-bold text-[#8B6914] tracking-wide">GULF AIR</span>
      </div>
    </div>
  );
}

function QatarAirwaysLogo() {
  return (
    <div className="flex items-center gap-3">
      <div>
        <span className="text-2xl font-bold text-[#5C0632] tracking-wide">QATAR</span>
        <p className="text-xs text-[#5C0632] tracking-widest">AIRWAYS</p>
        <p className="text-[9px] text-[#5C0632]" style={{ fontFamily: 'serif' }}>القطريّة</p>
      </div>
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
        <circle cx="20" cy="20" r="16" fill="none" stroke="#5C0632" strokeWidth="1" />
        <path d="M8 20 Q12 8 24 6 L30 10 Q18 12 12 24Z" fill="#5C0632" />
        <path d="M24 6 L34 4 L30 10Z" fill="#5C0632" />
        <path d="M14 28 Q16 20 28 14 L32 18 Q20 22 16 32Z" fill="#5C0632" opacity="0.4" />
      </svg>
    </div>
  );
}

function TurkishAirlinesLogo() {
  return (
    <div className="flex items-center gap-3">
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
        <circle cx="20" cy="20" r="16" fill="#E30A17" />
        <path d="M12 20 Q16 12 24 10 L28 14 Q20 16 16 24Z" fill="white" />
        <path d="M24 10 L32 8 L28 14Z" fill="white" />
      </svg>
      <div>
        <span className="text-xl font-bold text-[#063048] leading-none">TURKISH</span>
        <p className="text-lg font-bold text-[#063048] leading-none">AIRLINES</p>
      </div>
    </div>
  );
}

function EgyptairLogo() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-2xl font-bold italic text-[#063048] tracking-wide"
        style={{ fontFamily: 'Georgia, serif' }}>
        EGYPTAIR
      </span>
      <svg viewBox="0 0 35 35" className="w-8 h-8" fill="none">
        <path d="M5 28 Q8 12 25 5 L30 8 Q13 14 8 30Z" fill="#063048" />
        <path d="M25 5 L33 3 L30 8Z" fill="#063048" />
        <circle cx="20" cy="20" r="2" fill="#063048" />
      </svg>
    </div>
  );
}

const logos = [
  <LufthansaLogo key="l" />,
  <AirFranceLogo key="af" />,
  <RoyalJordanianLogo key="rj" />,
  <GulfAirLogo key="ga" />,
  <QatarAirwaysLogo key="qa" />,
  <TurkishAirlinesLogo key="ta" />,
  <EgyptairLogo key="ea" />,
];

export default function Partners() {
  return (
    <section className="py-16 bg-[#f7f7f7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-14 italic text-gray-800">
          Our Trusted Partners
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f7f7f7] to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f7f7f7] to-transparent z-10 pointer-events-none" />

        <div className="marquee-track" aria-hidden="false">
          {/* First set */}
          {logos.map((Logo, i) => (
            <div
              key={`a-${i}`}
              className="flex-shrink-0 flex items-center justify-center px-12 h-24"
            >
              {Logo}
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {logos.map((Logo, i) => (
            <div
              key={`b-${i}`}
              className="flex-shrink-0 flex items-center justify-center px-12 h-24"
              aria-hidden="true"
            >
              {Logo}
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-10">
        {logos.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-colors ${i === 0 ? "bg-brand-dark" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </section>
  );
}
