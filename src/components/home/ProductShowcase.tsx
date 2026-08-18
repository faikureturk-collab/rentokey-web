import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import ShowcaseCarousel from "./ShowcaseCarousel";

const points = [
  "Bulut tabanlı ve her yerden erişilebilir",
  "Yedekli altyapı ve yüksek güvenlik",
  "Sürekli güncellenen özellikler",
];

export default function ProductShowcase() {
  return (
    <section className="bg-surface-soft/60 py-20 sm:py-28">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[minmax(0,420px)_1fr]">
        <div>
          <h2 className="text-2xl font-extrabold leading-tight text-brand-navy sm:text-3xl">
            Sezgisel arayüz. Güçlü altyapı.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-navy/55">
            Gelişmiş özellikler, kolay kullanım ile bir arada. Tüm verileriniz güvende.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-green" />
                <span className="text-[15px] text-brand-navy/75">{point}</span>
              </li>
            ))}
          </ul>
          <Link
            href="#ozellikler"
            className="mt-7 inline-flex items-center gap-2 text-[15px] font-semibold text-brand-navy hover:text-brand-green"
          >
            Tüm özellikleri incele
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <ShowcaseCarousel />
      </div>
    </section>
  );
}
