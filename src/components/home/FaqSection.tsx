import FaqAccordion from "../FaqAccordion";
import { faqItems } from "@/lib/faq";

export default function FaqSection() {
  return (
    <section id="sss" className="container-page scroll-mt-24 py-16 sm:py-20">
      <div>
        <span className="inline-flex rounded-full bg-brand-green/10 px-4 py-1.5 text-sm font-semibold text-brand-green">
          SSS
        </span>
        <h2 className="mt-4 text-2xl font-extrabold text-brand-navy sm:text-3xl">
          Sıkça sorulan sorular
        </h2>
      </div>

      <div className="mt-10">
        <FaqAccordion items={faqItems} />
      </div>
    </section>
  );
}
