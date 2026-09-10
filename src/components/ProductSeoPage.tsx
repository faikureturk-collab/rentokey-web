import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CarFront,
  Check,
  Clock3,
  FileCheck2,
  Layers3,
  Search,
  ShieldCheck,
  Sparkles,
  Upload,
  UserRound,
  WalletCards,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import Button from "@/components/Button";
import CtaBanner from "@/components/CtaBanner";
import FaqAccordion from "@/components/FaqAccordion";
import type { ProductIconName, ProductSeoContent } from "@/lib/product-pages";

const icons: Record<ProductIconName, LucideIcon> = {
  calendar: CalendarDays,
  car: CarFront,
  users: UserRound,
  handover: FileCheck2,
  wallet: WalletCards,
  wrench: Wrench,
  focus: Sparkles,
  shield: ShieldCheck,
  upload: Upload,
  search: Search,
  clock: Clock3,
  layers: Layers3,
};

export default function ProductSeoPage({ content }: { content: ProductSeoContent }) {
  const en = content.locale === "en";
  const trialHref = en ? "/en/free-trial" : "/ucretsiz-dene";

  return (
    <>
      <section className="overflow-hidden border-b border-surface-border bg-[linear-gradient(135deg,#f7faff_0%,#ffffff_55%,#eefbf5_100%)]">
        <div className="container-page py-14 sm:py-20 lg:py-24">
          <nav aria-label={en ? "Breadcrumb" : "İçerik yolu"} className="mb-8 flex items-center gap-2 text-xs font-semibold text-brand-navy/45">
            <Link href={en ? "/en" : "/"} className="hover:text-brand-green-dark">{en ? "Home" : "Ana sayfa"}</Link>
            <span aria-hidden="true">/</span>
            <span className="text-brand-navy/70">{content.title}</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(26rem,.9fr)]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-green/15 bg-white px-4 py-2 text-sm font-bold text-brand-green-dark shadow-sm">
                <Sparkles className="h-4 w-4" /> {content.eyebrow}
              </span>
              <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] text-brand-navy sm:text-5xl lg:text-[3.45rem]">
                {content.heroTitle}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-navy/60 sm:text-lg">
                {content.heroDescription}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={trialHref} size="lg" icon>{content.primaryCta}</Button>
                <Button href={content.relatedHref} variant="secondary" size="lg">{content.secondaryCta}</Button>
              </div>
              <p className="mt-4 text-xs font-medium leading-relaxed text-brand-navy/45">{content.trustLine}</p>
            </div>

            {content.variant === "calendar" ? <CalendarPreview locale={content.locale} /> : <SoftwarePreview locale={content.locale} />}
          </div>

          <div className="mt-12 grid overflow-hidden rounded-2xl border border-surface-border bg-white shadow-sm sm:grid-cols-3">
            {content.outcomes.map((item, index) => (
              <div key={item.value} className={`p-5 sm:p-6 ${index ? "border-t border-surface-border sm:border-l sm:border-t-0" : ""}`}>
                <p className="text-xl font-extrabold text-brand-navy">{item.value}</p>
                <p className="mt-1 text-sm text-brand-navy/50">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page py-16 sm:py-24">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-green-dark">{content.featureEyebrow}</span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.035em] text-brand-navy sm:text-4xl">{content.featureTitle}</h2>
            <p className="mt-4 text-base leading-relaxed text-brand-navy/55">{content.featureDescription}</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.features.map((feature) => {
              const Icon = icons[feature.icon];
              return (
                <article key={feature.title} className="rounded-[22px] border border-surface-border bg-surface-soft/45 p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue"><Icon className="h-5 w-5" /></span>
                  <h3 className="mt-5 text-lg font-extrabold text-brand-navy">{feature.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-brand-navy/55">{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-surface-border bg-surface-soft/60">
        <div className="container-page py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-green-dark">{content.workflowEyebrow}</span>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.035em] text-brand-navy sm:text-4xl">{content.workflowTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-brand-navy/55">{content.workflowDescription}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {content.steps.map((step) => (
                <article key={step.number} className="rounded-[22px] border border-surface-border bg-white p-6">
                  <span className="text-xs font-extrabold tracking-[0.12em] text-brand-green">{step.number}</span>
                  <h3 className="mt-4 text-base font-extrabold text-brand-navy">{step.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-brand-navy/50">{step.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-7 rounded-[26px] bg-brand-navy p-7 text-white sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="text-2xl font-extrabold tracking-[-0.025em]">{content.calloutTitle}</h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/60 sm:text-base">{content.calloutDescription}</p>
            </div>
            <ul className="space-y-2.5 text-sm text-white/75">
              {content.calloutPoints.map((point) => <li key={point} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />{point}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page py-16 sm:py-24">
          <div className="grid gap-8 rounded-[28px] border border-surface-border bg-[linear-gradient(120deg,#ffffff_0%,#f4f8ff_100%)] p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-blue">{content.relatedEyebrow}</span>
              <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.03em] text-brand-navy sm:text-3xl">{content.relatedTitle}</h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-brand-navy/55 sm:text-base">{content.relatedDescription}</p>
            </div>
            <Link href={content.relatedHref} className="inline-flex min-h-11 items-center gap-2 font-bold text-brand-green-dark hover:text-brand-navy">
              {content.relatedLabel} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 border-y border-surface-border bg-surface-soft/55">
        <div className="container-page py-16 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-green-dark">{content.faqEyebrow}</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-brand-navy sm:text-4xl">{content.faqTitle}</h2>
          </div>
          <div className="mx-auto mt-10 max-w-4xl"><FaqAccordion items={content.faqs} columns={false} locale={content.locale} /></div>
        </div>
      </section>

      <div className="pt-16 sm:pt-24"><CtaBanner locale={content.locale} /></div>
    </>
  );
}

function SoftwarePreview({ locale }: { locale: "tr" | "en" }) {
  const en = locale === "en";
  const rows = en
    ? [["11:30", "Handover · Airport", "Ready"], ["14:00", "Return · Branch", "Assigned"], ["16:20", "Balance before handover", "₺8,400"]]
    : [["11:30", "Teslim · Havalimanı", "Hazır"], ["14:00", "İade · Şube", "Atandı"], ["16:20", "Teslim öncesi bakiye", "₺8.400"]];
  return (
    <div aria-label={en ? "Sample Rent Okey operation view" : "Örnek Rent Okey operasyon görünümü"} className="overflow-hidden rounded-[26px] border border-brand-navy/10 bg-brand-navy-deep text-white shadow-2xl shadow-brand-navy/15">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4"><strong className="text-sm">RentOkey · {en ? "Operation centre" : "Operasyon merkezi"}</strong><span className="text-[10px] text-white/40">{en ? "Sample data" : "Örnek veri"}</span></div>
      <div className="grid grid-cols-3 gap-2 p-4">
        {(en ? [["12", "Handovers"], ["9", "Returns"], ["70", "Vehicles"]] : [["12", "Teslim"], ["9", "İade"], ["70", "Araç"]]).map(([value, label]) => <div key={label} className="rounded-xl bg-white/10 p-3"><p className="text-xl font-extrabold">{value}</p><p className="mt-1 text-[10px] text-white/45">{label}</p></div>)}
      </div>
      <div className="px-4 pb-4">
        <div className="mb-2 flex items-center justify-between"><p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-green">{en ? "Next operations" : "Sıradaki operasyonlar"}</p><span className="text-[10px] text-white/35">{en ? "Live" : "Canlı"}</span></div>
        <div className="overflow-hidden rounded-xl border border-white/10">{rows.map(([time, title, state], index) => <div key={`${time}-${title}`} className={`grid grid-cols-[3.2rem_1fr_auto] items-center gap-2 bg-white/[0.055] px-3 py-3 text-xs ${index ? "border-t border-white/10" : ""}`}><span className="font-bold text-sky-300">{time}</span><span className="truncate text-white/75">{title}</span><span className={index === 2 ? "text-amber-300" : "text-brand-green"}>{state}</span></div>)}</div>
      </div>
    </div>
  );
}

function CalendarPreview({ locale }: { locale: "tr" | "en" }) {
  const en = locale === "en";
  const vehicles = en ? ["Clio · Economy", "Corolla · Mid-size", "Egea · Economy", "2008 · SUV"] : ["Clio · Ekonomi", "Corolla · Orta sınıf", "Egea · Ekonomi", "2008 · SUV"];
  return (
    <div aria-label={en ? "Sample car rental reservation timeline" : "Örnek araç kiralama rezervasyon zaman çizelgesi"} className="overflow-hidden rounded-[26px] border border-brand-navy/10 bg-brand-navy-deep text-white shadow-2xl shadow-brand-navy/15">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4"><strong className="text-sm">{en ? "Reservation timeline" : "Rezervasyon zaman çizelgesi"}</strong><span className="rounded-full bg-brand-blue px-2.5 py-1 text-[10px] font-bold">14 {en ? "days" : "gün"}</span></div>
      <div className="grid grid-cols-[7rem_repeat(5,1fr)] border-b border-white/10 bg-white/[0.04] text-[9px] text-white/40"><span className="px-3 py-2">{en ? "Vehicle / class" : "Araç / sınıf"}</span>{["10", "11", "12", "13", "14"].map(day => <span key={day} className="border-l border-white/10 py-2 text-center">{day}</span>)}</div>
      <div className="p-2">{vehicles.map((vehicle, index) => <div key={vehicle} className="grid min-h-11 grid-cols-[7rem_1fr] items-center border-b border-white/[0.07] last:border-0"><span className="px-2 text-[10px] text-white/65">{vehicle}</span><div className="relative h-7"><span className={`absolute top-1 h-5 rounded-md ${index === 1 ? "left-[18%] w-[62%] bg-brand-green" : index === 2 ? "left-[45%] w-[36%] bg-amber-500" : index === 3 ? "left-[4%] w-[30%] bg-[#705DE8]" : "left-[4%] w-[53%] bg-brand-blue"}`}><span className="block truncate px-2 pt-1 text-[8px] font-semibold text-white">{index === 2 ? (en ? "Maintenance" : "Bakım") : (en ? "Reservation" : "Rezervasyon")}</span></span></div></div>)}</div>
      <div className="flex items-center gap-4 border-t border-white/10 px-4 py-3 text-[9px] text-white/45"><span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-sm bg-brand-blue" />{en ? "Rented" : "Kirada"}</span><span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-sm bg-brand-green" />{en ? "Available" : "Müsait"}</span><span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-sm bg-amber-500" />{en ? "Maintenance" : "Bakım"}</span></div>
    </div>
  );
}
