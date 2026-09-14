import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  Database,
  Download,
  FileSpreadsheet,
  Gauge,
  Search,
  ShieldCheck,
  TrendingUp,
  UsersRound,
  WalletCards,
} from "lucide-react";
import Button from "@/components/Button";
import CtaBanner from "@/components/CtaBanner";
import FaqAccordion from "@/components/FaqAccordion";
import ReportingDashboardPreview from "@/components/ReportingDashboardPreview";
import type { ReportingContent } from "@/lib/reporting";

const questionIcons = [TrendingUp, Building2, WalletCards, Gauge, Search, BarChart3];

export default function ReportingPage({ content }: { content: ReportingContent }) {
  const en = content.locale === "en";
  const trialHref = en ? "/en/free-trial" : "/ucretsiz-dene";

  return (
    <>
      <section className="overflow-hidden border-b border-surface-border bg-[linear-gradient(135deg,#f7faff_0%,#ffffff_52%,#eefbf5_100%)]">
        <div className="container-page py-14 sm:py-20 lg:py-24">
          <nav aria-label={en ? "Breadcrumb" : "İçerik yolu"} className="mb-8 flex items-center gap-2 text-xs font-semibold text-brand-navy/45">
            <Link href={en ? "/en" : "/"} className="hover:text-brand-green-dark">{en ? "Home" : "Ana sayfa"}</Link>
            <span aria-hidden="true">/</span>
            <span className="text-brand-navy/70">{content.title}</span>
          </nav>

          <div className="grid items-center gap-11 lg:grid-cols-[minmax(0,1.02fr)_minmax(28rem,.98fr)]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-green/15 bg-white px-4 py-2 text-sm font-bold text-brand-green-dark shadow-sm">
                <BarChart3 className="h-4 w-4" /> {content.eyebrow}
              </span>
              <h1 className="mt-6 max-w-[46rem] text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] text-brand-navy sm:text-5xl lg:text-[3.15rem]">{content.heroTitle}</h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-navy/60 sm:text-lg">{content.heroDescription}</p>
              <p className="mt-4 flex max-w-2xl items-start gap-2 text-sm font-semibold leading-relaxed text-brand-navy/70">
                <Database className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-dark" />{content.proofLine}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={trialHref} size="lg" icon>{content.primaryCta}</Button>
                <Button href="#rapor-kapsami" variant="secondary" size="lg">{content.secondaryCta}</Button>
              </div>
            </div>
            <ReportingDashboardPreview locale={content.locale} />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page py-16 sm:py-24">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-green-dark">{content.questionsEyebrow}</span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.035em] text-brand-navy sm:text-4xl">{content.questionsTitle}</h2>
            <p className="mt-4 text-base leading-relaxed text-brand-navy/55">{content.questionsDescription}</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {content.questions.map((item, index) => {
              const Icon = questionIcons[index];
              return <article key={item.title} className="rounded-[22px] border border-surface-border bg-surface-soft/45 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue"><Icon className="h-5 w-5" /></span>
                <h3 className="mt-5 text-lg font-extrabold text-brand-navy">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-brand-navy/55">{item.description}</p>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section id="rapor-kapsami" className="scroll-mt-24 border-y border-surface-border bg-surface-soft/60">
        <div className="container-page py-16 sm:py-24">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-green-dark">{content.reportsEyebrow}</span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.035em] text-brand-navy sm:text-4xl">{content.reportsTitle}</h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {content.reportGroups.map((group, index) => (
              <article key={group.title} className="rounded-[24px] border border-surface-border bg-white p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-navy text-white">{index < 3 ? <FileSpreadsheet className="h-5 w-5" /> : <BarChart3 className="h-5 w-5" />}</span>
                  <div>
                    <h3 className="text-xl font-extrabold text-brand-navy">{group.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-navy/55">{group.description}</p>
                  </div>
                </div>
                <ul className="mt-5 space-y-2.5 border-t border-surface-border pt-5 text-sm text-brand-navy/65">
                  {group.items.map((item) => <li key={item} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-dark" />{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page py-16 sm:py-24">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-blue">{content.trustEyebrow}</span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.035em] text-brand-navy sm:text-4xl">{content.trustTitle}</h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <TrustCard icon={ShieldCheck} title={content.reliabilityTitle} description={content.reliabilityDescription} items={content.reliabilityItems} />
            <TrustCard icon={Download} title={content.exportTitle} description={content.exportDescription} items={content.exportItems} />
          </div>

          <div className="mt-5 rounded-[26px] bg-brand-navy p-7 text-white sm:p-9">
            <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr]">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-brand-green"><UsersRound className="h-5 w-5" /></span>
                <h3 className="mt-5 text-2xl font-extrabold">{content.rolesTitle}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{content.rolesDescription}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {content.roles.map((role) => <div key={role.title} className="rounded-2xl border border-white/10 bg-white/[0.055] p-4"><h4 className="font-extrabold">{role.title}</h4><p className="mt-2 text-sm leading-relaxed text-white/55">{role.description}</p></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-surface-border bg-surface-soft/55">
        <div className="container-page py-16 sm:py-20">
          <div className="grid gap-8 rounded-[28px] border border-surface-border bg-white p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div><h2 className="text-2xl font-extrabold tracking-[-0.03em] text-brand-navy sm:text-3xl">{content.relatedTitle}</h2><p className="mt-3 max-w-3xl text-sm leading-relaxed text-brand-navy/55 sm:text-base">{content.relatedDescription}</p></div>
            <Link href={content.relatedHref} className="inline-flex min-h-11 items-center gap-2 font-bold text-brand-green-dark hover:text-brand-navy">{content.relatedLabel}<ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 bg-white">
        <div className="container-page py-16 sm:py-24">
          <div className="mx-auto max-w-3xl text-center"><span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-green-dark">FAQ</span><h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-brand-navy sm:text-4xl">{content.faqTitle}</h2></div>
          <div className="mx-auto mt-10 max-w-4xl"><FaqAccordion items={content.faqs} columns={false} locale={content.locale} /></div>
        </div>
      </section>

      <div className="pt-2 sm:pt-8"><CtaBanner locale={content.locale} /></div>
    </>
  );
}

function TrustCard({ icon: Icon, title, description, items }: { icon: typeof ShieldCheck; title: string; description: string; items: string[] }) {
  return <article className="rounded-[24px] border border-surface-border bg-[linear-gradient(135deg,#ffffff_0%,#f6f9ff_100%)] p-7">
    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue"><Icon className="h-5 w-5" /></span>
    <h3 className="mt-5 text-xl font-extrabold text-brand-navy">{title}</h3>
    <p className="mt-3 text-sm leading-relaxed text-brand-navy/55">{description}</p>
    <ul className="mt-5 space-y-2.5 text-sm text-brand-navy/65">{items.map((item) => <li key={item} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-dark" />{item}</li>)}</ul>
  </article>;
}
