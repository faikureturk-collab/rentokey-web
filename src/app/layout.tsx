import type { Metadata } from "next";
import "@fontsource-variable/inter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Rent Okey — Araç Kiralama Operasyon Yönetimi",
    template: "%s | Rent Okey",
  },
  description:
    "Rent Okey; filo yönetimi, rezervasyon, teslimat ve raporlamayı tek platformda toplayan araç kiralama operasyon yazılımıdır.",
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
