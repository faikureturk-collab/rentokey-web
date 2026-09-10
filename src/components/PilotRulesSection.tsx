import {
  ArrowRightLeft,
  BadgeDollarSign,
  CalendarCheck2,
  CarFront,
  CircleGauge,
  CircleHelp,
  Clock3,
  Info,
  MapPinned,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { pilotRuleGroups, type PilotRuleMode } from "@/lib/pilot-rules";

const ruleIcons: Record<string, LucideIcon> = {
  "preparation-time": Clock3,
  "maintenance-conflict": Wrench,
  "category-capacity": CarFront,
  "branch-transfer": MapPinned,
  "hourly-capacity": CircleGauge,
  "idle-vehicle": CalendarCheck2,
  "price-anomaly": BadgeDollarSign,
  "monthly-renewal": ArrowRightLeft,
  "expense-anomaly": Info,
  "mileage-balance": CircleGauge,
};

const modeStyle: Record<PilotRuleMode, string> = {
  action: "bg-brand-green/10 text-brand-green-dark",
  checklist: "bg-brand-blue/10 text-brand-blue",
  information: "bg-brand-navy/7 text-brand-navy/60",
};

export default function PilotRulesSection({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const en = locale === "en";
  const modeLabel: Record<PilotRuleMode, string> = en
    ? { action: "Actionable suggestion", checklist: "Checklist", information: "Information" }
    : { action: "Uygulanabilir öneri", checklist: "Kontrol listesi", information: "Bilgilendirme" };

  return (
    <>
      <section className="bg-white">
        <div className="container-page py-16 sm:py-24">
          <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-green-dark">{en ? "Rule engine" : "Öneri kural motoru"}</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-brand-navy sm:text-4xl">{en ? "Ten operational signals, grouped by the decision they support." : "On operasyon sinyali, desteklediği karara göre gruplanır."}</h2>
            </div>
            <div>
              <p className="text-base leading-relaxed text-brand-navy/60">{en ? "RentOkey Pilot checks reservation, vehicle, maintenance, pricing, branch-capacity and mileage data against defined operational rules. It shows the reason and the available response for each result." : "RentOkey Pilot; rezervasyon, araç, bakım, fiyat, şube kapasitesi ve kilometre verilerini tanımlı operasyon kurallarıyla tarar. Her sonuçta nedeni ve uygulanabilecek karşılığı gösterir."}</p>
              <p className="mt-3 flex items-start gap-2 text-sm font-semibold leading-relaxed text-brand-navy/70"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-dark" />{en ? "Suggested changes wait for user approval. Information-only signals do not trigger an action." : "Önerilen değişiklikler kullanıcı onayı bekler. Bilgilendirme sinyalleri herhangi bir işlem başlatmaz."}</p>
            </div>
          </div>

          <div className="mt-12 space-y-10">
            {pilotRuleGroups[locale].map((group) => (
              <section key={group.id} aria-labelledby={`pilot-group-${group.id}`}>
                <div className="max-w-3xl">
                  <h3 id={`pilot-group-${group.id}`} className="text-xl font-extrabold text-brand-navy sm:text-2xl">{group.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-navy/55">{group.description}</p>
                </div>
                <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {group.rules.map((rule) => {
                    const Icon = ruleIcons[rule.id] ?? CircleHelp;
                    return (
                      <article key={rule.id} className="rounded-[22px] border border-surface-border bg-surface-soft/45 p-6">
                        <div className="flex items-start justify-between gap-4">
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand-blue shadow-sm"><Icon className="h-5 w-5" /></span>
                          <span className={`rounded-full px-3 py-1 text-xs font-bold ${modeStyle[rule.mode]}`}>{modeLabel[rule.mode]}</span>
                        </div>
                        <h4 className="mt-5 text-base font-extrabold text-brand-navy">{rule.title}</h4>
                        <p className="mt-2.5 text-sm leading-relaxed text-brand-navy/55">{rule.description}</p>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-surface-border bg-surface-soft/55">
        <div className="container-page py-16 sm:py-24">
          <div className="overflow-hidden rounded-[28px] bg-brand-navy-deep p-7 text-white sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-green/15 px-3 py-1.5 text-xs font-bold text-brand-green"><Sparkles className="h-4 w-4" />{en ? "Coming soon · LLM-assisted" : "Yakında · LLM destekli"}</span>
                <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-[-0.035em] sm:text-4xl">{en ? "Ask a scenario in your own words." : "Senaryoyu kendi cümlenizle sorun."}</h2>
                <p className="mt-4 text-base leading-relaxed text-white/65">{en ? "The free-text operations simulator is planned as Pilot’s next capability. Before a change is applied, it will explain which reservations and vehicles may be affected and how preparation times may change." : "Serbest metin operasyon simülatörü, Pilot’un bir sonraki yeteneği olarak planlanıyor. Bir değişiklik uygulanmadan önce hangi rezervasyonların ve araçların etkilenebileceğini, hazırlık sürelerinin nasıl değişebileceğini açıklayacak."}</p>
              </div>
              <div className="space-y-3" aria-label={en ? "Planned simulator question examples" : "Planlanan simülatör soru örnekleri"}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5"><MessageSquareText className="h-5 w-5 text-brand-green" /><p className="mt-3 text-sm font-semibold leading-relaxed text-white/80">{en ? "“What happens to reservations if the Egea goes to service tomorrow?”" : "“Egea yarın servise giderse rezervasyonlara ne olur?”"}</p></div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5"><MessageSquareText className="h-5 w-5 text-brand-green" /><p className="mt-3 text-sm font-semibold leading-relaxed text-white/80">{en ? "“What changes if I increase weekend prices by 10%?”" : "“Hafta sonu fiyatlarını %10 artırırsam ne değişir?”"}</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
