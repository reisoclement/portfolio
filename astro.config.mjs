import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const animationSrc = path.resolve(__dirname, 'src/circles-of-life-anim');
const animatedResumeSrc = path.resolve(__dirname, 'src/animated-resume-anim');
const buildAgentsSrc = path.resolve(__dirname, 'src/build-agents-anim');
const whenToUseAiSrc = path.resolve(__dirname, 'src/when-to-use-ai-anim');
const specExtractorSrc = path.resolve(__dirname, 'src/spec-extractor-anim');
const pdfComparerSrc = path.resolve(__dirname, 'src/pdf-comparer-anim');

// Deployed at https://reisoclement.github.io/portfolio/
// For a custom domain, set `site` to that domain and remove `base`.
export default defineConfig({
  site: 'https://reisoclement.github.io',
  base: '/portfolio/',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    // Site-wide locales. zh is included so /zh/resume/ can render — only the
    // resume page emits a zh path. Other pages keep using en/fr/es/pl from
    // src/i18n/index.ts.
    locales: ['en', 'fr', 'es', 'pl', 'zh'],
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
        '@animated-resume': animatedResumeSrc,
        '@build-agents': buildAgentsSrc,
        '@when-to-use-ai': whenToUseAiSrc,
        '@spec-extractor': specExtractorSrc,
        '@pdf-comparer': pdfComparerSrc,
      },
      dedupe: ['react', 'react-dom', 'remotion', '@remotion/player'],
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'remotion', '@remotion/player', 'lucide-react'],
    },
  },
});
