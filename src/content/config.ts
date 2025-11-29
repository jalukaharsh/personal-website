import { z, defineCollection } from 'astro:content';

const contentSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  tags: z.array(z.string()).optional(),
  draft: z.boolean().default(false),
});

const booksCollection = defineCollection({
  type: 'content',
  schema: contentSchema,
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
};
