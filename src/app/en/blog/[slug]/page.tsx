import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import ArticleBody from "@/components/blog/ArticleBody";
import Button from "@/components/Button";
import StructuredData from "@/components/StructuredData";
import {
  englishPosts,
  formatEnglishDate,
  getEnglishPost,
} from "@/lib/blog-en";
import { createPageMetadata, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";

type EnglishBlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return englishPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: EnglishBlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getEnglishPost(slug);

  if (!post) {
    return createPageMetadata({
      title: "Article not found",
      description: "The article you requested could not be found.",
      path: "/en/blog",
      index: false,
    });
  }

  const metadata = createPageMetadata({
    title: post.title,
    description: post.description,
    path: `/en/blog/${post.slug}`,
  });

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
  };
}

export default async function EnglishBlogPostPage({ params }: EnglishBlogPostPageProps) {
  const { slug } = await params;
  const post = getEnglishPost(slug);

  if (!post) {
    notFound();
  }

  const url = `${SITE_URL}/en/blog/${post.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.description,
        articleSection: post.category,
        inLanguage: "en-GB",
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        mainEntityOfPage: url,
        url,
        image: `${SITE_URL}${DEFAULT_OG_IMAGE.url}`,
        author: { "@type": "Organization", name: SITE_NAME, url: `${SITE_URL}/en` },
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/en` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/en/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };
  const headings = post.body.filter((block) => block.type === "h2");

  return (
    <>
      <StructuredData data={structuredData} />

      <article>
        <header className="border-b border-surface-border bg-surface-soft/50">
          <div className="container-page py-14 sm:py-20">
            <div className="mx-auto max-w-3xl">
              <Link
                href="/en/blog"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy/50 transition-colors hover:text-brand-green"
              >
                <ArrowLeft className="h-4 w-4" /> Blog
              </Link>

              <span className="mt-6 inline-flex rounded-full bg-brand-green/10 px-4 py-1.5 text-sm font-semibold text-brand-green">
                {post.category}
              </span>

              <h1 className="mt-4 text-3xl font-extrabold leading-[1.1] tracking-[-0.035em] text-brand-navy sm:text-[2.75rem]">
                {post.title}
              </h1>

              <p className="mt-5 text-[15px] leading-relaxed text-brand-navy/55 sm:text-lg">
                {post.excerpt}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-brand-navy/45">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4" /> {formatEnglishDate(post.publishedAt)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" /> {post.readingMinutes} min read
                </span>
              </div>
            </div>
          </div>
        </header>

        <div className="container-page py-14 sm:py-20">
          <div className="mx-auto max-w-3xl">
            {headings.length > 0 && (
              <nav
                aria-label="Table of contents"
                className="mb-12 rounded-2xl border border-surface-border p-6"
              >
                <p className="text-sm font-extrabold text-brand-navy">Table of contents</p>
                <ol className="mt-4 space-y-2.5">
                  {headings.map((heading) => (
                    <li key={heading.id}>
                      <a
                        href={`#${heading.id}`}
                        className="text-sm leading-relaxed text-brand-navy/55 transition-colors hover:text-brand-green"
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            <div className="article-body mb-2">
              {post.intro.map((paragraph, index) => (
                <p
                  key={index}
                  className={index === 0 ? "text-lg leading-relaxed sm:text-xl" : undefined}
                >
                  {paragraph.split(/\*\*(.+?)\*\*/g).map((part, partIndex) =>
                    partIndex % 2 === 1 ? (
                      <strong key={partIndex} className="font-bold text-brand-navy">
                        {part}
                      </strong>
                    ) : (
                      part
                    ),
                  )}
                </p>
              ))}
            </div>

            <ArticleBody blocks={post.body} />

            <div className="mt-16 rounded-3xl border border-surface-border bg-surface-soft p-8 sm:p-10">
              <h2 className="text-xl font-extrabold leading-snug tracking-[-0.02em] text-brand-navy sm:text-2xl">
                See your fleet in one operational view
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-brand-navy/55">
                Keep the reservation calendar, vehicle status, handovers, returns and fleet-level reporting connected. Try Rent Okey with your own vehicles and team for 21 days.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/en/free-trial" size="lg" icon>
                  Start your 21-day free trial
                </Button>
                <Button href="/en/car-rental-software" variant="secondary" size="lg">
                  Explore the software
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
