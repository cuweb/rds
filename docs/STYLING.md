# Styling System

This document covers the current Tailwind CSS implementation and styling patterns in RDS.

## Table of Contents

- [Overview](#overview)
- [Tailwind Configuration](#tailwind-configuration)
- [RDS Tailwind Theme](#rds-tailwind-theme)
- [CSS Architecture](#css-architecture)
- [Component Styling Patterns](#component-styling-patterns)
- [Utility Classes](#utility-classes)
- [Dark Mode](#dark-mode)
- [Responsive Design](#responsive-design)
- [Known Issues](#known-issues)

---

## Overview

RDS currently uses Tailwind CSS with a custom theme preset (`rds-tailwind-theme`) for styling. This provides:

- **Carleton University brand colors**
- **Consistent spacing and typography**
- **Responsive breakpoints**
- **Dark mode support**

### Current Stack

| Package | Version | Purpose |
|---------|---------|---------|
| `tailwindcss` | 3.4.17 | Utility CSS framework |
| `rds-tailwind-theme` | 0.9.2 | Carleton custom theme |
| `@tailwindcss/forms` | - | Form element styling |
| `@tailwindcss/typography` | - | Prose/article styling |
| `@tailwindcss/aspect-ratio` | - | Aspect ratio utilities |
| `@tailwindcss/container-queries` | - | Container query support |
| `postcss` | - | CSS processing |
| `autoprefixer` | - | Browser prefixes |
| `postcss-nesting` | - | CSS nesting support |

---

## Tailwind Configuration

### Configuration File

`tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  // Use Carleton's custom theme preset
  presets: [require('rds-tailwind-theme')],

  // Scan all component files for class usage
  content: ['./lib/**/*.{tsx,ts,jsx,js}'],

  // Selector-based dark mode (.dark class)
  darkMode: 'selector',

  theme: {
    extend: {
      // Project-specific extensions here
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
}

export default config
```

### PostCSS Configuration

`postcss.config.js`:

```javascript
module.exports = {
  plugins: {
    'postcss-nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

## RDS Tailwind Theme

The `rds-tailwind-theme` package provides Carleton University's brand design tokens.

### Brand Colors

```css
/* Primary */
--cu-red: #bf112b;          /* Carleton Red */
--cu-black: #262626;        /* Near black */
--cu-white: #ffffff;

/* Grays */
--cu-gray-50: #f9fafb;
--cu-gray-100: #f3f4f6;
--cu-gray-200: #e5e7eb;
--cu-gray-300: #d1d5db;
--cu-gray-400: #9ca3af;
--cu-gray-500: #6b7280;
--cu-gray-600: #4b5563;
--cu-gray-700: #374151;
--cu-gray-800: #1f2937;
--cu-gray-900: #111827;

/* Semantic */
--cu-success: #10b981;
--cu-warning: #f59e0b;
--cu-error: #ef4444;
--cu-info: #3b82f6;
```

### Typography

```css
/* Font families */
--font-sans: 'Open Sans', system-ui, sans-serif;
--font-serif: 'Georgia', serif;
--font-mono: 'Fira Code', monospace;

/* Font sizes (rem) */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
```

### Spacing

Based on 4px base unit:

```css
/* Spacing scale */
--spacing-0: 0;
--spacing-1: 0.25rem;  /* 4px */
--spacing-2: 0.5rem;   /* 8px */
--spacing-3: 0.75rem;  /* 12px */
--spacing-4: 1rem;     /* 16px */
--spacing-5: 1.25rem;  /* 20px */
--spacing-6: 1.5rem;   /* 24px */
--spacing-8: 2rem;     /* 32px */
--spacing-10: 2.5rem;  /* 40px */
--spacing-12: 3rem;    /* 48px */
--spacing-16: 4rem;    /* 64px */
--spacing-20: 5rem;    /* 80px */
--spacing-24: 6rem;    /* 96px */
```

### Breakpoints

```css
/* Responsive breakpoints */
--screen-sm: 640px;
--screen-md: 768px;
--screen-lg: 1024px;
--screen-xl: 1280px;
--screen-2xl: 1536px;
```

---

## CSS Architecture

### File Structure

```
lib/
├── style.css           # Main CSS entry point
├── styles/
│   ├── spacing.css     # Spacing utilities
│   ├── max-width.css   # Max-width constraints
│   └── utilities.css   # Custom utilities
└── components/
    └── Component/
        └── styles.css  # Component-scoped styles
```

### Main CSS Entry Point

`lib/style.css`:

```css
/* Tailwind layers */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

/* Global styles */
@import './styles/spacing.css';
@import './styles/max-width.css';
@import './styles/utilities.css';

/* Component styles */
@import './components/Alert/styles.css';
@import './components/Button/styles.css';
@import './components/Card/styles.css';
/* ... more component imports */
```

### Component CSS Pattern

Each component has a `styles.css` file for custom styles:

```css
/* components/Button/styles.css */

/* Base button styles */
.cu-button {
  @apply inline-flex items-center justify-center;
  @apply px-4 py-2 rounded-md;
  @apply font-medium text-sm;
  @apply transition-colors duration-200;
  @apply focus:outline-none focus:ring-2 focus:ring-offset-2;
}

/* Color variants */
.cu-button--red {
  @apply bg-cu-red text-white;
  @apply hover:bg-cu-red-dark;
  @apply focus:ring-cu-red;
}

.cu-button--grey {
  @apply bg-gray-200 text-gray-800;
  @apply hover:bg-gray-300;
  @apply focus:ring-gray-400;
}

/* Size variants */
.cu-button--small {
  @apply px-3 py-1.5 text-xs;
}

.cu-button--full {
  @apply w-full;
}

/* States */
.cu-button:disabled,
.cu-button--disabled {
  @apply opacity-50 cursor-not-allowed;
}
```

---

## Component Styling Patterns

### Pattern 1: Tailwind Classes in JSX

Direct utility classes in components:

```tsx
// Button.tsx
export function Button({ color, isSmall, children }) {
  const classes = clsx(
    'inline-flex items-center justify-center',
    'px-4 py-2 rounded-md font-medium',
    'transition-colors duration-200',
    {
      'bg-cu-red text-white hover:bg-cu-red-dark': color === 'red',
      'bg-gray-200 text-gray-800 hover:bg-gray-300': color === 'grey',
      'px-3 py-1.5 text-xs': isSmall,
    }
  )

  return <button className={classes}>{children}</button>
}
```

### Pattern 2: CSS Classes + @apply

Custom CSS classes using Tailwind's @apply:

```tsx
// Button.tsx
export function Button({ color, isSmall, children }) {
  const classes = clsx(
    'cu-button',
    `cu-button--${color}`,
    { 'cu-button--small': isSmall }
  )

  return <button className={classes}>{children}</button>
}
```

```css
/* styles.css */
.cu-button {
  @apply inline-flex items-center justify-center;
  @apply px-4 py-2 rounded-md font-medium;
}

.cu-button--red {
  @apply bg-cu-red text-white hover:bg-cu-red-dark;
}
```

### Pattern 3: Utility Class Maps

Centralized class definitions:

```tsx
// utils/propClasses.tsx
export const buttonColorClasses = {
  red: 'bg-cu-red text-white hover:bg-cu-red-dark',
  grey: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  'dark-grey': 'bg-gray-600 text-white hover:bg-gray-700',
  black: 'bg-black text-white hover:bg-gray-900',
  white: 'bg-white text-gray-900 hover:bg-gray-50 border border-gray-300',
}

// Button.tsx
import { buttonColorClasses } from '../../utils/propClasses'

export function Button({ color = 'red', children }) {
  return (
    <button className={clsx('cu-button', buttonColorClasses[color])}>
      {children}
    </button>
  )
}
```

---

## Utility Classes

### Exported Utilities

From `lib/utils/propClasses.tsx`:

```typescript
// Max width constraints
export const maxWidthClasses = {
  narrow: 'max-w-2xl',    // 672px
  small: 'max-w-3xl',     // 768px
  base: 'max-w-4xl',      // 896px
  large: 'max-w-5xl',     // 1024px
  full: 'max-w-full',     // 100%
  '7xl': 'max-w-7xl',     // 1280px
}

// Grid columns
export const gridColumnClasses = {
  '1': 'grid-cols-1',
  '2': 'grid-cols-2',
  '3': 'grid-cols-3',
  '4': 'grid-cols-4',
  '6': 'grid-cols-6',
  '12': 'grid-cols-12',
}

// Grid gaps
export const gridGapClasses = {
  none: 'gap-0',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
}

// Aspect ratios
export const aspectRatioClasses = {
  square: 'aspect-square',      // 1:1
  landscape: 'aspect-video',    // 16:9
  portrait: 'aspect-[3/4]',     // 3:4
  wide: 'aspect-[21/9]',        // 21:9
}

// Text colors
export const textColorClasses = {
  black: 'text-black',
  white: 'text-white',
  red: 'text-cu-red',
  grey: 'text-gray-600',
}

// Icon sizes
export const iconSizeClasses = {
  4: 'w-4 h-4',
  5: 'w-5 h-5',
  6: 'w-6 h-6',
  8: 'w-8 h-8',
  10: 'w-10 h-10',
  12: 'w-12 h-12',
  16: 'w-16 h-16',
  20: 'w-20 h-20',
  24: 'w-24 h-24',
}
```

### Using Utilities

```tsx
import { utils } from '@carletonuniversity/rds'

function MyComponent({ maxWidth, columns }) {
  return (
    <div className={utils.maxWidthClasses[maxWidth]}>
      <div className={`grid ${utils.gridColumnClasses[columns]}`}>
        {/* content */}
      </div>
    </div>
  )
}
```

---

## Dark Mode

### Configuration

Dark mode uses Tailwind's selector strategy:

```typescript
// tailwind.config.ts
{
  darkMode: 'selector', // Uses .dark class
}
```

### Implementation

```tsx
// Toggle dark mode
document.documentElement.classList.toggle('dark')

// Component with dark mode
function Card({ children }) {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
      {children}
    </div>
  )
}
```

### Dark Mode Classes

```css
/* Light mode (default) */
.card {
  @apply bg-white text-gray-900;
}

/* Dark mode */
.dark .card {
  @apply bg-gray-800 text-white;
}

/* Or using Tailwind dark: prefix */
.card {
  @apply bg-white text-gray-900;
  @apply dark:bg-gray-800 dark:text-white;
}
```

---

## Responsive Design

### Mobile-First Approach

Components use mobile-first responsive design:

```tsx
// Stacks on mobile, grid on larger screens
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>
```

### Breakpoint Usage

| Prefix | Min Width | Use Case |
|--------|-----------|----------|
| (none) | 0px | Mobile (default) |
| `sm:` | 640px | Large phones |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Laptops |
| `xl:` | 1280px | Desktops |
| `2xl:` | 1536px | Large screens |

### Common Patterns

```css
/* Stack to grid */
.card-grid {
  @apply grid grid-cols-1;
  @apply sm:grid-cols-2;
  @apply lg:grid-cols-3;
  @apply xl:grid-cols-4;
}

/* Hide/show */
.mobile-only {
  @apply block md:hidden;
}

.desktop-only {
  @apply hidden md:block;
}

/* Responsive spacing */
.section {
  @apply py-8 md:py-12 lg:py-16;
  @apply px-4 md:px-6 lg:px-8;
}

/* Responsive text */
.heading {
  @apply text-2xl md:text-3xl lg:text-4xl;
}
```

---

## Known Issues

### 1. Large CSS Bundle Size

**Problem:** The compiled CSS includes all Tailwind utilities, even unused ones.

**Current Size:** ~150KB+ (compressed)

**Impact:** Longer initial page loads, especially on slower connections.

**Mitigation:**
- PurgeCSS configured but may miss dynamic classes
- Some classes built from variables can't be purged

### 2. Tailwind Class Conflicts

**Problem:** Tailwind classes can conflict with WordPress/Gutenberg styles.

**Example:**
```css
/* Tailwind reset */
button { background: transparent; }

/* WordPress expects default styling */
```

**Mitigation:**
- Use `important: true` in Tailwind config (not recommended)
- Prefix all Tailwind classes with `tw-` (requires config change)
- Use scoped CSS classes instead

### 3. Dynamic Class Generation

**Problem:** Dynamically generated classes aren't purged.

```tsx
// This class won't be purged correctly
const color = 'red'
return <div className={`bg-${color}-500`} />
```

**Mitigation:**
- Use complete class names in safelist
- Map values to full class strings

### 4. Theme Customization Difficulty

**Problem:** Overriding theme values requires deep Tailwind knowledge.

**Mitigation:**
- Document theme extension patterns
- Consider CSS custom properties for easier overrides

### 5. No CSS Isolation

**Problem:** Styles can leak between components.

**Current State:** Most styles are global.

**Future Plan:** Migrate to CSS Modules or scoped SCSS.

---

## Recommendations for Improvement

### Short Term

1. **Audit unused styles** - Identify and remove dead CSS
2. **Safelist dynamic classes** - Ensure dynamic classes are preserved
3. **Document dark mode** - Improve dark mode documentation
4. **CSS organization** - Better organize component styles

### Medium Term

1. **CSS Modules pilot** - Test CSS Modules on one component
2. **CSS custom properties** - Use CSS variables for theming
3. **Critical CSS extraction** - Split critical and non-critical CSS

### Long Term

1. **SCSS migration** - Full migration to SCSS modules
2. **Design tokens** - Implement design token system
3. **Component-level CSS** - Isolate styles per component

See [MIGRATION.md](./MIGRATION.md) for the Tailwind to SCSS migration plan.

---

## Related Documentation

- [Architecture](./ARCHITECTURE.md) - Build system and structure
- [Migration Plan](./MIGRATION.md) - Tailwind to SCSS roadmap
- [Components](./COMPONENTS.md) - Component catalog
