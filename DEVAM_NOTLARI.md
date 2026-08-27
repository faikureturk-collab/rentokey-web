# Rent Okey web sitesi — devam notları

Tarih: 23 Ağustos 2026

Projenin ürün doğruları, karar geçmişi, ana sayfa dönüşüm hikâyesi, paket sistemi, teknik mimarisi ve sonraki geliştirme sırası tek bir kalıcı kaynakta toplandı: `PROJE_EL_KITABI.md`. Yeni bir geliştirmeye başlamadan önce önce bu belge, ardından aşağıdaki son çalışma notları okunmalıdır.

## Son tamamlanan çalışma

Ekran görüntüsüne ihtiyaç duymayan ürün anlatımı yeniden tasarlandı. **“Beş ayrı araç değil. Tek operasyon akışı.”** alanı; Planlama, Operasyon, Filo, Finans ve Yönetim adımlarını seçilebilir, kod tabanlı ürün sahneleriyle anlatıyor. Hemen altındaki tekrar eden özellik kartları ise ürünün dört temel operasyon sonucunu anlatacak şekilde yenilendi.

14 günlük deneme süreci de baştan kurgulandı: hesap açma, filo ekleme, ekip daveti ve gerçek operasyonu deneme adımları artık açık şekilde anlatılıyor. Mevcut üründe doğrulanmamış otomasyon vaatleri metinden çıkarıldı. Yapay zekâ yol haritası, satın alma akışını bölmemesi için fiyatlandırma ve marka anlatımının arkasına taşındı; gelecek özellikleri daha şeffaf ifadelerle sunuluyor.

Fiyatlandırma alanı kullanıcıların paketleri daha hızlı karşılaştırabilmesi için yeniden tasarlandı. Aylık ve yıllık seçimde araç başı tutar artık seçili fiyata göre dinamik hesaplanıyor; yıllık toplam ve yıllık tasarruf ayrıca gösteriliyor. Paketlere hedef firma açıklaması, güven maddeleri ve açılır özellik karşılaştırma tablosu eklendi. Paket fiyatları değiştirilmedi.

Paket kullanıcı limitleri ve içerik dağılımı güncellendi: Başlangıç **1 kullanıcı / 1 şube**, Büyüme **5 kullanıcı / 1 şube**, Profesyonel **15 kullanıcı / 3 şube**, Kurumsal **sınırsız kullanıcı / sınırsız şube**. Rezervasyon, filo, teslim/iade, mobil operasyon, bakım ve belge uyarıları ile temel finans takibi tüm paketlerde çekirdek özellik olarak korundu. Ekip rolleri ve gelişmiş analiz Büyüme'ye; çoklu şube, fotoğraflı hasar kaydı ve aktivite geçmişi Profesyonel'e; API, özel entegrasyon ve kurumsal destek ise Kurumsal'a konumlandırıldı.

`/ucretsiz-dene` sayfası ilk tasarım aşamasında iki adımlı onboarding arayüzü olarak hazırlanmıştı. İlk adım hesap, ikinci adım firma/filo bilgilerini topluyor; Türkiye ve KKTC seçenekleri, mobil uyum, şifre görünürlüğü, sözleşme onayı ve tamamlanma ekranı içeriyordu. Bu ilk sürüm yalnız ön yüz prototipiydi; aşağıdaki son değişiklikle yerini gerçek tek adımlı kayıt akışına bıraktı.

Deneme hesabı akışı daha sonra sadeleştirilerek tek adıma indirildi. İlk gerçek entegrasyon sürümünde web sitesi Supabase Auth'a doğrudan bağlanıyordu; bu yaklaşım daha sonra kaldırıldı. Uygulama endpoint'inin tarayıcı CORS ön isteğine izin vermediği doğrulandığı için güncel form isteği önce aynı origin `POST /api/kayit-ol` route'una gönderiyor; route isteği sunucu tarafında `https://app.rentokey.com/api/kayit-ol` endpoint'ine iletiyor. Hesap uygulama sunucusunda oluşturuluyor, tarayıcıya session dönmüyor ve doğrulama e-postası `mail.rentokey.com` üzerinden gönderiliyor. Firma adı ile filo büyüklüğü doğrulamadan sonra `app.rentokey.com` onboarding akışında tanımlanıyor. Supabase tarayıcı paketi, yerel Supabase yapılandırması ve `.env.example` kaldırıldı; daha önce Vercel'e eklenen iki `NEXT_PUBLIC_SUPABASE_*` değişkeni artık kullanılmıyor ve Vercel'den silinebilir.

Güven ve marka anlatımı yeniden düzenlendi. “Hakkımızda” bölümü soyut değer kartları yerine Türkiye ve KKTC operasyonuna özgü belge süreleri, teslim noktaları, farklı kiralama süreleri ve cihazlar arası iş akışını gösteriyor. SSS; yeni deneme modeli, 1/5/15/sınırsız kullanıcı limitleri ve güncel paket özellikleriyle eşleştirildi. Çevrimdışı çalışma, otomatik senkronizasyon ve doğrulanmamış şifreleme/yedekleme vaatleri kaldırıldı.

Kullanıcı tarafından doğrulanan iki mevcut özellik ürün anlatımına geri eklendi: sistem rezervasyon tarihleri ve araç uygunluğuna göre **otomatik uygun araç önerisi** sunuyor; yetkili kullanıcı öneriyi onaylayabiliyor veya başka araç seçebiliyor. Ayrıca **rezervasyon, gider, filo ve bakım kayıtları CSV ile içeri aktarılabiliyor**. Bu iki özellik ürün modülleri, onboarding, Başlangıç paketi, karşılaştırma tablosu ve SSS içinde güncellendi.

Pozisyon bazlı sayfa yetkilendirmesi ürün anlatımına eklendi. Görseldeki yapı **Sistem Yöneticisi** ana rolü ile **Şube Müdürü**, **Saha / Müşteri Temsilcisi**, **Teknik & Operasyon** ve **B2B / Kurumsal Ortak** olmak üzere dört operasyon pozisyonu şeklinde anlatılıyor. “Ekip & raporlar” modül sahnesi, Büyüme paketi, özellik karşılaştırması, “Neden Rent Okey?”, “Hakkımızda” ve SSS alanları bu yapıyla güncellendi.

**Önerilen odak** için ayrı bir ürün bölümü eklendi. Bu özellik sabit teslim/iade veya belge kontrollerinden farklı olarak rezervasyon, ödeme, araç, lokasyon ve zaman verilerini birlikte değerlendiriyor. Ödenmemiş bakiye ve arka arkaya rezervasyonlar arasında yetersiz temizlik/transfer süresi örnekleriyle anlatılıyor. Hero mesajı, “Neden Rent Okey?”, Başlangıç paketi, karşılaştırma tablosu ve SSS de bu özellikle güncellendi.

İletişim ve sayfa kapanış akışı yenilendi. Henüz bir mesaj servisine bağlı olmayan formun gerçekte gönderim yapmadan “Mesajınız alındı” göstermesi kaldırıldı; form artık seçilen konu, firma ve filo bilgileriyle kullanıcının e-posta uygulamasında hazır bir taslak açıyor. Son çağrı alanı 14 günlük denemenin koşullarını ve gerçek operasyon senaryosunu daha açık anlatıyor. Header ürün menüsü yeni Operasyon platformu, Önerilen odak ve Nasıl çalışır bölümleriyle eşleştirildi; mobil açılır menüler birbirinden bağımsız hale getirildi. Footer ürün bağlantıları güncellendi ve gerçek adresi bulunmayan boş sosyal medya bağlantıları kaldırıldı.

Hero alanındaki bulanık masaüstü ve mobil ekran görüntüleri kaldırıldı. Yerine tamamen HTML/CSS ile oluşturulmuş, **Bugünkü operasyon**, **Planlama** ve **Önerilen odak** sekmelerine sahip interaktif ürün demosu eklendi. Masaüstü sürümü sadeleştirilmiş operasyon kuyruğu, 7 günlük zaman çizelgesi, hızlı rezervasyon ve odak önerilerini gösteriyor. Mobil sürüm aynı iş mantığını zaman çizelgesini küçültmeden; hızlı aksiyon kartları, tarih seçimi ve öneri kartlarıyla sunuyor. Hero yerleşimi, metin ve demo masaüstünde aynı ilk görünüm içinde kalacak şekilde iki sütuna dönüştürüldü.

Hero dönüşüm akışı 1280×720 masaüstü görünümü hedeflenerek sıkılaştırıldı. Uzun fayda listesi kaldırıldı; kısa ürün açıklamasının hemen altına tek ve net aksiyon olarak **14 gün ücretsiz deneyin** yerleştirildi. Zaten aynı görünümde bulunan ürün demosuna tekrar bağlantı veren ikincil CTA kaldırıldı. Güven satırı “Kredi kartı yok · Kurulum ücreti yok · Satış görüşmesi beklemeden başla” olarak güncellendi. Etkileşim beklemeden ürün farkını göstermek için Bugünkü operasyon sahnesinin varsayılan önerilen odak kartı, iki rezervasyon arasında yalnızca 35 dakika kalan temizlik ve lokasyon transferi riskiyle değiştirildi.

Marka varlıkları `RentOkey_Tick_Konumu_Duzeltilmis` klasöründeki resmî setle yenilendi. Header ve açık zeminler için slogansız renkli outlined SVG; footer için sloganlı beyaz outlined SVG; ürün demosu için düzeltilmiş renkli ikon kullanılıyor. Eski PNG logo kopyaları kaldırıldı. Tarayıcı ve Apple ikonları düzeltilmiş resmî ikondan yeniden üretildi. `og.png` paylaşım kapağı da resmî beyaz logo, Türkçe ürün tanımı ve kod tabanlı Rent Okey operasyon sahnesiyle yenilendi. Tekrar üretim kaynağı `scripts/build-og-card.mjs` içinde tutuluyor.

Slogansız yatay logo ayrıca optik olarak yeniden hizalandı. İkon 36 iç SVG birimi yukarı alınarak RentOkey kelime işaretiyle aynı görsel merkeze getirildi; yazı, bulut ve tik çizimleri değiştirilmedi. Renkli, siyah ve beyaz sürümler SVG, outlined SVG, yüksek çözünürlüklü PNG, PDF ve EPS olarak `RentOkey_Slogansiz_Optik_Hizali` klasörüne eklendi. Header ve `og.png` bu yeni slogansız kilidi kullanıyor; sloganlı footer kilidi ve yalnız ikon dosyaları özgün geometrilerini koruyor. Tekrar üretim kaynağı `scripts/export-logo-assets.mjs` içinde tutuluyor.

Teknik SEO altyapısı tamamlandı. Tüm güçlü sayfalara benzersiz başlık, açıklama, canonical, Open Graph ve Twitter metadata eklendi; ana sayfada Organization, WebSite ve SoftwareApplication JSON-LD verisi kullanılıyor. `robots.txt` ve yalnız indekslenmesi istenen `/`, `/ucretsiz-dene` ve `/kaynaklar` adreslerini içeren `sitemap.xml` üretildi. Yer tutucu blog/kılavuz/güncelleme sayfaları ile henüz uzman onayı almamış yasal metinler `noindex, follow` durumunda tutuluyor. Bu sayfalar gerçek içerik ve gerekli onaylar tamamlandığında hem indekslemeye hem sitemap'e ayrıca açılmalıdır.

## Ürün görseli notu

- Hero artık ekran görüntüsü kullanmıyor; ürün anlatımı çözünürlükten bağımsız kod tabanlı demo ile yapılıyor.
- Kullanılmayan altı geçici masaüstü/mobil ekran görüntüsü depoya eklenmeden temizlendi; `public/product` klasörü kaldırıldı.
- İleride tam ekran “Ürünü yakından inceleyin” galerisi yapılırsa yeni, kontrollü görseller üretmek için `scripts/build-product-screenshots.py` betiği korunuyor.

## Sonraki çalışmada yapılacaklar

1. Gerçek ürün galerisi eklenecekse uygulamadan temiz, yüksek çözünürlüklü ve kontrollü yeni ekran görüntüleri al; mevcut geçici görselleri doğrudan yayına koyma.
2. `app.rentokey.com` canlı uygulamasındaki `+` butonunun gerçek kaynak kodunu düzeltmek için uygulamanın frontend deposuna erişim gerektiğini unutma; şu an yalnız pazarlama görseli düzeltildi.
3. Yeni modül akışındaki metin ve örnek değerleri gerçek paket kapsamıyla son kez doğrula.
4. İletişim formunu üretime almadan önce tercih edilen form servisine veya backend mesaj endpoint'ine bağla; e-posta taslağı geçici ama dürüst bir ara çözümdür.
5. Yayına geçmeden önce Git diff'ini kullanıcıyla gözden geçir, ardından yalnız açık onayla commit/push/deploy yap.
6. Yayın sonrası Google Search Console'a `https://rentokey.com/sitemap.xml` gönder ve ana URL'lerde canlı URL denetimi yap.

## Git durumu

Değişiklikler henüz commit veya push edilmedi. Kullanıcının diğer mevcut değişiklikleri korunmalı ve yalnız açık onayla GitHub'a gönderilmeli.
