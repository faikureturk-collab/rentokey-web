import { CheckCircle2, LucideIcon } from "lucide-react";

export type Module = {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
};

export default function ModuleRow({ module, reverse }: { module: Module; reverse?: boolean }) {
  return (
    <div
      className={`grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16 ${
        reverse ? "" : ""
      }`}
    >
      <div className={reverse ? "lg:order-2" : ""}>
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
          <module.icon className="h-6 w-6" strokeWidth={1.75} />
        </span>
        <h3 className="mt-5 text-2xl font-extrabold text-brand-navy">{module.title}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-brand-navy/55">{module.description}</p>
        <ul className="mt-5 space-y-3">
          {module.bullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-2.5">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-green" />
              <span className="text-sm text-brand-navy/70">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={reverse ? "lg:order-1" : ""}>
        <div className="flex aspect-[4/3] items-center justify-center rounded-3xl border border-surface-border bg-surface-soft/60">
          <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-brand-green shadow-sm">
            <module.icon className="h-10 w-10" strokeWidth={1.5} />
          </span>
        </div>
      </div>
    </div>
  );
}
