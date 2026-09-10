import { Languages, MapPinned, ShieldCheck, UsersRound } from "lucide-react";

export default function HomeTrustSection({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const en = locale === "en";
  const items = en
    ? [
        { icon: MapPinned, title: "Built for local operations", text: "Branch, airport, hotel and address deliveries across Türkiye and Northern Cyprus." },
        { icon: UsersRound, title: "Controlled team access", text: "Role- and page-based permissions keep office and field responsibilities clear." },
        { icon: Languages, title: "Support in two languages", text: "Reach the RentOkey team in Turkish or English during published support hours." },
      ]
    : [
        { icon: MapPinned, title: "Yerel operasyona uygun", text: "Türkiye ve KKTC'de şube, havalimanı, otel ve adrese teslim süreçlerine göre tasarlandı." },
        { icon: UsersRound, title: "Kontrollü ekip erişimi", text: "Rol ve sayfa bazlı yetkilerle ofis ve saha sorumlulukları net kalır." },
        { icon: Languages, title: "İki dilde destek", text: "Yayınlanan destek saatlerinde RentOkey ekibine Türkçe veya İngilizce ulaşabilirsiniz." },
      ];

  return (
    <section id={en ? "about" : "hakkimizda"} className="scroll-mt-24 border-y border-surface-border bg-surface-soft/55">
      <div className="container-page py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-green-dark">
              <ShieldCheck className="h-4 w-4" /> {en ? "The RentOkey approach" : "RentOkey yaklaşımı"}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.03em] text-brand-navy">
              {en ? "A clear working order as the fleet grows." : "Filo büyürken de anlaşılır kalan çalışma düzeni."}
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {items.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-surface-border bg-white p-5">
                <Icon className="h-5 w-5 text-brand-blue" />
                <h3 className="mt-4 text-sm font-extrabold text-brand-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-navy/55">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
