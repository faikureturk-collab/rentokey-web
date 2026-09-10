import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import ts from "typescript";

function load(file, extra = {}) {
  const source = fs.readFileSync(new URL(`../src/lib/${file}.ts`, import.meta.url), "utf8");
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2021 } });
  const exports = {};
  vm.runInNewContext(outputText, { exports, Error, ...extra });
  return exports;
}
const locale = load("locale");
const copy = load("form-copy");
const signup = load("trial-signup");
const contactRequest = load("contact-request");

test("language routes are paired; untranslated content falls back to the selected homepage", () => {
  for (const [tr,en] of locale.localeRoutes) {
    assert.equal(locale.languageHref(tr,"en"),en);
    assert.equal(locale.languageHref(en,"tr"),tr);
    assert.equal(locale.languageHref(`${en}/`,"tr"),tr);
  }
  assert.equal(locale.languageHref("/blog/some-post","en"),"/en");
  assert.equal(locale.alternateRoutes("/blog"),undefined);
});

test("form copy keeps Turkish and translates security, fields and submission states", () => {
  for (const text of ["Hesabınız oluşturuldu","Mesajı gönder","Güvenlik doğrulaması","Şifreyi göster","Belirtmek istemiyorum","Kurulum"]) {
    assert.equal(copy.formCopy(text,"tr"),text);
    assert.notEqual(copy.formCopy(text,"en"),text);
  }
  assert.equal(copy.formCopy("Ad soyad","en"),"Full name");
});

test("English signup errors never expose unlocalised backend messages", () => {
  assert.match(signup.getTrialSignupErrorMessage(new Error("User already registered"),"en"),/already exists/);
  assert.match(signup.getTrialSignupErrorMessage(new Error("network_error"),"en"),/unavailable/);
  assert.match(signup.getTrialSignupErrorMessage(new Error("Çok fazla istek"),"en"),/could not be created/);
});

test("signup uses the existing same-origin API contract without real requests", async () => {
  let request;
  const mocked = load("trial-signup",{fetch:async (url,options) => {request={url,...options};return {ok:true,json:async()=>({ok:true})};}});
  await mocked.createTrialAccount({fullName:"Demo User",email:"demo@example.test",password:"demo-only"});
  assert.equal(request.url,"/api/kayit-ol");
  assert.equal(request.method,"POST");
  assert.deepEqual(JSON.parse(request.body),{fullName:"Demo User",email:"demo@example.test",password:"demo-only"});
});

test("contact requests include the selected website locale", () => {
  const fields = {
    topic: "paket-ve-fiyatlandirma",
    fullName: "Demo User",
    email: "demo@example.test",
    company: "Demo Rent a Car",
    phone: "+90 555 000 00 00",
    fleetSize: "11-25",
    message: "Paketler hakkında bilgi almak istiyorum.",
    website: "",
  };

  const englishPayload = JSON.parse(JSON.stringify(contactRequest.createContactRequestPayload(fields, "en", "test-token")));
  const turkishPayload = JSON.parse(JSON.stringify(contactRequest.createContactRequestPayload(fields, "tr", "test-token")));

  assert.deepEqual(englishPayload, { ...fields, locale: "en", turnstileToken: "test-token" });
  assert.equal(turkishPayload.locale, "tr");
});

test("built language pages have correct HTML language, canonical and reciprocal alternates", () => {
  for (const [tr,en] of locale.localeRoutes) {
    for (const [path,language] of [[tr,"tr"],[en,"en"]]) {
      const file = path === "/" ? "index" : path.slice(1);
      const html = fs.readFileSync(new URL(`../.next/server/app/${file}.html`,import.meta.url),"utf8");
      assert.match(html,new RegExp(`<html[^>]+lang="${language}"`));
      assert.ok(html.includes(`rel="canonical" href="https://www.rentokey.com${path === "/" ? "" : path}"`),path);
      assert.ok(html.includes(`hrefLang="en" href="https://www.rentokey.com${en}"`),path);
      assert.ok(html.includes(`hrefLang="tr" href="https://www.rentokey.com${tr === "/" ? "" : tr}"`),path);
    }
  }
});

test("English homepage preserves the compact Turkish homepage section flow", () => {
  const html = fs.readFileSync(new URL("../.next/server/app/en.html", import.meta.url), "utf8");
  const ids = ["product", "recommended-focus", "pilot", "how-it-works", "pricing", "addons", "about", "faq", "contact"];
  let previous = -1;
  for (const id of ids) {
    const position = html.indexOf(`id="${id}"`);
    assert.ok(position > previous, `${id} should exist in the expected order`);
    previous = position;
  }
  for (const text of ["Car rental software", "Reservation calendar", "Operation centre", "Fleet &amp; finance", "Included in the core subscription", "Data security and support"]) {
    assert.ok(html.includes(text), `missing English content: ${text}`);
  }
  assert.ok(html.includes('href="/en/car-rental-software"'));
  assert.ok(html.includes('href="/en/car-rental-reservation-calendar"'));
  assert.equal(html.includes('id="reservation-flow"'), false);
  assert.equal(html.includes('id="features"'), false);
});

test("English homepage social title is not duplicated and schema matches the complete page", () => {
  const html = fs.readFileSync(new URL("../.next/server/app/en.html", import.meta.url), "utf8");
  assert.ok(html.includes('property="og:title" content="Car Rental &amp; Fleet Management Software | Rent Okey"'));
  assert.equal(html.includes("RentOkey | Rent Okey"), false);
  for (const schemaType of ["Organization", "WebSite", "SoftwareApplication", "FAQPage"]) {
    assert.ok(html.includes(`\\\"@type\\\":\\\"${schemaType}\\\"`) || html.includes(`\\\"${schemaType}\\\"`), `missing ${schemaType} schema`);
  }
  assert.ok(html.includes("Where is my data stored?"));
});

test("product SEO pages preserve language parity, metadata and structured data", () => {
  const pairs = [
    ["arac-kiralama-programi", "en/car-rental-software", "Araç Kiralama Programı", "Car Rental Software"],
    ["arac-kiralama-rezervasyon-takvimi", "en/car-rental-reservation-calendar", "Araç Kiralama Rezervasyon Takvimi", "Car Rental Reservation Calendar"],
  ];

  for (const [trPath, enPath, trTitle, enTitle] of pairs) {
    const tr = fs.readFileSync(new URL(`../.next/server/app/${trPath}.html`, import.meta.url), "utf8");
    const en = fs.readFileSync(new URL(`../.next/server/app/${enPath}.html`, import.meta.url), "utf8");

    assert.ok(tr.includes(trTitle), `missing Turkish product title for ${trPath}`);
    assert.ok(en.includes(enTitle), `missing English product title for ${enPath}`);
    assert.ok(tr.includes(`hrefLang=\"en\" href=\"https://www.rentokey.com/${enPath}\"`));
    assert.ok(en.includes(`hrefLang=\"tr\" href=\"https://www.rentokey.com/${trPath}\"`));
    for (const html of [tr, en]) {
      assert.ok(html.includes("FAQPage"));
      assert.ok(html.includes("BreadcrumbList"));
      assert.ok(html.includes("SoftwareApplication"));
      assert.ok(html.includes('href="#product-demo"'));
      assert.ok(html.includes('id="product-demo"'));
    }
  }
  const trSoftware = fs.readFileSync(new URL("../.next/server/app/arac-kiralama-programi.html", import.meta.url), "utf8");
  const enSoftware = fs.readFileSync(new URL("../.next/server/app/en/car-rental-software.html", import.meta.url), "utf8");
  const trCalendar = fs.readFileSync(new URL("../.next/server/app/arac-kiralama-rezervasyon-takvimi.html", import.meta.url), "utf8");
  const enCalendar = fs.readFileSync(new URL("../.next/server/app/en/car-rental-reservation-calendar.html", import.meta.url), "utf8");
  assert.ok(trSoftware.includes("70+ araçlı çok şubeli"));
  assert.ok(enSoftware.includes("multi-branch businesses with 70+ vehicles"));
  assert.ok(trCalendar.includes("ROK 102 · R-2590 çakışıyor"));
  assert.ok(enCalendar.includes("ROK 102 · R-2590 conflicts"));
});

test("Pilot pages expose the same rule-engine scope and clearly mark the simulator as upcoming", () => {
  const tr = fs.readFileSync(new URL("../.next/server/app/okey-pilot.html", import.meta.url), "utf8");
  const en = fs.readFileSync(new URL("../.next/server/app/en/pilot.html", import.meta.url), "utf8");
  for (const html of [tr, en]) {
    assert.ok(html.includes("SoftwareApplication"));
    assert.ok(html.includes("RentOkey Pilot"));
  }
  for (const text of ["Öneri kural motoru", "15.000 km", "Yakında · LLM destekli", "Uygulanabilir öneri", "Bilgilendirme"]) assert.ok(tr.includes(text), `missing Turkish Pilot content: ${text}`);
  for (const text of ["Rule engine", "15,000 km", "Coming soon · LLM-assisted", "Actionable suggestion", "Information"]) assert.ok(en.includes(text), `missing English Pilot content: ${text}`);
});
