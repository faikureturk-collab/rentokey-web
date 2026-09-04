import {
  ArrowRight,
  CalendarCheck2,
  CarFront,
  Check,
  KeyRound,
  ListChecks,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import Button from "../Button";

type Step = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const steps: Step[] = [
  {
    number: "01",
    eyebrow: "2 dakika",
    title: "Hesabınızı açın",
    description:
      "E-posta adresinizi doğrulayın; ilk girişte firma, filo büyüklüğü ve bölge bilgilerinizi tanımlayın.",
    icon: KeyRound,
  },
  {
    number: "02",
    eyebrow: "İlk 48 saat",
    title: "Örnek filoyla başlayın veya verinizi aktarın",
    description:
      "8 araçlık örnek filoyu kurun ya da müşteri, rezervasyon, filo, gider ve bakım Excel / CSV dosyalarınız için ücretsiz ilk aktarım desteği alın.",
    icon: CarFront,
  },
  {
    number: "03",
    eyebrow: "Birlikte çalışma",
    title: "Ekibinizi davet edin",
    description:
      "Ofis ve saha ekibine görevlerine uygun erişim verin.",
    icon: UsersRound,
  },
  {
    number: "04",
    eyebrow: "Canlı operasyon",
    title: "Gerçek işinizi yürütün",
    description:
      "Teslim, iade, filo ve risk süreçlerini 21 gün boyunca birlikte deneyin.",
    icon: ListChecks,
  },
];

const assurances = [
  "Kredi kartı gerekmez",
  "Kurulum ücreti yok",
  "İlk 48 saatte Excel / CSV desteği",
];

export default function HowItWorks() {
  return (
    <section id="nasil-calisir" className="container-page scroll-mt-24 py-16 sm:py-24">
      <div className="grid gap-6 lg:grid-cols-[1fr_.78fr] lg:items-end">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-sm font-semibold text-brand-blue">
            <CalendarCheck2 className="h-4 w-4" /> 21 günlük ücretsiz deneme
          </span>
          <h2 className="mt-5 max-w-2xl text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] text-brand-navy sm:text-4xl">
            Demo izlemeyin. <span className="text-brand-green">Kendi filonuzla deneyin.</span>
          </h2>
        </div>
        <p className="max-w-xl text-[15px] leading-relaxed text-brand-navy/55 lg:justify-self-end">
          Önce örnek filoyla keşfedin veya kendi araç, müşteri, rezervasyon ve ekibinizle gerçek çalışma düzenini kurun.
        </p>
      </div>

      <div className="relative mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        <div className="pointer-events-none absolute left-[10%] right-[10%] top-8 hidden h-px bg-surface-border lg:block" />
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <article key={step.number} className="relative rounded-2xl border border-surface-border bg-white p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <span className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-xl ${index === 3 ? "bg-brand-green text-white" : "bg-surface-soft text-brand-navy"}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-xs font-extrabold tracking-[0.16em] text-brand-navy/20">{step.number}</span>
              </div>
              <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-green-dark">{step.eyebrow}</p>
              <h3 className="mt-2 text-base font-extrabold text-brand-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-navy/50">{step.description}</p>
              {index < steps.length - 1 && (
                <ArrowRight className="absolute -right-3 top-[27px] z-20 hidden h-5 w-5 rounded-full bg-white p-1 text-brand-navy/25 lg:block" />
              )}
            </article>
          );
        })}
      </div>

      <div className="mt-6 overflow-hidden rounded-[24px] bg-brand-navy lg:grid lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-green">Başlamak için beklemeyin</p>
          <h3 className="mt-2 text-xl font-extrabold text-white sm:text-2xl">Bugün hesabınızı açın, ilk operasyonunuzu kurun.</h3>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
            {assurances.map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-xs font-medium text-white/60">
                <Check className="h-3.5 w-3.5 text-brand-green" /> {item}
              </span>
            ))}
          </div>
        </div>
        <div className="border-t border-white/10 p-6 sm:p-8 lg:border-l lg:border-t-0">
          <Button href="/ucretsiz-dene" size="lg" icon className="w-full sm:w-auto">
            Ücretsiz başlayın
          </Button>
        </div>
      </div>
    </section>
  );
}
