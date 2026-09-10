import type { Locale } from "@/lib/locale";

export type PilotRuleMode = "action" | "checklist" | "information";

export type PilotRule = {
  id: string;
  title: string;
  description: string;
  mode: PilotRuleMode;
};

export type PilotRuleGroup = {
  id: string;
  title: string;
  description: string;
  rules: PilotRule[];
};

const tr: PilotRuleGroup[] = [
  {
    id: "continuity",
    title: "Operasyon sürekliliği",
    description: "Rezervasyonun araç, bakım ve hazırlık koşulları değiştiğinde uygulanabilir alternatifi görün.",
    rules: [
      { id: "preparation-time", title: "Yetersiz hazırlık süresi", description: "İade ile sonraki teslim arasında yeterli temizlik ve transfer süresi yoksa eşdeğer, müsait araca aktarma önerir.", mode: "action" },
      { id: "maintenance-conflict", title: "Bakım–rezervasyon çakışması", description: "Planlı bakım rezervasyonla çakıştığında bakımı erteleme veya rezervasyonu farklı araca atama seçeneklerini gösterir.", mode: "action" },
      { id: "category-capacity", title: "Kategori kapasitesi yetersizliği", description: "Talep edilen kategoride araç kalmadığında, müsait üst kategoriden ücretsiz yükseltme önerir.", mode: "action" },
    ],
  },
  {
    id: "branches",
    title: "Şube ve ekip kapasitesi",
    description: "Araçları ve gün içindeki operasyon yükünü şubeler arasında daha dengeli planlayın.",
    rules: [
      { id: "branch-transfer", title: "Şubeler arası araç sevkiyatı", description: "Bir şubede boşta duran aracı, aynı kategoride araçsız kalan başka şubedeki rezervasyon için önerir.", mode: "action" },
      { id: "hourly-capacity", title: "Teslim/iade yoğunlaşma riski", description: "Aynı saate kümelenen işlemler, şube için tanımladığınız saatlik kapasiteyi aştığında ekibi uyarır.", mode: "information" },
    ],
  },
  {
    id: "revenue",
    title: "Gelir ve yenileme fırsatları",
    description: "Boş gün, fiyat ve yenileme sinyallerini günlük operasyon içinde görünür hale getirin.",
    rules: [
      { id: "idle-vehicle", title: "Uzun süre boşta kalan araç", description: "Uzun süredir rezervasyon almayan araç için fiyatı gözden geçirme veya aracı öne çıkarma önerisi sunar.", mode: "action" },
      { id: "price-anomaly", title: "Fiyat anomalisi", description: "Düşük teklifi veya boşta kalan araç için oluşan indirim fırsatını işaretleyerek fiyat önerisi sunar.", mode: "action" },
      { id: "monthly-renewal", title: "Aylık kiralama yenilemesi", description: "Yenileme tarihi yaklaşan aylık kiralamayı gösterir ve kontrol edilmesi gereken adımları bir checklist halinde sunar.", mode: "checklist" },
    ],
  },
  {
    id: "fleet-health",
    title: "Filo sağlığı ve maliyet kontrolü",
    description: "Aksiyon gerektirmeyen fakat yönetim kararını etkileyen sapmaları ayrıca izleyin.",
    rules: [
      { id: "expense-anomaly", title: "Anormal bakım veya gider", description: "Olağan dışı bakım ya da gider kaydını bilgi olarak gösterir; araçta veya kayıtta otomatik değişiklik yapmaz.", mode: "information" },
      { id: "mileage-balance", title: "Kilometre dengesizliği", description: "Aynı şube ve kategorideki araçlar arasında 15.000 km'yi aşan fark oluştuğunda bilgi verir.", mode: "information" },
    ],
  },
];

const en: PilotRuleGroup[] = [
  {
    id: "continuity",
    title: "Operational continuity",
    description: "See an actionable alternative when vehicle, maintenance or preparation conditions change.",
    rules: [
      { id: "preparation-time", title: "Insufficient preparation time", description: "When cleaning and transfer time between a return and the next handover is too short, Pilot suggests an equivalent available vehicle.", mode: "action" },
      { id: "maintenance-conflict", title: "Maintenance–reservation conflict", description: "When planned maintenance conflicts with a reservation, Pilot shows options to postpone maintenance or assign another vehicle.", mode: "action" },
      { id: "category-capacity", title: "Insufficient category capacity", description: "When no vehicle remains in the requested category, Pilot suggests a complimentary upgrade from an available higher category.", mode: "action" },
    ],
  },
  {
    id: "branches",
    title: "Branch and team capacity",
    description: "Balance vehicles and daily operational workload across branches.",
    rules: [
      { id: "branch-transfer", title: "Inter-branch vehicle transfer", description: "Pilot suggests an idle vehicle at one branch for an unassigned same-category reservation at another branch.", mode: "action" },
      { id: "hourly-capacity", title: "Handover and return concentration", description: "The team is alerted when operations clustered in the same hour exceed the branch capacity defined in settings.", mode: "information" },
    ],
  },
  {
    id: "revenue",
    title: "Revenue and renewal opportunities",
    description: "Bring idle days, pricing and renewal signals into the daily operation.",
    rules: [
      { id: "idle-vehicle", title: "Long-idle vehicle", description: "For a vehicle without a recent booking, Pilot suggests reviewing its price or increasing its visibility.", mode: "action" },
      { id: "price-anomaly", title: "Price anomaly", description: "Pilot flags an unusually low quote or a discount opportunity for an idle vehicle and presents a pricing suggestion.", mode: "action" },
      { id: "monthly-renewal", title: "Monthly rental renewal", description: "Pilot highlights an approaching monthly renewal and presents the checks to complete as a checklist.", mode: "checklist" },
    ],
  },
  {
    id: "fleet-health",
    title: "Fleet health and cost control",
    description: "Monitor deviations that inform management decisions without triggering an action.",
    rules: [
      { id: "expense-anomaly", title: "Unusual maintenance or expense", description: "An unusual maintenance or expense record is shown for information; Pilot does not change the vehicle or record automatically.", mode: "information" },
      { id: "mileage-balance", title: "Mileage imbalance", description: "Pilot reports a difference greater than 15,000 km between vehicles in the same branch and category.", mode: "information" },
    ],
  },
];

export const pilotRuleGroups: Record<Locale, PilotRuleGroup[]> = { tr, en };

