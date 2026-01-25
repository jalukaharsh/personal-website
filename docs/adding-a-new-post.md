## Adding New Blog Posts

### Creating a Blog Post

1. Create a new Markdown file in `src/content/blog/`:
```sh
touch src/content/blog/my-new-post.md
```

2. Add frontmatter and content:
```markdown
---
title: "My New Blog Post"
description: "A brief description of the post"
pubDate: 2024-01-15
tags: ["javascript", "web-development"]
draft: false
---


### Frontmatter Fields
Each collection has a Zod schema in `src/content/config.ts`:

- **Common fields**: `title`, `pubDate`, `tags`, `draft`
- **Books-specific**: `author`, `publicationYear`
- **Travel-specific**: `daysSpent`
- **Quotes**: Data-only collection with `quotes` array

