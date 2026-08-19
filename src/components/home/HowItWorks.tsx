const steps = [
  {
    number: "01",
    duration: "10 sn",
    title: "Talep düşer",
    description: "Müşteri talebi sisteme anında düşer, bekleme olmaz.",
  },
  {
    number: "02",
    duration: "30 sn",
    title: "Araç atanır",
    description: "Uygun araç otomatik önerilir, tek dokunuşla atanır.",
  },
  {
    number: "03",
    duration: "3 dk",
    title: "Teslim edilir",
    description: "Saha ekibi mobil üzerinden teslimatı tamamlar.",
  },
  {
    number: "04",
    duration: "iade",
    title: "Kayıt kapanır",
    description: "İade alınır, kayıt ve faturalama otomatik kapanır.",
  },
];

export default function HowItWorks() {
  return (
    <section id="nasil-calisir" className="container-page scroll-mt-24 py-6 sm:py-10">
      <div className="overflow-hidden rounded-3xl bg-brand-navy-deep p-8 sm:p-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-green">
              Bir teslimatın hikâyesi
            </span>
            <h2 className="mt-4 max-w-xl text-2xl font-extrabold leading-tight text-white sm:text-3xl">
              Talep geldi, araç çıktı, kayıt kapandı.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/50">
            Yeni çalışanın öğrenme süresi ortalama 20 dakika. Eğitim için gün ayırmıyorsun.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-4 gap-1.5 sm:mt-12">
          {steps.map((step, i) => (
            <span
              key={step.number}
              className={`h-1.5 rounded-full ${i === 0 ? "bg-brand-green" : "bg-white/15"}`}
            />
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step) => (
            <div key={step.number} className="border-t border-white/10 pt-4">
              <span className="text-xs font-bold tracking-wider text-brand-green">
                {step.number} · {step.duration}
              </span>
              <h3 className="mt-2 text-[15px] font-bold text-white">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/45">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
