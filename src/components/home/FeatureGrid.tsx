import { CalendarRange, Smartphone, KeyRound, PieChart, Users } from "lucide-react";

const features = [
  {
    icon: CalendarRange,
    title: "Canlı Gantt zaman çizelgesi",
    description: "Araç takvimini anlık görün, çakışmaları önleyin.",
  },
  {
    icon: Smartphone,
    title: "Mobil saha uygulaması",
    description: "Sahada teslimat, iade ve kontrolleri hızlıca yapın.",
  },
  {
    icon: KeyRound,
    title: "Araç teslim / iade yönetimi",
    description: "Hasar, yakıt ve km kontrolünü dijitalleştirin.",
  },
  {
    icon: PieChart,
    title: "Kârlılık ve doluluk raporları",
    description: "Gerçek zamanlı raporlarla doğru karar verin.",
  },
  {
    icon: Users,
    title: "Çoklu kullanıcı / rol bazlı yetki",
    description: "Ekibinizle güvenle ve düzenli çalışın.",
  },
];

export default function FeatureGrid() {
  return (
    <section className="container-page py-20 sm:py-28">
      <h2 className="text-center text-2xl font-extrabold text-brand-navy sm:text-3xl">
        Tüm operasyonunuzu tek platformda yönetin
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-surface-border p-6 transition-shadow hover:shadow-lg hover:shadow-brand-navy/5"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-navy">
              <feature.icon className="h-6 w-6" strokeWidth={1.75} />
            </span>
            <h3 className="mt-5 text-[15px] font-bold leading-snug text-brand-navy">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-navy/50">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
