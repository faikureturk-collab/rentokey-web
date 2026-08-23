import type { Metadata } from "next";

export const SITE_NAME = "Rent Okey";
export const SITE_URL = "https://rentokey.com";
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
  const socialTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
      locale: "tr_TR",
      images: [DEFAULT_OG_IMAGE],
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
