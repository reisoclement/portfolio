# How to Build a Self-Hosted Website with Claude Code + GitHub Pages

A step-by-step workflow for rebuilding (or building from scratch) a website using Claude Code, a local folder, and free GitHub Pages hosting. Adapted from a screen-recorded walkthrough + lesson notes — distilled into a repeatable process.

The website built this way will live in this folder (`website/`) and be where we share our favorite animations from the project.

---

## What this lesson covers

Full walkthrough of building a real website with Claude Code and deploying it free on GitHub Pages. Starts from an existing site as reference, ends with a live URL anyone can visit. **Total prompts used in the reference build: under 10.**

---

## Process at a glance

1. Analyze the reference website in Claude chat (web).
2. Generate a markdown briefing document for Claude Code.
3. Set up a workspace folder.
4. Write the first prompt with structure, scope, and alignment questions.
5. Answer Claude's questions and request a PRD.
6. Let Claude Code build the first version.
7. Review and give design feedback.
8. Push to GitHub and deploy on Pages.
9. Fix any pathing or deployment issues.
10. Confirm the live site works.

---

## Prerequisites

- A Claude account (Pro or above for Claude Code access).
- Claude Code installed (terminal or VS Code).
- A GitHub account (free at github.com).
- A reference site or your own concept to build.
- A workspace folder on disk (this folder works).

---

## Why this approach

- **Free hosting** — GitHub Pages, no Wix / Squarespace / Webflow bill.
- **Full control** — every change is a file edit + a push, not a click in someone else's UI.
- **Iterative** — the structure is designed so you can keep editing weekly without rebuilding from scratch.
- **Token-efficient** — front-load thinking into the first 3–4 prompts so Claude doesn't burn cycles guessing.

---

## Stage 0 — Reference research (Claude on the web)

If you're rebuilding an existing site (or drawing from a reference), do this *before* opening Claude Code.

1. Open the reference URL in **Claude on the web** (claude.ai).
2. Prompt: *"Look at this website, click through the sub-pages if you can to understand it."*
   - If Claude struggles to fetch sub-pages, paste in screenshots of each page.
3. Once it has a feel for the site, prompt:
   > *"Based on that, give me a markdown file that describes the structure and build of the website. My goal is to give this to Claude Code, so it should be written for Claude to read, not for me. I need the understanding of the site before we design and build a new one."*
4. Review the output: URL, taglines, slugs, form IDs, content types, brand voice, visual identity, tech stack.
5. Edit anything wrong (especially brand voice — Claude often guesses).
6. **Download as a markdown file.** This becomes the seed document for Claude Code.

> **Why a markdown file for Claude, not for you:** the next prompts will all reference this file. Claude reading its own structured notes is far cheaper than re-explaining context every prompt.

---

## Stage 1 — Set up the workspace

1. Create a workspace folder (this folder, `website/`).
2. Drop the markdown file from Stage 0 into it.
3. Open the folder in your editor of choice. You can run Claude Code:
   - In a terminal inside the folder (`claude`), or
   - Via the IDE extension (preferred — easier to see file changes side-by-side).

---

## Stage 2 — The first prompt (the most important one)

This prompt sets the structure for everything. **Don't skip the framing.**

Template:

> *We are going to create a new website that looks great and can be deployed on GitHub Pages.*
>
> *Create a folder structure that lets me edit and track changes but is also simple for you to navigate. We need one `CLAUDE.md` that says where files are and what they're doing for easy routing, plus smaller markdown files in each folder describing why/what's there, brand voice, etc.*
>
> *Decide if we're using React/Astro/something else. Goal: something good-looking and easy now. The full build doesn't need to happen today — no user accounts, no logins. Direct manual submissions or code changes are fine. We want a starting template we can extend.*
>
> ***Ask me 3 questions to understand more before doing anything.***

The last line is non-negotiable. It forces Claude to:
- Read the Stage 0 markdown file for context.
- Surface alignment gaps before writing any code.
- Save you from rewriting everything later.

Answer the 3 questions concisely.

---

## Stage 3 — Design pass (PRD via UI/UX skill)

Once aligned, prompt:

> *Use the UI/UX design skill (or your preferred design skill) and create a PRD for this. Don't implement anything yet — I want the skeleton right first. Feel free to ask alignment questions.*

Claude will produce:
- `CLAUDE.md` — routing index for the project.
- `PRD.md` — product requirements doc (sections, components, flows).
- `brand-voice.md`, `design-tokens.md`, layout READMEs, component READMEs.

Review each file. **This is where domain expertise matters most** — typography choices, color palette, spacing. Edit before letting Claude build. Every nuance you fix here saves tokens later.

---

## Stage 4 — Build

When the skeleton looks right:

> *Looks good. Build it.*

Claude will:
- Pick a framework (often Astro for static sites — fast, simple, GitHub-Pages-friendly).
- Generate components, pages, styles.
- Run a local dev server (`npm run dev`) and give you a `localhost` link.

Click the link, look at the site. **Expect to hate things on the first pass.** That's fine — screenshot what's wrong and tell Claude:

> *I don't like X, Y, Z. Switch the palette to [specific colors]. Source stock photos of [subject] for the hero. Make a plan first.*

Iterate until it looks right. Errors? Paste them back to Claude verbatim.

---

## Stage 5 — Push to GitHub

### Option A: Simple HTML upload (skip if you used a framework)

If your site is a single `index.html`:

1. github.com → **New repository** → name it → Create.
2. **Upload files** → drag your `index.html`.
3. **Settings** → **Pages** → Source: *Deploy from branch* → Branch: `main` → Save.
4. Wait ~1 minute, refresh — you get a `https://<user>.github.io/<repo>/` link.

### Option B: Framework site via Claude Code (Astro/React/etc.)

In Claude Code:

> *Looks great. Create a GitHub repo and push it to publish on Pages.*

Claude will:
- Install the GitHub CLI (`gh`) if it's not already there.
- Walk you through device-code auth in your browser.
- Create a `.gitignore` (**verify this before pushing**).
- Create the repo, push the code, configure GitHub Actions for Pages deploy.

#### `.gitignore` — read this before pushing

Anything not in `.gitignore` becomes public. At minimum:

```
.env
.env.local
node_modules/
dist/
*.log
```

Decide whether you want internal markdown (`brand-voice.md`, `PRD.md`) public. If not, add `*.md` or specific file patterns. **Never** commit API keys.

#### Common first-deploy bug: broken asset paths

For a framework site under `https://<user>.github.io/<repo>/`, the base path is `/<repo>/`, not `/`. If the deployed page renders as unstyled text, Claude got the base path wrong. Fix:

> *The deployed site has no CSS — paths are wrong. Fix the base URL config and redeploy.*

For Astro, this means setting `base: '/<repo>/'` in `astro.config.mjs`. Claude will handle it once you flag the symptom.

---

## Stage 6 — Iterate

The whole point of this setup: every future change is

1. Edit locally (or ask Claude to).
2. `git push`.
3. GitHub Actions redeploys in ~30s.

No re-uploading. No CMS dashboard. Add an animation, write a post, change the logo — same loop every time.

---

## Token-efficiency principles (why this works)

- **Front-load context.** 4 well-framed prompts beat 40 corrective ones.
- **Build the skeleton before the body.** PRDs, brand docs, design tokens — all cheap text. Code is expensive.
- **Always end ambiguous prompts with "ask me N questions first."** Forces alignment before action.
- **Read Claude's plan before approving.** Catching a wrong assumption now costs one message; catching it after the build costs hours.
- **Domain expertise compounds.** You're not being replaced — you're directing. The more specific your taste (typography, palette, motion), the better the output.

---

## Project-specific notes for THIS site

- **Purpose:** showcase our favorite animations from the parent Remotion project.
- **Hosting target:** GitHub Pages (free, static).
- **Suggested stack:** Astro for the shell, embed rendered MP4s/WebMs from `out/` or a CDN. Don't commit large video files to the repo — host them externally (e.g., GitHub Releases, S3, Cloudflare R2) and link.
- **Determinism reminder:** the parent project's renders are deterministic. The website should record *which composition + props + asset versions* produced each showcased video, so any animation can be regenerated.
- **Asset hygiene:** rendered MP4s are gitignored at the project root — don't undo that here.

---

## Quick reference checklist

- [ ] Stage 0: reference markdown generated and reviewed
- [ ] Stage 1: workspace folder open, seed markdown dropped in
- [ ] Stage 2: first prompt sent + 3 questions answered
- [ ] Stage 3: PRD + supporting docs reviewed and edited
- [ ] Stage 4: build approved, local preview looks right
- [ ] Stage 5: `.gitignore` reviewed, repo pushed, Pages enabled
- [ ] Stage 6: deployed link works, CSS loads, navigation works

---

# Deeper Dive — GitHub & Folder Structure

The first half of this doc is the build process. This section slows down on the two things that go by fast in the walkthrough: **how GitHub actually works** and **how folder structure changes what Claude Code can do**. They're connected: the folders you build locally are what GitHub stores and serves. Messy folders → Claude wastes tokens hunting. Clean folders + a tight `CLAUDE.md` → Claude reads one file and knows exactly where to go.

## GitHub: what you actually need to know

### Repositories
A repo is a project folder GitHub tracks. Every change is recorded — you can always roll back. **One repo per website.**

### Branches
A new repo has one branch: `main`. That's the live version. Other branches let you test changes without touching what's live. For solo work you'll usually push directly to `main`. Branching matters more with multiple contributors.

### Pushing
Pushing sends your local files to GitHub. Claude Code does this for you. After first-time setup (installing `gh`, authenticating), pushing is one prompt: *"Push this to the repo."* The live site updates within ~1 minute.

### GitHub Pages
The free hosting layer. Two paths:

- **Simple:** upload an `index.html`, turn on Pages in Settings → Pages, select `main`. Done.
- **Framework builds (Astro / React / etc.):** GitHub Actions runs a build step automatically. Claude Code sets this up on first push.

### GitHub Actions
Automated scripts that run on push. For websites, the action builds your site and deploys it. You'll see something like `.github/workflows/deploy.yml`. Claude Code creates it — you don't need to write it, but **know it exists** so you can troubleshoot a failed deploy.

---

## The `.gitignore` file (read before pushing)

`.gitignore` lists what stays local and never goes to GitHub. Open it before every first push.

**What belongs in `.gitignore`:**

| Item | Why |
|------|-----|
| `.env`, `.env.local` | Holds API keys / secrets. Pushing these to a public repo leaks them to the internet. This is the most common beginner mistake. |
| `node_modules/` | Auto-rebuilt dependency files. Huge, and not needed in the repo. |
| `dist/`, build cache | Generated output. GitHub Actions rebuilds during deploy. |
| Private markdown (`*.md` or specific files) | `CLAUDE.md`, brand voice, PRD, internal notes. They help Claude Code work but don't need to be public. |

**Decision rule:** if you wouldn't be comfortable with a stranger reading the file, add it to `.gitignore`.

---

## Folder structure for Claude Code

The reason structure matters is **routing**. Claude reads `CLAUDE.md` first; that file tells it where everything is. If the file is clear and the folders match the description, Claude spends zero tokens figuring out the project — it just starts working.

### `CLAUDE.md` rules

Sits at the project root. Should contain:

- What the project is.
- Where the key files are (design tokens, brand voice, content, components).
- The folder layout.
- Any rules / constraints (deployment target, tech stack, things to avoid).

**Keep it short.** Every token in `CLAUDE.md` is read on every single prompt. A 200-line file costs you constantly. **Target: 30–50 lines.** Cover the essentials and link out to other files for detail.

### Folder-level README files

Each major folder can have its own small markdown file explaining what's inside and why. Claude reads these when it enters the folder. This is how you give detailed context **without bloating the root `CLAUDE.md`**.

### Example structure (from the reference build)

```
project-root/
  CLAUDE.md              # master routing file
  docs/
    brand-voice.md       # tone, language rules, do/don't
    design-tokens.md     # colors, fonts, spacing values
    prd.md               # what we are building and why
  src/
    components/
      README.md          # what components exist, how they connect
    pages/
      README.md          # page list, routing logic
    layouts/
      README.md          # layout templates, when to use each
  public/
    images/
  .gitignore
```

**Why this works.** Claude navigates this the same way a new developer would: read the top-level file, understand the structure, go to the specific folder it needs. No wasted tokens scanning a flat dump of unnamed files.

### Multiple Claude instances

Once this structure exists, you can open 2–3 Claude Code sessions pointed at the same folder. One works on components, another writes content, another researches images. They all read the same `CLAUDE.md` and stay coordinated. **Folder structure is what makes this possible** — without it, instances overwrite each other or duplicate work.

---

## Common questions

**Do I need to know how to code?** No. Claude writes the code. You need to know what you want and how to describe it. Errors? Paste them into Claude. Basic HTML/CSS literacy helps you understand what's happening but isn't required.

**How much does this cost in tokens?** The reference build was under 10 prompts. Exact cost depends on complexity and rework. Front-loading planning is the single biggest factor in keeping costs low.

**Can I use this for a client project?** Yes — same process. Stages 0–1 (analysis + briefing) should happen during/after your discovery call. Better briefing → less revision.

**What if I just want a simple one-page site?** Skip Claude Code. Build it as an artifact in Claude chat, download the HTML, upload to GitHub Pages manually. ~3 minutes. The full process is for sites you'll maintain and expand.

**Can I change things after deployment?** Yes — that's the whole point. Open the folder, open Claude Code, describe the change, push. Live site updates automatically. As often as you want.

---

## Action steps

- [ ] If you don't have a GitHub account, create one at github.com.
- [ ] Try the simple route first: create a repo, upload any `index.html`, turn on Pages, confirm you get a live URL.
- [ ] Open the `.gitignore` from any Claude Code project — read every line. Do you know what each entry does?
- [ ] Review your `CLAUDE.md`. Under 50 lines? Accurately describes the layout? If not, trim it.
- [ ] Watch the full walkthrough video and follow along on your own project. Don't copy the reference site — pick something of your own.
- [ ] Count your prompts. More than 12 to a deployed site? Find where you could have combined or front-loaded.
- [ ] Hit a deploy error? Screenshot first, paste it back to Claude before burning tokens guessing.
