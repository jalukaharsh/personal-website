// Categories are post types that have their own frontmatter fields and (later) their own page.
// Everything else about a post is expressed with free-form `tags`. A post has at most one category,
// and no category is the normal case (e.g. a laptop review).
//
// To promote a new type of post to a category: add an entry here, add the id to CATEGORY_IDS,
// and add the new frontmatter field to the posts schema in src/content/config.ts.

export const CATEGORY_IDS = ['book-review', 'travel'] as const;
export type CategoryId = (typeof CATEGORY_IDS)[number];

/** Frontmatter fields that only some categories use. */
export type CategoryField = 'author' | 'publicationYear' | 'daysSpent';

export interface CategoryConfig {
  id: CategoryId;
  /** Label shown on filter chips and page headings. */
  label: string;
  /** URL of the category page, e.g. /travel. Lives outside /blog/ so it can't collide with a post slug. */
  path: string;
  /** Fields a post in this category must provide. The build fails if one is missing. */
  requiredFields: CategoryField[];
}

export const CATEGORIES: Record<CategoryId, CategoryConfig> = {
  'book-review': {
    id: 'book-review',
    label: 'Book reviews',
    path: '/book-reviews',
    requiredFields: ['author', 'publicationYear'],
  },
  travel: {
    id: 'travel',
    label: 'Travel',
    path: '/travel',
    requiredFields: ['daysSpent'],
  },
};
