import StructuredData from "@/components/StructuredData";
import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import UrunSection from "@/components/home/UrunSection";
import FeatureGrid from "@/components/home/FeatureGrid";
import FocusSection from "@/components/home/FocusSection";
import PilotSection from "@/components/home/PilotSection";
import ReservationFlowSection from "@/components/home/ReservationFlowSection";
import HowItWorks from "@/components/home/HowItWorks";
import PricingSection from "@/components/PricingSection";
import HakkimizdaSection from "@/components/home/HakkimizdaSection";
import AddonModulesSection from "@/components/home/AddonModulesSection";
import FaqSection from "@/components/home/FaqSection";
import IletisimSection from "@/components/home/IletisimSection";
import CtaBanner from "@/components/CtaBanner";
import { createPageMetadata, SITE_URL } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Car Rental & Fleet Management Software | RentOkey",
  description: "Manage reservations, fleet, handovers, returns, payments and operational risks with RentOkey. English support and a 21-day free trial.",
  path: "/en",
});

export default function EnglishHome() {
  return (
    <>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "RentOkey",
        url: `${SITE_URL}/en`,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: "Car rental operations and fleet management software for businesses in Türkiye and Northern Cyprus.",
      }} />
      <Hero locale="en" />
      <StatsBar locale="en" />
      <UrunSection locale="en" />
      <FeatureGrid locale="en" />
      <FocusSection locale="en" />
      <PilotSection locale="en" />
      <ReservationFlowSection locale="en" />
      <HowItWorks locale="en" />
      <PricingSection id="pricing" locale="en" />
      <HakkimizdaSection locale="en" />
      <AddonModulesSection locale="en" />
      <FaqSection locale="en" />
      <IletisimSection locale="en" />
      <CtaBanner locale="en" />
    </>
  );
}
