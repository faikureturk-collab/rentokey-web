"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqAccordion({
  items,
  columns = true,
}: {
  items: { question: string; answer: string }[];
  columns?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={columns ? "grid grid-cols-1 gap-3 sm:grid-cols-2" : "flex flex-col gap-3"}>
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div
            key={item.question}
            className="h-fit rounded-2xl border border-surface-border bg-white"
          >
            <button
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={open}
            >
              <span className="text-[15px] font-medium text-brand-navy">{item.question}</span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-brand-navy/50 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>
            {open && (
              <p className="px-5 pb-4 text-sm leading-relaxed text-brand-navy/55">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
