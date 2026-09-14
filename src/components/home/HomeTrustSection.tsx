import { Code2, MapPinned, ShieldCheck } from "lucide-react";

export default function HomeTrustSection({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const en = locale === "en";
  const items = en
    ? [
        { icon: MapPinned, title: "Shaped by daily operations", text: "Scattered Excel records and reservation conflicts were the starting point. Daily rental work continues to guide the product." },
        { icon: Code2, title: "Built on engineering experience", text: "Experience developing bespoke B2B software for corporate clients informs how complex rental workflows are organised." },
        { icon: ShieldCheck, title: "Decisions stay with you", text: "Risks and options are made visible. Authorised users make the operational decisions." },
      ]
    : [
        { icon: MapPinned, title: "Operasyonun içinden doğdu", text: "Excel dosyalarına dağılan kayıtlar ve rezervasyon çakışmaları çıkış noktasıydı. Günlük işletme ihtiyaçları ürüne yön vermeye devam ediyor." },
        { icon: Code2, title: "Mühendislik birikimiyle şekillendi", text: "Kurumsal müşterilere özel B2B yazılım geliştirme tecrübesi, karmaşık kiralama süreçlerini ortak bir çalışma düzenine taşıyor." },
        { icon: ShieldCheck, title: "Kontrol kullanıcıda kalır", text: "Riskler ve seçenekler görünür hâle gelir. Operasyon kararlarını yetkili kullanıcı verir." },
      ];

  return (
    <section id={en ? "about" : "hakkimizda"} className="scroll-mt-24 border-y border-surface-border bg-surface-soft/55">
      <div className="container-page py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-green-dark">
              <Code2 className="h-4 w-4" /> {en ? "The Rent Okey story" : "Rent Okey’in hikâyesi"}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.03em] text-brand-navy">
              {en ? "Born where software expertise meets car rental experience." : "Yazılım birikimiyle sektör deneyiminin buluşmasından doğdu."}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-navy/75">
              {en
                ? "Rent Okey brings together around 17 years of experience in bespoke B2B software projects for corporate clients, with input from a car rental partner with 19 years of industry experience."
                : "Rent Okey, kurumsal müşterilere özel B2B yazılım projelerinde edinilen yaklaşık 17 yıllık birikim ile ürünün geliştirilmesine katkı sağlayan 19 yıllık rent a car deneyiminin buluşmasından doğdu."}
            </p>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-brand-navy/75">
            <p>{en
              ? "It began with familiar daily problems: records scattered across Excel files, uncertainty about which plan was current, and conflicting reservations."
              : "Çıkış noktası günlük operasyonun tanıdık sorunlarıydı: Excel dosyalarına dağılan kayıtlar, hangi planın güncel olduğuna dair belirsizlik ve rezervasyon çakışmaları."}</p>
            <p>{en
              ? "The goal was clear: help the team work from the same vehicle records, reservations and up-to-date plan. Rent Okey’s connected reservation, handover, return and financial workflows grew from that need."
              : "Amaç açıktı: Ekibin aynı araç, aynı rezervasyon ve aynı güncel plan üzerinden çalışmasını sağlamak. Rent Okey’in rezervasyondan teslim/iade ve finans takibine uzanan yapısı bu ihtiyaç etrafında şekillendi."}</p>
          </div>
        </div>
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {items.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-surface-border bg-white p-5">
                <Icon className="h-5 w-5 text-brand-blue" />
                <h3 className="mt-4 text-sm font-extrabold text-brand-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-navy/55">{text}</p>
              </article>
            ))}
          </div>
      </div>
    </section>
  );
}
