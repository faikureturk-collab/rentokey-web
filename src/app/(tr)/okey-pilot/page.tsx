import {
  ArrowRightLeft,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import Button from "@/components/Button";
import PilotRulesSection from "@/components/PilotRulesSection";
import StructuredData from "@/components/StructuredData";
import PilotSection from "@/components/home/PilotSection";
import { createPageMetadata } from "@/lib/seo";
import { createPilotPageStructuredData } from "@/lib/structured-data";

export const metadata = createPageMetadata({
  title: "RentOkey Pilot | Araç Kiralama Operasyon Optimizasyonu",
  description:
    "RentOkey Pilot öneri kural motoru; hazırlık, bakım, fiyat, şube kapasitesi, araç sevkiyatı, yenileme, gider ve kilometre sinyallerini kullanıcı onaylı önerilere dönüştürür.",
  path: "/okey-pilot",
});

const steps = [
  {
    number: "01",
    title: "Operasyonu değerlendirir",
    description: "Rezervasyon, araç, bakım, tahsilat, fiyat, lokasyon ve zaman verilerini birlikte okur.",
  },
  {
    number: "02",
    title: "Çözümü ve etkisini gösterir",
    description: "Her öneri için gerekçe ile tahmini finansal veya operasyonel etkiyi açıklar.",
  },
  {
    number: "03",
    title: "Sizin onayınızla uygular",
    description: "Yalnızca seçtiğiniz aksiyonlar üzerinden araç atamalarını, fiyat ve ilgili görev değişikliklerini uygular.",
  },
];

export default function OkeyPilotPage() {
  return (
    <>
      <StructuredData data={createPilotPageStructuredData("tr")} />
      <PilotSection headingLevel="h1" standalone />
      <PilotRulesSection />

      <section className="border-y border-surface-border bg-surface-soft/55">
        <div className="container-page py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-4 py-1.5 text-sm font-semibold text-brand-green-dark">
                <ShieldCheck className="h-4 w-4" /> İnsan onaylı tasarım
              </span>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-[-0.035em] text-brand-navy sm:text-4xl">
                Karar desteği sunar; kontrolü sizden almaz.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-brand-navy/55">
                RentOkey Pilot doğrudan ve kontrolsüz değişiklik yapmaz. Kullanıcı önerileri tek tek seçer,
                etkisini görür ve son onayı verdikten sonra plan uygulanır.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {steps.map((step) => (
                <article key={step.number} className="rounded-[22px] border border-surface-border bg-white p-6">
                  <span className="text-xs font-extrabold text-brand-green">{step.number}</span>
                  <h3 className="mt-4 text-base font-extrabold text-brand-navy">{step.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-brand-navy/50">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page py-16 sm:py-24">
          <div className="overflow-hidden rounded-[28px] bg-brand-navy p-7 text-white sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green/15 px-3 py-1 text-[11px] font-bold text-brand-green">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Kullanıma hazır ek paket
                </span>
                <h2 className="mt-4 text-2xl font-extrabold tracking-[-0.025em] sm:text-3xl">
                  RentOkey Pilot’ı operasyonunuza ekleyin.
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/55">
                  Pilot temel aboneliğe dahil olmayan, ayrıca satın alınabilen aktif bir ek pakettir. Kapsam ve
                  fiyat bilgisi için ekibimizle görüşün.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button href="/#iletisim" size="lg" icon>
                  Fiyat bilgisi alın
                </Button>
                <Button href="/ucretsiz-dene" variant="secondary" size="lg">
                  RentOkey’i deneyin
                </Button>
              </div>
            </div>
            <p className="mt-7 flex items-center gap-2 border-t border-white/10 pt-5 text-xs text-white/40">
              <ArrowRightLeft className="h-3.5 w-3.5 text-brand-green" /> Taban ürün aboneliğinize ayrıca eklenir.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
