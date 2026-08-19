export type Plan = {
  name: string;
  description: string;
  monthlyPrice: number | null;
  yearlyPrice: number | null;
  perVehicle: string;
  popular?: boolean;
  features: string[];
  ctaLabel?: string;
  ctaHref?: string;
};

export const plans: Plan[] = [
  {
    name: "Başlangıç",
    description: "1 – 10 araç",
    monthlyPrice: 1490,
    yearlyPrice: 1190,
    perVehicle: "~119 TL / araç",
    features: [
      "10 araca kadar tam yönetim",
      "Gantt zaman çizelgesi ve mobil saha ajandası",
      "Sınırsız kullanıcı / saha personeli",
      "WhatsApp üzerinden kiralama özeti paylaşımı",
    ],
  },
  {
    name: "Büyüme",
    description: "11 – 30 araç",
    monthlyPrice: 2890,
    yearlyPrice: 2290,
    perVehicle: "~76 TL / araç",
    popular: true,
    features: [
      "30 araca kadar tam kontrol",
      "Başlangıç paketindeki tüm özellikler",
      "Lokasyon takibi (havalimanı / otel / adrese teslim)",
      "Bakım, muayene, kasko ve sigorta hatırlatmaları",
      "Gelir / gider ve doluluk analizi raporları",
    ],
  },
  {
    name: "Profesyonel",
    description: "31 – 70 araç",
    monthlyPrice: 4990,
    yearlyPrice: 3990,
    perVehicle: "~57 TL / araç",
    features: [
      "70 araca kadar destek",
      "Büyüme paketindeki tüm özellikler",
      "Dijital hasar tespiti ve fotoğraflı ekspertiz",
      "Çoklu şube / lokasyon yönetimi",
      "Öncelikli VIP destek hattı",
    ],
  },
  {
    name: "Kurumsal",
    description: "70+ araç",
    monthlyPrice: null,
    yearlyPrice: null,
    perVehicle: "Filoya özel fiyatlandırma",
    features: [
      "Sınırsız araç",
      "Profesyonel paketindeki tüm özellikler",
      "Özel entegrasyon ve API erişimi",
      "Özel destek yöneticisi",
    ],
    ctaLabel: "Bize ulaşın",
    ctaHref: "/#iletisim",
  },
];

export const YEARLY_DISCOUNT = 0.2;
