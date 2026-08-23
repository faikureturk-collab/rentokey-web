import type { Metadata } from "next";
import "@fontsource-variable/inter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rentokey.com"),
  title: {
    default: "Rent Okey — Araç Kiralama Operasyon Yönetimi",
    template: "%s | Rent Okey",
  },
  description:
    "Rent Okey; filo yönetimi, rezervasyon, teslimat ve raporlamayı tek platformda toplayan araç kiralama operasyon yazılımıdır.",
  openGraph: {
    title: "Rent Okey — Operasyonu yönetin. Yoğunluğu değil.",
    description:
      "Rezervasyon, araç planlama, teslim, iade ve yaklaşan riskleri tek operasyon merkezinden yönetin.",
    type: "website",
    locale: "tr_TR",
    url: "/",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Rent Okey rent a car operasyon platformu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rent Okey — Operasyonu yönetin. Yoğunluğu değil.",
    description:
      "Rezervasyon, araç planlama, teslim, iade ve yaklaşan riskleri tek operasyon merkezinden yönetin.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-white text-brand-navy">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
