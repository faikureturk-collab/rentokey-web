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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={columns ? "grid grid-cols-1 gap-3 sm:grid-cols-2" : "flex flex-col gap-3"}>
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div
            key={item.question}
            className={`h-fit rounded-2xl border transition-colors ${open ? "border-brand-green/25 bg-brand-green/[0.025]" : "border-surface-border bg-white hover:border-brand-navy/15"}`}
          >
            <button
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
              aria-expanded={open}
            >
              <span className="flex items-start gap-3 text-[15px] font-bold text-brand-navy"><span className="mt-0.5 text-[10px] font-extrabold tracking-[0.1em] text-brand-green-dark">{String(i + 1).padStart(2, "0")}</span>{item.question}</span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-brand-navy/50 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>
            {open && (
              <p className="px-5 pb-5 pl-[52px] text-sm leading-relaxed text-brand-navy/55 sm:px-6 sm:pl-[56px]">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
