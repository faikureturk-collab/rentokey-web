import Image from "next/image";
import Link from "next/link";

const ASSETS = {
  color: { plain: "/logo/rentokey-logo.svg", full: "/logo/rentokey-logo-full.svg" },
  white: { plain: "/logo/rentokey-logo-white.svg", full: "/logo/rentokey-logo-full-white.svg" },
} as const;

export default function Logo({
  variant = "color",
  withSlogan = false,
  size = "h-9",
  className = "",
  locale = "tr",
}: {
  variant?: "color" | "white";
  withSlogan?: boolean;
  size?: string;
  className?: string;
  locale?: "tr" | "en";
}) {
  const src = withSlogan ? ASSETS[variant].full : ASSETS[variant].plain;

  return (
    <Link href={locale === "en" ? "/en" : "/"} className={`inline-flex items-center ${className}`} aria-label={locale === "en" ? "Rent Okey home" : "Rent Okey anasayfa"}>
      <Image src={src} alt="Rent Okey" width={890} height={220} priority className={`${size} w-auto`} />
    </Link>
  );
}
