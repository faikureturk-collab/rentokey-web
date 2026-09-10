import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Cable,
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
        <div className="grid gap-4 lg:grid-cols-[1fr_.72fr] lg:items-end">
          <div>
            <p className="text-sm font-bold text-brand-green-dark">{en ? "Other optional modules" : "Diğer opsiyonel modüller"}</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-navy">
              {en ? "Add capabilities only when you need them." : "Yalnızca ihtiyaç duyduğunuz kabiliyetleri ekleyin."}
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-brand-navy/55 lg:justify-self-end">
            {en ? "The core subscription remains clear; specialist workflows are scoped separately for your operation." : "Temel abonelik anlaşılır kalır; uzmanlık gerektiren iş akışları operasyonunuza göre ayrıca kapsamlandırılır."}
          </p>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {localizedModules.map(({ icon: Icon, title, description }) => <article key={title} className="rounded-xl border border-surface-border bg-white p-5"><Icon className="h-5 w-5 text-brand-green-dark" /><h3 className="mt-3 text-base font-bold text-brand-navy">{title}</h3><p className="mt-2 text-sm text-brand-navy/65">{description}</p></article>)}
          <div className="flex flex-col justify-center rounded-xl bg-brand-navy p-5 text-white"><p className="text-base font-bold">{en ? "Let’s define the right scope for your business." : "İşinize uygun kapsamı belirleyelim."}</p><Link href={en ? "/en#contact" : "/#iletisim"} className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-brand-green">{en ? "Discuss add-ons" : "Ek modüller için görüşün"} <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </div>
    </section>
  );
}
