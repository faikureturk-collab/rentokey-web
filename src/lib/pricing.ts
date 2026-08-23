export type Plan = {
  name: string;
  description: string;
  audience: string;
  maxVehicles: number | null;
  includedUsers: string;
  includedBranches: string;
  supportLevel: string;
  monthlyPrice: number | null;
  yearlyPrice: number | null;
  popular?: boolean;
  features: string[];
  ctaLabel?: string;
  ctaHref?: string;
};

export const plans: Plan[] = [
  {
    name: "Başlangıç",
    description: "1 – 10 araç",
    audience: "Küçük filosunu düzenli bir sistemle yönetmek isteyen firmalar",
    maxVehicles: 10,
    includedUsers: "1 kullanıcı",
    includedBranches: "1 şube",
    supportLevel: "Standart destek",
    monthlyPrice: 1490,
    yearlyPrice: 1190,
    features: [
      "Rezervasyon, Gantt ve uygun araç önerisi",
      "Önerilen odak ve bağlamsal risk uyarıları",
      "Filo, teslim ve iade yönetimi",
      "Bakım ve belge süresi uyarıları",
      "Gider, ödeme ve temel raporlar",
      "CSV ile rezervasyon, gider, filo ve bakım aktarımı",
    ],
  },
  {
    name: "Büyüme",
    description: "11 – 30 araç",
    audience: "Ofis ve saha ekibini aynı operasyon akışında buluşturan firmalar",
    maxVehicles: 30,
    includedUsers: "5 kullanıcı",
    includedBranches: "1 şube",
    supportLevel: "Öncelikli destek",
    monthlyPrice: 2890,
    yearlyPrice: 2290,
    popular: true,
    features: [
      "Başlangıç paketindeki tüm özellikler",
      "5 pozisyonlu rol ve sayfa yetkilendirmesi",
      "Lokasyon takibi (havalimanı / otel / adrese teslim)",
      "Gelir, gider ve doluluk analizi",
      "Excel'e veri aktarımı",
    ],
  },
  {
    name: "Profesyonel",
    description: "31 – 70 araç",
    audience: "Yoğun, çok şubeli veya raporlama ihtiyacı yüksek operasyonlar",
    maxVehicles: 70,
    includedUsers: "15 kullanıcı",
    includedBranches: "3 şube",
    supportLevel: "Öncelikli destek",
    monthlyPrice: 4990,
    yearlyPrice: 3990,
    features: [
      "Büyüme paketindeki tüm özellikler",
      "Çoklu şube ve lokasyon yönetimi",
      "Fotoğraflı teslim, iade ve hasar kaydı",
      "Detaylı yetki ve aktivite geçmişi",
      "Şube ve araç bazlı gelişmiş raporlar",
    ],
  },
  {
    name: "Kurumsal",
    description: "71+ araç",
    audience: "Özel entegrasyon ve destek ihtiyacı olan büyük filolar",
    maxVehicles: null,
    includedUsers: "Sınırsız kullanıcı",
    includedBranches: "Sınırsız şube",
    supportLevel: "Özel destek yöneticisi",
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      "Profesyonel paketindeki tüm özellikler",
      "Özel entegrasyon ve API erişimi",
      "Veri aktarımı ve kurulum desteği",
      "Kuruma özel rapor ve yetki yapısı",
      "Özel destek yöneticisi",
    ],
    ctaLabel: "Bize ulaşın",
    ctaHref: "/#iletisim",
  },
];

export const YEARLY_DISCOUNT = 0.2;
