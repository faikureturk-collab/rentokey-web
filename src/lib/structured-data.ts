import { faqGroups } from "@/lib/faq";
import { plans } from "@/lib/pricing";
import { DEFAULT_DESCRIPTION, LINKEDIN_URL, SITE_NAME, SITE_URL } from "@/lib/seo";

const organizationId = `${SITE_URL}/#organization`;
const websiteId = `${SITE_URL}/#website`;
const softwareId = `${SITE_URL}/#software`;
const faqId = `${SITE_URL}/#faq`;

const offers = plans
  .filter((plan) => plan.monthlyPrice !== null)
  .map((plan) => ({
    "@type": "Offer",
    name: `${plan.name} paketi`,
    price: String(plan.monthlyPrice),
    priceCurrency: "TRY",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/#fiyatlandirma`,
    description: `${plan.description} için ${plan.includedUsers} ve ${plan.includedBranches}`,
  }));

const faqMainEntity = faqGroups.flatMap((group) =>
  group.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
);

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
