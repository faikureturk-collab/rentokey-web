import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import FeatureGrid from "@/components/home/FeatureGrid";
import ProductShowcase from "@/components/home/ProductShowcase";
import HowItWorks from "@/components/home/HowItWorks";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/home/FaqSection";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <FeatureGrid />
      <ProductShowcase />
      <HowItWorks />
      <PricingSection />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
