import { AiDamageCompareIcon, SmartPricingIcon, ChatBookingIcon } from "@/components/icons/ColorIcons";

const items = [
  {
    icon: AiDamageCompareIcon,
    title: "Yapay zekâ destekli hasar karşılaştırması",
    description:
      "Teslim ve iade fotoğraflarını karşılaştırır, incelenmesi gereken olası farkları işaretler ve personelinizin onayına sunar.",
  },
  {
    icon: SmartPricingIcon,
    title: "Akıllı fiyat önerisi",
    description:
      "Sezon, doluluk ve rezervasyon verilerine göre günlük fiyat önerir; fiyatı değiştirmeden önce sizden tek tıkla onay ister.",
  },
  {
    icon: ChatBookingIcon,
    title: "WhatsApp üzerinden rezervasyon oluşturma",
    description:
      "Müşteri taleplerini algılar, uygun araç ve fiyat teklifini hazırlar; rezervasyonu oluşturmadan önce personelinizin onayından geçer.",
  },
];

export default function ComingSoonSection() {
  return (
    <section id="cok-yakinda" className="scroll-mt-24 border-t border-surface-border bg-surface-soft/50">
      <div className="container-page py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700">
            Yol haritası
          </span>
          <h2 className="mt-4 text-2xl font-extrabold leading-tight text-brand-navy sm:text-3xl">
            Çok yakında: yapay zekâ ile daha da güçlü
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-navy/55">
            Üzerinde çalıştığımız yeni özellikler, operasyonunuzu bir adım daha kolaylaştıracak.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="relative rounded-2xl border border-surface-border bg-white p-6"
            >
              <span className="absolute right-5 top-5 rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-semibold text-amber-700">
                Yakında
              </span>
              <item.icon size={48} />
              <h3 className="mt-5 pr-16 text-[15px] font-bold leading-snug text-brand-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-navy/50">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
