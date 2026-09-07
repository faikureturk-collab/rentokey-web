export type RateBand = {
  from: number;
  to: number;
  rate: number;
};

/** Aylık taban ücret; araç sayısından bağımsız, herkes öder. */
export const BASE_FEE = 390;

/**
 * Araç başına düşen ek ücret, kademeli (marjinal) olarak hesaplanır — vergi dilimi mantığı.
 * Her araç yalnızca kendi bandının oranından ücretlendirilir, bant değiştiğinde geçmiş
 * araçların fiyatı değişmez. Bu yüzden basamak sınırlarında ani sıçrama olmaz.
 */
export const RATE_BANDS: RateBand[] = [
  { from: 1, to: 15, rate: 140 },
  { from: 16, to: 40, rate: 100 },
  { from: 41, to: 80, rate: 75 },
  { from: 81, to: 150, rate: 65 },
];

/** Bu sayının üzerindeki filolar için fiyat hesaplayıcı yerine özel teklif süreci işletilir. */
export const SELF_SERVICE_MAX_VEHICLES = 150;

export const YEARLY_DISCOUNT = 0.2;

/**
 * Verilen araç sayısı için aylık ücreti hesaplar (KDV hariç).
 * Aralık dışı (1'den küçük veya SELF_SERVICE_MAX_VEHICLES'tan büyük) değerler için null döner;
 * bu durumda arayüz "Özel teklif" göstermelidir.
 */
export function computeMonthlyPrice(vehicleCount: number): number | null {
  if (!Number.isInteger(vehicleCount) || vehicleCount < 1 || vehicleCount > SELF_SERVICE_MAX_VEHICLES) {
    return null;
  }

  let total = BASE_FEE;
  for (const band of RATE_BANDS) {
    if (vehicleCount >= band.from) {
      const countInBand = Math.min(vehicleCount, band.to) - band.from + 1;
      total += countInBand * band.rate;
    }
  }
  return Math.round(total);
}

export type PriceBreakdownRow = {
  label: string;
  amount: number;
};

/** Bir faturanın hangi kademelerden oluştuğunu satır satır döner (taban ücret dahil). */
export function computePriceBreakdown(vehicleCount: number): PriceBreakdownRow[] {
  const rows: PriceBreakdownRow[] = [{ label: "Taban ücret", amount: BASE_FEE }];
  for (const band of RATE_BANDS) {
    if (vehicleCount >= band.from) {
      const upper = Math.min(vehicleCount, band.to);
      const countInBand = upper - band.from + 1;
      rows.push({
        label: `${band.from}–${upper}. araç (×₺${band.rate})`,
        amount: countInBand * band.rate,
      });
    }
  }
  return rows;
}

export type FeatureGroup = {
  key: "operasyon" | "ekip" | "finans" | "veri";
  title: string;
  items: string[];
};

/**
 * "Taban fiyata ne dahil?" sorusuna doğrudan cevap: temel ürün özellikleri araç sayısına göre
 * kilitlenmiyor, tüm filolar aynı seti kullanır. RentOkey Pilot ve diğer opsiyonel ek modüller
 * bu listeye dahil değildir; ayrıca satın alınır.
 */
export const includedFeatureGroups: FeatureGroup[] = [
  {
    key: "operasyon",
    title: "Operasyon",
    items: [
      "Rezervasyon ve canlı zaman çizelgesi",
      "Otomatik uygun araç önerisi",
      "Önerilen odak ve operasyon riski takibi",
      "Filo, teslim ve iade yönetimi",
      "Bakım ve belge süresi uyarıları",
      "Mobil operasyon ekranı",
    ],
  },
  {
    key: "ekip",
    title: "Ekip ve yetki",
    items: [
      "Rol ve sayfa bazlı yetkilendirme",
      "Sınırsız kullanıcı ve şube",
      "Çoklu şube ve lokasyon yönetimi",
      "Teslim noktası takibi",
    ],
  },
  {
    key: "finans",
    title: "Finans ve raporlama",
    items: [
      "Gider, tahsilat ve temel raporlar",
      "Gelir, gider ve doluluk analizi",
      "Şube ve araç bazlı gelişmiş raporlar",
    ],
  },
  {
    key: "veri",
    title: "Veri ve bağlantılar",
    items: [
      "Excel / CSV içe ve dışa aktarım",
      "Rezervasyon onay belgesi ve paylaşım",
      "Genel arama ve merkezi bildirimler",
      "B2B / kurumsal ortak erişimi",
    ],
  },
];

export type EnterpriseSupport = {
  name: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
};

/**
 * Ölçekle gerçekten orantılı olan tek şey hizmet seviyesi — bu da araç sayısından bağımsız,
 * isteğe bağlı bir ek hizmet olarak sunuluyor; ürün özelliği değil.
 */
export const enterpriseSupport: EnterpriseSupport = {
  name: "Kurumsal Destek",
  description: "Araç sayısından bağımsız · isteğe bağlı ek hizmet",
  features: [
    "Özel destek yöneticisi, öncelikli SLA",
    "Beraber onboarding, kuruma özel veri taşıma ve kurulum desteği",
    "İhtiyaca göre rapor ve yetki kapsamı danışmanlığı",
    "Yol haritasındaki yeni modüllere öncelikli erken erişim",
  ],
  ctaLabel: "Bize ulaşın",
  ctaHref: "/#iletisim",
};
