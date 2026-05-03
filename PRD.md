# PRD — Personal Animation Showcase Website

_Last updated: 2026-05-03 · Status: draft, awaiting review_

A small, self-hosted website that introduces the author and showcases animations produced by the parent Remotion project. One page per animation. Clean, calm, video-first. Hosted free on GitHub Pages.

---

## 1. Purpose

A public home for the animations produced by this project. Each animation captures a piece of knowledge worth keeping — the website is where those pieces are displayed and indexed.

**Two jobs:**
1. **Introduce the author and the project** — what this is, why it exists, what a visitor will find here.
2. **Showcase animations** — one page per animation, video front and center, short context underneath.

---

## 2. Target audience

- Friends, peers, and collaborators sent a direct link.
- Curious visitors who land on a single animation page from elsewhere.
- The author themselves — as a personal index of what's been made.

Not optimized for SEO traffic, anonymous discovery, or comment threads.

---

## 3. Scope

### In scope (v1)
- Static, multi-page website.
- Home page (about + intro).
- One page per animation (video + short writeup).
- Simple top-of-page tab bar / navigation listing all animations.
- Responsive (desktop primary, mobile usable).
- Deployed on GitHub Pages.

### Out of scope (v1, revisit later)
- User accounts, auth, comments.
- Search, tags, filtering.
- Newsletter / email capture.
- Analytics beyond GitHub's built-in traffic page.
- CMS or admin UI — adding an animation = editing a file + pushing.
- Dark/light toggle (pick one palette and ship it).

---

## 4. Information architecture

```
/                       Home (intro + featured tile grid)
/animations/<slug>/     One page per animation
/about/                 (Optional v1 — content can live on home instead)
```

**Navigation pattern:** persistent top bar with **Home** + each animation listed by short title. As the list grows past ~6, switch the tab bar to a "Animations ▾" dropdown automatically. Keeping the bar flat for v1.

---

## 5. Page specs

### 5.1 Home page
**Goal:** in 5 seconds a visitor knows what this site is and sees the animations available.

**Sections (top to bottom):**
1. **Hero** — name + one-line tagline. *Example:* "I build animations to remember what I learn."
2. **Short intro paragraph (3–5 sentences)** — who you are, what this site is, why animations.
3. **Animation grid** — one tile per animation. Tile shows: thumbnail (autoplaying muted loop on hover, static frame at rest), title, one-line description. Click → animation page.
4. **Footer** — minimal: GitHub link, last-updated date, "Built with Remotion + Claude Code."

**No carousels, no parallax, no marketing copy.** Calm and indexable.

### 5.2 Animation page (`/animations/<slug>/`)
**Goal:** play the video. Everything else is secondary.

**Sections:**
1. **Title** — the animation's name.
2. **Video player** — large, centered, ~16:9, native HTML5 `<video>` with controls. Autoplay muted on load, full audio on click. Poster image = first frame.
3. **One-paragraph context** — what this animation is about, what knowledge it captures.
4. **Metadata strip** (small, muted text) — date, duration, source spec (link to the spec file in the repo if public).
5. **Prev / Next** — links to adjacent animations.
6. Footer (same as home).

### 5.3 About page (optional — fold into home for v1)
Longer-form intro if the home paragraph isn't enough. Skip for v1 unless the home feels cramped.

---

## 6. Visual design — proposals

Three palette + type directions to react to. **Pick one (or mix), or tell me to try something else.**

### Direction A — "Notebook" (recommended)
Calm, paper-like, reads like a personal journal. The animation is the bright thing on the page; everything else recedes.
- **Background:** `#FAF7F2` (warm off-white)
- **Text:** `#1F1B16` (near-black warm)
- **Accent:** `#B8794A` (muted ochre) for links/hovers
- **Surface (cards):** `#FFFFFF` with subtle `1px solid #ECE6DC` border, no drop shadow
- **Typography:**
  - Headings: **Fraunces** (variable serif) — gives it warmth and personality
  - Body: **Inter** — clean, neutral
  - Mono (metadata, dates): **JetBrains Mono**
- **Mood:** Craig Mod, Stripe Press, Are.na

### Direction B — "Studio dark"
Dark canvas, animation pops like a screen in a quiet room. Good if the animations are visually busy and you want them isolated.
- **Background:** `#0E0E10`
- **Text:** `#E8E6E1`
- **Accent:** `#7DD3FC` (soft cyan) for links
- **Surface:** `#17171A` with `1px solid #26262A`
- **Typography:** Inter for everything; **Space Grotesk** for headings if you want more character.
- **Mood:** Linear's docs, Vercel's blog.

### Direction C — "Editorial"
High-contrast, magazine-like, more typographic personality. Risk: louder, can compete with the videos.
- **Background:** `#FFFFFF`
- **Text:** `#000000`
- **Accent:** `#E63946` (single bold accent)
- **Surface:** flat, separated by generous whitespace + thin rules (`1px #E5E5E5`)
- **Typography:** **Playfair Display** (display serif) + **Inter** body
- **Mood:** The Pudding, Pitchfork.

**My recommendation: A (Notebook).** It matches the stated tone ("clean, beautiful, not too crowded") and ages well as the animation count grows. **Tell me which to go with — or what to change.**

---

## 7. Layout grid (applies to all directions)

- **Max content width:** 720px for prose, 1080px for the animation grid and video player.
- **Vertical rhythm:** 8px base unit. Section spacing in multiples of 64px.
- **Margins:** `clamp(20px, 5vw, 64px)` on the sides.
- **One column on mobile**, two on tablet (≥768px), three on desktop (≥1200px) for the animation grid.
- **No hero images, no full-bleed sections.** Content lives in a calm column.

---

## 8. Tech stack

**Proposed: Astro + minimal hand-rolled CSS.**

Why:
- Static-first → trivially fast on GitHub Pages.
- Uses React components if/when needed (drops cleanly alongside the parent Remotion project).
- File-based routing → adding an animation page is "create a `.md` or `.astro` file."
- No heavy framework runtime in the browser.
- Built-in image and video optimization.

**Alternatives considered (not chosen):**
- *Plain HTML/CSS:* simpler but reauthoring nav across many pages is tedious.
- *Next.js:* overkill for a static site, more config to deploy on Pages.
- *11ty/Hugo:* great but introduces a non-React templating language outside the project's ecosystem.

**Other tooling:**
- **Styling:** plain CSS with custom properties (design tokens). No Tailwind for v1 — keeps the surface area small.
- **Fonts:** self-hosted via `@fontsource/*` packages (no Google Fonts CDN — private + offline-friendly).
- **Video format:** MP4 (H.264) for the canonical file, optional WebM (AV1) sibling for smaller payloads. Poster image as a JPEG.
- **Video hosting:** **not** in the repo. Two options to choose between later:
  1. **GitHub Releases** — upload large MP4s as release assets, link by URL. Free, version-pinned.
  2. **Cloudflare R2 / Bunny CDN** — better streaming performance if files are large or numerous.
  Default to (1) until file sizes or count make it painful.

---

## 9. Content model

Each animation is one folder under `src/content/animations/`:

```
src/content/animations/
  <slug>/
    index.md          # frontmatter (title, date, duration, description) + body paragraph
    poster.jpg        # video poster image
    # video URL referenced in frontmatter, not stored here
```

**Frontmatter schema (Zod-validated via Astro Content Collections):**
```yaml
title: "Composition over Inheritance"
slug: "composition-over-inheritance"   # matches folder name
date: 2026-04-12
duration: "00:42"                       # mm:ss
description: "A 40-second walkthrough of why composition wins."
videoUrl: "https://github.com/<user>/<repo>/releases/download/v1/composition.mp4"
posterImage: "./poster.jpg"
specPath: "specs/composition-over-inheritance.md"  # optional, links to source spec
order: 3                                # display order on home grid (lower = earlier)
draft: false
```

The `<animation slug>` page is generated automatically from this folder.

---

## 10. Folder structure (`website/`)

```
website/
  CLAUDE.md                    # routing index (≤50 lines)
  PRD.md                       # this file
  HOW_TO_BUILD.md              # build process notes
  package.json
  astro.config.mjs
  tsconfig.json
  .gitignore
  public/
    favicon.svg
  src/
    content/
      animations/              # one folder per animation (see §9)
      config.ts                # Zod schema for content collection
    components/
      README.md
      Nav.astro
      AnimationCard.astro
      VideoPlayer.astro
      Footer.astro
    layouts/
      README.md
      Base.astro               # html shell, head tags, font loading
    pages/
      index.astro              # home
      animations/[slug].astro  # generated from content collection
    styles/
      tokens.css               # color, type, spacing custom properties
      global.css               # reset + base styles
  docs/
    brand-voice.md
    design-tokens.md
```

---

## 11. Functional requirements

| # | Requirement | Notes |
|---|------------|-------|
| F1 | Home page lists every non-draft animation, ordered by `order` then `date` desc | |
| F2 | Each animation has its own URL `/animations/<slug>/` | |
| F3 | Video plays inline, autoplay muted, controls visible | Click to unmute |
| F4 | Top nav shows Home + animations, current page highlighted | Auto-collapses to dropdown when count > 6 |
| F5 | Site is fully static — `npm run build` produces a `dist/` folder GitHub Pages serves directly | |
| F6 | Adding a new animation requires no code edits — only a new folder under `src/content/animations/` | |
| F7 | All pages pass Lighthouse: Performance ≥ 95, Accessibility ≥ 95, Best Practices ≥ 95 | Measured on first build |
| F8 | Site readable with JS disabled (videos still work via native `<video>`) | |
| F9 | No external trackers, no fonts loaded from third-party CDN | Privacy default |

---

## 12. Non-functional requirements

- **Build time:** under 30 seconds for 50 animations.
- **Page weight:** under 200 KB (excluding the video itself).
- **First contentful paint:** under 1s on a fast connection.
- **Reproducibility:** every animation page links back to the spec file that produced it (when the spec is committed).

---

## 13. Risks & open questions

| Topic | Question | Default if no answer |
|-------|----------|----------------------|
| Hosting limits | GitHub Pages has a 1GB repo cap and 100MB per-file cap | Host videos as GitHub Release assets, **not** in the repo |
| Custom domain | Use a custom domain or `<user>.github.io/<repo>/`? | Subpath for v1, custom domain later |
| Privacy | Public repo or private repo with Pages? | **Public** — Pages on private repos requires GitHub Pro |
| Author name & bio | Need exact wording for hero + intro paragraph | Placeholder copy until you supply |
| Visual direction | A / B / C? | Default to A (Notebook) if no answer |
| Mobile autoplay | Autoplay muted videos on mobile (drains battery) or click-to-play? | Autoplay muted on desktop, **click-to-play on mobile** |
| Spec links public? | Link from animation page to spec file — but only if the spec is committed and public | Link only when `specPath` resolves in the public repo |

---

## 14. Build plan (recommended sequence)

Each step is one Claude Code prompt. Stop between steps to review.

1. **Scaffold** — `npm create astro@latest`, set up the folder structure in §10, install fonts, write the design-tokens CSS file based on chosen direction.
2. **Layout shell** — `Base.astro`, `Nav.astro`, `Footer.astro`. Static placeholder content. Verify it loads locally.
3. **Content collection** — define the Zod schema in `src/content/config.ts`. Add 1–2 sample animation folders with placeholder MP4 URLs.
4. **Home page** — render the intro + animation grid from the content collection.
5. **Animation page** — dynamic route `[slug].astro`, video player, prev/next.
6. **Polish pass** — typography, spacing, hover states, focus rings, mobile breakpoint.
7. **Deploy** — set Astro `base` to `/<repo>/`, push to GitHub, enable Pages with GitHub Actions deployment, verify live URL.
8. **Document** — write `CLAUDE.md`, `brand-voice.md`, `design-tokens.md`. Add a `README.md` in `components/` and `layouts/`.

---

## 15. Decisions I need from you before building

To stay token-efficient, please answer these so step 1 isn't a guess:

1. **Visual direction: A (Notebook), B (Studio dark), C (Editorial), or "show me something else"?**
2. **Author name + 1-line tagline** for the hero. (Placeholder OK if you want to fill in later.)
3. **Repo name** for the GitHub Pages deployment — affects the base path. (Suggestion: `animations` or `notebook`.)
4. **First animation to seed the site with** — pick one from the parent project, or "use a placeholder MP4 for now."
5. **Anything from §13 you want to override?**

Once those five are answered, I'll scaffold step 1.
