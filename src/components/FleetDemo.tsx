"use client";

import { useState } from "react";
import { AlertTriangle, CheckCircle2, ChevronDown, RotateCcw, Search } from "lucide-react";
import { canAssign, fleetBookings, fleetBranches, fleetCategories, fleetVehicles } from "@/lib/fleet-demo";

export default function FleetDemo() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [branch, setBranch] = useState("");
  const [status, setStatus] = useState("");
  const [collapsed, setCollapsed] = useState<string[]>([]);
  const [bookings, setBookings] = useState(fleetBookings);
  const [stage, setStage] = useState<"idle" | "review" | "done">("idle");
  const [detail, setDetail] = useState("");
  const conflict = bookings.find((booking) => booking.id === "R-2401")!;
  const candidate = fleetVehicles.find((vehicle) => canAssign(vehicle, conflict, bookings));
  const visible = fleetVehicles.filter((vehicle) => (!category || vehicle.category === category) && (!branch || vehicle.branch === branch) && (!status || vehicle.status === status) && `${vehicle.plate} ${vehicle.model}`.toLocaleLowerCase("tr").includes(search.toLocaleLowerCase("tr").trim()));
  function clear() { setSearch(""); setCategory(""); setBranch(""); setStatus(""); setCollapsed([]); }
  function reset() { clear(); setBookings(fleetBookings); setStage("idle"); setDetail(""); }
  const fieldClass = "min-h-11 min-w-0 rounded-lg border border-surface-border bg-white px-3 text-sm text-brand-navy focus-visible:outline-2 focus-visible:outline-brand-green";
  return (
    <div id="filo-demo" className="scroll-mt-28 overflow-hidden rounded-2xl border border-surface-border bg-white text-brand-navy">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-surface-border p-4">
        <div><h4 className="text-base font-extrabold">70 araçlık örnek operasyon</h4><p className="mt-1 text-xs text-brand-navy/65">3 şube · 3 sınıf · 7 günlük plan · Tamamı örnek veri</p></div>
        <button type="button" onClick={reset} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold"><RotateCcw className="h-4 w-4" /> Sıfırla</button>
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-2 bg-surface-soft px-4 py-3 text-xs">
        <span><strong>54</strong> kirada</span><span className="text-brand-green-dark"><strong>10</strong> müsait</span><span><strong>4</strong> bakımda</span><span><strong>2</strong> hazırlanıyor</span><span className="text-brand-navy/65">Bugünkü başlangıç durumu</span>
      </div>
      <div className="grid grid-cols-2 gap-2 p-4 xl:grid-cols-[1.3fr_1fr_1fr_1fr_auto]">
        <label className="relative col-span-2 xl:col-span-1"><span className="sr-only">Demo plaka veya model ara</span><Search className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-brand-navy/45" /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Plaka veya model ara" className={`${fieldClass} w-full pl-9`} /></label>
        <select aria-label="Demo araç sınıfı" value={category} onChange={(event) => { setCategory(event.target.value); setCollapsed([]); }} className={fieldClass}><option value="">Tüm sınıflar</option>{fleetCategories.map((item) => <option key={item}>{item}</option>)}</select>
        <select aria-label="Demo şube" value={branch} onChange={(event) => setBranch(event.target.value)} className={fieldClass}><option value="">Tüm şubeler</option>{fleetBranches.map((item) => <option key={item}>{item}</option>)}</select>
        <select aria-label="Demo araç durumu" value={status} onChange={(event) => setStatus(event.target.value)} className={fieldClass}><option value="">Tüm durumlar</option>{["Kirada", "Müsait", "Bakımda", "Hazırlanıyor"].map((item) => <option key={item}>{item}</option>)}</select>
        <button type="button" onClick={clear} className="min-h-11 text-sm font-semibold text-brand-blue">Temizle</button>
      </div>
      <div className={`mx-4 mb-3 rounded-xl border p-3 ${stage === "done" ? "border-brand-green/30 bg-brand-green/5" : "border-amber-200 bg-amber-50"}`}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-start gap-2">{stage === "done" ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-dark" /> : <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />}<div><p className="text-sm font-bold">{stage === "done" ? "Çakışma çözüldü · R-2401 → ZRO 002" : "ZRO 001 · İki rezervasyon çakışıyor"}</p><p className="mt-1 text-xs">R-2401 · 3.–5. gün · Ekonomi · Girne</p></div></div>
          {stage === "idle" && <button type="button" onClick={() => setStage("review")} className="min-h-11 rounded-lg bg-brand-navy px-3 text-sm font-bold text-white">Uygun aracı göster</button>}
        </div>
        {stage === "review" && <div className="mt-3 border-t border-amber-200 pt-3" role="status">{candidate ? <><p className="text-sm"><strong>{candidate.plate} · {candidate.model}</strong> — Aynı sınıf ve şube; seçili tarihler boş.</p><p className="mt-1 text-xs">Atama yalnızca bu örnekte yapılır; canlı uygulamaya aktarılmaz.</p><div className="mt-3 flex flex-wrap gap-2"><button type="button" onClick={() => { if (!canAssign(candidate, conflict, bookings)) return; setBookings((prev) => prev.map((item) => item.id === conflict.id ? { ...item, vehicle: candidate.id, label: "R-2401 · Atandı" } : item)); clear(); setStage("done"); setDetail("R-2401 örnek rezervasyonu ZRO 002 üzerine taşındı. Tarihler değişmedi."); }} className="min-h-11 rounded-lg bg-brand-green px-3 text-sm font-bold text-white">Demoda atamayı onayla</button><button type="button" onClick={() => setStage("idle")} className="min-h-11 px-3 text-sm">Vazgeç</button></div></> : <p className="text-sm">Bu tarihler için uygun alternatif bulunamadı.</p>}</div>}
      </div>
      <div className="flex items-center justify-between px-4 pb-2 text-xs text-brand-navy/65"><span aria-live="polite">{visible.length} / 70 araç</span><button type="button" onClick={() => setCollapsed(collapsed.length === fleetCategories.length ? [] : fleetCategories)} className="min-h-11 font-semibold">{collapsed.length === fleetCategories.length ? "Grupları aç" : "Grupları daralt"}</button></div>
      <div className="max-h-[360px] overflow-auto border-y border-surface-border" tabIndex={0} role="region" aria-label="70 araçlık zaman çizelgesi, yatay ve dikey kaydırılabilir">
        <div className="min-w-[650px]">
          <div className="sticky top-0 z-20 grid grid-cols-[155px_1fr] bg-surface-soft text-xs font-bold"><span className="sticky left-0 z-30 bg-surface-soft p-3">Araç / şube</span><div className="grid grid-cols-7">{["Bugün", "2. gün", "3. gün", "4. gün", "5. gün", "6. gün", "7. gün"].map((day) => <span key={day} className="border-l border-surface-border py-3 text-center">{day}</span>)}</div></div>
          {fleetCategories.map((group) => {
            const rows = visible.filter((vehicle) => vehicle.category === group);
            if (!rows.length) return null;
            return <div key={group}><button type="button" aria-expanded={!collapsed.includes(group)} onClick={() => setCollapsed((prev) => prev.includes(group) ? prev.filter((item) => item !== group) : [...prev, group])} className="sticky left-0 flex min-h-10 w-full items-center gap-2 border-y border-surface-border bg-[#eef3f8] px-3 text-left text-xs font-bold"><ChevronDown className={`h-4 w-4 ${collapsed.includes(group) ? "-rotate-90" : ""}`} />{group} · {rows.length} araç</button>
              {!collapsed.includes(group) && rows.map((vehicle) => <div key={vehicle.id} className="grid grid-cols-[155px_1fr] border-b border-surface-border">
                <div className="sticky left-0 z-10 bg-white px-3 py-2"><p className="text-xs font-bold">{vehicle.plate}</p><p className="text-xs text-brand-navy/65">{vehicle.model} · {vehicle.branch}</p></div>
                <div className="relative min-h-[58px]" style={{ backgroundImage: "repeating-linear-gradient(to right, transparent 0, transparent calc(100% / 7 - 1px), #e7eaf1 calc(100% / 7 - 1px), #e7eaf1 calc(100% / 7))" }}>
                  {(vehicle.status === "Bakımda" || vehicle.status === "Hazırlanıyor") && <span className="absolute inset-2 rounded bg-amber-50 px-2 py-2 text-xs text-amber-800">{vehicle.status}</span>}
                  {vehicle.status === "Müsait" && !bookings.some((item) => item.vehicle === vehicle.id && item.start === 0) && <span className="absolute left-2 top-2 text-xs font-semibold text-brand-green-dark">Bugün müsait</span>}
                  {bookings.filter((item) => item.vehicle === vehicle.id).map((booking) => <button key={booking.id} type="button" title={`${booking.label} · ${booking.start + 1}.–${booking.end}. gün`} onClick={() => setDetail(`${booking.id} · ${vehicle.plate} · ${booking.start + 1}.–${booking.end}. gün · ${vehicle.category} / ${vehicle.branch}. Örnek rezervasyon.`)} className={`absolute min-h-6 overflow-hidden rounded px-2 text-left text-xs font-semibold text-white ${booking.id === "R-2401" ? stage === "done" ? "bg-brand-green" : "bg-red-600" : booking.label === "Aylık kiralama" ? "border-l-4 border-brand-green bg-brand-navy" : "bg-brand-blue"}`} style={{ left: `calc(${booking.start / 7 * 100}% + 2px)`, width: `calc(${(booking.end - booking.start) / 7 * 100}% - 4px)`, top: booking.id === "R-2401" && stage !== "done" ? 30 : 6 }}><span className="block truncate">{booking.label}</span></button>)}
                </div>
              </div>)}
            </div>;
          })}
        </div>
        {!visible.length && <p className="p-6 text-sm">Filtrelere uygun araç bulunamadı. Filtreleri temizleyerek yeniden deneyin.</p>}
      </div>
      <div className="min-h-12 p-3 text-xs text-brand-navy/65" role="status">{detail || "Plaka arayın, grupları daraltın veya bir rezervasyona dokunun. Çizelgeyi kaydırarak 70 aracın tamamını görebilirsiniz."}</div>
    </div>
  );
}
