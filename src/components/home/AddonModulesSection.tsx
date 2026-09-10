import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Cable,
  CheckCircle2,
  FileSignature,
  History,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const modules = [
  { icon: Camera, title: "Fotoğraflı hasar karşılaştırması", description: "Teslim ve iade fotoğraflarındaki olası farkları ekip onayına sunar." },
  { icon: MessageCircle, title: "Mesajdan rezervasyon taslağı", description: "Müşteri talebinden ekip onayına sunulacak araç ve fiyat taslağı." },
  { icon: FileSignature, title: "Dijital sözleşme ve imza", description: "Rezervasyon onay belgesinden ayrı sözleşme ve elektronik imza süreci." },
  { icon: Cable, title: "Özel entegrasyon ve API", description: "Yetkilendirilmiş veri bağlantıları ve kuruma özel entegrasyon kapsamı." },
  { icon: History, title: "Kullanıcı aktivite geçmişi ekranı", description: "Kayıt işlemlerini kullanıcı ve zaman bilgisiyle inceleyen ayrıntılı ekran." },
];
export default function AddonModulesSection({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const en = locale === "en";
  const localizedModules = en ? [
    { icon: Camera, title: "Photo-based damage comparison", description: "Presents possible differences between handover and return photos for team approval." },
    { icon: MessageCircle, title: "Message-to-reservation draft", description: "Prepares a vehicle and price draft from a customer request for team approval." },
    { icon: FileSignature, title: "Digital contract and signature", description: "A contract and electronic signature process separate from the reservation confirmation." },
    { icon: Cable, title: "Custom integration and API", description: "Authorised data connections and organisation-specific integration scope." },
    { icon: History, title: "User activity history screen", description: "A detailed screen for reviewing record actions with user and time information." },
  ] : modules;
  return (
    <section id={en ? "addons" : "ek-moduller"} className="scroll-mt-24 border-y border-surface-border bg-surface-soft/60">
      <div className="container-page py-12 sm:py-16">
        <div>
          <p className="text-sm font-bold text-brand-green-dark">{en ? "Extend RentOkey" : "RentOkey’i genişletin"}</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-navy">
            {en ? "Choose add-ons that fit your operation." : "Operasyonunuza uygun ek modülleri seçin."}
          </h2>
        </div>
        <p className="mt-4 max-w-3xl text-base text-brand-navy/65">
          {en ? "Optimise planning and pricing decisions with RentOkey Pilot; add other modules only when you need them." : <>RentOkey Pilot ile planlama ve fiyat kararlarını optimize edin; diğer modülleri yalnızca ihtiyacınız olduğunda ekleyin.</>}
        </p>

        <article className="relative mt-7 overflow-hidden rounded-[24px] bg-brand-navy p-6 text-white sm:p-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-brand-green/20 blur-3xl"
          />
          <div className="relative grid gap-7 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-green/15 px-3.5 py-2 text-sm font-bold text-brand-green">
                <Sparkles className="h-4 w-4" /> {en ? "Featured add-on" : "Öne çıkan ek paket"}
              </span>
              <h3 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                RentOkey Pilot
              </h3>
              <p className="mt-3 max-w-2xl text-xl font-bold leading-snug text-white">
                {en ? "Prepare tomorrow’s operation plan. Get smart pricing suggestions for idle vehicles." : <>Yarının operasyon planını hazırlayın. Boşta kalan araçlar için akıllı fiyat önerileri alın.</>}
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
                {en ? "Pilot evaluates vehicle assignment, maintenance conflicts, preparation windows and pricing opportunities together. It presents the plan with estimated impact and applies only the changes you approve." : <>Pilot; araç atama, bakım çakışması, hazırlık süresi ve fiyat fırsatlarını birlikte değerlendirir. Planı tahmini etkisiyle sunar ve yalnızca onayladığınız değişiklikleri uygular.</>}
              </p>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
                {(en ? ["Operation optimisation", "Smart pricing suggestions", "User-approved application"] : ["Operasyon optimizasyonu", "Akıllı fiyat önerisi", "Kullanıcı onaylı uygulama"]).map((item) => (
                  <span key={item} className="flex items-center gap-2 text-sm font-semibold text-white/85">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-green" /> {item}
                  </span>
                ))}
              </div>
              <Link
                href={en ? "/en/pilot" : "/okey-pilot"}
                className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-brand-green px-6 text-sm font-bold text-white transition-colors hover:bg-brand-green-dark"
              >
                {en ? "Explore Pilot" : "Pilot’ı inceleyin"} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/[0.07] p-5 backdrop-blur-sm sm:p-6">
              <p className="flex items-center gap-2 text-sm font-bold text-brand-green">
                <TrendingUp className="h-4 w-4" /> {en ? "70-vehicle example scenario" : "70 araçlık örnek senaryo"}
              </p>
              <p className="mt-3 text-3xl font-extrabold tracking-tight">₺55.840</p>
              <p className="mt-1 text-sm font-semibold text-white/85">
                {en ? "Illustrative 7-day reservation revenue potential" : "7 günlük rezervasyon geliri potansiyeli"}
              </p>
              <div className="mt-5 space-y-3 border-y border-white/10 py-4 text-sm text-white/70">
                <div className="flex justify-between gap-4">
                  <span>{en ? "Protectable reservations" : "Korunabilecek rezervasyon"}</span>
                  <strong className="text-white">₺44.800</strong>
                </div>
                <div className="flex justify-between gap-4">
                  <span>{en ? "Conditional new rentals" : "Koşullu yeni kiralama"}</span>
                  <strong className="text-white">₺11.040</strong>
                </div>
              </div>
              <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-white/60">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                {en ? "Illustrative gross reservation amount; new rentals and revenue growth are not guaranteed." : "Örnek brüt rezervasyon tutarıdır; yeni kiralama ve gelir artışı garanti edilmez."}
              </p>
            </div>
          </div>
        </article>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {localizedModules.map(({ icon: Icon, title, description }) => <article key={title} className="rounded-xl border border-surface-border bg-white p-5"><Icon className="h-5 w-5 text-brand-green-dark" /><h3 className="mt-3 text-base font-bold text-brand-navy">{title}</h3><p className="mt-2 text-sm text-brand-navy/65">{description}</p></article>)}
          <div className="flex flex-col justify-center rounded-xl bg-brand-navy p-5 text-white"><p className="text-base font-bold">{en ? "Let’s define the right scope for your business." : "İşinize uygun kapsamı belirleyelim."}</p><Link href={en ? "/en#contact" : "/#iletisim"} className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-brand-green">{en ? "Discuss add-ons" : "Ek modüller için görüşün"} <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </div>
    </section>
  );
}
