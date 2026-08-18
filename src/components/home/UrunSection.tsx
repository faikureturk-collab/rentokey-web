import { CalendarRange, Smartphone, BarChart3, Car } from "lucide-react";
import ModuleRow from "@/components/ModuleRow";

const modules = [
  {
    icon: Car,
    title: "Filo yönetimi",
    description:
      "Araçlarınızı, sözleşmelerinizi, bakım ve muayene takvimini tek ekrandan izleyin. Hangi aracın nerede, kimde ve hangi durumda olduğunu her an bilin.",
    bullets: [
      "Araç bazlı sözleşme ve belge takibi",
      "Bakım / muayene hatırlatmaları",
      "Konum ve durum geçmişi",
    ],
  },
  {
    icon: CalendarRange,
    title: "Rezervasyon ve takvim",
    description:
      "Canlı Gantt zaman çizelgesiyle çakışmasız planlama yapın. Rezervasyonları oluşturun, değiştirin ve tüm ekibinizle eş zamanlı takip edin.",
    bullets: [
      "Sürükle-bırak Gantt takvimi",
      "Otomatik çakışma uyarıları",
      "Online rezervasyon entegrasyonu",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobil saha uygulaması",
    description:
      "Teslimat ve iade işlemlerini sahada dijitalleştirin. Hasar, yakıt ve km kontrollerini fotoğraflı olarak saniyeler içinde kaydedin.",
    bullets: [
      "Çevrimdışı çalışabilme",
      "Fotoğraflı hasar tespit tutanağı",
      "Dijital imza ile teslim/iade onayı",
    ],
  },
  {
    icon: BarChart3,
    title: "Raporlama ve analiz",
    description:
      "Kârlılık, doluluk oranı ve araç bazlı performans raporlarına anında ulaşın; verilerinize dayanarak daha doğru kararlar alın.",
    bullets: [
      "Gerçek zamanlı doluluk ve gelir raporları",
      "Araç ve şube bazlı karşılaştırmalar",
      "Excel'e dışa aktarma",
    ],
  },
];

export default function UrunSection() {
  return (
    <section id="urun" className="scroll-mt-24 border-t border-surface-border">
      <div className="container-page pt-16 text-center sm:pt-24">
        <span className="inline-flex rounded-full bg-brand-green/10 px-4 py-1.5 text-sm font-semibold text-brand-green">
          Ürün
        </span>
        <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-extrabold leading-tight text-brand-navy sm:text-3xl">
          Kiralama operasyonunuz için tek platform
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-brand-navy/55">
          Rent Okey, filo yönetiminden mobil saha operasyonuna kadar tüm süreçlerinizi tek bir
          platformda birleştirir.
        </p>
      </div>

      <div className="container-page divide-y divide-surface-border">
        {modules.map((module, i) => (
          <ModuleRow key={module.title} module={module} reverse={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
