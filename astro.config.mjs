import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployed at https://reisoclement.github.io/portfolio/
// For a custom domain, set `site` to that domain and remove `base`.
export default defineConfig({
  site: 'https://reisoclement.github.io',
  base: '/portfolio/',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: {
    assets: 'assets',
  },
});
