import { ChevronRight } from "lucide-react";
import {
  GanttFeatureIcon,
  MobileAppFeatureIcon,
  CarKeyFeatureIcon,
  ReportsFeatureIcon,
  UsersRoleFeatureIcon,
} from "@/components/icons/ColorIcons";

const features = [
  {
    icon: GanttFeatureIcon,
    title: "Canlı Gantt zaman çizelgesi",
    description: "Araç takvimini anlık görün, çakışmaları önleyin.",
  },
  {
    icon: MobileAppFeatureIcon,
    title: "Mobil saha uygulaması",
    description: "Sahada teslimat, iade ve kontrolleri hızlıca yapın.",
  },
  {
    icon: CarKeyFeatureIcon,
    title: "Araç teslim / iade yönetimi",
    description: "Hasar, yakıt ve km kontrolünü dijitalleştirin.",
  },
  {
    icon: ReportsFeatureIcon,
    title: "Kârlılık ve doluluk raporları",
    description: "Gerçek zamanlı raporlarla doğru karar verin.",
  },
  {
    icon: UsersRoleFeatureIcon,
    title: "Çoklu kullanıcı / rol bazlı yetki",
    description: "Ekibinizle güvenle ve düzenli çalışın.",
  },
];

export default function FeatureGrid() {
  return (
    <section id="ozellikler" className="container-page scroll-mt-24 py-20 sm:py-28">
      <h2 className="text-2xl font-extrabold text-brand-navy sm:text-3xl">
        Tüm operasyonunuzu tek platformda yönetin
      </h2>

      {/* Mobil: ikon + başlık + ok ile liste görünümü (tasarımdaki "Öne çıkan özellikler" listesi) */}
      <div className="mt-8 flex flex-col gap-3 sm:hidden">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex items-center gap-4 rounded-2xl border border-surface-border p-4"
          >
            <feature.icon size={32} />
            <h3 className="flex-1 text-[15px] font-bold leading-snug text-brand-navy">
              {feature.title}
            </h3>
            <ChevronRight className="h-4 w-4 shrink-0 text-brand-navy/30" />
          </div>
        ))}
      </div>

      {/* Masaüstü / tablet: ikon + başlık + açıklama kart grid'i */}
      <div className="mt-12 hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-5">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-surface-border p-6 transition-shadow hover:shadow-lg hover:shadow-brand-navy/5"
          >
            <feature.icon size={48} />
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
