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

const stepsTr: Step[] = [
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

const assurancesTr = [
  "Kredi kartı gerekmez",
  "Kurulum ücreti yok",
  "İlk aktarım için ücretsiz destek",
];

export default function HowItWorks({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const en = locale === "en";
  const steps: Step[] = en ? [
    { number: "01", eyebrow: "2 minutes", title: "Create your account", description: "Verify your email address; define your company, fleet size and region on first sign-in.", icon: KeyRound },
    { number: "02", eyebrow: "First 48 hours", title: "Move your data", description: "Start with customer, reservation, fleet, expense and maintenance files; review fields and invalid rows before import.", icon: CarFront },
    { number: "03", eyebrow: "Working together", title: "Invite your team", description: "Give office and field teams access that matches their responsibilities.", icon: UsersRound },
    { number: "04", eyebrow: "Live operations", title: "Run real work", description: "Test handovers, returns, fleet and risk workflows together for 21 days.", icon: ListChecks },
  ] : stepsTr;
  const assurances = en ? ["No credit card", "No setup fee", "Free support for the first import"] : assurancesTr;
  return (
    <section id={en ? "how-it-works" : "nasil-calisir"} className="container-page scroll-mt-24 py-16 sm:py-24">
      <div className="grid gap-6 lg:grid-cols-[1fr_.78fr] lg:items-end">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-sm font-semibold text-brand-blue">
            <CalendarCheck2 className="h-4 w-4" /> {en ? "21-day free trial" : "21 günlük ücretsiz deneme"}
          </span>
          <h2 className="mt-5 max-w-2xl text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] text-brand-navy sm:text-4xl">
            {en ? <>Move to a new way of working <span className="text-brand-green">with your existing records.</span></> : <>Mevcut kayıtlarınızla <span className="text-brand-green">yeni çalışma düzenine geçin.</span></>}
          </h2>
        </div>
        <p className="max-w-xl text-[15px] leading-relaxed text-brand-navy/55 lg:justify-self-end">
          {en ? "Do not re-enter 70 vehicles one by one. Import your Excel / CSV files, review the records and invite your team. You can explore with the sample fleet first." : "70 aracınızı tek tek yeniden girmeyin. Excel / CSV dosyalarınızı aktarın, kayıtlarınızı kontrol edin ve ekibinizi davet edin. İsterseniz önce örnek filoyla keşfedin."}
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
        <div><h3 className="text-xl font-extrabold text-brand-navy">{en ? "Request migration support within the first 48 hours." : "İlk 48 saat içinde aktarım desteği talep edin."}</h3><p className="mt-3 text-sm leading-relaxed text-brand-navy/65">{en ? "This is the window for opening a free support request; it does not mean migration will be completed within 48 hours. Timing depends on scope and data quality." : "Bu süre ücretsiz destek talebini açmanız içindir; taşımanın 48 saatte tamamlanacağı anlamına gelmez. Dosyalarınızın kapsamı ve veri kalitesi süreyi belirler."}</p><Button href={en ? "/en#contact" : "/#iletisim"} className="mt-4" variant="secondary">{en ? "Discuss data migration" : "Veri aktarımı için görüşün"}</Button></div>
        <div><p className="text-sm font-bold text-brand-navy">{en ? "Your migration checklist" : "Geçiş kontrol listeniz"}</p><ul className="mt-3 space-y-3 text-sm text-brand-navy/70">{(en ? ["Prepare files using the Excel / CSV templates.", "Review field mapping and invalid rows.", "After import, compare vehicle and reservation totals and sample records.", "Define team roles and begin running real operations."] : ["Excel / CSV şablonuna göre dosyaları hazırlayın.", "Alan eşleştirmelerini ve hatalı satırları kontrol edin.", "Aktarım sonrası araç ve rezervasyon sayılarıyla örnek kayıtları karşılaştırın.", "Ekip rollerini belirleyip gerçek operasyonunuza başlayın."]).map((item) => <li key={item} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-dark" />{item}</li>)}</ul></div>
      </div>
      <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-brand-navy/65">{assurances.map((item) => <span key={item}>{item}</span>)}</div>
    </section>
  );
}
