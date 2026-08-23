import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { footerNav } from "@/lib/nav";

export default function Footer() {
  return (
    <footer className="bg-brand-navy-deep text-white">
      <div className="container-page py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <Logo variant="white" withSlogan size="h-11" />
            <p className="mt-4 max-w-[270px] text-sm leading-relaxed text-white/60">
              Türkiye ve KKTC’de araç kiralama operasyonları için rezervasyon, filo, teslim/iade ve önerilen odak platformu.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-white/65">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Türkiye + KKTC</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">14 gün ücretsiz</span>
            </div>
          </div>

          <FooterColumn title="Ürün" links={footerNav.urun} />
          <FooterColumn title="Kaynaklar" links={footerNav.kaynaklar} />
          <FooterColumn title="Şirket" links={footerNav.sirket} />

          <div>
            <h4 className="text-sm font-semibold text-white">İletişim</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                <a href="mailto:hello@rentokey.com" className="hover:text-white">
                  hello@rentokey.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                <a href="tel:+905413901020" className="hover:text-white">
                  +90 541 390 10 20
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                <span>Maslak Mah. Eski Büyükdere Cad. No:27 Sarıyer / İstanbul</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Rent Okey. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6">
            <Link href="/gizlilik-politikasi" className="hover:text-white">
              Gizlilik Politikası
            </Link>
            <Link href="/kullanim-sartlari" className="hover:text-white">
              Kullanım Şartları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-white">{title}</h4>
      <ul className="mt-4 space-y-3 text-sm text-white/60">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
