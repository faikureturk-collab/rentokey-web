import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import UrunSection from "@/components/home/UrunSection";
import FeatureGrid from "@/components/home/FeatureGrid";
import FocusSection from "@/components/home/FocusSection";
import ComingSoonSection from "@/components/home/ComingSoonSection";
import HowItWorks from "@/components/home/HowItWorks";
import PricingSection from "@/components/PricingSection";
import HakkimizdaSection from "@/components/home/HakkimizdaSection";
import FaqSection from "@/components/home/FaqSection";
import IletisimSection from "@/components/home/IletisimSection";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <UrunSection />
      <FeatureGrid />
      <FocusSection />
      <HowItWorks />
      <PricingSection id="fiyatlandirma" />
      <HakkimizdaSection />
      <ComingSoonSection />
      <FaqSection />
      <IletisimSection />
      <CtaBanner />
    </>
  );
}
