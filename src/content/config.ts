import { z, defineCollection } from 'astro:content';

const contentSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  tags: z.array(z.string()).optional(),
  draft: z.boolean().default(false),
});

const booksSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  author: z.string(),
  publicationYear: z.number(),
  tags: z.array(z.string()).optional(),
  draft: z.boolean().default(false),
});

const quotesSchema = z.object({
  text: z.string(),
  author: z.string(),
  source: z.string().optional(),
});

const booksCollection = defineCollection({
  type: 'content',
  schema: booksSchema,
});

const quotesCollection = defineCollection({
  type: 'data',
  schema: quotesSchema,
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: contentSchema,
});

const travelCollection = defineCollection({
  type: 'content',
  schema: contentSchema,
});

export const collections = {
  books: booksCollection,
  projects: projectsCollection,
  travel: travelCollection,
  quotes: quotesCollection,
};
