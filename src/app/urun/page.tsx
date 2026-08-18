import type { Metadata } from "next";
import { CalendarRange, Smartphone, BarChart3, Car } from "lucide-react";
import PageHero from "@/components/PageHero";
import Button from "@/components/Button";
import ModuleRow from "@/components/ModuleRow";
import HowItWorks from "@/components/home/HowItWorks";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Ürün",
  description:
    "Rent Okey; filo yönetimi, rezervasyon ve takvim, mobil saha uygulaması ile raporlama modüllerini tek platformda birleştirir.",
};

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

export default function UrunPage() {
  return (
    <>
      <PageHero
        eyebrow="Ürün"
        title="Kiralama operasyonunuz için tek platform"
        description="Rent Okey, filo yönetiminden mobil saha operasyonuna kadar tüm süreçlerinizi tek bir platformda birleştirir."
      >
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/ucretsiz-dene" size="lg" icon>
            Ücretsiz dene
          </Button>
          <Button href="/fiyatlandirma" variant="secondary" size="lg">
            Fiyatları incele
          </Button>
        </div>
      </PageHero>

      <div className="container-page divide-y divide-surface-border">
        {modules.map((module, i) => (
          <ModuleRow key={module.title} module={module} reverse={i % 2 === 1} />
        ))}
      </div>

      <HowItWorks />
      <CtaBanner />
    </>
  );
}
