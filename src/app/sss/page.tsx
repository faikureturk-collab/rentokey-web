import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBanner from "@/components/CtaBanner";
import { faqItems } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular",
  description: "Rent Okey hakkında en çok merak edilen soruların cevapları.",
};

export default function SssPage() {
  return (
    <>
      <PageHero eyebrow="SSS" title="Sık sorulan sorular" description="Aradığınız cevabı bulamadıysanız bizimle iletişime geçin." />

      <section className="container-page py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <FaqAccordion items={faqItems} columns={false} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
