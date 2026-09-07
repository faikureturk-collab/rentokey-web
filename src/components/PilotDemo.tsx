"use client";

import { useState } from "react";
import { CheckCircle2, RotateCcw } from "lucide-react";
import { formatTry, pilotDemo } from "@/lib/pilot-demo";

export default function PilotDemo() {
  const [selected, setSelected] = useState<string[]>(pilotDemo.actions.map((item) => item.id));
  const [stage, setStage] = useState<"edit" | "confirm" | "done">("edit");
  const total = pilotDemo.actions.filter((item) => selected.includes(item.id)).reduce((sum, item) => sum + item.amount, 0);
  function reset() { setSelected(pilotDemo.actions.map((item) => item.id)); setStage("edit"); }
  return (
    <div className="rounded-2xl border border-surface-border bg-white p-5 text-brand-navy sm:p-6">
      <p className="text-xs font-bold uppercase tracking-wider text-brand-green-dark">70 araç · {pilotDemo.period} · Örnek senaryo</p>
      <h3 className="mt-2 text-3xl font-extrabold tracking-tight">{formatTry(total)} <span className="block text-base font-semibold">rezervasyon geliri potansiyeli</span></h3>
      <p className="mt-2 text-sm text-brand-navy/65">Önerileri seçin; varsayımsal planın nasıl değiştiğini görün.</p>
      <fieldset disabled={stage !== "edit"} className="mt-5 space-y-2 disabled:opacity-80">
        <legend className="sr-only">Örnek plan önerileri</legend>
        {pilotDemo.actions.map((item) => (
          <label key={item.id} className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3 ${selected.includes(item.id) ? "border-brand-green/35 bg-brand-green/5" : "border-surface-border"}`}>
            <input type="checkbox" checked={selected.includes(item.id)} onChange={() => setSelected((prev) => prev.includes(item.id) ? prev.filter((id) => id !== item.id) : [...prev, item.id])} className="mt-1 h-5 w-5 shrink-0 accent-brand-green" />
            <span className="min-w-0"><span className="block text-sm font-bold">{item.title}</span><span className="mt-1 block text-xs text-brand-navy/65">{item.reason}</span><span className="mt-2 block text-sm font-bold text-brand-green-dark">{formatTry(item.amount)} <span className="text-xs font-medium">· {item.kind}</span></span><span className="block text-xs text-brand-navy/65">{item.calculation}</span></span>
          </label>
        ))}
      </fieldset>
      <div className="mt-4 grid grid-cols-2 gap-2 rounded-xl bg-surface-soft p-3 text-sm" aria-live="polite" aria-atomic="true">
        <div><p className="text-xs text-brand-navy/65">Mevcut senaryo</p><strong>{formatTry(pilotDemo.baseline)}</strong></div>
        <div><p className="text-xs text-brand-navy/65">Seçilenler gerçekleşirse</p><strong className="text-brand-green-dark">{formatTry(pilotDemo.baseline + total)}</strong></div>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-brand-navy/65">KDV hariç brüt rezervasyon tutarlarıdır; maliyetler düşülmemiştir. Mevcut senaryoda riskli rezervasyonların kaybedildiği varsayılır. Yeni kiralama ve gelir artışı garanti edilmez.</p>
      <p className="mt-3 border-t border-surface-border pt-3 text-xs text-brand-navy/65">Ayrı tahsilat takibi: <strong>{formatTry(pilotDemo.outstanding)} açık bakiye.</strong> Mevcut alacaktır; yukarıdaki farka dahil edilmez.</p>
      {stage === "edit" && <button type="button" disabled={!selected.length} onClick={() => setStage("confirm")} className="mt-4 min-h-11 w-full rounded-xl bg-brand-green px-4 py-3 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-45">Örnek planı önizle ({selected.length} öneri)</button>}
      {stage === "confirm" && <div className="mt-4 rounded-xl border border-brand-blue/20 bg-brand-blue/5 p-4" role="status"><p className="text-sm font-semibold">{selected.length} öneriyi bu demoda uygulamak istiyor musunuz?</p><p className="mt-1 text-xs">Gerçek araç, fiyat veya görev değişmez.</p><div className="mt-3 flex flex-wrap gap-2"><button type="button" onClick={() => setStage("done")} className="min-h-11 rounded-lg bg-brand-green px-4 text-sm font-bold text-white">Demoda onayla</button><button type="button" onClick={() => setStage("edit")} className="min-h-11 rounded-lg border border-surface-border bg-white px-4 text-sm">Geri dön</button></div></div>}
      {stage === "done" && <div className="mt-4 rounded-xl bg-brand-green/10 p-4" role="status"><p className="flex items-center gap-2 text-sm font-bold"><CheckCircle2 className="h-5 w-5" /> Örnek plan güncellendi</p><p className="mt-1 text-xs">Seçili {selected.length} öneri için demo onayı tamamlandı. Canlı uygulamaya veri gönderilmedi.</p><button type="button" onClick={reset} className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-bold"><RotateCcw className="h-4 w-4" /> Senaryoyu sıfırla</button></div>}
    </div>
  );
}
