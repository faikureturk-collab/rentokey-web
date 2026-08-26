# RentOkey Web Sitesi — Birleşik Değerlendirme ve Düzeltme Listesi

**Tarih:** 26 Ağustos 2026

**Kaynak:** Canlı site incelemesi + önceki düzeltme listesi

**Bakış açısı:** 40 araçlık filosunu yoğunluk içinde yöneten, satış temsilcisi beklemeden hemen deneyebileceği pratik bir sistem arayan işletme sahibi

**Ana hedef:** Ziyaretçiyi “ürün derdimi anlıyor” noktasından “verimi ve operasyonumu güvenle taşıyabilirim” kararına götürmek

---

## Genel Hüküm

RentOkey'in ana mesajı doğru probleme dokunuyor. “Operasyonu yönetin. Yoğunluğu değil.” başlığı; teslim, iade, araç atama, tahsilat ve hazırlık süresi riskleriyle desteklendiği için sahada karşılık buluyor. Kayıt akışı da satış görüşmesi zorunluluğu ve kredi kartı olmadan başlayabildiği için güçlü.

Asıl kayıp ürün anlatımında değil, kararın son metresinde yaşanıyor:

1. İlk ekranda deneme butonu normal dizüstü yüksekliğinde görünmüyor.
2. Gerçek müşteri, ekip ve ölçülebilir sonuç kanıtı yok.
3. Veri güvenliği, yedekleme, hizmet sürekliliği ve veri çıkışı yeterince açıklanmıyor.
4. 40 araçlık müşteri 31–70 araç paketine giriyor; gösterilen araç başı fiyat kendi gerçek maliyetini yansıtmıyor.
5. API ve özel entegrasyon yalnızca 71+ araç paketinde görünüyor.
6. CSV aktarımı vaat ediliyor ama şablon, çalışan kılavuz ve açık kurulum desteği bulunmuyor.

**Karar:** 40 araçlık işletmeci ücretsiz denemeyi açabilir; ancak entegrasyon, güvenlik, veri taşıma ve destek soruları cevaplanmadan yıllık ödeme yapmaz ve tüm operasyonunu sisteme bağlamaz.

---

## Önceki Listeyle Karşılaştırma — Düzeltilen Noktalar

| Önceki tespit | Yeni değerlendirme |
|---|---|
| “Sitede tek bir gerçek ürün ekranı/demo yok.” | Fazla sert ve eksik. Ana sayfada örnek verilerle çalışan üç sekmeli etkileşimli ürün demosu var. Sorun demonun çalışmaması değil; bunun gerçek uygulama mı, temsili prototip mi olduğunun belirsiz olması ve gerçek kullanıcı akışının video/ekran kanıtıyla desteklenmemesi. |
| “Canlı demo aynı sayfadaki kutuya gider, kullanıcı kandırılmış hisseder.” | “Canlı demoyu incele” bağlantısı gerçekten etkileşimli örnek alana götürüyor. Yine de “canlı demo” ifadesi kayıtsız kullanılabilen gerçek uygulama beklentisi yaratabilir. Metin “Etkileşimli ürün örneğini incele” olarak netleştirilmeli veya gerçek sandbox sunulmalı. |
| “Veri güvenliği hakkında hiçbir kelime yok.” | Doğru değil. Gizlilik politikasında şifreli bağlantı ve teknik/idari tedbirlerden söz ediliyor. Fakat bu tek genel cümle; barındırma, depoda şifreleme, yedekleme, 2FA, olay bildirimi ve veri silme/çıkarma ayrıntıları yok. |
| “40 araç için yıllık maliyet yaklaşık ₺71.000.” | Planlar karıştırılmış. Aylık plan 12 ay sürdürülürse ₺59.880 + KDV; yıllık plan ₺47.880 + KDV. KDV dahil rakam verilecekse güncel oran ve hangi ödeme planının hesaplandığı açıkça yazılmalı. |
| Ürün ekranı/video P0'ın ilk maddesi | Etkileşimli demo zaten güçlü bir başlangıç. İlk ekran CTA'sı, güven, veri taşıma ve fiyat şeffaflığı daha acil. Gerçek ekran/video P1'e alınmalı. |
| WhatsApp tek başına P0 | Faydalı ama çalışan iletişim formu ve açık yanıt süresi daha temel. WhatsApp bu maddenin hızlı iletişim kanalı olarak ele alınmalı. |
| “Önerilen odak” dili ana sorunlardan biri | Dil sadeleştirilmeli; fakat dönüşümü en çok kesen konu güven, paket uyumu ve başlangıç yüküdür. P1 olarak kalmalı. |

---

## Öncelik Özeti

| # | İş | Öncelik | Efor | Beklenen etki |
|---|---|---|---|---|
| 1 | Hero CTA'sını ilk ekrana taşı ve mesajı sıkılaştır | P0 | Düşük | Çok yüksek |
| 2 | Güvenlik, şirket ve müşteri kanıtı oluştur | P0 | Orta | Çok yüksek |
| 3 | Veri taşıma ve ilk kurulum yükünü RentOkey üstlensin | P0 | Orta | Çok yüksek |
| 4 | 40 araç için fiyatı ve paket geçişini dürüst göster | P0 | Orta | Çok yüksek |
| 5 | Entegrasyon/API durumunu açıkça göster | P0 | Orta | Çok yüksek |
| 6 | İletişim formunu çalıştır; hızlı destek kanalı ekle | P0 | Düşük | Yüksek |
| 7 | Etkileşimli demoyu doğru adlandır ve gerçek ürün kanıtıyla güçlendir | P1 | Orta | Yüksek |
| 8 | Deneme süresini veri kurulumu ve destekle ilişkilendir | P1 | Düşük-Orta | Yüksek |
| 9 | Boş Blog/Kılavuzlar görünümünü kaldır | P1 | Orta | Orta-Yüksek |
| 10 | “Önerilen odak” ve soyut ürün dilini sadeleştir | P1 | Düşük | Orta |
| 11 | Mobil kullanımın biçimini ve saha sınırlarını netleştir | P1 | Düşük | Yüksek |
| 12 | SSS, yasal metin ve destek taahhütlerini tamamla | P1 | Orta | Yüksek |
| 13 | Fotoğraflı teslim/iadeyi daha alt pakete indir | P2 | Ürün kararı | Yüksek |
| 14 | Yol haritasını günlük para ve zaman kaybına göre sırala | P2 | Ürün kararı | Yüksek |
| 15 | Ölçülebilir sonuç ve vaka çalışmaları üret | P2 | Orta-Yüksek | Çok yüksek |

---

# P0 — Yayına En Yakın Sprintte

## 1. Hero CTA'sını ilk ekrana taşı ve mesajı sıkılaştır

**Kanıt:** 1280×720 görünümde ana “14 gün ücretsiz deneyin” butonunun üst kenarı yaklaşık 722 px'de kalıyor; yani buton ilk ekranda görünmüyor. Başlık ve ürün görseli güçlü olsa da kullanıcıya yapılacak iş görünmeden kaydırma gerekiyor.

**Yapılacak:**

- Birincil CTA'yı başlık/alt başlık hizasında ve ilk ekranda görünür tut.
- Hero yüksekliğini, dikey boşlukları ve madde metinlerini kısalt.
- “14 gün ücretsiz deneyin” ana CTA olsun; “Etkileşimli ürün örneğini incele” ikincil kalsın.
- CTA yanında şu üç itirazı tek satırda koru: “Kredi kartı yok · Kurulum ücreti yok · Satış görüşmesi beklemeden başla”.
- ₺8.400 açık bakiye ve 35 dakikalık hazırlık süresi örneklerinden birini hero içinde görünür yap.

**Kabul kriteri:** 1280×720 masaüstünde başlık, kısa değer önerisi, ana CTA ve en az bir somut operasyon riski kaydırmadan görünür.

## 2. Güvenlik, şirket ve müşteri kanıtı oluştur

**Sorun:** Adres ve telefon var; fakat ekip, şirket unvanı, gerçek müşteri, kullanım rakamı ve vaka çalışması yok. Gizlilik politikası yalnızca şifreli bağlantı ve genel tedbirlerden söz ediyor. Kullanım şartları kesintisiz/hatasız hizmet garantisi vermediğini söylüyor; buna karşılık çalışma süresi hedefi açıklanmıyor.

**Yapılacak:**

### Güvenlik ve veri yönetimi sayfası

- Verinin tutulduğu ülke ve altyapı sağlayıcısı
- Aktarımda ve depoda şifreleme
- Yedekleme sıklığı, saklama süresi ve geri yükleme süreci
- 2FA durumu, rol/yetki yapısı ve aktivite geçmişi
- Olay/ihlal bildirim yöntemi
- Alt veri işleyenler ve KVKK rolleri
- Hesap kapanınca veri saklama/silme süresi
- Tüm veriyi CSV/Excel olarak dışarı alma yöntemi
- Çalışma süresi hedefi ve destek yanıt süreleri

### Şirket ve sosyal kanıt

- Kurucu/ekip isimleri, fotoğrafları ve sektör hikâyesi
- Şirketin tam ticari unvanı ve kurumsal iletişim bilgisi
- En az bir doğrulanabilir müşteri yorumu veya pilot vaka çalışması
- Varsa firma, araç ve işlenen rezervasyon sayıları

**Kabul kriteri:** Kullanıcı “Bunlar kim?”, “Verim nerede ve nasıl korunuyor?”, “Sistem kesilirse ne olacak?” ve “Benden önce kim kullanmış?” sorularının cevabını satış görüşmesi yapmadan bulabiliyor.

## 3. Veri taşıma ve ilk kurulum yükünü RentOkey üstlensin

**Sorun:** Kayıt formu kısa; asıl sürtünme kayıt sonrasında başlıyor. Site CSV aktarımı vaat ediyor ama indirilebilir şablon, kolon örneği ve çalışan kılavuz yok. Kılavuzlar sayfasındaki veri aktarma içeriği “Çok yakında”. Kurulum/veri aktarım desteği ise paket anlatımında yalnızca Kurumsal için açıkça yazılmış.

**Yapılacak:**

- En az Büyüme ve Profesyonel pakete “ilk filo kurulumu ve veri aktarım desteği” ekle.
- Araç, rezervasyon, müşteri, gider ve bakım için indirilebilir CSV/Excel şablonları yayınla.
- “Excel'inizi gönderin, uygun hale getirip ilk filonuzu birlikte kuralım” seçeneği sun.
- Güvenli dosya yükleme süreci ile hangi verinin kim tarafından görüleceğini açıkla.
- Deneme süresini veri aktarımı tamamlandığında başlat veya kurulum günlerini deneme dışında tut.
- İlk girişte örnek veriyle gezme ve kendi verisini yükleme seçeneklerini ayır.

**Kabul kriteri:** 40 araçlık müşteri, kayıt olmadan önce verisini kimin, nasıl ve kaç iş gününde taşıyacağını bilir.

## 4. 40 araç için fiyatı ve paket geçişini dürüst göster

**Sorun:** 40 araçlık firma Profesyonel pakete giriyor:

- Aylık: **₺4.990 + KDV**
- Aylık plan 12 ay kullanılırsa: **₺59.880 + KDV**
- Yıllık plan: ay karşılığı **₺3.990 + KDV**
- Yıllık plan toplamı: **₺47.880 + KDV**
- 40 araçta gerçek araç başı maliyet: aylık planda **₺124,75**, yıllık planda **₺99,75** + KDV

Kartta gösterilen “70 araçta araç başı yaklaşık ₺71/₺57” rakamı paketin üst sınırına göre hesaplanıyor ve 40 araçlık müşterinin maliyetini olduğundan düşük hissettiriyor. Ayrıca 30'dan 31 araca geçiş aylık fiyatı ₺2.890'dan ₺4.990'a çıkarıyor.

**Yapılacak:**

- Araç sayısı girilen fiyat hesaplayıcısı ekle.
- Kullanıcının kendi araç sayısına göre aylık toplamı ve araç başı maliyeti göster.
- 31–50 araç için ara kademe veya araç başına artan fiyat modeli değerlendir.
- Kullanıcı ve şube ek paketlerini ayrı fiyatlandırmayı değerlendir.
- KDV dahil/hariç görünümü ve aylık/yıllık toplamı açık etiketle.
- Paket yükseltme, yıl ortası fark ödeme, iptal ve iade kurallarını açıkla.
- ROI cümlesini abartısız ve hesaplanabilir yaz: “Tek bir boş gün veya tahsilat kaçağı önlendiğinde aylık bedelin ne kadarı karşılanır?”

**Kabul kriteri:** 40 yazan kullanıcı kendi gerçek tutarını görür; 70 araç üzerinden hesaplanmış birim fiyatı zihninden düzeltmek zorunda kalmaz.

## 5. Entegrasyon ve API durumunu açıkça göster

**Sorun:** Özel entegrasyon ve API erişimi yalnızca 71+ Kurumsal pakette listeleniyor. Oysa 40 araçlık işletmenin entegrasyon ihtiyacı araç sayısından bağımsızdır. Entegrasyonlar açıklanmadığında ürün, “tek operasyon merkezi” vaadine rağmen yeni bir veri adasına dönüşebilir.

**Yapılacak:**

- Ayrı bir “Entegrasyonlar” sayfası aç.
- Her başlık için **Mevcut / Geliştiriliyor / Planlanıyor / Yok** durumunu dürüstçe göster.
- API erişimini 31–70 araç paketinde ücretli eklenti veya sınırlı erişim olarak sunmayı değerlendir.
- Şu alanları açıkça cevapla:

| Alan | Sorulacak net soru |
|---|---|
| e-Fatura/muhasebe | Paraşüt, Logo, Mikro vb. ile veri tekrar giriliyor mu? |
| Ödeme/POS | Tahsilat, depozito ve ön provizyon nasıl işleniyor? |
| GPS/araç takip | Aracın konumu veya kilometresi alınabiliyor mu? |
| Ceza ve HGS | Ceza/geçiş gideri kiralamayla eşleştirilebiliyor mu? |
| Rezervasyon kanalları | Web sitesi, acente veya pazaryerinden kayıt alınabiliyor mu? |
| Sözleşme/e-imza | Kimlik, ehliyet ve sözleşme süreci nasıl ilerliyor? |
| SMS/WhatsApp | Teslim/iade hatırlatmaları gönderilebiliyor mu? |

**Kabul kriteri:** 40 araçlık müşteri, satın almadan önce hangi sistemlerle elle veri taşıyacağını ve API alıp alamayacağını bilir.

## 6. İletişim formunu çalıştır ve hızlı destek kanalı ekle

**Sorun:** İletişim formu mesajı göndermek yerine kullanıcının e-posta uygulamasında taslak açıyor. Tarayıcı tabanlı e-posta kullananlarda bu akış bozulabilir. Ayrıca geri dönüş süresi belirtilmiyor.

**Yapılacak:**

- Formu gerçek bir sunucu uç noktasına bağla.
- Sayfa içinde başarı/hata durumu göster.
- Talebi e-posta ve basit CRM kaydına düşür.
- “En geç X iş saati içinde dönüş” taahhüdü ekle.
- WhatsApp butonu veya canlı yazışma seçeneği ekle; çalışma saatlerini göster.
- İletişim kanalını satış görüşmesi zorunluluğuna dönüştürme; ücretsiz kayıt bağımsız kalsın.

**Kabul kriteri:** Kullanıcı e-posta uygulaması açmadan talep gönderir ve ne zaman cevap alacağını görür.

---

# P1 — Sonraki 2–4 Hafta

## 7. Etkileşimli demoyu doğru adlandır ve gerçek ürün kanıtıyla güçlendir

**Doğru olan:** Ana sayfadaki “Bugünkü operasyon / Planlama / Önerilen odak” sekmeleri çalışıyor ve örnek veriler değişiyor. Bu korunmalı.

**Eksik olan:** Kullanıcı bunun gerçek uygulamadan alınmış bir akış mı yoksa site için hazırlanmış temsili bir arayüz mü olduğunu anlayamıyor.

**Yapılacak:**

- Mevcut alan temsiliyse “Etkileşimli ürün örneği” olarak adlandır.
- Gerçek ürünse “Gerçek ürün ekranı · örnek veriler” ibaresi ekle.
- 60–90 saniyelik gerçek ekran kaydı yayınla: sabah kuyruğu, araç atama, teslim/iade, tahsilat riski.
- Beş ana modül için gerçek ekran görüntüleri ekle.
- Mümkünse kayıt gerektirmeyen, salt okunur sandbox sun.

## 8. Deneme süresini kurulum ve destekle ilişkilendir

- 14 günü veri kurulumu tamamlandığında başlat veya 30 günlük deneme seçeneğini test et.
- İlk girişte yapılacakları üç net iş olarak göster: araçları yükle, ilk rezervasyonu ekle, ekibi davet et.
- İsteğe bağlı 15 dakikalık kurulum görüşmesi sun; zorunlu satış görüşmesi yapma.
- Deneme sonunda otomatik ödeme alınmadığını, verinin kaç gün tutulduğunu ve nasıl dışarı alınacağını kayıt sayfasında göster.
- “Temel/öncelikli destek” ifadelerini kanal ve yanıt süresiyle tanımla.

## 9. Boş Blog ve Kılavuzlar görünümünü kaldır

**Sorun:** Blog'daki dört ve Kılavuzlar'daki altı başlığın tamamı “Çok yakında”. Bu, ürünün henüz hazır olmadığı izlenimini veriyor.

**Yapılacak:**

- İçerik hazır olana kadar bağlantıları navigasyondan kaldır; veya
- Önce şu üç içeriği gerçekten yayınla:
  1. 5 dakikada ilk kurulum
  2. Excel/CSV ile veri taşıma
  3. Mobil teslim ve iade akışı
- Yayınlanmamış içeriğe sahte okuma süresi gösterme.

## 10. “Önerilen odak” ve soyut ürün dilini sadeleştir

- İlk kullanımda açıkla: **“Önerilen odak: bugün önce çözmeniz gereken işler.”**
- “Bağlamsal risk” yerine “takvimde görünmeyen sorun” de.
- “Aynı veriyle ve aynı çalışma düzeniyle ilerler” yerine “herkes aynı ekrana bakar” de.
- “Operasyon ürünüdür” yerine “günlük işinizi yürüttüğünüz program” de.
- Aynı vaadi tekrarlayan uzun bölümleri kısalt.

## 11. Mobil kullanımın biçimini ve saha sınırlarını netleştir

- Native uygulama varsa mağaza linklerini ve gerçek mobil ekranları göster.
- Mobil web/PWA ise “telefon tarayıcısında çalışır, kurulum gerekmez” diye açıkça yaz.
- Çevrimdışı kullanım, fotoğraf yükleme, konum, imza ve zayıf bağlantı davranışını açıkla.
- “Mobil saha uygulaması” ifadesini ürünün gerçek biçimiyle tutarlı kullan.

## 12. SSS, yasal metin ve destek taahhütlerini tamamla

Şu sorulara açık cevap ekle:

- Sistemden ayrılırsam verilerimi hangi formatta alırım?
- Veriler hesap kapanınca kaç gün tutulur?
- İnternet veya sistem kesilirse saha ekibi ne yapar?
- Yedekten geri dönüş süresi nedir?
- Aylık ve yıllık plan nasıl iptal edilir?
- Yıllık ödemede iade veya paket yükseltme nasıl hesaplanır?
- Destek hangi saatlerde, hangi kanalda ve kaç saatte cevap verir?
- 2FA var mı?

Kritik üç cevabı açılır panel arkasında saklamadan fiyatlandırma/kayıt yanında da göster.

---

# P2 — Ürün ve Paket Kararları

## 13. Fotoğraflı teslim/iadeyi daha alt pakete indir

Temel fotoğraflı teslim, iade ve hasar kaydı küçük filolar için de günlük ihtiyaçtır. Temel kayıt Büyüme paketine indirilebilir; otomatik/karşılaştırmalı hasar analizi Profesyonel veya Kurumsal eklentisi olarak kalabilir.

## 14. Yol haritasını günlük para ve zaman kaybına göre sırala

Fotoğraflı hasar karşılaştırması ve akıllı fiyat önerisi değerlidir; ancak e-fatura, tahsilat/depozito, ceza-HGS, sözleşme/e-imza ve rezervasyon kanalı bağlantıları 40 araçlık işletmenin günlük tekrarını daha doğrudan azaltabilir. Yol haritası müşteri görüşmeleriyle bu sıraya göre yeniden doğrulanmalı; mümkünse çeyrek bazında hedef verilmelidir.

## 15. Ölçülebilir sonuç ve vaka çalışmaları üret

- 30–50 araçlık en az bir pilot müşteri seç.
- Önce/sonra şu göstergeleri ölç: boşta kalma günü, geciken teslim, eksik tahsilat, araç atama süresi, bakım gecikmesi.
- Sonucu müşteri adı, filo büyüklüğü ve gerçek ekranlarla vaka çalışmasına dönüştür.
- Kanıtlanmamış yüzde vaatleri kullanma; ölçüm yoksa örnek maliyet hesabı göster.

---

## Doğru Yapılmış Olanlar — Korunmalı

- **“Operasyonu yönetin. Yoğunluğu değil.”** hedef kitlenin derdini doğru yakalıyor.
- Etkileşimli üç sekmeli ürün örneği, yalnız metin anlatımından daha güçlü.
- Açık bakiye, araçsız rezervasyon ve 35 dakikalık hazırlık süresi örnekleri sahayı bildiğinizi gösteriyor.
- Kayıt akışı kısa: ad, e-posta, şifre; kredi kartı ve satış görüşmesi zorunluluğu yok.
- “Demo izlemeyin. Kendi filonuzla deneyin.” güçlü bir vaat.
- Türkiye + KKTC odağı, TRY fiyatlandırma, belge süreleri ve teslim noktaları yerel ihtiyaca uyuyor.
- Paketlerde kullanıcı/şube limitleri ve özellik karşılaştırma tablosu görünür.
- Aylık/yıllık fiyat seçimi ve yıllık toplamın gösterilmesi doğru yönde.

---

## Uygulama Sırası

İlk sprintte sıralama şöyle olmalı:

1. CTA'yı ilk ekrana al.
2. Fiyat hesaplamasını 40 araç için dürüstleştir.
3. Güvenlik/veri yönetimi sayfasını tamamla.
4. CSV şablonları ve kurulum desteğini yayınla.
5. Entegrasyon/API durum tablosunu yayınla.
6. İletişim formunu gerçekten çalıştır.

Bu altı iş tamamlanmadan daha fazla pazarlama metni veya yeni “çok yakında” içerik eklemek dönüşüm sorununu çözmez.
