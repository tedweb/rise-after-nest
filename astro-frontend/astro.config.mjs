import {defineConfig} from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import sanity from "@sanity/astro";
import {loadEnv} from "vite";

const env = loadEnv(process.env.NODE_ENV ?? "development", process.cwd(), "");

export default defineConfig({
  site: "https://riseafternest.com",
  output: "static",
  session: false,
  adapter: cloudflare({
    imageService: "passthrough",
    prerenderEnvironment: "node",
  }),
  vite: {
    optimizeDeps: {
      exclude: ["astro/app/manifest", "astro/assets/services/noop"],
    },
  },
  integrations: [
    react(),
    sitemap(),
    sanity({
      projectId: env.PUBLIC_SANITY_PROJECT_ID ?? "fmwd9w5x",
      dataset: env.PUBLIC_SANITY_DATASET ?? "production",
      apiVersion: "2026-08-24",
      useCdn: false,
    }),
  ],
});
