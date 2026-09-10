import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CarFront,
  CircleDollarSign,
  ClipboardCheck,
  UsersRound,
} from "lucide-react";

const outcomes = [
  { icon: ClipboardCheck, tr: "Teslim ve iadeyi aynı operasyonda yönetin", en: "Manage handovers and returns in one operation" },
  { icon: CircleDollarSign, tr: "Ödeme, gider ve raporları birlikte izleyin", en: "Track payments, expenses and reports together" },
  { icon: UsersRound, tr: "Ekibi rol ve sayfa bazında yetkilendirin", en: "Authorise the team by role and page" },
  { icon: CarFront, tr: "Filo, bakım ve belge tarihlerini takip edin", en: "Track fleet, maintenance and document dates" },
];

export default function ProductOverviewSection({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const en = locale === "en";

  const products = en
    ? [
        {
          icon: CarFront,
          eyebrow: "One operation centre",
          title: "Car rental software",
          description: "Bring reservations, customers, vehicles, handovers, returns and finance into the same working flow.",
          href: "/en/car-rental-software",
          cta: "Explore the software",
          accent: "bg-brand-blue/10 text-brand-blue",
        },
        {
          icon: CalendarDays,
          eyebrow: "Live vehicle planning",
          title: "Reservation calendar",
          description: "See availability, conflicts, preparation windows and suitable vehicle suggestions before confirming a booking.",
          href: "/en/car-rental-reservation-calendar",
          cta: "Explore the calendar",
          accent: "bg-brand-green/10 text-brand-green-dark",
        },
      ]
    : [
        {
          icon: CarFront,
          eyebrow: "Tek operasyon merkezi",
          title: "Araç kiralama programı",
          description: "Rezervasyon, müşteri, araç, teslim, iade ve finans süreçlerini aynı çalışma düzeninde birleştirin.",
          href: "/arac-kiralama-programi",
          cta: "Programı inceleyin",
          accent: "bg-brand-blue/10 text-brand-blue",
        },
        {
          icon: CalendarDays,
          eyebrow: "Canlı araç planı",
          title: "Rezervasyon takvimi",
          description: "Müsaitliği, çakışmaları, hazırlık sürelerini ve uygun araç önerilerini rezervasyonu onaylamadan görün.",
          href: "/arac-kiralama-rezervasyon-takvimi",
          cta: "Takvimi inceleyin",
          accent: "bg-brand-green/10 text-brand-green-dark",
        },
      ];

  return (
    <section id={en ? "product" : "urun"} className="scroll-mt-24 border-y border-surface-border bg-white">
      <div className="container-page py-14 sm:py-20">
        <div className="grid gap-5 lg:grid-cols-[1fr_.72fr] lg:items-end">
          <div>
            <p className="text-sm font-bold text-brand-green-dark">{en ? "The core product" : "Temel ürün"}</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] text-brand-navy sm:text-4xl">
              {en ? "See the whole operation. Go deeper only where you need to." : "Operasyonun tamamını görün. İhtiyacınız olan ayrıntıya ilerleyin."}
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-brand-navy/55 lg:justify-self-end">
            {en ? "Start with the complete platform or examine the live reservation calendar directly." : "Platformun tamamından başlayın veya doğrudan canlı rezervasyon takvimini inceleyin."}
          </p>
        </div>

        <div className="mt-9 grid gap-4 lg:grid-cols-2">
          {products.map(({ icon: Icon, eyebrow, title, description, href, cta, accent }) => (
            <Link
              key={href}
              href={href}
              className="group rounded-[24px] border border-surface-border bg-surface-soft/45 p-6 transition-colors hover:border-brand-green/35 hover:bg-white sm:p-7"
            >
              <div className="flex items-start justify-between gap-6">
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${accent}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <ArrowRight className="h-5 w-5 text-brand-navy/25 transition-transform group-hover:translate-x-1 group-hover:text-brand-green-dark" />
              </div>
              <p className="mt-7 text-xs font-bold uppercase tracking-[0.12em] text-brand-green-dark">{eyebrow}</p>
              <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-brand-navy">{title}</h3>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-brand-navy/55">{description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-blue">
                {cta} <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
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
