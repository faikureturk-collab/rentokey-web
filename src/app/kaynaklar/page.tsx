import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, HelpCircle, Newspaper } from "lucide-react";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Kaynaklar",
  description: "Rent Okey blog yazıları, kılavuzları ve sık sorulan sorular.",
};

const resources = [
  {
    icon: Newspaper,
    title: "Blog",
    description: "Araç kiralama sektörüne dair yazılar, ipuçları ve ürün haberleri.",
    href: "/blog",
  },
  {
    icon: BookOpen,
    title: "Kılavuzlar",
    description: "Rent Okey'i en verimli şekilde kullanmanız için adım adım kılavuzlar.",
    href: "/kilavuzlar",
  },
  {
    icon: HelpCircle,
    title: "Sık Sorulan Sorular",
    description: "Kurulum, güvenlik ve faturalandırma hakkında en çok sorulan sorular.",
    href: "/#sss",
  },
];

export default function KaynaklarPage() {
  return (
    <>
      <PageHero
        eyebrow="Kaynaklar"
        title="Öğrenin, keşfedin, büyüyün"
        description="Rent Okey'i daha verimli kullanmanıza yardımcı olacak içerikler tek yerde."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {resources.map((resource) => (
            <Link
              key={resource.href}
              href={resource.href}
              className="group rounded-2xl border border-surface-border p-7 transition-shadow hover:shadow-lg hover:shadow-brand-navy/5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                <resource.icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-brand-navy">{resource.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-navy/50">
                {resource.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy group-hover:text-brand-green">
                İncele <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
