import Link from "next/link";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Button from "@/components/Button";

const planItems = [
  {
    action: "34 ROK 123 → Clio ile değiştir",
    effect: "₺2.800",
    reason: "Mevcut araç bakıma girecek",
  },
  {
    action: "Ercan teslimini 30 dk öne al",
    effect: "Gecikmeyi önler",
    reason: "Transfer süresi yetersiz",
  },
  {
    action: "Peugeot 2008 fiyatını %8 düşür",
    effect: "+1 kiralama olasılığı",
    reason: "3 gündür boşta",
  },
  {
    action: "Eksik ödemeyi teslimden önce tahsil et",
    effect: "₺4.100",
    reason: "Teslime 90 dakika kaldı",
  },
];

const safeguards = [
  "Her önerinin gerekçesi ve tahmini etkisi görünür",
  "Hangi aksiyonların uygulanacağına kullanıcı karar verir",
  "Onaylanan atamalar ve görevler kontrollü biçimde güncellenir",
];

export default function PilotSection({
  headingLevel = "h2",
  standalone = false,
}: {
  headingLevel?: "h1" | "h2";
  standalone?: boolean;
}) {
  const Heading = headingLevel;
  return (
    <section id="okey-pilot" className="scroll-mt-24 overflow-hidden bg-brand-navy-deep text-white">
      <div className="container-page py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[.83fr_1.17fr] lg:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-green/15 px-4 py-1.5 text-sm font-semibold text-brand-green">
                <Sparkles className="h-4 w-4" /> RentOkey Pilot
              </span>
              <span className="rounded-full border border-white/15 px-3 py-1.5 text-[11px] font-bold text-white/65">
                Aktif · Opsiyonel ek paket
              </span>
            </div>

            <Heading className="mt-6 max-w-xl text-3xl font-extrabold leading-[1.06] tracking-[-0.04em] sm:text-4xl lg:text-[46px]">
              Sorunu göstermekle kalmaz. En verimli planı hazırlar.
            </Heading>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/58 sm:text-base">
              Rezervasyon, araç, bakım, tahsilat, lokasyon ve hazırlık süresi verilerini birlikte
              değerlendirir. Finansal etkisi görünür bir operasyon planı hazırlar; seçtiğiniz
              değişiklikleri yalnızca onayınızla uygular.
            </p>

            <ul className="mt-7 space-y-3">
              {safeguards.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-white/72">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {standalone ? (
                <>
                  <Button href="/#iletisim" size="lg" icon>
                    Ek paket için fiyat alın
                  </Button>
                  <Button href="/ucretsiz-dene" variant="secondary" size="lg">
                    RentOkey’i deneyin
                  </Button>
                </>
              ) : (
                <>
                  <Button href="/okey-pilot" size="lg" icon>
                    Pilot’ı inceleyin
                  </Button>
                  <Button href="/#iletisim" variant="secondary" size="lg">
                    Ek paket için bilgi alın
                  </Button>
                </>
              )}
            </div>
            <p className="mt-4 flex items-center gap-2 text-xs text-white/40">
              <ShieldCheck className="h-3.5 w-3.5 text-brand-green" />
              Kullanıcı onayı olmadan hiçbir değişiklik uygulanmaz.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/12 bg-white/[0.07] p-3 shadow-[0_28px_80px_-30px_rgba(0,0,0,.55)] backdrop-blur sm:p-4">
            <div className="rounded-[22px] bg-white p-4 text-brand-navy sm:p-5">
              <div className="flex flex-col gap-4 border-b border-surface-border pb-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-green-dark">
                    Bugünkü fırsat
                  </p>
                  <p className="mt-1 text-xl font-extrabold tracking-[-0.025em] sm:text-2xl">
                    ₺6.900 kurtarılabilir gelir
                  </p>
                  <p className="mt-1 text-xs text-brand-navy/45">4 önerilen aksiyon · yaklaşık 2 dakika</p>
                </div>
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-green/10 px-3 py-1.5 text-[10px] font-bold text-brand-green-dark">
                  <TrendingUp className="h-3.5 w-3.5" /> +%22 tahmini gelir
                </span>
              </div>

              <div className="mt-4 space-y-2">
                {planItems.map((item) => (
                  <div
                    key={item.action}
                    className="grid gap-2 rounded-xl border border-surface-border p-3 sm:grid-cols-[auto_1fr_auto] sm:items-center"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-green text-white">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-extrabold leading-snug text-brand-navy sm:text-[13px]">{item.action}</p>
                      <p className="mt-0.5 text-[10px] text-brand-navy/40">{item.reason}</p>
                    </div>
                    <span className="w-fit rounded-full bg-brand-blue/8 px-2.5 py-1 text-[10px] font-bold text-brand-blue">
                      {item.effect}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                <div className="rounded-xl bg-surface-soft p-3">
                  <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-brand-navy/35">Mevcut plan</p>
                  <p className="mt-1 text-sm font-extrabold">%72 doluluk · ₺31.400</p>
                </div>
                <ArrowRight className="hidden h-4 w-4 text-brand-navy/25 sm:block" />
                <div className="rounded-xl bg-brand-green/10 p-3">
                  <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-brand-green-dark">Önerilen plan</p>
                  <p className="mt-1 text-sm font-extrabold">%78 doluluk · ₺38.300</p>
                </div>
              </div>

              <button
                type="button"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-green py-3 text-xs font-extrabold text-white"
              >
                <Sparkles className="h-4 w-4" /> Seçili önerileri uygula
              </button>
              <p className="mt-2 flex items-center justify-center gap-1.5 text-center text-[9px] text-brand-navy/35">
                <Clock3 className="h-3 w-3" /> Örnek operasyon senaryosu · Gösterilen etkiler tahminidir
              </p>
            </div>
          </div>
        </div>

        {!standalone && (
          <div className="mt-9 flex justify-center">
            <Link href="/okey-pilot" className="inline-flex items-center gap-1.5 text-xs font-bold text-white/55 hover:text-white">
              RentOkey Pilot’ın değerlendirdiği operasyon senaryolarını görün <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
