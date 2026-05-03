import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const remotionProjectSrc = path.resolve(__dirname, '../projects/circles-of-life/src');

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
        '@circles-of-life': remotionProjectSrc,
      },
      // De-duplicate React across the website and the Remotion project so a single
      // React instance is used by both the Player host and the imported scenes.
      dedupe: ['react', 'react-dom', 'remotion', '@remotion/player'],
    },
    server: {
      fs: {
        // Allow Vite to serve files from the Remotion project that lives outside the website root.
        allow: [path.resolve(__dirname, '..')],
      },
    },
    optimizeDeps: {
      // Pre-bundle these so HMR is happy with the cross-package imports.
      include: ['react', 'react-dom', 'remotion', '@remotion/player', 'lucide-react'],
    },
  },
});
