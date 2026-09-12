import Link from "next/link";
import {
  ArrowRight,
  Cable,
  Camera,
  Compass,
  FileSignature,
  History,
  MessageCircle,
} from "lucide-react";

const modules = [
  { icon: Camera, title: "Fotoğraflı hasar karşılaştırması", description: "Teslim ve iade fotoğraflarındaki olası farkları ekip onayına sunar." },
  { icon: MessageCircle, title: "Mesajdan rezervasyon taslağı", description: "Müşteri talebinden ekip onayına sunulacak araç ve fiyat taslağı." },
  { icon: FileSignature, title: "Dijital sözleşme ve imza", description: "Rezervasyon onay belgesinden ayrı sözleşme ve elektronik imza süreci." },
  { icon: Cable, title: "Özel entegrasyon ve API", description: "Yetkilendirilmiş veri bağlantıları ve kuruma özel entegrasyon kapsamı." },
  { icon: History, title: "Kullanıcı aktivite geçmişi ekranı", description: "Kayıt işlemlerini kullanıcı ve zaman bilgisiyle inceleyen ayrıntılı ekran." },
];

export default function AddonModulesSection({
  locale = "tr",
  context = "home",
}: {
  locale?: "tr" | "en";
  /**
   * "home": ana sayfa keşif çerçevesi. Pilot'un kendi bölümü olduğu için burada tekrar edilmez.
   * "pricing": fiyat sayfası çerçevesi. Pilot da bir ek modül olduğundan ailenin öne çıkan
   * üyesi olarak bu listede yer alır; maliyet dili öne çıkar.
   */
  context?: "home" | "pricing";
}) {
  const en = locale === "en";
  const pricing = context === "pricing";
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
        <div className="grid gap-4 lg:grid-cols-[1fr_.72fr] lg:items-end">
          <div>
            <p className="text-sm font-bold text-brand-green-dark">
              {pricing
                ? (en ? "Optional modules · not included in the core subscription" : "Ek modüller · temel aboneliğe dahil değil")
                : (en ? "Optional add-on modules" : "Opsiyonel ek modüller")}
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-navy">
              {en ? "Add capabilities only when you need them." : "Yalnızca ihtiyaç duyduğunuz kabiliyetleri ekleyin."}
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-brand-navy/55 lg:justify-self-end">
            {pricing
              ? (en
                ? "Each module is purchased separately and priced by scope, independently of your vehicle count. Your core subscription price does not change."
                : "Her modül ayrı satın alınır ve araç sayınızdan bağımsız olarak kapsamına göre fiyatlanır. Temel abonelik ücretiniz değişmez.")
              : (en
                ? "The core subscription remains clear; specialist workflows are scoped separately for your operation."
                : "Temel abonelik anlaşılır kalır; uzmanlık gerektiren iş akışları operasyonunuza göre ayrıca kapsamlandırılır.")}
          </p>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {/* Pilot da bir ek modül; ailenin öne çıkan üyesi olarak her iki bağlamda da listede. */}
          <article className="flex flex-col rounded-xl border border-brand-green/30 bg-white p-5 ring-1 ring-brand-green/10">
            <div className="flex items-center justify-between gap-3">
              <Compass className="h-5 w-5 text-brand-green-dark" />
              <span className="rounded-full bg-brand-green/10 px-2.5 py-1 text-[10px] font-bold text-brand-green-dark">
                {en ? "Featured module" : "Öne çıkan modül"}
              </span>
            </div>
            <h3 className="mt-3 text-base font-bold text-brand-navy">RentOkey Pilot</h3>
            <p className="mt-2 flex-1 text-sm text-brand-navy/65">
              {en
                ? "Operation optimisation and smart pricing suggestions, delivered as the most comprehensive module in the family."
                : "Operasyon optimizasyonu ve akıllı fiyat önerisi; ailenin en kapsamlı modülü olarak sunulur."}
            </p>
            <Link
              href={en ? "/en/pilot" : "/okey-pilot"}
              className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-brand-green-dark hover:text-brand-navy"
            >
              {en ? "Scope and details" : "Kapsam ve detaylar"} <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
          {localizedModules.map(({ icon: Icon, title, description }) => <article key={title} className="rounded-xl border border-surface-border bg-white p-5"><Icon className="h-5 w-5 text-brand-green-dark" /><h3 className="mt-3 text-base font-bold text-brand-navy">{title}</h3><p className="mt-2 text-sm text-brand-navy/65">{description}</p></article>)}
          {/* 6 modül kartı ızgarayı tam doldurduğu için CTA son satırı tek başına kaplar. */}
          <div className="flex flex-col gap-4 rounded-xl bg-brand-navy p-5 text-white sm:col-span-2 sm:flex-row sm:items-center sm:justify-between lg:col-span-3">
            <p className="text-base font-bold">{en ? "Let’s define the right scope for your business." : "İşinize uygun kapsamı belirleyelim."}</p>
            <Link href={en ? "/en#contact" : "/#iletisim"} className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-bold text-brand-green">
              {en ? "Discuss add-ons" : "Ek modüller için görüşün"} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
