import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Button from "@/components/Button";
import CtaBanner from "@/components/CtaBanner";
import { allFeatures } from "@/lib/features";

export const metadata: Metadata = {
  title: "Özellikler",
  description:
    "Canlı Gantt takvimi, mobil saha uygulaması, teslim/iade yönetimi, raporlama ve daha fazlası — Rent Okey'in tüm özelliklerini keşfedin.",
};

export default function OzelliklerPage() {
  return (
    <>
      <PageHero
        eyebrow="Özellikler"
        title="Operasyonunuzu kolaylaştıran her şey tek yerde"
        description="Kiralama sürecinizin her aşaması için tasarlanmış özelliklerle ekibiniz daha hızlı ve daha az hatayla çalışır."
      >
        <div className="mt-8 flex justify-center">
          <Button href="/ucretsiz-dene" size="lg" icon>
            Ücretsiz dene
          </Button>
        </div>
      </PageHero>

      <section className="container-page py-16 sm:py-24">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {allFeatures.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-surface-border p-6 transition-shadow hover:shadow-lg hover:shadow-brand-navy/5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-navy">
                <feature.icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-[15px] font-bold leading-snug text-brand-navy">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-navy/50">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
