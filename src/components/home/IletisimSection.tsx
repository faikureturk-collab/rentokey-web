import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const contactCards = [
  { icon: Mail, title: "E-posta", value: "info@rentokey.com", href: "mailto:info@rentokey.com" },
  { icon: Phone, title: "Telefon", value: "+90 850 885 10 53", href: "tel:+908508851053" },
  {
    icon: MapPin,
    title: "Adres",
    value: "Maslak Mah. Eski Büyükdere Cad. No:27 Sarıyer / İstanbul",
  },
];

export default function IletisimSection() {
  return (
    <section id="iletisim" className="scroll-mt-24 border-t border-surface-border">
      <div className="container-page py-16 sm:py-24">
        <div>
          <span className="inline-flex rounded-full bg-brand-green/10 px-4 py-1.5 text-sm font-semibold text-brand-green">
            İletişim
          </span>
          <h2 className="mt-4 max-w-2xl text-2xl font-extrabold leading-tight text-brand-navy sm:text-3xl">
            Size nasıl yardımcı olabiliriz?
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-brand-navy/55">
            Sorularınızı iletin, Rent Okey ekibi en kısa sürede size dönüş yapsın.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr]">
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
      </div>
    </section>
  );
}
