import type { Metadata } from "next";
import { alternateRoutes } from "./locale";

export const SITE_NAME = "Rent Okey";
export const SITE_URL = "https://www.rentokey.com";
export const LINKEDIN_URL = "https://www.linkedin.com/company/rentokey";
export const DEFAULT_DESCRIPTION =
  "Rent Okey; Türkiye ve KKTC’de rezervasyon, filo, teslim/iade, bakım, belge ve ödeme süreçlerini tek ekranda yöneten araç kiralama programıdır.";

export const DEFAULT_OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Rent Okey araç kiralama operasyon ve filo yönetimi yazılımı",
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path: `/${string}` | "/";
  index?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  index = true,
}: PageMetadataOptions): Metadata {
  // Product copy occasionally uses the compact "RentOkey" spelling. Treat both
  // spellings as the same brand so social titles never become
  // "… | RentOkey | Rent Okey".
  const hasBrand = /rent\s?okey/i.test(title);
  const socialTitle = hasBrand ? title : `${title} | ${SITE_NAME}`;
  const languages = alternateRoutes(path);
  const en = path === "/en" || path.startsWith("/en/");

  return {
    title,
    description,
    alternates: {
      canonical: path,
      ...(languages ? { languages: { tr: languages[0], en: languages[1], "x-default": languages[0] } } : {}),
    },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
      locale: en ? "en_GB" : "tr_TR",
      ...(languages ? { alternateLocale: en ? "tr_TR" : "en_GB" } : {}),
      images: [{ ...DEFAULT_OG_IMAGE, alt: en ? "Rent Okey car rental operations and fleet management software" : DEFAULT_OG_IMAGE.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
    robots: index
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        }
      : {
          index: false,
          follow: true,
          googleBot: {
            index: false,
            follow: true,
          },
        },
  };
}
