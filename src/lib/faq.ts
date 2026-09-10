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

export const englishFaqGroups: FaqGroup[] = [
  {
    id: "trial-plans",
    label: "Trial and pricing",
    items: [
      { question: "How does the 21-day free trial begin?", answer: "Enter your name, email and password, then verify your email address. On first sign-in, define your company and fleet size. No credit card is required, and you can evaluate the product with your own vehicles and reservations." },
      { question: "How do I request migration support within the first 48 hours?", answer: "Within the first 48 hours after creating the trial account, request support for a customer, reservation, fleet, expense or maintenance Excel / CSV file. During support hours, our team reviews its structure, explains required corrections and helps with the first import. The 48-hour period is the request window; completion time depends on scope and data quality." },
      { question: "Will I be charged automatically when the trial ends?", answer: "No. We do not collect payment details when the trial begins, so there is no automatic charge after 21 days. If you continue, pricing is calculated from your vehicle count." },
      { question: "How many users and branches can I add?", answer: "Users and branches are unlimited in the core subscription, whether you manage one vehicle or 150. Optional Corporate Support adds a dedicated support manager and priority SLA." },
      { question: "What happens to the price when my vehicle count changes?", answer: "Pricing is calculated from your vehicle count and is updated as the fleet grows or shrinks. Contact the RentOkey team to make the change. Billing is currently managed by the team; there is no automatic card charge." },
      { question: "Is RentOkey Pilot included in the base price?", answer: "No. RentOkey Pilot is an active paid add-on, separate from the vehicle-based core subscription. Smart pricing suggestions are included in Pilot and are not charged as a separate module. Contact us for Pilot pricing and trial availability." },
    ],
  },
  {
    id: "product-usage",
    label: "Product and daily use",
    items: [
      { question: "Do core features change with fleet size?", answer: "No. Core features—including reservations, customer and driver records, timeline, suitable vehicle suggestions, Recommended Focus, fleet, handovers and returns, maintenance and document alerts, finance and reporting, multiple branches, B2B access, Excel / CSV transfer and confirmation sharing—are the same at every fleet size. Pilot, other add-ons and Corporate Support are purchased separately." },
      { question: "Can the system suggest a suitable vehicle for a reservation?", answer: "Yes. RentOkey suggests assignable vehicles based on reservation dates and availability. An authorised user reviews the suggestion and completes the assignment or chooses another vehicle." },
      { question: "What does Recommended Focus monitor?", answer: "Recommended Focus evaluates related data alongside fixed handover, return and document alerts. It can surface an outstanding balance during an active rental or insufficient cleaning and transfer time between consecutive reservations, helping the team prepare an action in advance." },
      { question: "What is RentOkey Pilot, and how is it different from Recommended Focus?", answer: "Recommended Focus makes an approaching risk visible. RentOkey Pilot evaluates reservation, vehicle, maintenance, payment, location and preparation-time data together and prepares an actionable operation plan that also includes smart pricing suggestions. It shows the proposed solution and estimated impact, and applies only actions the user selects and approves." },
      { question: "Does RentOkey Pilot apply changes automatically?", answer: "No. Pilot never changes an assignment, price, handover time or task without user approval. An authorised user selects suggestions individually, reviews the reasons and estimated impact, and approves the final changes. Financial impacts are estimates, not guaranteed revenue." },
      { question: "Can RentOkey be used in Türkiye and Northern Cyprus?", answer: "Yes. The product is designed for car rental operations in Türkiye and Northern Cyprus. Define companies and branches according to your operating region." },
      { question: "Does it work on desktop, tablet and mobile?", answer: "Yes. Desktop is optimised for planning and dense timelines; tablet and mobile views focus on the next handover, return and other fast operation actions." },
      { question: "Can I import existing data from Excel or CSV?", answer: "Yes. Import customer, reservation, fleet, expense and maintenance records from Excel or CSV. Invalid rows are shown before upload, and missing customer or vehicle fields can later be completed in bulk with the same file. You can request free first-import support during the first 48 hours of your trial." },
      { question: "Can I undo an import mistake?", answer: "Yes. Newly added records are associated with their import batch. If you upload the wrong file, undo only the records added by that batch with one confirmation; existing records are not affected." },
      { question: "How do customer and driver records work in a reservation?", answer: "Find an existing customer by name, phone, identity or passport details. If you enter a new customer, the record is created together with the reservation. The customer can also be the driver, or you can select a different driver. Identity and driving licence fields are optional." },
      { question: "Can I share the reservation confirmation with my customer?", answer: "Yes. Create a branded Reservation Confirmation with your company logo and reservation details, then share it by WhatsApp, save it as a PDF or email it. This confirmation is separate from the rental agreement that will be signed." },
      { question: "Can I export data to Excel?", answer: "Yes. Authorised users can export supported fleet, reservation, payment, expense and report data in Excel format. Available fields may vary by module and user permission." },
    ],
  },
  {
    id: "security-support",
    label: "Data security and support",
    items: [
      { question: "Where is my data stored?", answer: "RentOkey’s primary application data is stored through Supabase infrastructure in Amazon Web Services’ Ireland region (eu-west-1), within the European Union." },
      { question: "Is my data encrypted?", answer: "Yes. Data in transit between your device and RentOkey is protected with HTTPS/TLS. Application data and database backups stored through Supabase infrastructure are also encrypted at the storage layer." },
      { question: "How often is data backed up?", answer: "Our database is backed up automatically every day, and daily database backups from the last seven days are retained." },
      { question: "Can other RentOkey customers see my information?", answer: "No. Company accounts are separated. Database access rules allow users to access only data belonging to their company and within their permissions. In limited support or security-review cases, authorised RentOkey personnel may access only the scope required for the task." },
      { question: "Are role-based permissions and activity records available?", answer: "Yes. Page and action permissions can be assigned according to each user’s role. Create, update and delete actions are recorded with user and time information for security and audit purposes. A detailed user-facing activity screen is available on request as an add-on." },
      { question: "What are the support channels and response times?", whatsapp: true, answer: "Contact RentOkey support in English or Turkish by email and WhatsApp. Support is available every day from 09:00 to 22:00 Türkiye time (UTC+3). During these hours, we aim to provide an initial response within one hour for critical requests that stop operations, and within four hours for other technical and usage requests. Resolution time depends on scope, and we provide updates while an investigation continues." },
    ],
  },
];
