import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
};

export default function GizlilikPage() {
  return (
    <>
      <PageHero eyebrow="Yasal" title="Gizlilik Politikası" />
      <section className="container-page py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-brand-navy/70">
          <h2 className="text-lg font-bold text-brand-navy">1. Toplanan Veriler</h2>
          <p>
            Rent Okey olarak, hizmetlerimizi sunabilmek için ad, soyad, e-posta, telefon numarası
            ve firma bilgileri gibi kişisel verileri toplayabiliriz.
          </p>

          <h2 className="text-lg font-bold text-brand-navy">2. Verilerin Kullanım Amacı</h2>
          <p>
            Toplanan veriler; hesabınızın oluşturulması, hizmetlerimizin sunulması, destek
            taleplerinizin karşılanması ve yasal yükümlülüklerimizin yerine getirilmesi amacıyla
            kullanılır.
          </p>

          <h2 className="text-lg font-bold text-brand-navy">3. Veri Güvenliği</h2>
          <p>
            Verileriniz şifreli bağlantılar üzerinden iletilir ve yetkisiz erişime karşı teknik ve
            idari tedbirlerle korunur.
          </p>

          <h2 className="text-lg font-bold text-brand-navy">4. Haklarınız</h2>
          <p>
            KVKK kapsamında verilerinize erişme, düzeltme, silme ve işlenmesine itiraz etme
            haklarına sahipsiniz. Taleplerinizi hello@rentokey.com adresine iletebilirsiniz.
          </p>

          <h2 className="text-lg font-bold text-brand-navy">5. İletişim</h2>
          <p>
            Gizlilik politikamızla ilgili sorularınız için hello@rentokey.com adresinden bizimle
            iletişime geçebilirsiniz.
          </p>
        </div>
      </section>
    </>
  );
}
