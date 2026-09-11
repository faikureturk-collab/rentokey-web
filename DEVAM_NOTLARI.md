# Rent Okey web sitesi — devam notları

## Kalıcı geliştirme kontrolü

Pazarlama sitesine yeni bir içerik veya işlev eklendiğinde Türkçe ve İngilizce sürümler aynı çalışma içinde birlikte ele alınır; İngilizce karşılık, rota eşleşmesi, dil değiştirici, `hreflang` ve form dili kontrol edilir. Her web sitesi güncellemesinde ayrıca SEO ve GEO etkisi değerlendirilir; metadata, canonical, sitemap, robots, indeksleme tercihi, yapılandırılmış veri, iç bağlantılar, semantik içerik ve güncelleme tarihleri yalnızca gerektiği ölçüde güncellenir. Bu iki kontrol tamamlanmadan geliştirme bitmiş kabul edilmez.

Tarih: 2 Eylül 2026

Projenin ürün doğruları, karar geçmişi, ana sayfa dönüşüm hikâyesi, paket sistemi, teknik mimarisi ve sonraki geliştirme sırası tek bir kalıcı kaynakta toplandı: `PROJE_EL_KITABI.md`. Yeni bir geliştirmeye başlamadan önce önce bu belge, ardından aşağıdaki son çalışma notları okunmalıdır.

## Son tamamlanan çalışma

Ücretsiz deneme hesabı akışı L7 kötüye kullanıma karşı sertleştirildi. Türkçe ve İngilizce kayıt formları artık `signup-form` action'lı Cloudflare Turnstile tokenı gönderiyor; aynı-origin web route'u tokenı ve locale bilgisini uygulama API'sine iletiyor. Uygulama tarafında tokenın `success`, action ve hostname değerleri sunucuda doğrulanıyor; `patch_v101.sql` ile kullanıcı/e-posta oluşturulmadan ve Resend çağrısından önce atomik e-posta/IP hız sınırı uygulanıyor. İngilizce web kaydı İngilizce doğrulama e-postası alıyor. Canlıya geçiş için patch'in önce çalıştırılması, iki istemciye public site key eklenmesi ve son olarak API projesinde `SIGNUP_REQUIRE_TURNSTILE=true` yapılması gerekir.

Ekran görüntüsüne ihtiyaç duymayan ürün anlatımı yeniden tasarlandı. **“Beş ayrı araç değil. Tek operasyon akışı.”** alanı; Planlama, Operasyon, Filo, Finans ve Yönetim adımlarını seçilebilir, kod tabanlı ürün sahneleriyle anlatıyor. Hemen altındaki tekrar eden özellik kartları ise ürünün dört temel operasyon sonucunu anlatacak şekilde yenilendi.

21 günlük deneme süreci de baştan kurgulandı: hesap açma, filo ekleme, ekip daveti ve gerçek operasyonu deneme adımları artık açık şekilde anlatılıyor. Mevcut üründe doğrulanmamış otomasyon vaatleri metinden çıkarıldı. Yapay zekâ yol haritası, satın alma akışını bölmemesi için fiyatlandırma ve marka anlatımının arkasına taşındı; gelecek özellikleri daha şeffaf ifadelerle sunuluyor.

Fiyatlandırma alanı kullanıcıların paketleri daha hızlı karşılaştırabilmesi için yeniden tasarlandı. Aylık ve yıllık seçimde araç başı tutar artık seçili fiyata göre dinamik hesaplanıyor; yıllık toplam ve yıllık tasarruf ayrıca gösteriliyor. Paketlere hedef firma açıklaması, güven maddeleri ve açılır özellik karşılaştırma tablosu eklendi. Paket fiyatları değiştirilmedi.

Paket kullanıcı limitleri ve içerik dağılımı ilk aşamada güncellendi: Başlangıç **1 kullanıcı / 1 şube**, Büyüme **5 kullanıcı / 1 şube**, Profesyonel **15 kullanıcı / 3 şube**, Kurumsal **sınırsız kullanıcı / sınırsız şube**. Rezervasyon, filo, teslim/iade, mobil operasyon, bakım ve belge uyarıları ile temel finans takibi tüm paketlerde çekirdek özellik olarak korundu. Bu ilk paket ayrımı, aşağıdaki 4 Eylül 2026 doğrulamasında uygulamanın gerçek özellik kapısı davranışına göre yeniden düzenlendi; henüz hazır olmayan fotoğraflı hasar, dijital sözleşme/imza ve API aktif paket vaadi olmaktan çıkarılıp “Geliştiriliyor” yol haritasında korundu.

`/ucretsiz-dene` sayfası ilk tasarım aşamasında iki adımlı onboarding arayüzü olarak hazırlanmıştı. İlk adım hesap, ikinci adım firma/filo bilgilerini topluyor; Türkiye ve KKTC seçenekleri, mobil uyum, şifre görünürlüğü, sözleşme onayı ve tamamlanma ekranı içeriyordu. Bu ilk sürüm yalnız ön yüz prototipiydi; aşağıdaki son değişiklikle yerini gerçek tek adımlı kayıt akışına bıraktı.

Deneme hesabı akışı daha sonra sadeleştirilerek tek adıma indirildi. İlk gerçek entegrasyon sürümünde web sitesi Supabase Auth'a doğrudan bağlanıyordu; bu yaklaşım daha sonra kaldırıldı. Uygulama endpoint'inin tarayıcı CORS ön isteğine izin vermediği doğrulandığı için güncel form isteği önce aynı origin `POST /api/kayit-ol` route'una gönderiyor; route isteği sunucu tarafında `https://app.rentokey.com/api/kayit-ol` endpoint'ine iletiyor. Hesap uygulama sunucusunda oluşturuluyor, tarayıcıya session dönmüyor ve doğrulama e-postası `mail.rentokey.com` üzerinden gönderiliyor. Firma adı ile filo büyüklüğü doğrulamadan sonra `app.rentokey.com` onboarding akışında tanımlanıyor. Supabase tarayıcı paketi, yerel Supabase yapılandırması ve `.env.example` kaldırıldı; daha önce Vercel'e eklenen iki `NEXT_PUBLIC_SUPABASE_*` değişkeni artık kullanılmıyor ve Vercel'den silinebilir.

Güven ve marka anlatımı yeniden düzenlendi. “Hakkımızda” bölümü soyut değer kartları yerine Türkiye ve KKTC operasyonuna özgü belge süreleri, teslim noktaları, farklı kiralama süreleri ve cihazlar arası iş akışını gösteriyor. SSS; yeni deneme modeli, 1/5/15/sınırsız kullanıcı limitleri ve güncel paket özellikleriyle eşleştirildi. Çevrimdışı çalışma, otomatik senkronizasyon ve doğrulanmamış şifreleme/yedekleme vaatleri kaldırıldı.

SSS bilgi mimarisi daha sonra **Deneme ve paketler**, **Ürün ve günlük kullanım** ile **Veri güvenliği ve destek** olmak üzere üç kategoriye ayrıldı. Masaüstünde üçlü kategori seçimi, mobilde yana kaydırılabilir kategori seçimi kullanılıyor; yalnızca seçilen grubun soruları gösteriliyor. Kullanıcı tarafından doğrulanan AWS İrlanda (`eu-west-1`) veri konumu, HTTPS/TLS ve depolama seviyesi şifreleme, günlük ve 7 gün saklanan veritabanı yedekleri, firma hesabı ayrımı, kayıt oluşturma/güncelleme/silme aktivite geçmişi, Excel dışa aktarma ile haftanın 7 günü 09.00–22.00 destek ve ilk yanıt hedefleri SSS'ye eklendi. Sistem belge dosyası saklamadığı için dosya yedeklemesine ilişkin ayrı bir satış vaadi eklenmedi.

Kullanıcı tarafından doğrulanan iki mevcut özellik ürün anlatımına geri eklendi: sistem rezervasyon tarihleri ve araç uygunluğuna göre **otomatik uygun araç önerisi** sunuyor; yetkili kullanıcı öneriyi onaylayabiliyor veya başka araç seçebiliyor. Ayrıca **rezervasyon, gider, filo ve bakım kayıtları CSV ile içeri aktarılabiliyor**. Bu iki özellik ürün modülleri, onboarding, Başlangıç paketi, karşılaştırma tablosu ve SSS içinde güncellendi.

Pozisyon bazlı sayfa yetkilendirmesi ürün anlatımına eklendi. Görseldeki yapı **Sistem Yöneticisi** ana rolü ile **Şube Müdürü**, **Saha / Müşteri Temsilcisi**, **Teknik & Operasyon** ve **B2B / Kurumsal Ortak** olmak üzere dört operasyon pozisyonu şeklinde anlatılıyor. “Ekip & raporlar” modül sahnesi, Büyüme paketi, özellik karşılaştırması, “Neden Rent Okey?”, “Hakkımızda” ve SSS alanları bu yapıyla güncellendi.

**Önerilen odak** için ayrı bir ürün bölümü eklendi. Bu özellik sabit teslim/iade veya belge kontrollerinden farklı olarak rezervasyon, ödeme, araç, lokasyon ve zaman verilerini birlikte değerlendiriyor. Ödenmemiş bakiye ve arka arkaya rezervasyonlar arasında yetersiz temizlik/transfer süresi örnekleriyle anlatılıyor. Hero mesajı, “Neden Rent Okey?”, Başlangıç paketi, karşılaştırma tablosu ve SSS de bu özellikle güncellendi.

İletişim ve sayfa kapanış akışı yenilendi. İlk aşamada form, sahte başarı mesajı yerine kullanıcının e-posta uygulamasında hazır bir taslak açıyordu. Güncel sürümde bu geçici davranış kaldırıldı ve form `POST https://app.rentokey.com/api/iletisim-formu-gonder` endpoint'ine gerçek gönderim yapacak şekilde bağlandı. Konu ve filo seçenekleri API değerleriyle eşleştirildi; gönderiliyor, başarı, `400` alan hatası, `429` hız sınırı ve genel hata durumları eklendi. Başarıdan sonra form temizleniyor, hatada veriler korunuyor; görünmeyen `website` honeypot alanı ve Gizlilik/KVKK bağlantısı bulunuyor. Seçili site dili `locale: "tr" | "en"` olarak API'ye gönderiliyor; ziyaretçi onay e-postası buna göre Türkçe veya İngilizce hazırlanıyor. Cloudflare Turnstile widget'ı `contact-form` action'ıyla eklendi ve tek kullanımlık token API'ye `turnstileToken` alanında gönderiliyor; her gönderim denemesinden sonra widget yenileniyor. Pazarlama sitesinde yalnız `NEXT_PUBLIC_TURNSTILE_SITE_KEY` bulunur; `TURNSTILE_SECRET_KEY` yalnız API projesinde tutulmalıdır. API yalnız `rentokey.com` ve `www.rentokey.com` üretim origin'lerini kabul ettiği için yerel ortamda canlı gönderim yapılmaz. Son çağrı alanı 21 günlük denemenin koşullarını ve gerçek operasyon senaryosunu daha açık anlatıyor. Header ürün menüsü yeni Operasyon platformu, Önerilen odak ve Nasıl çalışır bölümleriyle eşleştirildi; mobil açılır menüler birbirinden bağımsız hale getirildi. Footer ürün bağlantıları güncellendi ve gerçek adresi bulunmayan boş sosyal medya bağlantıları kaldırıldı. Resmî LinkedIn şirket profili footer’a ikonlu, erişilebilir bir dış bağlantı olarak eklendi; aynı adres Organization JSON-LD içindeki `sameAs` alanında da kullanılıyor.

Hero alanındaki bulanık masaüstü ve mobil ekran görüntüleri kaldırıldı. Yerine tamamen HTML/CSS ile oluşturulmuş, **Bugünkü operasyon**, **Planlama** ve **Önerilen odak** sekmelerine sahip interaktif ürün demosu eklendi. Masaüstü sürümü sadeleştirilmiş operasyon kuyruğu, 7 günlük zaman çizelgesi, hızlı rezervasyon ve odak önerilerini gösteriyor. Mobil sürüm aynı iş mantığını zaman çizelgesini küçültmeden; hızlı aksiyon kartları, tarih seçimi ve öneri kartlarıyla sunuyor. Hero yerleşimi, metin ve demo masaüstünde aynı ilk görünüm içinde kalacak şekilde iki sütuna dönüştürüldü.

Hero dönüşüm akışı 1280×720 masaüstü görünümü hedeflenerek sıkılaştırıldı. Uzun fayda listesi kaldırıldı; kısa ürün açıklamasının hemen altına tek ve net aksiyon olarak **21 gün ücretsiz deneyin** yerleştirildi. Zaten aynı görünümde bulunan ürün demosuna tekrar bağlantı veren ikincil CTA kaldırıldı. Güven satırı “Kredi kartı yok · Kurulum ücreti yok · İlk 48 saatte ücretsiz Excel / CSV aktarım desteği” olarak güncellendi. Etkileşim beklemeden ürün farkını göstermek için Bugünkü operasyon sahnesinin varsayılan önerilen odak kartı, iki rezervasyon arasında yalnızca 35 dakika kalan temizlik ve lokasyon transferi riskiyle değiştirildi.

Deneme teklifi 28 Ağustos 2026 itibarıyla **14 günden 21 güne** çıkarıldı. Deneme hesabını oluşturduktan sonraki ilk 48 saat içinde müşteri, rezervasyon, filo, gider veya bakım Excel / CSV dosyası için ücretsiz ilk aktarım desteği talep edilebilir. 48 saat, talebin oluşturulma penceresidir; aktarımın tamamlanma süresi dosyanın kapsamına ve veri kalitesine bağlıdır. Pazarlama sitesindeki bu vaat yayına alınmadan önce canlı uygulamanın gerçek deneme bitiş kuralı da 21 gün olmalıdır.

Marka varlıkları `RentOkey_Tick_Konumu_Duzeltilmis` klasöründeki resmî setle yenilendi. Header ve açık zeminler için slogansız renkli outlined SVG; footer için sloganlı beyaz outlined SVG; ürün demosu için düzeltilmiş renkli ikon kullanılıyor. Eski PNG logo kopyaları kaldırıldı. Tarayıcı ve Apple ikonları düzeltilmiş resmî ikondan yeniden üretildi. `og.png` paylaşım kapağı da resmî beyaz logo, Türkçe ürün tanımı ve kod tabanlı Rent Okey operasyon sahnesiyle yenilendi. Tekrar üretim kaynağı `scripts/build-og-card.mjs` içinde tutuluyor.

Slogansız yatay logo ayrıca optik olarak yeniden hizalandı. İkon 36 iç SVG birimi yukarı alınarak RentOkey kelime işaretiyle aynı görsel merkeze getirildi; yazı, bulut ve tik çizimleri değiştirilmedi. Renkli, siyah ve beyaz sürümler SVG, outlined SVG, yüksek çözünürlüklü PNG, PDF ve EPS olarak `RentOkey_Slogansiz_Optik_Hizali` klasörüne eklendi. Header ve `og.png` bu yeni slogansız kilidi kullanıyor; sloganlı footer kilidi ve yalnız ikon dosyaları özgün geometrilerini koruyor. Tekrar üretim kaynağı `scripts/export-logo-assets.mjs` içinde tutuluyor.

Teknik SEO altyapısı tamamlandı. Tüm güçlü sayfalara benzersiz başlık, açıklama, canonical, Open Graph ve Twitter metadata eklendi; ana sayfada Organization, WebSite ve SoftwareApplication JSON-LD verisi kullanılıyor. Standart üretim adresi `https://www.rentokey.com` olarak belirlendi; `rentokey.com` istekleri kalıcı olarak `www` sürümüne yönlendiriliyor. `robots.txt`, canonical adresler, sosyal paylaşım URL'leri, JSON-LD ve `sitemap.xml` aynı merkezi `SITE_URL` değerini kullanıyor. ChatGPT arama özelliklerinde görünürlük için `OAI-SearchBot` tarayıcısına ayrıca açık izin veriliyor; bu kural model eğitimi tarayıcısı `GPTBot` tercihinden bağımsızdır. Claude tarafında arama görünürlüğü için `Claude-SearchBot`, kullanıcı tarafından başlatılan erişim için `Claude-User` ve herkese açık pazarlama içeriğinin model geliştirme süreçlerinde kullanılabilmesi için `ClaudeBot` açıkça izinlidir. Sitemap; `/`, `/ucretsiz-dene`, `/kaynaklar`, `/blog` ve beş yayındaki blog yazısını içeriyor; statik sayfalar için gerçek içerik güncelleme tarihleri, yazılar için ayrı yayın/değişiklik tarihleri kullanılıyor. Yer tutucu kılavuz/güncelleme sayfaları ile henüz uzman onayı almamış yasal metinler `noindex, follow` durumunda tutuluyor.

29 Ağustos 2026'da Google Search Console alan adı mülkü ve Bing Webmaster Tools doğrulandı. Sitemap iki panele de gönderildi. Google, `www` ana sayfayı dizine eklenmiş gösterdi; ücretsiz deneme, kaynaklar, blog ve üç blog yazısı için öncelikli tarama isteği oluşturuldu. İlk Google sitemap okuması eski `www` olmayan URL'lerle “Getirilemedi” sonucunu verdiği için yeni canonical sitemap yayınlandıktan sonra panel durumu tekrar kontrol edilmelidir. Bing gönderimi hatasız biçimde işleme alındı.

## Ürün görseli notu

- Hero artık ekran görüntüsü kullanmıyor; ürün anlatımı çözünürlükten bağımsız kod tabanlı demo ile yapılıyor.
- Kullanılmayan altı geçici masaüstü/mobil ekran görüntüsü depoya eklenmeden temizlendi; `public/product` klasörü kaldırıldı.
- İleride tam ekran “Ürünü yakından inceleyin” galerisi yapılırsa yeni, kontrollü görseller üretmek için `scripts/build-product-screenshots.py` betiği korunuyor.

## Sonraki çalışmada yapılacaklar

1. Gerçek ürün galerisi eklenecekse uygulamadan temiz, yüksek çözünürlüklü ve kontrollü yeni ekran görüntüleri al; mevcut geçici görselleri doğrudan yayına koyma.
2. `app.rentokey.com` canlı uygulamasındaki `+` butonunun gerçek kaynak kodunu düzeltmek için uygulamanın frontend deposuna erişim gerektiğini unutma; şu an yalnız pazarlama görseli düzeltildi.
3. Yeni modül akışındaki metin ve örnek değerleri gerçek paket kapsamıyla son kez doğrula.
4. GA4 web ölçüm kodu ve onay arayüzü hazırlandı. İlk ziyaret UTM/referrer/landing page bilgisi saklanıyor; Google, Bing, ChatGPT, Claude, LinkedIn ve doğrudan trafik sınıflandırılıyor. Web tarafında `trial_cta_click`, `trial_form_start`, başarılı kayıt sonrası `sign_up`, `contact_form_start` ve `generate_lead` tanımlı. Sıradaki işler: GA4 mülkünü oluşturup `NEXT_PUBLIC_GA_MEASUREMENT_ID` değerini Vercel'e eklemek, `sign_up` olayını önemli etkinlik yapmak, Search Console'u bağlamak ve uygulamada `email_verified` ile `onboarding_completed` olaylarını kurmak.
5. Yayına geçmeden önce Git diff'ini kullanıcıyla gözden geçir, ardından yalnız açık onayla commit/push/deploy yap.
6. Attribution bilgisinin gerçek hesapla kalıcı biçimde eşleşmesi için pazarlama sitesindeki `/api/kayit-ol` route'unu ve `app.rentokey.com/api/kayit-ol` sözleşmesini birlikte genişlet. Analitik servisine ad, e-posta veya şifre gönderme; ölçümlemeyi KVKK/çerez tercihiyle birlikte tasarla.

## 2 Eylül 2026 blog yayını

`/blog/arac-kiralama-rezervasyon-takvimi-nasil-yonetilir` adresinde, araç kiralama firmalarını hedefleyen özgün rezervasyon planlama rehberi eklendi. Yazı; sınıftan plakaya araç atama, kesin çakışma ile operasyon riskinin ayrılması, temizlik/transfer tamponu, 7–14 gün–ay görünümü, 70 araçlık filoda gruplama ve filtreleme, takvimden hızlı rezervasyon, sürükle-bırak güvenliği, önerilen odak ve günlük kontrol rutinini ele alıyor. Yazı mevcut filo verimliliği, teslim/iade ve kârlılık içeriklerine iç bağlantılar veriyor; filo verimliliği yazısından da yeni rehbere karşı bağlantı eklendi. Blog listeleme, statik rota, metadata, BlogPosting JSON-LD ve sitemap mevcut merkezi blog altyapısından otomatik üretiliyor.

## 4 Eylül 2026 — Uygulama dokümanlarıyla pazarlama sitesi eşleştirmesi

Canlı uygulamanın `PAZARLAMA-OZELLIK-OZETI.md`, `KULLANICI-KILAVUZU.md` ve `TEKNIK-KILAVUZ.md` kaynakları yeniden karşılaştırıldı. Teknik özellik kapılarının mevcut durumu ticari paket kurgusundan ayrıldı: Başlangıç temel operasyonu; Büyüme ekip/yetki, lokasyon, analiz ve Excel dışa aktarmayı; Profesyonel çoklu şube, B2B erişimi ve gelişmiş raporlamayı; Kurumsal sınırsız kapasite, özel kurulum ve desteği içerir. Fotoğraflı hasar, dijital sözleşme/imza ve kurumsal API kaldırılmadı; aktif paket vaadinden çıkarılıp “Geliştiriliyor” yol haritasında tutuldu.

Ana sayfaya `ReservationFlowSection` eklendi. Bölüm canlı müşteri/sürücü aramasını ve otomatik oluşturmayı, benzersiz rezervasyon numarası/taslağı ve markalı Rezervasyon Onay Belgesi'nin WhatsApp, e-posta ve PDF paylaşımını üç adımda anlatır. Onay belgesinin imzalanacak kira sözleşmesinden ayrı olduğu açıkça belirtilir.

Deneme ve veri aktarımı anlatımı Excel / CSV olarak genişletildi; müşteriler kapsama eklendi. 8 araçlık örnek filo, yükleme öncesi doğrulama, eksik alanları toplu tamamlama ve aktarım geri alma SSS/deneme akışında görünür hâle getirildi. Ürün modülleri genel arama, merkezi bildirimler, otomatik bakım gideri ve tekrarlayan giderlerle; JSON-LD özellik listesi de aynı doğrulanmış kapsamla güncellendi.

## Git durumu

Değişiklikler henüz commit veya push edilmedi. Kullanıcının diğer mevcut değişiklikleri korunmalı ve yalnız açık onayla GitHub'a gönderilmeli.

## 7 Eylül 2026 — RentOkey Pilot

RentOkey Pilot kullanıcı tarafından geliştirilmiş ve çalışır ürün özelliği olarak doğrulandı. Pazarlama sitesinde “Geliştiriliyor” veya yol haritası özelliği olarak değil, **aktif ve ayrıca satın alınabilen opsiyonel ek paket** olarak konumlandırıldı. Araç sayısına göre hesaplanan taban ürün fiyatına dahil değildir.

Ana sayfada Önerilen Odak bölümünün hemen arkasına `PilotSection` eklendi. Anlatı bilinçli olarak iki aşamalıdır: Önerilen Odak yaklaşan riski görünür kılar; RentOkey Pilot uygulanabilir çözüm planını, gerekçeyi ve tahmini finansal/operasyonel etkiyi hazırlar. Kullanıcı önerileri tek tek seçer; hiçbir araç ataması, saat veya görev kullanıcı onayı olmadan değiştirilmez.

Kod tabanlı hero demosuna masaüstü ve mobil için dördüncü **RentOkey Pilot** sekmesi eklendi. Fiyatlandırma alanındaki ifade “Tüm temel özellikler dahil” olarak netleştirildi ve Pilot için ayrı aktif ek paket kartı oluşturuldu. Ek Modüller bölümünün öne çıkan kartı Pilot'a ayrıldı; daha önceki fotoğraflı hasar ve diğer modüller kaldırılmadan ikincil kartlara taşındı.

`/okey-pilot` adresinde indekslenebilir ürün sayfası oluşturuldu. Sayfa; güncel on öneri kuralını dört karar grubunda, üç aşamalı çalışma mantığını, insan onaylı kontrol ilkesini ve ek paket iletişim çağrısını açıklar. Header/footer navigasyonu, SSS, SoftwareApplication JSON-LD özellik listesi ve sitemap aynı konumlandırmayla güncellendi.

10 Eylül kapsam güncellemesinde hazırlık aralığı, bakım çakışması, boş araç, fiyat anomalisi, aylık yenileme checklist'i, anormal bakım/gider, şubeler arası araç sevkiyatı, üst kategori yükseltme, saatlik şube kapasitesi ve 15.000 km kilometre dengesizliği kurallarının tamamı Türkçe ve İngilizce sayfaya eklendi. Kullanıcı onayı bekleyen öneriler; checklist ve yalnız bilgi veren sonuçlardan görsel olarak ayrıldı. Ana sayfada ayrıntılı liste tekrarlanmadı; operasyon sürekliliği, gelir/fiyat fırsatı ve şube/kapasite dengesi olmak üzere üç sonuç cümlesi gösterildi. Serbest metin simülatörü yalnız **Yakında · LLM destekli** olarak konumlandırıldı. Pilot metadata açıklamaları, sayfaya özel SoftwareApplication JSON-LD ve sitemap değişiklik tarihi güncellendi.

Önceki ₺6.900 ve doluluk artışı örneği, aşağıdaki 70 araçlık senaryoyla değiştirilmiştir; eski rakamlar yeniden kullanılmamalıdır.

## 7 Eylül 2026 — 70 araçlık işletme perspektifiyle güncelleme

Bu bölüm önceki demo yerleşimi notlarının güncel halidir. Canlı uygulama değil, pazarlama sitesi düzenlendi.

- Hero üç kısa sekmeye indirildi: Operasyon, 70 araçlık filo, Pilot. Ana etkileşim ürün bölümündeki `FleetDemo` içindedir; hero bağlantısı planlama sekmesini yeniden seçer.
- `src/lib/fleet-demo.ts`: 70 sentetik araç, 30 Ekonomi / 25 Konfor / 15 SUV; 54 kirada, 10 müsait, 4 bakımda, 2 hazırlanıyor. Durumlar başlangıç anını, çizelge gelecek 7 günü gösterir.
- Filtreler: plaka/model, sınıf, şube, durum. Daraltılabilir gruplar, sabit araç sütunu ve kaydırılabilir çizelge. R-2401 çakışması önce önerilir, ardından kullanıcı onayıyla ZRO 002'ye yalnız demoda taşınır. Aynı sınıf/şube ve tarih uygunluğu kontrol edilir.
- Fiyat formülü değişmedi. Varsayılan 70 araç, doğrudan sayı alanı ve hızlı seçimler eklendi. 70 araç: aylık ₺7.240; yıllık aylık karşılık ₺5.792, yıllık toplam ₺69.504 (KDV hariç). Dökümde yıllık indirim ve son toplam artık aynı döneme göre gösterilir.
- Akıllı fiyat önerisi Pilot'a dahildir; bağımsız ücretli modül kartı kaldırıldı. Diğer modüller korunup daha kompakt sunuldu. Pilot temel aboneliğe dahil değildir.
- Ek modüller bölümündeki sıradan Pilot metin bağlantısı kaldırıldı. Yerine Pilot'ı diğer modüllerden ayıran tam genişlikte öne çıkan ek paket kartı eklendi; kart değer önerisini, üç temel kapsamı ve 70 araçlık örnek senaryonun ₺44.800 korunabilecek + ₺11.040 koşullu gelir ayrımını gösterir.
- `src/lib/pilot-demo.ts` senaryo için tek kaynak: 7 günde ₺28.800 yeniden atama + ₺16.000 hazır alternatif araç = ₺44.800 korunabilecek rezervasyon tutarı; iki yeni kiralama oluşursa ₺11.040 fiyat önerisi kaynaklı koşullu tutar. Toplam potansiyel ₺55.840; varsayımsal başlangıç ₺168.000 → ₺223.840. KDV hariç brüt rezervasyon tutarıdır; net kâr veya garanti değildir.
- ₺18.400 açık bakiye ayrı gösterilir, yeni gelir gibi toplanmaz. Öneri seçimleri toplamı değiştirir; önizleme, ayrı demo onayı ve sıfırlama çalışır. API isteği yok.
- Önerilen Odak bölümü kısaldı; Pilot senaryosu yalnız ana Pilot bölümünde ayrıntılı. Fiyatlandırmada kısa kapsam kartı, ek modüllerde bağlantı var.
- Geçiş akışı, Excel/CSV hazırlama → kontrol → aktarım sonrası kayıt karşılaştırma → ekip rollerini tanımlama olarak görünürleştirildi. İlk 48 saat, ücretsiz destek TALEBİ penceresidir; tamamlanma garantisi değildir.
- Bekleyen ticari kararlar: pasif/bakımda/satılmış araçların faturaya etkisi, Pilot fiyatı ve denemeye dahil kapsam. Bu konularda yeni kural veya ücretsiz Pilot vaadi uydurulmadı.
- Doğrulama komutları: `node --test tests/marketing-demos.test.mjs`, `npm run lint`, `npm run build -- --webpack`. Tarayıcı etkileşim/görsel QA ayrıca yapılmalıdır.
- Commit, push ve canlı yayın bu çalışma kapsamında yapılmaz.

## 7 Eylül 2026 — 2027 yönetmeliği hazırlık rehberi

- `/blog/2027-arac-kiralama-yonetmeligi` mevcut BlogPost / ArticleBody şablonuna eklendi. Ayrı stil oluşturulmadı; içindekiler, bilgi kutuları, tablolar ve deneme CTA'sı korunuyor.
- Kısa yanıt, geçiş takvimi, hazırlık listesi, SSS ve görünür editör/son kontrol notu mevcut. Metadata, BlogPosting ve sitemap mevcut veri akışından üretilir; blog dizini tarihi güncellendi.
- Yeni yazıda dış kaynaklar yalnız Ticaret Bakanlığı Aydın İl Müdürlüğü açıklaması ve bu sayfanın verdiği Resmî Gazete bağlantısıdır. Resmî Gazete doğrudan araştırma aracında açılamadığı için ayrıntılı madde hükümleri eklenmedi; hukuki özet Bakanlık açıklamasıyla sınırlıdır.
- 1 Temmuz 2027 yetki belgesi ALMA son tarihi, 1 Ocak 2027 yürürlük tarihidir. 2028 geçişi genel erteleme gibi sunulmaz. Hazırlık önerileri yasal zorunluluk veya RentOkey uyum garantisi olarak yazılmadı.
- Eski dijitalleşme yazısındaki ayrıntılı hükümler değiştirilmedi. Özellikle eski “başvurusu” ifadesi ve iptal tablosu ayrı bir resmî metin denetimi gerektiriyor.
- Commit/push veya canlıya dağıtım yapılmadı.

## 7 Eylül 2026 — WhatsApp destek erişimi

- Kullanıcı mevcut +90 541 390 10 20 numarasını WhatsApp destek hattı olarak teyit etti.
- İletişim bölümü, destek SSS cevabı ve footer'a ortak `WhatsAppLink` eklendi. `src/lib/contact.ts` numara bağlantısı/hazır mesaj ve destek saatleri için ortak kaynaktır.
- Hazır mesaj: “Merhaba, RentOkey hakkında bilgi almak istiyorum.” Bağlantı yeni sekmede sohbet açar; otomatik mesaj göndermez. Yüzen buton veya harici WhatsApp script'i eklenmedi.
- İletişim bölümünde haftanın 7 günü 09.00–22.00 (Türkiye saati) bilgisi görünür. Mevcut telefon/e-posta/form seçenekleri korunur.

## 10 Eylül 2026 — İngilizce pazarlama sürümü

- Kullanıcı İngilizce destek sunulduğunu teyit etti. TR SSS/iletişim ve EN sayfalarında Türkçe/İngilizce destek bilgisi var; saatler 09.00–22.00 Türkiye saati. Uygulama arayüzü ve doğrulama e-postalarının İngilizce olduğu varsayılmadı.
- İngilizce URL'ler: `/en`, `/en/pilot`, `/en/free-trial`, `/en/privacy`, `/en/terms`. `/en`, Türkçe ana sayfanın sadeleştirilmiş bir varyantı değil; aynı 14 bölümü aynı sırayla, aynı etkileşimli filo/Pilot demoları, fiyat hesaplayıcısı, rezervasyon akışı, veri taşıma alanı, ek modüller, gruplu SSS ve iletişim formuyla gösterir. Pilot ve ücretsiz deneme sayfaları da Türkçe karşılıklarının tasarım/içerik kapsamını izler. Blog/kılavuz çevirileri sonraki aşamaya bırakıldı; EN blog bağlantısı “Blog (Turkish)” diye işaretli.
- Türkçe sayfalar `src/app/(tr)/` route grubuna taşındı; silinmedi. URL'ler değişmedi. EN ve TR ayrı kök layout kullanır; doğru html lang sunucuda üretilir. Dil değiştirmek tam sayfa geçişidir. API/sitemap/robots/ikonlar ortak app kökünde kalır.
- Dil seçimi `LanguageSwitcher` ve `lib/locale.ts` ile aynı sayfanın karşılığına gider; çevirisi olmayan sayfadan EN ana sayfaya geçer. Olmayan çevirilere hreflang verilmez. Gerçek karşılıklar için canonical, karşılıklı hreflang ve x-default üretilir; üç indekslenebilir EN sayfası sitemap'e eklendi.
- Ortak bileşenler: Header, Footer, Logo, WhatsAppLink, FaqAccordion, ContactForm, TrialOnboarding, TurnstileWidget. Form çevirileri `lib/form-copy.ts` içinde. İletişim formu `locale` gönderir; contact-form action ve turnstileToken korunur. İngilizce widget dili, geri bildirimler ve İngilizce hata fallback'leri eklendi. Deneme hesabı kayıt akışında locale alanı backend'e gönderilmez; bu, iletişim formu sözleşmesinden ayrıdır.
- İngilizce içerik, ana sayfa bileşenlerinin `locale` parametresi ve gruplu SSS için `lib/faq.ts` üzerinden yönetilir; ayrı/sadeleştirilmiş İngilizce demo bileşenleri kaldırıldı. Filo/Pilot demoları ve fiyat hesaplayıcısı ortak fleet-demo/pilot-demo/pricing verisini kullanır. Para birimi TRY, yıllık indirim %20; yeni fiyat veya ücretsiz Pilot iddiası yok. Demolar onayla yalnız yerel örnek veriyi değiştirir.
- Yasal sayfalar mevcut TR metnin çevirisidir; görünür orijinal bağlantıları vardır, noindex durumu TR ile aynı. Yayın öncesi hukuk kontrolü önerilir; yeni GDPR/uluslararası uyum garantisi eklenmedi.
- Doğrulama: lint ve webpack üretim build başarılı; 5 mevcut demo testi. `tests/i18n.test.mjs` dil eşleştirmeleri, form metinleri, hatalar, mock kayıt isteği ve build HTML canonical/hreflang/lang kontrollerini içerir (önce build çalıştırın).
- Tarayıcı: EN masaüstü görünümü; mobilde yatay taşma kontrolü; TR tablet menüsü; kayıt TR/EN karşılıklı geçişi ve şifre gösterme; EN 70 araç fiyatı aylık 7.240 TRY / yıllık aylık karşılık 5.792 TRY; araç yeniden atama ve Pilot onayı kontrol edildi.
- Yerel ortamda Turnstile site key yok; gerçek iletişim gönderimi, canlı kayıt/e-posta veya yeni hesap oluşturma yapılmadı. Bu akışlar üretim ortamında ayrıca smoke-test edilmeli; güvenlik bypass edilmedi.
- Önizleme için yerel production sunucusu 3012 portunda açıldı. Commit/push/canlı dağıtım yapılmadı.

## 10 Eylül 2026 — Türkçe ve İngilizce ürün odaklı SEO sayfaları

- İki arama niyeti için dört eş ürün sayfası hazırlandı: `/arac-kiralama-programi` ↔ `/en/car-rental-software` ve `/arac-kiralama-rezervasyon-takvimi` ↔ `/en/car-rental-reservation-calendar`.
- Araç kiralama programı sayfası rezervasyon, müşteri/sürücü, teslim/iade, filo-bakım, finans, önerilen odak, ekip yetkileri ve Excel/CSV geçişini tek operasyon anlatısında birleştirir. Takvim sayfası araç uygunluğu, 7/14 gün ve ay görünümü, filtreleme, hızlı rezervasyon, uygun araç önerisi, kesin çakışma ile hazırlık/transfer riski ayrımını anlatır.
- Sayfalar ana sayfayı tekrar eden uzun vitrinler değildir: fayda odaklı hero, kod tabanlı ürün sahnesi, altı doğrulanmış yetenek, üç adımlı iş akışı, karar ilkesi, karşılıklı ürün bağlantısı, kısa SSS ve deneme çağrısından oluşur.
- Her rota için benzersiz title/description, canonical, karşılıklı `hreflang` ve `x-default`; WebPage, BreadcrumbList, SoftwareApplication ve FAQPage JSON-LD eklendi. Dört URL sitemap'e ve TR/EN header-footer iç bağlantılarına dahil edildi.
- Yeni ürün vaadi uydurulmadı. Araç/evrak kontrolleri bilgilendirici ve yetkili kullanıcı kontrollü; ilk 48 saat Excel/CSV desteği destek talebi penceresi olarak korundu. Ortak bileşen Türkçe/İngilizce işlev eşitliğini sağlar.
- Commit/push veya canlı dağıtım bu çalışma kapsamında yapılmadı.

## 10 Eylül 2026 — Ana sayfa yükünü azaltma

- Türkçe ve İngilizce ana sayfa aynı kapsamda sadeleştirildi; iki dil de aynı 11 bölümü aynı sırada gösterir. Dil eşitliği korunmuştur.
- Eski uzun `UrunTabs` vitrini ile ayrı `FeatureGrid` ve `ReservationFlowSection`, ana sayfa akışından çıkarıldı. Bunların kullanıcı ve SEO açısından gerekli ayrıntıları `/arac-kiralama-programi` ile `/arac-kiralama-rezervasyon-takvimi` ve İngilizce karşılıklarında yaşamaya devam eder.
- Yeni sunucu taraflı `ProductOverviewSection`, iki ürün sayfasını doğrudan iç bağlantıyla gösterir ve temel operasyon kapsamını dört kısa sonuç cümlesiyle özetler. Eski `#ozellikler` bağlantısı navigasyondan kaldırıldı; `#urun` bağlantısı korunur.
- Pilot ana sayfada tek güçlü bölümde anlatılır. `AddonModulesSection` içindeki ikinci büyük Pilot vitrini kaldırıldı; fotoğraflı hasar, mesajdan rezervasyon taslağı, dijital sözleşme/imza, özel entegrasyon/API ve aktivite geçmişi kartları korunup kompakt sunuldu.
- Uzun Hakkımızda anlatımı yerine `HomeTrustSection` eklendi. Yerel operasyon, rol/sayfa bazlı yetki ve Türkçe/İngilizce destek mesajları korunur; `#hakkimizda` ve `#about` hedefleri çalışmaya devam eder.
- İletişim formundan sonraki yinelenen `CtaBanner` ana sayfadan kaldırıldı. Ürün SEO sayfalarında ilgili CTA kullanılmaya devam eder.
- Cloudflare Turnstile betiği artık sayfa açılır açılmaz değil, kullanıcı iletişim formuna 400 piksel yaklaştığında `lazyOnload` stratejisiyle yüklenir. Form güvenliği ve `contact-form` action değişmedi.
- İlk sadeleştirmede ürünün görsel kanıtı fazla azaltıldığı için düzeltildi. Ana sayfadaki iki ürün kartı yeniden kod tabanlı operasyon merkezi ve zaman çizelgesi önizlemelerini gösterir. Program detay sayfasında geniş örnek operasyon merkezi; takvim detay sayfasında filtreleme, çakışma inceleme ve kullanıcı onaylı örnek atama içeren 70 araçlık etkileşimli çizelge bulunur. Ağır etkileşimli çizelge ana sayfaya geri taşınmadı.
- Son üretim çıktısında Türkçe ana sayfa HTML'i 344.676 bayttan 230.178 bayta; İngilizce ana sayfa HTML'i 328.445 bayttan 214.517 bayta düştü. Görsel örnekler korunurken yaklaşık azalma sırasıyla %33,2 ve %34,7'dir. RSC çıktıları da küçüldü.
- Ana sayfa metadata ve JSON-LD kapsamı değişmedi. Yeni ürün iç bağlantıları, karşılıklı TR/EN sayfalar, canonical/hreflang ve sitemap yapısı korunur; yeni URL eklenmediği için sitemap değişikliği gerekmedi.
- Commit/push veya canlı dağıtım yapılmadı.

### Ana sayfa ürün vitrini — 20 araçlık sürüm

- Kullanıcı gerçek ürün ekranını referans gösterdi. Sıralı planın ilk iki maddesi uygulandı: “Ürünün kalbi · Tek operasyon akışı” anlatımı ana sayfaya geri geldi ve gerçek uygulamanın açık renkli çalışma yüzeyine yakın, kod tabanlı 20 araçlık örnek operasyon merkezi hazırlandı.
- Devam maddeleri de tamamlandı: vitrin **Operasyon merkezi**, **Rezervasyon zaman çizelgesi** ve **Filo ve finans** olmak üzere üç sekmeye ayrıldı; ilk açılışta çizelge ve sağ operasyon kuyruğu görünür kaldı. Çizelgeye R-2590 örnek çakışması, uygun aynı sınıf/şube aracı gösterme ve kullanıcı onayıyla atamayı değiştirme akışı eklendi. Bu etkileşim yalnızca tarayıcı içindeki sentetik demo durumunu değiştirir.
- Demo altındaki aynı iki ürünü yeniden anlatan büyük kartlar kaldırıldı. `/arac-kiralama-programi`, `/arac-kiralama-rezervasyon-takvimi` ve İngilizce karşılıklarına verilen iç bağlantılar daha hafif tek satırlı yönlendirme olarak korundu. Böylece SEO bağlantıları kaybolmadan ana sayfa tekrarı ve görsel yükü azaltıldı.
- Bu değişiklik yeni rota veya indekslenebilir içerik türü oluşturmadığı için sitemap, canonical, hreflang ve schema değişikliği gerekmedi. Türkçe ve İngilizce görünüm/metinler aynı bileşende birlikte güncellendi.
- Demo; özet kartları, Önerilen Odak, 14 günlük rezervasyon çizelgesi, 20 sentetik araç, üç sınıf, bugünkü operasyon kuyruğu, plaka/model araması, sınıf/durum filtresi ve rezervasyon ayrıntısı seçimini içerir. Gerçek müşteri/veri kullanılmaz ve canlı uygulamaya istek göndermez.
- Türkçe ve İngilizce aynı bileşeni ve aynı örnek veriyi kullanır; tüm görünen metinlerin iki dil karşılığı vardır.
- İki ürün detay bağlantısı demo altında korunur. Ana sayfada 20 araçlık kısa karar demosu kullanılır; 70 araçlık ayrıntılı büyük filo senaryosu yalnız ilgili ürün ve Pilot anlatımında kalır.

### Ürün SEO sayfalarının ilk ekran ayrımı

- Araç kiralama programı ve rezervasyon takvimi sayfalarının birbirine benzeyen ilk ekranları kullanıcı gözüyle ayrıştırıldı. Program sayfası küçük filodan 70+ araçlı çok şubeli operasyona ölçeklenmeyi; takvim sayfası ise takvimden rezervasyon oluşturma, araç değiştirme ve çakışma çözme işini öne çıkarır.
- Hero başlık ölçüsü ve sütun dengesi, ürün önizlemesinin başlık altında ezilmemesi için düzenlendi. Program önizlemesine teslim, iade, araç durumu ve açık bakiyenin aynı ekranda olduğu açıklaması; takvim önizlemesine görünür R-2590 çakışması ve aynı sınıftan ROK 104 araç önerisi eklendi.
- Hero içindeki ikincil CTA artık karşı ürün sayfasına gitmez; `#product-demo` ile bulunduğu sayfadaki geniş 70 araçlık örneğe iner. Karşılıklı ürün iç bağlantıları sayfanın altındaki “İlgili ürün” bölümünde korunur.
- Türkçe ve İngilizce içerik/işlev eşitliği sağlandı. Yeni rota açılmadığı, sayfa amacı ve ana arama niyeti değişmediği için title, description, canonical, hreflang, sitemap ve schema değiştirilmedi.
- Yeni rota oluşmadı. Ana sayfa metadata, schema, canonical/hreflang ve sitemap değişikliği gerekmedi; ürün sayfalarına iç bağlantılar korunur.
- Görsel demo geri gelmesine rağmen son ana sayfa HTML'i ilk 14 bölümlü sürüme göre Türkçede yaklaşık %28,9, İngilizcede yaklaşık %30,1 daha küçüktür.
