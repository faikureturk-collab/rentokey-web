import { AlertTriangle, ArrowDownRight, ArrowUpRight } from "lucide-react";
import type { Locale } from "@/lib/locale";

export default function ReportingDashboardPreview({ locale }: { locale: Locale }) {
  const en = locale === "en";
  const metrics = en
    ? [
        ["Revenue", "₺1.24M", "+12.4%", "up"],
        ["Contribution margin", "31.8%", "+2.1 pt", "up"],
        ["Fleet utilisation", "78.6%", "+4.7 pt", "up"],
        ["Outstanding", "₺86.4K", "+8.2%", "down"],
      ]
    : [
        ["Toplam ciro", "₺1,24 Mn", "+%12,4", "up"],
        ["Katkı marjı", "%31,8", "+2,1 puan", "up"],
        ["Filo kullanımı", "%78,6", "+4,7 puan", "up"],
        ["Tahsil edilmemiş", "₺86,4 B", "+%8,2", "down"],
      ];

  return (
    <div
      aria-label={en ? "Sample Rent Okey management report" : "Örnek Rent Okey yönetim raporu"}
      className="overflow-hidden rounded-[22px] border border-brand-navy/10 bg-brand-navy-deep text-white shadow-2xl shadow-brand-navy/15"
    >
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div>
          <p className="text-xs font-extrabold">{en ? "Management summary" : "Yönetim özeti"}</p>
          <p className="mt-0.5 text-[9px] text-white/40">{en ? "All branches · This month" : "Tüm şubeler · Bu ay"}</p>
        </div>
        <span className="rounded-full bg-white/10 px-2.5 py-1 text-[9px] font-bold text-white/60">{en ? "Sample data" : "Örnek veri"}</span>
      </div>

      <div className="grid grid-cols-2 gap-2 p-3">
        {metrics.map(([label, value, change, direction]) => (
          <div key={label} className="rounded-xl border border-white/[0.07] bg-white/[0.07] p-3">
            <p className="text-[9px] font-semibold uppercase tracking-[0.06em] text-white/40">{label}</p>
            <div className="mt-2 flex items-end justify-between gap-2">
              <strong className="text-base sm:text-lg">{value}</strong>
              <span className={`flex items-center gap-0.5 text-[9px] font-bold ${direction === "down" ? "text-amber-300" : "text-brand-green"}`}>
                {direction === "down" ? <ArrowDownRight className="h-3 w-3" /> : <ArrowUpRight className="h-3 w-3" />}
                {change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-2 px-3 pb-3 sm:grid-cols-[1.45fr_.8fr]">
        <div className="rounded-xl border border-white/[0.07] bg-white/[0.05] p-3">
          <div className="flex items-center justify-between text-[9px]">
            <strong>{en ? "Revenue and contribution trend" : "Gelir ve katkı eğilimi"}</strong>
            <span className="text-white/35">6 {en ? "months" : "ay"}</span>
          </div>
          <div className="mt-5 flex h-20 items-end gap-2 border-b border-white/10 px-1">
            {[44, 57, 51, 68, 63, 82].map((height, index) => (
              <div key={height} className="flex h-full flex-1 items-end justify-center gap-0.5">
                <span className="w-[42%] rounded-t bg-brand-blue" style={{ height: `${height}%` }} />
                <span className="w-[26%] rounded-t bg-brand-green" style={{ height: `${Math.max(22, height - 25)}%` }} />
                <span className="sr-only">{index + 1}</span>
              </div>
            ))}
          </div>
          <div className="mt-2 flex gap-4 text-[8px] text-white/40">
            <span className="flex items-center gap-1"><i className="h-2 w-2 rounded-sm bg-brand-blue" />{en ? "Revenue" : "Ciro"}</span>
            <span className="flex items-center gap-1"><i className="h-2 w-2 rounded-sm bg-brand-green" />{en ? "Contribution" : "Katkı"}</span>
          </div>
        </div>

        <div className="rounded-xl border border-amber-300/20 bg-amber-300/[0.07] p-3">
          <div className="flex items-center gap-1.5 text-amber-300">
            <AlertTriangle className="h-3.5 w-3.5" />
            <strong className="text-[9px] uppercase tracking-[0.06em]">{en ? "Priority" : "Öncelik"}</strong>
          </div>
          <p className="mt-3 text-[11px] font-bold leading-snug">{en ? "3 vehicles have remained idle for more than 14 days" : "3 araç 14 günden uzun süredir boşta"}</p>
          <p className="mt-2 text-[9px] leading-relaxed text-white/45">{en ? "Estimated revenue opportunity: ₺42,600" : "Tahmini gelir fırsatı: ₺42.600"}</p>
          <span className="mt-4 inline-flex rounded-lg bg-amber-300/15 px-2 py-1 text-[9px] font-bold text-amber-200">{en ? "View vehicles" : "Araçları incele"}</span>
        </div>
      </div>
    </div>
  );
}
