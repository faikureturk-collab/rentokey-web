import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, "..");
const logoPath = path.join(projectRoot, "public/logo/rentokey-logo-white.svg");
const iconPath = path.join(projectRoot, "public/logo/rentokey-icon.svg");
const outputPath = path.join(projectRoot, "public/og.png");

const card = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="background" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#041326"/>
      <stop offset="0.58" stop-color="#071b33"/>
      <stop offset="1" stop-color="#0b2945"/>
    </linearGradient>
    <radialGradient id="glow" cx="78%" cy="45%" r="48%">
      <stop offset="0" stop-color="#1769e0" stop-opacity="0.24"/>
      <stop offset="0.55" stop-color="#18b878" stop-opacity="0.08"/>
      <stop offset="1" stop-color="#06152c" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="timelineBlue" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#1769e0"/>
      <stop offset="1" stop-color="#0d86d8"/>
    </linearGradient>
    <linearGradient id="timelineGreen" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#18b878"/>
      <stop offset="1" stop-color="#11a690"/>
    </linearGradient>
    <filter id="shadow" x="-25%" y="-25%" width="150%" height="160%">
      <feDropShadow dx="0" dy="18" stdDeviation="22" flood-color="#000814" flood-opacity="0.55"/>
    </filter>
  </defs>

  <rect width="1200" height="630" fill="url(#background)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <g font-family="Arial, Helvetica, sans-serif">
    <text x="50" y="232" fill="#ffffff" font-size="66" font-weight="700" letter-spacing="-2.8">Operasyonu</text>
    <text x="50" y="305" fill="#ffffff" font-size="66" font-weight="700" letter-spacing="-2.8">yönetin.</text>
    <text x="50" y="391" fill="#ffffff" font-size="66" font-weight="700" letter-spacing="-2.8">Yoğunluğu değil.</text>
    <text x="50" y="444" fill="#c7d2df" font-size="20" font-weight="500">Türkiye ve KKTC için</text>
    <text x="50" y="472" fill="#c7d2df" font-size="20" font-weight="500">araç kiralama operasyon platformu</text>

    <g transform="translate(50 502)">
      <rect width="188" height="38" rx="19" fill="#ffffff" fill-opacity="0.07" stroke="#ffffff" stroke-opacity="0.12"/>
      <circle cx="21" cy="19" r="5" fill="#18b878"/>
      <text x="36" y="25" fill="#d6e0ea" font-size="14" font-weight="700">21 gün ücretsiz</text>
    </g>
    <g transform="translate(248 502)">
      <rect width="198" height="38" rx="19" fill="#ffffff" fill-opacity="0.07" stroke="#ffffff" stroke-opacity="0.12"/>
      <path d="M18 19l4 4 8-9" fill="none" stroke="#18b878" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="39" y="25" fill="#d6e0ea" font-size="14" font-weight="700">Kredi kartı gerekmez</text>
    </g>
  </g>

  <g transform="translate(644 50)" filter="url(#shadow)">
    <rect width="516" height="518" rx="25" fill="#0a1a2e" stroke="#38516d" stroke-width="1.5"/>
    <rect x="1" y="1" width="514" height="54" rx="24" fill="#0d2138"/>
    <circle cx="27" cy="27" r="6" fill="#18b878"/>
    <text x="43" y="33" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="700">Operasyon Merkezi</text>
    <text x="433" y="33" fill="#7f94aa" font-family="Arial, Helvetica, sans-serif" font-size="10">CANLI</text>
    <circle cx="477" cy="27" r="4" fill="#18b878"/>

    <g transform="translate(18 72)" font-family="Arial, Helvetica, sans-serif">
      <g><rect width="110" height="72" rx="12" fill="#102740" stroke="#29435d"/><text x="14" y="21" fill="#7890a8" font-size="9" font-weight="700">TESLİM</text><text x="14" y="52" fill="#46a0ff" font-size="27" font-weight="700">12</text><text x="48" y="50" fill="#7f94aa" font-size="9">bugün</text></g>
      <g transform="translate(120 0)"><rect width="110" height="72" rx="12" fill="#102740" stroke="#29435d"/><text x="14" y="21" fill="#7890a8" font-size="9" font-weight="700">İADE</text><text x="14" y="52" fill="#18b878" font-size="27" font-weight="700">9</text><text x="38" y="50" fill="#7f94aa" font-size="9">bugün</text></g>
      <g transform="translate(240 0)"><rect width="110" height="72" rx="12" fill="#102740" stroke="#29435d"/><text x="14" y="21" fill="#7890a8" font-size="9" font-weight="700">FİLO</text><text x="14" y="52" fill="#ffffff" font-size="27" font-weight="700">54</text><text x="49" y="50" fill="#7f94aa" font-size="9">kirada</text></g>
      <g transform="translate(360 0)"><rect width="120" height="72" rx="12" fill="#102740" stroke="#29435d"/><text x="14" y="21" fill="#7890a8" font-size="9" font-weight="700">ÖNERİLEN ODAK</text><text x="14" y="52" fill="#f5b942" font-size="27" font-weight="700">6</text><text x="35" y="50" fill="#7f94aa" font-size="9">aksiyon</text></g>
    </g>

    <g transform="translate(18 160)" font-family="Arial, Helvetica, sans-serif">
      <rect width="480" height="235" rx="14" fill="#0d2138" stroke="#29435d"/>
      <text x="16" y="27" fill="#ffffff" font-size="12" font-weight="700">Rezervasyon zaman çizelgesi</text>
      <text x="387" y="27" fill="#7890a8" font-size="9">7 GÜN</text>
      <line x1="16" y1="42" x2="464" y2="42" stroke="#29435d"/>
      <g fill="#70869d" font-size="8"><text x="103" y="58">BUGÜN</text><text x="163" y="58">PZT</text><text x="223" y="58">SAL</text><text x="283" y="58">ÇAR</text><text x="343" y="58">PER</text><text x="403" y="58">CUM</text></g>
      <g stroke="#20374f"><line x1="90" y1="67" x2="90" y2="218"/><line x1="150" y1="67" x2="150" y2="218"/><line x1="210" y1="67" x2="210" y2="218"/><line x1="270" y1="67" x2="270" y2="218"/><line x1="330" y1="67" x2="330" y2="218"/><line x1="390" y1="67" x2="390" y2="218"/><line x1="450" y1="67" x2="450" y2="218"/></g>
      <g font-size="8" font-weight="700" fill="#c8d4df"><text x="16" y="90">34 ROK 118</text><text x="16" y="124">34 ROK 205</text><text x="16" y="158">34 ROK 311</text><text x="16" y="192">34 ROK 426</text></g>
      <g><rect x="96" y="74" width="166" height="19" rx="6" fill="url(#timelineBlue)"/><rect x="170" y="108" width="211" height="19" rx="6" fill="url(#timelineGreen)"/><rect x="293" y="142" width="122" height="19" rx="6" fill="#705de8"/><rect x="114" y="176" width="286" height="19" rx="6" fill="#244d70"/></g>
    </g>

    <g transform="translate(18 411)" font-family="Arial, Helvetica, sans-serif">
      <rect width="480" height="88" rx="14" fill="#102740" stroke="#18b878" stroke-opacity="0.38"/>
      <rect x="14" y="14" width="58" height="58" rx="13" fill="#18b878" fill-opacity="0.13"/>
      <path d="M32 47l9 8 15-19" fill="none" stroke="#18b878" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="87" y="30" fill="#18b878" font-size="8" font-weight="700" letter-spacing="1.2">ÖNERİLEN ODAK</text>
      <text x="87" y="51" fill="#ffffff" font-size="12" font-weight="700">Hazırlık süresi yetersiz</text>
      <text x="87" y="69" fill="#7890a8" font-size="9">Gecikme oluşmadan planı düzenleyin</text>
      <rect x="381" y="28" width="83" height="32" rx="9" fill="#18b878"/>
      <text x="400" y="49" fill="#ffffff" font-size="9" font-weight="700">İNCELE</text>
    </g>
  </g>

  <g transform="translate(574 304)" filter="url(#shadow)" font-family="Arial, Helvetica, sans-serif">
    <rect width="140" height="248" rx="25" fill="#07182a" stroke="#49627c" stroke-width="1.5"/>
    <rect x="10" y="16" width="120" height="216" rx="16" fill="#0d2138"/>
    <rect x="48" y="7" width="44" height="5" rx="2.5" fill="#526b84"/>
    <text x="22" y="42" fill="#ffffff" font-size="11" font-weight="700">Sıradaki işler</text>
    <circle cx="116" cy="37" r="4" fill="#18b878"/>
    <g transform="translate(20 58)"><rect width="100" height="57" rx="10" fill="#12304c"/><text x="10" y="17" fill="#46a0ff" font-size="8" font-weight="700">10:30</text><text x="10" y="33" fill="#ffffff" font-size="8" font-weight="700">34 ROK 118</text><rect x="10" y="40" width="54" height="9" rx="4.5" fill="#1769e0"/></g>
    <g transform="translate(20 124)"><rect width="100" height="57" rx="10" fill="#12304c"/><text x="10" y="17" fill="#18b878" font-size="8" font-weight="700">11:15</text><text x="10" y="33" fill="#ffffff" font-size="8" font-weight="700">34 ROK 205</text><rect x="10" y="40" width="54" height="9" rx="4.5" fill="#18b878"/></g>
    <rect x="42" y="202" width="56" height="16" rx="8" fill="#1769e0"/>
  </g>
</svg>`;

const logo = await sharp(await readFile(logoPath))
  .resize({ width: 270 })
  .png()
  .toBuffer();

await sharp(Buffer.from(card))
  .composite([{ input: logo, left: 48, top: 43 }])
  .png({ compressionLevel: 9, quality: 95 })
  .toFile(outputPath);

const favicon = await sharp(await readFile(iconPath))
  .resize({ width: 440 })
  .png()
  .toBuffer();

await sharp({ create: { width: 512, height: 512, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
  .composite([{ input: favicon, gravity: "center" }])
  .png({ compressionLevel: 9 })
  .toFile(path.join(projectRoot, "src/app/icon.png"));

const appleIcon = await sharp(await readFile(iconPath))
  .resize({ width: 142 })
  .png()
  .toBuffer();

await sharp({ create: { width: 180, height: 180, channels: 4, background: "#ffffff" } })
  .composite([{ input: appleIcon, gravity: "center" }])
  .png({ compressionLevel: 9 })
  .toFile(path.join(projectRoot, "src/app/apple-icon.png"));

console.log("Generated OG card and application icons");
