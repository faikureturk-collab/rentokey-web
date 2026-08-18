import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FaqAccordion from "../FaqAccordion";
import { faqItems } from "@/lib/faq";

export default function FaqSection() {
  return (
    <section className="container-page py-16 sm:py-20">
      <h2 className="text-2xl font-extrabold text-brand-navy sm:text-3xl">Sıkça sorulan sorular</h2>

      <div className="mt-8">
        <FaqAccordion items={faqItems.slice(0, 4)} />
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/sss"
          className="inline-flex items-center gap-2 text-[15px] font-semibold text-brand-navy hover:text-brand-green"
        >
          Tüm soruları görüntüle
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
