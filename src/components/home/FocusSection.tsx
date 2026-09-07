import { CalendarClock, CircleDollarSign, Sparkles } from "lucide-react";

const items = [
  { icon: CircleDollarSign, title: "Kiralama başladı, ₺8.400 bakiye kaldı", description: "Mevcut alacağı teslim ve rezervasyon bilgisiyle birlikte takip edin." },
  { icon: CalendarClock, title: "İade–teslim arasında yalnızca 35 dakika", description: "Temizlik ve Girne–Ercan transferi için yetersiz hazırlık süresini önceden görün." },
];
export default function FocusSection() {
  return (
    <section id="onerilen-odak" className="scroll-mt-24 border-y border-surface-border bg-surface-soft">
      <div className="container-page grid gap-6 py-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <div><p className="flex items-center gap-2 text-sm font-bold text-brand-green-dark"><Sparkles className="h-4 w-4" /> Önerilen Odak · Temel aboneliğe dahil</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-navy">Takvimde görünmeyen riskleri fark edin.</h2><p className="mt-3 text-base text-brand-navy/65">Ödeme, lokasyon ve hazırlık süresini birlikte değerlendirerek ekibin önceliğini belirlemesine yardımcı olur.</p></div>
        <div className="grid gap-3 sm:grid-cols-2">{items.map(({ icon: Icon, title, description }) => <article key={title} className="rounded-xl border border-surface-border bg-white p-5"><Icon className="h-5 w-5 text-brand-blue" /><h3 className="mt-3 text-base font-bold text-brand-navy">{title}</h3><p className="mt-2 text-sm text-brand-navy/65">{description}</p></article>)}<p className="text-xs text-brand-navy/60 sm:col-span-2">Örnek operasyon verileri. Risk takibi temel abonelikte; çözüm planını onayla uygulama Pilot kapsamındadır.</p></div>
      </div>
    </section>
  );
}
