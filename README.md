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
- `src/components/TrialOnboarding.tsx` — tek adımlı Supabase deneme hesabı formu
- `src/lib/supabase-browser.ts` — Supabase tarayıcı istemcisi ve kayıt hata mesajları
- `public/logo/` — aktif marka varlıkları
- `scripts/build-og-card.mjs` — sosyal paylaşım görseli üretimi

## Önemli durum

- Bu repo çalışan Rent Okey uygulaması değildir; ürün uygulaması `https://app.rentokey.com` adresindedir.
- `/ucretsiz-dene` Supabase Auth ile kullanıcı oluşturur; firma ve filo bilgileri e-posta onayından sonra uygulamada alınır.
- `NEXT_PUBLIC_SUPABASE_URL` ve `NEXT_PUBLIC_SUPABASE_ANON_KEY` Vercel proje ayarlarına tanımlandı. Değerlerin kendisi repoda tutulmaz; yalnız public anon anahtarı kullanılmalı, service role anahtarı kesinlikle web sitesine eklenmemelidir.
- İletişim formu bir backend’e gönderim yapmak yerine e-posta taslağı açar.
- Blog ve kılavuz sayfaları yer tutucu içerik taşır.
- Yasal metinler taslaktır ve yayın öncesi uzman incelemesi gerektirir.
- Commit, push ve deploy işlemleri yalnız açık kullanıcı onayıyla yapılmalıdır.
