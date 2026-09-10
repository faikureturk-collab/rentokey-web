export function OperationCentrePreview({ locale }: { locale: "tr" | "en" }) {
  const en = locale === "en";
  const rows = en
    ? [["11:30", "Handover · Airport", "Ready"], ["14:00", "Return · Branch", "Assigned"], ["16:20", "Balance before handover", "TRY 8,400"]]
    : [["11:30", "Teslim · Havalimanı", "Hazır"], ["14:00", "İade · Şube", "Atandı"], ["16:20", "Teslim öncesi bakiye", "₺8.400"]];

  return (
    <div aria-label={en ? "Sample RentOkey operation centre" : "Örnek RentOkey operasyon merkezi"} className="overflow-hidden rounded-2xl border border-brand-navy/10 bg-brand-navy-deep text-white shadow-xl shadow-brand-navy/10">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3"><strong className="text-xs">RentOkey · {en ? "Operation centre" : "Operasyon merkezi"}</strong><span className="text-[10px] text-white/40">{en ? "Sample data" : "Örnek veri"}</span></div>
      <div className="grid grid-cols-3 gap-2 p-3">
        {(en ? [["12", "Handovers"], ["9", "Returns"], ["70", "Vehicles"]] : [["12", "Teslim"], ["9", "İade"], ["70", "Araç"]]).map(([value, label]) => <div key={label} className="rounded-lg bg-white/10 p-2.5"><p className="text-lg font-extrabold">{value}</p><p className="mt-0.5 text-[9px] text-white/45">{label}</p></div>)}
      </div>
      <div className="px-3 pb-3">
        <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.12em] text-brand-green">{en ? "Next operations" : "Sıradaki operasyonlar"}</p>
        <div className="overflow-hidden rounded-lg border border-white/10">{rows.map(([time, title, state], index) => <div key={`${time}-${title}`} className={`grid grid-cols-[2.8rem_1fr_auto] items-center gap-2 bg-white/[0.055] px-2.5 py-2 text-[10px] ${index ? "border-t border-white/10" : ""}`}><span className="font-bold text-sky-300">{time}</span><span className="truncate text-white/75">{title}</span><span className={index === 2 ? "text-amber-300" : "text-brand-green"}>{state}</span></div>)}</div>
      </div>
    </div>
  );
}

export function ReservationTimelinePreview({ locale }: { locale: "tr" | "en" }) {
  const en = locale === "en";
  const vehicles = en ? ["Clio · Economy", "Corolla · Mid-size", "Egea · Economy", "2008 · SUV"] : ["Clio · Ekonomi", "Corolla · Orta sınıf", "Egea · Ekonomi", "2008 · SUV"];

  return (
    <div aria-label={en ? "Sample car rental reservation timeline" : "Örnek araç kiralama rezervasyon zaman çizelgesi"} className="overflow-hidden rounded-2xl border border-brand-navy/10 bg-brand-navy-deep text-white shadow-xl shadow-brand-navy/10">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3"><strong className="text-xs">{en ? "Reservation timeline" : "Rezervasyon zaman çizelgesi"}</strong><span className="rounded-full bg-brand-blue px-2 py-1 text-[9px] font-bold">14 {en ? "days" : "gün"}</span></div>
      <div className="grid grid-cols-[6.4rem_repeat(5,1fr)] border-b border-white/10 bg-white/[0.04] text-[8px] text-white/40"><span className="px-2.5 py-2">{en ? "Vehicle / class" : "Araç / sınıf"}</span>{["10", "11", "12", "13", "14"].map(day => <span key={day} className="border-l border-white/10 py-2 text-center">{day}</span>)}</div>
      <div className="p-2">{vehicles.map((vehicle, index) => <div key={vehicle} className="grid min-h-9 grid-cols-[6.4rem_1fr] items-center border-b border-white/[0.07] last:border-0"><span className="px-1.5 text-[9px] text-white/65">{vehicle}</span><div className="relative h-6"><span className={`absolute top-1 h-4 rounded ${index === 1 ? "left-[18%] w-[62%] bg-brand-green" : index === 2 ? "left-[45%] w-[36%] bg-amber-500" : index === 3 ? "left-[4%] w-[30%] bg-[#705DE8]" : "left-[4%] w-[53%] bg-brand-blue"}`}><span className="block truncate px-1.5 pt-0.5 text-[7px] font-semibold text-white">{index === 2 ? (en ? "Maintenance" : "Bakım") : (en ? "Reservation" : "Rezervasyon")}</span></span></div></div>)}</div>
      <div className="flex items-center gap-3 border-t border-white/10 px-3 py-2.5 text-[8px] text-white/45"><span className="flex items-center gap-1"><i className="h-2 w-2 rounded-sm bg-brand-blue" />{en ? "Rented" : "Kirada"}</span><span className="flex items-center gap-1"><i className="h-2 w-2 rounded-sm bg-brand-green" />{en ? "Available" : "Müsait"}</span><span className="flex items-center gap-1"><i className="h-2 w-2 rounded-sm bg-amber-500" />{en ? "Maintenance" : "Bakım"}</span></div>
    </div>
  );
}
