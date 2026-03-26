import dynamic from "next/dynamic";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";

// Lazy-load below-fold sections — reduces initial JS bundle
const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: true });
const Packages = dynamic(() => import("@/components/Packages"), { ssr: true });
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"), { ssr: true });
const HalalDestinations = dynamic(() => import("@/components/HalalDestinations"), { ssr: true });
const HowItWorks = dynamic(() => import("@/components/HowItWorks"), { ssr: true });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: true });
const Reviews = dynamic(() => import("@/components/Reviews"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"), { ssr: false });
const DiscountPopup = dynamic(() => import("@/components/DiscountPopup"), { ssr: false });

export default function Home() {
  return (
    <main>
      <TopBar />
      <Header />
      <Hero />
      <Partners />
      <ContactForm />
      <Packages />
      <WhyChooseUs />
      <HalalDestinations />
      <HowItWorks />
      <FAQ />
      <Reviews />
      <Footer />
      <WhatsAppButton />
      <DiscountPopup />
    </main>
  );
}
