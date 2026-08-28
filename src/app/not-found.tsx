import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Compass } from "lucide-react";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Sayfa bulunamadı",
  description:
    "Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Rent Okey ana bölümlerinden devam edebilirsiniz.",
  robots: { index: false, follow: true },
};

const links = [
  {
    title: "Operasyon platformu",
    description: "Rezervasyondan iadeye kadar tüm akışı tek ekranda görün.",
    href: "/#urun",
  },
  {
    title: "Fiyatlandırma",
    description: "Filo büyüklüğünüze uygun paketi ve içeriğini inceleyin.",
    href: "/#fiyatlandirma",
  },
  {
    title: "Sıkça sorulan sorular",
    description: "Deneme, veri güvenliği ve destek hakkında merak edilenler.",
    href: "/#sss",
  },
  {
    title: "İletişim",
    description: "Paket seçimi ve veri aktarımı için ekibimize yazın.",
    href: "/#iletisim",
  },
];

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="Bu sayfayı bulamadık"
        description="Aradığınız sayfa taşınmış, adı değişmiş veya hiç var olmamış olabilir. Aşağıdaki bölümlerden devam edebilirsiniz."
      >
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/" size="lg" icon>
            Ana sayfaya dön
          </Button>
          <Button href="/ucretsiz-dene" variant="secondary" size="lg">
            21 gün ücretsiz deneyin
          </Button>
        </div>
      </PageHero>

      <section className="container-page py-16 sm:py-20">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-sm font-semibold text-brand-blue">
          <Compass className="h-4 w-4" /> Popüler bölümler
        </span>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-2xl border border-surface-border p-7 transition-shadow hover:shadow-lg hover:shadow-brand-navy/5"
            >
              <h2 className="text-lg font-bold text-brand-navy">{link.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-brand-navy/50">
                {link.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy group-hover:text-brand-green">
                İncele <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-sm text-brand-navy/45">
          Aradığınızı bulamadıysanız{" "}
          <a
            href="mailto:hello@rentokey.com"
            className="font-semibold text-brand-green-dark hover:underline"
          >
            hello@rentokey.com
          </a>{" "}
          adresine yazabilirsiniz.
        </p>
      </section>
    </>
  );
}
