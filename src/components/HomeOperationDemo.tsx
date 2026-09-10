"use client";

import { useMemo, useState } from "react";
import { AlertTriangle, CalendarDays, CarFront, ChevronDown, CircleDollarSign, Search, Sparkles } from "lucide-react";
import { homeDemoBookings, homeDemoVehicles } from "@/lib/home-operation-demo";

const categories = ["Ekonomi", "Konfor", "SUV"] as const;
const tones = { blue: "bg-[#1176e8]", green: "bg-[#20b878]", navy: "bg-[#153b60]", amber: "bg-amber-500" };

export default function HomeOperationDemo({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const en = locale === "en";
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [detail, setDetail] = useState("");
  const visibleVehicles = useMemo(() => homeDemoVehicles.filter((vehicle) => {
    const term = search.trim().toLocaleLowerCase("tr");
    return (!term || `${vehicle.plate} ${vehicle.model}`.toLocaleLowerCase("tr").includes(term)) && (!category || vehicle.category === category) && (!status || vehicle.status === status);
  }), [category, search, status]);
  const statusCount = (value: string) => homeDemoVehicles.filter((vehicle) => vehicle.status === value).length;
  const categoryLabel = (value: string) => en ? ({ Ekonomi: "Economy", Konfor: "Comfort", SUV: "SUV" } as Record<string, string>)[value] : value;
  const statusLabel = (value: string) => en ? ({ Kirada: "Rented", Müsait: "Available", Bakımda: "Maintenance", Hazırlanıyor: "Preparing" } as Record<string, string>)[value] : value;
  const days = en ? ["Today", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13", "Day 14"] : ["Bugün", "2. gün", "3. gün", "4. gün", "5. gün", "6. gün", "7. gün", "8. gün", "9. gün", "10. gün", "11. gün", "12. gün", "13. gün", "14. gün"];

  return (
    <div className="overflow-hidden rounded-[26px] border border-[#dbe3ed] bg-[#eef3f8] shadow-2xl shadow-brand-navy/10">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#dbe3ed] bg-white px-4 py-3 sm:px-5">
        <div><p className="text-sm font-extrabold text-brand-navy">RentOkey · {en ? "Sample operation centre" : "Örnek operasyon merkezi"}</p><p className="mt-0.5 text-xs text-brand-navy/45">{en ? "20 vehicles · 3 classes · illustrative data" : "20 araç · 3 sınıf · tamamı örnek veri"}</p></div>
        <span className="rounded-full bg-brand-green/10 px-3 py-1.5 text-xs font-bold text-brand-green-dark">{en ? "Live fleet plan" : "Canlı filo planı"}</span>
      </div>

      <div className="grid gap-2 p-3 sm:grid-cols-2 lg:grid-cols-5">
        <SummaryCard dark label={en ? "Today’s operation" : "Bugünkü operasyon"} value="6" hint={en ? "Next action 10:00" : "Sıradaki işlem 10:00"} />
        <SummaryCard label={en ? "Handover / return" : "Teslim / iade"} value="3 / 3" hint={en ? "6 actions today" : "Bugün 6 işlem"} />
        <SummaryCard label={en ? "Fleet status" : "Filo durumu"} value={`${statusCount("Kirada")} / ${statusCount("Müsait")}`} hint={en ? "rented / available" : "kirada / müsait"} />
        <SummaryCard alert label={en ? "Risks" : "Riskler"} value="2" hint={en ? "1 conflict · 1 unassigned" : "1 çakışma · 1 araçsız"} />
        <SummaryCard label={en ? "Document dates" : "Belge süreleri"} value="4" hint={en ? "approaching deadlines" : "yaklaşan süre"} />
      </div>

      <div className="mx-3 mb-3 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-brand-green/20 bg-white px-4 py-3">
        <p className="flex items-center gap-2 text-sm font-bold text-brand-navy"><Sparkles className="h-4 w-4 text-brand-green" />{en ? "Recommended Focus · 3 items to review" : "Önerilen Odak · İncelenecek 3 konu"}</p>
        <p className="text-xs text-brand-navy/50">{en ? "Outstanding balance and insufficient preparation time" : "Açık bakiye ve yetersiz hazırlık süresi"}</p>
      </div>

      <div className="grid gap-3 p-3 pt-0 xl:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 overflow-hidden rounded-2xl border border-[#dbe3ed] bg-white">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#dbe3ed] px-4 py-3">
            <div className="flex items-center gap-2"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue"><CalendarDays className="h-4 w-4" /></span><div><h3 className="text-sm font-extrabold text-brand-navy">{en ? "Reservation timeline" : "Rezervasyon zaman çizelgesi"}</h3><p className="text-[11px] text-brand-navy/45">20 {en ? "vehicles · 14-day plan" : "araç · 14 günlük plan"}</p></div></div>
            <span className="rounded-lg bg-brand-blue px-3 py-2 text-xs font-bold text-white">14 {en ? "days" : "gün"}</span>
          </div>
          <div className="grid gap-2 border-b border-[#dbe3ed] p-3 md:grid-cols-[1fr_10rem_10rem]">
            <label className="relative"><span className="sr-only">{en ? "Search plate or model" : "Plaka veya model ara"}</span><Search className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-brand-navy/35" /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder={en ? "Search plate or model" : "Plaka veya araç modeli ara"} className="min-h-11 w-full rounded-lg border border-[#dbe3ed] pl-9 pr-3 text-sm text-brand-navy outline-none focus:border-brand-blue" /></label>
            <select aria-label={en ? "Vehicle class" : "Araç sınıfı"} value={category} onChange={(event) => setCategory(event.target.value)} className="min-h-11 rounded-lg border border-[#dbe3ed] bg-white px-3 text-sm text-brand-navy"><option value="">{en ? "All classes" : "Tüm sınıflar"}</option>{categories.map((item) => <option key={item} value={item}>{categoryLabel(item)}</option>)}</select>
            <select aria-label={en ? "Vehicle status" : "Araç durumu"} value={status} onChange={(event) => setStatus(event.target.value)} className="min-h-11 rounded-lg border border-[#dbe3ed] bg-white px-3 text-sm text-brand-navy"><option value="">{en ? "All statuses" : "Tüm durumlar"}</option>{["Kirada", "Müsait", "Bakımda", "Hazırlanıyor"].map((item) => <option key={item} value={item}>{statusLabel(item)}</option>)}</select>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 border-b border-[#dbe3ed] px-4 py-2 text-[11px] text-brand-navy/55"><span><b className="text-brand-blue">●</b> {en ? "Rented" : "Kirada"}</span><span><b className="text-brand-green">●</b> {en ? "Upcoming" : "Yaklaşan"}</span><span><b className="text-[#153b60]">●</b> {en ? "Monthly" : "Aylık"}</span><span><b className="text-amber-500">●</b> {en ? "Service" : "Servis"}</span><span className="ml-auto font-semibold">{visibleVehicles.length} / 20 {en ? "vehicles" : "araç"}</span></div>
          <div className="max-h-[470px] overflow-auto" tabIndex={0} role="region" aria-label={en ? "20-vehicle reservation timeline" : "20 araçlık rezervasyon zaman çizelgesi"}>
            <div className="min-w-[1050px]">
              <div className="sticky top-0 z-20 grid grid-cols-[156px_1fr] border-b border-[#dbe3ed] bg-[#f5f8fb] text-[10px] font-bold text-brand-navy/55"><span className="sticky left-0 z-30 bg-[#f5f8fb] px-3 py-2">{en ? "Vehicle / class" : "Araç / sınıf"}</span><div className="grid grid-cols-14">{days.map((day) => <span key={day} className="border-l border-[#dbe3ed] py-2 text-center">{day}</span>)}</div></div>
              {categories.map((group) => {
                const groupVehicles = visibleVehicles.filter((vehicle) => vehicle.category === group);
                if (!groupVehicles.length) return null;
                return <div key={group}><div className="sticky left-0 z-10 flex items-center gap-2 border-b border-[#dbe3ed] bg-[#edf3f8] px-3 py-2 text-xs font-bold text-brand-navy"><ChevronDown className="h-3.5 w-3.5" />{categoryLabel(group)} · {groupVehicles.length} {en ? "vehicles" : "araç"}</div>{groupVehicles.map((vehicle) => {
                  const booking = homeDemoBookings.find((item) => item.plate === vehicle.plate);
                  return <div key={vehicle.plate} className="grid grid-cols-[156px_1fr] border-b border-[#e4eaf1] last:border-0"><div className="sticky left-0 z-10 bg-white px-3 py-2"><p className="text-xs font-extrabold text-brand-navy">{vehicle.plate}</p><p className="mt-0.5 text-[10px] text-brand-navy/45">{vehicle.model} · {vehicle.branch}</p></div><div className="relative min-h-[48px] bg-[repeating-linear-gradient(to_right,transparent_0,transparent_calc(100%/14-1px),#e4eaf1_calc(100%/14-1px),#e4eaf1_calc(100%/14))]">{booking ? <button type="button" onClick={() => setDetail(`${vehicle.plate} · ${en ? booking.labelEn : booking.labelTr} · ${en ? "illustrative reservation" : "örnek rezervasyon"}`)} className={`absolute top-2 h-8 overflow-hidden rounded-md px-2 text-left text-[10px] font-semibold text-white ${tones[booking.tone]}`} style={{ left: `calc(${booking.start / 14 * 100}% + 2px)`, width: `calc(${booking.span / 14 * 100}% - 4px)` }}><span className="block truncate">{en ? booking.labelEn : booking.labelTr}</span></button> : <span className="absolute left-2 top-4 text-[10px] font-semibold text-brand-green-dark">{en ? "Available" : "Müsait"}</span>}</div></div>;
                })}</div>;
              })}
            </div>
          </div>
          <p className="min-h-11 px-4 py-3 text-xs text-brand-navy/55" aria-live="polite">{detail || (en ? "Filter the sample fleet or select a reservation on the timeline." : "Örnek filoyu filtreleyin veya çizelgedeki bir rezervasyonu seçin.")}</p>
        </div>

        <aside className="space-y-3">
          <div className="overflow-hidden rounded-2xl border-2 border-brand-blue bg-white">
            <div className="flex items-center gap-2 border-b border-[#dbe3ed] px-4 py-3"><CarFront className="h-4 w-4 text-brand-blue" /><h3 className="text-sm font-extrabold text-brand-navy">{en ? "Today’s operation" : "Bugünkü operasyon"}</h3></div>
            <div className="divide-y divide-[#e4eaf1] px-4">{(en ? [["10:00", "ROK 101 · Airport handover"], ["11:15", "ROK 204 · Branch return"], ["13:30", "ROK 302 · Hotel handover"], ["15:00", "ROK 107 · Preparation complete"]] : [["10:00", "ROK 101 · Havalimanı teslim"], ["11:15", "ROK 204 · Şube iadesi"], ["13:30", "ROK 302 · Otel teslimi"], ["15:00", "ROK 107 · Hazırlık tamamla"]]).map(([time, text]) => <div key={`${time}-${text}`} className="py-3"><p className="text-xs font-bold text-brand-navy">{text}</p><p className="mt-1 text-[10px] font-semibold text-brand-green-dark">{time} · {en ? "On schedule" : "Planlandı"}</p></div>)}</div>
          </div>
          <div className="rounded-2xl border border-[#dbe3ed] bg-white p-4"><p className="flex items-center gap-2 text-sm font-extrabold text-brand-navy"><Sparkles className="h-4 w-4 text-brand-green" />{en ? "Recommended Focus" : "Önerilen Odak"}</p><div className="mt-3 rounded-xl bg-amber-50 p-3"><p className="flex items-center gap-2 text-xs font-bold text-amber-800"><CircleDollarSign className="h-4 w-4" />{en ? "TRY 8,400 outstanding" : "₺8.400 açık bakiye"}</p><p className="mt-1 text-[10px] text-amber-800/70">{en ? "Handover in 90 minutes" : "Teslime 90 dakika kaldı"}</p></div><div className="mt-2 rounded-xl bg-red-50 p-3"><p className="flex items-center gap-2 text-xs font-bold text-red-700"><AlertTriangle className="h-4 w-4" />{en ? "35-minute preparation window" : "35 dakikalık hazırlık süresi"}</p><p className="mt-1 text-[10px] text-red-700/70">{en ? "Review cleaning and transfer time" : "Temizlik ve transfer süresini inceleyin"}</p></div></div>
        </aside>
      </div>
    </div>
  );
}

function SummaryCard({ label, value, hint, dark = false, alert = false }: { label: string; value: string; hint: string; dark?: boolean; alert?: boolean }) {
  return <div className={`rounded-xl border p-3 ${dark ? "border-brand-navy bg-brand-navy text-white" : alert ? "border-red-100 bg-red-50 text-brand-navy" : "border-[#dbe3ed] bg-white text-brand-navy"}`}><p className={`text-[10px] font-bold uppercase tracking-[0.08em] ${dark ? "text-white/50" : "text-brand-navy/40"}`}>{label}</p><p className="mt-2 text-xl font-extrabold">{value}</p><p className={`mt-1 text-[10px] ${dark ? "text-white/55" : "text-brand-navy/45"}`}>{hint}</p></div>;
}
