import assert from "node:assert/strict";
import {readFile} from "node:fs/promises";
import test from "node:test";

const distRoot = new URL("../dist/client/", import.meta.url);

test("builds the Rise After Nest homepage with production metadata", async () => {
  const html = await readFile(new URL("index.html", distRoot), "utf8");

  assert.match(html, /<title>Rise After Nest \| Doug &amp; Tara&#39;s Next Adventure<\/title>/);
  assert.match(html, /The nest is empty/);
  assert.match(html, /THE JOURNEY SO FAR/);
  assert.match(html, /MEET THE MARKOTTS/);
  assert.match(html, /https:\/\/riseafternest\.com\/og\.png/);
});

test("hydrates only the interactive trip explorer", async () => {
  const html = await readFile(new URL("index.html", distRoot), "utf8");

  assert.match(html, /astro-island/);
  assert.match(html, /client="visible"/);
  assert.match(html, /TripExplorer/);
});

test("emits the custom not-found page and crawler files", async () => {
  const [notFound, robots, sitemap] = await Promise.all([
    readFile(new URL("404.html", distRoot), "utf8"),
    readFile(new URL("robots.txt", distRoot), "utf8"),
    readFile(new URL("sitemap-index.xml", distRoot), "utf8"),
  ]);

  assert.match(notFound, /OFF THE MAP/);
  assert.match(robots, /Sitemap: https:\/\/riseafternest\.com\/sitemap-index\.xml/);
  assert.match(sitemap, /sitemap-0\.xml/);
});
