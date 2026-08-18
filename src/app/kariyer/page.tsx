import type { Metadata } from "next";
import { Mail } from "lucide-react";
import PageHero from "@/components/PageHero";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Kariyer",
  description: "Rent Okey ekibine katılın.",
};

export default function KariyerPage() {
  return (
    <PageHero
      eyebrow="Kariyer"
      title="Rent Okey ekibine katılın"
      description="Şu anda açık pozisyonumuz bulunmuyor, ancak özgeçmişinizi bize ulaştırabilirsiniz — uygun bir pozisyon açıldığında sizinle iletişime geçelim."
    >
      <div className="mt-8 flex justify-center">
        <Button href="mailto:info@rentokey.com" size="lg">
          <Mail className="h-4 w-4" /> Özgeçmiş gönder
        </Button>
      </div>
    </PageHero>
  );
}
