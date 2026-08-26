# Rise After Nest Astro frontend

The production travel site is built with Astro, with a React island for the interactive trip map and Sanity Content Lake for editorial content.

## Local development

```sh
npm install
npm run dev
```

Copy `.env.example` to `.env` only when you need to target a different public Sanity project or dataset.

## Validation

```sh
npm test
```

The test command runs Astro's type checks, creates the static production build, and verifies the generated HTML and metadata.

## Cloudflare deployment

The targeted Worker is declared in `wrangler.jsonc`. For a manual deployment:

```sh
npm run deploy
```

For Workers Builds, use `astro-frontend` as the root directory, `npm run build` as the build command, and `npx wrangler deploy` as the deploy command.

Because the site is statically generated, configure a Sanity publish webhook to call a Cloudflare deploy hook when published posts change.
