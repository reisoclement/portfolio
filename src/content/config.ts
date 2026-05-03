import { defineCollection, z } from 'astro:content';

const animations = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    duration: z.string(),                  // mm:ss
    videoUrl: z.string().url(),            // external — host on GitHub Releases / R2 / etc.
    posterImage: z.string().optional(),    // path relative to the animation folder
    specPath: z.string().optional(),       // optional link to source spec
    order: z.number().default(100),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { animations };
