import FleetDemo from "@/components/FleetDemo";
import type { ProductSeoContent } from "@/lib/product-pages";
import { BellRing, CarFront, CircleDollarSign, Clock3, Search, Wrench } from "lucide-react";

export default function ProductEvidenceSection({ content }: { content: ProductSeoContent }) {
  const en = content.locale === "en";

  return (
    <section id="product-demo" className="scroll-mt-24 border-y border-surface-border bg-brand-navy-deep text-white">
      <div className="container-page py-16 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-[1fr_.72fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-green">
              {en ? "See it in context" : "Bağlamıyla inceleyin"}
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.035em] sm:text-4xl">
              {content.variant === "calendar"
                ? en ? "Try the 70-vehicle reservation timeline." : "70 araçlık rezervasyon zaman çizelgesini deneyin."
                : en ? "See how the sample operation centre organises the day." : "Örnek operasyon merkezinin günü nasıl düzenlediğini görün."}
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-white/60 lg:justify-self-end">
            {content.variant === "calendar"
              ? en ? "Filter sample vehicles, examine the conflict and approve a suitable vehicle assignment. No live data is changed." : "Örnek araçları filtreleyin, çakışmayı inceleyin ve uygun araç atamasını onaylayın. Canlı veri değişmez."
              : en ? "Handovers, returns, collections and fleet alerts come together in one priority-based working view." : "Teslim, iade, tahsilat ve filo uyarıları önceliklendirilmiş tek çalışma görünümünde birleşir."}
          </p>
        </div>

        <div className="mt-9">
          {content.variant === "calendar" ? <FleetDemo locale={content.locale} /> : <OperationCentreDemo locale={content.locale} />}
        </div>
      </div>
    </section>
  );
}

function OperationCentreDemo({ locale }: { locale: "tr" | "en" }) {
  const en = locale === "en";
  const operations = en
    ? [
        ["10:30", "34 ROK 118 · Airport handover", "Ready", "text-brand-green"],
        ["11:15", "34 ROK 205 · Branch return", "Assigned", "text-sky-300"],
        ["12:00", "Unassigned reservation · Economy", "Suggest vehicle", "text-amber-300"],
      ]
    : [
        ["10:30", "34 ROK 118 · Havalimanı teslim", "Hazır", "text-brand-green"],
        ["11:15", "34 ROK 205 · Şube iadesi", "Atandı", "text-sky-300"],
        ["12:00", "Araçsız rezervasyon · Ekonomi", "Araç öner", "text-amber-300"],
      ];
  const menu = en ? ["Today", "Reservations", "Fleet", "Collections"] : ["Bugün", "Rezervasyonlar", "Filo", "Tahsilatlar"];

  return (
    <div className="overflow-hidden rounded-[26px] border border-white/10 bg-[#091a2d] shadow-2xl shadow-black/20">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div><p className="text-sm font-extrabold">RentOkey · {en ? "Operation centre" : "Operasyon merkezi"}</p><p className="mt-1 text-xs text-white/40">{en ? "Illustrative company and operation data" : "Örnek firma ve operasyon verileri"}</p></div>
        <span className="rounded-full bg-brand-green/15 px-3 py-1.5 text-xs font-bold text-brand-green">{en ? "Live plan" : "Canlı plan"}</span>
      </div>
      <div className="grid lg:grid-cols-[12rem_1fr]">
        <div className="hidden border-r border-white/10 p-3 lg:block">
          {menu.map((item, index) => <div key={item} className={`mb-1 rounded-xl px-3 py-3 text-sm font-semibold ${index === 0 ? "bg-white text-brand-navy" : "text-white/50"}`}>{item}</div>)}
        </div>
        <div className="p-4 sm:p-6">
          <div className="grid gap-3 sm:grid-cols-3">
            {(en ? [["12", "Handovers"], ["9", "Returns"], ["70", "Vehicles"]] : [["12", "Teslim"], ["9", "İade"], ["70", "Araç"]]).map(([value, label]) => <div key={label} className="rounded-2xl bg-white/10 p-4"><p className="text-2xl font-extrabold">{value}</p><p className="mt-1 text-xs text-white/45">{label}</p></div>)}
          </div>
          <div className="mt-4 grid gap-4 xl:grid-cols-[1.2fr_.8fr]">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <div className="flex items-center justify-between bg-white/[0.06] px-4 py-3"><p className="flex items-center gap-2 text-sm font-bold"><Clock3 className="h-4 w-4 text-brand-green" />{en ? "Next operations" : "Sıradaki operasyonlar"}</p><Search className="h-4 w-4 text-white/30" /></div>
              {operations.map(([time, title, state, color], index) => <div key={time} className={`grid grid-cols-[3rem_1fr_auto] items-center gap-3 px-4 py-4 text-sm ${index ? "border-t border-white/10" : ""}`}><strong className="text-sky-300">{time}</strong><span className="truncate text-white/70">{title}</span><span className={`text-xs font-bold ${color}`}>{state}</span></div>)}
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              <div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4"><CircleDollarSign className="h-5 w-5 text-amber-300" /><p className="mt-3 text-sm font-bold">{en ? "TRY 8,400 outstanding" : "₺8.400 açık bakiye"}</p><p className="mt-1 text-xs text-white/45">{en ? "Handover in 90 minutes" : "Teslime 90 dakika kaldı"}</p></div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4"><div className="flex gap-3"><CarFront className="h-5 w-5 text-brand-green" /><Wrench className="h-5 w-5 text-sky-300" /><BellRing className="h-5 w-5 text-amber-300" /></div><p className="mt-3 text-sm font-bold">{en ? "Fleet risks in the same queue" : "Filo riskleri aynı kuyrukta"}</p><p className="mt-1 text-xs text-white/45">{en ? "Maintenance, documents and preparation" : "Bakım, belgeler ve hazırlık"}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
