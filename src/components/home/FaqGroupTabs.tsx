"use client";

import { useState } from "react";
import FaqAccordion from "../FaqAccordion";
import { englishFaqGroups, faqGroups } from "@/lib/faq";

export default function FaqGroupTabs({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const groups = locale === "en" ? englishFaqGroups : faqGroups;
  const [activeId, setActiveId] = useState(groups[0].id);
  const activeGroup = groups.find((group) => group.id === activeId) ?? groups[0];

  return (
    <div className="min-w-0">
      <div className="rounded-2xl bg-surface-soft p-1.5">
        <div
          aria-label={locale === "en" ? "Frequently asked question categories" : "Sıkça sorulan soru kategorileri"}
          className="flex gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-3"
        >
          {groups.map((group) => {
            const active = group.id === activeGroup.id;

            return (
              <button
                key={group.id}
                type="button"
                aria-pressed={active}
                aria-controls={`faq-panel-${group.id}`}
                onClick={() => setActiveId(group.id)}
                className={`min-w-max rounded-xl px-4 py-3 text-sm font-bold transition-colors lg:min-w-0 ${
                  active
                    ? "bg-white text-brand-navy shadow-sm"
                    : "text-brand-navy/50 hover:bg-white/60 hover:text-brand-navy/75"
                }`}
              >
                {group.label}
              </button>
            );
          })}
        </div>
      </div>

      <div
        key={activeGroup.id}
        id={`faq-panel-${activeGroup.id}`}
        className="mt-4"
      >
        <FaqAccordion items={activeGroup.items} columns={false} locale={locale} />
      </div>
    </div>
  );
}
