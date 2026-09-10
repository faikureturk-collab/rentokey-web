"use client";

import { useState } from "react";
import { pilotDemo } from "@/lib/pilot-demo";
import { englishPilotActions } from "@/lib/english";

export default function EnglishPilotDemo() {
  const [selected, setSelected] = useState(pilotDemo.actions.map(a => a.id));
  const [preview, setPreview] = useState(false);
  const [applied, setApplied] = useState(false);
  const total = pilotDemo.actions.filter(a => selected.includes(a.id)).reduce((n,a) => n + a.amount, 0);
  const money = (n: number) => `TRY ${n.toLocaleString("en-GB")}`;
  return <div className="rounded-3xl border border-surface-border bg-white p-5 shadow-xl shadow-brand-navy/5 sm:p-8">
    <div className="flex flex-wrap items-start justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-widest text-brand-green-dark">Illustrative scenario · 70 vehicles · next 7 days</p><h3 className="mt-3 text-2xl font-extrabold">Review the plan before anything changes.</h3></div><span className="rounded-full bg-surface-soft px-3 py-2 text-xs font-bold">Interactive demo</span></div>
    <div className="mt-6 space-y-3">{pilotDemo.actions.map(a => {const copy = englishPilotActions[a.id as keyof typeof englishPilotActions]; return <label key={a.id} className="flex cursor-pointer items-start gap-3 rounded-xl border border-surface-border p-4"><input type="checkbox" checked={selected.includes(a.id)} disabled={applied} onChange={() => {setSelected(s => s.includes(a.id) ? s.filter(id => id !== a.id) : [...s,a.id]);setPreview(false);}} className="mt-1 h-4 w-4 shrink-0 accent-emerald-600" /><span className="min-w-0 flex-1"><span className="block font-bold">{copy.title}</span><span className="mt-1 block text-sm text-brand-navy/60">{copy.reason}</span><span className="mt-2 block text-xs text-brand-navy/50">{copy.calculation}</span><span className="mt-2 block text-sm font-bold text-brand-green-dark">{money(a.amount)} · {a.id === "pricing" ? "Conditional new bookings" : "Booking value that could be protected"}</span></span></label>;})}</div>
    <div aria-live="polite" className="mt-5 rounded-2xl bg-brand-navy p-5 text-white"><p className="text-sm text-white/60">Selected potential booking value</p><p className="mt-2 text-3xl font-extrabold">{money(total)}</p><p className="mt-2 text-sm text-white/65">Baseline {money(pilotDemo.baseline)} → illustrative plan {money(pilotDemo.baseline + total)}</p><p className="mt-3 text-xs leading-relaxed text-white/60">Gross booking value excluding VAT, not net profit or guaranteed income. The pricing opportunity depends on two new bookings. The {money(pilotDemo.outstanding)} outstanding balance is separate and is not counted as new revenue.</p></div>
    <div className="mt-5 flex flex-wrap gap-3"><button type="button" disabled={!selected.length || applied} onClick={() => setPreview(true)} className="min-h-11 rounded-full bg-brand-green-dark px-5 py-3 text-sm font-bold text-white disabled:opacity-40">Preview selected plan</button><button type="button" onClick={() => {setSelected(pilotDemo.actions.map(a => a.id));setPreview(false);setApplied(false);}} className="rounded-full border border-surface-border px-5 py-3 text-sm font-semibold">Reset demo</button></div>
    {preview && !applied && <div className="mt-4 rounded-xl border border-brand-green/30 bg-brand-green/5 p-4"><p className="text-sm">Confirm {selected.length} selected actions? This demonstration does not change real bookings, prices or tasks.</p><button type="button" onClick={() => {setApplied(true);setPreview(false);}} className="mt-3 rounded-full bg-brand-navy px-5 py-3 text-sm font-bold text-white">Confirm in demo</button></div>}
    {applied && <p role="status" className="mt-4 text-sm font-semibold text-brand-green-dark">Demo plan confirmed. No real records were changed.</p>}
  </div>;
}
