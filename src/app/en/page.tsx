import StructuredData from "@/components/StructuredData";
import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import ProductOverviewSection from "@/components/home/ProductOverviewSection";
import FocusSection from "@/components/home/FocusSection";
import PilotSection from "@/components/home/PilotSection";
import HowItWorks from "@/components/home/HowItWorks";
import PricingSection from "@/components/PricingSection";
import HomeTrustSection from "@/components/home/HomeTrustSection";
import AddonModulesSection from "@/components/home/AddonModulesSection";
import FaqSection from "@/components/home/FaqSection";
import IletisimSection from "@/components/home/IletisimSection";
import { createPageMetadata } from "@/lib/seo";
import { englishHomeStructuredData } from "@/lib/structured-data";

export const metadata = createPageMetadata({
  title: "Car Rental & Fleet Management Software | Rent Okey",
  description: "Manage reservations, fleet, handovers, returns, payments and operational risks with RentOkey. English support and a 21-day free trial.",
  path: "/en",
});

export default function EnglishHome() {
  return (
    <>
      <StructuredData data={englishHomeStructuredData} />
      <Hero locale="en" />
      <StatsBar locale="en" />
      <ProductOverviewSection locale="en" />
      <FocusSection locale="en" />
      <PilotSection locale="en" />
      <HowItWorks locale="en" />
      <PricingSection id="pricing" locale="en" />
      <AddonModulesSection locale="en" />
      <HomeTrustSection locale="en" />
      <FaqSection locale="en" />
      <IletisimSection locale="en" />
    </>
  );
}
