import { z, defineCollection } from 'astro:content';
import { CATEGORIES, CATEGORY_IDS } from '../data/categories';

// Every post lives in src/content/posts/<kebab-case-title>.md and the filename is the URL slug.
// `category` is optional: only types of post with their own fields/page get one (see src/data/categories.ts).
// Everything else is expressed through free-form `tags`, which are independent of category.
// Optional fields are only rendered when present.
const postsSchema = z
  .object({
    title: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(CATEGORY_IDS).optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    description: z.string().optional(),
    pinned: z.boolean().default(false),
    // book-review
    author: z.string().optional(),
    publicationYear: z.number().optional(),
    // travel
    daysSpent: z.number().optional(),
  })
  .superRefine((post, ctx) => {
    if (!post.category) return;
    for (const field of CATEGORIES[post.category].requiredFields) {
      if (post[field] === undefined) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: [field],
          message: `"${field}" is required for category "${post.category}"`,
        });
      }
    }
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
