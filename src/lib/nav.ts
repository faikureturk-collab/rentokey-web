export type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: {
  label: string;
  href: string;
  children?: NavLink[];
}[] = [
  {
    label: "Ürün",
    href: "/#urun",
    children: [
      { label: "Operasyon platformu", href: "/#urun" },
      { label: "Özellikler", href: "/#ozellikler" },
      { label: "Önerilen odak", href: "/#onerilen-odak" },
      { label: "Nasıl çalışır?", href: "/#nasil-calisir" },
    ],
  },
  { label: "Fiyatlandırma", href: "/#fiyatlandirma" },
  {
    label: "Kaynaklar",
    href: "/kaynaklar",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "Kılavuzlar", href: "/kilavuzlar" },
      { label: "Sık Sorulan Sorular", href: "/#sss" },
    ],
  },
  { label: "Hakkımızda", href: "/#hakkimizda" },
];

export const footerNav = {
  urun: [
    { label: "Operasyon platformu", href: "/#urun" },
    { label: "Özellikler", href: "/#ozellikler" },
    { label: "Önerilen odak", href: "/#onerilen-odak" },
    { label: "Fiyatlandırma", href: "/#fiyatlandirma" },
    { label: "14 gün ücretsiz dene", href: "/ucretsiz-dene" },
  ],
  kaynaklar: [
    { label: "Blog", href: "/blog" },
    { label: "Kılavuzlar", href: "/kilavuzlar" },
    { label: "SSS", href: "/#sss" },
  ],
  sirket: [
    { label: "Hakkımızda", href: "/#hakkimizda" },
    { label: "İletişim", href: "/#iletisim" },
    { label: "Kariyer", href: "/kariyer" },
  ],
};
