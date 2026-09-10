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

test("English homepage preserves the complete Turkish homepage section flow", () => {
  const html = fs.readFileSync(new URL("../.next/server/app/en.html", import.meta.url), "utf8");
  const ids = ["product", "features", "recommended-focus", "pilot", "reservation-flow", "how-it-works", "pricing", "about", "addons", "faq", "contact"];
  let previous = -1;
  for (const id of ids) {
    const position = html.indexOf(`id="${id}"`);
    assert.ok(position > previous, `${id} should exist in the expected order`);
    previous = position;
  }
  for (const text of ["Start the day with Recommended Focus", "From customer request to confirmation", "Included in the core subscription", "Data security and support"]) {
    assert.ok(html.includes(text), `missing English content: ${text}`);
  }
});
