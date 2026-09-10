import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import ts from "typescript";

const source = fs.readFileSync(new URL("../src/lib/analytics.ts", import.meta.url), "utf8");
const providerSource = fs.readFileSync(new URL("../src/components/AnalyticsProvider.tsx", import.meta.url), "utf8");
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2021 },
});
const analytics = {};
vm.runInNewContext(outputText, { exports: analytics, URL, Date, Event });

test("first-touch attribution recognises AI, search, social and direct traffic", () => {
  assert.equal(analytics.createAttribution("https://www.rentokey.com/ucretsiz-dene", "https://chatgpt.com/c/abc").source, "chatgpt");
  assert.equal(analytics.createAttribution("https://www.rentokey.com/", "https://claude.ai/new").medium, "ai_referral");
  assert.equal(analytics.createAttribution("https://www.rentokey.com/", "https://www.google.com/search?q=rentokey").source, "google");
  assert.equal(analytics.createAttribution("https://www.rentokey.com/", "").source, "direct");
});

test("UTM values win over referrer and unrelated or personal query values are not retained", () => {
  const attribution = analytics.createAttribution(
    "https://www.rentokey.com/en/free-trial?utm_source=LinkedIn&utm_medium=paid-social&utm_campaign=fleet-70&email=private@example.com",
    "https://www.google.com/",
    new Date("2026-09-10T12:00:00.000Z"),
  );

  assert.equal(attribution.source, "linkedin");
  assert.equal(attribution.medium, "paid-social");
  assert.equal(attribution.campaign, "fleet-70");
  assert.equal(attribution.landingPage, "/en/free-trial");
  assert.equal(attribution.firstSeenAt, "2026-09-10T12:00:00.000Z");
  assert.equal(JSON.stringify(attribution).includes("private@example.com"), false);
});

test("ChatGPT UTM traffic uses one stable source name", () => {
  const attribution = analytics.createAttribution(
    "https://www.rentokey.com/?utm_source=chatgpt.com&utm_medium=referral",
    "",
  );
  assert.equal(attribution.source, "chatgpt");
});

test("gtag commands use Google's arguments-object queue format", () => {
  assert.match(providerSource, /dataLayer\?\.push\(arguments\)/);
  assert.doesNotMatch(providerSource, /dataLayer\?\.push\(args\)/);
});
