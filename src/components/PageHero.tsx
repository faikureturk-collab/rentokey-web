import { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-surface-border bg-surface-soft/50">
      <div className="container-page py-16 text-center sm:py-20">
        {eyebrow && (
          <span className="inline-flex rounded-full bg-brand-green/10 px-4 py-1.5 text-sm font-semibold text-brand-green">
            {eyebrow}
          </span>
        )}
        <h1 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-brand-navy sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-brand-navy/55 sm:text-lg">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
