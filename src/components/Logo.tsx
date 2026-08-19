import Image from "next/image";
import Link from "next/link";

const ASSETS = {
  color: { plain: "/logo/rentokey-logo.png", full: "/logo/rentokey-logo-full.png" },
  white: { plain: "/logo/rentokey-logo-white.png", full: "/logo/rentokey-logo-full-white.png" },
} as const;

export default function Logo({
  variant = "color",
  withSlogan = false,
  size = "h-9",
  className = "",
}: {
  variant?: "color" | "white";
  withSlogan?: boolean;
  size?: string;
  className?: string;
}) {
  const src = withSlogan ? ASSETS[variant].full : ASSETS[variant].plain;
  const width = withSlogan ? 440 : 432;

  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label="Rent Okey anasayfa">
      <Image src={src} alt="Rent Okey" width={width} height={100} priority className={`${size} w-auto`} />
    </Link>
  );
}
