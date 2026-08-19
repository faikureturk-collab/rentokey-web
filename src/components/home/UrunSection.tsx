import UrunTabs from "./UrunTabs";

export default function UrunSection() {
  return (
    <section id="urun" className="scroll-mt-24 border-t border-surface-border">
      <div className="container-page py-16 sm:py-24">
        <UrunTabs />
      </div>
    </section>
  );
}
