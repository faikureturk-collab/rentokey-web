# Rent Okey — Web Sitesi

Rent Okey için Next.js (App Router) + Tailwind CSS ile geliştirilmiş, çok sayfalı kurumsal web sitesi. Anasayfa, `RentOkey_Web_Tasarım.png` tasarım görseline birebir sadık kalınarak kodlanmıştır.

## Başlarken

```bash
npm install
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

Production build almak için:

```bash
npm run build
npm run start
```

## Proje yapısı

- `src/app/` — Sayfalar (App Router). Her klasör bir rotayı temsil eder (`/urun`, `/ozellikler`, `/fiyatlandirma`, `/hakkimizda`, `/iletisim`, `/kaynaklar`, `/blog`, `/kilavuzlar`, `/sss`, `/guncellemeler`, `/kariyer`, `/giris`, `/ucretsiz-dene`, `/gizlilik-politikasi`, `/kullanim-sartlari`).
- `src/components/` — Header, Footer, Button, PricingSection, FaqAccordion, DashboardMock (anasayfadaki ürün görseli) gibi ortak bileşenler.
- `src/components/home/` — Sadece anasayfaya özel bölümler (Hero, StatsBar, FeatureGrid, ProductShowcase, HowItWorks, FaqSection).
- `src/lib/` — Navigasyon linkleri, fiyatlandırma planları, SSS ve özellik listeleri gibi içerik verileri (bu dosyalardan metinleri güncelleyebilirsiniz).
- `public/logo/` — Marka logosu ve ikonu (renkli ve beyaz versiyonlar).

## Marka renkleri

Logo dosyasından türetilen marka paleti `src/app/globals.css` içinde tanımlıdır:

- Yeşil: `#18B878`
- Mavi (gradient): `#1769E0`
- Lacivert (metin/footer): `#0B1F33` / `#06152C`

## Notlar

- İletişim formu, giriş ve ücretsiz deneme formları şu an sadece arayüz olarak hazırlanmıştır; gerçek bir backend'e (API, e-posta servisi, CRM vb.) bağlanmamıştır. Formları çalışır hale getirmek için bir form işleme servisi veya kendi API route'unuzu eklemeniz gerekir.
- Blog, Kılavuzlar ve Güncellemeler sayfalarındaki içerikler örnek/yer tutucu metinlerdir; gerçek içeriklerinizle değiştirebilirsiniz.
- Gizlilik Politikası ve Kullanım Şartları sayfaları taslak niteliğindedir; yayına almadan önce bir hukuk danışmanına gözden geçirtmeniz önerilir.
- Yazı tipi olarak Google Fonts yerine `@fontsource-variable/inter` paketiyle self-hosted (yerel) Inter fontu kullanılmıştır; bu sayede site internet bağlantısı olmayan ortamlarda da sorunsuz build alınabilir.

<!-- Test commit: 2026-08-18 16:53 tarihinde Claude tarafindan eklendi -->
