import { PlayCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Kullanım Kılavuzları",
  description: "Rent Okey'i kurma ve verimli kullanma konusunda adım adım kılavuzlar.",
  path: "/kilavuzlar",
  index: false,
});

const guides = [
  { title: "Hızlı başlangıç: Hesabınızı 5 dakikada kurun", duration: "5 dk" },
  { title: "Araç ve müşteri verilerini içe aktarma", duration: "8 dk" },
  { title: "Ekibinizi davet etme ve rol bazlı yetkilendirme", duration: "6 dk" },
  { title: "Mobil uyumlu saha ekranlarını kullanmak", duration: "7 dk" },
  { title: "Raporları özelleştirme ve dışa aktarma", duration: "6 dk" },
  { title: "Fiyatlandırma kurallarını yapılandırma", duration: "9 dk" },
];

export default function KilavuzlarPage() {
  return (
    <>
      <PageHero
        eyebrow="Kılavuzlar"
        title="Rent Okey'den en iyi şekilde faydalanın"
        description="Kurulumdan ileri seviye kullanıma kadar adım adım kılavuzlar."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {guides.map((guide) => (
            <div
              key={guide.title}
              className="flex items-center gap-4 rounded-2xl border border-surface-border p-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                <PlayCircle className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[15px] font-semibold text-brand-navy">{guide.title}</p>
                <p className="text-sm text-brand-navy/45">{guide.duration} · Çok yakında</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
