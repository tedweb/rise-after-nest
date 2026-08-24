# Blog migration

## Inventory

- Source: one hard-coded Nassau field note in the frontend.
- Content: one published post, one shared author, two categories, and existing local photography.
- Locales/drafts: English only; no source drafts or revision history.
- Relationships: post to author and categories.

## Mapping and import

The field note becomes a `post` with Portable Text, a Sanity image, SEO fields, and source metadata. Doug and Tara become a reusable `author`; Travel and Scuba become reusable `category` documents. Stable source-derived IDs and `--replace` make the import safe to rerun.

Run `npm run seed:import`. It generates `migration/generated/seed.ndjson`; the Sanity CLI uploads the local image and imports the documents.

## Validation and cutover

Run `npm run validate`, confirm the expected counts (1 post, 1 author, 2 categories), and check the homepage plus `/blog/six-days-in-paradise`. New Studio posts need no content freeze because the old source contains only this seed story.
