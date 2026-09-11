import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import { formatEnglishDate, getSortedEnglishPosts } from "@/lib/blog-en";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Car Rental Operations and Fleet Management Blog",
  description:
    "Practical guides to car rental operations, vehicle availability, handovers, returns, fleet planning and profitability.",
  path: "/en/blog",
});

export default function EnglishBlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Practical guides to car rental operations"
        description="Field-focused guidance on fleet availability, vehicle handovers and returns, reservation planning and profitable operations."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-6">
          {getSortedEnglishPosts().map((post) => (
            <article
              key={post.slug}
              className="group rounded-2xl border border-surface-border p-7 transition-shadow hover:shadow-lg hover:shadow-brand-navy/5 sm:p-9"
            >
              <span className="inline-flex rounded-full bg-brand-green/10 px-3 py-1 text-xs font-semibold text-brand-green">
                {post.category}
              </span>
              <h2 className="mt-4 text-xl font-extrabold leading-snug tracking-[-0.02em] text-brand-navy sm:text-2xl">
                <Link href={`/en/blog/${post.slug}`} className="hover:text-brand-green">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-brand-navy/55">
                {post.excerpt}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-brand-navy/40">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" /> {formatEnglishDate(post.publishedAt)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> {post.readingMinutes} min read
                </span>
              </div>
              <Link
                href={`/en/blog/${post.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy group-hover:text-brand-green"
              >
                Read the article <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
