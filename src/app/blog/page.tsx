import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import { formatDate, posts, upcomingPosts } from "@/lib/blog";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Araç Kiralama ve Filo Yönetimi Blogu",
  description:
    "Araç kiralama operasyonu, filo kullanım oranı, boş araç günleri ve kârlılık üzerine sahadan yazılar.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Araç kiralama operasyonları üzerine yazılar"
        description="Filo kullanım oranı, boş araç günleri, teslim/iade düzeni ve kârlılık üzerine sahada karşılığı olan içerikler."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-2xl border border-surface-border p-7 transition-shadow hover:shadow-lg hover:shadow-brand-navy/5 sm:p-9"
            >
              <span className="inline-flex rounded-full bg-brand-green/10 px-3 py-1 text-xs font-semibold text-brand-green">
                {post.category}
              </span>
              <h2 className="mt-4 text-xl font-extrabold leading-snug tracking-[-0.02em] text-brand-navy sm:text-2xl">
                <Link href={`/blog/${post.slug}`} className="hover:text-brand-green">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-brand-navy/55">
                {post.excerpt}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-brand-navy/40">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" /> {formatDate(post.publishedAt)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> {post.readingMinutes} dk
                </span>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy group-hover:text-brand-green"
              >
                Yazıyı okuyun <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>

        <h2 className="mt-16 text-sm font-extrabold uppercase tracking-wide text-brand-navy/35">
          Hazırlanıyor
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {upcomingPosts.map((post) => (
            <article
              key={post.title}
              className="rounded-2xl border border-dashed border-surface-border p-7"
            >
              <span className="inline-flex rounded-full bg-surface-soft px-3 py-1 text-xs font-semibold text-brand-navy/45">
                {post.category}
              </span>
              <h3 className="mt-4 text-base font-bold leading-snug text-brand-navy/70">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-navy/45">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
