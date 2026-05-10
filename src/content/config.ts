import { defineCollection, z } from 'astro:content';

// Localized animation entries.
// Slug convention: `<animation-slug>/<locale>` (e.g. `welcome/en`, `welcome/fr`).
// Each entry holds language-specific frontmatter + body. Schema fields that are
// truly per-locale (title, description, body) live here; language-agnostic
// fields (date, duration, videoUrl, order) are duplicated across locales for
// simplicity, the EN copy is the source of truth.
const animations = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    duration: z.string(),                  // mm:ss
    videoUrl: z.string().url(),            // external, host on GitHub Releases / R2 / etc.
    posterImage: z.string().optional(),    // path relative to the animation folder
    specPath: z.string().optional(),       // optional link to source spec
    order: z.number().default(100),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { animations };
