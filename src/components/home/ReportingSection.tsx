import Link from "next/link";
import { ArrowRight, BarChart3, Building2, FileDown, TriangleAlert } from "lucide-react";
import ReportingDashboardPreview from "@/components/ReportingDashboardPreview";
import type { Locale } from "@/lib/locale";

const benefits = [
  {
    icon: BarChart3,
    tr: "Ciro, operasyonel katkı ve filo kullanımını birlikte izleyin",
    en: "Track revenue, operating contribution and fleet utilisation together",
  },
  {
    icon: Building2,
    tr: "Şube, kategori ve araç performansını karşılaştırın",
    en: "Compare performance by branch, category and vehicle",
  },
  {
    icon: TriangleAlert,
    tr: "Açık bakiye, gecikme ve operasyon risklerini görün",
    en: "See outstanding balances, delays and operational risks",
  },
  {
    icon: FileDown,
    tr: "Seçili kapsamı Excel veya PDF görünümüyle paylaşın",
    en: "Share the selected scope through Excel or a PDF view",
  },
];

export default function ReportingSection({ locale = "tr" }: { locale?: Locale }) {
  const en = locale === "en";
  const href = en ? "/en/car-rental-reporting-and-fleet-analytics" : "/arac-kiralama-raporlama-ve-filo-analizi";

  return (
    <section id="reporting" className="scroll-mt-24 border-y border-surface-border bg-[linear-gradient(130deg,#f7faff_0%,#ffffff_60%,#eefbf5_100%)]">
      <div className="container-page py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold text-brand-green-dark">{en ? "Reporting and decision support" : "Raporlama ve karar desteği"}</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] text-brand-navy sm:text-4xl">
              {en ? "See what produced the result, not only the total." : "Yalnız toplamı değil, sonucu neyin oluşturduğunu görün."}
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-brand-navy/55">
              {en
                ? "Compare revenue, contribution, utilisation, collections and maintenance; then drill into the reservations, vehicles and expenses behind each result."
                : "Ciro, katkı, kullanım, tahsilat ve bakım sonuçlarını karşılaştırın; ardından sonucu oluşturan rezervasyon, araç ve gider kayıtlarına inin."}
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {benefits.map(({ icon: Icon, tr, en: english }) => (
                <div key={tr} className="flex items-start gap-3 rounded-2xl border border-surface-border bg-white/80 p-4">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-dark" />
                  <p className="text-sm font-semibold leading-snug text-brand-navy/70">{en ? english : tr}</p>
                </div>
              ))}
            </div>

            <Link href={href} className="group mt-7 inline-flex min-h-11 items-center gap-2 font-bold text-brand-blue hover:text-brand-navy">
              {en ? "Explore reporting and fleet analytics" : "Raporlama ve filo analizini inceleyin"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <ReportingDashboardPreview locale={locale} />
        </div>
      </div>
    </section>
  );
}
