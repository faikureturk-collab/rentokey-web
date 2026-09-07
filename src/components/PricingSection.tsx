"use client";

import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { CalendarClock, Check, CircleDollarSign, Headphones, Share2, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import Button from "./Button";
import {
  BASE_FEE,
  SELF_SERVICE_MAX_VEHICLES,
  YEARLY_DISCOUNT,
  computeMonthlyPrice,
  computePriceBreakdown,
  enterpriseSupport,
  includedFeatureGroups,
  type FeatureGroup,
} from "@/lib/pricing";

const quickPicks = [1, 10, 31, 40, 100, 150];

const groupIcons: Record<FeatureGroup["key"], LucideIcon> = {
  operasyon: CalendarClock,
  ekip: UsersRound,
  finans: CircleDollarSign,
  veri: Share2,
};

const groupAccents: Record<FeatureGroup["key"], string> = {
  operasyon: "bg-brand-blue/10 text-brand-blue",
  ekip: "bg-brand-green/10 text-brand-green-dark",
  finans: "bg-amber-50 text-amber-600",
  veri: "bg-[#705DE8]/10 text-[#705DE8]",
};

const assurances = [
  "21 gün ücretsiz deneyin",
  "Kredi kartı gerekmez",
  "Kurulum ücreti yok",
  "Hazır CSV şablonlarıyla kendi verinizi aktarın",
];

function formatPrice(value: number) {
  return value.toLocaleString("tr-TR");
}

function formatPerVehicle(value: number) {
  return value.toLocaleString("tr-TR", {
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  });
}

export default function PricingSection({
  title = "Filonuza uygun fiyatı görün",
  showHeading = true,
  id,
}: {
  title?: string;
  showHeading?: boolean;
  id?: string;
}) {
  const [yearly, setYearly] = useState(false);
  const [vehicleCount, setVehicleCount] = useState(40);

  const monthlyPrice = computeMonthlyPrice(vehicleCount);
  const breakdown = useMemo(() => computePriceBreakdown(vehicleCount), [vehicleCount]);
  const price = monthlyPrice === null ? null : yearly ? Math.round(monthlyPrice * (1 - YEARLY_DISCOUNT)) : monthlyPrice;
  const perVehicle = price !== null ? price / vehicleCount : null;
  const yearlyTotal = monthlyPrice !== null ? Math.round(monthlyPrice * (1 - YEARLY_DISCOUNT) * 12) : null;
  const yearlySaving = monthlyPrice !== null ? Math.round(monthlyPrice * YEARLY_DISCOUNT * 12) : null;

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
              Sabit paketlere zorlanmadan, doğrudan araç sayınızdan hesaplanan bir fiyat. Kaydırıcıyı
              filonuza göre ayarlayın, gerçek operasyonunuzu 21 gün boyunca deneyin.
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

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-col rounded-[24px] border border-surface-border bg-white p-6 sm:p-8">
            <div className="flex items-baseline justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-brand-navy/40">Filonuzda kaç araç var?</span>
              <span className="text-2xl font-extrabold tracking-[-0.02em] text-brand-navy">
                {vehicleCount} <span className="text-sm font-semibold text-brand-navy/40">araç</span>
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={SELF_SERVICE_MAX_VEHICLES}
              value={vehicleCount}
              onChange={(event) => setVehicleCount(Number(event.target.value))}
              className="mt-4 h-2 w-full cursor-pointer accent-brand-green"
              aria-label="Araç sayısı"
            />
            <div className="flex justify-between text-[11px] text-brand-navy/40">
              <span>1</span>
              <span>{SELF_SERVICE_MAX_VEHICLES}</span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {quickPicks.map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setVehicleCount(n)}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                    vehicleCount === n
                      ? "border-brand-green bg-brand-green text-white"
                      : "border-surface-border bg-surface-soft text-brand-navy/60 hover:border-brand-green/40 hover:text-brand-green-dark"
                  }`}
                >
                  {n} araç
                </button>
              ))}
            </div>

            <p className="mt-6 border-t border-surface-border pt-5 text-xs leading-relaxed text-brand-navy/50">
              Fiyat, sabit bir pakete zorlanmadan doğrudan araç sayınızdan hesaplanır: küçük bir taban
              ücrete, filonuz büyüdükçe düşen bir araç başı ücret eklenir. Tüm ürün özellikleri her
              araç sayısında aynıdır — kilitli bir &ldquo;üst paket&rdquo; yoktur.{" "}
              <a href="#iletisim" className="font-semibold text-brand-navy underline underline-offset-2">
                {SELF_SERVICE_MAX_VEHICLES}&apos;den fazla aracınız mı var? Bize ulaşın.
              </a>
            </p>
          </div>

          <div className="flex flex-col rounded-[24px] border border-surface-border bg-white p-6 sm:p-8">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-green/10 px-3 py-1 text-xs font-bold text-brand-green-dark">
              <Check className="h-3.5 w-3.5" /> Tüm özellikler dahil
            </span>

            {price !== null ? (
              <>
                <div className="mt-4 flex items-end gap-1">
                  <span className="pb-1 text-lg font-bold text-brand-navy/60">₺</span>
                  <span className="text-[42px] font-extrabold leading-none tracking-[-0.04em] text-brand-navy">{formatPrice(price)}</span>
                  <span className="pb-1 text-sm text-brand-navy/40">/ ay</span>
                </div>
                <p className="mt-2 text-[11px] text-brand-navy/40">
                  {yearly && yearlyTotal ? `Yıllık toplam ₺${formatPrice(yearlyTotal)}` : "Aylık faturalandırılır"} · KDV hariç
                </p>
                {perVehicle !== null && (
                  <div className="mt-4 flex items-center justify-between rounded-xl bg-surface-soft px-3.5 py-3 text-sm">
                    <span className="text-brand-navy/55">Efektif araç başı ücret</span>
                    <span className="font-bold text-brand-navy">₺{formatPerVehicle(perVehicle)} / araç</span>
                  </div>
                )}
                {yearly && yearlySaving && (
                  <span className="mt-3 inline-flex w-fit rounded-full bg-brand-green/10 px-2.5 py-1 text-[11px] font-bold text-brand-green-dark">
                    Yılda ₺{formatPrice(yearlySaving)} tasarruf
                  </span>
                )}

                <div className="mt-5 flex flex-col gap-1.5 border-t border-surface-border pt-5 text-xs">
                  {breakdown.map((row) => (
                    <div key={row.label} className="flex justify-between text-brand-navy/50">
                      <span>{row.label}</span>
                      <span className="font-semibold text-brand-navy/70">₺{formatPrice(row.amount)}</span>
                    </div>
                  ))}
                  <div className="mt-1 flex justify-between border-t border-dashed border-surface-border pt-2 text-[13px] font-extrabold text-brand-navy">
                    <span>Toplam / ay</span>
                    <span>₺{formatPrice(monthlyPrice ?? 0)}</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p className="mt-4 text-[30px] font-extrabold leading-none tracking-[-0.03em] text-brand-navy">Özel teklif</p>
                <p className="mt-2 text-[11px] text-brand-navy/40">Filonuza ve ihtiyaçlarınıza göre</p>
              </>
            )}

            <Button href={price !== null ? "/ucretsiz-dene" : "/#iletisim"} className="mt-7 w-full">
              {price !== null ? "21 gün ücretsiz dene" : "Bize ulaşın"}
            </Button>
          </div>
        </div>

        <div className="mt-14">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-navy/35">Ne alıyorsunuz</p>
            <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.03em] text-brand-navy sm:text-[28px]">
              Bu fiyata tam olarak dahil olanlar
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-navy/50">
              1 araçlık bir filo da, 150 araçlık bir filo da aynı özellik setini kullanır. Kilitli bir
              &ldquo;üst paket&rdquo; yok — aşağıdakilerin tamamı fiyata dahildir.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {includedFeatureGroups.map((group) => {
              const Icon = groupIcons[group.key];
              return (
                <div key={group.key} className="rounded-[20px] border border-surface-border bg-white p-6">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${groupAccents[group.key]}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <h4 className="mt-5 text-sm font-extrabold text-brand-navy">{group.title}</h4>
                  <ul className="mt-3.5 space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-green" strokeWidth={3} />
                        <span className="text-xs leading-relaxed text-brand-navy/60">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-[24px] bg-brand-navy p-7 text-white sm:p-9">
          <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green/15 px-3 py-1 text-[11px] font-bold text-brand-green">
                <Headphones className="h-3.5 w-3.5" /> {enterpriseSupport.description}
              </span>
              <h3 className="mt-3 text-2xl font-extrabold tracking-[-0.02em]">{enterpriseSupport.name}</h3>
              <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-white/55">
                30 araçlık ama çok şubeli bir filo da, 150 araçlık bir filo da aynı şekilde ekleyebilir —
                araç sayınız değil, operasyonunuzun karmaşıklığı belirler.
              </p>
              <Button href={enterpriseSupport.ctaHref} variant="secondary" className="mt-6">
                {enterpriseSupport.ctaLabel}
              </Button>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {enterpriseSupport.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 rounded-2xl bg-white/[0.06] p-4">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" strokeWidth={3} />
                  <span className="text-xs leading-relaxed text-white/75">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {assurances.map((item) => (
            <span key={item} className="flex items-center gap-1.5 text-xs font-medium text-brand-navy/50"><ShieldCheck className="h-3.5 w-3.5 text-brand-green" /> {item}</span>
          ))}
        </div>
        <p className="mt-4 text-center text-[11px] text-brand-navy/35">
          Fiyatlara KDV dahil değildir. Taban ücret ₺{formatPrice(BASE_FEE)}/ay olup araç sayınıza göre kademeli olarak artar.
        </p>
      </div>
    </section>
  );
}
