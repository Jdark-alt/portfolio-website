// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL and BASE_PATH let the same code deploy to Cloudflare Pages
// (root of jerryfernandes.work) and to GitHub Pages (a /portfolio-website/ sub-path).
const site = process.env.SITE_URL ?? 'https://jerryfernandes.work';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  output: 'static',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto', format: 'directory' },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  image: { responsiveStyles: false },
  devToolbar: { enabled: false },
});
