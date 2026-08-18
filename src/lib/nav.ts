export type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: {
  label: string;
  href: string;
  children?: NavLink[];
}[] = [
  { label: "Ürün", href: "/#urun" },
  { label: "Özellikler", href: "/#ozellikler" },
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
    { label: "Özellikler", href: "/#ozellikler" },
    { label: "Fiyatlandırma", href: "/#fiyatlandirma" },
    { label: "Güncellemeler", href: "/guncellemeler" },
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
