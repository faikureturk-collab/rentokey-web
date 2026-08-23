import { mkdtemp, readFile, rm, stat, writeFile } from "node:fs/promises";
import { spawn, spawnSync } from "node:child_process";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import sharp from "sharp";

const logoDirectory = process.argv[2];

if (!logoDirectory) {
  throw new Error("Logo klasoru yolu gerekli.");
}

const chrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const pdftocairo =
  "/Users/faikureturk/.cache/codex-runtimes/codex-primary-runtime/dependencies/native/poppler/poppler/bin/pdftocairo";

const variants = [
  "rentokey_logo_slogansiz_hizali_outlined",
  "rentokey_logo_slogansiz_hizali_black_outlined",
  "rentokey_logo_slogansiz_hizali_white_outlined",
];

const temporaryDirectory = await mkdtemp(
  path.join(os.tmpdir(), "rentokey-logo-export-"),
);

const run = (command, args) => {
  const result = spawnSync(command, args, { encoding: "utf8" });

  if (result.status !== 0) {
    throw new Error(
      `${command} basarisiz oldu.\n${result.stdout ?? ""}\n${result.stderr ?? ""}`,
    );
  }
};

const sleep = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

const runChrome = async (args, outputPath) => {
  const child = spawn(chrome, args, { stdio: "ignore" });
  let previousSize = 0;
  let stableChecks = 0;

  for (let attempt = 0; attempt < 150; attempt += 1) {
    await sleep(100);

    try {
      const output = await stat(outputPath);

      if (output.size > 0 && output.size === previousSize) {
        stableChecks += 1;
      } else {
        stableChecks = 0;
        previousSize = output.size;
      }

      if (stableChecks >= 4) {
        child.kill("SIGTERM");
        return;
      }
    } catch {
      // Chrome henuz PDF dosyasini olusturmadi.
    }
  }

  child.kill("SIGKILL");
  throw new Error(`Chrome PDF olusturamadi: ${outputPath}`);
};

try {
  for (const variant of variants) {
    const svgPath = path.join(logoDirectory, `${variant}.svg`);
    const pdfPath = path.join(logoDirectory, `${variant}.pdf`);
    const epsPath = path.join(logoDirectory, `${variant}.eps`);
    const pngPath = path.join(
      logoDirectory,
      `${variant.replace("_outlined", "")}.png`,
    );
    const htmlPath = path.join(temporaryDirectory, `${variant}.html`);
    const svg = (await readFile(svgPath, "utf8")).replace(
      /^<\?xml.*?\?>\s*/s,
      "",
    );

    const html = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>
      @page { size: 667.5pt 165pt; margin: 0; }
      html, body { width: 890px; height: 220px; margin: 0; background: transparent; }
      svg { display: block; width: 890px; height: 220px; }
    </style>
  </head>
  <body>${svg}</body>
</html>`;

    await writeFile(htmlPath, html, "utf8");

    await sharp(Buffer.from(svg))
      .resize({ width: 1780 })
      .png({ compressionLevel: 9 })
      .toFile(pngPath);

    await rm(pdfPath, { force: true });

    await runChrome([
      "--headless=new",
      "--disable-gpu",
      "--no-sandbox",
      "--allow-file-access-from-files",
      `--user-data-dir=${path.join(temporaryDirectory, `${variant}-profile`)}`,
      "--no-pdf-header-footer",
      `--print-to-pdf=${pdfPath}`,
      pathToFileURL(htmlPath).href,
    ], pdfPath);

    run(pdftocairo, ["-eps", "-level3", pdfPath, epsPath]);
  }

  const whitePreviewLogo = await sharp(
    path.join(logoDirectory, "rentokey_logo_slogansiz_hizali_white.png"),
  )
    .resize({ width: 1500 })
    .toBuffer();

  await sharp({
    create: {
      width: 1780,
      height: 600,
      channels: 4,
      background: "#071b33",
    },
  })
    .composite([{ input: whitePreviewLogo, gravity: "center" }])
    .png({ compressionLevel: 9 })
    .toFile(
      path.join(
        logoDirectory,
        "rentokey_logo_slogansiz_hizali_white_on_dark_preview.png",
      ),
    );
} finally {
  await rm(temporaryDirectory, { recursive: true, force: true });
}

console.log("Renkli, siyah ve beyaz PDF/EPS logo dosyalari olusturuldu.");
