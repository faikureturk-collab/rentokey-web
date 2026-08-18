import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  icon?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-150 whitespace-nowrap";

const variants: Record<string, string> = {
  primary:
    "bg-brand-green text-white hover:bg-brand-green-dark shadow-sm shadow-brand-green/20",
  secondary:
    "bg-white text-brand-navy border border-surface-border hover:border-brand-navy/30",
  ghost: "text-brand-navy hover:text-brand-green",
};

const sizes: Record<string, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[15px]",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon = false,
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {icon && <ArrowRight className="h-4 w-4" strokeWidth={2.5} />}
    </Link>
  );
}
