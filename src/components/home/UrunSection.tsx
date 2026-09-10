import UrunTabs from "./UrunTabs";

export default function UrunSection({ locale = "tr" }: { locale?: "tr" | "en" }) {
  return (
    <section id={locale === "en" ? "product" : "urun"} className="scroll-mt-24 border-t border-surface-border">
      <div className="container-page py-16 sm:py-24">
        <UrunTabs locale={locale} />
      </div>
    </section>
  );
}
