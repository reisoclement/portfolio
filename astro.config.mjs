import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const animationSrc = path.resolve(__dirname, 'src/circles-of-life-anim');

// Deployed at https://reisoclement.github.io/portfolio/
// For a custom domain, set `site` to that domain and remove `base`.
export default defineConfig({
  site: 'https://reisoclement.github.io',
  base: '/portfolio/',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es', 'pl'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  integrations: [sitemap(), react()],
  build: {
    assets: 'assets',
  },
  vite: {
    resolve: {
      alias: {
        '@circles-of-life': animationSrc,
      },
      dedupe: ['react', 'react-dom', 'remotion', '@remotion/player'],
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'remotion', '@remotion/player', 'lucide-react'],
    },
  },
});
