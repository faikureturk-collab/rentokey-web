import Link from "next/link";
import { ArrowUpRight, HelpCircle, Mail } from "lucide-react";
import FaqAccordion from "../FaqAccordion";
import { faqItems } from "@/lib/faq";

export default function FaqSection() {
  return (
    <section id="sss" className="scroll-mt-24 bg-white py-16 sm:py-24">
      <div className="container-page grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-sm font-semibold text-brand-blue"><HelpCircle className="h-4 w-4" /> Sıkça sorulan sorular</span>
          <h2 className="mt-5 text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] text-brand-navy sm:text-4xl">Karar vermeden önce bilmek isteyecekleriniz.</h2>
          <p className="mt-5 text-[15px] leading-relaxed text-brand-navy/55">Deneme süreci, paket limitleri ve günlük kullanım hakkında en sık karşılaştığımız sorular.</p>

          <div className="mt-7 rounded-2xl bg-surface-soft p-5">
            <Mail className="h-5 w-5 text-brand-green" />
            <p className="mt-4 text-sm font-extrabold text-brand-navy">Başka bir sorunuz mu var?</p>
            <p className="mt-1.5 text-xs leading-relaxed text-brand-navy/45">Ekibimize doğrudan yazın; ürün ve paket seçimi konusunda yardımcı olalım.</p>
            <Link href="mailto:hello@rentokey.com" className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-brand-green-dark">hello@rentokey.com <ArrowUpRight className="h-3.5 w-3.5" /></Link>
          </div>
        </div>

        <FaqAccordion items={faqItems} columns={false} />
      </div>
    </section>
  );
}
