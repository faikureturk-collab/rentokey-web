import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Kullanım Şartları",
};

export default function KullanimSartlariPage() {
  return (
    <>
      <PageHero eyebrow="Yasal" title="Kullanım Şartları" />
      <section className="container-page py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-brand-navy/70">
          <h2 className="text-lg font-bold text-brand-navy">1. Hizmetin Kapsamı</h2>
          <p>
            Rent Okey, araç kiralama firmalarının filo, rezervasyon ve saha operasyonlarını
            yönetmesi için sunulan bir bulut yazılım hizmetidir.
          </p>

          <h2 className="text-lg font-bold text-brand-navy">2. Hesap Sorumluluğu</h2>
          <p>
            Hesabınıza ait giriş bilgilerinin gizliliğinden ve hesabınız üzerinden yapılan tüm
            işlemlerden siz sorumlusunuz.
          </p>

          <h2 className="text-lg font-bold text-brand-navy">3. Ödeme ve Faturalandırma</h2>
          <p>
            Seçtiğiniz pakete göre aylık veya yıllık olarak faturalandırılırsınız. Fiyatlara KDV
            dahil değildir.
          </p>

          <h2 className="text-lg font-bold text-brand-navy">4. Fesih</h2>
          <p>
            Hizmeti dilediğiniz zaman iptal edebilirsiniz. İptal sonrası verileriniz mevzuata uygun
            bir süre boyunca saklanır ve ardından silinir.
          </p>

          <h2 className="text-lg font-bold text-brand-navy">5. Sorumluluk Sınırı</h2>
          <p>
            Rent Okey, hizmetin kesintisiz ve hatasız çalışacağını garanti etmez; ancak hizmet
            kalitesini sürekli iyileştirmek için çalışır.
          </p>
        </div>
      </section>
    </>
  );
}
