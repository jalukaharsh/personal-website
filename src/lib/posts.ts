import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

/** All non-draft posts, newest first. */
export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

/** Published posts carrying `tag`, newest first. */
export async function getPostsByTag(tag: string): Promise<Post[]> {
  return (await getPublishedPosts()).filter((post) => post.data.tags.includes(tag));
}

/** Every tag used by the given posts with its post count, most-used first (ties alphabetical). */
export function getTagCounts(posts: Post[]): { tag: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.data.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

/**
 * TEMPORARY (removed in phase 3): the old section URLs (/reviews, /projects, /travel)
 * still exist while the new /blog page is built. Each maps a section to the tag it filters on.
 */
export const LEGACY_SECTIONS = {
  reviews: 'review',
  projects: 'project',
  travel: 'travel',
} as const;

export type LegacySection = keyof typeof LEGACY_SECTIONS;

export function legacySectionOf(post: Post): LegacySection {
  const section = (Object.keys(LEGACY_SECTIONS) as LegacySection[]).find((s) =>
    post.data.tags.includes(LEGACY_SECTIONS[s])
  );
  if (!section) {
    throw new Error(`Post "${post.slug}" has none of the tags: ${Object.values(LEGACY_SECTIONS).join(', ')}`);
  }
  return section;
}

/** Single place that decides a post's URL. */
export function postHref(post: Post): string {
  return `/${legacySectionOf(post)}/${post.slug}`;
}
