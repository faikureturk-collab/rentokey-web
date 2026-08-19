import { GroupGlossyIcon, ShieldBoltIcon } from "@/components/icons/ColorIcons";

const stats = [
  {
    icon: GroupGlossyIcon,
    value: "%38",
    label: "daha az boş araç günü",
    hint: "Ortalama müşterilerimizde",
  },
  {
    icon: ShieldBoltIcon,
    value: "Aynı gün",
    label: "Canlıya geçiş",
    hint: "Kurulum gerekmez, hemen başlayın",
  },
  {
    icon: GroupGlossyIcon,
    value: "500+",
    label: "kullanıcı",
    hint: "Güvenle kullanıyor",
  },
];

export default function StatsBar() {
  return (
    <section className="container-page -mt-4 sm:mt-0">
      <div className="grid grid-cols-1 gap-6 rounded-3xl border border-surface-border bg-white p-8 shadow-sm shadow-brand-navy/5 sm:grid-cols-3 sm:divide-x sm:divide-surface-border">
        {stats.map((stat, i) => (
          <div key={i} className="flex items-center gap-4 sm:justify-center sm:px-6">
            <stat.icon size={44} />
            <div>
              <p className="text-xl font-extrabold leading-tight text-brand-navy">
                {stat.value}
                {i !== 1 && <span className="ml-1 text-base font-semibold text-brand-navy/70">{stat.label}</span>}
              </p>
              {i === 1 && <p className="text-base font-semibold text-brand-navy/70">{stat.label}</p>}
              <p className="text-sm text-brand-navy/45">{stat.hint}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
