import type { FaqItem } from "@/lib/faq";
import type { Locale } from "@/lib/locale";

export type ReportingContent = {
  locale: Locale;
  path: `/${string}`;
  title: string;
  description: string;
  eyebrow: string;
  heroTitle: string;
  heroDescription: string;
  proofLine: string;
  primaryCta: string;
  secondaryCta: string;
  questionsEyebrow: string;
  questionsTitle: string;
  questionsDescription: string;
  questions: { title: string; description: string }[];
  reportsEyebrow: string;
  reportsTitle: string;
  reportGroups: { title: string; description: string; items: string[] }[];
  trustEyebrow: string;
  trustTitle: string;
  reliabilityTitle: string;
  reliabilityDescription: string;
  reliabilityItems: string[];
  exportTitle: string;
  exportDescription: string;
  exportItems: string[];
  rolesTitle: string;
  rolesDescription: string;
  roles: { title: string; description: string }[];
  relatedTitle: string;
  relatedDescription: string;
  relatedLabel: string;
  relatedHref: string;
  faqTitle: string;
  faqs: FaqItem[];
};

const tr: ReportingContent = {
  locale: "tr",
  path: "/arac-kiralama-raporlama-ve-filo-analizi",
  title: "Araç Kiralama Raporlama ve Filo Analizi",
  description:
    "Ciro, operasyonel katkı, filo kullanımı, tahsilat, bakım ve araç duruşunu şube, kategori ve araç bazında analiz edin. Rent Okey raporlama özelliklerini inceleyin.",
  eyebrow: "Raporlama ve karar desteği",
  heroTitle: "Filonuzun nerede kazandığını, nerede kaynak kaybettiğini görün.",
  heroDescription:
    "Ciro, operasyonel katkı, kullanım, tahsilat ve bakım verilerini tek raporlama merkezinde karşılaştırın. Özetten sonucu oluşturan rezervasyon, araç ve gider kayıtlarına kadar inin.",
  proofLine: "Yönetim özeti, hazır operasyon raporları ve filtre kapsamını koruyan dışa aktarımlar aynı veri yapısını kullanır.",
  primaryCta: "21 gün ücretsiz deneyin",
  secondaryCta: "Rapor kapsamını inceleyin",
  questionsEyebrow: "Yönetim soruları",
  questionsTitle: "Toplamları göstermekle kalmaz; sonucun nedenini araştırmanıza yardım eder.",
  questionsDescription:
    "Dönemi, şubeyi, araç kategorisini veya plakayı değiştirerek aynı sonucu farklı operasyon katmanlarında inceleyin.",
  questions: [
    { title: "Filom ne kadar katkı üretiyor?", description: "Toplam ciroyu, operasyonel katkıyı, katkı marjını, ADR'yi ve müsait araç başına geliri aynı dönemde değerlendirin." },
    { title: "Hangi şube veya kategori geride?", description: "Şube, araç kategorisi ve araç bazında gelir, gider, kullanım ve katkı sonuçlarını karşılaştırın." },
    { title: "Hangi gelir henüz tahsil edilmedi?", description: "Tahsil edilmemiş bakiyeden toplamı oluşturan rezervasyonlara geçin; ödeme ve müşteri iadesi hareketlerini yöntem bazında inceleyin." },
    { title: "Araç neden gelir kaybediyor?", description: "Bakım maliyeti, duruş süresi, kullanım ve araç-ay gelir/gider dökümünü birlikte okuyun." },
    { title: "Operasyon nerede gecikiyor?", description: "Teslim ve iadeyi ayrı değerlendirin; zamanında işlem oranını, ortalama gecikmeyi ve P90 gecikme eşiğini görün." },
    { title: "Bu dönem ne değişti?", description: "Sonucu önceki eşdeğer dönem ve geçen yılın aynı dönemiyle karşılaştırın; aylık gelir ve katkı eğilimini izleyin." },
  ],
  reportsEyebrow: "Hazır raporlar",
  reportsTitle: "Yönetim, finans ve saha operasyonu için ortak bir rapor merkezi.",
  reportGroups: [
    {
      title: "Günlük Operasyon Planı",
      description: "Günün teslim ve iadelerini saat sırasıyla, bekliyor, gecikti ve tamamlandı durumlarıyla izleyin.",
      items: ["Şube, işlem türü ve durum filtresi", "Saat sıralı teslim/iade listesi", "Ekran açıkken dakikada bir güncellenen durumlar"],
    },
    {
      title: "Tahsilat Hareketleri",
      description: "Tahsilatları ve müşteri iadelerini ödeme yöntemi ve bağlantılı operasyon kaydıyla inceleyin.",
      items: ["Nakit, kredi kartı, havale/EFT ve diğer yöntemler", "Ödeme yöntemine göre net toplam", "Rezervasyon, müşteri, plaka ve referans bilgileri"],
    },
    {
      title: "Açık İşler ve Riskler",
      description: "Operasyonu aksatabilecek işleri tekilleştirilmiş, aksiyon alınabilir bir listede görün.",
      items: ["Geciken teslim ve iadeler", "Araç atanmamış rezervasyonlar ve çakışmalar", "Süresi geçmiş veya yaklaşan araç belgeleri"],
    },
    {
      title: "Filo ve finans raporları",
      description: "Uzun dönem performansı araç, maliyet ve kullanım ilişkisiyle değerlendirin.",
      items: ["Aylık Rezervasyon Planı", "Araç-Ay Gelir/Gider ve Araç Duruş dökümleri", "Bakım Maliyeti ve Muhasebe dökümleri", "Türkiye firmaları için koşullu HGS Geçiş Raporu"],
    },
  ],
  trustEyebrow: "Veri güvenilirliği",
  trustTitle: "Bir sayının kapsamını ve nasıl hesaplandığını görün.",
  reliabilityTitle: "Rapor bağlamı görünür kalır",
  reliabilityDescription:
    "Yükleme hataları boş veya sıfır sonuç gibi gösterilmez. Kullanıcı sayfadan ayrılmadan yeniden deneyebilir.",
  reliabilityItems: ["Veri kapsamı ve aktif filtreler", "Kullanılan veri kaynakları", "Son başarılı yükleme zamanı", "Hesaplama yöntemi", "Firma saat dilimi"],
  exportTitle: "Seçili kapsamı dışa aktarın",
  exportDescription:
    "Ekrandaki özet ile indirilen dosyanın kapsamı birbirinden kopmaz; Excel çıktısı seçili kayıtların tamamını içerir.",
  exportItems: ["Detaylı Excel", "Muhasebe Excel'i", "Yazdırılabilir/PDF görünüm", "Filtre kapsamını koruyan paylaşım bağlantısı", "Dosya içinde dönem, kapsam, saat dilimi ve hesaplama açıklaması"],
  rolesTitle: "Rol ve şube kapsamına göre erişim",
  rolesDescription:
    "Tek şubeli firmalarda gereksiz şube filtresi gösterilmez. Yetkili şube kapsamı, görev rolüne göre sabitlenebilir.",
  roles: [
    { title: "Firma sahibi", description: "Firma genelindeki yönetim, finans ve operasyon raporlarına erişir." },
    { title: "Şube Müdürü", description: "Yalnızca yetkili olduğu şubenin yönetim, finans ve operasyon raporlarını görür." },
    { title: "Saha / Müşteri Temsilcisi", description: "Günlük Operasyon Planı ile Açık İşler ve Riskler raporlarını kullanır." },
    { title: "Diğer roller", description: "Görev kapsamıyla ilgisi olmayan raporlar kullanıcıya gösterilmez." },
  ],
  relatedTitle: "Raporun arkasındaki operasyonu tek yerde yönetin.",
  relatedDescription: "Rezervasyon, teslim/iade, bakım, tahsilat ve gider kayıtlarının raporlara nasıl bağlandığını inceleyin.",
  relatedLabel: "Araç kiralama programına gidin",
  relatedHref: "/arac-kiralama-programi",
  faqTitle: "Araç kiralama raporlaması hakkında sık sorulanlar",
  faqs: [
    { question: "Operasyonel katkı net kâr mıdır?", answer: "Hayır. Operasyonel katkı, raporda açıklanan gelir ve operasyon gideri kapsamına göre hesaplanan bir yönetim göstergesidir; muhasebe net kârının yerine geçmez. Kullanılan kapsam ve hesaplama yöntemi rapor üzerinde gösterilir." },
    { question: "ADR ve RevPAC neyi gösterir?", answer: "ADR, ortalama günlük kiralama bedelini; RevPAC ise müsait araç başına geliri gösterir. Bu iki gösterge fiyat seviyesi ile kullanılabilir filo kapasitesinin gelir üretimini birlikte değerlendirmeye yardımcı olur." },
    { question: "Bir KPI'ın ayrıntısına inebilir miyim?", answer: "Evet. Desteklenen KPI'lardan toplamı oluşturan kayıtlara geçebilir; rezervasyon veya araç detayını rapordan ayrılmadan açabilirsiniz. Detay penceresi kapatıldığında aktif filtreler korunur." },
    { question: "Raporları Excel veya PDF olarak alabilir miyim?", answer: "Evet. Yetkili kullanıcılar seçili filtre kapsamını detaylı Excel veya muhasebe Excel'i olarak dışa aktarabilir ve yazdırılabilir/PDF görünümü kullanabilir." },
    { question: "Bütün kullanıcılar finans raporlarını görebilir mi?", answer: "Hayır. Rapor erişimi rol ve şube kapsamına göre belirlenir. Kullanıcı yalnızca göreviyle ilgili ve yetkili olduğu firma veya şube kapsamındaki raporları görür." },
  ],
};

const en: ReportingContent = {
  ...tr,
  locale: "en",
  path: "/en/car-rental-reporting-and-fleet-analytics",
  title: "Car Rental Reporting and Fleet Analytics",
  description:
    "Analyse revenue, operating contribution, fleet utilisation, collections, maintenance and vehicle downtime by branch, category and vehicle with Rent Okey.",
  eyebrow: "Reporting and decision support",
  heroTitle: "See where your fleet earns and where resources are being lost.",
  heroDescription:
    "Compare revenue, operating contribution, utilisation, collections and maintenance in one reporting centre. Drill from the summary into the reservations, vehicles and expenses behind each result.",
  proofLine: "The management summary, ready-to-use operational reports and filter-aware exports use the same data structure.",
  primaryCta: "Start a 21-day free trial",
  secondaryCta: "Explore report coverage",
  questionsEyebrow: "Management questions",
  questionsTitle: "Go beyond totals and investigate what produced the result.",
  questionsDescription: "Change the period, branch, vehicle category or registration plate to examine the same result across operational layers.",
  questions: [
    { title: "How much contribution does the fleet generate?", description: "Review total revenue, operating contribution, contribution margin, ADR and revenue per available car for the same period." },
    { title: "Which branch or category is underperforming?", description: "Compare revenue, expenses, utilisation and contribution by branch, vehicle category and individual vehicle." },
    { title: "Which revenue is still outstanding?", description: "Move from the outstanding balance to its reservations, and review collections and customer refunds by payment method." },
    { title: "Why is a vehicle losing revenue?", description: "Read maintenance cost, downtime, utilisation and the vehicle-month income and expense statement together." },
    { title: "Where is the operation running late?", description: "Analyse handovers and returns separately, including on-time rate, average delay and the P90 delay threshold." },
    { title: "What changed this period?", description: "Compare results with the previous equivalent period and the same period last year, then follow monthly revenue and contribution trends." },
  ],
  reportsEyebrow: "Ready-to-use reports",
  reportsTitle: "One reporting centre for management, finance and field operations.",
  reportGroups: [
    { title: "Daily Operations Plan", description: "Track the day's handovers and returns in time order with pending, delayed and completed states.", items: ["Branch, operation type and status filters", "Time-ordered handover and return list", "Statuses refreshed every minute while the screen is open"] },
    { title: "Collection Movements", description: "Review collections and customer refunds by payment method and connected operational record.", items: ["Cash, card, bank transfer and other methods", "Net total by payment method", "Reservation, customer, registration plate and reference details"] },
    { title: "Open Work and Risks", description: "See issues that may disrupt the operation in a deduplicated, actionable list.", items: ["Late handovers and returns", "Unassigned reservations and conflicts", "Expired and approaching vehicle documents"] },
    { title: "Fleet and finance reports", description: "Evaluate long-term performance through the relationship between vehicles, cost and utilisation.", items: ["Monthly Reservation Plan", "Vehicle-Month Income/Expense and Vehicle Downtime statements", "Maintenance Cost and Accounting statements", "Conditional HGS Toll Report for businesses in Türkiye"] },
  ],
  trustEyebrow: "Data reliability",
  trustTitle: "See the scope of a number and how it was calculated.",
  reliabilityTitle: "Report context remains visible",
  reliabilityDescription: "Loading failures are never presented as empty or zero results. Users can retry without leaving the page.",
  reliabilityItems: ["Data scope and active filters", "Data sources used", "Last successful load time", "Calculation method", "Company time zone"],
  exportTitle: "Export the selected scope",
  exportDescription: "The on-screen summary and downloaded file stay aligned; Excel contains every record in the selected scope.",
  exportItems: ["Detailed Excel", "Accounting Excel", "Printable/PDF view", "Share link that preserves filter scope", "Period, scope, time zone and calculation notes inside the file"],
  rolesTitle: "Access by role and branch scope",
  rolesDescription: "Single-branch businesses do not see an unnecessary branch filter. Authorised branch scope can be fixed according to the user's role.",
  roles: [
    { title: "Company owner", description: "Accesses management, finance and operational reports across the company." },
    { title: "Branch Manager", description: "Sees management, finance and operational reports only for authorised branches." },
    { title: "Field / Customer Representative", description: "Uses the Daily Operations Plan and Open Work and Risks reports." },
    { title: "Other roles", description: "Reports unrelated to the user's responsibilities are not displayed." },
  ],
  relatedTitle: "Manage the operation behind every report in one place.",
  relatedDescription: "See how reservations, handovers, returns, maintenance, collections and expenses connect to reporting.",
  relatedLabel: "Explore the car rental software",
  relatedHref: "/en/car-rental-software",
  faqTitle: "Frequently asked questions about car rental reporting",
  faqs: [
    { question: "Is operating contribution the same as net profit?", answer: "No. Operating contribution is a management indicator calculated from the revenue and operating-expense scope explained in the report; it does not replace accounting net profit. The active scope and calculation method are displayed with the report." },
    { question: "What do ADR and RevPAC show?", answer: "ADR is the average daily rental rate. RevPAC is revenue per available car. Together, they help evaluate pricing level and how effectively available fleet capacity generates revenue." },
    { question: "Can I drill into the records behind a KPI?", answer: "Yes. Supported KPIs link to the records behind the total, and reservation or vehicle details can open without leaving the report. Active filters remain in place when the detail view closes." },
    { question: "Can reports be exported to Excel or PDF?", answer: "Yes. Authorised users can export the selected filter scope as detailed Excel or accounting Excel and use a printable/PDF view." },
    { question: "Can every user see financial reports?", answer: "No. Reporting access follows role and branch scope. Users only see reports relevant to their responsibilities and authorised company or branch scope." },
  ],
};

export const reportingPages = { tr, en } as const;
