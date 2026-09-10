import StructuredData from "@/components/StructuredData";
import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import ProductOverviewSection from "@/components/home/ProductOverviewSection";
import FocusSection from "@/components/home/FocusSection";
import PilotSection from "@/components/home/PilotSection";
import AddonModulesSection from "@/components/home/AddonModulesSection";
import HowItWorks from "@/components/home/HowItWorks";
import PricingSection from "@/components/PricingSection";
import HomeTrustSection from "@/components/home/HomeTrustSection";
import FaqSection from "@/components/home/FaqSection";
import IletisimSection from "@/components/home/IletisimSection";
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
      <ProductOverviewSection />
      <FocusSection />
      <PilotSection />
      <HowItWorks />
      <PricingSection id="fiyatlandirma" />
      <AddonModulesSection />
      <HomeTrustSection />
      <FaqSection />
      <IletisimSection />
    </>
  );
}
