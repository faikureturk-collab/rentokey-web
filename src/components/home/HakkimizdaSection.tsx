import { Target, Heart, Rocket, ShieldCheck } from "lucide-react";

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

export default function HakkimizdaSection() {
  return (
    <section id="hakkimizda" className="scroll-mt-24 bg-surface-soft/60 py-16 sm:py-24">
      <div className="container-page">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-brand-green/10 px-4 py-1.5 text-sm font-semibold text-brand-green">
            Hakkımızda
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-extrabold leading-tight text-brand-navy sm:text-3xl">
            Araç kiralama operasyonlarını kolaylaştırıyoruz
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-brand-navy/55">
            Rent Okey, Türkiye genelinde araç kiralama firmalarının filo, rezervasyon ve saha
            operasyonlarını tek platformdan yönetmesine yardımcı oluyor. Amacımız, filo
            sahiplerinin araçlarını değil operasyonlarını büyütmesine yardımcı olmak.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-surface-border bg-white p-6"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                <value.icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-[15px] font-bold text-brand-navy">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-navy/50">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
