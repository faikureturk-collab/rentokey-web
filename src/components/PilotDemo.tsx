"use client";

import { useState } from "react";
import { CheckCircle2, RotateCcw } from "lucide-react";
import { formatTry, pilotDemo } from "@/lib/pilot-demo";

export default function PilotDemo({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const en = locale === "en";
  const [selected, setSelected] = useState<string[]>(pilotDemo.actions.map((item) => item.id));
  const [stage, setStage] = useState<"edit" | "confirm" | "done">("edit");
  const total = pilotDemo.actions.filter((item) => selected.includes(item.id)).reduce((sum, item) => sum + item.amount, 0);
  const actionCopy: Record<string, { title: string; reason: string; calculation: string; kind: string }> = {
    assignment: { title: "Reassign 3 reservations to suitable vehicle classes", reason: "Suitable alternatives in the same branch replace vehicles with maintenance conflicts", calculation: "3 reservations × 4 days × TRY 2,400", kind: "Protectable revenue" },
    transfer: { title: "Use a ready alternative for a handover with insufficient transfer time", reason: "Fulfil the 5-day reservation without changing the customer’s handover time", calculation: "1 reservation × 5 days × TRY 3,200", kind: "Protectable revenue" },
    pricing: { title: "Reduce the 3-day price by 8% for 2 idle vehicles", reason: "Smart pricing suggestion · Only if two new reservations occur", calculation: "2 vehicles × 3 days × TRY 1,840 (instead of TRY 2,000)", kind: "Conditional new revenue" },
  };
  function reset() { setSelected(pilotDemo.actions.map((item) => item.id)); setStage("edit"); }
  return (
    <div className="rounded-2xl border border-surface-border bg-white p-5 text-brand-navy sm:p-6">
      <p className="text-xs font-bold uppercase tracking-wider text-brand-green-dark">70 {en ? "vehicles" : "araç"} · {en ? "7 days" : pilotDemo.period} · {en ? "Illustrative scenario" : "Örnek senaryo"}</p>
      <h3 className="mt-2 text-3xl font-extrabold tracking-tight">{formatTry(total)} <span className="block text-base font-semibold">{en ? "reservation revenue potential" : "rezervasyon geliri potansiyeli"}</span></h3>
      <p className="mt-2 text-sm text-brand-navy/65">{en ? "Select suggestions and see how the hypothetical plan changes." : "Önerileri seçin; varsayımsal planın nasıl değiştiğini görün."}</p>
      <fieldset disabled={stage !== "edit"} className="mt-5 space-y-2 disabled:opacity-80">
        <legend className="sr-only">{en ? "Illustrative plan suggestions" : "Örnek plan önerileri"}</legend>
        {pilotDemo.actions.map((item) => {
          const copy = en ? actionCopy[item.id] : item;
          return (
          <label key={item.id} className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3 ${selected.includes(item.id) ? "border-brand-green/35 bg-brand-green/5" : "border-surface-border"}`}>
            <input type="checkbox" checked={selected.includes(item.id)} onChange={() => setSelected((prev) => prev.includes(item.id) ? prev.filter((id) => id !== item.id) : [...prev, item.id])} className="mt-1 h-5 w-5 shrink-0 accent-brand-green" />
            <span className="min-w-0"><span className="block text-sm font-bold">{copy.title}</span><span className="mt-1 block text-xs text-brand-navy/65">{copy.reason}</span><span className="mt-2 block text-sm font-bold text-brand-green-dark">{formatTry(item.amount)} <span className="text-xs font-medium">· {copy.kind}</span></span><span className="block text-xs text-brand-navy/65">{copy.calculation}</span></span>
          </label>
        )})}
      </fieldset>
      <div className="mt-4 grid grid-cols-2 gap-2 rounded-xl bg-surface-soft p-3 text-sm" aria-live="polite" aria-atomic="true">
        <div><p className="text-xs text-brand-navy/65">{en ? "Current scenario" : "Mevcut senaryo"}</p><strong>{formatTry(pilotDemo.baseline)}</strong></div>
        <div><p className="text-xs text-brand-navy/65">{en ? "If selected actions succeed" : "Seçilenler gerçekleşirse"}</p><strong className="text-brand-green-dark">{formatTry(pilotDemo.baseline + total)}</strong></div>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-brand-navy/65">{en ? "Gross reservation amounts excluding VAT; costs have not been deducted. The current scenario assumes at-risk reservations are lost. New rentals and revenue increases are not guaranteed." : "KDV hariç brüt rezervasyon tutarlarıdır; maliyetler düşülmemiştir. Mevcut senaryoda riskli rezervasyonların kaybedildiği varsayılır. Yeni kiralama ve gelir artışı garanti edilmez."}</p>
      <p className="mt-3 border-t border-surface-border pt-3 text-xs text-brand-navy/65">{en ? "Separate collection tracking: " : "Ayrı tahsilat takibi: "}<strong>{formatTry(pilotDemo.outstanding)} {en ? "outstanding." : "açık bakiye."}</strong> {en ? "This is an existing receivable and is not included in the difference above." : "Mevcut alacaktır; yukarıdaki farka dahil edilmez."}</p>
      {stage === "edit" && <button type="button" disabled={!selected.length} onClick={() => setStage("confirm")} className="mt-4 min-h-11 w-full rounded-xl bg-brand-green px-4 py-3 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-45">{en ? `Preview sample plan (${selected.length} suggestions)` : `Örnek planı önizle (${selected.length} öneri)`}</button>}
      {stage === "confirm" && <div className="mt-4 rounded-xl border border-brand-blue/20 bg-brand-blue/5 p-4" role="status"><p className="text-sm font-semibold">{en ? `Apply ${selected.length} suggestions in this demo?` : `${selected.length} öneriyi bu demoda uygulamak istiyor musunuz?`}</p><p className="mt-1 text-xs">{en ? "No real vehicle, price or task will change." : "Gerçek araç, fiyat veya görev değişmez."}</p><div className="mt-3 flex flex-wrap gap-2"><button type="button" onClick={() => setStage("done")} className="min-h-11 rounded-lg bg-brand-green px-4 text-sm font-bold text-white">{en ? "Confirm in demo" : "Demoda onayla"}</button><button type="button" onClick={() => setStage("edit")} className="min-h-11 rounded-lg border border-surface-border bg-white px-4 text-sm">{en ? "Go back" : "Geri dön"}</button></div></div>}
      {stage === "done" && <div className="mt-4 rounded-xl bg-brand-green/10 p-4" role="status"><p className="flex items-center gap-2 text-sm font-bold"><CheckCircle2 className="h-5 w-5" /> {en ? "Sample plan updated" : "Örnek plan güncellendi"}</p><p className="mt-1 text-xs">{en ? `Demo approval completed for ${selected.length} selected suggestions. No data was sent to the live application.` : `Seçili ${selected.length} öneri için demo onayı tamamlandı. Canlı uygulamaya veri gönderilmedi.`}</p><button type="button" onClick={reset} className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-bold"><RotateCcw className="h-4 w-4" /> {en ? "Reset scenario" : "Senaryoyu sıfırla"}</button></div>}
    </div>
  );
}
