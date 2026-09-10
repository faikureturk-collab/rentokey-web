import { englishFaqGroups, faqGroups, type FaqGroup } from "@/lib/faq";
import { computeMonthlyPrice, SELF_SERVICE_MAX_VEHICLES } from "@/lib/pricing";
import { DEFAULT_DESCRIPTION, LINKEDIN_URL, SITE_NAME, SITE_URL } from "@/lib/seo";
import type { ProductSeoContent } from "@/lib/product-pages";
import { pilotRuleGroups } from "@/lib/pilot-rules";

const organizationId = `${SITE_URL}/#organization`;
const websiteId = `${SITE_URL}/#website`;
const softwareId = `${SITE_URL}/#software`;
const faqId = `${SITE_URL}/#faq`;

// Fiyat artık 4 sabit paket değil, araç sayısına göre sürekli hesaplanan bir formül;
// bu yüzden tek bir Offer yerine 1-150 araç aralığını kapsayan bir AggregateOffer bildiriyoruz.
const lowPrice = computeMonthlyPrice(1);
const highPrice = computeMonthlyPrice(SELF_SERVICE_MAX_VEHICLES);

const offers = [
  {
    "@type": "AggregateOffer",
    priceCurrency: "TRY",
    lowPrice: String(lowPrice),
    highPrice: String(highPrice),
    offerCount: SELF_SERVICE_MAX_VEHICLES,
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/#fiyatlandirma`,
    description: `Araç sayınıza göre hesaplanan aylık ücret (1 – ${SELF_SERVICE_MAX_VEHICLES} araç); ${SELF_SERVICE_MAX_VEHICLES} araç üzeri filolar için özel teklif sunulur.`,
  },
];

function createFaqMainEntity(groups: FaqGroup[]) {
  return groups.flatMap((group) =>
  group.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })));
}

const faqMainEntity = createFaqMainEntity(faqGroups);

export const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: SITE_NAME,
      alternateName: "RentOkey",
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      image: `${SITE_URL}/og.png`,
      sameAs: [LINKEDIN_URL],
      email: "hello@rentokey.com",
      telephone: "+90 541 390 10 20",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Maslak Mah. Eski Büyükdere Cad. No:27",
        addressLocality: "Sarıyer",
        addressRegion: "İstanbul",
        addressCountry: "TR",
      },
      areaServed: [
        { "@type": "Country", name: "Türkiye" },
        { "@type": "Place", name: "Kuzey Kıbrıs Türk Cumhuriyeti" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: SITE_URL,
      name: SITE_NAME,
      alternateName: "RentOkey",
      description: DEFAULT_DESCRIPTION,
      inLanguage: "tr-TR",
      publisher: { "@id": organizationId },
    },
    {
      "@type": ["SoftwareApplication", "WebApplication"],
      "@id": softwareId,
      name: SITE_NAME,
      url: SITE_URL,
      description: DEFAULT_DESCRIPTION,
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Araç kiralama operasyon ve filo yönetimi",
      operatingSystem: "Web",
      browserRequirements: "Güncel bir web tarayıcısı",
      inLanguage: "tr-TR",
      image: `${SITE_URL}/og.png`,
      provider: { "@id": organizationId },
      offers,
      featureList: [
        "Rezervasyon ve canlı zaman çizelgesi",
        "Müşteri ve sürücü yönetimi",
        "Otomatik uygun araç önerisi",
        "Araç teslim ve iade yönetimi",
        "Filo, bakım ve belge süresi takibi",
        "Gider, tahsilat ve yönetim raporları",
        "Müşteri, rezervasyon, filo, gider ve bakım için Excel ve CSV aktarımı",
        "Rezervasyon onay belgesi ve paylaşım",
        "Genel arama ve merkezi bildirimler",
        "Pozisyon bazlı sayfa yetkilendirmesi",
        "Önerilen odak ve bağlamsal risk uyarıları",
        "Opsiyonel RentOkey Pilot: operasyon optimizasyonu, akıllı fiyat önerisi ve kullanıcı onaylı plan uygulama",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": faqId,
      url: `${SITE_URL}/#sss`,
      name: "Rent Okey — Sıkça sorulan sorular",
      inLanguage: "tr-TR",
      isPartOf: { "@id": websiteId },
      about: { "@id": softwareId },
      mainEntity: faqMainEntity,
    },
  ],
};

const englishDescription =
  "Rent Okey is car rental operations and fleet management software for reservations, vehicles, handovers, returns, payments, maintenance and operational risks.";

const englishOffers = [
  {
    ...offers[0],
    url: `${SITE_URL}/en#pricing`,
    description: `Monthly pricing calculated by vehicle count for fleets of 1–${SELF_SERVICE_MAX_VEHICLES} vehicles; larger fleets receive a tailored quote.`,
  },
];

export const englishHomeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: SITE_NAME,
      alternateName: "RentOkey",
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      image: `${SITE_URL}/og.png`,
      sameAs: [LINKEDIN_URL],
      email: "hello@rentokey.com",
      telephone: "+90 541 390 10 20",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Maslak Mah. Eski Büyükdere Cad. No:27",
        addressLocality: "Sarıyer",
        addressRegion: "İstanbul",
        addressCountry: "TR",
      },
      areaServed: [
        { "@type": "Country", name: "Türkiye" },
        { "@type": "Place", name: "Northern Cyprus" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: SITE_URL,
      name: SITE_NAME,
      alternateName: "RentOkey",
      description: englishDescription,
      inLanguage: ["tr-TR", "en"],
      publisher: { "@id": organizationId },
    },
    {
      "@type": ["SoftwareApplication", "WebApplication"],
      "@id": softwareId,
      name: SITE_NAME,
      url: `${SITE_URL}/en`,
      description: englishDescription,
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Car rental operations and fleet management",
      operatingSystem: "Web",
      browserRequirements: "A current web browser",
      inLanguage: "en",
      image: `${SITE_URL}/og.png`,
      provider: { "@id": organizationId },
      offers: englishOffers,
      featureList: [
        "Reservation timeline and live fleet plan",
        "Customer and driver management",
        "Automatic suitable vehicle suggestions",
        "Vehicle handover and return management",
        "Fleet, maintenance and document deadline tracking",
        "Expense, payment and management reports",
        "Excel and CSV import and export",
        "Role-based page and action permissions",
        "Recommended Focus contextual risk alerts",
        "Optional RentOkey Pilot operation optimisation and smart pricing suggestions",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/en#faq`,
      url: `${SITE_URL}/en#faq`,
      name: "Rent Okey frequently asked questions",
      inLanguage: "en",
      isPartOf: { "@id": websiteId },
      about: { "@id": softwareId },
      mainEntity: createFaqMainEntity(englishFaqGroups),
    },
  ],
};

export function createProductPageStructuredData(content: ProductSeoContent) {
  const pageUrl = `${SITE_URL}${content.path}`;
  const locale = content.locale === "en" ? "en" : "tr-TR";
  const homePath = content.locale === "en" ? "/en" : "";
  const homeLabel = content.locale === "en" ? "Home" : "Ana sayfa";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: content.title,
        description: content.description,
        inLanguage: locale,
        isPartOf: { "@id": websiteId },
        about: { "@id": softwareId },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: homeLabel,
            item: `${SITE_URL}${homePath}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: content.title,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": softwareId,
        name: SITE_NAME,
        url: content.locale === "en" ? `${SITE_URL}/en` : SITE_URL,
        description: content.description,
        applicationCategory: "BusinessApplication",
        applicationSubCategory:
          content.locale === "en"
            ? "Car rental operations and fleet management"
            : "Araç kiralama operasyon ve filo yönetimi",
        operatingSystem: "Web",
        inLanguage: locale,
        provider: { "@id": organizationId },
        featureList: content.features.map((feature) => feature.title),
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        url: `${pageUrl}#faq`,
        name: content.faqTitle,
        inLanguage: locale,
        isPartOf: { "@id": `${pageUrl}#webpage` },
        mainEntity: content.faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}

export function createPilotPageStructuredData(locale: "tr" | "en") {
  const en = locale === "en";
  const path = en ? "/en/pilot" : "/okey-pilot";
  const pageUrl = `${SITE_URL}${path}`;
  const pilotId = `${pageUrl}#software`;
  const description = en
    ? "The RentOkey Pilot rule engine evaluates preparation, maintenance, pricing, branch capacity, vehicle transfer, renewal, expense and mileage signals and presents user-approved operational suggestions."
    : "RentOkey Pilot öneri kural motoru; hazırlık, bakım, fiyat, şube kapasitesi, araç sevkiyatı, yenileme, gider ve kilometre sinyallerini kullanıcı onaylı operasyon önerilerine dönüştürür.";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: en ? "RentOkey Pilot | Car Rental Operation Optimisation" : "RentOkey Pilot | Araç Kiralama Operasyon Optimizasyonu",
        description,
        inLanguage: en ? "en" : "tr-TR",
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": pilotId },
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": pilotId,
        name: "RentOkey Pilot",
        url: pageUrl,
        description,
        applicationCategory: "BusinessApplication",
        applicationSubCategory: en ? "Car rental operational decision support" : "Araç kiralama operasyon karar desteği",
        operatingSystem: "Web",
        inLanguage: en ? "en" : "tr-TR",
        provider: { "@id": organizationId },
        featureList: pilotRuleGroups[locale].flatMap((group) => group.rules.map((rule) => rule.title)),
      },
    ],
  };
}
