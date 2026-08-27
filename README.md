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

## Kontrol

```bash
npm run lint
./node_modules/.bin/next build --webpack
```

## Temel kaynaklar

- `src/app/page.tsx` — ana sayfa bölüm sırası
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
- `public/logo/` — aktif marka varlıkları
- `scripts/build-og-card.mjs` — sosyal paylaşım görseli üretimi

## Önemli durum

- Bu repo çalışan Rent Okey uygulaması değildir; ürün uygulaması `https://app.rentokey.com` adresindedir.
- `/ucretsiz-dene`, isteği aynı origin `/api/kayit-ol` route'una gönderir. Bu route hesabı `https://app.rentokey.com/api/kayit-ol` üzerinden sunucu tarafında oluşturur; doğrulama e-postası `mail.rentokey.com` üzerinden gönderilir. Firma ve filo bilgileri e-posta onayından sonra uygulamada alınır.
- Web sitesi artık Supabase istemcisi veya Supabase ortam değişkeni kullanmaz. Daha önce Vercel'e eklenen `NEXT_PUBLIC_SUPABASE_URL` ve `NEXT_PUBLIC_SUPABASE_ANON_KEY` değerleri kullanılmadığı için kaldırılabilir.
- İletişim formu `https://app.rentokey.com/api/iletisim-formu-gonder` endpoint'ine gerçek gönderim yapar. API üretimde yalnız `rentokey.com` ve `www.rentokey.com` origin'lerini kabul eder; yerel ortamdan canlı gönderim beklenmemelidir.
- Blog ve kılavuz sayfaları yer tutucu içerik taşır.
- Yasal metinler taslaktır ve yayın öncesi uzman incelemesi gerektirir.
- Commit, push ve deploy işlemleri yalnız açık kullanıcı onayıyla yapılmalıdır.
