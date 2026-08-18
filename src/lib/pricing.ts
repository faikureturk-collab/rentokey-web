export type Plan = {
  name: string;
  description: string;
  monthlyPrice: number;
  popular?: boolean;
  features: string[];
};

export const plans: Plan[] = [
  {
    name: "Başlangıç",
    description: "Küçük ekipler için ideal",
    monthlyPrice: 990,
    features: ["10 araca kadar", "Temel özellikler", "Mobil uygulama", "E-posta desteği"],
  },
  {
    name: "Profesyonel",
    description: "Büyüyen işletmeler için",
    monthlyPrice: 1990,
    popular: true,
    features: ["50 araca kadar", "Tüm özellikler", "Raporlar ve analizler", "Öncelikli destek"],
  },
  {
    name: "Kurumsal",
    description: "Büyük filolar için",
    monthlyPrice: 3990,
    features: ["Sınırsız araç", "Gelişmiş yetkilendirme", "Özel raporlama", "Özel destek yöneticisi"],
  },
];

export const YEARLY_DISCOUNT = 0.2;
