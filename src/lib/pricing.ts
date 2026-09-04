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
      "Rezervasyon, müşteri / sürücü ve filo yönetimi",
      "Gantt, uygun araç önerisi ve önerilen odak",
      "Teslim / iade, bakım ve belge süresi takibi",
      "Gider, tahsilat ve yönetim raporları",
      "Excel / CSV içe aktarma ve Excel dışa aktarma",
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
      "Rezervasyon, müşteri / sürücü ve filo yönetimi",
      "Gantt, uygun araç önerisi ve önerilen odak",
      "Teslim / iade, bakım ve belge süresi takibi",
      "Gider, tahsilat ve yönetim raporları",
      "Excel / CSV içe aktarma ve Excel dışa aktarma",
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
      "Rezervasyon, müşteri / sürücü ve filo yönetimi",
      "Gantt, uygun araç önerisi ve önerilen odak",
      "Teslim / iade, bakım ve belge süresi takibi",
      "Gider, tahsilat ve yönetim raporları",
      "Excel / CSV içe aktarma ve Excel dışa aktarma",
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
      "Tüm mevcut Rent Okey özellikleri",
      "Sınırsız araç, kullanıcı ve şube",
      "Kuruma özel veri aktarımı ve kurulum desteği",
      "İhtiyaca göre rapor ve yetki kapsamı değerlendirmesi",
      "Özel destek yöneticisi",
    ],
    ctaLabel: "Bize ulaşın",
    ctaHref: "/#iletisim",
  },
];

export const YEARLY_DISCOUNT = 0.2;
