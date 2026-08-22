import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const contactCards = [
  { icon: Mail, title: "E-posta", value: "hello@rentokey.com", href: "mailto:hello@rentokey.com" },
  { icon: Phone, title: "Telefon", value: "+90 541 390 10 20", href: "tel:+905413901020" },
  {
    icon: MapPin,
    title: "Adres",
    value: "Maslak Mah. Eski Büyükdere Cad. No:27 Sarıyer / İstanbul",
  },
];

export default function IletisimSection() {
  return (
    <section id="iletisim" className="scroll-mt-24 border-t border-surface-border">
      <div className="container-page py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <span className="inline-flex rounded-full bg-brand-green/10 px-4 py-1.5 text-sm font-semibold text-brand-green">
              İletişim
            </span>
            <h2 className="mt-4 text-2xl font-extrabold leading-tight text-brand-navy sm:text-3xl">
              Size nasıl yardımcı olabiliriz?
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-navy/55">
              Sorularınızı iletin, Rent Okey ekibi en kısa sürede size dönüş yapsın.
            </p>

            <div className="mt-8 divide-y divide-surface-border rounded-2xl border border-surface-border">
              {contactCards.map((card) => (
                <div key={card.title} className="flex items-center gap-3 p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-green/10 text-brand-green">
                    <card.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-brand-navy/45">{card.title}</p>
                    {card.href ? (
                      <a
                        href={card.href}
                        className="text-sm font-medium text-brand-navy hover:text-brand-green"
                      >
                        {card.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-brand-navy">{card.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
