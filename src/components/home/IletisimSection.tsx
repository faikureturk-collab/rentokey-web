import { Check, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import WhatsAppLink from "@/components/WhatsAppLink";
import { SUPPORT_HOURS } from "@/lib/contact";

const contactCards = [
  { icon: Mail, title: "E-posta", value: "hello@rentokey.com", href: "mailto:hello@rentokey.com" },
  { icon: Phone, title: "Telefon", value: "+90 541 390 10 20", href: "tel:+905413901020" },
  {
    icon: MapPin,
    title: "Adres",
    value: "Maslak Mah. Eski Büyükdere Cad. No:27 Sarıyer / İstanbul",
  },
];

export default function IletisimSection({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const en = locale === "en";
  const cards = en ? [
    { icon: Mail, title: "Email", value: "hello@rentokey.com", href: "mailto:hello@rentokey.com" },
    { icon: Phone, title: "Phone", value: "+90 541 390 10 20", href: "tel:+905413901020" },
    { icon: MapPin, title: "Address", value: "Maslak Mah. Eski Büyükdere Cad. No:27 Sarıyer / İstanbul, Türkiye" },
  ] : contactCards;
  return (
    <section id={en ? "contact" : "iletisim"} className="scroll-mt-24 border-t border-surface-border bg-surface-soft/50">
      <div className="container-page py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
          <div>
            <span className="inline-flex rounded-full bg-brand-green/10 px-4 py-1.5 text-sm font-semibold text-brand-green">
              {en ? "Contact" : "İletişim"}
            </span>
            <h2 className="mt-4 text-2xl font-extrabold leading-tight text-brand-navy sm:text-3xl">
              {en ? "Let’s answer your questions before you buy." : "Satın alma öncesi sorularınızı birlikte netleştirelim."}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-navy/55">
              {en ? "Talk directly with the RentOkey team about vehicle-based pricing, RentOkey Pilot and other add-ons, data migration or setup." : "Araç bazlı fiyatlandırma, RentOkey Pilot ve diğer ek modüller, veri aktarımı veya kurulum hakkında doğrudan Rent Okey ekibiyle görüşün."}
            </p>

            <ul className="mt-6 space-y-3">
              {(en ? ["Pricing for your fleet size", "RentOkey Pilot and add-on selection", "Migration with your existing Excel / CSV data", "Setup for operations in Türkiye and Northern Cyprus"] : ["Filo büyüklüğünüze uygun fiyat", "RentOkey Pilot ve ek modül seçimi", "Mevcut Excel / CSV verilerinizle geçiş", "Türkiye ve KKTC operasyonlarına uygun kurulum"]).map(
                (item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-brand-navy/70">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                )
              )}
            </ul>

            <div className="mt-7">
              <WhatsAppLink locale={locale} />
              <p className="mt-2 text-xs leading-relaxed text-brand-navy/60">{en ? "Every day, 09:00–22:00 Türkiye time (UTC+3)." : SUPPORT_HOURS}</p>
              <p className="mt-1 text-xs text-brand-navy/60">{en ? "Support in English and Turkish" : "Türkçe ve İngilizce destek"}</p>
            </div>

            <div className="mt-6 divide-y divide-surface-border overflow-hidden rounded-2xl border border-surface-border bg-white">
              {cards.map((card) => (
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

          <ContactForm locale={locale} />
        </div>
      </div>
    </section>
  );
}
