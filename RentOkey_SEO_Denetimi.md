# RentOkey SEO Denetimi

**Tarih:** 28 Ağustos 2026
**Kapsam:** rentokey.com / www.rentokey.com canlı site + `rentokey-web-git` kaynak kodu
**Yöntem:** Canlı sayfa incelemesi, robots.txt, sitemap.xml, metadata katmanı, yapılandırılmış veri, yönlendirme kuralları, indeksleme durumu

**Genel değerlendirme: 100 üzerinden ~45.**
Teknik altyapı beklenenden iyi kurulmuş — merkezi metadata fonksiyonu, JSON-LD şeması, robots/sitemap route'ları, self-hosted font, `next/image`, semantik başlık yapısı, temiz Türkçe URL'ler. Sorun teknikte değil **stratejide**: sitenin arama motorunda görünecek yüzeyi neredeyse yok. Şu anda Google'ın indeksleyebileceği **yalnızca 3 sayfa** var ve sitede **tek bir içerik yazısı** bulunmuyor.

---

## A. KRİTİK — Organik trafiği doğrudan engelleyen sorunlar

### A1. Sitenin indekslenebilir yüzeyi 3 sayfa

`index: false` ile arama motorlarına kapatılmış sayfalar:

| Sayfa | Durum |
|---|---|
| `/blog` | noindex |
| `/kilavuzlar` | noindex |
| `/guncellemeler` | noindex |
| `/kariyer` | noindex |
| `/gizlilik-politikasi` | noindex |
| `/kullanim-sartlari` | noindex |

301 ile anasayfa çapasına yönlendirilmiş sayfalar (`next.config.ts`):

`/urun → /#urun` · `/ozellikler → /#ozellikler` · `/fiyatlandirma → /#fiyatlandirma` · `/hakkimizda → /#hakkimizda` · `/sss → /#sss` · `/iletisim → /#iletisim`

**Geriye kalan indekslenebilir sayfalar:** `/`, `/ucretsiz-dene`, `/kaynaklar` — üç adet.

**Neden kritik:** Google bir sayfayı genellikle tek bir birincil sorgu için sıralar. Şu anda "araç kiralama programı", "filo yönetim yazılımı", "araç kiralama programı fiyatları", "rent a car yazılımı" gibi birbirinden farklı niyetteki tüm sorgular **aynı anasayfaya** yükleniyor. Çapa (`#fiyatlandirma`) bir URL değildir; Google onu ayrı sayfa olarak sıralamaz. Yani "araç kiralama programı fiyatları" araması için sitenizin iniş sayfası **yok**.

**Yapılacak:**
1. `next.config.ts` içindeki 6 yönlendirmeyi kaldır, bu sayfaları **gerçek sayfa** olarak geri aç:
   - `/fiyatlandirma` — paketler, karşılaştırma tablosu, SSS, ROI hesabı
   - `/ozellikler` — ve altında 5 modül sayfası: `/ozellikler/rezervasyon-takvimi`, `/ozellikler/teslim-iade`, `/ozellikler/filo-bakim-belge`, `/ozellikler/gider-tahsilat`, `/ozellikler/ekip-raporlar`
   - `/hakkimizda`, `/iletisim`, `/sss`
2. Anasayfadaki bölümler kalabilir; ayrı sayfalar bu bölümlerin **derinleştirilmiş** hâli olmalı (kopyala-yapıştır değil, aksi hâlde iç kopya içerik olur).
3. Her yeni sayfaya `createPageMetadata` ile kendi title/description/canonical'ı verilmeli ve sitemap'e eklenmeli.

**Beklenen etki:** 3 indekslenebilir sayfadan ~12'ye çıkmak, tek başına en büyük organik kazanç.

---

### A2. Sıfır içerik = sıfır uzun kuyruk trafiği

- `/blog`: 4 başlık, hepsi "Çok yakında", sayfa noindex.
- `/kilavuzlar`: 6 başlık, hepsi "Çok yakında", sayfa noindex.
- Sitede yayınlanmış **tek bir makale yok**.

B2B SaaS'ta organik trafiğin tipik olarak %70–80'i ürün sayfalarından değil, blog ve kılavuz içeriğinden gelir. Şu anda bu kanal tamamen kapalı.

**Hedef anahtar kelime haritası (öncelik sırasıyla):**

| Anahtar kelime | Niyet | Hedef sayfa |
|---|---|---|
| araç kiralama programı | Ticari | `/` (anasayfa) |
| rent a car programı / oto kiralama programı | Ticari | `/` + `/ozellikler` |
| araç kiralama programı fiyatları | Ticari, satın almaya yakın | `/fiyatlandirma` |
| filo yönetim yazılımı / filo takip programı | Ticari | `/ozellikler` alt sayfası |
| araç kiralama sözleşmesi örneği | Bilgi — **yüksek hacim** | Blog + indirilebilir şablon |
| kiralık araç teslim tutanağı örneği | Bilgi — yüksek dönüşüm potansiyeli | Blog + PDF/Word şablon |
| araç kiralama gelir gider takibi excel | Bilgi | Blog + Excel şablonu → ürüne köprü |
| rent a car nasıl açılır | Huni üstü | Uzun rehber |
| araç kiralama trafik cezası / HGS takibi | Problem odaklı | Blog → ürün özelliği |
| KKTC rent a car yazılımı | Yerel, düşük rekabet | Ayrı yerel sayfa |
| [rakip adı] alternatifi | Karşılaştırma | Karşılaştırma sayfası |

**Kritik taktik:** "Sözleşme örneği", "teslim tutanağı", "gelir-gider Excel şablonu" gibi **indirilebilir şablonlar** bu sektörde en kolay backlink ve e-posta toplama aracıdır. Üstelik indiren kişi tam olarak hedef müşteridir — Excel'le boğuşan filo sahibi.

**Yapılacak:** İlk etapta 6 yazı hedefle, `/blog`'un noindex'ini kaldır. Yazı yoksa sayfayı menüden ve footer'dan geçici olarak kaldır — boş "Çok yakında" listesi hem kullanıcıya hem Google'a olumsuz sinyal.

---

### A3. www / non-www ikiliği — teknik olarak en acil madde

| Sinyal | Değer |
|---|---|
| `SITE_URL` (kodda) | `https://rentokey.com` (www yok) |
| robots.txt `Host:` | `https://rentokey.com` |
| sitemap.xml URL'leri | `https://rentokey.com/...` |
| canonical etiketleri | `https://rentokey.com/...` |
| **Sitenin fiilen sunulduğu adres** | `https://www.rentokey.com` |

İnceleme sırasında **her iki host da içerik döndürdü** (yönlendirme değil). Bu, aynı içeriğin iki farklı adreste yayınlanması demek: bağlantı gücü ikiye bölünür, Google hangi sürümü sıralayacağına kendi karar verir, Search Console verisi ikiye ayrılır.

**Doğrulama komutu:**
```bash
curl -sI https://rentokey.com/      | head -1
curl -sI https://www.rentokey.com/  | head -1
```
İkisi de `200` dönüyorsa sorun doğrulanmış demektir.

**Yapılacak:**
1. Tercih edilen host'a karar ver. Öneri: **www.rentokey.com** (menü, paylaşımlar ve mevcut bağlantılar zaten www).
2. Diğer host'u sunucu/DNS seviyesinde **301** ile tercih edilene yönlendir (Vercel/Cloudflare'de tek ayar).
3. `src/lib/seo.ts` içindeki `SITE_URL`'i seçilen host ile eşitle — canonical, sitemap, robots ve JSON-LD hepsi buradan besleniyor, tek satırlık düzeltme.
4. Search Console'da her iki sürümü de mülk olarak ekle, tercih edileni izle.

---

### A4. Analitik ve Search Console kurulu değil

Kod tabanında GA4, Google Tag Manager, Plausible veya benzeri **hiçbir ölçüm aracı yok**; metadata'da `verification` alanı da tanımlı değil.

Bu, SEO çalışmasının sonucunu görmenin imkânsız olduğu anlamına gelir: hangi kelimeden kaç tıklama geldiği, hangi sayfanın dönüştürdüğü, denemeye kaç kişinin başladığı ölçülemiyor.

**Yapılacak (bu hafta, 1 saatlik iş):**
1. Google Search Console'a siteyi ekle + sitemap gönder.
2. GA4 kur (Next.js'te `@next/third-parties/google` ile tek bileşen).
3. Dönüşüm olaylarını tanımla: `ucretsiz_dene_tiklama`, `kayit_tamamlandi`, `iletisim_formu_gonderildi`, `whatsapp_tiklama`.
4. Bing Webmaster Tools (ücretsiz, GSC'den içe aktarılır).

---

## B. YÜKSEK ETKİ — Hızlı kazançlar

### B1. FAQPage şeması yok
Sitede 12 adet SSS var ama JSON-LD'de `FAQPage` işaretlemesi bulunmuyor. Mevcut şema grafiği yalnızca `Organization`, `WebSite` ve `SoftwareApplication` içeriyor.

FAQ işaretlemesi arama sonuçlarında açılır cevaplar kazandırır ve AI Overview / yapay zekâ arama motorlarına doğrudan besleme yapar. `src/lib/faq.ts` içinde veri zaten yapılandırılmış hâlde duruyor — **yarım saatlik iş.**

### B2. H1'de anahtar kelime yok
Anasayfa H1: *"Operasyonu yönetin. Yoğunluğu değil."* Güçlü bir slogan ama içinde hedef kelime yok. H1 hâlâ en güçlü sayfa içi sinyallerden biri.

**Öneri:** Sloganı koruyup kelimeyi içine yedir:
> "Araç kiralama programı: operasyonu yönetin, yoğunluğu değil."

veya H1'in hemen altındaki alt başlığı kelimeyle başlat (şu an "Rent Okey, Türkiye ve KKTC için geliştirilen araç kiralama operasyon yazılımıdır" — bu iyi, ama H1'e taşımak daha etkili).

### B3. Sitemap eksik ve tarihi sabit kodlanmış
`src/app/sitemap.ts` yalnızca 3 URL içeriyor ve `lastModified` elle yazılmış sabit bir tarih (`2026-08-23`). Yeni sayfa eklendiğinde sitemap'e otomatik yansımıyor, tarih de zamanla yanıltıcı hâle geliyor.

**Yapılacak:** Sayfa listesini merkezi bir yapıdan (örn. `src/lib/nav.ts`) türet; blog/kılavuz yayına girince içerik dosyalarının gerçek tarihini kullan.

### B4. `/kaynaklar` ince (thin) sayfa
İndekslenebilir tek "içerik" sayfası, ama işlevi iki adet **noindex** sayfaya (blog, kılavuzlar) link vermekten ibaret. Google için değeri düşük, tarama bütçesi israfı.

**Yapılacak:** Ya gerçek içerik merkezine dönüştür (öne çıkan yazılar, şablon indirmeleri, kategori listeleri), ya da içerik yayınlanana kadar noindex yap.

### B5. Görsel yok = görsel araması yok
Sitede ürün ekran görüntüsü bulunmuyor; arayüz kod ile çizilmiş temsili bileşenlerle anlatılıyor (`DashboardMock`). Bunun iki sonucu var: Google Görseller'den sıfır trafik ve tanıtım/paylaşım için kullanılabilir görsel yokluğu.

**Yapılacak:** Gerçek ekran görüntüleri ekle; dosya adları ve `alt` metinleri anahtar kelime içersin — örn. `arac-kiralama-rezervasyon-takvimi.png`, alt: "Rent Okey rezervasyon zaman çizelgesinde 40 araçlık filo görünümü".

### B6. Yapılandırılmış veri eksikleri
Mevcut şema iyi kurulmuş; eksikler:

| Eksik | Etki |
|---|---|
| `FAQPage` | Yüksek — zengin sonuç fırsatı |
| `BreadcrumbList` | Orta — alt sayfalar açılınca gerekli |
| `Organization.sameAs` (sosyal profiller) | Orta — varlık doğrulaması |
| `Organization.contactPoint` | Düşük-orta |
| `Offer.priceValidUntil` / `availability` | Düşük — uyarı üretiyor |
| `AggregateRating` | Yüksek ama **gerçek değerlendirme toplanmadan eklenmemeli** (uydurma puan manuel ceza sebebidir) |

---

## C. ORTA — Teknik hijyen

- **robots.txt `Host:` direktifi:** Google tarafından yok sayılır (yalnızca Yandex destekler). Zararsız ama işlevsiz; asıl çözüm A3'teki 301.
- **`/giris` yönlendirmesi:** `redirect()` kullanılmış — Next.js varsayılan olarak **307 (geçici)** döner. Kalıcı bir dış yönlendirme olduğu için `permanentRedirect()` (308) daha doğru.
- **`app.rentokey.com` indekslenmesi:** Uygulama alt alanının arama sonuçlarına düşmemesi için orada `X-Robots-Tag: noindex` veya kendi robots.txt'i olmalı. Kontrol edilmeli.
- **Özel 404 sayfası yok:** `not-found.tsx` bulunmuyor, Next.js varsayılanı çıkıyor. Marka uyumlu, arama ve ana bağlantılar içeren bir 404 hem kullanıcı hem tarama açısından daha iyi.
- **Sayfa bazlı OG görseli yok:** Tüm sayfalar aynı `/og.png`'yi kullanıyor. Fiyatlandırma, özellikler ve blog yazıları için ayrı görseller paylaşım tıklama oranını artırır.
- **hreflang yok:** Türkiye ve KKTC aynı dili kullandığı için şu an sorun değil. KKTC'ye özel sayfa açılırsa `tr-TR` / `tr-CY` ayrımı gerekir.
- **Sayfa hızı ölçülmemiş:** Font self-hosted, `next/image` kullanılmış, ağır kütüphane yok — temel iyi görünüyor. Yine de PageSpeed Insights ve Search Console "Core Web Vitals" raporu ile mobil skorları doğrula.

---

## D. SİTE DIŞI — Tamamen eksik

Şu anda sıfırdan başlanacak alanlar:

1. **Google Business Profile** — Maslak adresi mevcut; yerel işletme kaydı açılmalı. "araç kiralama yazılımı istanbul" gibi yerel sorgular için ve harita görünürlüğü için gerekli.
2. **Backlink profili** — Muhtemelen sıfıra yakın. İlk adımlar: yazılım dizinleri (Capterra, G2, Software Advice, yerel SaaS dizinleri), sektör dernekleri (TOKKDER ve benzeri), KKTC turizm/araç kiralama portalları.
3. **Ürün inceleme siteleri** — İlk müşterilerden değerlendirme toplamak hem backlink hem sosyal kanıt hem de ileride `AggregateRating` şeması için gerçek veri sağlar.
4. **Sosyal profiller** — Şemada `sameAs` alanı boş; LinkedIn ve Instagram hesapları açılıp şemaya eklenmeli.

---

## E. 30 GÜNLÜK UYGULAMA PLANI

### Hafta 1 — Ölçüm ve teknik temel
- [ ] Search Console + Bing Webmaster kurulumu, sitemap gönderimi
- [ ] GA4 kurulumu + 4 dönüşüm olayı
- [ ] www / non-www kararı, 301 yönlendirme, `SITE_URL` düzeltmesi
- [ ] `FAQPage` şeması ekle (`src/lib/faq.ts` verisi hazır)
- [ ] `/giris` → `permanentRedirect`, özel 404 sayfası

### Hafta 2 — Sayfa yüzeyini aç
- [ ] `next.config.ts`'teki 6 yönlendirmeyi kaldır
- [ ] `/fiyatlandirma`, `/ozellikler`, `/hakkimizda`, `/iletisim`, `/sss` sayfalarını gerçek sayfa olarak aç
- [ ] Her birine özgün title/description/canonical + `BreadcrumbList`
- [ ] Sitemap'i dinamikleştir
- [ ] H1'e anahtar kelime yedir

### Hafta 3 — Derinlik
- [ ] 5 modül için ayrı özellik sayfası
- [ ] Gerçek ürün ekran görüntüleri + SEO uyumlu dosya adı ve alt metinleri
- [ ] `/kaynaklar`'ı gerçek içerik merkezine çevir

### Hafta 4 — İçerik motorunu çalıştır
- [ ] `/blog` noindex'ini kaldır, ilk 3 yazıyı yayınla:
      1. "Araç kiralama sözleşmesi örneği" (+ indirilebilir şablon)
      2. "Kiralık araç teslim tutanağı nasıl hazırlanır" (+ şablon)
      3. "Araç kiralama gelir gider takibi: Excel şablonu ve sınırları"
- [ ] Google Business Profile kaydı
- [ ] İlk 5 dizin kaydı (backlink)

---

## Özet

| Alan | Durum |
|---|---|
| Teknik altyapı (metadata, şema, robots, sitemap sistemi) | **İyi** — sağlam kurulmuş |
| İndekslenebilir sayfa sayısı | **Kritik** — 3 sayfa |
| İçerik | **Kritik** — sıfır yayınlanmış içerik |
| Host tutarlılığı (www/non-www) | **Kritik** — çözülmeli |
| Ölçümleme | **Kritik** — kurulu değil |
| Yapılandırılmış veri | **Orta** — FAQPage eksik |
| Görsel SEO | **Zayıf** — görsel yok |
| Site dışı / backlink | **Zayıf** — sıfırdan başlanacak |

**Tek cümleyle:** Motor iyi kurulmuş ama araca hiç yakıt konmamış. En yüksek getirili üç hamle sırasıyla — **indekslenebilir sayfa sayısını açmak (A1)**, **host ikiliğini çözmek (A3)** ve **ölçümlemeyi kurmak (A4)**. Bunlar toplamda birkaç günlük iş ve sitenin arama görünürlüğünü sıfırdan gerçek bir başlangıç noktasına taşır.
