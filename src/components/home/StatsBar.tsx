import { GroupGlossyIcon, ShieldBoltIcon, TimerIcon, QuickLearnIcon } from "@/components/icons/ColorIcons";

const stats = [
  {
    icon: GroupGlossyIcon,
    value: "%38",
    label: "daha az boş araç günü",
    hint: "Ortalama müşterilerimizde",
  },
  {
    icon: TimerIcon,
    value: "%45",
    label: "daha az operasyon süresi",
    hint: "Ortalama çalışana göre",
  },
  {
    icon: ShieldBoltIcon,
    value: "Aynı gün",
    label: "Canlıya geçiş",
    hint: "Kurulum gerekmez, hemen başlayın",
  },
  {
    icon: QuickLearnIcon,
    value: "20 dk",
    label: "Öğrenme süresi",
    hint: "Ortalama yeni kullanıcıda",
  },
];

export default function StatsBar() {
  return (
    <section className="container-page -mt-4 sm:mt-0">
      <div className="grid grid-cols-2 gap-x-6 gap-y-8 rounded-3xl border border-surface-border bg-white p-6 shadow-sm shadow-brand-navy/5 sm:p-8 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-surface-border">
        {stats.map((stat, i) => (
          <div key={i} className="flex items-center gap-3 lg:justify-center lg:px-6">
            <stat.icon size={40} />
            <div>
              <p className="text-xl font-extrabold leading-tight text-brand-navy">{stat.value}</p>
              <p className="text-sm font-semibold text-brand-navy/70">{stat.label}</p>
              <p className="text-xs text-brand-navy/45">{stat.hint}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
