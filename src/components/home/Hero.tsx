import { MousePointer2 } from "lucide-react";
import Button from "../Button";
import DashboardMock from "../DashboardMock";

const trustItems = [
  "Kredi kartı yok",
  "Kurulum ücreti yok",
  "Satış görüşmesi beklemeden başla",
];

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[radial-gradient(circle_at_78%_28%,rgba(24,184,120,0.11),transparent_36%)] py-8 sm:py-10 lg:py-8">
      <div className="mx-auto grid w-full max-w-[1320px] items-center gap-9 px-5 lg:grid-cols-[0.84fr_1.16fr] lg:gap-9 xl:gap-12">
        <div className="max-w-[590px]">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-green/25 bg-brand-green/5 px-4 py-1.5 text-sm font-semibold text-brand-green-dark">
            <i className="h-2 w-2 rounded-full bg-brand-green" />
            Türkiye ve KKTC için araç kiralama programı
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] text-brand-navy sm:text-5xl xl:text-[54px]">
            <span className="sm:block">Operasyonu yönetin. </span>
            <span className="text-brand-green sm:block">Yoğunluğu değil.</span>
          </h1>

          <p className="mt-4 text-base leading-relaxed text-brand-navy/55 sm:text-[16px]">
            Türkiye ve KKTC&apos;de teslim, iade ve araç planını tek ekranda yönetin; ödenmemiş
            bakiye ve yetersiz hazırlık süresi gibi riskleri gecikmeden görün.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-stretch">
            <Button href="/ucretsiz-dene" size="lg" icon className="w-full sm:w-auto lg:w-full">
              14 gün ücretsiz deneyin
            </Button>
            <Button href="#hero-demo" variant="secondary" size="lg" className="w-full sm:w-auto lg:w-full">
              Etkileşimli ürün örneğini incele
              <MousePointer2 className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-[11px] font-semibold text-brand-navy/48 sm:text-xs">
            {trustItems.map((item, index) => (
              <span key={item} className="inline-flex items-center gap-3">
                {index > 0 && <i aria-hidden="true">·</i>}
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="min-w-0">
          <DashboardMock />
        </div>
      </div>
    </section>
  );
}
