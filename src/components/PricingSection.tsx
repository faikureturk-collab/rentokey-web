"use client";

import { useState } from "react";
import {
  Check,
  CheckCircle2,
  Building2,
  ChevronDown,
  CircleHelp,
  Headphones,
  Minus,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import Button from "./Button";
import { plans } from "@/lib/pricing";

type ComparisonValue = boolean | string;

const comparisonRows: { label: string; values: ComparisonValue[] }[] = [
  { label: "Dahil kullanıcı", values: plans.map((plan) => plan.includedUsers) },
  { label: "Dahil şube", values: plans.map((plan) => plan.includedBranches) },
  { label: "Rezervasyon ve zaman çizelgesi", values: [true, true, true, true] },
  { label: "Müşteri ve sürücü yönetimi", values: [true, true, true, true] },
  { label: "Otomatik uygun araç önerisi", values: [true, true, true, true] },
  { label: "Önerilen odak ve bağlamsal operasyon riskleri", values: [true, true, true, true] },
  { label: "Filo, teslim ve iade yönetimi", values: [true, true, true, true] },
  { label: "Mobil operasyon ekranı", values: [true, true, true, true] },
  { label: "Bakım ve belge süresi uyarıları", values: [true, true, true, true] },
  { label: "Gider, tahsilat ve temel raporlar", values: [true, true, true, true] },
  { label: "Müşteri, rezervasyon, filo, gider ve bakım için Excel / CSV aktarımı", values: [true, true, true, true] },
  { label: "Rezervasyon onay belgesi ve paylaşım", values: [true, true, true, true] },
  { label: "Genel arama ve merkezi bildirimler", values: [true, true, true, true] },
  { label: "Rol ve sayfa yetkilendirmesi", values: [false, true, true, true] },
  { label: "Lokasyon ve teslim noktası takibi", values: [false, true, true, true] },
  { label: "Gelişmiş gelir, gider ve doluluk analizi", values: [false, true, true, true] },
  { label: "Excel'e veri aktarımı", values: [false, true, true, true] },
  { label: "Çoklu şube / lokasyon yönetimi", values: [false, false, true, true] },
  { label: "B2B / kurumsal ortak erişimi", values: [false, false, true, true] },
  { label: "Şube ve araç bazlı gelişmiş raporlar", values: [false, false, true, true] },
  { label: "Kuruma özel veri aktarımı ve kurulum", values: [false, false, false, true] },
  { label: "Destek seviyesi", values: plans.map((plan) => plan.supportLevel) },
];

const assurances = [
  "21 gün ücretsiz deneyin",
  "Kredi kartı gerekmez",
  "Kurulum ücreti yok",
  "İlk 48 saatte Excel / CSV desteği",
];

function formatPrice(value: number) {
  return value.toLocaleString("tr-TR");
}

export default function PricingSection({
  title = "Filonuza uygun planı seçin",
  showHeading = true,
  id,
}: {
  title?: string;
  showHeading?: boolean;
  id?: string;
}) {
  const [yearly, setYearly] = useState(false);
  const [showComparison, setShowComparison] = useState(false);

  return (
    <section id={id} className="scroll-mt-24 border-y border-surface-border bg-surface-soft/55">
      <div className="container-page py-16 sm:py-24">
        {showHeading && (
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-4 py-1.5 text-sm font-semibold text-brand-green-dark">
              <Sparkles className="h-4 w-4" /> Sade ve öngörülebilir fiyatlandırma
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] text-brand-navy sm:text-4xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-brand-navy/55">
              Filo büyüklüğünüze göre başlayın; kullanıcı ve şube kapsamını paket kartlarında
              açıkça görün. Gerçek operasyonunuzu 21 gün boyunca deneyin.
            </p>

            <div className="mt-7 inline-flex rounded-full border border-surface-border bg-white p-1 shadow-sm" aria-label="Ödeme dönemi">
              <button type="button" onClick={() => setYearly(false)} aria-pressed={!yearly} className={`rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${!yearly ? "bg-brand-navy text-white" : "text-brand-navy/45 hover:text-brand-navy"}`}>Aylık ödeme</button>
              <button type="button" onClick={() => setYearly(true)} aria-pressed={yearly} className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${yearly ? "bg-brand-navy text-white" : "text-brand-navy/45 hover:text-brand-navy"}`}>
                Yıllık ödeme <span className="rounded-full bg-brand-green px-2 py-0.5 text-[10px] text-white">%20 avantaj</span>
              </button>
            </div>
            {yearly && <p className="mt-3 text-xs text-brand-navy/40">Aylık karşılık gösterilir; ödeme 12 aylık olarak faturalandırılır.</p>}
          </div>
        )}

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => {
            const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;
            const perVehicle = price && plan.maxVehicles ? Math.round(price / plan.maxVehicles) : null;
            const yearlyTotal = plan.yearlyPrice ? plan.yearlyPrice * 12 : null;
            const yearlySaving = plan.monthlyPrice && plan.yearlyPrice ? (plan.monthlyPrice - plan.yearlyPrice) * 12 : null;
            const highlighted = Boolean(plan.popular);

            return (
              <article key={plan.name} className={`relative flex flex-col overflow-hidden rounded-[24px] border p-6 transition-transform sm:p-7 ${highlighted ? "border-brand-navy bg-brand-navy text-white shadow-2xl shadow-brand-navy/15 lg:-translate-y-2" : "border-surface-border bg-white text-brand-navy"}`}>
                {highlighted && (
                  <span className="absolute right-0 top-0 rounded-bl-2xl bg-brand-green px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white">En çok tercih edilen</span>
                )}

                <div className="pr-8">
                  <p className={`text-[10px] font-bold uppercase tracking-[0.14em] ${highlighted ? "text-brand-green" : "text-brand-navy/35"}`}>{plan.description}</p>
                  <h3 className="mt-2 text-xl font-extrabold">{plan.name}</h3>
                </div>
                <p className={`mt-3 min-h-[60px] text-xs leading-relaxed ${highlighted ? "text-white/55" : "text-brand-navy/50"}`}>{plan.audience}</p>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className={`rounded-xl p-2.5 ${highlighted ? "bg-white/[0.06]" : "bg-surface-soft"}`}>
                    <UsersRound className={`h-3.5 w-3.5 ${highlighted ? "text-brand-green" : "text-brand-blue"}`} />
                    <p className={`mt-1.5 text-[10px] font-bold ${highlighted ? "text-white/75" : "text-brand-navy/65"}`}>{plan.includedUsers}</p>
                  </div>
                  <div className={`rounded-xl p-2.5 ${highlighted ? "bg-white/[0.06]" : "bg-surface-soft"}`}>
                    <Building2 className={`h-3.5 w-3.5 ${highlighted ? "text-brand-green" : "text-brand-blue"}`} />
                    <p className={`mt-1.5 text-[10px] font-bold ${highlighted ? "text-white/75" : "text-brand-navy/65"}`}>{plan.includedBranches}</p>
                  </div>
                </div>
                <div className={`mt-2.5 flex items-center gap-2 rounded-xl px-3 py-2.5 ${highlighted ? "bg-white/[0.06] text-white/70" : "bg-surface-soft text-brand-navy/60"}`}>
                  <Headphones className={`h-3.5 w-3.5 ${highlighted ? "text-brand-green" : "text-brand-blue"}`} />
                  <span className="text-[10px] font-bold">{plan.supportLevel}</span>
                </div>

                <div className={`mt-5 border-t pt-5 ${highlighted ? "border-white/10" : "border-surface-border"}`}>
                  {price !== null ? (
                    <>
                      <div className="flex items-end gap-1">
                        <span className={`pb-1 text-base font-bold ${highlighted ? "text-white/70" : "text-brand-navy/60"}`}>₺</span>
                        <span className="text-[34px] font-extrabold leading-none tracking-[-0.04em]">{formatPrice(price)}</span>
                        <span className={`pb-1 text-xs ${highlighted ? "text-white/45" : "text-brand-navy/40"}`}>/ ay</span>
                      </div>
                      <p className={`mt-2 min-h-4 text-[10px] ${highlighted ? "text-white/40" : "text-brand-navy/40"}`}>
                        {yearly && yearlyTotal ? `Yıllık toplam ₺${formatPrice(yearlyTotal)}` : "Aylık faturalandırılır"}
                      </p>
                      {perVehicle && (
                        <p className={`mt-1 text-[10px] font-semibold ${highlighted ? "text-brand-green" : "text-brand-green-dark"}`}>{plan.maxVehicles} araçta araç başına yaklaşık ₺{formatPrice(perVehicle)}</p>
                      )}
                      {yearly && yearlySaving && (
                        <span className={`mt-3 inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold ${highlighted ? "bg-white/10 text-white/75" : "bg-brand-green/10 text-brand-green-dark"}`}>Yılda ₺{formatPrice(yearlySaving)} tasarruf</span>
                      )}
                    </>
                  ) : (
                    <>
                      <p className="text-[30px] font-extrabold leading-none tracking-[-0.03em]">Özel teklif</p>
                      <p className={`mt-2 text-[10px] ${highlighted ? "text-white/40" : "text-brand-navy/40"}`}>Filonuza ve ihtiyaçlarınıza göre</p>
                    </>
                  )}
                </div>

                <div className={`my-6 h-px ${highlighted ? "bg-white/10" : "bg-surface-border"}`} />
                <p className={`text-[10px] font-bold uppercase tracking-[0.14em] ${highlighted ? "text-white/35" : "text-brand-navy/35"}`}>{plan.featureLabel}</p>
                <ul className="mt-4 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                      <span className={`text-xs leading-relaxed ${highlighted ? "text-white/70" : "text-brand-navy/65"}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button href={plan.ctaHref ?? "/ucretsiz-dene"} variant={highlighted ? "primary" : "secondary"} className="mt-7 w-full">
                  {plan.ctaLabel ?? "21 gün ücretsiz dene"}
                </Button>
              </article>
            );
          })}
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {assurances.map((item) => (
            <span key={item} className="flex items-center gap-1.5 text-xs font-medium text-brand-navy/50"><ShieldCheck className="h-3.5 w-3.5 text-brand-green" /> {item}</span>
          ))}
        </div>
        <p className="mt-4 text-center text-[11px] text-brand-navy/35">Fiyatlara KDV dahil değildir.</p>

        <div className="mt-10">
          <button type="button" onClick={() => setShowComparison((value) => !value)} aria-expanded={showComparison} className="mx-auto flex items-center gap-2 rounded-full border border-surface-border bg-white px-5 py-2.5 text-sm font-bold text-brand-navy transition-colors hover:border-brand-navy/20">
            <CircleHelp className="h-4 w-4 text-brand-blue" /> Paket özelliklerini karşılaştır
            <ChevronDown className={`h-4 w-4 transition-transform ${showComparison ? "rotate-180" : ""}`} />
          </button>

          {showComparison && (
            <div className="mt-5 overflow-hidden rounded-[24px] border border-surface-border bg-white">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] border-collapse text-left">
                  <thead>
                    <tr className="bg-brand-navy text-white">
                      <th className="w-[36%] px-5 py-4 text-xs font-semibold">Özellik</th>
                      {plans.map((plan) => <th key={plan.name} className="px-4 py-4 text-center text-xs font-bold">{plan.name}</th>)}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-border">
                    {comparisonRows.map((row) => (
                      <tr key={row.label} className="hover:bg-surface-soft/60">
                        <td className="px-5 py-3.5 text-xs font-medium text-brand-navy/65">{row.label}</td>
                        {row.values.map((value, index) => (
                          <td key={`${row.label}-${plans[index].name}`} className="px-4 py-3.5 text-center">
                            {typeof value === "string" ? (
                              <span className="text-[11px] font-semibold text-brand-navy/65">{value}</span>
                            ) : value ? (
                              <Check className="mx-auto h-4 w-4 text-brand-green" strokeWidth={3} aria-label="Dahil" />
                            ) : (
                              <Minus className="mx-auto h-4 w-4 text-brand-navy/20" aria-label="Dahil değil" />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
