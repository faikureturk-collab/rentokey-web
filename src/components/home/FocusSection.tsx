import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  CircleDollarSign,
  Route,
  Sparkles,
} from "lucide-react";

const focusItems = [
  {
    icon: CircleDollarSign,
    eyebrow: "Eksik tahsilat",
    title: "Kiralama başladı, ₺8.400 bakiye kaldı",
    description: "Araç müşteride olmasına rağmen ödemenin tamamı alınmadı.",
    action: "Ödemeyi incele",
    color: "text-amber-600 bg-amber-50",
  },
  {
    icon: CalendarClock,
    eyebrow: "Dar geçiş süresi",
    title: "İade ile sonraki teslim arasında 35 dakika var",
    description: "Temizlik ve Girne → Ercan transferi için yeterli süre görünmüyor.",
    action: "Planı düzenle",
    color: "text-brand-blue bg-brand-blue/10",
  },
];

export default function FocusSection() {
  return (
    <section id="onerilen-odak" className="scroll-mt-24 overflow-hidden bg-brand-navy py-16 text-white sm:py-24">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[.88fr_1.12fr] lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-4 py-1.5 text-sm font-semibold text-brand-green">
            <Sparkles className="h-4 w-4" /> Rent Okey farkı
          </span>
          <h2 className="mt-5 max-w-xl text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] text-white sm:text-4xl">
            Takvime yazılmayan riski de <span className="text-brand-green">görünür kılar.</span>
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/55">
            Önerilen odak; rezervasyon, ödeme, araç, lokasyon ve zaman bilgilerini birlikte değerlendirir. Sabit bir uyarı alanı olmayan operasyon risklerini gecikmeye dönüşmeden öne çıkarır.
          </p>

          <div className="mt-7 space-y-3">
            <div className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" /><div><p className="text-sm font-bold text-white">Sabit kontrolleri tamamlar</p><p className="mt-1 text-xs leading-relaxed text-white/45">Teslim, iade ve belge süresi gibi bilinen kontrollerin dışındaki durumları takip eder.</p></div></div>
            <div className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" /><div><p className="text-sm font-bold text-white">Hazırlık için zaman kazandırır</p><p className="mt-1 text-xs leading-relaxed text-white/45">Sorun olduktan sonra bildirmek yerine, ekibin planı önceden değiştirmesine yardımcı olur.</p></div></div>
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-2 overflow-hidden rounded-2xl border border-white/10">
            <div className="bg-white/[0.035] p-4"><p className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/35">Sabit kontrol</p><p className="mt-2 text-xs font-semibold text-white/75">Sigorta 8 gün içinde bitiyor</p></div>
            <div className="border-l border-white/10 bg-brand-green/[0.07] p-4"><p className="text-[9px] font-bold uppercase tracking-[0.14em] text-brand-green">Bağlamsal öneri</p><p className="mt-2 text-xs font-semibold text-white/75">İki rezervasyon arasında hazırlık süresi yok</p></div>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -inset-12 rounded-full bg-brand-green/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#f4f7fa] p-4 shadow-2xl shadow-black/25 sm:p-6">
            <div className="flex items-center justify-between gap-4 rounded-2xl border border-brand-blue/15 bg-[#eef5ff] px-4 py-4 sm:px-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue"><Sparkles className="h-5 w-5" /></span>
                <div><p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-navy/35">Önerilen odak</p><p className="mt-1 text-sm font-extrabold text-brand-navy">2 kritik aksiyonu tamamla</p></div>
              </div>
              <span className="hidden rounded-full bg-white px-3 py-1.5 text-[10px] font-bold text-brand-blue shadow-sm sm:inline-flex">Öncelik sırasıyla</span>
            </div>

            <div className="mt-3 space-y-3">
              {focusItems.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="rounded-2xl border border-surface-border bg-white p-4 sm:p-5">
                    <div className="flex items-start gap-3.5">
                      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${item.color}`}><Icon className="h-4.5 w-4.5" /></span>
                      <div className="min-w-0 flex-1">
                        <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-brand-navy/35">{item.eyebrow}</p>
                        <h3 className="mt-1.5 text-sm font-extrabold leading-snug text-brand-navy">{item.title}</h3>
                        <p className="mt-1.5 text-[11px] leading-relaxed text-brand-navy/45">{item.description}</p>
                        <button type="button" className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-brand-navy px-3 py-2 text-[10px] font-bold text-white">{item.action} <ArrowRight className="h-3 w-3" /></button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-3 flex items-center gap-2 rounded-xl border border-dashed border-brand-green/30 bg-brand-green/[0.06] px-4 py-3 text-[10px] font-medium text-brand-navy/50">
              <Route className="h-4 w-4 shrink-0 text-brand-green-dark" /> Öneriler, operasyon değiştikçe yeniden önceliklendirilir.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
