import type { Metadata } from "next";
import { Target, Heart, Rocket, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Rent Okey, araç kiralama firmalarının operasyonlarını dijitalleştirmesi için kuruldu. Misyonumuzu ve değerlerimizi keşfedin.",
};

const values = [
  {
    icon: Target,
    title: "Odağımız operasyon",
    description: "Kiralama firmalarının günlük operasyonunu kolaylaştırmaya odaklanıyoruz.",
  },
  {
    icon: Heart,
    title: "Kullanıcı odaklı tasarım",
    description: "Her özelliği, sahadaki gerçek kullanıcı ihtiyaçlarına göre şekillendiriyoruz.",
  },
  {
    icon: Rocket,
    title: "Sürekli gelişim",
    description: "Ürünümüzü müşteri geri bildirimleriyle sürekli geliştiriyoruz.",
  },
  {
    icon: ShieldCheck,
    title: "Güvenilirlik",
    description: "Verilerinizin güvenliğini ve sistemin kesintisiz çalışmasını önceliklendiriyoruz.",
  },
];

export default function HakkimizdaPage() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title="Araç kiralama operasyonlarını kolaylaştırıyoruz"
        description="Rent Okey, Türkiye genelinde yüzlerce araç kiralama firmasının filo, rezervasyon ve saha operasyonlarını tek platformdan yönetmesine yardımcı oluyor."
      />

      <section className="container-page py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold text-brand-navy sm:text-3xl">Misyonumuz</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-navy/60">
            Araç kiralama firmalarının, karmaşık tablolar ve dağınık süreçler yerine tek ve
            sezgisel bir platform üzerinden çalışabilmesini sağlamak için yola çıktık. Amacımız,
            filo sahiplerinin araçlarını değil operasyonlarını büyütmesine yardımcı olmak.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="rounded-2xl border border-surface-border p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                <value.icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-[15px] font-bold text-brand-navy">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-navy/50">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-surface-border bg-surface-soft/50 py-14">
        <div className="container-page grid grid-cols-3 gap-6 text-center">
          {[
            { value: "500+", label: "Aktif kullanıcı" },
            { value: "%38", label: "Daha az boş araç günü" },
            { value: "1 gün", label: "Ortalama kurulum süresi" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-extrabold text-brand-navy sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-brand-navy/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
