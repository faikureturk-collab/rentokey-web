import { FileInput, UserPlus, Settings2, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Hesabınızı oluşturun",
    description: "1 dakikada kaydolun, hemen başlayın.",
  },
  {
    icon: FileInput,
    title: "Verilerinizi içe aktarın",
    description: "Araçlarınızı, kullanıcılarınızı ve fiyatlarınızı ekleyin.",
  },
  {
    icon: UserPlus,
    title: "Ekibinizi davet edin",
    description: "Rol bazlı yetkiler vererek ekibinizle paylaşın.",
  },
  {
    icon: Settings2,
    title: "Operasyonunuzu yönetin",
    description: "Rezervasyon, teslimat ve raporları tek yerden yönetin.",
  },
];

export default function HowItWorks() {
  return (
    <section id="nasil-calisir" className="container-page scroll-mt-24 py-6 sm:py-10">
      <div className="rounded-3xl border border-surface-border bg-white p-8 sm:p-10">
        <h2 className="text-2xl font-extrabold text-brand-navy sm:text-3xl">Nasıl çalışır?</h2>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {steps.map((step, i) => (
            <div key={step.title} className="relative flex items-start gap-4 lg:flex-col lg:items-start">
              <div className="flex items-center gap-3 lg:w-full lg:justify-between">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-brand-green text-brand-green">
                  {step.icon ? <step.icon className="h-5 w-5" /> : (
                    <span className="text-base font-bold">{step.number}</span>
                  )}
                </span>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden h-5 w-5 text-brand-green/40 lg:block" />
                )}
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-brand-navy">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-navy/50">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
