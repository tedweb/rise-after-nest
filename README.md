# Rise After Nest

This monorepo contains the public travel site and its Sanity content studio.

## Projects

- `astro-frontend` — the production Astro site deployed to Cloudflare Workers.
- `nextjs-frontend` — the preserved Vinext/Next.js implementation for migration reference and rollback.
- `sanity-backend` — Sanity Studio, schemas, migration scripts, and content validation.

## Development

Install dependencies once from this directory:

```sh
npm install
```

Run the site and Studio in separate terminals:

```sh
npm run dev:site
npm run dev:studio
```

Build both projects with `npm run build`. The public Sanity project ID and dataset are already configured; secrets and local `.env` files are intentionally excluded from Git.

## Publishing

Deploy the Astro frontend to Cloudflare Workers from the `astro-frontend` root. Deploy the content Studio from `sanity-backend` with `npm run deploy --workspace sanity-backend`. Published Sanity content should trigger a Cloudflare build through a deploy hook.
