export type FaqItem = {
  question: string;
  answer: string;
  whatsapp?: boolean;
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
        question: "21 günlük ücretsiz deneme nasıl başlar?",
        answer:
          "Ad, e-posta ve şifre bilgilerinizi girip e-posta adresinizi doğrulayarak hesabınızı oluşturursunuz. İlk girişte firma adı ve filo büyüklüğünü tanımlarsınız. Kredi kartı gerekmez; deneme süresince kendi araç ve rezervasyonlarınızla ürünü değerlendirebilirsiniz.",
      },
      {
        question: "İlk 48 saat içinde aktarım desteğini nasıl talep ederim?",
        answer:
          "Deneme hesabınızı oluşturduktan sonraki ilk 48 saat içinde müşteri, rezervasyon, filo, gider veya bakım Excel / CSV dosyanız için destek talebi oluşturabilirsiniz. Ekibimiz destek saatleri içinde dosyanın yapısını kontrol eder, gerekli düzeltmeleri bildirir ve ilk aktarımı tamamlamanıza yardımcı olur. 48 saatlik süre destek talebinin oluşturulması için geçerlidir. Aktarımın tamamlanma süresi dosyanın kapsamına ve veri kalitesine göre değişebilir.",
      },
      {
        question: "Deneme sonunda otomatik ödeme alınır mı?",
        answer:
          "Hayır. Başlangıçta ödeme bilgisi alınmadığı için 21 gün sonunda otomatik ücretlendirme yapılmaz. Devam etmek isterseniz araç sayınıza göre hesaplanan fiyattan devam edersiniz.",
      },
      {
        question: "Kaç kullanıcı ve şube ekleyebilirim?",
        answer:
          "Kullanıcı ve şube sayısında sınır yoktur; 1 araçlık bir filo da 150 araçlık bir filo da sınırsız kullanıcı ve şube ile çalışır. İsteğe bağlı Kurumsal Destek hizmetini eklediğinizde ayrıca özel bir destek yöneticisi ve öncelikli SLA sağlanır.",
      },
      {
        question: "Araç sayım değişirse fiyatım ne olur?",
        answer:
          "Fiyatınız araç sayınıza göre hesaplanır; filonuz büyüyüp küçüldükçe fiyatınız da buna göre güncellenir. Güncellemeyi Rent Okey ekibiyle iletişime geçerek yaptırabilirsiniz. Ödeme şu anda ekip tarafından yönetilir; otomatik kart çekimi yapılmaz.",
      },
      {
        question: "RentOkey Pilot taban fiyata dahil mi?",
        answer:
          "Hayır. RentOkey Pilot, araç sayısına göre hesaplanan temel abonelik fiyatına dahil olmayan ve ayrıca satın alınabilen aktif bir ek pakettir. Filonuzun araç sayısından bağımsız olarak hesabınıza eklenebilir. Akıllı fiyat önerisi Pilot kapsamındadır; ayrı bir modül olarak ücretlendirilmez. Pilot fiyatı ve denemede erişilebilen kapsam için Rent Okey ekibiyle iletişime geçebilirsiniz.",
      },
    ],
  },
  {
    id: "urun-kullanim",
    label: "Ürün ve günlük kullanım",
    items: [
      {
        question: "Araç sayıma göre temel özellik farkı var mı?",
        answer:
          "Hayır. Rezervasyon, müşteri/sürücü, zaman çizelgesi, uygun araç önerisi, önerilen odak, filo, teslim/iade, bakım-belge uyarıları, finans/raporlama, çoklu şube, B2B erişimi, Excel/CSV aktarımı ve onay belgesi paylaşımı dahil temel özellikler, araç sayınızdan bağımsız olarak her filoda aynıdır. RentOkey Pilot ve diğer opsiyonel modüller taban ürüne dahil değildir; ayrıca satın alınır. Kurumsal Destek de isteğe bağlı bir ek hizmettir.",
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
        question: "RentOkey Pilot nedir, Önerilen Odak'tan farkı nedir?",
        answer:
          "Önerilen Odak yaklaşan riski görünür kılar. RentOkey Pilot ise rezervasyon, araç, bakım, tahsilat, lokasyon ve hazırlık süresi verilerini birlikte değerlendirerek akıllı fiyat önerilerini de içeren uygulanabilir bir operasyon planı hazırlar; önerilen çözümü ve tahmini etkisini gösterir. Yalnızca kullanıcının seçtiği aksiyonları son onaydan sonra uygular.",
      },
      {
        question: "RentOkey Pilot değişiklikleri kendiliğinden uygular mı?",
        answer:
          "Hayır. Pilot hiçbir araç atamasını, fiyatı, teslim saatini veya görevi kullanıcı onayı olmadan değiştirmez. Yetkili kullanıcı önerileri tek tek seçer, gerekçeyi ve tahmini etkiyi inceler; yalnızca onaylanan değişiklikler uygulanır. Gösterilen finansal etkiler mevcut operasyon verilerinden hesaplanan tahminlerdir ve garanti edilen kazanç anlamına gelmez.",
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
        question: "Mevcut verilerimi Excel veya CSV ile içeri aktarabilir miyim?",
        answer:
          "Evet. Müşteri, rezervasyon, filo, gider ve bakım kayıtlarınızı Excel veya CSV dosyalarıyla içeri aktarabilirsiniz. Sistem hatalı satırları yükleme öncesinde gösterir; müşteri ve araç listelerindeki eksik alanları daha sonra aynı dosyayla toplu tamamlayabilirsiniz. Deneme hesabınızı oluşturduktan sonraki ilk 48 saat içinde ilk aktarımınız için ücretsiz destek talep edebilirsiniz.",
      },
      {
        question: "İçe aktarmada hata yaparsam geri alabilir miyim?",
        answer:
          "Evet. Toplu içe aktarmada yeni eklenen kayıtlar aktarım partisiyle ilişkilendirilir. Yanlış bir dosya yüklediğinizde yalnızca o aktarımda eklenen kayıtları tek onayla geri alabilirsiniz; daha önce var olan kayıtlar etkilenmez.",
      },
      {
        question: "Müşteri ve sürücü kayıtları rezervasyonda nasıl çalışır?",
        answer:
          "Müşteri alanına isim, telefon veya kimlik/pasaport bilgisi yazarak kayıtlı kişiyi bulabilirsiniz. Yeni bir müşteri yazarsanız kayıt rezervasyonla birlikte otomatik oluşturulur. Müşteri aracı kullanacaksa ehliyet bilgisi kendi profilinde tutulabilir; farklı bir sürücü de ayrıca seçilebilir. Kimlik ve ehliyet alanları isteğe bağlıdır.",
      },
      {
        question: "Rezervasyon onayını müşterimle paylaşabilir miyim?",
        answer:
          "Evet. Her rezervasyon için firma logonuz ve rezervasyon bilgileriyle markalı bir Rezervasyon Onay Belgesi oluşturabilirsiniz. Belgeyi WhatsApp ile paylaşabilir, PDF olarak kaydedebilir veya müşterinin e-posta adresine gönderebilirsiniz. Bu belge, imzalanacak kira sözleşmesinden ayrı bir rezervasyon bilgilendirmesidir.",
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
          "Evet. Kullanıcılara görevlerine göre sayfa ve işlem yetkileri verilebilir. Kayıt oluşturma, güncelleme ve silme işlemleri güvenlik ve denetim amacıyla kullanıcı ve zaman bilgisiyle sistem kayıtlarına alınır. Kullanıcıların inceleyebileceği ayrıntılı aktivite ekranı, ek modül olarak talep üzerine sunulmaktadır.",
      },
      {
        question: "Destek kanalları ve yanıt süreleri nelerdir?",
        whatsapp: true,
        answer:
          "Rent Okey desteğine Türkçe ve İngilizce olarak e-posta ve WhatsApp üzerinden ulaşabilirsiniz. Destek ekibimiz haftanın 7 günü 09.00–22.00 (Türkiye saati) arasında hizmet verir. Destek çalışma saatleri içinde iletilen, operasyonu durduran kritik taleplere 1 saat içinde; diğer teknik ve kullanım taleplerine ise en geç 4 saat içinde ilk yanıt vermeyi hedefleriz. Çözüm süresi talebin kapsamına göre değişebilir. İnceleme devam ettiği sürece kullanıcıya düzenli olarak bilgi verilir.",
      },
    ],
  },
];
