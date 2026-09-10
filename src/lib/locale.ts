export type Locale = "tr" | "en";

export const localeRoutes = [
  ["/", "/en"],
  ["/ucretsiz-dene", "/en/free-trial"],
  ["/okey-pilot", "/en/pilot"],
  ["/arac-kiralama-programi", "/en/car-rental-software"],
  ["/arac-kiralama-rezervasyon-takvimi", "/en/car-rental-reservation-calendar"],
  ["/gizlilik-politikasi", "/en/privacy"],
  ["/kullanim-sartlari", "/en/terms"],
] as const;

export function alternateRoutes(path: string) {
  const clean = path.replace(/\/$/, "") || "/";
  return localeRoutes.find((pair) => pair.some((entry) => entry === clean));
}

export function languageHref(path: string, locale: Locale) {
  const pair = alternateRoutes(path);
  return pair ? pair[locale === "tr" ? 0 : 1] : locale === "tr" ? "/" : "/en";
}
