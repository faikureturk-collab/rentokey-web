import {
  ArrowRight,
  Check,
  Download,
  FileCheck2,
  Hash,
  Mail,
  MessageCircle,
  Search,
  UserRound,
} from "lucide-react";

const assurances = [
  "Kimlik ve ehliyet bilgileri isteğe bağlı",
  "Yarım kalan kayıt taslak olarak saklanır",
  "Onay belgesi kira sözleşmesinden ayrıdır",
];

export default function ReservationFlowSection() {
  return (
    <section id="rezervasyon-akisi" className="scroll-mt-24 border-y border-surface-border bg-surface-soft/55">
      <div className="container-page py-16 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-[1fr_.8fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-4 py-1.5 text-sm font-semibold text-brand-green-dark">
              <UserRound className="h-4 w-4" /> Müşteriden onaya tek akış
            </span>
            <h2 className="mt-5 max-w-3xl text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] text-brand-navy sm:text-4xl">
              Rezervasyon yalnız takvime düşmez. <span className="text-brand-green">Paylaşılabilir bir kayda dönüşür.</span>
            </h2>
          </div>
          <p className="max-w-xl text-[15px] leading-relaxed text-brand-navy/55 lg:justify-self-end">
            Müşteriyi bulmaktan rezervasyon numarası oluşturmaya ve onay bilgisini paylaşmaya kadar aynı ekranda ilerleyin.
          </p>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-[28px] border border-surface-border bg-surface-border lg:grid-cols-3">
          <article className="bg-white p-6 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                <Search className="h-5 w-5" />
              </span>
              <span className="text-xs font-extrabold tracking-[0.16em] text-brand-navy/20">01</span>
            </div>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-green-dark">Müşteriyi yazın</p>
            <h3 className="mt-2 text-lg font-extrabold text-brand-navy">Kayıtlı kişiyi bulun veya yenisini oluşturun.</h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-navy/50">
              İsim, telefon veya kimlik bilgisiyle arayın. Sonuç yoksa müşteri rezervasyonla birlikte otomatik oluşsun.
            </p>
            <div className="mt-6 rounded-2xl border border-surface-border bg-surface-soft/70 p-3">
              <div className="flex items-center gap-2 rounded-xl border border-surface-border bg-white px-3 py-2.5">
                <Search className="h-3.5 w-3.5 text-brand-navy/30" />
                <span className="text-[11px] text-brand-navy/45">Müşteri ara veya adını yaz...</span>
              </div>
              <div className="mt-2 flex items-center justify-between rounded-xl bg-white px-3 py-2.5">
                <div>
                  <p className="text-[11px] font-bold text-brand-navy">Ayşe Demir</p>
                  <p className="text-[9px] text-brand-navy/35">Kayıtlı müşteri · sürücüyle aynı</p>
                </div>
                <Check className="h-4 w-4 text-brand-green" />
              </div>
            </div>
          </article>

          <article className="bg-white p-6 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#705DE8]/10 text-[#705DE8]">
                <Hash className="h-5 w-5" />
              </span>
              <span className="text-xs font-extrabold tracking-[0.16em] text-brand-navy/20">02</span>
            </div>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-green-dark">Sistem düzenlesin</p>
            <h3 className="mt-2 text-lg font-extrabold text-brand-navy">Her kayıt otomatik numara ve net durum kazansın.</h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-navy/50">
              Benzersiz rezervasyon numarası, müşteri, sürücü, araç ve ödeme özeti tek kayıtta birleşsin; yarım iş taslakta kalsın.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-surface-border">
              <div className="flex items-center justify-between bg-brand-navy px-4 py-3 text-white">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/40">Rezervasyon no</p>
                  <p className="mt-1 text-sm font-extrabold">ROK-00042</p>
                </div>
                <span className="rounded-full bg-amber-400/15 px-2.5 py-1 text-[9px] font-bold text-amber-300">TASLAK</span>
              </div>
              <div className="grid grid-cols-2 gap-px bg-surface-border">
                <div className="bg-white p-3"><p className="text-[9px] text-brand-navy/35">Araç</p><p className="mt-1 text-[11px] font-bold text-brand-navy">34 ROK 205</p></div>
                <div className="bg-white p-3"><p className="text-[9px] text-brand-navy/35">Kalan bakiye</p><p className="mt-1 text-[11px] font-bold text-amber-700">₺8.400</p></div>
              </div>
            </div>
          </article>

          <article className="bg-white p-6 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green-dark">
                <FileCheck2 className="h-5 w-5" />
              </span>
              <span className="text-xs font-extrabold tracking-[0.16em] text-brand-navy/20">03</span>
            </div>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-green-dark">Onayı paylaşın</p>
            <h3 className="mt-2 text-lg font-extrabold text-brand-navy">Markalı rezervasyon bilgisini müşteriye ulaştırın.</h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-navy/50">
              Firma logonuzla hazırlanan Rezervasyon Onay Belgesi&apos;ni WhatsApp, e-posta veya PDF olarak paylaşın.
            </p>
            <div className="mt-6 rounded-2xl border border-surface-border bg-surface-soft/70 p-3">
              <div className="rounded-xl bg-white p-3">
                <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-brand-navy/35">Rezervasyon onay belgesi</p>
                <div className="mt-2 h-1.5 w-24 rounded-full bg-brand-navy/10" />
                <div className="mt-1.5 h-1.5 w-16 rounded-full bg-brand-navy/5" />
              </div>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {[
                  { label: "WhatsApp", icon: MessageCircle },
                  { label: "E-posta", icon: Mail },
                  { label: "PDF", icon: Download },
                ].map((item) => (
                  <span key={item.label} className="flex min-w-0 flex-col items-center gap-1.5 rounded-xl bg-white px-2 py-2.5 text-[9px] font-bold text-brand-navy/60">
                    <item.icon className="h-3.5 w-3.5 text-brand-green-dark" />
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {assurances.map((item, index) => (
            <span key={item} className="flex items-center gap-2 text-xs font-medium text-brand-navy/45">
              {index > 0 && <ArrowRight className="hidden h-3.5 w-3.5 text-brand-navy/20 sm:block" />}
              <Check className="h-3.5 w-3.5 text-brand-green" /> {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
