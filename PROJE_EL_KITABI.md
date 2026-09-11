# Rent Okey web sitesi — proje el kitabı

Son güncelleme: 11 Eylül 2026
Doğrulanan Git başlangıç noktası: `268dfa3` — `Fiyatlandırma yeni versiyon`

Bu belge, Rent Okey web sitesinde yapılacak bir sonraki geliştirmeden önce okunması gereken ana bağlam dosyasıdır. Yalnız mevcut ekranları anlatmaz; ürünün ne olduğu, sitenin ziyaretçiyi hangi sırayla ikna ettiği, hangi kararların neden alındığı, hangi vaatlerin doğrulandığı ve hangi alanların henüz prototip olduğu burada ayrıştırılır.

## İki dil — 10 Eylül 2026

Türkçe adresler değişmedi; dosyalar `src/app/(tr)` route grubuna taşındı. İngilizce satış akışı `src/app/en` altında: `/en`, `/en/pilot`, `/en/free-trial`, `/en/privacy`, `/en/terms`. İki ayrı kök layout sayesinde sunucudan doğru HTML dili gelir; root layout'u tekrar en üste taşıyıp bütün sayfalara `lang=tr` uygulamayın. API, robots, sitemap ve ikon adresleri değişmedi.

Header/Footer/Logo/WhatsApp, ContactForm, TrialOnboarding, TurnstileWidget, FaqAccordion ve ana sayfadaki bütün satış bileşenleri dil parametresiyle ortaktır. `/en` Türkçe ana sayfanın kısaltılmış bir çevirisi değildir: iki dil de aynı 11 bölümü aynı sırada, aynı ürün demosu ve fiyat hesaplayıcısıyla gösterir. İngilizce form metinleri `lib/form-copy.ts`, iki dildeki gruplu SSS içeriği `lib/faq.ts` içindedir. Pilot demosu ve fiyat hesaplayıcısı aynı `pilot-demo.ts` ve `pricing.ts` verilerini/hesaplarını kullanır. Dil başına farklı ticari hesap veya API eklemeyin.

Kullanıcı İngilizce destek verildiğini teyit etti. Uygulama arayüzünün veya doğrulama e-postasının İngilizce olduğu ayrıca teyit edilmedi; web dilini backend'e tanımsız bir alan olarak göndermiyoruz. Destek: TR/EN, her gün 09.00–22.00 Türkiye saati. İngilizce blog merkezi `/en/blog` adresinde açıldı; ilk eşleşen içerik `/blog/arac-teslim-iade-surecini-dijitallestirmek` ile `/en/blog/digitise-car-rental-handover-return-process` çiftidir. Diğer beş Türkçe blog yazısı ve kılavuzlar henüz çevrilmedi; karşılığı olmayan sayfalara sahte dil alternatifi eklenmemelidir. Yasal sayfalar mevcut Türkçe metnin çevirisidir; yeni uluslararası mevzuat uyum iddiası içermez ve yayın öncesi hukuk kontrolü önerilir.

`locale.ts` karşılıklar için tek kaynaktır. Yeni çevrilen sayfayı dil seçici, canonical/hreflang ve sitemap eşleştirmesine dahil edin. Eksik çevirilere sahte hreflang vermeyin. Ayrıntılı doğrulama ve sınırlar `DEVAM_NOTLARI.md` içindedir.

## Güncel demo ve kapsam notu — 7 Eylül 2026

Hero artık üç kısa önizleme sekmesi sunar. Ayrıntılı 70 araçlık demo, ürün bölümünde `FleetDemo.tsx` ile çalışır: plaka/sınıf/şube/durum filtreleri, gruplama ve onaylı örnek çakışma çözümü. Canlı operasyon verisi kullanılmaz.

Pilot'ın sayısal tek kaynağı `src/lib/pilot-demo.ts`, etkileşimi `PilotDemo.tsx` dosyasıdır. Yeni 7 günlük örnek: ₺44.800 korunabilecek rezervasyon + ₺11.040 koşullu yeni kiralama = ₺55.840 potansiyel. Başlangıç ₺168.000, tüm varsayımlar gerçekleşirse ₺223.840. ₺18.400 açık alacak ayrı tutulur. Eski ₺6.900 örneğini tekrar kullanma. Brüt rezervasyon tutarı net kâr değildir; kazanç garantisi verilemez.

Akıllı fiyat önerisi Pilot kapsamındadır; ayrı modül olarak satılmaz. Pilot'ın fiyatı/deneme kapsamı ile pasif araç faturalama kuralı henüz belirlenmedi; varsayım yayımlama. Ayrıntılı güncel kararlar `DEVAM_NOTLARI.md` son bölümündedir.

Ana sayfa ürün anlatımı 10 Eylül'de sadeleştirildi; fakat görsel kanıt kaldırılmadı. Ayrıntılı program sayfası geniş operasyon merkezi örneğini, rezervasyon takvimi sayfası ise `FleetDemo.tsx` ile 70 araçlık etkileşimli çizelgeyi gösterir. `FleetDemo`yu tekrar ana sayfaya taşımayın; ayrıntılı büyük filo etkileşimini ürün sayfasında tutarak ana açılış yükünü sınırlayın.

İki ürün SEO sayfasında hero ikincil CTA'sı karşı ürüne değil, aynı sayfadaki `#product-demo` geniş örneğine gider. Karşılıklı ürün bağlantıları daha aşağıdaki ilgili ürün bölümünde kalır. Program sayfasının hero kanıtı çok şubeli 70+ araç ölçeğini, takvim sayfasının hero kanıtı rezervasyon oluşturma/araç değiştirme/çakışma çözme işini anlatır. Her iki davranışın İngilizce karşılığı aynı veri modelinde tutulur.

Kullanıcı gerçek ürün görünümünü referans gösterdikten sonra ana sayfadaki ürün kanıtı güçlendirildi. `ProductOverviewSection` başlığı yeniden “Ürünün kalbi · Tek operasyon akışı” oldu ve `HomeOperationDemo.tsx` eklendi. Bu demo gerçek uygulamaya yakın açık renkli çalışma yüzeyinde 20 örnek aracı üç görünümde sunar: Operasyon merkezi, Rezervasyon zaman çizelgesi ve Filo ve finans. Varsayılan görünüm 14 günlük çizelge ile bugünkü operasyon kuyruğudur. Arama, sınıf/durum filtresi ve örnek rezervasyon seçimi çalışır. Ayrıca örnek bir araç çakışması için uygun aynı sınıf/şube aracı gösterilir; kullanıcı onay vermeden atama değişmez ve tarihler/fiyat korunur. Tamamı sentetik veridir; gerçek uygulamaya istek göndermez. Demo altındaki tekrar eden iki büyük ürün kartı kaldırılmış, SEO ürün sayfalarına iki sade metin bağlantısı korunmuştur. Bu 20 araçlık ana sayfa demosunu, ürün detay sayfasındaki ayrı 70 araçlık büyük filo kanıtıyla karıştırmayın.

## 1. Otuz saniyelik özet

- Bu repo **Rent Okey pazarlama ve satış web sitesidir**. Çalışan Rent Okey SaaS uygulamasının frontend reposu değildir.
- Hedef müşteri Türkiye ve KKTC’de faaliyet gösteren araç kiralama firmalarıdır.
- Ana değer önerisi: **“Operasyonu yönetin. Yoğunluğu değil.”**
- Ürünün farkı yalnız kayıt tutması değil; teslim, iade, araç planı, ödeme, belge, bakım ve bağlamsal riskleri aksiyona dönüştürmesidir.
- Ana dönüşüm hedefi `/ucretsiz-dene` sayfasındaki **21 günlük, kredi kartsız deneme** akışıdır.
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
4. **RentOkey Pilot:** riski uygulanabilir, etkisi ölçülebilir ve kullanıcı onaylı bir operasyon planına dönüştürür. Aktif üründür; taban aboneliğe dahil olmayan opsiyonel ek paket olarak satılır.

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
- Müşteri ve sürücü kayıtlarını canlı arama, rezervasyonla birlikte otomatik oluşturma ve isteğe bağlı kimlik/ehliyet bilgileri
- Benzersiz `ROK-00001` biçiminde rezervasyon numarası ve taslak kayıt
- Markalı Rezervasyon Onay Belgesi; WhatsApp, e-posta ve PDF paylaşımı
- Müşteri, rezervasyon, filo, gider ve bakım kayıtlarını Excel/CSV ile içeri aktarma
- Hatalı satırları yükleme öncesi doğrulama, eksik alanları toplu tamamlama ve son içe aktarmayı geri alma
- Excel dışa aktarma
- Bakım maliyetini otomatik giderleştirme ve tekrarlayan gider şablonları
- Genel arama ve merkezi bildirim paneli
- Yeni firmalar için 8 araçlık örnek filo
- Masaüstü, tablet ve mobil kullanım
- Pozisyona göre sayfa yetkilendirmesi
- Önerilen odak
- RentOkey Pilot operasyon optimizasyonu — aktif, opsiyonel ek paket

### Yetki yapısı

Arayüzde toplam beş seçenek görünür; doğru anlatım **bir ana rol ve dört operasyon pozisyonu** şeklindedir:

1. Sistem Yöneticisi — ana rol
2. Şube Müdürü
3. Saha / Müşteri Temsilcisi
4. Teknik & Operasyon
5. B2B / Kurumsal Ortak

Rol ve sayfa yetkilendirmesi bütün paketlerde aynı ürün altyapısının parçasıdır; pratik kullanım paket kullanıcı limitiyle sınırlıdır. Başlangıç paketi 1 kullanıcı içerdiği için ekip rolleri ancak kullanıcı limiti artırıldığında anlamlı hâle gelir. Sistem işlemleri denetim amacıyla kaydeder; kullanıcıların inceleyebileceği ayrıntılı aktivite ekranı yol haritasındadır.

### Önerilen odak nasıl anlatılmalı?

Önerilen odak klasik teslim/iade veya belge alarmından farklıdır. Rezervasyon, ödeme, araç, lokasyon ve zaman verilerini birlikte değerlendirerek ekibin normal listelerde fark etmesi zor durumları öne çıkarır.

Onaylı anlatım örnekleri:

- Kiralama başladı ama ödemenin bir bölümü alınmadı; bakiye bekliyor.
- Aynı araçta arka arkaya iki rezervasyon var; temizlik veya transfer için yeterli süre yok.
- Teslim yaklaşıyor ama rezervasyona henüz araç atanmadı; uygun araç önerisi hazır.

Özelliği “kendi başına karar veren yapay zekâ” şeklinde anlatma. Kullanıcıya karar ve aksiyon hazırlığı sağlayan bağlamsal öneri sistemi olarak konumlandır.

### RentOkey Pilot nasıl anlatılmalı?

Önerilen Odak yaklaşan riski görünür kılar; RentOkey Pilot ise bir sonraki operasyon için çözüm planını hazırlar. Rezervasyon, araç, bakım, tahsilat, lokasyon ve hazırlık süresini birlikte değerlendirir. Her öneride sorun, çözüm, gerekçe ve tahmini finansal/operasyonel etki bulunur.

Pilot'ın pazarlama sitesindeki güncel kapsam kaynağı `src/lib/pilot-rules.ts`, sunumu `PilotRulesSection.tsx` dosyasıdır. On kural dört grupta gösterilir: operasyon sürekliliği; şube ve ekip kapasitesi; gelir ve yenileme fırsatları; filo sağlığı ve maliyet kontrolü. Kurallar **uygulanabilir öneri**, **kontrol listesi** veya **bilgilendirme** olarak etiketlenir. Bilgilendirme kuralları otomatik aksiyon üretmez. Serbest metin operasyon simülatörü aktif özellik listesine karıştırılmaz; yalnızca “Yakında · LLM destekli” etiketiyle gösterilir.

- Pilot aktif ve kullanıma hazır bir ek pakettir.
- Araç sayısına göre hesaplanan taban fiyata dahil değildir; ayrıca satın alınır.
- Kullanıcı önerileri tek tek seçer ve son onayı verir.
- Kullanıcı onayı olmadan araç ataması, saat veya görev değiştirilmez.
- Finansal etkiler mevcut verilerden hesaplanan tahminlerdir; garanti edilen kazanç gibi anlatılmaz.
- İlk kapsam: yetersiz hazırlık süresi, araçsız/yanlış sınıflı rezervasyon, bakım çakışması, teslim öncesi eksik tahsilat ve uzun süre boşta kalan araç.

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
- ürünün tamamını değil, satın alma kararını etkileyen dört ana senaryoyu gösterir.

Demo sekmeleri:

1. Bugünkü operasyon
2. Planlama
3. Önerilen odak
4. RentOkey Pilot

Masaüstü ve mobil sahneler aynı iş mantığını farklı yerleşimlerle anlatır. Mobilde zaman çizelgesi küçültülmez; tarih ve hızlı aksiyon akışına dönüşür.

Hero dönüşüm hiyerarşisi 1280×720 görünümünde ana aksiyonu kaydırmadan gösterecek biçimde kuruludur. Kısa açıklamanın hemen altında yalnızca **21 gün ücretsiz deneyin** CTA'sı bulunur. Aynı görünümdeki ürün demosuna tekrar bağlantı veren ikincil CTA kullanılmaz. CTA'nın altında “Kredi kartı yok · Kurulum ücreti yok · İlk 48 saatte ücretsiz Excel / CSV aktarım desteği” güven satırı bulunur. Varsayılan Bugünkü operasyon sahnesi, önerilen odak özelliğini ayrıca sekme değiştirmeyi gerektirmeden 35 dakikalık hazırlık ve transfer riskiyle görünür kılar.

### Aşama 4 — Ürün vaadinin sadeleştirilmesi

Site “çok özellik” anlatımından “daha az operasyon yükü” anlatımına taşındı. Ana mesajlar:

- Beş ayrı araç değil, tek operasyon akışı.
- Sorun oluşmadan haberdar olun.
- Filo büyürken düzeni koruyun.
- Ofis ve saha aynı akışta çalışsın.
- Takvime yazılmayan riski de görünür kılın.

### Aşama 5 — Gerçek deneme ve dönüşüm kurgusu

Deneme süreci Netflix/Vercel benzeri hızlı başlangıç fikrinden esinlendi; fakat kredi kartı alınmadığı için otomatik ödeme mantığı yoktur.

- 21 gün ücretsiz
- Kredi kartı gerekmez
- Kurulum ücreti yok
- Deneme hesabı açıldıktan sonraki ilk 48 saat içinde ilk Excel / CSV aktarımı için ücretsiz destek talep edilebilir
- Kullanıcı ister 8 araçlık örnek filoyla keşfeder, ister kendi müşteri, araç ve rezervasyonlarıyla dener
- Deneme bitince otomatik ödeme alınmaz
- Devam edecek kullanıcı paketini sonradan seçer

`/ucretsiz-dene` başlangıçta iki adımlı onboarding olarak tasarlandı; daha sonra sürtünmeyi azaltmak için tek adımlı gerçek hesap başvurusuna dönüştürüldü. Web sitesi ad-soyad, e-posta ve şifreyi uygulamanın kayıt API'sine gönderir. Hesap sunucu tarafında oluşturulur, doğrulama e-postası `mail.rentokey.com` üzerinden iletilir. Firma adı ve filo büyüklüğü e-posta doğrulamasından sonra uygulamada alınır.

### Aşama 6 — Araç bazlı fiyatlandırma ve ek modül ayrımı

Sabit Başlangıç/Büyüme/Profesyonel paketleri yerine araç sayısına göre kademeli fiyatlandırmaya geçildi. Tüm filolar aynı temel özellik setini kullanır; kilitli üst paket yoktur. RentOkey Pilot ve diğer opsiyonel ek modüller taban fiyata dahil değildir. Kurumsal Destek ise araç sayısından bağımsız, isteğe bağlı hizmet olarak sunulur.

### Aşama 7 — Marka varlıklarının temizlenmesi

- PNG tabanlı logo kullanımı yerine resmî outlined SVG setine geçildi.
- Header için slogansız logo kullanıldı.
- Footer’da sloganlı beyaz kilit korundu.
- Slogansız yatay logoda ikon 36 iç SVG birimi yukarı alınarak kelime işaretiyle optik olarak hizalandı.
- `og.png`, tarayıcı ikonu ve Apple ikonu resmî varlıklardan yeniden üretildi.

### Aşama 8 — Teknik SEO ve indeks kalitesi

- Sayfa başlıkları, açıklamalar, canonical adresler, Open Graph ve Twitter kartları merkezi bir metadata yardımcısında toplandı.
- Ana sayfaya Organization, WebSite ve SoftwareApplication türlerinde JSON-LD yapılandırılmış veri eklendi.
- Resmî LinkedIn şirket profili footer’da görünür bağlantı olarak sunuluyor ve Organization JSON-LD içindeki `sameAs` alanıyla marka varlığına bağlanıyor.
- `robots.txt` ve `sitemap.xml` Next.js metadata route'larıyla üretiliyor.
- ChatGPT arama özelliklerinde görünürlük için `OAI-SearchBot` tarayıcısına `robots.txt` içinde açıkça izin veriliyor. Bu arama tarayıcısı kuralı, model eğitimiyle ilgili `GPTBot` tercihinden bağımsız ele alınıyor.
- Claude arama görünürlüğü ve kullanıcı tarafından başlatılan sayfa erişimi için `Claude-SearchBot` ile `Claude-User` açıkça izinli. Pazarlama sitesinin herkese açık içeriğinin Anthropic model geliştirme süreçlerinde kullanılabilmesi için `ClaudeBot` da izinli; bu tercih arama erişiminden ayrı değerlendiriliyor.
- Standart üretim adresi `https://www.rentokey.com`; apex alan adı kalıcı yönlendirmeyle `www` sürümüne taşınıyor. Canonical, sitemap, robots, Open Graph ve JSON-LD aynı merkezi `SITE_URL` değerinden üretiliyor.
- Sitemap aramada sunulmaya hazır `/`, `/ucretsiz-dene`, `/okey-pilot`, `/kaynaklar`, `/blog` ve yayındaki blog yazılarını içeriyor. Statik sayfa güncellemeleri ile blog yayın/değişiklik tarihleri ayrı tutuluyor.
- İngilizce blog merkezi ve ilk İngilizce makale 11 Eylül 2026'da eklendi. Blog listesi ile makale canonical, karşılıklı `hreflang`, `BlogPosting` ve `BreadcrumbList` JSON-LD, İngilizce Open Graph bilgileri, dil değiştirici, header/footer bağlantıları ve sitemap girdileriyle birlikte yayınlanır. İngilizce içerik `src/lib/blog-en.ts`; İngilizce liste ve detay rotaları `src/app/en/blog` altındadır.
- Yer tutucu içerikler ve uzman onayı bekleyen yasal metinler `noindex, follow` durumunda. Gerçek içerik tamamlandığında metadata ve sitemap birlikte güncellenmeli.
- Hero'nun görünen metninde Türkiye, KKTC ve araç kiralama programı bağlamı doğal biçimde açıklandı.
- Google Search Console alan adı mülkü ve Bing Webmaster Tools doğrulandı; sitemap iki panele de gönderildi. Yeni sitemap yayına çıktıktan sonra keşfedilen URL sayısı tekrar kontrol edilmeli.

### Aşama 9 — RentOkey Pilot'ın aktif ek paket olarak konumlandırılması

RentOkey Pilot tamamlanmış ürün davranışı olarak siteye eklendi. Ana sayfada Önerilen Odak bölümünün hemen arkasında yer alır: önce riskin nasıl fark edildiği, ardından Pilot'ın bu riski nasıl çözüm planına çevirdiği anlatılır. Hero demosunda ayrı sekmesi, fiyatlandırmada taban fiyattan ayrı aktif ek paket kartı, ek modüller alanında kapsam bağlantısı ve `/okey-pilot` adresinde indekslenebilir ürün sayfası bulunur. SSS, yapılandırılmış veri, navigasyon ve sitemap aynı konumlandırmayı kullanır.

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
| 7 | `PilotSection` | Risk için en iyi çözümü kim hazırlayacak? | RentOkey Pilot'ın çözüm, etki ve kullanıcı onaylı uygulama farkını gösterir. |
| 8 | `ReservationFlowSection` | Müşteriden onaya kadar süreç nasıl ilerliyor? | Canlı müşteri tanıma, otomatik rezervasyon numarası, taslak ve paylaşılabilir onay belgesini anlatır. |
| 9 | `HowItWorks` | Başlamak zor mu? | Hesap, örnek filo/veri aktarımı, ekip ve gerçek operasyon olmak üzere dört adımlı denemeyi açıklar. |
| 10 | `PricingSection` | Bana uygun maliyet ne? | Araç bazlı taban fiyatı, dahil temel özellikleri ve ayrı satın alınan ek paketleri gösterir. |
| 11 | `HakkimizdaSection` | Ürün yerel operasyonumu anlıyor mu? | Türkiye/KKTC’ye özgü belge, lokasyon, süre ve ekip gerçeklerini anlatır. |
| 12 | `AddonModulesSection` | Taban ürüne başka ne ekleyebilirim? | Pilot’a kısa bağlantı verir; akıllı fiyat önerisi dışındaki ek modülleri kompakt sunar. |
| 13 | `FaqSection` | Satın alma öncesi itirazlarım ne olacak? | Deneme, ödeme, fiyat, cihaz, aktarım, Pilot ve yetki sorularını cevaplar. |
| 14 | `IletisimSection` | Biriyle görüşebilir miyim? | Paket, geçiş, ek modül ve kurulum sorularını gerçek iletişim API'sine gönderir. |
| 15 | `CtaBanner` | Şimdi ne yapmalıyım? | Son kez deneme veya ekip görüşmesi seçeneği sunar. |
| 16 | Footer | Kurumsal ve yasal bilgilere nasıl ulaşırım? | Marka, iletişim, içerik ve yasal bağlantıları kapatır. |

### Dönüşüm mantığı

Ana dönüşüm yolu:

`Hero / Header / Fiyatlandırma / Final CTA` → `/ucretsiz-dene` → aynı origin `/api/kayit-ol` → `app.rentokey.com/api/kayit-ol` → `mail.rentokey.com` doğrulama e-postası → uygulama onboarding

İkincil dönüşüm yolu:

`Fiyatlandırma / SSS / İletişim` → iletişim formu → `app.rentokey.com/api/iletisim-formu-gonder` → Rent Okey ekibine gerçek talep

### SSS bilgi mimarisi

SSS tek uzun liste değildir; `src/lib/faq.ts` içinde üç kategori altında tutulur:

1. Deneme ve paketler
2. Ürün ve günlük kullanım
3. Veri güvenliği ve destek

`FaqGroupTabs` masaüstünde üçlü, mobilde yana kaydırılabilir kategori seçimi sunar ve yalnızca seçilen grubun sorularını gösterir. Veri güvenliği cevapları; AWS İrlanda (`eu-west-1`) veri konumu, HTTPS/TLS ve depolama seviyesi şifreleme, günlük ve 7 gün saklanan veritabanı yedekleri, firma hesabı ayrımı, aktivite geçmişi, Excel dışa aktarma ve doğrulanmış destek saatlerini içerir. Sistem belge dosyası saklamadığı için dosya yedekleme vaadi bulunmaz.

## 8. Fiyatlandırma ve ek paketler için tek doğru kaynak

Araç bazlı fiyat formülünün ana kaynağı `src/lib/pricing.ts` dosyasıdır. Sabit Başlangıç/Büyüme/Profesyonel paketleri artık güncel ticari model değildir.

| Bileşen | Güncel değer |
|---|---:|
| Aylık taban ücret | ₺390 |
| 1–15. araç | araç başı ₺140 |
| 16–40. araç | araç başı ₺100 |
| 41–80. araç | araç başı ₺75 |
| 81–150. araç | araç başı ₺65 |
| 150 araç üzeri | Özel teklif |
| Yıllık ödeme avantajı | %20 |

Kademeler marjinal hesaplanır; araç sayısı yeni banda geçtiğinde önceki araçların oranı değişmez. Fiyatlara KDV dahil değildir. 70 araç için aylık ₺7.240, yıllık aylık karşılık ₺5.792 ve yıllık toplam ₺69.504 gösterilir. Sayı girişi ve 70 araç hızlı seçimi vardır; yıllık döküm indirim sonrası tutarla eşleşir.

### Taban fiyata dahil temel ürün

- Rezervasyon ve zaman çizelgesi
- Müşteri ve sürücü yönetimi
- Otomatik uygun araç önerisi
- Önerilen Odak ve bağlamsal riskler
- Filo, teslim ve iade
- Mobil operasyon
- Bakım ve belge süresi uyarıları
- Gider, tahsilat ve yönetim raporları
- Sınırsız kullanıcı ve şube; rol ve sayfa bazlı yetkilendirme
- Excel / CSV içe ve dışa aktarma
- Genel arama, merkezi bildirimler ve rezervasyon onay belgesi

### Taban fiyata dahil olmayanlar

- **RentOkey Pilot:** aktif, ayrıca satın alınan operasyon optimizasyonu ve akıllı fiyat önerisi ek paketi
- Diğer ek modüller: yalnız ihtiyaç halinde ayrı kapsam ve fiyatla eklenir
- **Kurumsal Destek:** ürün özelliği değil; araç sayısından bağımsız isteğe bağlı ek hizmettir

“Tüm özellikler dahil” ifadesi tek başına kullanılmamalıdır; doğru ifade **“Tüm temel özellikler dahil”** olmalıdır. Böylece Pilot'ın ek paket konumu bulanıklaşmaz.

Fiyat veya ek paket anlatımı değiştiğinde şunları birlikte güncelle:

- `src/lib/pricing.ts`
- `src/components/PricingSection.tsx`
- `src/components/home/AddonModulesSection.tsx`
- `src/lib/faq.ts`
- `src/lib/structured-data.ts`
- `/ucretsiz-dene` ve iletişim formundaki filo aralıkları

## 9. Deneme, ödeme ve iletişim gerçeği

### `/ucretsiz-dene`

Mevcut durum:

- ad/soyad, e-posta ve şifre alır,
- sözleşme ve gizlilik onayı ister,
- `signup-form` action'lı Cloudflare Turnstile doğrulaması ister,
- tarayıcıdan aynı origin `POST /api/kayit-ol` route'una `email`, `password`, `fullName`, `locale` ve `turnstileToken` gönderir,
- aynı origin route, doğrulanmış alanları sunucu tarafında `https://app.rentokey.com/api/kayit-ol` endpoint'ine iletir,
- hesabı uygulama sunucusunda oluşturur; tarayıcıya session dönmez,
- doğrulama e-postasını `mail.rentokey.com` üzerinden gönderir,
- gerçek servis cevabı gelmeden başarı ekranı göstermez,
- `ok` ve `error` alanlarına göre gönderim, hata ve tekrar deneme durumlarını yönetir.

Uygulama API'si Turnstile tokenını `Siteverify` ile doğrular; production'da yalnız `rentokey.com`, `www.rentokey.com` ve `app.rentokey.com` hostname'lerini ve tam `signup-form` action'ını kabul eder. `patch_v101.sql` ile e-posta başına saatte 3, IP başına saatte 50 girişsiz kayıt denemesi atomik olarak sınırlandırılır. IP sınırının daha geniş tutulma nedeni pazarlama sitesinin aynı-origin route'unun uygulama API'sine sunucu tarafında proxy yapmasıdır; ziyaretçi-IP seviyesindeki ilk sınır Vercel/Cloudflare WAF'ta uygulanmalıdır. Ham IP/e-posta hız tablosunda saklanmaz, HMAC özetleri iki gün sonra mevcut günlük temizlik işiyle silinir.

### Üretim DDoS ve Vercel Firewall yapılandırması

2026-09-11 itibarıyla `rentokey.com`, Cloudflare DNS/proxy arkasında değildir;
site doğrudan Vercel üzerinden yayınlanır. Cloudflare bu mimaride yalnız
Turnstile widget'ı ve `Siteverify` doğrulaması için kullanılır. Sırf DDoS
koruması amacıyla Cloudflare'a `Add domain` yapıp nameserver taşınmamalıdır;
bu işlem MX, SPF, DKIM, DMARC ve diğer DNS kayıtlarının ayrıca güvenli biçimde
aktarılmasını gerektiren bağımsız bir altyapı değişikliğidir.

Her iki Vercel projesinde platformun otomatik `System Mitigations`/DDoS
koruması aktiftir. Buna ek olarak production'a yayınlanan özel kurallar:

- `rentokey-car-app` (`app.rentokey.com`): `Request Path starts with /api/`,
  IP başına sabit pencerede 60 saniyede 60 istek; aşımda HTTP 429.
- `rentokey-web` (`www.rentokey.com`): yalnız `Request Path equals
  /api/kayit-ol`, IP başına sabit pencerede 600 saniyede 10 istek; aşımda
  HTTP 429.

İletişim formu `app.rentokey.com/api/iletisim-formu-gonder` adresine doğrudan
gittiği için uygulama projesinin genel `/api/` kuralına tabidir. Pazarlama
sitesindeki `/api/kayit-ol` kuralı ise proxy'ye ulaşan gerçek ziyaretçi IP'si
üzerinden daha dar ilk sınırı uygular. `Bot Protection` global Challenge modu
şimdilik kapalıdır; meşru webhook/sunucu çağrıları envanteri çıkarılmadan
açılmamalıdır. SEO/GEO görünürlüğünü korumak için `AI Bots` izinli bırakılır.
`Attack Mode` yalnız aktif saldırı sırasında geçici olarak kullanılmalıdır.
Tek IP engellemeleri dağıtık saldırıya karşı ana yöntem değildir; düzenli
kontrol **Firewall > Overview** ekranındaki `Denied`/`Rate Limited` sayaçları
ve uygulamadaki 429 hata oranı üzerinden yapılır.

**Canlı doğrulama (2026-09-11):** `patch_v101.sql`, iki projenin Turnstile
değişkenleri ve uygulama projesindeki zorunlu signup doğrulaması etkinleştirildi.
İletişim formu başarıyla test edildi. Ardından
`https://www.rentokey.com/ucretsiz-dene` üzerinden hesap kaydı tamamlandı;
`rentokey-web` Vercel logunda `POST /api/kayit-ol` için HTTP 200 görüldü ve
doğrulama e-postası akışı tamamlandı. Böylece web kayıt formu, aynı-origin
proxy, uygulama API'si, Turnstile doğrulaması ve veritabanı hız sınırı birlikte
üretimde doğrulandı. Uygulamanın doğrudan `app.rentokey.com` kayıt ekranı da
ayrıca test edildi. İlk denemedeki Cloudflare `400020` hatasının Vercel'deki
public site key içinde küçük `l` yerine büyük `L` yazılmasından kaynaklandığı
canlı paket karşılaştırmasıyla bulundu; değer Cloudflare'dan yeniden
kopyalanıp uygulama yeniden deploy edildikten sonra test başarıyla tamamlandı.

Firma adı ve filo büyüklüğü e-posta doğrulamasından sonra `app.rentokey.com` içindeki onboarding akışında alınır. Web sitesi doğrudan Supabase istemcisi veya Supabase anahtarı kullanmaz. Şifre başarılı istekten sonra frontend state'inden temizlenir.

Deneme hesabını oluşturduktan sonraki ilk 48 saat içinde kullanıcı müşteri, rezervasyon, filo, gider veya bakım Excel / CSV dosyası için ücretsiz ilk aktarım desteği talep edebilir. Destek ekibi dosyanın yapısını kontrol eder, gerekli düzeltmeleri bildirir ve ilk aktarımın tamamlanmasına yardımcı olur. 48 saatlik süre aktarımın bitiş garantisi değil, destek talebinin oluşturulma penceresidir; tamamlanma süresi dosyanın kapsamına ve veri kalitesine göre değişebilir.

### Abonelik

Henüz gerçek checkout, kart saklama, abonelik başlatma, faturalandırma veya deneme bitiş otomasyonu bulunmaz. Kullanıcı kredi kartı vermediği için “21 gün sonunda otomatik ücretlendirme” sözü kullanılmamalıdır. Pazarlama sitesinde 21 gün vaadi kullanıldığı için canlı uygulamadaki gerçek deneme süresi de yayından önce 21 gün olarak doğrulanmalıdır.

### İletişim formu

`ContactForm`, `POST https://app.rentokey.com/api/iletisim-formu-gonder` endpoint'ine JSON gönderir. Konu, ad/soyad, e-posta, firma, telefon, filo büyüklüğü, mesaj, boş kalması gereken `website` honeypot alanı, `turnstileToken` ve seçili siteyi belirten `locale: "tr" | "en"` API sözleşmesiyle birebir eşleşir. Ziyaretçiye gönderilen onay e-postası `locale` dilinde hazırlanır; ekip bildirimi Türkçe kalır ve tercih edilen dili gösterir.

- Buton normal durumda “Mesajı gönder”, istek sürerken “Gönderiliyor…” gösterir.
- Başarılı yanıttan sonra form temizlenir ve “Mesajınızı aldık. En kısa sürede sizinle iletişime geçeceğiz.” mesajı gösterilir.
- `400` yanıtında API'nin döndürdüğü `field` alanı varsa ilgili forma odaklanılır.
- `429` için kullanıcıya özel hız sınırı mesajı gösterilir.
- Diğer hatalarda girilen bilgiler korunur ve yeniden deneme mümkündür.
- Form altında Gizlilik/KVKK metnine bağlantı bulunur.
- Eski `mailto:` ve “E-posta taslağını aç” davranışı kaldırılmıştır.
- `TurnstileWidget`, Cloudflare Turnstile'ı açık render yöntemiyle ve `contact-form` action'ıyla çalıştırır.
- Turnstile tokenları beş dakika geçerli ve tek kullanımlık olduğu için her gönderim denemesinden sonra widget sıfırlanır.

Pazarlama sitesinin Vercel ortamında yalnız public `NEXT_PUBLIC_TURNSTILE_SITE_KEY` bulunur. `TURNSTILE_SECRET_KEY` hiçbir koşulda bu repoya, tarayıcı koduna veya pazarlama sitesi ortam değişkenlerine eklenmez; yalnız `app.rentokey.com` iletişim API'sinin çalıştığı projede tutulur. API, Siteverify sonucunda `success`, beklenen `contact-form` action'ı ve izin verilen üretim hostname'lerini doğrulamalıdır.

Canlı API yalnız `https://rentokey.com` ve `https://www.rentokey.com` origin'lerini kabul eder. Bu nedenle gerçek gönderim testi üretim alan adında yapılmalıdır; localhost veya Vercel önizleme alan adından başarılı gönderim beklenmez.

## 10. Aktif rotalar ve içerik durumu

| Rota | Durum |
|---|---|
| `/` | Ana satış sayfası, aktif ana kurgu |
| `/ucretsiz-dene` | Uygulama kayıt API'sine bağlı tek adımlı hesap başvurusu ve e-posta doğrulama akışı |
| `/giris` | `https://app.rentokey.com` adresine yönlendirir |
| `/kaynaklar` | Kaynak merkezine giriş sayfası |
| `/blog` | Beş özgün araç kiralama operasyonu ve filo yönetimi yazısı yayında |
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

Ana sayfadaki `ComingSoonSection` şu konuları açıkça “Geliştiriliyor” olarak gösterir:

- Fotoğraflı hasar karşılaştırması
- Akıllı fiyat önerisi
- Mesajdan rezervasyon taslağı
- Dijital sözleşme ve imza
- Özel entegrasyon ve API

Bu alanlarda kesin yayın tarihi veya tamamlanmış özellik dili kullanılmamalıdır.

Aşağıdaki vaatler canlı üründe yeniden doğrulanmadan aktif satış metnine eklenmemelidir:

- Çevrimdışı çalışma ve otomatik senkronizasyon
- Dijital imza
- SSS'de doğrulanan HTTPS/TLS, depolama şifrelemesi, günlük veritabanı yedekleme ve 7 günlük saklama kapsamının ötesindeki ek güvenlik veya yedekleme vaatleri
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

- Sayfa sırası: `src/app/(tr)/page.tsx`, `src/app/en/page.tsx`
- Dil layout ve metadata: `src/app/(tr)/layout.tsx`, `src/app/en/layout.tsx`
- Tasarım tokenları: `src/app/globals.css`
- Header/footer navigasyonu: `src/lib/nav.ts`
- Paketlerin ana kaynağı: `src/lib/pricing.ts`
- SSS ana kaynağı: `src/lib/faq.ts`
- SSS kategori seçimi: `src/components/home/FaqGroupTabs.tsx`
- Hero ürün demosu: `src/components/DashboardMock.tsx`
- Kompakt ürün girişleri: `src/components/home/ProductOverviewSection.tsx`
- 20 araçlık ana sayfa operasyon demosu: `src/components/HomeOperationDemo.tsx`, `src/lib/home-operation-demo.ts`
- Paylaşılan hafif ürün önizlemeleri: `src/components/ProductPreviewScenes.tsx`
- Detay sayfalarındaki geniş ürün örnekleri: `src/components/ProductEvidenceSection.tsx`
- Yerel operasyon/güven özeti: `src/components/home/HomeTrustSection.tsx`
- Önerilen odak anlatımı: `src/components/home/FocusSection.tsx`
- RentOkey Pilot ana sayfa anlatımı: `src/components/home/PilotSection.tsx`
- RentOkey Pilot ürün sayfası: `src/app/okey-pilot/page.tsx`
- Ayrıntılı ürün anlatımı: `src/components/ProductSeoPage.tsx`, `src/lib/product-pages.ts`
- Fiyatlandırma ve karşılaştırma: `src/components/PricingSection.tsx`
- Deneme formu: `src/components/TrialOnboarding.tsx`
- Kayıt API istemcisi: `src/lib/trial-signup.ts`
- Sunucu tarafı kayıt aktarımı: `src/app/api/kayit-ol/route.ts`
- İletişim formu: `src/components/ContactForm.tsx`
- Turnstile widget'ı: `src/components/TurnstileWidget.tsx`
- Logo bileşeni: `src/components/Logo.tsx`
- OG üretimi: `scripts/build-og-card.mjs`
- Ortak SEO metadata'sı: `src/lib/seo.ts`
- Türkçe blog içeriği: `src/lib/blog.ts`, `src/app/(tr)/blog`
- İngilizce blog içeriği: `src/lib/blog-en.ts`, `src/app/en/blog`
- Yapılandırılmış veri: `src/lib/structured-data.ts`
- Yapılandırılmış veri çıktısı: `src/components/StructuredData.tsx`
- Tarama ve sitemap: `src/app/robots.ts`, `src/app/sitemap.ts`
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

1. `src/lib/features.ts` aktif ana sayfada kullanılmıyor ve dijital imza/şifreli-yedekli altyapı gibi yeniden doğrulanması gereken eski ifadeler içeriyor.
2. `ProductShowcase`, `ShowcaseCarousel` ve `ModuleRow` aktif ana sayfa akışında kullanılmıyor; eski ekran görüntüsü yaklaşımından kalan kod olabilir.
3. `_to_delete/old-logo-svgs/` aktif logo kaynağı değildir. Referans olmadığı doğrulandıktan sonra temizlenebilir.
4. `/guncellemeler` sayfasındaki çevrimdışı mod ve diğer kayıtlar canlı ürünle yeniden doğrulanmalıdır.
5. Altı Türkçe blog yazısından yalnız teslim/iade süreci yazısının İngilizce karşılığı yayındadır. Kalan beş yazı İngilizce arama niyetine göre uyarlanmalı; kılavuz yer tutucuları ise tamamlanana kadar `noindex` kalmalıdır.
6. Gizlilik ve kullanım şartları hukuk danışmanı tarafından doğrulanmamıştır ve bu nedenle şu an `noindex` durumundadır.
7. Deneme formunda Turnstile, `patch_v101.sql`, kalıcı hız sınırı ve iki Vercel WAF kuralı production'da aktiftir; web kayıt akışı 2026-09-11'de başarıyla test edildi. Bundan sonra `Rate Limited` ve gerçek kullanıcı 429 ölçümleri izlenmelidir.
8. Turnstile public site key iki projenin, secret key yalnız API projesinin Production ortamındadır; iletişim, web kayıt ve `app.rentokey.com` doğrudan kayıt gönderimleri uçtan uca doğrulandı.
9. Checkout, ödeme, abonelik ve faturalandırma akışı henüz yoktur.
10. RentOkey Pilot'ın ek paket fiyatı sitede sayısal olarak yayınlanmıyor; fiyatlandırma politikası netleşirse fiyat kartı, SSS ve yapılandırılmış veri birlikte güncellenmelidir.
11. GA4 web ölçüm altyapısı hazırdır ve `NEXT_PUBLIC_GA_MEASUREMENT_ID` tanımlandığında yalnız ziyaretçi onayı sonrasında çalışır. İlk ziyaret UTM/referrer/landing page bilgisi birinci taraf tarayıcı depolamasında saklanır; Google, Bing, ChatGPT, Claude, LinkedIn ve doğrudan trafik sınıflandırılır. `trial_cta_click`, `trial_form_start`, başarılı kayıt sonrası `sign_up`, `contact_form_start` ve `generate_lead` olayları web tarafında tanımlıdır. GA4 mülkünün oluşturulması, Measurement ID'nin Vercel'e eklenmesi, `sign_up` olayının önemli etkinlik yapılması, Search Console bağlantısı ve uygulama tarafındaki `email_verified` / `onboarding_completed` olayları henüz tamamlanmalıdır. Kaynağın hesap kaydıyla sunucu tarafında kalıcı eşleştirilmesi de uygulama API sözleşmesiyle birlikte yapılmalıdır.

## 16. Önerilen sonraki geliştirme sırası

### P0 — Satışın gerçekten tamamlanması

1. Yeni deployment sonrasında kayıt API'sini ve `mail.rentokey.com` doğrulama e-postasını gerçek alan adında uçtan uca test et.
2. Aynı origin kayıt route'unun uygulama endpoint'ine erişimini ve kararlı hata yanıtlarını deployment üzerinde doğrula.
3. Vercel WAF ve uygulama içi API rate limit değerlerini izle; gerçek kullanıcı 429 oranı yükselirse sınırları kontrollü biçimde ayarla. Turnstile zaten kayıt ve iletişim formlarında aktiftir.
4. Deneme sonrası paket seçimi, checkout, abonelik ve faturalandırma mimarisini kur.

### P1 — Lead ve ölçümleme

1. İletişim formunun Turnstile doğrulaması ve e-posta teslimini üretim alan adında uçtan uca test et.
2. GA4 mülkü ve web veri akışı oluştur; Measurement ID'yi Vercel'de `NEXT_PUBLIC_GA_MEASUREMENT_ID` olarak tanımla.
3. GA4'te web tarafında hazır olan `sign_up` olayını önemli etkinlik olarak işaretle; `trial_cta_click`, `trial_form_start`, `contact_form_start` ve `generate_lead` olaylarının DebugView/Realtime üzerinden geldiğini doğrula.
4. Uygulama tarafında `email_verified` ve `onboarding_completed` olaylarını kur ve web akışıyla aynı ölçüm planına bağla.
5. Pazarlama sitesi kayıt route'u ile uygulama kayıt API'sini `attribution` nesnesi kabul edecek şekilde birlikte genişlet ve kaynak bilgisini hesap kaydına kalıcı olarak bağla. Analitik servisine ad, e-posta, şifre veya başka kişisel veri gönderme.
6. Search Console ile GA4'ü ilişkilendir; kaynak/medium bazında deneme başlangıcı, e-posta doğrulama ve onboarding tamamlama raporları oluştur.
7. KVKK/çerez tercihi ve ölçümleme izinlerini hukuki metinlerle birlikte ele al; kullanıcı analitik izni vermediğinde sunucu tarafı birinci taraf attribution yaklaşımının kapsamını hukuk danışmanıyla doğrula.

### P1 — İçerik ve güven

1. Yasal metinleri uzmanla doğrula.
2. Gerçek müşteri onayı varsa vaka çalışması ve referans ekle.
3. Kalan beş Türkçe blog yazısını ticari değer sırasıyla İngilizce arama niyetine göre uyarla; kılavuz sayfalarını gerçek içerikle doldur veya yayından kaldır.

### P2 — Temizlik ve kalite

1. Kullanılmayan bileşen ve eski logo klasörlerini referans kontrolünden sonra temizle.
2. Erişilebilirlik, klavye gezinmesi ve performans taraması yap.
3. Gerçek içerikli sektör/özellik sayfaları oluşturulduğunda indeks ve sitemap politikasını genişlet.
4. Gerçek ürün galerisi gerekiyorsa yüksek çözünürlüklü ve anonim yeni sahneler üret.

### Sürekli — Güvenlik işletimi ve izleme

1. İlk 24 saat, ilk hafta ve sonrasında aylık olarak iki Vercel projesindeki
   `Denied`, `Rate Limited`, 429 ve 5xx ölçümlerini kontrol et; gerçek
   kullanıcı etkisi görülürse WAF sınırlarını kanıta göre ayarla.
2. Cloudflare Turnstile analytics'te başarısız çözüm oranını ve beklenmeyen
   hostname kullanımını aylık kontrol et. Secret değişiminden sonra yalnız
   `rentokey-car-app` ortamını güncelle ve yeniden deploy et.
3. Global Bot Protection açılmadan önce cron, webhook, e-posta bağlantısı ve
   diğer sunucudan sunucuya çağrıların envanterini çıkar; meşru çağrılar için
   gerekli bypass koşullarını belirle ve kontrollü test yap.
4. Aktif saldırı prosedürünü koru: Vercel Attack Mode'u geçici aç, trafik
   örüntüsünü kaydet, saldırı bittiğinde kapat ve kalıcı kural gerekip
   gerekmediğini olay sonrasında değerlendir.
5. Supabase Auth hız sınırlarını, yönetici hesaplarının MFA/parola durumunu,
   bağımlılık güvenlik güncellemelerini ve veritabanı yedeğinin geri
   yüklenebilirliğini periyodik olarak doğrula.
6. Her güvenlik olayında tarih/saat, etkilenen rota, trafik hacmi, Vercel ve
   Supabase bulguları, uygulanan önlem ve sonucu kısa bir olay kaydında tut.

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
- Hero’nun birincil CTA’sını 1280×720 masaüstü görünümünde kaydırmadan erişilebilir tut.
- Siteyi özellik deposuna çevirmeden operasyon sonucu anlat.
- Önerilen odağı ürünün ana farklılaştırıcısı olarak koru.
- 21 günlük denemeyi hızlı, kredi kartsız ve otomatik ödemesiz anlat.
- İlk 48 saatlik Excel / CSV aktarım desteğini talep penceresi olarak anlat; tamamlanma süresi garantisi verme.
- Türkiye ve KKTC yerel bağlamını görünür tut.
- Araç bazlı taban fiyatı ve sınırsız kullanıcı/şube kapsamını tutarlı göster; eski sabit paket dilini geri getirme.
- RentOkey Pilot'ı aktif ama taban fiyata dahil olmayan, kullanıcı onaylı ek paket olarak konumlandır.
- Yol haritasını mevcut özellik gibi sunma.
- Header’da slogansız optik hizalı logo, footer’da sloganlı kilit kullan.
- Mobilde masaüstünü küçültme; görev ve aksiyon akışını yeniden kur.
- Satış metninde yalnız doğrulanmış ürün davranışlarını kullan.
