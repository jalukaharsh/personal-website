import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Color Palette - Modern Tech Theme
        'charcoal': 'var(--color-charcoal)',
        'graphite': 'var(--color-graphite)',
        'stone': 'var(--color-stone)',
        'electric-blue': 'var(--color-electric-blue)',
        'mint': 'var(--color-mint)',
        
        // Semantic Background Colors
        'bg-primary': 'var(--color-bg-primary)',
        'bg-secondary': 'var(--color-bg-secondary)',
        'bg-content': 'var(--color-bg-content)',
        
        // Semantic Text Colors
        'text-on-dark': 'var(--color-text-on-dark)',
        'text-on-light': 'var(--color-text-on-light)',
        'text-primary': 'var(--color-text-primary)',
        'text-muted': 'var(--color-text-muted)',
        
        // Semantic Interactive Colors
        'interactive-primary': 'var(--color-interactive-primary)',
        'interactive-secondary': 'var(--color-interactive-secondary)',
        'interactive-hover': 'var(--color-interactive-hover)',
        
        // Semantic Border Colors
        'border': 'var(--color-border)',
        'border-subtle': 'var(--color-border-subtle)',
        'border-emphasis': 'var(--color-border-emphasis)',
        
        // Opacity Variants
        'electric-blue-10': 'var(--color-electric-blue-10)',
        'electric-blue-20': 'var(--color-electric-blue-20)',
        'mint-10': 'var(--color-mint-10)',
        'mint-20': 'var(--color-mint-20)',
      },
    },
  },
} satisfies Config;
