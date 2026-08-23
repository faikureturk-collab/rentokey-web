import PageHero from "@/components/PageHero";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Ürün Güncellemeleri",
  description: "Rent Okey'e eklenen yeni özellikler ve iyileştirmeler.",
  path: "/guncellemeler",
  index: false,
});

const updates = [
  {
    date: "Ağustos 2026",
    title: "Mobil saha uygulamasında çevrimdışı mod",
    description:
      "Saha ekipleri artık internet bağlantısı olmayan bölgelerde de teslimat/iade kaydı oluşturabiliyor.",
  },
  {
    date: "Haziran 2026",
    title: "Kârlılık ve doluluk raporlarında yeni filtreler",
    description: "Şube ve araç grubu bazında karşılaştırmalı raporlama eklendi.",
  },
  {
    date: "Nisan 2026",
    title: "Rol bazlı yetkilendirme geliştirmeleri",
    description: "Ekip üyelerine daha ayrıntılı erişim izinleri tanımlanabiliyor.",
  },
];

export default function GuncellemelerPage() {
  return (
    <>
      <PageHero
        eyebrow="Güncellemeler"
        title="Rent Okey'deki yenilikler"
        description="Ürüne eklediğimiz yeni özellikleri ve iyileştirmeleri buradan takip edebilirsiniz."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="mx-auto max-w-2xl space-y-8">
          {updates.map((update) => (
            <div key={update.title} className="border-l-2 border-brand-green/30 pl-6">
              <p className="text-sm font-semibold text-brand-green">{update.date}</p>
              <h3 className="mt-1 text-lg font-bold text-brand-navy">{update.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-navy/55">
                {update.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
