import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Blog",
  description: "Araç kiralama operasyonları, filo yönetimi ve sektör haberleri hakkında yazılar.",
};

const posts = [
  {
    category: "Filo Yönetimi",
    title: "Filo yönetiminde verimliliği artırmanın 5 yolu",
    excerpt:
      "Boş araç günlerini azaltmak ve filo kullanım oranını artırmak için operasyonel ipuçları.",
  },
  {
    category: "Operasyon",
    title: "Araç teslim/iade sürecini dijitalleştirmenin faydaları",
    excerpt:
      "Kağıt tutanaklardan dijital teslimat kayıtlarına geçişin operasyona sağladığı avantajlar.",
  },
  {
    category: "Sektör",
    title: "Araç kiralama sektöründe 2026 dijitalleşme trendleri",
    excerpt: "Kiralama firmalarının teknolojiyle nasıl büyüdüğüne dair güncel gözlemler.",
  },
  {
    category: "Raporlama",
    title: "Doğru metriklerle filo kârlılığınızı nasıl artırırsınız?",
    excerpt: "Doluluk oranı, araç başı gelir ve boşta kalma süresi gibi kritik metrikler.",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Araç kiralama operasyonları üzerine yazılar"
        description="Ekibimizden ve sektörden içerikler yakında burada yayınlanacak."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-2xl border border-surface-border p-7"
            >
              <span className="inline-flex rounded-full bg-brand-green/10 px-3 py-1 text-xs font-semibold text-brand-green">
                {post.category}
              </span>
              <h2 className="mt-4 text-lg font-bold leading-snug text-brand-navy">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-brand-navy/50">{post.excerpt}</p>
              <span className="mt-4 inline-block text-xs font-medium text-brand-navy/35">
                Çok yakında
              </span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
