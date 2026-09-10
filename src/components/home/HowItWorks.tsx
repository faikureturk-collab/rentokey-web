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
    title: "Verinizi taşıyın",
    description:
      "Müşteri, rezervasyon, filo, gider ve bakım dosyalarınızla başlayın; aktarım öncesi alanları ve hatalı satırları kontrol edin.",
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
  "İlk aktarım için ücretsiz destek",
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
            Mevcut kayıtlarınızla <span className="text-brand-green">yeni çalışma düzenine geçin.</span>
          </h2>
        </div>
        <p className="max-w-xl text-[15px] leading-relaxed text-brand-navy/55 lg:justify-self-end">
          70 aracınızı tek tek yeniden girmeyin. Excel / CSV dosyalarınızı aktarın, kayıtlarınızı kontrol edin ve ekibinizi davet edin. İsterseniz önce örnek filoyla keşfedin.
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

      <div className="mt-6 grid gap-6 rounded-2xl border border-brand-green/25 bg-brand-green/5 p-6 lg:grid-cols-[1fr_1fr]">
        <div><h3 className="text-xl font-extrabold text-brand-navy">İlk 48 saat içinde aktarım desteği talep edin.</h3><p className="mt-3 text-sm leading-relaxed text-brand-navy/65">Bu süre ücretsiz destek talebini açmanız içindir; taşımanın 48 saatte tamamlanacağı anlamına gelmez. Dosyalarınızın kapsamı ve veri kalitesi süreyi belirler.</p><Button href="/#iletisim" className="mt-4" variant="secondary">Veri aktarımı için görüşün</Button></div>
        <div><p className="text-sm font-bold text-brand-navy">Geçiş kontrol listeniz</p><ul className="mt-3 space-y-3 text-sm text-brand-navy/70">{["Excel / CSV şablonuna göre dosyaları hazırlayın.", "Alan eşleştirmelerini ve hatalı satırları kontrol edin.", "Aktarım sonrası araç ve rezervasyon sayılarıyla örnek kayıtları karşılaştırın.", "Ekip rollerini belirleyip gerçek operasyonunuza başlayın."].map((item) => <li key={item} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-dark" />{item}</li>)}</ul></div>
      </div>
      <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-brand-navy/65">{assurances.map((item) => <span key={item}>{item}</span>)}</div>
    </section>
  );
}
