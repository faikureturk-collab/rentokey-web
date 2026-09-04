import type { ReactNode } from "react";
import { Cable, FileSignature } from "lucide-react";
import { AiDamageCompareIcon, SmartPricingIcon, ChatBookingIcon } from "@/components/icons/ColorIcons";

const items: { icon: ReactNode; label: string; title: string; description: string }[] = [
  {
    icon: <AiDamageCompareIcon size={44} />,
    label: "Saha operasyonu",
    title: "Fotoğraflı hasar karşılaştırması",
    description:
      "Teslim ve iade fotoğrafları arasındaki olası farkların ekip tarafından daha hızlı incelenmesi.",
  },
  {
    icon: <SmartPricingIcon size={44} />,
    label: "Gelir yönetimi",
    title: "Akıllı fiyat önerisi",
    description:
      "Sezon, doluluk ve geçmiş rezervasyon verilerinden yararlanan onaylı fiyat önerileri.",
  },
  {
    icon: <ChatBookingIcon size={44} />,
    label: "Müşteri iletişimi",
    title: "Mesajdan rezervasyon taslağı",
    description:
      "Gelen müşteri talebinden ekip onayına sunulacak araç ve fiyat taslağı hazırlanması.",
  },
  {
    icon: <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue"><FileSignature className="h-5 w-5" /></span>,
    label: "Doküman ve onay",
    title: "Dijital sözleşme ve imza",
    description:
      "Rezervasyon onay belgesinden ayrı, hukuki metin ve elektronik imza sürecinin uçtan uca yönetilmesi.",
  },
  {
    icon: <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green-dark"><Cable className="h-5 w-5" /></span>,
    label: "Kurumsal bağlantılar",
    title: "Özel entegrasyon ve API",
    description:
      "Yetkilendirilmiş veri bağlantıları ve kuruma özel API erişimiyle farklı sistemlerin birlikte çalışması.",
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

        <div className="mt-10 grid gap-px overflow-hidden rounded-[28px] border border-surface-border bg-surface-border sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="relative bg-white p-6 sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                {item.icon}
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
