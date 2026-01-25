## Project Structure

```text
src/
├── components/        # Reusable Astro components
├── content/           # Content collections (Markdown + data files)
├── data/              # Structured data files (TypeScript)
├── layouts/           # Page layout templates
├── pages/             # File-based routing
│   ├── [collection]/  # Dynamic collection routes
│   │   ├── [...slug].astro      # Individual content pages
│   │   └── tag/[tag].astro      # Tag filtering pages
│   ├── books/index.astro        # Books listing
│   ├── projects/index.astro     # Projects listing
│   ├── travel/index.astro       # Travel listing
│   └── index.astro              # Homepage
└── styles/            # Global CSS and design tokens

public/                # Static assets (images, SVGs, favicon)
scripts/               # Build and validation scripts
```

## Configuration Files

- `astro.config.mjs`: Astro and Vite configuration
- `tailwind.config.ts`: Tailwind theme extensions
- `tsconfig.json`: TypeScript compiler options
- `wrangler.jsonc`: Cloudflare deployment config (optional)

## Routing Patterns

- **Static routes**: `/`, `/books`, `/projects`, `/travel`
- **Dynamic collection routes**: `/[collection]/[slug]` (e.g., `/books/fahrenheit-451`)
- **Tag filtering**: `/[collection]/tag/[tag]` (e.g., `/books/tag/fiction`)

## Component Conventions

- Components use `.astro` extension for Astro components
- Scoped styles preferred over global styles
- CSS custom properties (variables) for theming
- Semantic class names following BEM-like patterns

## File Naming

- Kebab-case for files and directories
- Collection slugs match filename (e.g., `fahrenheit-451.md` → `/books/fahrenheit-451`)
- Dynamic routes use Astro's bracket notation: `[param].astro`, `[...slug].astro`
