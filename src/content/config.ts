import { z, defineCollection } from 'astro:content';

// Every post lives in src/content/posts/<kebab-case-title>.md and the filename is the URL slug.
// What a post "is" (review, project, travel...) is expressed purely through `tags`.
// Optional fields are only rendered when present.
const postsSchema = z.object({
  title: z.string(),
  pubDate: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  description: z.string().optional(),
  pinned: z.boolean().default(false),
  // book / media reviews
  author: z.string().optional(),
  publicationYear: z.number().optional(),
  // travel
  daysSpent: z.number().optional(),
});

const postsCollection = defineCollection({
  type: 'content',
  schema: postsSchema,
});

const quotesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    quotes: z.array(
      z.object({
        text: z.string(),
        author: z.string().optional(),
        source: z.string().optional(),
      })
    ),
  }),
});

export const collections = {
  posts: postsCollection,
  quotes: quotesCollection,
};
