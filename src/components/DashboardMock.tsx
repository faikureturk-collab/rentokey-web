"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CalendarDays, ShieldCheck, Sparkles } from "lucide-react";
import { formatTry, pilotPotential } from "@/lib/pilot-demo";

const tabs = ["Operasyon", "70 araçlık filo", "Pilot"];
export default function DashboardMock() {
  const [active, setActive] = useState(0);
  return (
    <div id="hero-demo" className="scroll-mt-24 overflow-hidden rounded-3xl border border-brand-navy/15 bg-brand-navy-deep text-white shadow-2xl shadow-brand-navy/15">
      <div className="flex items-center justify-between border-b border-white/15 px-5 py-4"><p className="text-sm font-bold">RentOkey · Operasyon merkezi</p><span className="text-xs text-white/60">Örnek veri</span></div>
      <div className="flex gap-1 border-b border-white/10 p-2" aria-label="Ürün örneği görünümleri">{tabs.map((label, index) => <button key={label} type="button" aria-pressed={active === index} onClick={() => setActive(index)} className={`min-h-11 flex-1 rounded-lg px-2 text-sm font-semibold ${active === index ? "bg-white text-brand-navy" : "text-white/75 hover:bg-white/10"}`}>{label}</button>)}</div>
      <div className="min-h-[300px] p-5 sm:p-6">
        {active === 0 && <><p className="text-xs font-bold uppercase tracking-wider text-brand-green">Güne hazırlıklı başlayın</p><h3 className="mt-2 text-2xl font-extrabold">Önce hangi işe odaklanmalı?</h3><div className="mt-5 grid grid-cols-3 gap-2">{[["12", "Teslim"], ["9", "İade"], ["70", "Araç"]].map(([n, label]) => <div key={label} className="rounded-xl bg-white/8 p-3"><strong className="text-2xl">{n}</strong><p className="text-xs text-white/65">{label}</p></div>)}</div><div className="mt-4 rounded-xl border border-amber-300/20 bg-amber-300/10 p-4"><p className="text-sm font-semibold text-amber-200">İade–teslim arasında 35 dakika</p><p className="mt-1 text-sm text-white/70">Temizlik ve transfer için gereken süreyi önceden görün.</p></div></>}
        {active === 1 && <><CalendarDays className="h-7 w-7 text-brand-green" /><h3 className="mt-3 text-2xl font-extrabold">Kalabalık filoda net plan.</h3><p className="mt-3 text-base text-white/70">54 kirada · 10 müsait · 4 bakımda · 2 hazırlanıyor</p><div className="mt-5 space-y-2">{[["Ekonomi", "30"], ["Konfor", "25"], ["SUV", "15"]].map(([label,n]) => <div key={label} className="flex justify-between rounded-lg bg-white/8 px-3 py-2 text-sm"><span>{label}</span><strong>{n} araç</strong></div>)}</div><p className="mt-3 text-xs text-white/60">Arama, filtreleme ve örnek atama aşağıdaki filo demosunda.</p></>}
        {active === 2 && <><Sparkles className="h-7 w-7 text-brand-green" /><p className="mt-3 text-xs font-bold text-brand-green">RentOkey Pilot · Ayrıca satın alınır</p><h3 className="mt-2 text-3xl font-extrabold">{formatTry(pilotPotential)}</h3><p className="mt-1 text-base text-white/80">7 günlük örnek gelir potansiyeli</p><p className="mt-4 text-sm leading-relaxed text-white/65">Uygun araç atamaları ve akıllı fiyat önerisi. Korunabilecek rezervasyonlar ile koşullu yeni kiralamalar ayrı hesaplanır.</p><p className="mt-4 flex items-center gap-2 text-xs text-white/65"><ShieldCheck className="h-4 w-4 text-brand-green" /> Tahmindir; kazanç garantisi değildir.</p></>}
      </div>
      <Link href={active === 2 ? "#okey-pilot" : "#urun"} onClick={() => { if (active !== 2) window.dispatchEvent(new Event("rentokey:show-fleet-demo")); }} className="flex min-h-14 items-center justify-between gap-3 border-t border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-brand-green hover:bg-white/10">{active === 2 ? "Önerileri seçin, etkiyi hesaplayın" : "70 araçlık örneği kullanın"}<ArrowRight className="h-4 w-4 shrink-0" /></Link>
    </div>
  );
}
