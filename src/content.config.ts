import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Collection blog : chaque post est un .md dans src/content/blog/.
// Le champ `faq` alimente le JSON-LD FAQPage (généré statiquement au build).
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Simon Fournier'),
    publisher: z.string().default('FournIA'),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    faq: z
      .array(z.object({ q: z.string(), a: z.string() }))
      .default([]),
  }),
});

export const collections = { blog };
