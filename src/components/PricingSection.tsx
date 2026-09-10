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

const quickPicks = [10, 30, 50, 70, 100, 150];

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

function formatPrice(value: number, locale = "tr") {
  return value.toLocaleString(locale === "en" ? "en-GB" : "tr-TR");
}

function formatPerVehicle(value: number, locale = "tr") {
  return value.toLocaleString(locale === "en" ? "en-GB" : "tr-TR", {
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  });
}

export default function PricingSection({
  title,
  showHeading = true,
  id,
  locale = "tr",
}: {
  title?: string;
  showHeading?: boolean;
  id?: string;
  locale?: "tr" | "en";
}) {
  const en = locale === "en";
  const heading = title ?? (en ? "See the price for your fleet" : "Filonuza uygun fiyatı görün");
  const featureGroups = en ? [
    { ...includedFeatureGroups[0], title: "Operations", items: ["Reservations and live timeline", "Automatic suitable vehicle suggestions", "Recommended Focus and operation risk tracking", "Fleet, handover and return management", "Maintenance and document deadline alerts", "Mobile operation screen"] },
    { ...includedFeatureGroups[1], title: "Team and permissions", items: ["Role- and page-based permissions", "Unlimited users and branches", "Multi-branch and location management", "Handover location tracking"] },
    { ...includedFeatureGroups[2], title: "Finance and reporting", items: ["Expenses, payments and core reports", "Revenue, expense and occupancy analysis", "Advanced reports by branch and vehicle"] },
    { ...includedFeatureGroups[3], title: "Data and connections", items: ["Excel / CSV import and export", "Reservation confirmation and sharing", "Global search and central notifications", "B2B / corporate partner access"] },
  ] : includedFeatureGroups;
  const [yearly, setYearly] = useState(false);
  const [vehicleCount, setVehicleCount] = useState(70);
  const [vehicleInput, setVehicleInput] = useState("70");
  function updateVehicleCount(value: number) { setVehicleCount(value); setVehicleInput(String(value)); }

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
              <Sparkles className="h-4 w-4" /> {en ? "Simple, predictable pricing" : "Sade ve öngörülebilir fiyatlandırma"}
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] text-brand-navy sm:text-4xl">{heading}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-brand-navy/55">
              {en ? "A price calculated directly from your vehicle count, without forcing you into fixed tiers. Enter your vehicle count or adjust the slider, then test your real operation for 21 days." : <>Sabit paketlere zorlanmadan, doğrudan araç sayınızdan hesaplanan bir fiyat. Araç sayınızı girin veya kaydırıcıyı filonuza göre ayarlayın, gerçek operasyonunuzu 21 gün boyunca deneyin.</>}
            </p>

            <div className="mt-7 inline-flex rounded-full border border-surface-border bg-white p-1 shadow-sm" aria-label={en ? "Billing period" : "Ödeme dönemi"}>
              <button type="button" onClick={() => setYearly(false)} aria-pressed={!yearly} className={`rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${!yearly ? "bg-brand-navy text-white" : "text-brand-navy/45 hover:text-brand-navy"}`}>{en ? "Monthly billing" : "Aylık ödeme"}</button>
              <button type="button" onClick={() => setYearly(true)} aria-pressed={yearly} className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${yearly ? "bg-brand-navy text-white" : "text-brand-navy/45 hover:text-brand-navy"}`}>
                {en ? "Annual billing" : "Yıllık ödeme"} <span className="rounded-full bg-brand-green px-2 py-0.5 text-[10px] text-white">{en ? "Save 20%" : "%20 avantaj"}</span>
              </button>
            </div>
            {yearly && <p className="mt-3 text-xs text-brand-navy/40">{en ? "The monthly equivalent is shown; payment is billed for 12 months." : "Aylık karşılık gösterilir; ödeme 12 aylık olarak faturalandırılır."}</p>}
          </div>
        )}

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-col rounded-[24px] border border-surface-border bg-white p-6 sm:p-8">
            <div className="flex items-baseline justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-brand-navy/40">{en ? "How many vehicles are in your fleet?" : "Filonuzda kaç araç var?"}</span>
              <label className="flex items-center gap-2 text-sm font-semibold">
                <span className="sr-only">{en ? "Enter vehicle count" : "Araç sayısını yazın"}</span>
                <input type="number" min={1} max={SELF_SERVICE_MAX_VEHICLES} step={1} value={vehicleInput}
                  onChange={(event) => { const raw = event.target.value; setVehicleInput(raw); const n = Number(raw); if (raw && Number.isInteger(n) && n >= 1 && n <= SELF_SERVICE_MAX_VEHICLES) setVehicleCount(n); }}
                  onBlur={() => setVehicleInput(String(vehicleCount))}
                  aria-invalid={vehicleInput !== "" && (!Number.isInteger(Number(vehicleInput)) || Number(vehicleInput) < 1 || Number(vehicleInput) > SELF_SERVICE_MAX_VEHICLES)}
                  className="min-h-11 w-24 rounded-lg border border-surface-border px-3 text-xl font-bold" />
                {en ? "vehicles" : "araç"}
              </label>
            </div>
            <input
              type="range"
              min={1}
              max={SELF_SERVICE_MAX_VEHICLES}
              value={vehicleCount}
              onChange={(event) => updateVehicleCount(Number(event.target.value))}
              className="mt-4 h-2 w-full cursor-pointer accent-brand-green"
              aria-label={en ? "Vehicle count" : "Araç sayısı"}
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
                  onClick={() => updateVehicleCount(n)}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                    vehicleCount === n
                      ? "border-brand-green bg-brand-green text-white"
                      : "border-surface-border bg-surface-soft text-brand-navy/60 hover:border-brand-green/40 hover:text-brand-green-dark"
                  }`}
                >
                  {n} {en ? "vehicles" : "araç"}
                </button>
              ))}
            </div>

            <p className="mt-2 text-xs text-brand-navy/60">{en ? "Enter a whole number from 1 to 150; request a quote above 150. The last valid price is retained after invalid input." : "1–150 tam araç sayısı girin; 150 üzeri için teklif alın. Geçersiz girişte son geçerli fiyat korunur."}</p>
            <p className="mt-6 border-t border-surface-border pt-5 text-xs leading-relaxed text-brand-navy/50">
              {en ? "Pricing is calculated directly from vehicle count: a small base fee plus a per-vehicle rate that decreases as the fleet grows. Every fleet receives the same core feature set—there is no locked premium tier. RentOkey Pilot and other optional modules are selected separately." : <>Fiyat, sabit bir pakete zorlanmadan doğrudan araç sayınızdan hesaplanır: küçük bir taban ücrete, filonuz büyüdükçe düşen bir araç başı ücret eklenir. Tüm temel ürün özellikleri her araç sayısında aynıdır — kilitli bir &ldquo;üst paket&rdquo; yoktur. RentOkey Pilot ve diğer opsiyonel ek modüller ayrıca seçilir.</>}{" "}
              <a href={en ? "#contact" : "#iletisim"} className="font-semibold text-brand-navy underline underline-offset-2">
                {en ? `More than ${SELF_SERVICE_MAX_VEHICLES} vehicles? Contact us.` : <>{SELF_SERVICE_MAX_VEHICLES}&apos;den fazla aracınız mı var? Bize ulaşın.</>}
              </a>
            </p>
          </div>

          <div className="flex flex-col rounded-[24px] border border-surface-border bg-white p-6 sm:p-8">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-green/10 px-3 py-1 text-xs font-bold text-brand-green-dark">
              <Check className="h-3.5 w-3.5" /> {en ? "All core features included" : "Tüm temel özellikler dahil"}
            </span>

            {price !== null ? (
              <>
                <div className="mt-4 flex items-end gap-1">
                  <span className="pb-1 text-lg font-bold text-brand-navy/60">₺</span>
                  <span className="text-[42px] font-extrabold leading-none tracking-[-0.04em] text-brand-navy">{formatPrice(price, locale)}</span>
                  <span className="pb-1 text-sm text-brand-navy/40">{en ? "/ month" : "/ ay"}</span>
                </div>
                <p className="mt-2 text-[11px] text-brand-navy/40">
                  {yearly && yearlyTotal ? (en ? `Annual total ₺${formatPrice(yearlyTotal, locale)}` : `Yıllık toplam ₺${formatPrice(yearlyTotal, locale)}`) : (en ? "Billed monthly" : "Aylık faturalandırılır")} · {en ? "VAT excluded" : "KDV hariç"}
                </p>
                {perVehicle !== null && (
                  <div className="mt-4 flex items-center justify-between rounded-xl bg-surface-soft px-3.5 py-3 text-sm">
                    <span className="text-brand-navy/55">{en ? "Effective price per vehicle" : "Efektif araç başı ücret"}</span>
                    <span className="font-bold text-brand-navy">₺{formatPerVehicle(perVehicle, locale)} / {en ? "vehicle" : "araç"}</span>
                  </div>
                )}
                {yearly && yearlySaving && (
                  <span className="mt-3 inline-flex w-fit rounded-full bg-brand-green/10 px-2.5 py-1 text-[11px] font-bold text-brand-green-dark">
                    {en ? `Save ₺${formatPrice(yearlySaving, locale)} per year` : `Yılda ₺${formatPrice(yearlySaving, locale)} tasarruf`}
                  </span>
                )}

                <div className="mt-5 flex flex-col gap-1.5 border-t border-surface-border pt-5 text-xs">
                  {breakdown.map((row) => (
                    <div key={row.label} className="flex justify-between text-brand-navy/50">
                      <span>{en ? row.label.replace("Taban ücret", "Base fee").replace(". araç", " vehicle") : row.label}</span>
                      <span className="font-semibold text-brand-navy/70">₺{formatPrice(row.amount, locale)}</span>
                    </div>
                  ))}
                  {yearly && <div className="flex justify-between text-brand-green-dark"><span>{en ? "Annual billing discount (20%)" : "Yıllık ödeme indirimi (%20)"}</span><span>−₺{formatPrice((monthlyPrice ?? 0) - (price ?? 0), locale)}</span></div>}
                  <div className="mt-1 flex justify-between border-t border-dashed border-surface-border pt-2 text-[13px] font-extrabold text-brand-navy">
                    <span>{yearly ? (en ? "Discounted monthly equivalent" : "İndirimli aylık karşılık") : (en ? "Total / month" : "Toplam / ay")}</span>
                    <span>₺{formatPrice(price ?? 0, locale)}</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p className="mt-4 text-[30px] font-extrabold leading-none tracking-[-0.03em] text-brand-navy">{en ? "Custom quote" : "Özel teklif"}</p>
                <p className="mt-2 text-[11px] text-brand-navy/40">{en ? "Based on your fleet and requirements" : "Filonuza ve ihtiyaçlarınıza göre"}</p>
              </>
            )}

            <Button href={price !== null ? (en ? "/en/free-trial" : "/ucretsiz-dene") : (en ? "/en#contact" : "/#iletisim")} className="mt-7 w-full">
              {price !== null ? (en ? "Try free for 21 days" : "21 gün ücretsiz dene") : (en ? "Contact us" : "Bize ulaşın")}
            </Button>
          </div>
        </div>

        <div className="mt-14">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-navy/35">{en ? "What you get" : "Ne alıyorsunuz"}</p>
            <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.03em] text-brand-navy sm:text-[28px]">
              {en ? "Included in the core subscription" : "Temel aboneliğe dahil olanlar"}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-navy/50">
              {en ? "A fleet of one vehicle and a fleet of 150 use the same core feature set. There is no locked premium tier: everything below is included in the core subscription. Add optional modules only when you need them." : <>1 araçlık bir filo da, 150 araçlık bir filo da aynı temel özellik setini kullanır. Kilitli bir &ldquo;üst paket&rdquo; yok — aşağıdakilerin tamamı temel aboneliğe dahildir. Opsiyonel ek modülleri yalnızca ihtiyacınız olduğunda eklersiniz.</>}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featureGroups.map((group) => {
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

        <div className="mt-6 flex flex-col gap-5 rounded-2xl border border-brand-green/25 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="text-xs font-bold text-brand-green-dark">{en ? "Optional · Not included in the core subscription" : "İsteğe bağlı · Temel aboneliğe dahil değil"}</p><h3 className="mt-1 text-xl font-extrabold text-brand-navy">RentOkey Pilot</h3><p className="mt-2 max-w-2xl text-sm text-brand-navy/65">{en ? "Operation optimisation and smart pricing suggestions in one add-on. Ask our team about pricing and trial scope." : "Operasyon optimizasyonu ve akıllı fiyat önerisi tek ek pakette. Fiyat ve deneme kapsamını ekibimizden öğrenin."}</p></div>
          <Button href={en ? "/en/pilot" : "/okey-pilot"} variant="secondary" className="shrink-0">{en ? "Scope and pricing" : "Kapsam ve fiyat bilgisi"}</Button>
        </div>

        <div className="mt-6 overflow-hidden rounded-[24px] bg-brand-navy p-7 text-white sm:p-9">
          <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green/15 px-3 py-1 text-[11px] font-bold text-brand-green">
                <Headphones className="h-3.5 w-3.5" /> {en ? "Independent of vehicle count · optional service" : enterpriseSupport.description}
              </span>
              <h3 className="mt-3 text-2xl font-extrabold tracking-[-0.02em]">{en ? "Corporate Support" : enterpriseSupport.name}</h3>
              <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-white/55">
                {en ? "A 30-vehicle multi-branch fleet and a 150-vehicle fleet can add it in the same way—operational complexity, not vehicle count, determines the need." : <>30 araçlık ama çok şubeli bir filo da, 150 araçlık bir filo da aynı şekilde ekleyebilir — araç sayınız değil, operasyonunuzun karmaşıklığı belirler.</>}
              </p>
              <Button href={en ? "/en#contact" : enterpriseSupport.ctaHref} variant="secondary" className="mt-6">
                {en ? "Contact us" : enterpriseSupport.ctaLabel}
              </Button>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {(en ? ["Dedicated support manager and priority SLA", "Guided onboarding, tailored data migration and setup support", "Reporting and permission-scope consulting when needed", "Priority early access to new roadmap modules"] : enterpriseSupport.features).map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 rounded-2xl bg-white/[0.06] p-4">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" strokeWidth={3} />
                  <span className="text-xs leading-relaxed text-white/75">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {(en ? ["Try free for 21 days", "No credit card", "No setup fee", "Import your own data with ready CSV templates"] : assurances).map((item) => (
            <span key={item} className="flex items-center gap-1.5 text-xs font-medium text-brand-navy/50"><ShieldCheck className="h-3.5 w-3.5 text-brand-green" /> {item}</span>
          ))}
        </div>
        <p className="mt-4 text-center text-[11px] text-brand-navy/35">
          {en ? `Prices exclude VAT. The base fee is ₺${formatPrice(BASE_FEE, locale)}/month and increases progressively with vehicle count.` : <>Fiyatlara KDV dahil değildir. Taban ücret ₺{formatPrice(BASE_FEE, locale)}/ay olup araç sayınıza göre kademeli olarak artar.</>}
        </p>
      </div>
    </section>
  );
}
