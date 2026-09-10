import { MessageCircle, ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

export default function WhatsAppLink({ dark = false, locale = "tr" }: { dark?: boolean; locale?: "tr" | "en" }) {
  const en = locale === "en";
  return (
    <a
      href={en ? `https://wa.me/905413901020?text=${encodeURIComponent("Hello, I would like to learn more about RentOkey.")}` : WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={en ? "Chat on WhatsApp (opens in a new tab)" : "WhatsApp’tan yazın (yeni sekmede açılır)"}
      className={`inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-green ${dark ? "border border-white/20 bg-white/5 text-white hover:bg-white/10" : "bg-brand-green-dark text-white hover:bg-brand-navy"}`}
    >
      <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span>{en ? "Chat on WhatsApp" : "WhatsApp’tan yazın"}</span>
      <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
    </a>
  );
}
