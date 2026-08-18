// Çok renkli / illüstratif ikon seti — RentOkey tasarım görselindeki dolgulu,
// tek renkli lucide ikonları yerine tasarımdaki gibi renkli/illüstratif ikonlar için.

import type { ReactNode } from "react";

function IconWrap({
  size = 48,
  viewBox = "0 0 48 48",
  children,
}: {
  size?: number;
  viewBox?: string;
  children: ReactNode;
}) {
  return (
    <svg width={size} height={size} viewBox={viewBox} fill="none" aria-hidden>
      {children}
    </svg>
  );
}

/* ---------- İstatistik şeridi ikonları ---------- */

export function GroupGlossyIcon({ size = 48 }: { size?: number }) {
  return (
    <IconWrap size={size}>
      <defs>
        <linearGradient id="grpG" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4ADE93" />
          <stop offset="1" stopColor="#0F9C61" />
        </linearGradient>
      </defs>
      <rect x="17" y="6" width="14" height="16" rx="7" fill="url(#grpG)" />
      <rect x="6" y="14" width="11" height="13" rx="5.5" fill="url(#grpG)" />
      <rect x="31" y="14" width="11" height="13" rx="5.5" fill="url(#grpG)" />
      <rect x="6" y="27" width="12" height="14" rx="6" fill="url(#grpG)" />
      <rect x="30" y="27" width="12" height="14" rx="6" fill="url(#grpG)" />
      <rect x="19" y="22" width="10" height="19" rx="4" fill="url(#grpG)" />
    </IconWrap>
  );
}

export function ShieldBoltIcon({ size = 48 }: { size?: number }) {
  return (
    <IconWrap size={size}>
      <defs>
        <linearGradient id="shG" x1="8" y1="4" x2="40" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3DD68C" />
          <stop offset="1" stopColor="#0EA25E" />
        </linearGradient>
      </defs>
      <path
        d="M24 4 L41 10.5 V22 C41 32.5 34.2 40.4 24 44 C13.8 40.4 7 32.5 7 22 V10.5 Z"
        fill="url(#shG)"
      />
      <path d="M26 14 L16 26.5 H23L21.5 34.5 L32 21H24.5L26 14Z" fill="#fff" />
    </IconWrap>
  );
}

/* ---------- Özellik kartı ikonları ---------- */

export function GanttFeatureIcon({ size = 48 }: { size?: number }) {
  return (
    <IconWrap size={size}>
      <rect x="2" y="6" width="44" height="36" rx="8" fill="#F0F3F8" />
      <rect x="9" y="15" width="17" height="6" rx="3" fill="#18B878" />
      <rect x="20" y="24" width="19" height="6" rx="3" fill="#7C6CF0" />
      <rect x="11" y="33" width="15" height="6" rx="3" fill="#1769E0" />
    </IconWrap>
  );
}

export function MobileAppFeatureIcon({ size = 48 }: { size?: number }) {
  return (
    <IconWrap size={size}>
      <rect x="12" y="3" width="24" height="42" rx="6" fill="none" stroke="#0B1F33" strokeWidth="2.5" />
      <rect x="19" y="8" width="10" height="2.5" rx="1.25" fill="#0B1F33" />
      <path
        d="M24 16C20.4 16 17.5 18.8 17.5 22.3C17.5 26.8 24 33 24 33C24 33 30.5 26.8 30.5 22.3C30.5 18.8 27.6 16 24 16Z"
        fill="#18B878"
      />
      <circle cx="24" cy="22" r="3" fill="#F0F3F8" />
      <rect x="18" y="37" width="12" height="2.4" rx="1.2" fill="#18B878" fillOpacity="0.5" />
    </IconWrap>
  );
}

export function CarKeyFeatureIcon({ size = 48 }: { size?: number }) {
  return (
    <IconWrap size={size}>
      <path
        d="M6 29 L9 20C9.7 18 11.2 17 13.3 17H24.7C26.8 17 28.3 18 29 20L32 29"
        stroke="#0B1F33"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <rect x="4" y="28" width="30" height="8" rx="4" fill="#0B1F33" />
      <circle cx="10.5" cy="36" r="3" fill="#0B1F33" />
      <circle cx="27.5" cy="36" r="3" fill="#0B1F33" />
      <rect x="11" y="21" width="16" height="4" rx="1.5" fill="#F0F3F8" />
      <circle cx="36" cy="12" r="4" fill="none" stroke="#18B878" strokeWidth="2.4" />
      <path
        d="M39.8 12H47M43.5 12V15.5M46 12V14.8"
        stroke="#18B878"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconWrap>
  );
}

export function ReportsFeatureIcon({ size = 48 }: { size?: number }) {
  return (
    <IconWrap size={size}>
      <rect x="2" y="4" width="44" height="40" rx="8" fill="#F0F3F8" />
      <rect x="9" y="27" width="5" height="10" rx="1.5" fill="#18B878" />
      <rect x="16" y="21" width="5" height="16" rx="1.5" fill="#18B878" />
      <rect x="23" y="14" width="5" height="23" rx="1.5" fill="#18B878" />
      <circle cx="36" cy="24" r="9" fill="#E7EAF1" />
      <path d="M36 15 A9 9 0 0 1 44.6 21.5 L36 24Z" fill="#18B878" />
      <path d="M36 15 A9 9 0 0 1 36 33 L36 24Z" fill="#1769E0" />
    </IconWrap>
  );
}

export function UsersRoleFeatureIcon({ size = 48 }: { size?: number }) {
  return (
    <IconWrap size={size}>
      <circle cx="17" cy="15" r="6.5" fill="#0B1F33" fillOpacity="0.35" />
      <path
        d="M6 38C6 30.8 10.8 26 17 26C23.2 26 28 30.8 28 38"
        fill="#0B1F33"
        fillOpacity="0.35"
      />
      <circle cx="29" cy="17" r="7" fill="#0B1F33" />
      <path d="M17 40C17 32 22.3 27 29 27C35.7 27 41 32 41 40" fill="#0B1F33" />
      <circle cx="37" cy="37" r="9" fill="#18B878" />
      <rect x="33.3" y="35.3" width="7.4" height="6" rx="1.6" fill="#fff" />
      <path
        d="M34.8 35.3V33.6C34.8 31.9 36.2 30.6 37.9 30.6H37.1C38.8 30.6 40.2 31.9 40.2 33.6V35.3"
        stroke="#fff"
        strokeWidth="1.6"
        fill="none"
      />
    </IconWrap>
  );
}
