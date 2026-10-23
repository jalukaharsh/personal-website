#!/usr/bin/env node

/**
 * Slug Validation Script
 * A post's URL is its filename, and the filename must be the kebab-cased title:
 *   "Building This Website" -> src/content/posts/building-this-website.md -> /blog/building-this-website
 * Fails the build when they disagree, so URLs never drift from titles unnoticed.
 */

import { readFileSync, readdirSync } from 'fs';
import { join, dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const POSTS_DIR = resolve(dirname(fileURLToPath(import.meta.url)), '../src/content/posts');

function kebab(title) {
  return title
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // strip diacritics
    .toLowerCase()
    .replace(/['\u2019]/g, '') // drop apostrophes: "Midnight's" -> "midnights"
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function readTitle(source) {
  const frontmatter = source.replace(/\r\n/g, '\n').match(/^---\n([\s\S]*?)\n---/);
  const line = frontmatter?.[1].match(/^title:\s*(.+)$/m);
  if (!line) return null;
  return line[1].trim().replace(/^(["'])(.*)\1$/, '$2');
}

const errors = [];
const files = readdirSync(POSTS_DIR).filter((f) => f.endsWith('.md'));

for (const file of files) {
  const title = readTitle(readFileSync(join(POSTS_DIR, file), 'utf-8'));
  const slug = file.slice(0, -'.md'.length);

  if (title === null) {
    errors.push(`${file}: could not read a title from the frontmatter`);
  } else if (kebab(title) !== slug) {
    errors.push(`${file}: title "${title}" should be named ${kebab(title)}.md (or change the title)`);
  }
}

if (errors.length > 0) {
  console.error(`❌ Slug validation failed (${errors.length}):\n`);
  errors.forEach((e) => console.error(`  • ${e}`));
  console.error('');
  process.exit(1);
}

console.log(`✅ All ${files.length} post filenames match their titles.`);
