import {mkdir, writeFile} from "node:fs/promises";
import {dirname, resolve} from "node:path";
import {fileURLToPath, pathToFileURL} from "node:url";
const here = dirname(fileURLToPath(import.meta.url));
const output = resolve(here, "../generated/seed.ndjson");
const image = resolve(here, "../../../astro-frontend/public/images/nassau-shark.jpg");
const block = (key, text, style = "normal") => ({_type: "block", _key: key, style, markDefs: [], children: [{_type: "span", _key: `${key}-span`, text, marks: []}]});
const documents = [
  {_id: "author-doug-and-tara", _type: "author", name: "Doug & Tara Markott", slug: {_type: "slug", current: "doug-and-tara-markott"}, bio: [block("author-bio", "A married team turning the empty-nest years into a passport full of shared stories.")]},
  {_id: "category-travel", _type: "category", title: "Travel", slug: {_type: "slug", current: "travel"}},
  {_id: "category-scuba", _type: "category", title: "Scuba", slug: {_type: "slug", current: "scuba"}},
  {_id: "post-six-days-in-paradise", _type: "post", title: "Six Days in Paradise", slug: {_type: "slug", current: "six-days-in-paradise"}, excerpt: "From the easy rhythm of Sandals Royal Bahamian to the moment a reef shark glided into view, Nassau gave our next chapter an unforgettable opening scene.", publishedAt: "2026-08-23T12:00:00.000Z", author: {_type: "reference", _ref: "author-doug-and-tara"}, categories: [{_key: "travel", _type: "reference", _ref: "category-travel"}, {_key: "scuba", _type: "reference", _ref: "category-scuba"}], mainImage: {_type: "image", _sanityAsset: `image@${pathToFileURL(image).href}`, alt: "A reef shark swimming over the ocean floor near Nassau", caption: "Below the surface · New Providence"}, body: [
    block("intro", "Nassau gave our next chapter one unforgettable opening scene: warm water, big views, and the kind of story you cannot bring home in a suitcase."), block("arrival-heading", "Finding our rhythm", "h2"), block("arrival", "Six days at Sandals Royal Bahamian gave us time to slow down, settle into island time, and remember why we wanted to travel together in the first place."), block("dive-heading", "Going deeper", "h2"), block("dive", "Below the surface, clear water opened onto reefs, wrecks, and the pulse-quickening moment a reef shark glided into view. It was calm, beautiful, and exactly the sort of shared adventure we had imagined for life after the nest."), block("quote", "This is exactly what we meant by after nest. Not slowing down—finally having room to go deeper.", "blockquote"), block("takeaway-heading", "The quick take", "h2"), block("takeaway", "Stay at Sandals Royal Bahamian on Cable Beach, book experienced dive guides, pack reef-safe sun protection, and remember that prices are in U.S. dollars.")
  ], seo: {metaTitle: "Six Days in Nassau | Rise After Nest", metaDescription: "Doug and Tara share six days of resort life, reefs, wrecks, and shark diving in Nassau, Bahamas.", canonicalUrl: "https://riseafternest.com/blog/six-days-in-paradise"}, migration: {source: "frontend-hardcoded", sourceId: "nassau-field-note-01", legacyUrl: "/#stories", migratedAt: "2026-08-24T00:00:00.000Z"}}
];
await mkdir(dirname(output), {recursive: true});
await writeFile(output, documents.map((document) => JSON.stringify(document)).join("\n") + "\n");
console.log(`Wrote ${documents.length} documents to ${output}`);
