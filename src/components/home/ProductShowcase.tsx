import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const points = [
  "Bulut tabanlı ve her yerden erişilebilir",
  "Yedekli altyapı ve yüksek güvenlik",
  "Sürekli güncellenen özellikler",
];

const rows = [
  { plate: "34 ABC 123", color: "bg-emerald-500", left: 8, width: 26 },
  { plate: "34 DEF 456", color: "bg-sky-500", left: 42, width: 30 },
  { plate: "34 GHI 789", color: "bg-amber-500", left: 20, width: 24 },
  { plate: "34 JKL 012", color: "bg-violet-500", left: 46, width: 28 },
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
            href="/ozellikler"
            className="mt-7 inline-flex items-center gap-2 text-[15px] font-semibold text-brand-navy hover:text-brand-green"
          >
            Tüm özellikleri incele
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-surface-border bg-white p-5 shadow-xl shadow-brand-navy/5">
            <div className="mb-4 flex items-center justify-between">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-navy/10" />
              <div className="h-8 w-40 rounded-lg bg-surface-soft" />
              <div className="flex gap-1.5">
                <span className="h-6 w-6 rounded-md bg-surface-soft" />
                <span className="h-6 w-6 rounded-md bg-surface-soft" />
              </div>
            </div>
            <div className="space-y-3">
              {rows.map((row) => (
                <div key={row.plate} className="flex items-center gap-3">
                  <span className="w-20 shrink-0 text-xs font-medium text-brand-navy/45">
                    {row.plate}
                  </span>
                  <div className="relative h-5 w-full rounded-full bg-surface-soft">
                    <div
                      className={`absolute h-5 rounded-full ${row.color}`}
                      style={{ left: `${row.left}%`, width: `${row.width}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex justify-center gap-1.5">
              {[0, 1, 2, 3, 4].map((dot) => (
                <span
                  key={dot}
                  className={`h-1.5 rounded-full ${dot === 0 ? "w-5 bg-brand-green" : "w-1.5 bg-surface-border"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
