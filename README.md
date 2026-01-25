# Personal Blog Website

A modern, fast, and extensible personal blog built with Astro and Tailwind CSS. This static site generator-based solution provides full control, vendor independence, and excellent performance.

## Features

- Markdown-based content authoring with frontmatter metadata
- Tag-based organization and filtering
- Draft mode for work-in-progress content
- Link validation during build process
- Zero JavaScript by default for fast page loads
- Fully extensible architecture for future enhancements

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

## Useful Commands

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

## Learn More

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Markdown Guide](https://www.markdownguide.org/)

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

This ensures that any derivative works remain open source and freely available to the community.
