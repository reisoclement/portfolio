# Website — Routing Index for Claude Code

Static Astro site for showcasing animations. One page per animation. Hosted on GitHub Pages.

## Stack
- Astro 5 (static output, file-based routing)
- Plain CSS with custom properties (no Tailwind)
- Self-hosted fonts via `@fontsource/*`

## Where things live
- `src/pages/` — routes. `index.astro` is the home page.
- `src/layouts/Base.astro` — html shell, head tags, font loading.
- `src/components/` — `Nav.astro`, `Footer.astro`, future `AnimationCard.astro`, `VideoPlayer.astro`.
- `src/styles/tokens.css` — colors, type, spacing custom properties (Notebook palette).
- `src/styles/global.css` — reset + base styles.
- `public/` — static assets served at site root (favicon, etc.).
- `astro.config.mjs` — `site` + `base` must be set before deploy.
- `.github/workflows/deploy.yml` — Pages deploy via `withastro/action`.

## Conventions
- Adding a new animation will be: create one folder under `src/content/animations/<slug>/` with frontmatter + poster image. Content collection schema lands in step 3.
- Videos are NOT committed. Host as GitHub Release assets, reference by URL.
- Zero JS by default. React components only when interactivity is needed (`client:visible` directive).

## Deploy notes
- `astro.config.mjs` contains placeholder `<user>` and `<repo>` — replace before first push.
- Repo Settings → Pages → Source: **GitHub Actions** (not "Deploy from branch").
