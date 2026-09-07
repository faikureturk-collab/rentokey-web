import { ShieldCheck, Sparkles } from "lucide-react";
import Button from "@/components/Button";
import PilotDemo from "@/components/PilotDemo";

export default function PilotSection({ headingLevel = "h2", standalone = false }: { headingLevel?: "h1" | "h2"; standalone?: boolean }) {
  const Heading = headingLevel;
  return (
    <section id="okey-pilot" className="scroll-mt-24 bg-brand-navy-deep text-white">
      <div className="container-page grid gap-8 py-14 lg:grid-cols-[.85fr_1.15fr] lg:items-center sm:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-green/15 px-4 py-2 text-sm font-semibold text-brand-green"><Sparkles className="h-4 w-4" /> RentOkey Pilot · Aktif ek paket</span>
          <Heading className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">Koşullar değişsin.<br />Planınız hazır olsun.</Heading>
          <p className="mt-5 text-base leading-relaxed text-white/70">Araç, rezervasyon, bakım ve hazırlık sürelerini birlikte değerlendirir; mevcut koşullara göre optimize edilmiş bir plan sunar. Akıllı fiyat önerisi de Pilot kapsamındadır.</p>
          <div className="mt-6 space-y-4 border-y border-white/15 py-5 text-sm">
            <div><p className="font-bold text-white">Temel abonelik · Önerilen Odak</p><p className="mt-1 text-white/65">Uygun araçları ve yaklaşan riskleri gösterir; günlük operasyonu yönetirsiniz.</p></div>
            <div><p className="font-bold text-brand-green">Pilot · Ayrıca satın alınır</p><p className="mt-1 text-white/65">Birlikte uygulanabilecek çözüm planını, fiyat önerisini ve tahmini etkiyi görür; seçtiğiniz aksiyonları onaylarsınız.</p></div>
          </div>
          <p className="mt-5 flex items-start gap-2 text-sm text-white/70"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" /> Kullanıcı onayı olmadan atama, fiyat veya görev değişikliği yapılmaz.</p>
          <div className="mt-7 flex flex-wrap gap-3"><Button href={standalone ? "/#iletisim" : "/okey-pilot"} icon>{standalone ? "Pilot için fiyat alın" : "Pilot’ın kapsamını inceleyin"}</Button></div>
        </div>
        <PilotDemo />
      </div>
    </section>
  );
}
