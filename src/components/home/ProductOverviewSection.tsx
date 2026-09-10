import Link from "next/link";
import {
  ArrowRight,
  CarFront,
  CircleDollarSign,
  ClipboardCheck,
  UsersRound,
} from "lucide-react";
import HomeOperationDemo from "@/components/HomeOperationDemo";

const outcomes = [
  { icon: ClipboardCheck, tr: "Teslim ve iadeyi aynı operasyonda yönetin", en: "Manage handovers and returns in one operation" },
  { icon: CircleDollarSign, tr: "Ödeme, gider ve raporları birlikte izleyin", en: "Track payments, expenses and reports together" },
  { icon: UsersRound, tr: "Ekibi rol ve sayfa bazında yetkilendirin", en: "Authorise the team by role and page" },
  { icon: CarFront, tr: "Filo, bakım ve belge tarihlerini takip edin", en: "Track fleet, maintenance and document dates" },
];

export default function ProductOverviewSection({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const en = locale === "en";

  return (
    <section id={en ? "product" : "urun"} className="scroll-mt-24 border-y border-surface-border bg-white">
      <div className="container-page py-14 sm:py-20">
        <div className="grid gap-5 lg:grid-cols-[1fr_.72fr] lg:items-end">
          <div>
            <p className="text-sm font-bold text-brand-green-dark">{en ? "The heart of the product" : "Ürünün kalbi"}</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] text-brand-navy sm:text-4xl">
              {en ? <>Not separate tools. <span className="text-brand-green">One operation flow.</span></> : <>Ayrı araçlar değil. <span className="text-brand-green">Tek operasyon akışı.</span></>}
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-brand-navy/55 lg:justify-self-end">
            {en ? "See how reservations, the 14-day vehicle plan, today’s handovers and Recommended Focus work together in a 20-vehicle sample operation." : "Rezervasyonların, 14 günlük araç planının, bugünkü teslimlerin ve Önerilen Odak'ın 20 araçlık örnek operasyonda nasıl birlikte çalıştığını görün."}
          </p>
        </div>

        <div className="mt-9">
          <HomeOperationDemo locale={locale} />
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-2xl border border-surface-border bg-surface-soft/45 px-5 py-4">
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-brand-navy/45">{en ? "Product details" : "Ürün ayrıntıları"}</p>
          <Link href={en ? "/en/car-rental-software" : "/arac-kiralama-programi"} className="group inline-flex items-center gap-2 text-sm font-bold text-brand-blue">
            {en ? "Explore the car rental software" : "Araç kiralama programını inceleyin"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href={en ? "/en/car-rental-reservation-calendar" : "/arac-kiralama-rezervasyon-takvimi"} className="group inline-flex items-center gap-2 text-sm font-bold text-brand-blue">
            {en ? "Explore the reservation calendar" : "Rezervasyon takvimini inceleyin"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-4 grid gap-px overflow-hidden rounded-2xl border border-surface-border bg-surface-border sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map(({ icon: Icon, tr, en: english }) => (
            <div key={tr} className="flex items-start gap-3 bg-white p-4">
              <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-dark" />
              <p className="text-sm font-semibold leading-snug text-brand-navy/70">{en ? english : tr}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
