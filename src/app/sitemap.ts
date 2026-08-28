import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { SITE_URL } from "@/lib/seo";

const lastSignificantUpdate = new Date("2026-08-23T00:00:00+03:00");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: lastSignificantUpdate,
    },
    {
      url: `${SITE_URL}/ucretsiz-dene`,
      lastModified: lastSignificantUpdate,
    },
    {
      url: `${SITE_URL}/kaynaklar`,
      lastModified: lastSignificantUpdate,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: lastSignificantUpdate,
    },
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
    })),
  ];
}
