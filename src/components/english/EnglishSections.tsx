import type { ReactNode } from "react";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import WhatsAppLink from "@/components/WhatsAppLink";
import FaqAccordion from "@/components/FaqAccordion";
import { englishFaq } from "@/lib/english";

export function EnglishSection({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return <section id={id} className="scroll-mt-24 border-b border-surface-border py-16 sm:py-20"><div className="container-page"><p className="text-sm font-bold text-brand-green-dark">{eyebrow}</p><h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">{title}</h2><div className="mt-8">{children}</div></div></section>;
}

export function EnglishContact() {
  return <EnglishSection id="contact" eyebrow="Let’s talk" title="Find the right fit for your fleet."><div className="grid gap-10 lg:grid-cols-2"><div><p className="max-w-xl text-lg leading-relaxed text-brand-navy/60">Ask about pricing, Pilot, data migration or setup. Our team provides support in Turkish and English.</p><div className="mt-6"><WhatsAppLink locale="en" /></div><p className="mt-3 text-sm text-brand-navy/60">Every day, 09:00–22:00 Türkiye time (UTC+3).</p><div className="mt-8 space-y-3 text-sm"><p><a href="mailto:hello@rentokey.com" className="underline underline-offset-4">hello@rentokey.com</a></p><p><a href="tel:+905413901020" className="underline underline-offset-4">+90 541 390 10 20</a></p><p className="max-w-sm text-brand-navy/60">Maslak Mah. Eski Büyükdere Cad. No:27 Sarıyer / İstanbul, Türkiye</p></div></div><ContactForm locale="en" /></div></EnglishSection>;
}

export function EnglishFaq() {
  return <EnglishSection id="faq" eyebrow="Frequently asked questions" title="Know what to expect before you start."><div className="max-w-4xl"><FaqAccordion items={englishFaq} columns={false} locale="en" /></div></EnglishSection>;
}

export function EnglishCta() {
  return <section className="bg-brand-navy py-16 text-white"><div className="container-page flex flex-col justify-between gap-7 md:flex-row md:items-center"><div><h2 className="text-3xl font-extrabold">Put your next working day in order.</h2><p className="mt-3 text-white/65">Try RentOkey with your own vehicles and team for 21 days.</p></div><Button href="/en/free-trial" size="lg" icon>Start free trial</Button></div></section>;
}
