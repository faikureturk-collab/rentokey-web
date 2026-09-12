import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AddonModulesSection from "@/components/home/AddonModulesSection";
import CtaBanner from "@/components/CtaBanner";
import FaqAccordion from "@/components/FaqAccordion";
import PricingSection from "@/components/PricingSection";
import StructuredData from "@/components/StructuredData";
import { faqGroups } from "@/lib/faq";
import { createPageMetadata } from "@/lib/seo";
import { pricingPageStructuredData } from "@/lib/structured-data";

export const metadata = createPageMetadata({
  title: "Araç Kiralama Programı Fiyatları",
  description:
    "Araç sayınıza göre hesaplanan aylık ücreti anında görün. Sabit paket yok, kurulum ücreti yok; 1–150 araç için şeffaf fiyatlandırma ve 21 gün ücretsiz deneme.",
  path: "/fiyatlandirma",
});

const pricingFaqs = faqGroups.find((group) => group.id === "deneme-paketler")?.items ?? [];

export default function FiyatlandirmaPage() {
  return (
    <>
      <StructuredData data={pricingPageStructuredData} />

      <div className="container-page pt-10">
        <nav aria-label="Site haritası" className="flex items-center gap-2 text-xs font-medium text-brand-navy/45">
          <Link href="/" className="hover:text-brand-green-dark">Ana sayfa</Link>
          <span aria-hidden>/</span>
          <span className="text-brand-navy/70">Fiyatlandırma</span>
        </nav>
      </div>

      <PricingSection
        title="Araç kiralama programı fiyatları"
        id="fiyatlandirma"
      />

      <AddonModulesSection context="pricing" />

      {pricingFaqs.length > 0 && (
        <section id="fiyat-sss" className="scroll-mt-24">
          <div className="container-page py-16 sm:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-navy/35">Fiyatlandırma SSS</p>
              <h2 className="mt-2 text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] text-brand-navy sm:text-4xl">
                Ödeme ve deneme hakkında sık sorulanlar
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-brand-navy/55">
                Araç sayınız değiştiğinde ne olur, deneme sonunda ödeme alınır mı, kullanıcı ve şube sınırı var mı —
                en çok sorulanların yanıtları burada.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-4xl">
              <FaqAccordion items={pricingFaqs} columns={false} />
            </div>
            <p className="mt-8 text-center text-sm text-brand-navy/50">
              Aradığınızı bulamadınız mı?{" "}
              <Link href="/#sss" className="inline-flex items-center gap-1 font-semibold text-brand-green-dark hover:text-brand-navy">
                Tüm soruları görün <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </p>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
