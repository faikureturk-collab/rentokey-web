import {
  CalendarDays,
  Check,
  CreditCard,
  Gauge,
  ShieldCheck,
} from "lucide-react";
import TrialOnboarding from "@/components/TrialOnboarding";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Araç Kiralama Programını 14 Gün Ücretsiz Deneyin",
  description:
    "Kredi kartı ve kurulum ücreti olmadan Rent Okey çalışma alanınızı oluşturun; kendi filonuz ve rezervasyonlarınızla 14 gün ücretsiz deneyin.",
  path: "/ucretsiz-dene",
});

const benefits = [
  "Rezervasyon ve zaman çizelgesini kendi araçlarınızla deneyin",
  "Teslim, iade ve yaklaşan riskleri tek akışta görün",
  "Masaüstü, tablet ve mobil kullanım düzenini test edin",
];

const metrics = [
  { icon: CalendarDays, value: "14 gün", label: "Ücretsiz kullanım" },
  { icon: CreditCard, value: "0 ₺", label: "Başlangıç ücreti" },
  { icon: Gauge, value: "Tek adım", label: "Hesap başvurusu" },
];

export default function UcretsizDenePage() {
  return (
    <section className="relative overflow-hidden bg-[#f4f7fa]">
      <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-brand-blue/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-brand-green/[0.08] blur-3xl" />

      <div className="container-page relative grid min-h-[calc(100vh-72px)] items-center gap-10 py-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-16 lg:py-16">
        <div className="lg:py-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-green/20 bg-white px-4 py-1.5 text-sm font-semibold text-brand-green-dark shadow-sm">
            <span className="h-2 w-2 rounded-full bg-brand-green" /> Tek adımda ücretsiz hesap
          </span>
          <h1 className="mt-6 max-w-xl text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] text-brand-navy sm:text-5xl lg:text-[56px]">
            Satın almadan önce <span className="text-brand-green">gerçek işinizi deneyin.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-navy/55">
            Hesabınızı oluşturun, e-posta adresinizi doğrulayın ve kendi filonuz,
            rezervasyonlarınız ve ekibinizle Rent Okey&apos;i değerlendirin.
          </p>

          <ul className="mt-7 space-y-3.5">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green-dark"><Check className="h-3 w-3" strokeWidth={3} /></span>
                <span className="text-sm leading-relaxed text-brand-navy/70">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 grid max-w-xl grid-cols-3 overflow-hidden rounded-2xl border border-surface-border bg-white">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={metric.label} className={`p-3.5 sm:p-4 ${index > 0 ? "border-l border-surface-border" : ""}`}>
                  <Icon className="h-4 w-4 text-brand-blue" />
                  <p className="mt-2 text-sm font-extrabold text-brand-navy sm:text-base">{metric.value}</p>
                  <p className="mt-0.5 text-[9px] leading-tight text-brand-navy/40 sm:text-[10px]">{metric.label}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex items-center gap-2 text-xs font-medium text-brand-navy/45">
            <ShieldCheck className="h-4 w-4 text-brand-green" /> Ödeme bilgisi istemeden güvenli başlangıç
          </div>
        </div>

        <TrialOnboarding />
      </div>
    </section>
  );
}
