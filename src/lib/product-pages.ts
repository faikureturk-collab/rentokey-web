import type { FaqItem } from "@/lib/faq";
import type { Locale } from "@/lib/locale";

export type ProductPageVariant = "software" | "calendar";
export type ProductIconName =
  | "calendar"
  | "car"
  | "users"
  | "handover"
  | "wallet"
  | "wrench"
  | "focus"
  | "shield"
  | "upload"
  | "search"
  | "clock"
  | "layers";

export type ProductSeoContent = {
  locale: Locale;
  variant: ProductPageVariant;
  path: `/${string}`;
  title: string;
  description: string;
  eyebrow: string;
  heroTitle: string;
  heroDescription: string;
  primaryCta: string;
  secondaryCta: string;
  trustLine: string;
  outcomes: { value: string; label: string }[];
  featureEyebrow: string;
  featureTitle: string;
  featureDescription: string;
  features: { icon: ProductIconName; title: string; description: string }[];
  workflowEyebrow: string;
  workflowTitle: string;
  workflowDescription: string;
  steps: { number: string; title: string; description: string }[];
  calloutTitle: string;
  calloutDescription: string;
  calloutPoints: string[];
  relatedEyebrow: string;
  relatedTitle: string;
  relatedDescription: string;
  relatedLabel: string;
  relatedHref: string;
  faqEyebrow: string;
  faqTitle: string;
  faqs: FaqItem[];
};

const turkishSoftware: ProductSeoContent = {
  locale: "tr",
  variant: "software",
  path: "/arac-kiralama-programi",
  title: "Araç Kiralama Programı ve Filo Yönetimi",
  description:
    "Rezervasyon, filo, müşteri, teslim/iade, bakım, tahsilat ve raporları tek ekranda yöneten araç kiralama programını 21 gün ücretsiz deneyin.",
  eyebrow: "Araç kiralama operasyon yazılımı",
  heroTitle: "Rezervasyondan iadeye, filonuzun bütün operasyonu tek ekranda.",
  heroDescription:
    "Rent Okey; rezervasyon takvimini, araç uygunluğunu, müşteri ve sürücü kayıtlarını, teslim/iade işlerini, bakımı ve finansal takibi aynı operasyon akışında birleştirir.",
  primaryCta: "21 gün ücretsiz deneyin",
  secondaryCta: "Rezervasyon takvimini inceleyin",
  trustLine: "Kredi kartı yok · Kurulum ücreti yok · İlk 48 saatte Excel/CSV aktarım desteği",
  outcomes: [
    { value: "Tek plan", label: "rezervasyon ve filo görünümü" },
    { value: "Anlık", label: "teslim, iade ve risk takibi" },
    { value: "Yetkili", label: "ekip ve işlem erişimi" },
  ],
  featureEyebrow: "Temel ürün",
  featureTitle: "Günlük operasyon için gereken parçalar birlikte çalışır.",
  featureDescription:
    "Araç sayınız büyürken farklı tablolar ve mesajlar arasında kaybolmadan, aynı kayıt üzerinden planlayın ve aksiyon alın.",
  features: [
    { icon: "calendar", title: "Canlı rezervasyon takvimi", description: "Araçların kirada, müsait, bakımda ve hazırlıkta olduğu günleri sınıf bazında görün." },
    { icon: "users", title: "Müşteri ve sürücü yönetimi", description: "Kayıtlı müşteriyi bulun veya hızlıca oluşturun; farklı sürücüyü aynı rezervasyona bağlayın." },
    { icon: "handover", title: "Teslim ve iade operasyonu", description: "Günün teslim/iade kuyruğunu, lokasyonu, saati ve sorumlu aksiyonu tek yerde takip edin." },
    { icon: "wrench", title: "Filo, bakım ve süre takibi", description: "Bakım, muayene, sigorta ve diğer süreleri rezervasyon planıyla birlikte değerlendirin." },
    { icon: "wallet", title: "Tahsilat, gider ve raporlar", description: "Rezervasyon bakiyelerini, operasyon giderlerini, doluluğu ve yönetim sonuçlarını izleyin." },
    { icon: "focus", title: "Önerilen odak ve araç önerisi", description: "Eksik tahsilat, yetersiz hazırlık süresi veya araçsız rezervasyon gibi durumları önceden görün." },
  ],
  workflowEyebrow: "Geçiş ve kurulum",
  workflowTitle: "Mevcut verinizle başlayın, operasyonu adım adım devralın.",
  workflowDescription:
    "Yeni bir sisteme geçişte en büyük yük veriyi yeniden girmektir. Rent Okey, ekibinizin gerçek kayıtlarla başlamasını kolaylaştırır.",
  steps: [
    { number: "01", title: "Verinizi aktarın", description: "Müşteri, rezervasyon, filo, gider ve bakım kayıtlarını Excel veya CSV ile içeri alın." },
    { number: "02", title: "Ekibi ve şubeleri tanımlayın", description: "Kullanıcılara görevlerine göre sayfa ve işlem yetkileri verin." },
    { number: "03", title: "Canlı operasyonu yönetin", description: "Takvim, operasyon kuyruğu ve önerilen odak ile günlük işlere başlayın." },
  ],
  calloutTitle: "Küçük filoda sade, büyüyen filoda kontrollü.",
  calloutDescription:
    "Aynı temel özellikler araç sayısından bağımsız çalışır. Çoklu şube, pozisyon bazlı yetki ve toplu veri aktarımı; ekip ve filo büyürken düzenin korunmasına yardımcı olur.",
  calloutPoints: ["Çoklu şube ve teslim noktaları", "Pozisyon bazlı sayfa ve işlem yetkileri", "Excel/CSV içe ve dışa aktarım"],
  relatedEyebrow: "Planlama ekranı",
  relatedTitle: "Araç uygunluğunu gün gün görün.",
  relatedDescription:
    "Rezervasyon takviminin çakışmaları, hazırlık süresini, hızlı rezervasyonu ve büyük filo görünümünü nasıl yönettiğini inceleyin.",
  relatedLabel: "Rezervasyon takvimine gidin",
  relatedHref: "/arac-kiralama-rezervasyon-takvimi",
  faqEyebrow: "Karar öncesi",
  faqTitle: "Araç kiralama programı hakkında sık sorulanlar",
  faqs: [
    { question: "Rent Okey hangi büyüklükte filolar için uygundur?", answer: "Rent Okey küçük filolardan 70 ve üzeri araç yöneten çok şubeli operasyonlara kadar kullanılabilir. Temel özellikler araç sayısından bağımsızdır; fiyat araç sayısına göre hesaplanır." },
    { question: "Mevcut kayıtlarımı aktarabilir miyim?", answer: "Evet. Müşteri, rezervasyon, filo, gider ve bakım kayıtları Excel veya CSV ile içeri aktarılabilir. Deneme başladıktan sonraki ilk 48 saat içinde ilk aktarım için destek talep edebilirsiniz." },
    { question: "Ekipteki herkes bütün verilere erişir mi?", answer: "Hayır. Kullanıcılara görevlerine göre sayfa ve işlem yetkileri verilebilir. Böylece her ekip üyesi yalnızca sorumluluğundaki çalışma alanlarına erişir." },
    { question: "Program araç veya evrak eksiklerinde işlemi engeller mi?", answer: "Araç uygunluğu, sürücü ve evrak kontrolleri kullanıcıya açıkça gösterilir. Bu kontroller bilgilendiricidir; operasyon kararını yetkili kullanıcı verir." },
  ],
};

const turkishCalendar: ProductSeoContent = {
  locale: "tr",
  variant: "calendar",
  path: "/arac-kiralama-rezervasyon-takvimi",
  title: "Araç Kiralama Rezervasyon Takvimi",
  description:
    "Araç uygunluğunu, rezervasyon çakışmalarını, hazırlık sürelerini ve hızlı rezervasyonu tek zaman çizelgesinde yönetin.",
  eyebrow: "Canlı rezervasyon zaman çizelgesi",
  heroTitle: "Hangi araç, hangi gün, hangi müşteride? Tek bakışta görün.",
  heroDescription:
    "Rent Okey rezervasyon takvimi; araçların dolu ve boş günlerini, sınıfları, bakım durumunu ve hazırlık risklerini aynı zaman çizelgesinde gösterir.",
  primaryCta: "21 gün ücretsiz deneyin",
  secondaryCta: "Tüm araç kiralama programını inceleyin",
  trustLine: "7 gün · 14 gün · Ay görünümü · Masaüstü, tablet ve mobil erişim",
  outcomes: [
    { value: "Canlı", label: "araç uygunluk görünümü" },
    { value: "Hızlı", label: "takvimden rezervasyon" },
    { value: "Önceden", label: "çakışma ve hazırlık uyarısı" },
  ],
  featureEyebrow: "Takvimin yaptığı iş",
  featureTitle: "Sadece rezervasyonları değil, aradaki operasyonu da görün.",
  featureDescription:
    "İki kayıt takvimde çakışmasa bile temizlik, yakıt veya lokasyon transferi için süre yetmeyebilir. Zaman çizelgesi planı bu bağlamla birlikte okumanızı sağlar.",
  features: [
    { icon: "layers", title: "Sınıf ve araç bazlı görünüm", description: "Ekonomi, orta sınıf, SUV veya kendi araç gruplarınızı açıp kapatarak yoğunluğu yönetin." },
    { icon: "clock", title: "7 gün, 14 gün ve ay planı", description: "Günlük operasyon ile ileri tarihli filo planı arasında aynı kayıt yapısıyla geçiş yapın." },
    { icon: "search", title: "Arama ve durum filtreleri", description: "Plaka, model, sınıf ve araç durumuna göre yoğun takvimde doğru satıra hızla ulaşın." },
    { icon: "car", title: "Uygun araç önerisi", description: "Rezervasyon tarihi, sınıfı ve araç uygunluğuna göre atanabilecek seçenekleri görün." },
    { icon: "shield", title: "Çakışma ve hazırlık kontrolü", description: "Kesin çakışmayı; temizlik, transfer ve gecikme gibi operasyon risklerinden ayrı değerlendirin." },
    { icon: "calendar", title: "Takvimden hızlı rezervasyon", description: "Seçtiğiniz günlerde boş olan araca doğrudan hızlı rezervasyon akışını açın." },
  ],
  workflowEyebrow: "Rezervasyon akışı",
  workflowTitle: "Takvimden başlayın, müşteriye onayla tamamlayın.",
  workflowDescription:
    "Planlama ekranı yalnızca renkli bloklardan oluşmaz; müşteri, araç, fiyat ve onay kaydı aynı rezervasyonda birleşir.",
  steps: [
    { number: "01", title: "Tarih ve aracı seçin", description: "Boş gün aralığını görün; uygun araç veya sınıf üzerinden rezervasyonu başlatın." },
    { number: "02", title: "Müşteri ve fiyatı tamamlayın", description: "Müşteriyi seçin ya da oluşturun; taban fiyat, ek hizmet, indirim ve vergiyi netleştirin." },
    { number: "03", title: "Kaydedin ve paylaşın", description: "Rezervasyon numarasını oluşturun; onay bilgisini WhatsApp, e-posta veya PDF ile paylaşın." },
  ],
  calloutTitle: "Kontroller görünür, son karar sizde.",
  calloutDescription:
    "Araç çakışması, hazırlık süresi, sürücü ve evrak kontrolleri kaydetmeden önce özetlenir. Uyarılar operasyonu açıklığa kavuşturur; yetkili kullanıcıyı gereksiz yere durdurmaz.",
  calloutPoints: ["Kesin çakışma ile operasyon riski ayrımı", "Taslak rezervasyon desteği", "Teslim/iade için ayrı kontrol akışı"],
  relatedEyebrow: "Bütün operasyon",
  relatedTitle: "Takvimi filo ve finans kayıtlarıyla birleştirin.",
  relatedDescription:
    "Müşteri, teslim/iade, bakım, tahsilat, gider, rapor ve ekip yetkilerinin rezervasyon planıyla nasıl birlikte çalıştığını görün.",
  relatedLabel: "Araç kiralama programını inceleyin",
  relatedHref: "/arac-kiralama-programi",
  faqEyebrow: "Takvim hakkında",
  faqTitle: "Rezervasyon planlamasında sık sorulanlar",
  faqs: [
    { question: "Takvimde araçların boş günlerini görebilir miyim?", answer: "Evet. Araç satırlarında kirada, müsait, bakımda ve hazırlanıyor durumlarını tarih aralığıyla birlikte görebilir; uygun günlerden hızlı rezervasyon başlatabilirsiniz." },
    { question: "Aynı araca çakışan rezervasyon girilebilir mi?", answer: "Sistem kesin tarih çakışmasını kaydetmeden önce gösterir. Ayrıca çakışma olmasa bile iade ile sonraki teslim arasında temizlik veya transfer için yetersiz süre varsa bunu ayrı bir operasyon riski olarak bildirir." },
    { question: "Aylık kiralamalar da aynı takvimde görünür mü?", answer: "Evet. Günlük ve uzun süreli kiralamalar aynı zaman çizelgesinde farklı tarih aralıklarıyla görünür; böylece aracın ileri tarihli doluluğu birlikte değerlendirilir." },
    { question: "Takvim mobil ve tablette kullanılabilir mi?", answer: "Evet. Masaüstü görünümü yoğun planlama için, tablet ve mobil görünüm ise sıradaki teslim, iade ve hızlı operasyon aksiyonları için düzenlenmiştir." },
  ],
};

const englishSoftware: ProductSeoContent = {
  ...turkishSoftware,
  locale: "en",
  path: "/en/car-rental-software",
  title: "Car Rental Software and Fleet Management",
  description: "Manage reservations, vehicles, customers, handovers, returns, maintenance, payments and reports in one car rental software platform.",
  eyebrow: "Car rental operations software",
  heroTitle: "Run the whole rental operation, from reservation to return, in one place.",
  heroDescription: "Rent Okey brings the reservation calendar, vehicle availability, customer and driver records, handovers, returns, maintenance and financial tracking into one operational flow.",
  primaryCta: "Start a 21-day free trial",
  secondaryCta: "Explore the reservation calendar",
  trustLine: "No credit card · No setup fee · Excel/CSV migration support in the first 48 hours",
  outcomes: [
    { value: "One plan", label: "for reservations and fleet" },
    { value: "Live", label: "handover, return and risk tracking" },
    { value: "Controlled", label: "role and action access" },
  ],
  featureEyebrow: "Core product",
  featureTitle: "The tools needed for daily operations work together.",
  featureDescription: "As your fleet grows, plan and act from the same record instead of losing context across spreadsheets and messages.",
  features: [
    { icon: "calendar", title: "Live reservation calendar", description: "See when vehicles are rented, available, in maintenance or being prepared, grouped by class." },
    { icon: "users", title: "Customer and driver management", description: "Find an existing customer or create one quickly, and attach a different driver to the reservation." },
    { icon: "handover", title: "Handover and return operations", description: "Track today’s queue, location, time and responsible action in one operational view." },
    { icon: "wrench", title: "Fleet, maintenance and deadlines", description: "Review maintenance, inspection, insurance and other deadlines alongside the reservation plan." },
    { icon: "wallet", title: "Payments, expenses and reports", description: "Monitor reservation balances, operating expenses, occupancy and management results." },
    { icon: "focus", title: "Recommended Focus and vehicle suggestions", description: "See outstanding balances, short preparation windows and unassigned reservations before they become delays." },
  ],
  workflowEyebrow: "Migration and setup",
  workflowTitle: "Start with your existing data and move the operation in stages.",
  workflowDescription: "Re-entering records is often the largest migration burden. Rent Okey helps your team begin with real operational data.",
  steps: [
    { number: "01", title: "Import your data", description: "Bring in customers, reservations, fleet, expenses and maintenance records from Excel or CSV." },
    { number: "02", title: "Set up teams and branches", description: "Give users page and action permissions that match their responsibilities." },
    { number: "03", title: "Run live operations", description: "Start daily work with the timeline, operation queue and Recommended Focus." },
  ],
  calloutTitle: "Simple for a small fleet, controlled as the business grows.",
  calloutDescription: "The same core capabilities work regardless of vehicle count. Multiple branches, role-based permissions and bulk migration help preserve order as the fleet and team expand.",
  calloutPoints: ["Multiple branches and delivery locations", "Role-based page and action permissions", "Excel/CSV import and export"],
  relatedEyebrow: "Planning workspace",
  relatedTitle: "See vehicle availability day by day.",
  relatedDescription: "Explore how the reservation calendar handles conflicts, preparation time, quick booking and high-density fleet planning.",
  relatedLabel: "View the reservation calendar",
  relatedHref: "/en/car-rental-reservation-calendar",
  faqEyebrow: "Before you decide",
  faqTitle: "Frequently asked questions about car rental software",
  faqs: [
    { question: "What fleet sizes is Rent Okey suitable for?", answer: "Rent Okey supports operations from small fleets to multi-branch businesses with 70 or more vehicles. Core capabilities do not change by fleet size; pricing is calculated by vehicle count." },
    { question: "Can I migrate my current records?", answer: "Yes. Customer, reservation, fleet, expense and maintenance records can be imported from Excel or CSV. You can request assistance with the first import during the first 48 hours of your trial." },
    { question: "Does every team member see all company data?", answer: "No. Page and action permissions can be assigned according to each user’s responsibilities, so team members only access the areas relevant to their work." },
    { question: "Does the software block work when vehicle or document checks are incomplete?", answer: "Vehicle availability, driver and document checks are clearly shown to the user. They are informative checks; the authorised user keeps control of the operational decision." },
  ],
};

const englishCalendar: ProductSeoContent = {
  ...turkishCalendar,
  locale: "en",
  path: "/en/car-rental-reservation-calendar",
  title: "Car Rental Reservation Calendar",
  description: "Manage vehicle availability, reservation conflicts, preparation time and quick bookings in one live car rental reservation calendar.",
  eyebrow: "Live reservation timeline",
  heroTitle: "Which vehicle, which date, which customer? See it at a glance.",
  heroDescription: "The Rent Okey reservation calendar shows booked and available dates, vehicle classes, maintenance status and preparation risks on the same timeline.",
  primaryCta: "Start a 21-day free trial",
  secondaryCta: "Explore the complete car rental software",
  trustLine: "7-day · 14-day · Monthly views · Desktop, tablet and mobile access",
  outcomes: [
    { value: "Live", label: "vehicle availability" },
    { value: "Quick", label: "bookings from the calendar" },
    { value: "Early", label: "conflict and preparation alerts" },
  ],
  featureEyebrow: "What the calendar does",
  featureTitle: "See the operation between reservations, not only the bookings.",
  featureDescription: "Two bookings may not overlap but still leave too little time for cleaning, fuelling or location transfer. The timeline helps your team read the plan with that context.",
  features: [
    { icon: "layers", title: "Vehicle and class grouping", description: "Expand or collapse Economy, Mid-size, SUV or your own vehicle groups to manage a dense plan." },
    { icon: "clock", title: "7-day, 14-day and monthly planning", description: "Move between daily operations and forward fleet planning without changing the underlying records." },
    { icon: "search", title: "Search and status filters", description: "Reach the right row quickly by registration plate, model, class and vehicle status." },
    { icon: "car", title: "Suitable vehicle suggestions", description: "See assignable options based on reservation dates, requested class and vehicle availability." },
    { icon: "shield", title: "Conflict and preparation checks", description: "Treat hard date conflicts separately from cleaning, transfer and delay risks." },
    { icon: "calendar", title: "Quick booking from the timeline", description: "Open the quick reservation flow directly on a vehicle that is free for the selected dates." },
  ],
  workflowEyebrow: "Reservation flow",
  workflowTitle: "Start on the calendar and finish with customer confirmation.",
  workflowDescription: "The planning screen is more than coloured blocks: customer, vehicle, pricing and confirmation become one reservation record.",
  steps: [
    { number: "01", title: "Choose dates and a vehicle", description: "See the available interval and start from a suitable vehicle or requested class." },
    { number: "02", title: "Complete customer and pricing", description: "Select or create the customer, then clarify base price, extras, discount and tax." },
    { number: "03", title: "Save and share", description: "Create the reservation number and share confirmation by WhatsApp, email or PDF." },
  ],
  calloutTitle: "Checks stay visible; the final decision stays with you.",
  calloutDescription: "Vehicle conflicts, preparation time, driver and document checks are summarised before saving. Alerts clarify the operation without unnecessarily blocking an authorised user.",
  calloutPoints: ["Hard conflicts separated from operational risk", "Draft reservation support", "Separate handover and return control flow"],
  relatedEyebrow: "Complete operation",
  relatedTitle: "Connect the calendar with fleet and financial records.",
  relatedDescription: "See how customers, handovers, returns, maintenance, payments, expenses, reports and team permissions work with the reservation plan.",
  relatedLabel: "Explore the car rental software",
  relatedHref: "/en/car-rental-software",
  faqEyebrow: "About the calendar",
  faqTitle: "Frequently asked questions about reservation planning",
  faqs: [
    { question: "Can I see each vehicle’s available dates?", answer: "Yes. Vehicle rows show rented, available, maintenance and preparation periods. You can start a quick reservation from an available date range." },
    { question: "Can conflicting reservations be entered for the same vehicle?", answer: "The system shows a hard date conflict before saving. It also reports a separate operational risk when a return and the next handover leave too little time for cleaning or transfer." },
    { question: "Are monthly rentals shown on the same calendar?", answer: "Yes. Daily and long-term rentals appear on the same timeline with their date ranges, helping the team assess future availability together." },
    { question: "Can the calendar be used on mobile and tablet?", answer: "Yes. Desktop is optimised for dense planning, while tablet and mobile views focus on upcoming handovers, returns and quick operational actions." },
  ],
};

export const productPages = {
  tr: { software: turkishSoftware, calendar: turkishCalendar },
  en: { software: englishSoftware, calendar: englishCalendar },
} as const;
