# Rent Okey web sitesi — proje el kitabı

Son güncelleme: 23 Ağustos 2026  
Doğrulanan Git başlangıç noktası: `35c65c5` — `logo tasarımı güncellendi.`

Bu belge, Rent Okey web sitesinde yapılacak bir sonraki geliştirmeden önce okunması gereken ana bağlam dosyasıdır. Yalnız mevcut ekranları anlatmaz; ürünün ne olduğu, sitenin ziyaretçiyi hangi sırayla ikna ettiği, hangi kararların neden alındığı, hangi vaatlerin doğrulandığı ve hangi alanların henüz prototip olduğu burada ayrıştırılır.

## 1. Otuz saniyelik özet

- Bu repo **Rent Okey pazarlama ve satış web sitesidir**. Çalışan Rent Okey SaaS uygulamasının frontend reposu değildir.
- Hedef müşteri Türkiye ve KKTC’de faaliyet gösteren araç kiralama firmalarıdır.
- Ana değer önerisi: **“Operasyonu yönetin. Yoğunluğu değil.”**
- Ürünün farkı yalnız kayıt tutması değil; teslim, iade, araç planı, ödeme, belge, bakım ve bağlamsal riskleri aksiyona dönüştürmesidir.
- Ana dönüşüm hedefi `/ucretsiz-dene` sayfasındaki **14 günlük, kredi kartsız deneme** akışıdır.
- Web sitesi, bulanık ürün ekran görüntüleri yerine HTML/CSS ile çizilmiş etkileşimli bir ürün demosu kullanır.
- Ana sayfa “ürün nedir?” sorusundan başlayıp “neden farklı?”, “nasıl denenir?”, “ne kadar?”, “güvenebilir miyim?” ve “şimdi ne yapmalıyım?” sorularını sırayla cevaplar.

## 2. Repo ile ürün uygulamasını karıştırma

Bu repoda bulunan dashboard, zaman çizelgesi ve mobil operasyon ekranları **pazarlama amaçlı kod tabanlı demodur**. Gerçek rezervasyon, araç atama, ödeme veya kullanıcı oluşturma işlemi yapmaz.

- Web sitesi reposu: bu repo (`rentokey-web-git`)
- Canlı ürün: `https://app.rentokey.com`
- Giriş rotası: `/giris` doğrudan canlı ürüne yönlendirir.
- Gerçek ürün davranışı değiştirilecekse uygulama reposunda çalışılmalıdır.
- Web demosunda görülen bir butonun çalışması, gerçek uygulamada aynı entegrasyonun bulunduğu anlamına gelmez.

## 3. Marka ve ürün konumlandırması

### Marka fikri

“Rent Smart. Go Easy.” sloganı, kiralama işini yalnız dijitalleştirmek değil; ekip üzerindeki operasyon yükünü azaltmak anlamına gelir. Web sitesindeki Türkçe karşılığı daha doğrudan bir fayda cümlesi olarak kullanılır:

> Operasyonu yönetin. Yoğunluğu değil.

### Hedef kitle

- 1–10 araçlık küçük kiralama firmaları
- 11–30 araçlık, ofis ve saha ekibi birlikte çalışan firmalar
- 31–70 araçlık yoğun veya çok şubeli operasyonlar
- 71+ araçlık, entegrasyon ve özel destek ihtiyacı olan kurumsal filolar

### Coğrafi odak

- Türkiye
- KKTC
- Para birimi ve fiyat iletişimi: `₺ / TRY`
- Yerel operasyon örnekleri: şube, havalimanı, otel, adrese teslim, farklı şehir/ilçe transferleri

### Ürünün pazardaki farkı

Rent Okey genel amaçlı bir CRM, filo tablosu veya yalnız rezervasyon takvimi gibi anlatılmamalıdır. Konumlandırma şu üç katmandan oluşur:

1. **Tek operasyon akışı:** rezervasyon, filo, teslim/iade, finans ve ekip aynı veride buluşur.
2. **Aksiyon görünürlüğü:** sıradaki teslim, iade, belge, bakım ve riskler doğrudan yapılacak iş olarak sunulur.
3. **Önerilen odak:** sabit kurala sığmayan, farklı verilerin birlikte değerlendirilmesini gerektiren riskler önceden gösterilir.

## 4. Kullanıcı tarafından doğrulanan ürün özellikleri

Aşağıdaki özellikler çalışan ürün için kullanıcı tarafından açıkça doğrulanmıştır ve web sitesinde kullanılabilir:

- Rezervasyon yönetimi ve canlı zaman çizelgesi
- Rezervasyon tarihlerine ve müsaitliğe göre otomatik uygun araç önerisi
- Yetkili kullanıcının öneriyi onaylaması veya başka araç seçmesi
- Araç teslim ve iade operasyonları
- Filo yönetimi
- Gider, ödeme ve temel rapor takibi
- Bakım kayıtları
- Sigorta bitiş uyarısı
- Kasko bitiş uyarısı
- Vergi ödeme tarihi uyarısı
- Egzoz emisyon bitiş tarihi uyarısı
- Rezervasyon, gider, filo ve bakım kayıtlarını CSV ile içeri aktarma
- Masaüstü, tablet ve mobil kullanım
- Pozisyona göre sayfa yetkilendirmesi
- Önerilen odak

### Yetki yapısı

Arayüzde toplam beş seçenek görünür; doğru anlatım **bir ana rol ve dört operasyon pozisyonu** şeklindedir:

1. Sistem Yöneticisi — ana rol
2. Şube Müdürü
3. Saha / Müşteri Temsilcisi
4. Teknik & Operasyon
5. B2B / Kurumsal Ortak

Başlangıç paketinde bu gelişmiş rol yapısı bulunmaz. Büyüme paketinden itibaren pozisyon bazlı sayfa yetkilendirmesi sunulur. Profesyonel pakette ayrıntılı yetki ve aktivite geçmişi de yer alır.

### Önerilen odak nasıl anlatılmalı?

Önerilen odak klasik teslim/iade veya belge alarmından farklıdır. Rezervasyon, ödeme, araç, lokasyon ve zaman verilerini birlikte değerlendirerek ekibin normal listelerde fark etmesi zor durumları öne çıkarır.

Onaylı anlatım örnekleri:

- Kiralama başladı ama ödemenin bir bölümü alınmadı; bakiye bekliyor.
- Aynı araçta arka arkaya iki rezervasyon var; temizlik veya transfer için yeterli süre yok.
- Teslim yaklaşıyor ama rezervasyona henüz araç atanmadı; uygun araç önerisi hazır.

Özelliği “kendi başına karar veren yapay zekâ” şeklinde anlatma. Kullanıcıya karar ve aksiyon hazırlığı sağlayan bağlamsal öneri sistemi olarak konumlandır.

## 5. Ürün tasarımından web sitesine taşınan ilkeler

Web sitesi tasarlanmadan önce çalışan ürünün ana sayfası, zaman çizelgesi, hızlı rezervasyon ve cihaz kırılımları üzerinde çalışıldı. Bu kararlar pazarlama demosunun dilini de belirledi.

### Masaüstü ürün yaklaşımı

- Merkezde rezervasyon zaman çizelgesi bulunur.
- Yoğun filo görünümü 70 araçta da çalışabilmelidir.
- Araçlar sınıf veya gruba göre gruplanabilir ve daraltılabilir.
- Plaka/model araması ve durum/sınıf filtreleri tek kompakt satırda tutulmalıdır.
- Satır yüksekliği sıkışık ama okunabilir olmalıdır; ekranda daha fazla araç görünmelidir.
- Aylık kiralamalar ilk bakışta ayırt edilebilmelidir.
- Teslim, iade, çakışma ve belge aksiyonları farklı renk ve ikonlarla görünür olmalıdır.
- Üst özet kartı seçildiğinde ayrıntı sağ panel veya bağlamsal detay alanında açılmalıdır.

### Tablet ürün yaklaşımı

- Kullanıcı kartı seçtikten sonra ayrıntı için sayfanın sonuna gitmemelidir.
- Detay, popup/drawer gibi bulunduğu bağlamı kaybettirmeyen bir yüzeyde açılmalıdır.
- Ana ekrandaki ve popup içindeki aksiyon butonları aynı renk, ikon ve tipografi sistemini kullanmalıdır.
- Üst kartlarda metin taşması olmamalıdır.
- Zaman çizelgesi filtreleri mümkün olduğunca tek satırda tutulmalıdır.

### Mobil ürün yaklaşımı

- Masaüstü zaman çizelgesi küçültülüp telefona sıkıştırılmamalıdır.
- Mobil ana sayfa operasyon odaklıdır: sıradaki teslim, iade, çakışma, araç atama ve belge aksiyonları önce gelir.
- “Sıradaki işlemler” kartları yana kaydırılabilir olabilir.
- Çakışmalar ve belge süreleri görünür öncelik alanlarıdır.
- Alt menüde “Rezervasyonlar” butonu bulunabilir; önceki karara göre sayfa içeriği şimdilik boş bırakılmıştır. Bu karar gerçek uygulama reposunda ayrıca doğrulanmalıdır.

### Prototipte tasarlanan fakat gerçek uygulamada tekrar doğrulanması gereken etkileşimler

- Rezervasyonu zaman çizelgesinde sürükle-bırak ile başka araca taşıma
- Araç ve boş tarih alanına tıklayınca popup hızlı rezervasyon açılması
- Mevcut rezervasyon bulunan aracın diğer boş günlerinden de hızlı rezervasyon başlatılması
- Hızlı rezervasyon formunun yeni tasarım sistemiyle gösterilmesi

Bu maddeler ürün tasarım kararlarıdır. Pazarlama metninde “mevcut özellik” diye kullanılmadan önce canlı uygulamada yeniden kontrol edilmelidir.

## 6. Web sitesinin oluşum hikâyesi

### Aşama 1 — Özellik listesi ağırlıklı yaklaşım

İlk tasarımda ürün daha çok paket kartları ve uzun özellik listeleriyle anlatılıyordu. Bu yaklaşım teknik olarak bilgi veriyor ama kullanıcıya şu soruların cevabını hızlı vermiyordu:

- Günlük operasyonum nasıl kolaylaşacak?
- Ürün benim mevcut çalışma biçimime uyuyor mu?
- Diğer programlardan farkı ne?
- Denemek için ne kadar kurulum gerekiyor?

### Aşama 2 — Ürün ekran görüntülerini kullanma

Canlı uygulamadan masaüstü ve mobil ekran görüntüleri ana sayfada kullanıldı. İsimler veri güvenliği için örnek adlarla değiştirildi. Ancak şu sorunlar oluştu:

- Görüntüler bulanık ve düşük kaliteli görünüyordu.
- Masaüstü ekranının en/boy oranı pazarlama alanına oturmuyordu.
- Üst kartlar ile zaman çizelgesi üst üste geliyor veya küçülünce okunmuyordu.
- Mobil uygulamadaki orta `+` butonunun hizası görsel kaliteyi bozuyordu.
- Gerçek ürün ekranı pazarlama sayfasında fazla yoğun kalıyordu.

Karar: ekran görüntüsü hero’dan kaldırıldı. İleride galeri yapılırsa görüntüler kontrollü çözünürlük, anonim veri ve doğru cihaz oranlarıyla yeniden üretilecek.

### Aşama 3 — Kod tabanlı etkileşimli ürün demosu

Ana hero alanına `DashboardMock` eklendi. Bu çözüm:

- çözünürlükten bağımsızdır,
- metinleri her cihazda okunabilir tutar,
- gerçek müşteri verisi içermez,
- ürünün tamamını değil, satın alma kararını etkileyen üç ana senaryoyu gösterir.

Demo sekmeleri:

1. Bugünkü operasyon
2. Planlama
3. Önerilen odak

Masaüstü ve mobil sahneler aynı iş mantığını farklı yerleşimlerle anlatır. Mobilde zaman çizelgesi küçültülmez; tarih ve hızlı aksiyon akışına dönüşür.

### Aşama 4 — Ürün vaadinin sadeleştirilmesi

Site “çok özellik” anlatımından “daha az operasyon yükü” anlatımına taşındı. Ana mesajlar:

- Beş ayrı araç değil, tek operasyon akışı.
- Sorun oluşmadan haberdar olun.
- Filo büyürken düzeni koruyun.
- Ofis ve saha aynı akışta çalışsın.
- Takvime yazılmayan riski de görünür kılın.

### Aşama 5 — Gerçek deneme ve dönüşüm kurgusu

Deneme süreci Netflix/Vercel benzeri hızlı başlangıç fikrinden esinlendi; fakat kredi kartı alınmadığı için otomatik ödeme mantığı yoktur.

- 14 gün ücretsiz
- Kredi kartı gerekmez
- Kurulum ücreti yok
- Kullanıcı kendi filosu ve rezervasyonlarıyla dener
- Deneme bitince otomatik ödeme alınmaz
- Devam edecek kullanıcı paketini sonradan seçer

`/ucretsiz-dene` arayüzü iki adımlı onboarding olarak tasarlandı. Şu anda yalnız frontend prototipidir; gerçek kullanıcı, firma veya tenant oluşturmaz.

### Aşama 6 — Paketlerin yeniden dağıtılması

Paketler yalnız araç sayısına göre değil; ekip, şube ve operasyon karmaşıklığına göre anlamlandırıldı. Çekirdek operasyon her pakette korunurken, ekip koordinasyonu Büyüme’ye, çoklu şube ve kayıt derinliği Profesyonel’e, entegrasyon Kurumsal’a taşındı.

### Aşama 7 — Marka varlıklarının temizlenmesi

- PNG tabanlı logo kullanımı yerine resmî outlined SVG setine geçildi.
- Header için slogansız logo kullanıldı.
- Footer’da sloganlı beyaz kilit korundu.
- Slogansız yatay logoda ikon 36 iç SVG birimi yukarı alınarak kelime işaretiyle optik olarak hizalandı.
- `og.png`, tarayıcı ikonu ve Apple ikonu resmî varlıklardan yeniden üretildi.

## 7. Ana sayfanın baştan sona hikâyesi

Ana sayfa sırası `src/app/page.tsx` içindedir. Sıra bilinçlidir; yalnız görsel çeşitlilik için değiştirilmemelidir.

| Sıra | Bölüm / kaynak | Ziyaretçinin sorusu | Bölümün görevi |
|---|---|---|---|
| 1 | Header | Nereye geldim, ne yapabilirim? | Ürün, fiyat, kaynaklar ve denemeye hızlı erişim verir. |
| 2 | `Hero` | Rent Okey bana ne kazandırır? | Ana faydayı söyler ve kod tabanlı ürünü ilk görünümde gösterir. |
| 3 | `StatsBar` | Ürün hangi alanları kapsıyor? | Bugünkü operasyon, planlama, cihazlar ve deneme modelini dört kısa kanıtla özetler. |
| 4 | `UrunSection / UrunTabs` | Ürün hangi süreçleri birleştiriyor? | Planlama, operasyon, filo, finans ve yönetimi tek akış olarak anlatır. |
| 5 | `FeatureGrid` | Neden mevcut yöntemimi değiştireyim? | Dağınık WhatsApp/tablo düzeninden aksiyon merkezine geçişi gösterir. |
| 6 | `FocusSection` | Rakiplerden farkı ne? | Önerilen odağı ve bağlamsal risk yaklaşımını örneklerle kanıtlar. |
| 7 | `HowItWorks` | Başlamak zor mu? | Hesap, veri, ekip ve gerçek operasyon olmak üzere dört adımlı denemeyi açıklar. |
| 8 | `PricingSection` | Bana uygun paket ve maliyet ne? | Araç/kullanıcı/şube limitlerini, aylık-yıllık bedeli ve karşılaştırmayı gösterir. |
| 9 | `HakkimizdaSection` | Ürün yerel operasyonumu anlıyor mu? | Türkiye/KKTC’ye özgü belge, lokasyon, süre ve ekip gerçeklerini anlatır. |
| 10 | `ComingSoonSection` | Ürün gelişmeye devam edecek mi? | Mevcut özelliklerle karıştırmadan açıkça etiketlenmiş yol haritasını gösterir. |
| 11 | `FaqSection` | Satın alma öncesi itirazlarım ne olacak? | Deneme, ödeme, paket, cihaz, aktarım ve yetki sorularını cevaplar. |
| 12 | `IletisimSection` | Biriyle görüşebilir miyim? | Paket, geçiş ve kurulum sorularını e-posta taslağına dönüştürür. |
| 13 | `CtaBanner` | Şimdi ne yapmalıyım? | Son kez deneme veya ekip görüşmesi seçeneği sunar. |
| 14 | Footer | Kurumsal ve yasal bilgilere nasıl ulaşırım? | Marka, iletişim, içerik ve yasal bağlantıları kapatır. |

### Dönüşüm mantığı

Ana dönüşüm yolu:

`Hero / Header / Fiyatlandırma / Final CTA` → `/ucretsiz-dene` → iki adımlı onboarding → ileride gerçek hesap oluşturma servisi → `app.rentokey.com`

İkincil dönüşüm yolu:

`Fiyatlandırma / SSS / İletişim` → konu ve firma bilgileriyle e-posta taslağı → `hello@rentokey.com`

## 8. Paketler için tek doğru kaynak

Paket verilerinin ana kaynağı `src/lib/pricing.ts` dosyasıdır. Metin veya fiyat güncellenirken kartlar, karşılaştırma tablosu ve SSS birlikte kontrol edilmelidir.

| Paket | Araç | Kullanıcı | Şube | Aylık | Yıllık ödeme seçeneğinde aylık karşılık |
|---|---:|---:|---:|---:|---:|
| Başlangıç | 1–10 | 1 | 1 | ₺1.490 | ₺1.190 |
| Büyüme | 11–30 | 5 | 1 | ₺2.890 | ₺2.290 |
| Profesyonel | 31–70 | 15 | 3 | ₺4.990 | ₺3.990 |
| Kurumsal | 71+ | Sınırsız | Sınırsız | Özel teklif | Özel teklif |

Fiyatlara KDV dahil değildir.

### Tüm paketlerde bulunması gereken çekirdek

- Rezervasyon ve zaman çizelgesi
- Otomatik uygun araç önerisi
- Önerilen odak ve bağlamsal riskler
- Filo, teslim ve iade
- Mobil operasyon
- Bakım ve belge süresi uyarıları
- Gider, ödeme ve temel raporlar
- CSV ile rezervasyon, gider, filo ve bakım aktarımı

### Paket büyüdükçe eklenen değer

- Büyüme: rol/yetki, lokasyon, gelişmiş analiz, Excel dışa aktarım
- Profesyonel: çoklu şube, fotoğraflı teslim/iade/hasar, aktivite geçmişi, gelişmiş rapor
- Kurumsal: API, özel entegrasyon, veri/kurulum desteği, özel yetki/rapor, destek yöneticisi

Fiyatlar veya limitler yalnız bir kartta değiştirilmemelidir. Şunları birlikte ara ve güncelle:

- `src/lib/pricing.ts`
- `src/components/PricingSection.tsx`
- `src/lib/faq.ts`
- `/ucretsiz-dene` içindeki filo aralıkları
- İletişim formundaki filo aralıkları

## 9. Deneme, ödeme ve iletişim gerçeği

### `/ucretsiz-dene`

Mevcut durum:

- ad/soyad, e-posta ve şifre alır,
- firma, ülke, filo büyüklüğü ve isteğe bağlı telefon alır,
- Türkiye ve KKTC seçeneklerini sunar,
- sözleşme ve gizlilik onayı ister,
- başarı ekranı gösterir,
- fakat backend’e veri göndermez ve hesap açmaz.

Bir sonraki gerçek geliştirmede bu formun Rent Okey kimlik doğrulama ve tenant/firma oluşturma servisine bağlanması gerekir. Şifre frontend state’inde işlem tamamlanınca temizlenmektedir; yine de gerçek entegrasyonda güvenlik mimarisi backend ile birlikte tasarlanmalıdır.

### Abonelik

Henüz gerçek checkout, kart saklama, abonelik başlatma, faturalandırma veya deneme bitiş otomasyonu bulunmaz. Kullanıcı kredi kartı vermediği için “14 gün sonunda otomatik ücretlendirme” sözü kullanılmamalıdır.

### İletişim formu

`ContactForm` bir başarı mesajı göstermez ve sahte gönderim yapmaz. Girilen bilgilerle kullanıcının e-posta uygulamasında `hello@rentokey.com` adresine hazır bir taslak açar. Gerçek form gönderimi istenirse API route, e-posta servisi veya CRM bağlantısı kurulmalıdır.

## 10. Aktif rotalar ve içerik durumu

| Rota | Durum |
|---|---|
| `/` | Ana satış sayfası, aktif ana kurgu |
| `/ucretsiz-dene` | İki adımlı frontend onboarding prototipi |
| `/giris` | `https://app.rentokey.com` adresine yönlendirir |
| `/kaynaklar` | Kaynak merkezine giriş sayfası |
| `/blog` | Yer tutucu yazı başlıkları; gerçek makale yok |
| `/kilavuzlar` | Yer tutucu kılavuz listesi; içerikler henüz yok |
| `/guncellemeler` | Örnek güncelleme kayıtları içerir; canlı ürünle doğrulanmadan yayınlanmamalı |
| `/kariyer` | Açık pozisyon olmadığını söyler, e-posta bağlantısı verir |
| `/gizlilik-politikasi` | Taslak metin; hukuki inceleme gerekli |
| `/kullanim-sartlari` | Taslak metin; hukuki inceleme gerekli |

## 11. Görsel sistem ve marka varlıkları

### Teknoloji ve stil

- Yazı tipi: self-hosted `Inter Variable`
- Ana lacivert: `#0B1F33`
- Derin lacivert: `#06152C`
- Mavi: `#1769E0`
- Yeşil: `#18B878`
- Açık yüzey: `#F6F8FB`
- Kenarlık: `#E7EAF1`

Renkler `src/app/globals.css` içinde CSS değişkeni ve Tailwind tema anahtarı olarak tanımlıdır.

### Tasarım dili

- Açık zemin, lacivert tipografi ve yeşil aksiyon rengi
- Premium his için koyu lacivert ürün yüzeyleri
- Büyük ama kontrollü yuvarlatılmış köşeler
- İnce kenarlıklar, yumuşak gölgeler
- Aksiyonlarda yalnız renk değil, ikon ve metin birlikte
- Mobilde parmakla rahat kullanılacak dokunma alanları
- Masaüstünde yüksek bilgi yoğunluğu, mobilde görev önceliği

### Logo kullanım kuralları

- Header/açık zemin: `public/logo/rentokey-logo.svg`
- Koyu zemin slogansız: `public/logo/rentokey-logo-white.svg`
- Footer sloganlı: `public/logo/rentokey-logo-full-white.svg`
- Ürün demosu/ikon: `public/logo/rentokey-icon.svg`
- Yalnız ikonun geometrisi değiştirilmemiştir.
- Sloganlı kilit değiştirilmemiştir.
- Optik hizalama yalnız slogansız yatay kilitte uygulanmıştır.

Sosyal paylaşım görseli `scripts/build-og-card.mjs` ile `public/og.png` olarak üretilir. Logo değişirse bu betik yeniden çalıştırılmalıdır.

`scripts/export-logo-assets.mjs`, renkli/siyah/beyaz SVG’lerden PDF, EPS ve PNG seti üretmek için yazılmıştır; mevcut hâli Chrome ve `pdftocairo` için yerel mutlak yollar içerir. Başka bilgisayarda çalıştırılmadan önce taşınabilir hâle getirilmelidir.

## 12. Ekran görüntüsü ve örnek veri kuralları

- Gerçek müşteri adları, e-posta, telefon, rezervasyon numarası veya plaka kullanılmamalıdır.
- Pazarlama demosunda `34 ROK ...` gibi kurgu plakalar ve kurgu kişiler kullanılmalıdır.
- Canlı uygulamadan ekran görüntüsü alınırsa veri anonimleştirme sonradan bulanıklaştırmayla değil, çekimden önce örnek veriyle yapılmalıdır.
- Düşük çözünürlüklü veya en/boy oranı bozuk ekran görüntüsü hero’ya konmamalıdır.
- Gerçek ekran galerisi yapılırsa masaüstü ve mobil görseller ayrı sanat yönetimiyle hazırlanmalıdır.
- `scripts/build-product-screenshots.py` yalnız kontrollü yeni galeri çalışması için tutulmuştur.

## 13. Yol haritası ile mevcut özellikleri ayır

Ana sayfadaki `ComingSoonSection` şu üç konuyu açıkça “Geliştiriliyor” olarak gösterir:

- Fotoğraflı hasar karşılaştırması
- Akıllı fiyat önerisi
- Mesajdan rezervasyon taslağı

Bu alanlarda kesin yayın tarihi veya tamamlanmış özellik dili kullanılmamalıdır.

Aşağıdaki vaatler canlı üründe yeniden doğrulanmadan aktif satış metnine eklenmemelidir:

- Çevrimdışı çalışma ve otomatik senkronizasyon
- Dijital imza
- Düzenli yedekleme veya belirli şifreleme mimarisi
- Tam otomatik karar veren yapay zekâ
- Kesin zaman kazancı, gelir artışı veya gecikme azaltma yüzdesi

## 14. Teknik mimari

- Next.js `16.3.1`, App Router
- React `19.2.8`
- TypeScript `5`
- Tailwind CSS `4`
- `lucide-react` ikonları
- `@fontsource-variable/inter` ile self-hosted font
- Ana sayfa çoğunlukla server component; etkileşimli demo, paketler, SSS, header ve formlar client component’tir.

### Ana kaynak dosyalar

- Sayfa sırası: `src/app/page.tsx`
- Global layout ve metadata: `src/app/layout.tsx`
- Tasarım tokenları: `src/app/globals.css`
- Header/footer navigasyonu: `src/lib/nav.ts`
- Paketlerin ana kaynağı: `src/lib/pricing.ts`
- SSS ana kaynağı: `src/lib/faq.ts`
- Hero ürün demosu: `src/components/DashboardMock.tsx`
- Beş modüllü ürün anlatımı: `src/components/home/UrunTabs.tsx`
- Önerilen odak anlatımı: `src/components/home/FocusSection.tsx`
- Fiyatlandırma ve karşılaştırma: `src/components/PricingSection.tsx`
- Deneme formu: `src/components/TrialOnboarding.tsx`
- İletişim formu: `src/components/ContactForm.tsx`
- Logo bileşeni: `src/components/Logo.tsx`
- OG üretimi: `scripts/build-og-card.mjs`
- Logo dışa aktarımı: `scripts/export-logo-assets.mjs`
- Son çalışma notları: `DEVAM_NOTLARI.md`

### Çalıştırma ve doğrulama

```bash
npm install
npm run dev
npm run lint
./node_modules/.bin/next build --webpack
```

Next.js sürümü eğitim verilerinden farklı olabileceği için kod değişikliğinden önce `AGENTS.md` ve gerekirse `node_modules/next/dist/docs/` altındaki güncel rehberler okunmalıdır.

## 15. Bilinen tutarsızlıklar ve teknik borç

Bir sonraki geliştirmede önce bu liste kontrol edilmelidir:

1. `PricingSection` girişinde “Ekibinizi sınırlamadan” ifadesi bulunuyor; paketlerde 1/5/15 kullanıcı sınırı olduğu için metin güncellenmelidir.
2. `src/lib/features.ts` aktif ana sayfada kullanılmıyor ve dijital imza/şifreli-yedekli altyapı gibi yeniden doğrulanması gereken eski ifadeler içeriyor.
3. `ProductShowcase`, `ShowcaseCarousel` ve `ModuleRow` aktif ana sayfa akışında kullanılmıyor; eski ekran görüntüsü yaklaşımından kalan kod olabilir.
4. `_to_delete/old-logo-svgs/` aktif logo kaynağı değildir. Referans olmadığı doğrulandıktan sonra temizlenebilir.
5. `/guncellemeler` sayfasındaki çevrimdışı mod ve diğer kayıtlar canlı ürünle yeniden doğrulanmalıdır.
6. Blog ve kılavuz içerikleri yer tutucudur.
7. Gizlilik ve kullanım şartları hukuk danışmanı tarafından doğrulanmamıştır.
8. Deneme formu backend’e bağlı değildir.
9. İletişim formu gerçek gönderim servisine bağlı değildir.
10. Checkout, ödeme, abonelik ve faturalandırma akışı henüz yoktur.
11. `YEARLY_DISCOUNT` dışa aktarılıyor; arayüz hesaplaması bunun yerine açıkça tanımlanmış yıllık fiyatları kullanıyor. Fiyat mantığı tek modele indirgenmelidir.
12. `npm run lint` hata vermiyor; `TrialOnboarding.tsx` içindeki kullanılmayan `Check` importu için bir uyarı bulunuyor.

## 16. Önerilen sonraki geliştirme sırası

### P0 — Satışın gerçekten tamamlanması

1. `/ucretsiz-dene` formunu gerçek kullanıcı/tenant oluşturma servisine bağla.
2. E-posta doğrulama, hata durumları, tekrar kayıt ve güvenli şifre akışını tamamla.
3. 14 gün başlangıç/bitiş durumunu uygulama ve backend tarafında tanımla.
4. Deneme sonrası paket seçimi, checkout, abonelik ve faturalandırma mimarisini kur.

### P1 — Lead ve ölçümleme

1. İletişim formunu e-posta/CRM servisine bağla.
2. CTA tıklaması, deneme başlangıcı, form terk oranı ve paket ilgisi için analitik ekle.
3. KVKK/çerez tercihi ve ölçümleme izinlerini hukuki metinlerle birlikte ele al.

### P1 — İçerik ve güven

1. Yasal metinleri uzmanla doğrula.
2. Gerçek müşteri onayı varsa vaka çalışması ve referans ekle.
3. Blog/kılavuz sayfalarını gerçek içerikle doldur veya yayından kaldır.

### P2 — Temizlik ve kalite

1. Kullanılmayan bileşen ve eski logo klasörlerini referans kontrolünden sonra temizle.
2. Fiyatlandırma metni ve kullanıcı limitlerindeki tutarsızlığı düzelt.
3. Erişilebilirlik, klavye gezinmesi, performans ve SEO taraması yap.
4. Gerçek ürün galerisi gerekiyorsa yüksek çözünürlüklü ve anonim yeni sahneler üret.

## 17. Bir sonraki geliştirici/AI için çalışma protokolü

Yeni çalışmaya şu sırayla başla:

1. `git status --short` ile kullanıcı değişikliklerini kontrol et.
2. Bu belgeyi ve `DEVAM_NOTLARI.md` dosyasını oku.
3. İstenen değişikliğin web sitesi mi, çalışan uygulama mı olduğunu ayır.
4. Metindeki ürün vaadini yukarıdaki doğrulanmış özelliklerle karşılaştır.
5. İçeriğin tek doğru kaynak dosyasını bul; aynı bilgiyi kullanan SSS, paket ve formları birlikte güncelle.
6. Masaüstü, tablet ve mobil davranışı ayrı ayrı değerlendir.
7. Gerçek müşteri verisi veya doğrulanmamış ürün vaadi ekleme.
8. `npm run lint` ve production build ile doğrula.
9. Kullanıcının mevcut değişikliklerini koru.
10. Açık onay olmadan commit, push veya deploy yapma.

## 18. Karar özeti — korunması gerekenler

- Hero’da ekran görüntüsü değil kod tabanlı interaktif demo kullan.
- Siteyi özellik deposuna çevirmeden operasyon sonucu anlat.
- Önerilen odağı ürünün ana farklılaştırıcısı olarak koru.
- 14 günlük denemeyi hızlı, kredi kartsız ve otomatik ödemesiz anlat.
- Türkiye ve KKTC yerel bağlamını görünür tut.
- Kullanıcı/şube limitlerini paketler arasında tutarlı göster.
- Yol haritasını mevcut özellik gibi sunma.
- Header’da slogansız optik hizalı logo, footer’da sloganlı kilit kullan.
- Mobilde masaüstünü küçültme; görev ve aksiyon akışını yeniden kur.
- Satış metninde yalnız doğrulanmış ürün davranışlarını kullan.
