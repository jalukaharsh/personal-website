import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { CategoryId } from '../data/categories';

export type Post = CollectionEntry<'posts'>;

/** All non-draft posts, newest first. */
export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

/** Published posts in `category`, newest first. */
export async function getPostsByCategory(category: CategoryId): Promise<Post[]> {
  return (await getPublishedPosts()).filter((post) => post.data.category === category);
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
 * TEMPORARY (removed in phase 3/4): the old section URLs (/reviews, /projects, /travel)
 * still exist while the new /blog page is built.
 * reviews = category book-review, travel = category travel, projects = tag "project".
 */
export type LegacySection = 'reviews' | 'projects' | 'travel';

export function legacySectionOf(post: Post): LegacySection {
  if (post.data.category === 'book-review') return 'reviews';
  if (post.data.category === 'travel') return 'travel';
  if (post.data.tags.includes('project')) return 'projects';
  throw new Error(`Post "${post.slug}" has no category and no "project" tag, so it has no legacy section URL`);
}

export async function getPostsByLegacySection(section: LegacySection): Promise<Post[]> {
  return (await getPublishedPosts()).filter((post) => legacySectionOf(post) === section);
}

/** Single place that decides a post's URL. */
export function postHref(post: Post): string {
  return `/${legacySectionOf(post)}/${post.slug}`;
}
