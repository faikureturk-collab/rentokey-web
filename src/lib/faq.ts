export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqGroup = {
  id: string;
  label: string;
  items: FaqItem[];
};

export const faqGroups: FaqGroup[] = [
  {
    id: "deneme-paketler",
    label: "Deneme ve paketler",
    items: [
      {
        question: "14 günlük ücretsiz deneme nasıl başlar?",
        answer:
          "Ad, e-posta ve şifre bilgilerinizi girip e-posta adresinizi doğrulayarak hesabınızı oluşturursunuz. İlk girişte firma adı ve filo büyüklüğünü tanımlarsınız. Kredi kartı gerekmez; deneme süresince kendi araç ve rezervasyonlarınızla ürünü değerlendirebilirsiniz.",
      },
      {
        question: "Deneme sonunda otomatik ödeme alınır mı?",
        answer:
          "Hayır. Başlangıçta ödeme bilgisi alınmadığı için 14 gün sonunda otomatik ücretlendirme yapılmaz. Devam etmek isterseniz filonuza uygun paketi seçersiniz.",
      },
      {
        question: "Paketlerde kaç kullanıcı ve şube bulunuyor?",
        answer:
          "Başlangıç paketinde 1 kullanıcı ve 1 şube, Büyüme paketinde 5 kullanıcı ve 1 şube, Profesyonel pakette 15 kullanıcı ve 3 şube bulunur. Kurumsal paket sınırsız kullanıcı ve şubeye göre özel fiyatlandırılır.",
      },
      {
        question: "Paketimi daha sonra değiştirebilir miyim?",
        answer:
          "Evet. Araç, kullanıcı veya şube sayınız değiştiğinde paketinizi yükseltebilir ya da uygun alt pakete geçebilirsiniz. Yeni limitler seçilen fatura döneminde uygulanır.",
      },
    ],
  },
  {
    id: "urun-kullanim",
    label: "Ürün ve günlük kullanım",
    items: [
      {
        question: "Bütün paketlerde hangi özellikler var?",
        answer:
          "Rezervasyon ve zaman çizelgesi, uygun araç önerisi, filo, teslim/iade, mobil operasyon, bakım ve belge süresi uyarıları, gider ve ödeme takibi ile CSV içe aktarma bütün paketlerde yer alır.",
      },
      {
        question: "Sistem rezervasyona uygun aracı önerebilir mi?",
        answer:
          "Evet. Rent Okey rezervasyon tarihleri ve araç uygunluğuna göre atanabilecek aracı önerir. Yetkili kullanıcı öneriyi kontrol ederek araç atamasını tamamlayabilir veya farklı bir araç seçebilir.",
      },
      {
        question: "Önerilen odak özelliği neyi takip eder?",
        answer:
          "Önerilen odak, sabit teslim/iade veya belge uyarılarının yanında farklı verileri birlikte değerlendirir. Kiralama devam ederken kalan ödeme bakiyesi ya da arka arkaya iki rezervasyon arasında temizlik ve lokasyon transferi için yeterli süre bulunmaması gibi durumları önceden göstererek ekibin aksiyon hazırlamasına yardımcı olur.",
      },
      {
        question: "Rent Okey Türkiye ve KKTC'de kullanılabilir mi?",
        answer:
          "Evet. Ürün Türkiye ve KKTC'deki araç kiralama operasyonları için tasarlanmıştır. Firma ve şubelerinizi bulunduğunuz bölgeye göre tanımlayabilirsiniz.",
      },
      {
        question: "Masaüstü, tablet ve telefonda çalışır mı?",
        answer:
          "Evet. Masaüstü görünümü planlama ve yoğun zaman çizelgesi için; tablet ve mobil görünüm ise sıradaki teslim, iade ve diğer hızlı operasyon aksiyonları için düzenlenmiştir.",
      },
      {
        question: "Mevcut verilerimi CSV ile içeri aktarabilir miyim?",
        answer:
          "Evet. Rezervasyonlarınızı, giderlerinizi, filo bilgilerinizi ve bakım kayıtlarınızı CSV dosyalarıyla içeri aktarabilirsiniz. Kurumsal pakette veri hazırlama ve ilk kurulum için ayrıca destek sunulur.",
      },
      {
        question: "Verilerimi Excel olarak dışarı aktarabilir miyim?",
        answer:
          "Evet. Yetkili kullanıcılar desteklenen filo, rezervasyon, ödeme, gider ve rapor verilerini Excel formatında dışarı aktarabilir. Dışarı aktarılabilen veri alanları, kullanılan modüle ve kullanıcının yetkilerine göre değişebilir.",
      },
    ],
  },
  {
    id: "veri-guvenligi-destek",
    label: "Veri güvenliği ve destek",
    items: [
      {
        question: "Verilerim nerede saklanıyor?",
        answer:
          "Rent Okey’in birincil uygulama verileri, Supabase altyapısı üzerinden Amazon Web Services’in (AWS) Avrupa Birliği sınırları içindeki İrlanda (eu-west-1) bölgesinde saklanır.",
      },
      {
        question: "Verilerim şifreleniyor mu?",
        answer:
          "Evet. Verileriniz cihazınız ile Rent Okey arasında aktarılırken HTTPS/TLS ile korunur. Supabase altyapısında saklanan uygulama verileri ve veritabanı yedekleri de depolama seviyesinde şifrelenir.",
      },
      {
        question: "Veriler ne sıklıkla yedekleniyor?",
        answer:
          "Veritabanımız her gün otomatik olarak yedeklenir. Son 7 güne ait günlük veritabanı yedekleri muhafaza edilir.",
      },
      {
        question: "Başka Rent Okey müşterileri bilgilerimi görebilir mi?",
        answer:
          "Hayır. Firma hesapları birbirinden ayrıdır. Veritabanı erişim kuralları, kullanıcıların yalnızca bağlı oldukları firma hesabındaki ve kendilerine verilen yetki kapsamındaki verilere erişmesini sağlar. Destek veya güvenlik incelemesi gerektiren sınırlı durumlarda yalnızca yetkilendirilmiş Rent Okey personeli, görevi için gerekli olan kapsamda erişim sağlayabilir.",
      },
      {
        question: "Rol bazlı yetki ve aktivite geçmişi var mı?",
        answer:
          "Evet. Kullanıcılara görevlerine göre sayfa ve işlem yetkileri verilebilir. Sistem üzerinde yapılan kayıt oluşturma, güncelleme ve silme işlemleri aktivite geçmişine kaydedilir. Böylece işlemin hangi kullanıcı tarafından ve ne zaman gerçekleştirildiği takip edilebilir.",
      },
      {
        question: "Destek kanalları ve yanıt süreleri nelerdir?",
        answer:
          "Rent Okey desteğine e-posta ve WhatsApp üzerinden ulaşabilirsiniz. Destek ekibimiz haftanın 7 günü 09.00–22.00 saatleri arasında hizmet verir. Destek çalışma saatleri içinde iletilen, operasyonu durduran kritik taleplere 1 saat içinde; diğer teknik ve kullanım taleplerine ise en geç 4 saat içinde ilk yanıt vermeyi hedefleriz. Çözüm süresi talebin kapsamına göre değişebilir. İnceleme devam ettiği sürece kullanıcıya düzenli olarak bilgi verilir.",
      },
    ],
  },
];
