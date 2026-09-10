import Link from "next/link";
import {
  ArrowRight,
  Building2,
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
import ProductEvidenceSection from "@/components/ProductEvidenceSection";
import { OperationCentrePreview, ReservationTimelinePreview } from "@/components/ProductPreviewScenes";
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

          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(24rem,.85fr)]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-green/15 bg-white px-4 py-2 text-sm font-bold text-brand-green-dark shadow-sm">
                <Sparkles className="h-4 w-4" /> {content.eyebrow}
              </span>
              <h1 className="mt-6 max-w-[43rem] text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] text-brand-navy sm:text-5xl lg:text-[3.15rem] xl:text-[3.35rem]">
                {content.heroTitle}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-navy/60 sm:text-lg">
                {content.heroDescription}
              </p>
              <p className="mt-4 flex max-w-2xl items-start gap-2 text-sm font-semibold leading-relaxed text-brand-navy/70">
                <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-dark" />
                {content.heroProof}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={trialHref} size="lg" icon>{content.primaryCta}</Button>
                <Button href="#product-demo" variant="secondary" size="lg" className="whitespace-normal text-center">{content.secondaryCta}</Button>
              </div>
              <p className="mt-4 text-xs font-medium leading-relaxed text-brand-navy/45">{content.trustLine}</p>
            </div>

            {content.variant === "calendar" ? <ReservationTimelinePreview locale={content.locale} /> : <OperationCentrePreview locale={content.locale} />}
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

      <ProductEvidenceSection content={content} />

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
