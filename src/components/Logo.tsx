import Image from "next/image";
import Link from "next/link";

export default function Logo({
  variant = "color",
  className = "",
}: {
  variant?: "color" | "white";
  className?: string;
}) {
  const src =
    variant === "white" ? "/logo/rentokey-logo-white.svg" : "/logo/rentokey-logo.svg";

  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label="Rent Okey anasayfa">
      <Image src={src} alt="Rent Okey" width={155} height={40} priority className="h-9 w-auto" />
    </Link>
  );
}
