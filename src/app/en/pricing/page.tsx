import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CtaBanner from "@/components/CtaBanner";
import FaqAccordion from "@/components/FaqAccordion";
import PricingSection from "@/components/PricingSection";
import StructuredData from "@/components/StructuredData";
import { englishFaqGroups } from "@/lib/faq";
import { createPageMetadata } from "@/lib/seo";
import { englishPricingPageStructuredData } from "@/lib/structured-data";

export const metadata = createPageMetadata({
  title: "Car Rental Software Pricing",
  description:
    "See the monthly price calculated from your vehicle count. No fixed tiers, no setup fee: transparent pricing for 1–150 vehicles and a 21-day free trial.",
  path: "/en/pricing",
});

const pricingFaqs = englishFaqGroups.find((group) => group.id === "trial-plans")?.items ?? [];

export default function EnglishPricingPage() {
  return (
    <>
      <StructuredData data={englishPricingPageStructuredData} />

      <div className="container-page pt-10">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-brand-navy/45">
          <Link href="/en" className="hover:text-brand-green-dark">Home</Link>
          <span aria-hidden>/</span>
          <span className="text-brand-navy/70">Pricing</span>
        </nav>
      </div>

      <PricingSection
        title="Car rental software pricing"
        id="pricing"
        locale="en"
      />

      {pricingFaqs.length > 0 && (
        <section id="pricing-faq" className="scroll-mt-24">
          <div className="container-page py-16 sm:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-navy/35">Pricing FAQ</p>
              <h2 className="mt-2 text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] text-brand-navy sm:text-4xl">
                Common questions about billing and the trial
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-brand-navy/55">
                What happens when your vehicle count changes, whether you are charged after the trial, and how many
                users and branches you can add.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-4xl">
              <FaqAccordion items={pricingFaqs} columns={false} locale="en" />
            </div>
            <p className="mt-8 text-center text-sm text-brand-navy/50">
              Cannot find what you need?{" "}
              <Link href="/en#faq" className="inline-flex items-center gap-1 font-semibold text-brand-green-dark hover:text-brand-navy">
                See all questions <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </p>
          </div>
        </section>
      )}

      <CtaBanner locale="en" />
    </>
  );
}
