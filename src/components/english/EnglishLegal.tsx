import PageHero from "@/components/PageHero";

export default function EnglishLegal({ title, original, sections }: {title: string;original: string;sections: readonly (readonly [string,string])[]}) {
  return <><PageHero eyebrow="Legal" title={title} /><section className="container-page py-16"><div className="mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-brand-navy/70"><p className="rounded-xl bg-surface-soft p-4">English translation of the current <a href={original} hrefLang="tr" className="font-semibold underline">Turkish text</a>. For clarification, contact <a href="mailto:hello@rentokey.com" className="underline">hello@rentokey.com</a>.</p>{sections.map(([heading,text]) => <section key={heading}><h2 className="text-lg font-bold text-brand-navy">{heading}</h2><p className="mt-3">{text}</p></section>)}</div></section></>;
}
