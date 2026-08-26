# RentOkey Web Sitesi — Düzeltme Listesi

**Tarih:** 26 Ağustos 2026
**Kaynak:** www.rentokey.com incelemesi
**Bakış açısı:** 40 araçlık filo sahibi, operasyondan bunalmış, hızlı çözüm arıyor
**Hedef kitle notu:** Bu listedeki her madde "Büyüme–Profesyonel" segmentindeki (11–70 araç) karar vericiyi dönüştürmeye odaklıdır.

---

## Öncelik Özeti

| # | Madde | Öncelik | Efor | Beklenen Etki |
|---|-------|---------|------|----------------|
| 1 | Gerçek ürün ekran görüntüleri + demo videosu | P0 | Orta | Çok yüksek |
| 2 | "Verinizi biz taşıyalım" + CSV şablonu | P0 | Düşük | Çok yüksek |
| 3 | İletişim formunu gerçekten çalışır hale getir | P0 | Düşük | Yüksek |
| 4 | WhatsApp iletişim butonu | P0 | Çok düşük | Yüksek |
| 5 | Güven bloğu (KVKK, ekip, referans) | P0 | Orta | Çok yüksek |
| 6 | Fiyatlandırmada ara basamak + hesaplayıcı | P1 | Orta | Yüksek |
| 7 | "Önerilen odak" dilini sadeleştir | P1 | Düşük | Yüksek |
| 8 | Hero'ya somut senaryo ve sayı ekle | P1 | Düşük | Orta-Yüksek |
| 9 | Deneme süresi / başlangıç anını değiştir | P1 | Düşük | Orta |
| 10 | Boş Blog ve Kılavuzlar sayfaları | P1 | Orta | Orta |
| 11 | Entegrasyon sayfası (ceza/HGS, e-fatura, POS) | P1 | Yüksek | Çok yüksek |
| 12 | Fotoğraflı hasar kaydını Büyüme paketine indir | P2 | Ürün kararı | Yüksek |
| 13 | Mobil uygulama görünürlüğü | P2 | Düşük | Orta |
| 14 | Küçük güven sinyalleri (telefon, adres, SSS) | P2 | Çok düşük | Düşük-Orta |

---

# P0 — Bu Hafta Yapılacaklar

## 1. Gerçek ürün ekran görüntüleri ve demo videosu

**Sorun:** Sitede tek bir gerçek ürün ekranı yok. Gantt/zaman çizelgesi, teslim-iade ekranı, mobil saha ekranı hep temsili kutucuklarla anlatılmış. "Canlı demoyu incele" butonu `#hero-demo` çapasına gidiyor — yani kullanıcıyı aynı sayfadaki bir kutuya kaydırıyor. Bu bir demo değil, kullanıcıda "kandırıldım" hissi yaratıyor.

**Yapılacak:**
- Hero'nun hemen altına **gerçek ürün ekran görüntüsü** koy: 40 araçlık dolu bir Gantt, gerçek plakalar (anonimleştirilmiş), gerçek tarihler.
- **60–90 saniyelik ekran kaydı videosu**: kayıt gerektirmeden, sayfada oynasın. Senaryo: "Sabah 08:00 — bugün 6 teslim, 4 iade, 2 risk. Şu araç 35 dakikada dönmüyor." Konuşma değil, ekran + altyazı.
- "Canlı demoyu incele" butonunu ya **gerçek bir demo ortamına** (örnek veriyle dolu, kayıtsız girilebilen sandbox) bağla, ya da metnini değiştir: "Ürünü 90 saniyede izleyin".
- Her modül bölümüne (Planlama / Operasyon / Filo / Finans / Yönetim) o modülün **gerçek ekran görüntüsü**.

**Kabul kriteri:** Ziyaretçi kayıt olmadan, sayfadan ayrılmadan ürünün 5 ana ekranını görebiliyor.

---

## 2. Veri aktarımını sizin işiniz haline getirin

**Sorun:** Denemenin 2. adımı "CSV ile içeri aktarın". 40 araçlık bir firmanın verisi Excel + defter + ortağın kafası karışımıdır. Sezon ortasında bunu CSV'ye çevirecek zamanı yok. Üstelik **veri aktarım desteği yalnızca Kurumsal (71+ araç) pakette** yazıyor. Bu, sitenin en büyük dönüşüm kaybının olduğu nokta: kayıt kolay, kayıttan sonrası yorucu.

**Yapılacak:**
- **Her pakete** "ilk kurulum ve veri aktarım desteği" ekle ve bunu sitede öne çıkar. Metin önerisi: *"Excel'inizi bize gönderin, filonuzu biz sisteme kuralım. 1 iş günü."*
- **CSV şablonlarını indirilebilir yap:** araç listesi, rezervasyon, müşteri, gider, bakım. Deneme sayfasında ve SSS'te link olsun.
- Deneme akışındaki 4 adımı yeniden yaz. Şu anki 2. adım "Filonuzu ekleyin" → olması gereken: **"Filonuzu biz yükleyelim"**.
- Excel dosyası yükleyip "bunu bizim için hazırlayın" diyebileceği bir alan ekle.

**Kabul kriteri:** Kullanıcı deneme sayfasında "verimi kim, nasıl, ne kadar sürede taşıyacak" sorusunun cevabını görüyor.

---

## 3. İletişim formu gerçekten mesaj göndersin

**Sorun:** Form dolduruluyor ama "E-posta taslağını aç" diyor ve "Mesaj, siz onaylamadan gönderilmez" notu var. Yani form `mailto:` ile kullanıcının mail programını açıyor. Gmail'i tarayıcıdan kullanan kullanıcıda bu genellikle boş pencere açar veya hiçbir şey olmaz. Ayrıca arkada müşteri takip sistemi olmadığı izlenimi veriyor — operasyon yazılımı satan firma için kötü sinyal.

**Yapılacak:**
- Formu gerçek bir backend'e bağla (kendi API'niz, ya da hızlı çözüm olarak Formspree/Resend/HubSpot).
- Gönderdikten sonra **teşekkür ekranı** ve "en geç X saat içinde dönüş" taahhüdü.
- Gelen talep otomatik olarak bir yere düşsün (mail + basit CRM/Sheet).
- "Mesaj, siz onaylamadan gönderilmez" notunu kaldır — güven vermiyor, tereddüt yaratıyor.

**Kabul kriteri:** Formu doldurup gönderen kullanıcı, mail programı açılmadan, sayfada onay görüyor.

---

## 4. WhatsApp butonu

**Sorun:** Sitenin ana argümanı "WhatsApp kaosundan kurtulun" ama sizinle konuşmanın yolu e-posta ve cep telefonu. Türkiye ve KKTC'de işletme sahibi mail yazmaz, WhatsApp'tan yazar.

**Yapılacak:**
- Sağ altta sabit WhatsApp butonu (`wa.me` linki), ön-doldurulmuş mesaj: *"Merhaba, X araçlık filom var, Rent Okey hakkında bilgi almak istiyorum."*
- İletişim bölümüne ve fiyatlandırma bölümüne de WhatsApp seçeneği ekle.
- Çalışma saatleri ve ortalama yanıt süresi yaz.

**Kabul kriteri:** Ziyaretçi 1 tıkla WhatsApp'tan yazabiliyor.

---

## 5. Güven bloğu — sitenin en büyük eksiği

**Sorun:** Sitede tek bir referans, müşteri ismi, logo, yorum veya kullanım rakamı yok. Şirketin kim olduğu belli değil ("Hakkımızda" linkinin arkasında ekip/kurucu/hikâye yok). Veri güvenliği hakkında **hiçbir kelime geçmiyor**: KVKK, veri nerede saklanıyor, yedekleme, çıkışta veri iadesi, sistem çökerse ne olur. Kullanıcı bu sisteme müşterisinin kimlik ve ehliyet bilgisini girecek.

**Yapılacak:**

**5a. Güvenlik ve KVKK sayfası** (yazması en kolay, etkisi en yüksek eksik)
- Veri nerede barındırılıyor (ülke, sağlayıcı)
- Yedekleme sıklığı ve saklama süresi
- Şifreleme (aktarımda ve depoda)
- Erişim yetkileri ve aktivite kaydı
- KVKK uyumu, veri sorumlusu/işleyen ilişkisi, aydınlatma metni
- **Veri taşınabilirliği:** "İstediğiniz an tüm verinizi Excel/CSV olarak indirirsiniz, ayrılırsanız veriniz sizindir."
- Çalışma süresi (uptime) hedefi ve destek yanıt süreleri

**5b. Gerçek "Hakkımızda"**
- Kurucu(lar), ekip, isim ve fotoğraf
- Neden bu ürünü yaptığınız — sektör hikâyesi
- Şirket unvanı, vergi dairesi/no, gerçek ofis bilgisi

**5c. En az bir gerçek referans**
- İdeali: 40–50 araçlık bir firmanın vaka çalışması. "X firması, 45 araç, Girne. Önce/sonra: şu kadar boş gün, şu kadar tahsilat kaçağı."
- Yoksa: pilot kullanıcıdan alınmış kısa bir alıntı + firma adı + kişi adı + fotoğraf.
- Kullanım rakamı: "X firma, Y araç, Z rezervasyon Rent Okey ile yönetiliyor."

**Kabul kriteri:** Ziyaretçi "bunlar kim, verim güvende mi, benden önce kim kullanmış" sorularının üçüne de sitede cevap buluyor.

---

# P1 — Önümüzdeki 2–4 Hafta

## 6. Fiyatlandırma: ara basamak ve hesaplayıcı

**Sorun:**
- Büyüme paketi 30 araçta bitiyor (₺2.890), Profesyonel 31 araçta başlıyor (₺4.990). **Tek araç eklemek faturayı %73 artırıyor.** 31–45 araç aralığındaki firma kendini cezalandırılmış hissediyor.
- Sitede "70 araçta araç başına ₺71" yazıyor. 40 araçlık firmanın gerçek maliyeti **araç başına ₺125**. Paketin en iyi göründüğü sayıyı yazmak güven kırıyor.
- Büyüme paketindeki 5 kullanıcı sınırı 40 araçlık operasyona dar (ofiste 2, sahada 3–4).
- KDV hariç fiyat veriliyor; 40 araç için gerçek maliyet **₺4.990 + KDV ≈ ₺5.988/ay, yıllık ≈ ₺71.000**.

**Yapılacak:**
- **Ara basamak ekle:** 31–50 araç için yeni bir kademe, ya da "30 araç üstü her araç için +₺X" modeli.
- **Araç sayısı hesaplayıcısı:** kullanıcı araç sayısını girsin, kendi aylık tutarını ve araç başı maliyetini görsün (KDV dahil/hariç seçenekli).
- **Geri dönüş (ROI) cümlesi** fiyatın yanına: *"Ayda ₺X, bir aracın 2 günlük kirası. Tek bir boş günü veya tek bir tahsilat kaçağını önlerse kendini öder."*
- Kullanıcı sayısını paketten ayır: "ek kullanıcı +₺X/ay" seçeneği koy.
- Paket geçişlerinde ne olduğunu netleştir (yıl ortası yükseltme, fark ödeme).

---

## 7. "Önerilen odak" dilini sadeleştir

**Sorun:** "Önerilen odak" terimi menüde, hero'da, footer'da ve bölüm başlığında geçiyor ama ne olduğu ilk okumada anlaşılmıyor. "Bağlamsal risk", "aynı çalışma düzeniyle ilerler", "operasyon ürünüdür" gibi ifadeler yazılım dili; hedef kitle bu dili konuşmuyor.

**Yapılacak:**
- Terimi ilk geçtiği yerde **tek cümlelik somut karşılığıyla** açıkla: *"Önerilen odak = bugün ilk bakman gereken 3 iş."*
- Soyut ifadeleri operasyon diline çevir:
  - "bağlamsal riskler" → "takvimde görünmeyen sorunlar"
  - "aynı veriyle ve aynı çalışma düzeniyle ilerler" → "herkes aynı ekrana bakar"
  - "operasyon ürünüdür" → "günlük işinizi yürüten program"
- Alternatif olarak terimi tamamen değiştirmeyi düşün: **"Bugünün İşleri"**, **"Günün Riskleri"** gibi.

---

## 8. Hero'ya somut senaryo ve sayı taşı

**Sorun:** Sitenin en güçlü, en ikna edici cümlesi sayfanın çok aşağısında: *"İade ile sonraki teslim arasında 35 dakika var — temizlik ve Girne → Ercan transferi için yeterli süre görünmüyor."* Bu cümle sahayı bilen birinin yazdığını kanıtlıyor. Ayrıca sitede hiçbir sonuç sayısı yok.

**Yapılacak:**
- Bu iki gerçek risk örneğini (₺8.400 açık bakiye / 35 dakikalık dar geçiş) **hero'nun hemen altına** taşı.
- En az bir ölçülebilir vaat ekle: "günde ~X saat", "boş gün oranında %X", "kaçan tahsilatta %X azalma". Elinizde pilot verisi yoksa dürüst bir hesap gösterin.
- Hero alt başlığını kısalt — şu an iki cümle ve ikinci cümle teknik.

---

## 9. Deneme süresi ve başlangıç anı

**Sorun:** 14 gün, aylık kiralamaları ve sezonu olan bir firmanın karar döngüsüne kısa. Üstelik ilk günler veri girişiyle geçiyor, gerçek deneme süresi fiilen 7–8 güne düşüyor.

**Yapılacak:**
- Ya süreyi **30 güne** çıkar, ya da **"veri kurulumu tamamlandıktan sonra 14 gün"** olarak tanımla ve bunu sitede net yaz.
- Denemeyi bir insan desteğiyle sar: 15 dakikalık kurulum görüşmesi teklifi (opsiyonel, zorunlu değil — kullanıcı satış görüşmesi istemiyor).
- Deneme bitimine yakın ne olacağını yaz: "Otomatik ödeme alınmaz, veriniz X gün saklanır."

---

## 10. Boş Blog ve Kılavuzlar sayfaları

**Sorun:** Blog'da 4, Kılavuzlar'da 6 başlık var — hepsi "Çok yakında". Boş sayfa göstermek, sayfayı hiç göstermemekten kötü: ürünün yeni olduğunu ve kimsenin kullanmadığını ima ediyor.

**Yapılacak:**
- Ya menüden ve footer'dan **geçici olarak kaldır**,
- Ya da her birine **en az 2–3 gerçek içerik** yayınla. Öncelik sırası:
  1. "Hızlı başlangıç: hesabınızı kurun" (zaten ürün dokümantasyonu, yazması kolay)
  2. "Verilerinizi Excel'den Rent Okey'e taşıma" (satışı doğrudan destekler)
  3. "40 araçlık bir filoda boş gün maliyeti nasıl hesaplanır" (SEO + ikna)
- Kılavuzlar için "8 dk" gibi okuma süresi etiketlerini içerik yayınlanana kadar gösterme.

---

## 11. Entegrasyon sayfası

**Sorun:** Tüm sitede entegrasyon yalnızca Kurumsal pakette "özel entegrasyon ve API erişimi" olarak geçiyor. Hedef kitlenin günlük hayatında olmazsa olmaz entegrasyonlar hiç anılmıyor. Bunlar yoksa sistem "güzel bir takvim" olarak kalır ve kullanıcı yine 4 ayrı yerde çalışır — yani sitenin vaat ettiğinin tersi.

**Yapılacak — bir "Entegrasyonlar" sayfası aç ve her biri için "var / yol haritasında / yok" durumunu net yaz:**

| Entegrasyon | Neden kritik |
|---|---|
| **Trafik cezası + HGS/OGS takibi** | Sektördeki en büyük para kaçağı. Sitede hiç geçmiyor. |
| **e-Fatura / muhasebe** (Paraşüt, Logo, Mikro, Nebim) | Faturayı ikinci kez elle kesmek istemiyorlar. |
| **Sanal POS / ön provizyon (depozito bloke)** | Depozito yönetimi olmadan finans modülü eksik kalır. |
| **Araç takip / GPS** | Aracın nerede olduğu operasyonun merkezi. |
| **Online rezervasyon kanalları** (kendi sitesi, acenteler, pazaryerleri) | Rezervasyonun elle girilmesi en büyük tekrar eden iş. |
| **Sözleşme / e-imza + kimlik-ehliyet okuma** | Teslim süresini dakikalarca kısaltır. |
| **SMS / WhatsApp bildirimi** | Müşteriye hatırlatma, iade bildirimi. |

**Not:** Yol haritasında "fotoğraflı hasar karşılaştırması" ve "akıllı fiyat önerisi" var. Bunlar değerli ama hedef kitle için **ceza takibi ve e-fatura entegrasyonu daha önce gelir.** Yol haritası sıralamasını gözden geçir.

---

# P2 — Ürün ve Yapı Kararları

## 12. Fotoğraflı teslim/iade ve hasar kaydını Büyüme paketine indir

**Sorun:** "Fotoğraflı teslim, iade ve hasar kaydı" yalnızca Profesyonel (₺4.990) pakette. Halbuki hasar tutanağı 10 araçlık firmanın da her gün yaşadığı, en çok ihtiyaç duyulan işlev. En kritik özelliği en pahalı pakete koymak, küçük paketleri "eksik ürün" gibi gösteriyor ve deneme sırasında en çarpıcı anı yaşatmıyor.

**Yapılacak:** En azından temel fotoğraflı teslim/iade kaydını Başlangıç veya Büyüme paketine indir; **karşılaştırmalı hasar analizi** üst pakette kalsın.

---

## 13. Mobil uygulama görünürlüğü

**Sorun:** Site "masaüstü, tablet ve mobil" diyor ve Kılavuzlar'da "Mobil saha uygulamasını sahada kullanmak" başlığı var — ama uygulamanın olup olmadığı, mağaza linkleri, ekran görüntüleri yok. Saha ekibi için bu belirleyici bir soru.

**Yapılacak:**
- Uygulama varsa App Store / Google Play rozetleri ve mobil ekran görüntüleri.
- Web uygulaması olarak çalışıyorsa bunu açıkça yaz ("telefon tarayıcısında çalışır, uygulama indirmeye gerek yok") — belirsizlik bırakma.
- Sahada internet yoksa ne oluyor? Çevrimdışı çalışma durumunu yaz.

---

## 14. Küçük ama biriken güven sinyalleri

- **Telefon numarası:** Maslak adresiyle 0541 ile başlayan cep numarası yan yana durunca tutarsız görünüyor. Sabit numara veya kurumsal santral ekle.
- **SSS cevapları:** 12 soru var, cevapları açılır panellerin arkasında. En kritik 3–4 sorunun (deneme sonunda ödeme alınır mı, verilerimi geri alabilir miyim, paket değiştirebilir miyim) cevabını **açık halde** göster.
- **Sık sorulanlara ekle:** "Sistemden çıkarsam verilerim ne olur?", "Kaç kişi destek veriyor, ne kadar sürede dönüyorsunuz?", "İnternet kesilirse ne olur?"
- **Fiyatta KDV:** "Fiyatlara KDV dahil değildir" notu çok küçük; KDV dahil tutarı da göster.
- **Sözleşme süresi:** Yıllık ödemede taahhüt var mı? İstediğim ay iptal edebilir miyim? Sitede yazmıyor.
- **Yol haritası uyarı notu:** "Kapsam ve yayın sırası değişebilir" ifadesi dürüst ama tarih vermemek belirsizlik bırakıyor. En azından çeyrek bazında hedef ver.

---

# Doğru Yapılmış Olanlar (bozmayın)

Bu maddeler rakiplere göre gerçek üstünlük sağlıyor:

- **"Operasyonu yönetin. Yoğunluğu değil."** — Hedef kitlenin derdini bilen bir başlık.
- **Kayıt akışı:** Tek adım, ad-soyad + e-posta + şifre, kredi kartı yok, satış görüşmesi beklemek yok. Tam olarak istenen şey.
- **"Demo izlemeyin. Kendi filonuzla deneyin."** — Güçlü ve farklılaştırıcı bir vaat.
- **"WhatsApp mesajları, tablolar, notlar ve ayrı takvimler" karşılaştırması** — Hedef kitlenin masasının birebir fotoğrafı.
- **Türkiye + KKTC odağı, ₺ fiyatlandırma, belge süreleri (kasko, muayene, egzoz)** — Yerel bilgiyi kanıtlıyor, global rakiplerde yok.
- **Havalimanı / otel / adrese teslim** ayrımı — sahayı bilen bir detay.

---

# Sonuç

Ürünün fikri doğru; sahayı bilen biri kurmuş, bu metinlerden belli. Sorun ürünün kendisi değil, **siteden bunun anlaşılamaması** ve **güven için tutunacak hiçbir dal olmaması.**

En yüksek getirili üç hamle:
1. Gerçek ekran görüntüleri ve demo videosu (ürünü göster)
2. Veri aktarımını satıcının işi yap (denemeyi gerçekten başlat)
3. Güvenlik/KVKK sayfası + gerçek bir referans (güveni kur)
