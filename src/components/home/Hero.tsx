import { CheckCircle2, Play } from "lucide-react";
import Button from "../Button";
import DashboardMock from "../DashboardMock";

const bullets = [
  "Filo yönetimini akıllı hale getirir",
  "Rezervasyon, teslimat ve takvimi tek yerde toplar",
];

export default function Hero() {
  return (
    <section className="overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[minmax(0,480px)_1fr]">
        <div>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-brand-navy sm:text-5xl">
            Kiralama operasyonunu kolaylaştırır
          </h1>

          <ul className="mt-7 space-y-4">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-brand-green" strokeWidth={2} />
                <span className="text-lg text-brand-navy/80">{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/ucretsiz-dene" size="lg" icon>
              Ücretsiz dene
            </Button>
            <Button href="#nasil-calisir" variant="secondary" size="lg">
              Nasıl çalışır?
              <Play className="h-4 w-4 fill-current" />
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {["A", "M", "S", "E"].map((letter, i) => (
                <span
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-brand-navy/10 text-sm font-semibold text-brand-navy"
                >
                  {letter}
                </span>
              ))}
            </div>
            <div>
              <p className="font-bold text-brand-navy">500+ kullanıcı</p>
              <p className="text-sm text-brand-navy/50">
                Türkiye genelinde araç kiralama firmaları tarafından güvenle kullanılıyor.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:pr-4">
          <DashboardMock />
        </div>
      </div>
    </section>
  );
}
