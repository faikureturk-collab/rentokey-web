import { AiDamageCompareIcon, SmartPricingIcon, ChatBookingIcon } from "@/components/icons/ColorIcons";

const items = [
  {
    icon: AiDamageCompareIcon,
    label: "Saha operasyonu",
    title: "Fotoğraflı hasar karşılaştırması",
    description:
      "Teslim ve iade fotoğrafları arasındaki olası farkların ekip tarafından daha hızlı incelenmesi.",
  },
  {
    icon: SmartPricingIcon,
    label: "Gelir yönetimi",
    title: "Akıllı fiyat önerisi",
    description:
      "Sezon, doluluk ve geçmiş rezervasyon verilerinden yararlanan onaylı fiyat önerileri.",
  },
  {
    icon: ChatBookingIcon,
    label: "Müşteri iletişimi",
    title: "Mesajdan rezervasyon taslağı",
    description:
      "Gelen müşteri talebinden ekip onayına sunulacak araç ve fiyat taslağı hazırlanması.",
  },
];

export default function ComingSoonSection() {
  return (
    <section id="cok-yakinda" className="scroll-mt-24 border-y border-surface-border bg-surface-soft/60">
      <div className="container-page py-16 sm:py-20">
        <div className="grid gap-5 lg:grid-cols-[1fr_.78fr] lg:items-end">
          <div>
            <span className="inline-flex rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700">
              Ürün yol haritası
            </span>
            <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] text-brand-navy sm:text-4xl">
              Bugünün operasyonu hazır. Sırada daha akıllı işler var.
            </h2>
          </div>
          <p className="max-w-xl text-[15px] leading-relaxed text-brand-navy/55 lg:justify-self-end">
            Gelecek özellikleri gösteriş için değil, ekibin tekrar eden işlerini azaltmak için geliştiriyoruz.
          </p>
        </div>

        <div className="mt-10 grid overflow-hidden rounded-[28px] border border-surface-border bg-white sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <article
              key={item.title}
              className={`relative p-6 sm:p-7 ${index > 0 ? "border-t border-surface-border sm:border-l sm:border-t-0" : ""} ${index === 2 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="flex items-start justify-between gap-4">
                <item.icon size={44} />
                <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-bold text-amber-700">
                  Geliştiriliyor
                </span>
              </div>
              <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-navy/35">{item.label}</p>
              <h3 className="mt-2 text-base font-extrabold leading-snug text-brand-navy">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-navy/50">{item.description}</p>
            </article>
          ))}
        </div>

        <p className="mt-4 text-center text-[11px] leading-relaxed text-brand-navy/35">
          Yol haritasındaki özelliklerin kapsamı ve yayın sırası kullanıcı geri bildirimlerine göre değişebilir.
        </p>
      </div>
    </section>
  );
}
