import { z, defineCollection } from 'astro:content';

const projectsSchema = z.object({
  title: z.string(),
  pubDate: z.coerce.date(),
  tags: z.array(z.string()).optional(),
  draft: z.boolean().default(false),
});

const travelSchema = z.object({
  title: z.string(),
  pubDate: z.coerce.date(),
  tags: z.array(z.string()).optional(),
  draft: z.boolean().default(false),
  daysSpent: z.number()
});


const readingSchema = z.object({
  title: z.string(),
  pubDate: z.coerce.date(),
  author: z.string(),
  publicationYear: z.number(),
  tags: z.array(z.string()).optional(),
  draft: z.boolean().default(false),
});

const readingCollection = defineCollection({
  type: 'content',
  schema: readingSchema,
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: projectsSchema,
});

const travelCollection = defineCollection({
  type: 'content',
  schema: travelSchema,
});

const quotesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    quotes: z.array(
      z.object({
        text: z.string(),
        author: z.string(),
        source: z.string().optional(),
      })
    ),
  }),
});

export const collections = {
  reading: readingCollection,
  projects: projectsCollection,
  travel: travelCollection,
  quotes: quotesCollection,
};
