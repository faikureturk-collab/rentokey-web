import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Sorularınız için Rent Okey ekibiyle iletişime geçin.",
};

const contactCards = [
  { icon: Mail, title: "E-posta", value: "info@rentokey.com", href: "mailto:info@rentokey.com" },
  { icon: Phone, title: "Telefon", value: "+90 850 885 10 53", href: "tel:+908508851053" },
  {
    icon: MapPin,
    title: "Adres",
    value: "Maslak Mah. Eski Büyükdere Cad. No:27 Sarıyer / İstanbul",
  },
];

export default function IletisimPage() {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Size nasıl yardımcı olabiliriz?"
        description="Sorularınızı iletin, Rent Okey ekibi en kısa sürede size dönüş yapsın."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            {contactCards.map((card) => (
              <div key={card.title} className="rounded-2xl border border-surface-border p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                  <card.icon className="h-5 w-5" />
                </span>
                <p className="mt-3 text-sm font-semibold text-brand-navy">{card.title}</p>
                {card.href ? (
                  <a href={card.href} className="text-sm text-brand-navy/60 hover:text-brand-green">
                    {card.value}
                  </a>
                ) : (
                  <p className="text-sm text-brand-navy/60">{card.value}</p>
                )}
              </div>
            ))}
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
