import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import WhatsAppLink from "./WhatsAppLink";
import { footerNav } from "@/lib/nav";
import { LINKEDIN_URL } from "@/lib/seo";
import { LinkedInIcon } from "./SocialIcons";

export default function Footer({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const en = locale === "en";
  return (
    <footer className="bg-brand-navy-deep text-white">
      <div className="container-page py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(12.5rem,1.25fr)]">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo variant="white" withSlogan size="h-11" locale={locale} />
            <p className="mt-4 max-w-[270px] text-sm leading-relaxed text-white/60">
              {en ? "Reservations, fleet planning, handovers, returns and operational priorities for car rental businesses in Türkiye and Northern Cyprus." : "Türkiye ve KKTC’de araç kiralama operasyonları için rezervasyon, filo, teslim/iade ve önerilen odak platformu."}
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-white/65">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">{en ? "Türkiye + Northern Cyprus" : "Türkiye + KKTC"}</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">{en ? "21 days free" : "21 gün ücretsiz"}</span>
            </div>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={en ? "Rent Okey on LinkedIn" : "Rent Okey LinkedIn şirket sayfası"}
              className="mt-5 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white/70 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              <LinkedInIcon className="h-4 w-4 text-brand-green" aria-hidden="true" />
              <span>{en ? "Follow us on LinkedIn" : "LinkedIn’de takip edin"}</span>
            </a>
          </div>

          <FooterColumn title={en ? "Product" : "Ürün"} links={en ? [{label:"Operations platform",href:"/en#product"},{label:"RentOkey Pilot",href:"/en/pilot"},{label:"Pricing",href:"/en#pricing"},{label:"Start free trial",href:"/en/free-trial"}] : footerNav.urun} />
          <FooterColumn title={en ? "Resources" : "Kaynaklar"} links={en ? [{label:"FAQ",href:"/en#faq"},{label:"Data migration",href:"/en#migration"},{label:"Blog (Turkish)",href:"/blog"}] : footerNav.kaynaklar} />
          <FooterColumn title={en ? "Company" : "Şirket"} links={en ? [{label:"About us",href:"/en#about"},{label:"Contact",href:"/en#contact"}] : footerNav.sirket} />

          <div className="min-w-0">
            <h4 className="text-sm font-semibold text-white">{en ? "Contact" : "İletişim"}</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                <a href="mailto:hello@rentokey.com" className="whitespace-nowrap hover:text-white">
                  hello@rentokey.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                <a href="tel:+905413901020" className="hover:text-white">
                  +90 541 390 10 20
                </a>
              </li>
              <li><WhatsAppLink dark locale={locale} /></li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                <span>Maslak Mah. Eski Büyükdere Cad. No:27 Sarıyer / İstanbul</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Rent Okey. {en ? "All rights reserved." : "Tüm hakları saklıdır."}</p>
          <div className="flex items-center gap-6">
            <Link href={en ? "/en/privacy" : "/gizlilik-politikasi"} className="hover:text-white">
              {en ? "Privacy Policy" : "Gizlilik Politikası"}
            </Link>
            <Link href={en ? "/en/terms" : "/kullanim-sartlari"} className="hover:text-white">
              {en ? "Terms of Use" : "Kullanım Şartları"}
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
