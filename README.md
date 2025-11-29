# Personal Blog Website

A modern, fast, and extensible personal blog built with Astro and Tailwind CSS. This static site generator-based solution provides full control, vendor independence, and excellent performance.

## Features

- 📝 Write blog posts in Markdown with frontmatter metadata
- 🏷️ Organize posts with tags and categories
- 🎨 Responsive design with Tailwind CSS
- ⚡ Lightning-fast static site generation
- 🔍 Built-in link validation
- 🚀 Deploy anywhere (Netlify, Vercel, GitHub Pages, etc.)
- 🔧 Fully extensible architecture for future enhancements

## Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

## Getting Started

### Installation

1. Clone the repository:
```sh
git clone <repository-url>
cd personal-blog-website
```

2. Install dependencies:
```sh
npm install
```

3. Start the development server:
```sh
npm run dev
```

The site will be available at `http://localhost:4321`

## Project Structure

```text
personal-blog-website/
├── src/
│   ├── content/
│   │   ├── config.ts          # Content collection schema
│   │   └── blog/              # Blog post Markdown files
│   │       ├── post-1.md
│   │       └── post-2.md
│   ├── layouts/
│   │   ├── BaseLayout.astro   # Base HTML structure
│   │   └── BlogPost.astro     # Blog post template
│   ├── pages/
│   │   ├── index.astro        # Homepage
│   │   ├── blog/
│   │   │   ├── index.astro    # Blog listing page
│   │   │   ├── [slug].astro   # Individual post pages
│   │   │   └── tag/
│   │   │       └── [tag].astro # Tag index pages
│   ├── components/
│   │   ├── Header.astro       # Site navigation
│   │   ├── Footer.astro       # Site footer
│   │   └── BlogPostCard.astro # Blog post preview card
│   └── styles/
│       └── global.css         # Global styles
├── public/                     # Static assets (images, fonts, etc.)
├── scripts/
│   └── validate-links.js      # Link validation script
├── astro.config.mjs           # Astro configuration
├── tailwind.config.mjs        # Tailwind configuration
├── package.json
└── tsconfig.json
```

## Available Commands

All commands are run from the root of the project:

| Command                        | Action                                                      |
| :----------------------------- | :---------------------------------------------------------- |
| `npm install`                  | Installs dependencies                                       |
| `npm run dev`                  | Starts local dev server at `localhost:4321`                 |
| `npm run build`                | Build production site to `./dist/` with link validation     |
| `npm run build:skip-validation`| Build production site without link validation               |
| `npm run preview`              | Preview your build locally before deploying                 |
| `npm run validate:links`       | Run link validation on built site                           |
| `npm run astro ...`            | Run CLI commands like `astro add`, `astro check`            |

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

Your blog post content goes here. You can use all standard Markdown features:

## Headings

- Lists
- **Bold** and *italic* text
- [Links](https://example.com)
- Code blocks
- And more!
```

### Frontmatter Fields

| Field         | Type       | Required | Description                                    |
| :------------ | :--------- | :------- | :--------------------------------------------- |
| `title`       | string     | Yes      | The post title                                 |
| `description` | string     | Yes      | Brief description for previews and SEO         |
| `pubDate`     | date       | Yes      | Publication date (YYYY-MM-DD format)           |
| `tags`        | string[]   | No       | Array of tags for categorization               |
| `draft`       | boolean    | No       | Set to `true` to hide from production (default: false) |

### Draft Posts

To create a draft post that won't appear in production:

```markdown
---
title: "Work in Progress"
description: "This post is not ready yet"
pubDate: 2024-01-15
draft: true
---
```

Draft posts will appear in development mode but will be filtered out in production builds.

## Dependencies

### Core Dependencies

- **astro** (^5.15.4): Static site generator framework
  - Provides content collections, routing, and build system
  - Zero JavaScript by default for optimal performance
  
- **tailwindcss** (^4.1.17): Utility-first CSS framework
  - Responsive design system
  - Customizable theme and components
  
- **@tailwindcss/vite** (^4.1.17): Vite integration for Tailwind CSS
  - Fast development builds with hot module reloading
  
- **@tailwindcss/typography** (^0.5.19): Typography plugin for Tailwind
  - Beautiful typographic defaults for Markdown content
  - Optimized for readability

## Deployment

This site generates static HTML, CSS, and JavaScript files that can be deployed to any static hosting provider.

### Netlify

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket)

2. Log in to [Netlify](https://netlify.com) and click "Add new site"

3. Connect your repository

4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

5. Click "Deploy site"

Netlify will automatically rebuild and deploy your site whenever you push changes to your repository.

### Vercel

1. Push your code to a Git repository

2. Log in to [Vercel](https://vercel.com) and click "Add New Project"

3. Import your repository

4. Configure project:
   - **Framework Preset**: Astro
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

5. Click "Deploy"

Vercel will automatically deploy updates when you push to your repository.

### GitHub Pages

1. Install the GitHub Pages adapter:
```sh
npx astro add @astrojs/github-pages
```

2. Update `astro.config.mjs` with your site URL:
```js
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/your-repo-name',
});
```

3. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

4. Enable GitHub Pages in your repository settings (Settings → Pages → Source: GitHub Actions)

### Other Static Hosts

The `dist/` folder can be deployed to any static hosting service:

- **AWS S3 + CloudFront**: Upload `dist/` contents to S3 bucket
- **Cloudflare Pages**: Connect repository or upload `dist/` folder
- **DigitalOcean App Platform**: Connect repository with build command
- **Any web server**: Upload `dist/` contents via FTP/SFTP

## Customization

### Styling

Edit `tailwind.config.mjs` to customize colors, fonts, and other design tokens:

```js
export default {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
      },
    },
  },
};
```

### Navigation

Update `src/components/Header.astro` to add or modify navigation links.

### Layout

Modify `src/layouts/BaseLayout.astro` to change the overall page structure, meta tags, or add analytics.

## Extending the Site

This website is designed to be easily extensible with a modular architecture that supports adding new content types and sections.

### Documentation

- **[Extensibility Guide](./EXTENSIBILITY.md)**: Comprehensive guide to adding new content collections, pages, and features
- **[Navigation Extensibility](./docs/NAVIGATION_EXTENSIBILITY.md)**: How to add new sections to the navigation
- **[Layout Reusability](./docs/LAYOUT_REUSABILITY.md)**: How to create and reuse layouts for different content types

### Example: Portfolio Section

This project includes a complete portfolio section as an example of extensibility:
- Portfolio content collection with schema validation
- Portfolio listing page (`/portfolio`)
- Individual project pages (`/portfolio/[slug]`)
- Reusable PortfolioCard component
- Specialized PortfolioProject layout
- Three sample portfolio projects

### Quick Start: Adding New Content Types

1. Define a new collection in `src/content/config.ts`
2. Create content directory: `src/content/[collection-name]/`
3. Add pages in `src/pages/[collection-name]/`
4. Update navigation in `src/components/Header.astro`

See the portfolio implementation for a complete working example.

### Adding Interactive Components

Astro supports framework components (React, Vue, Svelte) for interactive features:

```sh
npx astro add react
```

Then create `.jsx` or `.tsx` components with client-side interactivity.

## Troubleshooting

### Build Fails with Link Validation Errors

If you have broken internal links, the build will fail. To build without validation:

```sh
npm run build:skip-validation
```

Then fix the broken links and run the full build again.

### Development Server Not Updating

Clear the Astro cache and restart:

```sh
rm -rf .astro
npm run dev
```

### TypeScript Errors

Run the Astro type checker:

```sh
npm run astro check
```

## Learn More

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Markdown Guide](https://www.markdownguide.org/)

## License

This project is open source and available under the MIT License.
