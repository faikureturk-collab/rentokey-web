import {
  CalendarRange,
  Expand,
  FileClock,
  MapPinned,
  ScanEye,
  UsersRound,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const localDetails = [
  {
    icon: FileClock,
    title: "Belge süreleri",
    description: "Sigorta, kasko, vergi ve egzoz emisyon tarihlerini operasyonun yanında izleyin.",
  },
  {
    icon: MapPinned,
    title: "Teslim noktaları",
    description: "Şube, havalimanı, otel ve adrese teslim işlerini aynı plan içinde yönetin.",
  },
  {
    icon: CalendarRange,
    title: "Farklı kiralama süreleri",
    description: "Günlük rezervasyonlarla aylık kiralamaları aynı zaman çizelgesinde görün.",
  },
  {
    icon: UsersRound,
    title: "Ofis ve saha ekibi",
    description: "Sistem Yöneticisi ve dört operasyon pozisyonu yalnız yetkili olduğu sayfa ve işlemlerle çalışır.",
  },
];

const principles: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Workflow,
    title: "Operasyon önce gelir",
    description: "Her ekran, kullanıcının sıradaki işini daha hızlı tamamlamasına hizmet eder.",
  },
  {
    icon: ScanEye,
    title: "Aksiyon görünür olmalı",
    description: "Riskler, uyarılar ve yapılacak işler kalabalık listelerin içinde kaybolmaz.",
  },
  {
    icon: Expand,
    title: "Filo büyürken düzen korunmalı",
    description: "On araçta kolay olan çalışma biçimi, yetmiş araçta da anlaşılır kalmalıdır.",
  },
];

export default function HakkimizdaSection({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const en = locale === "en";
  const details = en ? [
    { icon: FileClock, title: "Document deadlines", description: "Track insurance, comprehensive cover, tax and emissions dates alongside operations." },
    { icon: MapPinned, title: "Handover locations", description: "Manage branch, airport, hotel and address deliveries in the same plan." },
    { icon: CalendarRange, title: "Different rental periods", description: "See daily reservations and monthly rentals on the same timeline." },
    { icon: UsersRound, title: "Office and field teams", description: "The System Administrator and four operation roles work only with authorised pages and actions." },
  ] : localDetails;
  const localizedPrinciples = en ? [
    { icon: Workflow, title: "Operations come first", description: "Every screen helps the user complete the next task faster." },
    { icon: ScanEye, title: "Actions must stay visible", description: "Risks, alerts and tasks do not disappear inside crowded lists." },
    { icon: Expand, title: "Order must hold as the fleet grows", description: "A workflow that is simple for ten vehicles should remain clear for seventy." },
  ] : principles;
  return (
    <section id={en ? "about" : "hakkimizda"} className="scroll-mt-24 bg-white py-16 sm:py-24">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <span className="inline-flex rounded-full bg-brand-green/10 px-4 py-1.5 text-sm font-semibold text-brand-green-dark">{en ? "The RentOkey approach" : "Rent Okey yaklaşımı"}</span>
            <h2 className="mt-5 text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] text-brand-navy sm:text-4xl">
              {en ? <>Designed around <span className="text-brand-green">real operations</span> in Türkiye and Northern Cyprus.</> : <>Türkiye ve KKTC&apos;deki <span className="text-brand-green">gerçek operasyona</span> göre tasarlandı.</>}
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-brand-navy/55">
              {en ? "RentOkey is not a generic fleet spreadsheet. It is an operation product that brings a rental company’s reservation, field, document and financial processes into the same working day." : "Rent Okey genel amaçlı bir filo tablosu değil; araç kiralama firmasının rezervasyon, saha, belge ve finans süreçlerini aynı iş gününde buluşturan bir operasyon ürünüdür."}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {(en ? ["Türkiye", "Northern Cyprus", "₺ / TRY", "Desktop + tablet + mobile"] : ["Türkiye", "KKTC", "₺ / TRY", "Masaüstü + tablet + mobil"]).map((item) => (
                <span key={item} className="rounded-full border border-surface-border bg-surface-soft px-3 py-1.5 text-[11px] font-bold text-brand-navy/55">{item}</span>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] bg-brand-navy p-5 shadow-2xl shadow-brand-navy/10 sm:p-7">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-green">{en ? "Local operation details" : "Yerel operasyon ayrıntıları"}</p>
                <h3 className="mt-2 text-xl font-extrabold text-white">{en ? "Features with practical field value" : "Sahada karşılığı olan özellikler"}</h3>
              </div>
              <span className="hidden rounded-full bg-white/[0.06] px-3 py-1.5 text-[10px] font-semibold text-white/45 sm:inline-flex">{en ? "One platform" : "Tek platform"}</span>
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {details.map((detail) => {
                const Icon = detail.icon;
                return (
                  <article key={detail.title} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 sm:p-5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green"><Icon className="h-4.5 w-4.5" /></span>
                    <h4 className="mt-5 text-sm font-extrabold text-white">{detail.title}</h4>
                    <p className="mt-2 text-xs leading-relaxed text-white/50">{detail.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-[24px] border border-surface-border bg-surface-border md:grid-cols-3">
          {localizedPrinciples.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <article key={principle.title} className={`bg-surface-soft p-6 sm:p-7 ${index > 0 ? "border-t border-white md:border-l md:border-t-0" : ""}`}>
                <div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-brand-blue"><Icon className="h-4 w-4" /></span><h3 className="text-sm font-extrabold text-brand-navy">{principle.title}</h3></div>
                <p className="mt-4 text-xs leading-relaxed text-brand-navy/50">{principle.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
