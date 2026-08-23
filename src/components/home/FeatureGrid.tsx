import {
  BellRing,
  ChevronsRight,
  Gauge,
  Layers3,
  MonitorSmartphone,
  Sparkles,
} from "lucide-react";

const outcomes = [
  {
    icon: Gauge,
    number: "01",
    title: "Önerilen odakla güne başlayın",
    description:
      "Sabit uyarıların yanında, ödeme ve hazırlık süresi gibi bağlamsal riskler de önceliklendirilir.",
    accent: "bg-brand-blue/10 text-brand-blue",
  },
  {
    icon: BellRing,
    number: "02",
    title: "Sorun oluşmadan haberdar olun",
    description:
      "Çakışmalar, yaklaşan bakım ve belge süreleri yalnız uyarı olarak kalmaz; ilgili işleme bağlanır.",
    accent: "bg-amber-50 text-amber-600",
  },
  {
    icon: Layers3,
    number: "03",
    title: "Filo büyürken düzeni koruyun",
    description:
      "Araçları sınıf, durum ve şubeye göre daraltın; yoğun zaman çizelgesinde aradığınız kaydı hızla bulun.",
    accent: "bg-brand-green/10 text-brand-green-dark",
  },
  {
    icon: MonitorSmartphone,
    number: "04",
    title: "Ofis ve saha aynı akışta çalışsın",
    description:
      "Pozisyona göre yetkilendirilen sayfalar, masaüstü, tablet ve mobilde ekip üyesinin karşısına çıkar.",
    accent: "bg-[#705DE8]/10 text-[#705DE8]",
  },
];

export default function FeatureGrid() {
  return (
    <section id="ozellikler" className="container-page scroll-mt-24 py-20 sm:py-28">
      <div className="grid gap-6 lg:grid-cols-[1fr_.78fr] lg:items-end">
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-green-dark">
            <Sparkles className="h-4 w-4" /> Neden Rent Okey?
          </span>
          <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] text-brand-navy sm:text-4xl">
            Daha fazla ekran değil, daha az operasyon yükü.
          </h2>
        </div>
        <p className="max-w-xl text-[15px] leading-relaxed text-brand-navy/55 lg:justify-self-end">
          Rent Okey bilgiyi depolamakla yetinmez. Doğru anda neye bakmanız ve hangi aksiyonu almanız gerektiğini görünür kılar.
        </p>
      </div>

      <div className="mt-10 grid gap-px overflow-hidden rounded-[28px] border border-surface-border bg-surface-border sm:grid-cols-2 lg:grid-cols-4">
        {outcomes.map((outcome) => {
          const Icon = outcome.icon;
          return (
            <article key={outcome.title} className="group bg-white p-6 transition-colors hover:bg-surface-soft sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${outcome.accent}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-xs font-bold tracking-[0.12em] text-brand-navy/20">{outcome.number}</span>
              </div>
              <h3 className="mt-8 text-lg font-extrabold leading-snug text-brand-navy">{outcome.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-navy/50">{outcome.description}</p>
            </article>
          );
        })}
      </div>

      <div className="mt-6 grid overflow-hidden rounded-2xl bg-[#f4f7fa] md:grid-cols-[1fr_auto_1fr] md:items-center">
        <div className="p-5 sm:p-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-navy/35">Dağınık süreç</p>
          <p className="mt-2 text-sm font-semibold text-brand-navy/60">WhatsApp mesajları, tablolar, notlar ve ayrı takvimler</p>
        </div>
        <div className="hidden h-full items-center justify-center px-3 text-brand-green md:flex">
          <ChevronsRight className="h-6 w-6" />
        </div>
        <div className="border-t border-white bg-brand-navy p-5 text-white sm:p-6 md:border-l md:border-t-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-green">Rent Okey ile</p>
          <p className="mt-2 text-sm font-semibold text-white/85">Tek operasyon merkezi, net sorumluluklar ve görünür aksiyonlar</p>
        </div>
      </div>
    </section>
  );
}
