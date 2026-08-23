import { CheckCircle2, MousePointer2 } from "lucide-react";
import Button from "../Button";
import DashboardMock from "../DashboardMock";

const bullets = [
  "Bugünün teslim, iade ve risklerini önceliklendirir",
  "Ödenmemiş bakiye ve yetersiz hazırlık süresi gibi saklı riskleri öne çıkarır",
  "Rezervasyon, araç planı ve saha ekibini aynı akışta buluşturur",
];

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[radial-gradient(circle_at_78%_28%,rgba(24,184,120,0.11),transparent_36%)] py-12 sm:py-20">
      <div className="mx-auto grid w-full max-w-[1320px] items-center gap-12 px-5 lg:grid-cols-[0.76fr_1.24fr] lg:gap-10 xl:gap-14">
        <div className="max-w-[590px]">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-green/25 bg-brand-green/5 px-4 py-1.5 text-sm font-semibold text-brand-green-dark">
            <i className="h-2 w-2 rounded-full bg-brand-green" />
            Türkiye ve KKTC için araç kiralama programı
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] text-brand-navy sm:text-5xl xl:text-[56px]">
            <span className="sm:block">Operasyonu yönetin. </span>
            <span className="text-brand-green sm:block">Yoğunluğu değil.</span>
          </h1>

          <p className="mt-5 text-base leading-relaxed text-brand-navy/55 sm:text-[17px]">
            Rent Okey, Türkiye ve KKTC için geliştirilen araç kiralama operasyon yazılımıdır. Ekibinizin bugün ne yapacağını ve hangi aracın ne zaman uygun olduğunu tek ekranda gösterir.
          </p>

          <ul className="mt-7 space-y-3">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" strokeWidth={2} />
                <span className="text-sm leading-relaxed text-brand-navy/75 sm:text-[15px]">{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/ucretsiz-dene" size="lg" icon>
              14 gün ücretsiz deneyin
            </Button>
            <Button href="#hero-demo" variant="secondary" size="lg">
              Canlı demoyu incele
              <MousePointer2 className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-brand-navy/50">
            <span>✓ Kredi kartı gerekmez</span>
            <span>✓ Kurulum ücreti yok</span>
            <span>✓ Kendi filonuzla deneyin</span>
          </div>
        </div>

        <div className="min-w-0">
          <DashboardMock />
        </div>
      </div>
    </section>
  );
}
