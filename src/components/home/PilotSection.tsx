import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import Button from "@/components/Button";
import PilotDemo from "@/components/PilotDemo";

export default function PilotSection({ headingLevel = "h2", standalone = false, locale = "tr" }: { headingLevel?: "h1" | "h2"; standalone?: boolean; locale?: "tr" | "en" }) {
  const en = locale === "en";
  const Heading = headingLevel;
  const outcomes = en
    ? ["Resolve preparation, maintenance and vehicle-assignment risks", "Act on idle-vehicle and pricing opportunities", "Balance vehicles and hourly capacity across branches"]
    : ["Hazırlık, bakım ve araç atama risklerini çözün", "Boş araç ve fiyat fırsatlarını değerlendirin", "Şubeler arası araç ve saatlik kapasiteyi dengeleyin"];
  return (
    <section id={en ? "pilot" : "okey-pilot"} className="scroll-mt-24 bg-brand-navy-deep text-white">
      <div className="container-page grid gap-8 py-14 lg:grid-cols-[.85fr_1.15fr] lg:items-center sm:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-green/15 px-4 py-2 text-sm font-semibold text-brand-green"><Sparkles className="h-4 w-4" /> {en ? "RentOkey Pilot · Available paid add-on" : "RentOkey Pilot · Aktif ek paket"}</span>
          <Heading className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">{en ? <>When conditions change.<br />Your plan is ready.</> : <>Koşullar değişsin.<br />Planınız hazır olsun.</>}</Heading>
          <p className="mt-5 text-base leading-relaxed text-white/70">{en ? "Pilot’s rule engine evaluates reservations, vehicles, maintenance, pricing, branches and preparation windows together, then suggests an optimised plan for current conditions." : "Pilot’ın öneri kural motoru; rezervasyon, araç, bakım, fiyat, şube ve hazırlık sürelerini birlikte değerlendirerek mevcut koşullara uygun planı önerir."}</p>
          <ul className="mt-5 space-y-2.5 text-sm text-white/75">
            {outcomes.map((outcome) => <li key={outcome} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />{outcome}</li>)}
          </ul>
          <div className="mt-6 space-y-4 border-y border-white/15 py-5 text-sm">
            <div><p className="font-bold text-white">{en ? "Core subscription · Recommended Focus" : "Temel abonelik · Önerilen Odak"}</p><p className="mt-1 text-white/65">{en ? "Shows suitable vehicles and upcoming risks; you manage the daily operation." : "Uygun araçları ve yaklaşan riskleri gösterir; günlük operasyonu yönetirsiniz."}</p></div>
            <div><p className="font-bold text-brand-green">{en ? "Pilot · Purchased separately" : "Pilot · Ayrıca satın alınır"}</p><p className="mt-1 text-white/65">{en ? "See a coordinated solution plan, pricing suggestion and estimated impact, then approve the actions you choose." : "Birlikte uygulanabilecek çözüm planını, fiyat önerisini ve tahmini etkiyi görür; seçtiğiniz aksiyonları onaylarsınız."}</p></div>
          </div>
          <p className="mt-5 flex items-start gap-2 text-sm text-white/70"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" /> {en ? "No vehicle assignment, price or task changes without user approval." : "Kullanıcı onayı olmadan atama, fiyat veya görev değişikliği yapılmaz."}</p>
          <div className="mt-7 flex flex-wrap gap-3"><Button href={en ? (standalone ? "/en#contact" : "/en/pilot") : (standalone ? "/#iletisim" : "/okey-pilot")} icon>{en ? (standalone ? "Get Pilot pricing" : "Explore Pilot") : (standalone ? "Pilot için fiyat alın" : "Pilot’ın kapsamını inceleyin")}</Button></div>
        </div>
        <PilotDemo locale={locale} />
      </div>
    </section>
  );
}
