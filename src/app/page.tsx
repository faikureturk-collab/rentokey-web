import StructuredData from "@/components/StructuredData";
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
import { createPageMetadata, DEFAULT_DESCRIPTION } from "@/lib/seo";
import { homeStructuredData } from "@/lib/structured-data";

export const metadata = createPageMetadata({
  title: "Araç Kiralama Programı ve Filo Yönetimi | Rent Okey",
  description: DEFAULT_DESCRIPTION,
  path: "/",
});

export default function Home() {
  return (
    <>
      <StructuredData data={homeStructuredData} />
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
