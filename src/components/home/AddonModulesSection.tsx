import Link from "next/link";
import {
  ArrowRight,
  Cable,
  CheckCircle2,
  FileSignature,
  History,
  MessageCircle,
  PackagePlus,
  SlidersHorizontal,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import Button from "../Button";
import { AiDamageCompareIcon, SmartPricingIcon } from "@/components/icons/ColorIcons";

const highlights: { icon: LucideIcon; label: string }[] = [
  { icon: PackagePlus, label: "Taban fiyata dahil değil, ayrı satın alınır" },
  { icon: SlidersHorizontal, label: "Sadece ihtiyacınız olan modülü ekleyin" },
  { icon: MessageCircle, label: "Kapsam ve fiyat, kısa bir görüşmeyle netleşir" },
];

const featured = {
  badge: "Aktif · Öne çıkan ek modül",
  label: "Operasyon optimizasyonu",
  title: "RentOkey Pilot",
  description:
    "Yarınki operasyonu analiz eder; uygulanabilir çözüm planını, gerekçesini ve tahmini etkisini birlikte sunar. Seçtiğiniz değişiklikleri yalnızca onayınızla uygular.",
  points: [
    "Finansal ve operasyonel etkiyi öneriyle birlikte gösterir",
    "Seçtiğiniz araç atamalarını ve görevleri kontrollü biçimde günceller",
    "Kullanıcı onayı olmadan hiçbir değişiklik yapmaz",
  ],
};

const secondary = [
  {
    icon: <AiDamageCompareIcon size={40} />,
    label: "Saha operasyonu",
    title: "Fotoğraflı hasar karşılaştırması",
    description:
      "Teslim ve iade fotoğraflarını eşleştirerek olası farkları ekip onayına sunar.",
  },
  {
    icon: <SmartPricingIcon size={40} />,
    label: "Gelir yönetimi",
    title: "Akıllı fiyat önerisi",
    description:
      "Sezon, doluluk ve geçmiş rezervasyon verilerinden yararlanan onaylı fiyat önerileri.",
  },
];

const compact: { icon: LucideIcon; accent: string; label: string; title: string; description: string }[] = [
  {
    icon: MessageCircle,
    accent: "bg-brand-blue/10 text-brand-blue",
    label: "Müşteri iletişimi",
    title: "Mesajdan rezervasyon taslağı",
    description:
      "Gelen müşteri talebinden ekip onayına sunulacak araç ve fiyat taslağının hazırlanması.",
  },
  {
    icon: FileSignature,
    accent: "bg-brand-blue/10 text-brand-blue",
    label: "Doküman ve onay",
    title: "Dijital sözleşme ve imza",
    description:
      "Rezervasyon onay belgesinden ayrı, hukuki metin ve elektronik imza sürecinin uçtan uca yönetilmesi.",
  },
  {
    icon: Cable,
    accent: "bg-brand-green/10 text-brand-green-dark",
    label: "Kurumsal bağlantılar",
    title: "Özel entegrasyon ve API",
    description:
      "Yetkilendirilmiş veri bağlantıları ve kuruma özel API erişimiyle farklı sistemlerin birlikte çalışması.",
  },
  {
    icon: History,
    accent: "bg-brand-navy/10 text-brand-navy",
    label: "Güvenlik ve denetim",
    title: "Kullanıcı aktivite geçmişi ekranı",
    description:
      "Kayıt oluşturma, güncelleme ve silme işlemlerinin kullanıcı ve zaman bilgisiyle incelenebileceği ayrıntılı ekran.",
  },
];

const pillCta =
  "mt-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-surface-border px-3.5 py-1.5 text-[11px] font-bold text-brand-navy transition-colors hover:border-brand-green/40 hover:bg-brand-green/5 hover:text-brand-green-dark";

const moduleBadge =
  "rounded-full bg-brand-blue/10 px-2.5 py-1 text-[10px] font-bold text-brand-blue";

export default function AddonModulesSection() {
  return (
    <section id="ek-moduller" className="scroll-mt-24 border-y border-surface-border bg-surface-soft/60">
      <div className="container-page py-16 sm:py-20">
        <div className="grid gap-5 lg:grid-cols-[1fr_.78fr] lg:items-end">
          <div>
            <span className="inline-flex rounded-full bg-brand-blue/10 px-4 py-1.5 text-sm font-semibold text-brand-blue">
              Ek Modüller
            </span>
            <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] text-brand-navy sm:text-4xl">
              Temel aboneliğinize, yalnızca ihtiyacınız olan modülü ekleyin.
            </h2>
          </div>
          <p className="max-w-xl text-[15px] leading-relaxed text-brand-navy/55 lg:justify-self-end">
            Bu modülleri gösteriş için değil, ekibinizin tekrar eden işini azaltmak için sunuyoruz.
            Her biri ayrı satın alınır; filonuzun büyüklüğünden bağımsız, sadece ihtiyacınız olanı eklersiniz.
          </p>
        </div>

        <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
          {highlights.map((item) => (
            <span key={item.label} className="flex items-center gap-1.5 text-xs font-medium text-brand-navy/50">
              <item.icon className="h-3.5 w-3.5 text-brand-green" /> {item.label}
            </span>
          ))}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <article className="flex flex-col rounded-[24px] border border-surface-border bg-white p-7 sm:p-8 lg:col-span-2 lg:row-span-2">
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-brand-green/12 text-brand-green-dark">
                <Sparkles className="h-6 w-6" />
              </span>
              <span className="rounded-full bg-brand-green/10 px-2.5 py-1 text-[10px] font-bold text-brand-green-dark">
                {featured.badge}
              </span>
            </div>
            <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-blue">{featured.label}</p>
            <h3 className="mt-2 text-xl font-extrabold leading-snug text-brand-navy sm:text-2xl">{featured.title}</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-navy/50">{featured.description}</p>
            <ul className="mt-5 space-y-2.5">
              {featured.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  <span className="text-sm text-brand-navy/60">{point}</span>
                </li>
              ))}
            </ul>
            <Button href="/okey-pilot" size="md" icon className="mt-6 w-fit">
              Pilot’ı inceleyin
            </Button>
          </article>

          {secondary.map((item) => (
            <article key={item.title} className="flex flex-col rounded-[24px] border border-surface-border bg-white p-6">
              <div className="flex items-start justify-between gap-4">
                {item.icon}
                <span className={moduleBadge}>Ek modül</span>
              </div>
              <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-navy/35">{item.label}</p>
              <h3 className="mt-2 text-base font-extrabold leading-snug text-brand-navy">{item.title}</h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-brand-navy/50">{item.description}</p>
              <Link href="/#iletisim" className={pillCta}>
                Bilgi alın <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {compact.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="flex flex-col rounded-[20px] border border-surface-border bg-white p-6">
                <div className="flex items-start justify-between gap-4">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.accent}`}>
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <span className={moduleBadge}>Ek modül</span>
                </div>
                <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-navy/35">{item.label}</p>
                <h3 className="mt-2 text-sm font-extrabold leading-snug text-brand-navy">{item.title}</h3>
                <p className="mt-2.5 flex-1 text-xs leading-relaxed text-brand-navy/50">{item.description}</p>
                <Link href="/#iletisim" className={pillCta}>
                  Bilgi alın <ArrowRight className="h-3 w-3" />
                </Link>
              </article>
            );
          })}
        </div>

        <p className="mt-6 text-center text-[11px] leading-relaxed text-brand-navy/35">
          Modül fiyatları filonuza ve ihtiyacınıza göre değişir; kapsam ve fiyat teklifi için{" "}
          <Link href="/#iletisim" className="font-semibold text-brand-navy/50 underline underline-offset-2">
            bizimle iletişime geçin
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
