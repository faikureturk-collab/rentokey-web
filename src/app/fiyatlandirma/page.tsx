import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PricingSection from "@/components/PricingSection";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBanner from "@/components/CtaBanner";
import { faqItems } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Fiyatlandırma",
  description:
    "Küçük ekiplerden büyük filolara kadar her ölçekte işletme için uygun Rent Okey paketlerini inceleyin.",
};

export default function FiyatlandirmaPage() {
  return (
    <>
      <PageHero
        eyebrow="Fiyatlandırma"
        title="İşletmenize uygun paketi seçin"
        description="Tüm paketlerde 1 gün içinde kurulum, kredi kartı gerektirmeyen ücretsiz deneme."
      />

      <PricingSection showHeading={false} />

      <section className="container-page py-16 sm:py-20">
        <h2 className="text-center text-2xl font-extrabold text-brand-navy sm:text-3xl">
          Fiyatlandırma hakkında sorularınız mı var?
        </h2>
        <div className="mx-auto mt-10 max-w-3xl">
          <FaqAccordion items={faqItems} columns={false} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
