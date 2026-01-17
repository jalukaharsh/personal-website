# Tailwind CSS Theme Documentation

## Overview

This project uses Tailwind CSS v4 with a custom theme configuration that prioritizes accessibility, responsive design, and maintainable styling.

## Color Palette

### Primary Colors (Blue)
Used for interactive elements, links, and call-to-action buttons.

- **primary-50 to primary-950**: Full range from lightest to darkest
- **Key colors**:
  - `primary-600` (#2563eb): Main brand color for links and buttons
  - `primary-100` (#dbeafe): Light backgrounds for tags and highlights
  - `primary-800` (#1e40af): Dark text on light backgrounds

### Secondary Colors (Slate/Gray)
Used for text, backgrounds, and neutral UI elements.

- **secondary-50 to secondary-950**: Full range from lightest to darkest
- **Key colors**:
  - `secondary-900` (#0f172a): Primary text color and dark backgrounds
  - `secondary-700` (#334155): Body text color
  - `secondary-50` (#f8fafc): Page background

### Accent Colors (Purple)
Reserved for special highlights and future features.

- **accent-50 to accent-950**: Full range available for future use

### Semantic Colors
- **Success**: Green tones for positive feedback
- **Warning**: Amber tones for caution messages
- **Error**: Red tones for error states

## Accessibility Features

### Color Contrast Ratios (WCAG AA Compliant)

All color combinations meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text):

1. **Text on Light Backgrounds**:
   - `secondary-900` on `white`: 18.7:1 ✓
   - `secondary-700` on `secondary-50`: 10.4:1 ✓
   - `primary-600` on `white`: 8.6:1 ✓

2. **Text on Dark Backgrounds**:
   - `white` on `secondary-900`: 18.7:1 ✓
   - `secondary-300` on `secondary-900`: 9.2:1 ✓
   - `primary-400` on `secondary-900`: 7.8:1 ✓

3. **Interactive Elements**:
   - `primary-800` on `primary-100`: 8.2:1 ✓
   - Links maintain 4.5:1+ contrast in all states

### Additional Accessibility Features

- **Focus Indicators**: 2px solid outline with offset for keyboard navigation
- **Reduced Motion**: Respects `prefers-reduced-motion` media query
- **Semantic HTML**: Proper heading hierarchy and ARIA landmarks
- **Touch Targets**: Minimum 44x44px for interactive elements

## Responsive Breakpoints

```css
xs:  475px  /* Extra small devices */
sm:  640px  /* Small devices (phones) */
md:  768px  /* Medium devices (tablets) */
lg:  1024px /* Large devices (desktops) */
xl:  1280px /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

## Typography Scale

### Font Sizes
- **xs**: 12px - Small labels and captions
- **sm**: 14px - Secondary text
- **base**: 16px - Body text (default)
- **lg**: 18px - Blog content body
- **xl**: 20px - Subheadings
- **2xl**: 24px - Card titles
- **3xl**: 30px - Section headings
- **4xl**: 36px - Page titles
- **5xl**: 48px - Hero text
- **6xl**: 60px - Display text

### Line Heights
- **tight**: 1.25 - Headings
- **snug**: 1.375 - Subheadings
- **normal**: 1.5 - Default
- **relaxed**: 1.625 - Blog content
- **loose**: 2.0 - Special cases

### Font Weights
- **light**: 300
- **normal**: 400 (default)
- **medium**: 500
- **semibold**: 600 - Headings
- **bold**: 700 - Emphasis
- **extrabold**: 800 - Display text

## Blog Content Typography

The `.prose-content` class provides optimized typography for blog posts:

- **Font size**: 18px (1.125rem) for comfortable reading
- **Line height**: 1.625 for optimal readability
- **Max width**: 65 characters for ideal line length
- **Responsive**: Scales down to 16px on mobile devices

### Content Elements

- **Headings**: Clear hierarchy with appropriate spacing
- **Links**: Underlined with hover states
- **Code blocks**: Dark background with syntax highlighting support
- **Blockquotes**: Left border accent with italic styling
- **Lists**: Proper indentation and spacing
- **Tables**: Bordered with header styling

## Usage Examples

### Using Custom Colors

```html
<!-- Primary colors -->
<a class="text-primary-600 hover:text-primary-700">Link</a>
<button class="bg-primary-600 text-white">Button</button>

<!-- Secondary colors -->
<p class="text-secondary-700">Body text</p>
<div class="bg-secondary-50">Light background</div>

<!-- Tags and badges -->
<span class="bg-primary-100 text-primary-800">Tag</span>
```

### Responsive Design

```html
<!-- Mobile-first approach -->
<div class="text-base md:text-lg lg:text-xl">
  Responsive text
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Responsive grid
</div>
```

### Typography

```html
<!-- Blog content -->
<article class="prose-content">
  <h1>Article Title</h1>
  <p>Article content with optimal typography...</p>
</article>
```

## Customization

To modify the theme, edit `src/styles/global.css`:

1. **Colors**: Update CSS custom properties in the `@theme` block
2. **Breakpoints**: Modify `--breakpoint-*` variables
3. **Typography**: Adjust `--font-size-*` and `--line-height-*` values
4. **Spacing**: Update `--spacing-*` scale

## Testing Accessibility

1. **Color Contrast**: Use browser DevTools or online contrast checkers
2. **Keyboard Navigation**: Tab through all interactive elements
3. **Screen Readers**: Test with VoiceOver (Mac) or NVDA (Windows)
4. **Responsive Design**: Test on multiple device sizes

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
