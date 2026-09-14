import Link from "next/link";
import { AlertTriangle, ArrowRight, CalendarClock, Check, Info, Minus } from "lucide-react";
import Button from "@/components/Button";
import CtaBanner from "@/components/CtaBanner";
import StructuredData from "@/components/StructuredData";
import { createPageMetadata } from "@/lib/seo";
import { compliancePageStructuredData } from "@/lib/structured-data";

export const metadata = createPageMetadata({
  title: "2027 Araç Kiralama Yönetmeliği Uyum Sayfası",
  description:
    "Yönetmelik 1 Ocak 2027’de yürürlüğe giriyor, yetki belgesi için son tarih 1 Temmuz 2027. Hangi şartta RentOkey ne yapar, hangisinde yapmaz — madde madde.",
  path: "/2027-uyum",
});

const RESMI_GAZETE = "https://www.resmigazete.gov.tr/eskiler/2026/08/20260815-1.htm";
const BAKANLIK =
  "https://aydin.ticaret.gov.tr/haberler/ticaret-bakanligi-kiralik-araclarda-yetki-belgesi-arac-yasi-ve-kilometresi-depozito-tuketici-haklari-ve-filo-standartlarini-yeniden-duzenlendi";

const timeline = [
  { date: "1 Ocak 2027", title: "Yönetmelik yürürlüğe girer", detail: "Kiralama faaliyetine ilişkin şartlar bu tarihten itibaren uygulanır." },
  { date: "1 Ocak 2027", title: "Kiralama Bilgi Sistemi", detail: "Motorlu Kara Taşıtı Kiralama Bilgi Sistemi’nin bu tarihe kadar kurulması öngörülüyor." },
  { date: "1 Temmuz 2027", title: "Yetki belgesi son başvuru", detail: "Mevcut işletmelerin yetki belgesi alması için tanınan geçiş süresi burada biter." },
  { date: "1 Ocak 2028", title: "Asgari filo şartlarına uyum", detail: "Asgari taşıt sayısı ve nitelik şartları için tanınan uyum süresi." },
];

type Requirement = {
  title: string;
  detail: string;
  product: string | null;
  business: string;
};

const requirements: Requirement[] = [
  {
    title: "Araç yaşı ve kilometre sınırı",
    detail: "Klasik taşıtlar dışında 6 yaşından büyük araçlar; 180.000 km üzeri taşıtlar, elektrikli taşıtlarda 300.000 km üzeri kiraya verilemiyor.",
    product: "Filo kaydında araç yaşı ve güncel kilometre bilgisini tutar; sınıra yaklaşan araçları tek listede görmenizi sağlar.",
    business: "Araç yenileme, satış ve yatırım kararını vermek.",
  },
  {
    title: "Bakım ve teknik durum",
    detail: "Periyodik bakımı zamanında yapılmayan veya ağır hasar kaydı bulunan taşıtlar kiralanamıyor.",
    product: "Bakım kayıtlarını ve yaklaşan bakım/muayene tarihlerini rezervasyon planıyla birlikte gösterir.",
    business: "Bakımı fiilen yaptırmak ve belgelemek.",
  },
  {
    title: "Depozito üst sınırı",
    detail: "1–6 günlük kiralamalarda en çok 3 günlük, 7–29 günlük kiralamalarda en çok 7 günlük kira bedeli kadar depozito alınabiliyor.",
    product: "Depozitoyu kira bedelinden ve açık bakiyeden ayrı bir kalem olarak takip eder.",
    business: "Sözleşme ve tahsilat politikasını bu sınırlara göre güncellemek.",
  },
  {
    title: "Depozito iade süresi",
    detail: "Taşıt iade edildikten sonra 7 gün içinde depozitonun iadesi gerekiyor.",
    product: "İade tarihinden itibaren süreyi takip eder; bekleyen iadeleri görünür kılar.",
    business: "Ödemeyi fiilen gerçekleştirmek.",
  },
  {
    title: "Kayıt tutma ve bildirim",
    detail: "Kiralama faaliyetine dair kayıtların tutulması ve taşıt takibine ilişkin verilerin bilgi sistemi üzerinden bildirilmesi bekleniyor.",
    product: "Müşteri, araç, rezervasyon ve sözleşme kayıtlarını tek yerde, eksiksiz ve Excel olarak dışa aktarılabilir tutar.",
    business: "Bildirimi yapmak ve bildirilen bilginin doğruluğundan sorumlu olmak.",
  },
  {
    title: "Yetki belgesi başvurusu",
    detail: "İşletmelerin faaliyet için yetki belgesi alması gerekiyor; başvurular bilgi sistemi üzerinden yürütülecek.",
    product: null,
    business: "Başvuruyu yapmak, istenen belgeleri ve iş yeri şartlarını sağlamak.",
  },
  {
    title: "Mesleki yeterlilik (Seviye 4)",
    detail: "İşletme sorumluları için mesleki yeterlilik belgesi şartı bulunuyor.",
    product: null,
    business: "İşletme sorumlusunun belgeyi alması.",
  },
  {
    title: "Asgari taşıt sayısı ve filo bileşimi",
    detail: "Bölgeye göre değişen asgari taşıt sayısı ve belirli bölgelerde hibrit/elektrikli taşıt bulundurma şartı getiriliyor.",
    product: null,
    business: "Filo yatırımı yapmak ve tescil koşullarını sağlamak.",
  },
];

export default function CompliancePage() {
  return (
    <>
      <StructuredData data={compliancePageStructuredData} />

      <div className="container-page pt-10">
        <nav aria-label="Site haritası" className="flex items-center gap-2 text-xs font-medium text-brand-navy/45">
          <Link href="/" className="hover:text-brand-green-dark">Ana sayfa</Link>
          <span aria-hidden>/</span>
          <span className="text-brand-navy/70">2027 uyum</span>
        </nav>
      </div>

      <section className="container-page pb-4 pt-8 sm:pt-12">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-1.5 text-sm font-semibold text-amber-700">
            <CalendarClock className="h-4 w-4" /> Geçiş dönemi sürüyor
          </span>
          <h1 className="mt-5 text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] text-brand-navy sm:text-4xl lg:text-5xl">
            2027 araç kiralama yönetmeliği: hangi şartta yazılım işinize yarar, hangisinde yaramaz?
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-brand-navy/60 sm:text-base">
            Yönetmelik 1 Ocak 2027’de yürürlüğe giriyor; mevcut işletmeler için yetki belgesi son başvuru tarihi
            1 Temmuz 2027. Bu sayfa yönetmeliği baştan anlatmıyor — her şartın karşısına{" "}
            <strong className="font-bold text-brand-navy">RentOkey’in ne yaptığını ve neyi yapmadığını</strong> yazıyor.
          </p>

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-brand-blue/25 bg-brand-blue/[0.04] p-4">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
            <p className="text-sm leading-relaxed text-brand-navy/70">
              <strong className="font-bold text-brand-navy">Bu sayfa Türkiye mevzuatı içindir.</strong> Buradaki
              takvim ve şartlar Türkiye Cumhuriyeti’nde yürürlüğe giren düzenlemeye aittir. KKTC’deki operasyonunuz
              için bu tarihleri yasal yükümlülük takvimi olarak kullanmayın; yerel koşulları ilgili makamlarla ayrıca
              değerlendirin.
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href="/ucretsiz-dene" size="lg" icon className="w-full sm:w-auto">21 gün ücretsiz deneyin</Button>
            <Button href="/blog/2027-arac-kiralama-yonetmeligi" variant="secondary" size="lg" className="w-full sm:w-auto">
              Hazırlık rehberini okuyun
            </Button>
          </div>
        </div>
      </section>

      <section className="container-page py-14 sm:py-20">
        <h2 className="text-2xl font-extrabold tracking-[-0.03em] text-brand-navy sm:text-3xl">Geçiş takvimi</h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-brand-navy/55">
          Tarihler farklı amaçlara hizmet ediyor; yürürlük tarihiyle başvuru son tarihini birbirine karıştırmamak
          hazırlık planını doğru kurmanın ilk şartı.
        </p>
        <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((item, index) => (
            <li key={`${item.date}-${item.title}`} className="relative flex flex-col rounded-2xl border border-surface-border bg-white p-5">
              <span className="text-xs font-extrabold tracking-[0.12em] text-brand-navy/25">{String(index + 1).padStart(2, "0")}</span>
              <span className="mt-3 inline-flex w-fit rounded-full bg-brand-navy px-3 py-1 text-xs font-bold text-white">{item.date}</span>
              <h3 className="mt-3 text-base font-extrabold leading-snug text-brand-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-navy/55">{item.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="scroll-mt-24 border-y border-surface-border bg-surface-soft/60" id="madde-madde">
        <div className="container-page py-14 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-bold text-brand-green-dark">Madde madde</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.03em] text-brand-navy sm:text-3xl">
              Hangi şartta ne işinize yarar?
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-brand-navy/55">
              Aşağıdaki sekiz başlığın üçünde RentOkey’in hiçbir rolü yok ve bunu açıkça yazıyoruz. Bir yazılımın
              yapabileceği şey kaydı düzenli tutmak ve süreyi hatırlatmaktır; belge almak, araç satın almak veya
              sınav kazanmak değildir.
            </p>
          </div>

          <div className="mt-9 grid gap-3 lg:grid-cols-2">
            {requirements.map((item) => (
              <article key={item.title} className="flex flex-col rounded-2xl border border-surface-border bg-white p-5 sm:p-6">
                <h3 className="text-base font-extrabold text-brand-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-navy/55">{item.detail}</p>

                <div className="mt-5 grid gap-3 border-t border-surface-border pt-4">
                  <div className="flex items-start gap-2.5">
                    {item.product ? (
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green/10">
                        <Check className="h-3 w-3 text-brand-green-dark" strokeWidth={3} />
                      </span>
                    ) : (
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-navy/[0.06]">
                        <Minus className="h-3 w-3 text-brand-navy/35" strokeWidth={3} />
                      </span>
                    )}
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-brand-navy/35">RentOkey</p>
                      <p className={`mt-1 text-sm leading-relaxed ${item.product ? "text-brand-navy/70" : "text-brand-navy/40"}`}>
                        {item.product ?? "Bu başlıkta bir rolü yok."}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-50">
                      <AlertTriangle className="h-3 w-3 text-amber-600" />
                    </span>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-brand-navy/35">İşletmenin yapması gereken</p>
                      <p className="mt-1 text-sm leading-relaxed text-brand-navy/70">{item.business}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-14 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <h2 className="text-2xl font-extrabold tracking-[-0.03em] text-brand-navy sm:text-3xl">Nereden başlanır?</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-brand-navy/55">
              Hazırlığı son başvuru gününden geriye doğru değil, eksiklerin tamamlanması için gereken süreden ileriye
              doğru kurmak daha sağlıklı. Yazılım tarafında ilk adım, karar gerektiren araçları ayırabilmek için filo
              kaydını eksiksiz hale getirmek.
            </p>
            <ol className="mt-6 space-y-3">
              {[
                "Filo envanterindeki eksik yaş ve kilometre bilgilerini tamamlayın.",
                "Sınıra yaklaşan araçları ayrı bir listede toplayın ve yenileme planını rezervasyonlardan koparmadan değerlendirin.",
                "Depozito, kira bedeli ve açık bakiye takibini birbirinden ayırın.",
                "Kayıtların dışa aktarılabilir olduğundan emin olun; bildirim süreci veriyi eksiksiz isteyecek.",
              ].map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-navy text-[11px] font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-brand-navy/70">{step}</span>
                </li>
              ))}
            </ol>
            <Link
              href="/blog/2027-arac-kiralama-yonetmeligi"
              className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-brand-green-dark hover:text-brand-navy"
            >
              Ayrıntılı hazırlık rehberi <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-[24px] border border-surface-border bg-white p-6 sm:p-7">
            <h3 className="text-base font-extrabold text-brand-navy">Resmî kaynaklar</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={RESMI_GAZETE} className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-green-dark" rel="noopener">
                  Resmî Gazete — Motorlu Kara Taşıtlarının Kiralanması Hakkında Yönetmelik
                </a>
              </li>
              <li>
                <a href={BAKANLIK} className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-green-dark" rel="noopener">
                  Ticaret Bakanlığı — düzenlemeye ilişkin açıklama
                </a>
              </li>
            </ul>
            <div className="mt-6 rounded-2xl bg-surface-soft p-4">
              <p className="text-sm font-bold text-brand-navy">Önemli</p>
              <p className="mt-2 text-sm leading-relaxed text-brand-navy/60">
                Bu sayfa genel bilgilendirme ve işletme içi hazırlık önerisidir; hukuki görüş değildir.{" "}
                <strong className="font-bold text-brand-navy">Yazılım kullanımı tek başına mevzuata uygunluk sağlamaz.</strong>{" "}
                Uygulamadan önce güncel resmî metni ve işletmenize özel koşulları ilgili idare veya hukuk
                danışmanınızla teyit edin.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
