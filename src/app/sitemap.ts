import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { SITE_URL } from "@/lib/seo";
import { alternateRoutes } from "@/lib/locale";

const pageLastModified = {
  home: "2026-09-10",
  trial: "2026-08-28",
  resources: "2026-08-29",
  blog: "2026-09-07",
  pilot: "2026-09-10",
  productPages: "2026-09-10",
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: pageLastModified.home,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/ucretsiz-dene`,
      lastModified: pageLastModified.trial,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/okey-pilot`,
      lastModified: pageLastModified.pilot,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/arac-kiralama-programi`,
      lastModified: pageLastModified.productPages,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/arac-kiralama-rezervasyon-takvimi`,
      lastModified: pageLastModified.productPages,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/kaynaklar`,
      lastModified: pageLastModified.resources,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: pageLastModified.blog,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...["/en", "/en/free-trial", "/en/pilot", "/en/car-rental-software", "/en/car-rental-reservation-calendar"].map(path => ({
      url: `${SITE_URL}${path}`,
      lastModified: "2026-09-10",
      changeFrequency: "monthly" as const,
      priority: path === "/en" ? 1 : 0.9,
    })),
  ];
  return entries.map(entry => {
    const pair = alternateRoutes(new URL(entry.url).pathname);
    return pair ? { ...entry, alternates: { languages: { tr: `${SITE_URL}${pair[0]}`, en: `${SITE_URL}${pair[1]}`, "x-default": `${SITE_URL}${pair[0]}` } } } : entry;
  });
}
