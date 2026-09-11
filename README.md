# Rent Okey — web sitesi

Türkiye ve KKTC’deki araç kiralama firmalarına yönelik Rent Okey SaaS ürününün pazarlama, fiyatlandırma ve ücretsiz deneme web sitesidir.

> Yeni bir geliştirmeye başlamadan önce ürün doğruları, site hikâyesi, paket mantığı, bilinen teknik borçlar ve çalışma protokolü için [PROJE_EL_KITABI.md](./PROJE_EL_KITABI.md) dosyasını okuyun. Son yapılan işlerin kısa özeti [DEVAM_NOTLARI.md](./DEVAM_NOTLARI.md) içindedir.

## Teknoloji

- Next.js 16.3.1 — App Router
- React 19.2.8
- TypeScript 5
- Tailwind CSS 4
- Self-hosted Inter Variable

## Başlangıç

```bash
npm install
npm run dev
```

Site varsayılan olarak [http://localhost:3000](http://localhost:3000) adresinde açılır.

İletişim ve ücretsiz deneme formlarındaki Cloudflare Turnstile için `.env.example` dosyasını `.env.local` olarak kopyalayıp pazarlama sitesinin public site key değerini tanımlayın:

```bash
NEXT_PUBLIC_TURNSTILE_SITE_KEY=...
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

`TURNSTILE_SECRET_KEY` bu projeye eklenmez. Secret yalnız kayıt ve iletişim API'lerinin çalıştığı uygulama projesinde bulunmalıdır. Aynı Turnstile widget'ında `rentokey.com`, `www.rentokey.com` ve `app.rentokey.com` izinli hostname olmalıdır.

`NEXT_PUBLIC_GA_MEASUREMENT_ID` isteğe bağlıdır. Tanımlandığında GA4 yalnız ziyaretçi analitik izni verdikten sonra yüklenir. İlk trafik kaynağı, UTM bilgileri ve açılış sayfası birinci taraf tarayıcı depolamasında tutulur; deneme CTA tıklaması, form başlangıcı ve başarılı hesap oluşturma ölçülür. Ad, e-posta, telefon ve şifre analitiğe gönderilmez.

## Kontrol

```bash
npm run lint
./node_modules/.bin/next build --webpack
```

## Temel kaynaklar

- `src/app/(tr)/page.tsx` — Türkçe ana sayfa bölüm sırası (URL hâlâ `/`)
- `src/app/en/` — İngilizce ana sayfa, Pilot, deneme ve yasal metin çevirileri
- `src/components/home/ProductOverviewSection.tsx` — ana sayfadaki ürün vitrini ve sade ürün detay bağlantıları
- `src/components/HomeOperationDemo.tsx` / `src/lib/home-operation-demo.ts` — ana sayfanın üç görünümlü, 20 araçlık operasyon demosu ve örnek veri kaynağı
- `src/components/PilotRulesSection.tsx` / `src/lib/pilot-rules.ts` — Pilot öneri kural motorunun iki dildeki 10 senaryosu ve yaklaşan simülatör anlatımı
- `src/components/ProductPreviewScenes.tsx` — ana sayfa ve detay sayfalarının kod tabanlı operasyon/takvim önizlemeleri
- `src/components/ProductEvidenceSection.tsx` — program ve rezervasyon takvimi detay sayfalarındaki geniş örnekler
- `src/components/home/HomeTrustSection.tsx` — yerel operasyon, ekip yetkisi ve iki dilde destek özeti
- `src/components/ProductSeoPage.tsx` / `src/lib/product-pages.ts` — dört Türkçe/İngilizce ürün SEO sayfasının ortak yapısı ve içeriği
- `src/lib/locale.ts` — dil eşleştirmeleri; `src/lib/form-copy.ts` — ortak form çevirileri
- `src/components/DashboardMock.tsx` — kod tabanlı etkileşimli ürün demosu
- `src/lib/pricing.ts` — paketlerin ana veri kaynağı
- `src/lib/faq.ts` — SSS içerikleri
- `src/lib/nav.ts` — header ve footer navigasyonu
- `src/lib/seo.ts` — ortak metadata, canonical ve sosyal paylaşım ayarları
- `src/lib/structured-data.ts` — ana sayfanın Organization, WebSite ve SoftwareApplication verisi
- `src/app/robots.ts` / `src/app/sitemap.ts` — tarama ve indeksleme kaynakları
- `src/components/TrialOnboarding.tsx` — tek adımlı deneme hesabı formu
- `src/lib/trial-signup.ts` — formun aynı origin kayıt istemcisi ve kullanıcı hata mesajları
- `src/app/api/kayit-ol/route.ts` — kayıt isteğini uygulama API'sine sunucu tarafında ileten route
- `src/components/TurnstileWidget.tsx` — iletişim ve kayıt formlarına yaklaşılınca yüklenen Cloudflare Turnstile widget'ı
- `public/logo/` — aktif marka varlıkları
- `scripts/build-og-card.mjs` — sosyal paylaşım görseli üretimi

## Önemli durum

- Bu repo çalışan Rent Okey uygulaması değildir; ürün uygulaması `https://app.rentokey.com` adresindedir.
- Pazarlama sitesinin standart üretim adresi `https://www.rentokey.com` değeridir. `src/lib/seo.ts` içindeki `SITE_URL`; canonical, sitemap, robots, sosyal paylaşım ve JSON-LD adreslerinin tek kaynağıdır. Apex alan adı `next.config.ts` üzerinden kalıcı olarak `www` sürümüne yönlendirilir.
- `/ucretsiz-dene`, `signup-form` action'lı Turnstile tokenıyla aynı origin `/api/kayit-ol` route'una gönderilir. Bu route doğrulanmış alanları `https://app.rentokey.com/api/kayit-ol` adresine iletir; uygulama API'si tokenı sunucuda doğrular ve atomik e-posta/IP hız sınırından sonra hesabı oluşturur. İngilizce form İngilizce doğrulama e-postası alır.
- Web sitesi artık Supabase istemcisi veya Supabase ortam değişkeni kullanmaz. Daha önce Vercel'e eklenen `NEXT_PUBLIC_SUPABASE_URL` ve `NEXT_PUBLIC_SUPABASE_ANON_KEY` değerleri kullanılmadığı için kaldırılabilir.
- İletişim formu `https://app.rentokey.com/api/iletisim-formu-gonder` endpoint'ine gerçek gönderim yapar. Seçili site dili `locale: "tr" | "en"` olarak gönderilir; ziyaretçi onay e-postası bu dilde hazırlanır. Cloudflare Turnstile `contact-form` action'ıyla üretilen token `turnstileToken` alanında gönderilir. Pazarlama sitesi yalnız `NEXT_PUBLIC_TURNSTILE_SITE_KEY` kullanır; `TURNSTILE_SECRET_KEY` yalnız API projesinde tutulur. API üretimde yalnız `rentokey.com` ve `www.rentokey.com` origin'lerini kabul eder; yerel ortamdan canlı gönderim beklenmemelidir.
- GA4 ölçümü `NEXT_PUBLIC_GA_MEASUREMENT_ID` ile açılır ve onay verilmeden üçüncü taraf betiği yüklenmez. Ölçülen web olayları: `trial_cta_click`, `trial_form_start`, `sign_up`, `contact_form_start` ve `generate_lead`. `sign_up` yalnız kayıt API'si başarı döndürdükten sonra gönderilir. `email_verified` ve `onboarding_completed` olayları uygulama tarafında ayrıca bağlanmalıdır.
- Blog ve kılavuz sayfaları yer tutucu içerik taşır.
- Yasal metinler taslaktır ve yayın öncesi uzman incelemesi gerektirir.
- Commit, push ve deploy işlemleri yalnız açık kullanıcı onayıyla yapılmalıdır.
