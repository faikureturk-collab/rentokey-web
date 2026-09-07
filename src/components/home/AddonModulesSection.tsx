import Link from "next/link";
import { ArrowRight, Camera, Cable, FileSignature, History, MessageCircle } from "lucide-react";

const modules = [
  { icon: Camera, title: "Fotoğraflı hasar karşılaştırması", description: "Teslim ve iade fotoğraflarındaki olası farkları ekip onayına sunar." },
  { icon: MessageCircle, title: "Mesajdan rezervasyon taslağı", description: "Müşteri talebinden ekip onayına sunulacak araç ve fiyat taslağı." },
  { icon: FileSignature, title: "Dijital sözleşme ve imza", description: "Rezervasyon onay belgesinden ayrı sözleşme ve elektronik imza süreci." },
  { icon: Cable, title: "Özel entegrasyon ve API", description: "Yetkilendirilmiş veri bağlantıları ve kuruma özel entegrasyon kapsamı." },
  { icon: History, title: "Kullanıcı aktivite geçmişi ekranı", description: "Kayıt işlemlerini kullanıcı ve zaman bilgisiyle inceleyen ayrıntılı ekran." },
];
export default function AddonModulesSection() {
  return (
    <section id="ek-moduller" className="scroll-mt-24 border-y border-surface-border bg-surface-soft/60">
      <div className="container-page py-12 sm:py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="text-sm font-bold text-brand-green-dark">Opsiyonel ek modüller</p><h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-navy">İhtiyacınıza göre genişletin.</h2></div>
          <Link href="/okey-pilot" className="text-sm font-semibold text-brand-blue underline underline-offset-4">Operasyon ve akıllı fiyat önerisi: RentOkey Pilot</Link>
        </div>
        <p className="mt-4 max-w-3xl text-base text-brand-navy/65">Aşağıdaki modüller temel abonelikten ayrı sunulur. İlgilendiğiniz modülün kapsamını, kullanılabilirliğini ve fiyatını ekibimizle netleştirin.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map(({ icon: Icon, title, description }) => <article key={title} className="rounded-xl border border-surface-border bg-white p-5"><Icon className="h-5 w-5 text-brand-green-dark" /><h3 className="mt-3 text-base font-bold text-brand-navy">{title}</h3><p className="mt-2 text-sm text-brand-navy/65">{description}</p></article>)}
          <div className="flex flex-col justify-center rounded-xl bg-brand-navy p-5 text-white"><p className="text-base font-bold">İşinize uygun kapsamı belirleyelim.</p><Link href="/#iletisim" className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-brand-green">Ek modüller için görüşün <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </div>
    </section>
  );
}
