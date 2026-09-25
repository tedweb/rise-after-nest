import assert from "node:assert/strict";
import {readFile} from "node:fs/promises";
import test from "node:test";

const distRoot = new URL("../dist/client/", import.meta.url);

test("builds the Rise After Nest scrapbook homepage with production metadata", async () => {
  const html = await readFile(new URL("index.html", distRoot), "utf8");

  assert.match(html, /<title>Rise After Nest \| Travel stories for the next chapter<\/title>/);
  assert.match(html, /Grown kids/);
  assert.match(html, /Oh, the places we’ll go/);
  assert.match(html, /THE RISE REVIEW/);
  assert.match(html, /https:\/\/riseafternest\.com\/og\.png/);
});

test("emits the complete travel-blog sitemap", async () => {
  const pages = await Promise.all([
    "journal/index.html",
    "destinations/index.html",
    "destinations/nassau/index.html",
    "destinations/key-largo/index.html",
    "rise-reviews/index.html",
    "about/index.html",
    "follow-along/index.html",
  ].map(path => readFile(new URL(path, distRoot), "utf8")));
  assert.match(pages[0], /Stories worth writing home about/);
  assert.match(pages[4], /The Rise Review/);
  assert.match(pages[5], /The story is just getting good/);
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
