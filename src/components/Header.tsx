"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";
import Button from "./Button";
import { primaryNav } from "@/lib/nav";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-surface-border/70 bg-white/90 backdrop-blur">
      <div className="container-page flex h-[72px] items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {primaryNav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button className="flex items-center gap-1 text-[15px] font-medium text-brand-navy/80 transition-colors hover:text-brand-navy">
                  {item.label}
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-1/2 top-full z-20 w-56 -translate-x-1/2 translate-y-1 rounded-2xl border border-surface-border bg-white p-2 opacity-0 shadow-xl shadow-brand-navy/5 transition-all duration-150 group-hover:visible group-hover:translate-y-2 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-xl px-3 py-2.5 text-sm font-medium text-brand-navy/80 hover:bg-surface-soft hover:text-brand-navy"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] font-medium text-brand-navy/80 transition-colors hover:text-brand-navy"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://app.rentokey.com"
            className="px-3 text-[15px] font-medium text-brand-navy/80 hover:text-brand-navy"
          >
            Giriş yap
          </a>
          <Button href="/ucretsiz-dene">Ücretsiz dene</Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-brand-navy lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menüyü aç/kapat"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-surface-border bg-white px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col divide-y divide-surface-border/70">
            {primaryNav.map((item) =>
              item.children ? (
                <div key={item.label} className="py-1">
                  <button
                    className="flex w-full items-center justify-between py-3 text-[15px] font-medium text-brand-navy"
                    onClick={() => setMobileResourcesOpen((v) => !v)}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${mobileResourcesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileResourcesOpen && (
                    <div className="flex flex-col gap-1 pb-2 pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="py-2 text-sm text-brand-navy/70"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-3 text-[15px] font-medium text-brand-navy"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href="https://app.rentokey.com"
              className="rounded-full border border-surface-border py-2.5 text-center text-[15px] font-medium text-brand-navy"
              onClick={() => setMobileOpen(false)}
            >
              Giriş yap
            </a>
            <Button href="/ucretsiz-dene" className="w-full">
              Ücretsiz dene
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
