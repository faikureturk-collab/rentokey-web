import Button from "../Button";
import DashboardMock from "../DashboardMock";

export default function Hero({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const en = locale === "en";
  const trustItems = en
    ? ["No credit card", "No setup fee", "Request free migration support within the first 48 hours"]
    : ["Kredi kartı yok", "Kurulum ücreti yok", "İlk 48 saat içinde ücretsiz aktarım desteği talep edin"];
  return (
    <section className="overflow-hidden bg-[radial-gradient(circle_at_78%_28%,rgba(24,184,120,0.11),transparent_36%)] py-8 sm:py-10 lg:py-8">
      <div className="mx-auto grid w-full max-w-[1320px] items-center gap-9 px-5 lg:grid-cols-[0.84fr_1.16fr] lg:gap-9 xl:gap-12">
        <div className="max-w-[590px]">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-green/25 bg-brand-green/5 px-4 py-1.5 text-sm font-semibold text-brand-green-dark">
            <i className="h-2 w-2 rounded-full bg-brand-green" />
            {en ? "Car rental software for Türkiye and Northern Cyprus" : "Türkiye ve KKTC için araç kiralama programı"}
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] text-brand-navy sm:text-5xl xl:text-[54px]">
            <span className="sm:block">{en ? "Run the operation. " : "Operasyonu yönetin. "}</span>
            <span className="text-brand-green sm:block">{en ? "Not the chaos." : "Yoğunluğu değil."}</span>
          </h1>

          <p className="mt-4 text-base leading-relaxed text-brand-navy/55 sm:text-[16px]">
            {en ? "Manage handovers, returns and vehicle plans from one screen; identify outstanding balances and insufficient preparation time before they become delays." : <>Türkiye ve KKTC&apos;de teslim, iade ve araç planını tek ekranda yönetin; ödenmemiş bakiye ve yetersiz hazırlık süresi gibi riskleri gecikmeden görün.</>}
          </p>

          <div className="mt-6">
            <Button href={en ? "/en/free-trial" : "/ucretsiz-dene"} size="lg" icon className="w-full sm:w-auto">
              {en ? "Try free for 21 days" : "21 gün ücretsiz deneyin"}
            </Button>
          </div>

          <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-[11px] font-semibold text-brand-navy/48 sm:text-xs">
            {trustItems.map((item, index) => (
              <span key={item} className="inline-flex items-center gap-3">
                {index > 0 && <i aria-hidden="true">·</i>}
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="min-w-0">
          <DashboardMock locale={locale} />
        </div>
      </div>
    </section>
  );
}
