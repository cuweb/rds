# Migration Plan: Tailwind CSS to SCSS

This document outlines the strategy for migrating RDS from Tailwind CSS to SCSS modules.

## Table of Contents

- [Overview](#overview)
- [Motivation](#motivation)
- [Migration Strategy](#migration-strategy)
- [Phase 1: Foundation](#phase-1-foundation)
- [Phase 2: Design Tokens](#phase-2-design-tokens)
- [Phase 3: Component Migration](#phase-3-component-migration)
- [Phase 4: Cleanup](#phase-4-cleanup)
- [Technical Details](#technical-details)
- [Component Migration Guide](#component-migration-guide)
- [Testing Strategy](#testing-strategy)
- [Rollback Plan](#rollback-plan)

---

## Overview

### Current State

- **Tailwind CSS 3.4** with custom theme preset (`rds-tailwind-theme`)
- **51 components** using Tailwind utility classes
- **~150KB+ CSS** bundle (uncompressed)
- Tight coupling between styling and `rds-tailwind-theme` package

### Target State

- **SCSS modules** with CSS custom properties
- **Isolated component styles** that don't leak
- **Smaller CSS bundle** through better tree-shaking
- **Easier customization** without Tailwind knowledge
- **Better Gutenberg compatibility**

### Timeline Estimate

| Phase | Duration | Components |
|-------|----------|------------|
| Foundation | 2-3 weeks | Setup, tokens |
| Design Tokens | 1-2 weeks | Variables, mixins |
| Component Migration | 8-12 weeks | 51 components |
| Cleanup | 1-2 weeks | Remove Tailwind |
| **Total** | **12-19 weeks** | |

---

## Motivation

### Why Move Away from Tailwind?

#### 1. Bundle Size
```
Current:  ~150KB+ (includes many unused utilities)
Target:   ~50-80KB (only used styles)
```

#### 2. WordPress/Gutenberg Conflicts
Tailwind's reset and utilities often conflict with WordPress core styles:
- Button styling overrides
- Form element conflicts
- Typography clashes

#### 3. Customization Difficulty
Currently requires:
- Understanding Tailwind config
- Modifying `rds-tailwind-theme` package
- Rebuilding entire library

With SCSS:
- Override CSS custom properties
- No build step required
- Standard CSS knowledge

#### 4. Style Isolation
Current issues:
- Global styles can leak between components
- Hard to scope styles in WordPress

With CSS Modules:
- Automatic class name scoping
- No style leakage
- Better encapsulation

#### 5. Developer Experience
- Standard SCSS is more widely known than Tailwind
- Better IDE support and autocomplete
- Easier debugging (readable class names)

---

## Migration Strategy

### Approach: Gradual Migration

**NOT** a big-bang rewrite. Instead:

1. Add SCSS infrastructure alongside Tailwind
2. Migrate components one at a time
3. Maintain backward compatibility
4. Remove Tailwind only after all components migrated

### Migration Order

Prioritize by:
1. **Complexity** - Simple components first
2. **Dependencies** - Components used by others first
3. **Gutenberg usage** - High-usage blocks prioritized

```
Phase 1: Icon, Badge, Alert, Avatar
Phase 2: Button, ButtonGroup
Phase 3: Card (and all subcomponents)
Phase 4: Listing (and all subcomponents)
Phase 5: Form components
Phase 6: Nav components
Phase 7: Layout components
Phase 8: Remaining components
```

---

## Phase 1: Foundation

### 1.1 Install Dependencies

```bash
npm install -D sass sass-loader
```

### 1.2 Configure Vite for SCSS

```typescript
// vite.config.ts
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./lib/styles/abstracts/_index.scss";`,
      },
    },
    modules: {
      localsConvention: 'camelCase',
    },
  },
})
```

### 1.3 Create SCSS Directory Structure

```
lib/styles/
├── abstracts/
│   ├── _index.scss           # Forward all abstracts
│   ├── _variables.scss       # Design tokens
│   ├── _mixins.scss          # Reusable mixins
│   ├── _functions.scss       # SCSS functions
│   └── _breakpoints.scss     # Responsive breakpoints
├── base/
│   ├── _index.scss
│   ├── _reset.scss           # CSS reset
│   ├── _typography.scss      # Base typography
│   └── _utilities.scss       # Utility classes
├── components/
│   └── (component SCSS files)
└── main.scss                 # Main entry point
```

### 1.4 Create Initial Abstract Files

```scss
// abstracts/_variables.scss

// Colors
$cu-red: #bf112b;
$cu-red-dark: #9a0e23;
$cu-black: #262626;
$cu-white: #ffffff;

// Gray scale
$gray-50: #f9fafb;
$gray-100: #f3f4f6;
$gray-200: #e5e7eb;
$gray-300: #d1d5db;
$gray-400: #9ca3af;
$gray-500: #6b7280;
$gray-600: #4b5563;
$gray-700: #374151;
$gray-800: #1f2937;
$gray-900: #111827;

// Semantic colors
$color-success: #10b981;
$color-warning: #f59e0b;
$color-error: #ef4444;
$color-info: #3b82f6;

// Spacing
$spacing-unit: 0.25rem; // 4px
$spacing-1: $spacing-unit * 1;   // 4px
$spacing-2: $spacing-unit * 2;   // 8px
$spacing-3: $spacing-unit * 3;   // 12px
$spacing-4: $spacing-unit * 4;   // 16px
$spacing-5: $spacing-unit * 5;   // 20px
$spacing-6: $spacing-unit * 6;   // 24px
$spacing-8: $spacing-unit * 8;   // 32px
$spacing-10: $spacing-unit * 10; // 40px
$spacing-12: $spacing-unit * 12; // 48px
$spacing-16: $spacing-unit * 16; // 64px

// Typography
$font-sans: 'Open Sans', system-ui, sans-serif;
$font-serif: 'Georgia', serif;
$font-mono: 'Fira Code', monospace;

$text-xs: 0.75rem;
$text-sm: 0.875rem;
$text-base: 1rem;
$text-lg: 1.125rem;
$text-xl: 1.25rem;
$text-2xl: 1.5rem;
$text-3xl: 1.875rem;
$text-4xl: 2.25rem;
$text-5xl: 3rem;

// Border radius
$radius-sm: 0.125rem;
$radius-md: 0.375rem;
$radius-lg: 0.5rem;
$radius-xl: 0.75rem;
$radius-full: 9999px;

// Shadows
$shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
$shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
$shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);

// Transitions
$transition-fast: 150ms;
$transition-base: 200ms;
$transition-slow: 300ms;
```

```scss
// abstracts/_breakpoints.scss

$breakpoints: (
  'sm': 640px,
  'md': 768px,
  'lg': 1024px,
  'xl': 1280px,
  '2xl': 1536px,
);

@mixin respond-to($breakpoint) {
  @if map-has-key($breakpoints, $breakpoint) {
    @media (min-width: map-get($breakpoints, $breakpoint)) {
      @content;
    }
  } @else {
    @warn "Breakpoint '#{$breakpoint}' not found.";
  }
}

// Usage: @include respond-to('md') { ... }
```

```scss
// abstracts/_mixins.scss

// Flex center
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

// Visually hidden (accessible)
@mixin visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

// Focus ring
@mixin focus-ring($color: $cu-red) {
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba($color, 0.3);
  }
}

// Button base
@mixin button-base {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: $spacing-2 $spacing-4;
  font-weight: 500;
  font-size: $text-sm;
  line-height: 1.5;
  border-radius: $radius-md;
  border: none;
  cursor: pointer;
  transition: all $transition-base ease-in-out;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

// Truncate text
@mixin truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

// Aspect ratio
@mixin aspect-ratio($width, $height) {
  aspect-ratio: #{$width} / #{$height};
}
```

---

## Phase 2: Design Tokens

### 2.1 CSS Custom Properties

Create CSS custom properties for runtime theming:

```scss
// base/_root.scss

:root {
  // Colors
  --rds-color-primary: #{$cu-red};
  --rds-color-primary-dark: #{$cu-red-dark};
  --rds-color-black: #{$cu-black};
  --rds-color-white: #{$cu-white};

  // Gray scale
  --rds-gray-50: #{$gray-50};
  --rds-gray-100: #{$gray-100};
  --rds-gray-200: #{$gray-200};
  --rds-gray-300: #{$gray-300};
  --rds-gray-400: #{$gray-400};
  --rds-gray-500: #{$gray-500};
  --rds-gray-600: #{$gray-600};
  --rds-gray-700: #{$gray-700};
  --rds-gray-800: #{$gray-800};
  --rds-gray-900: #{$gray-900};

  // Semantic
  --rds-color-success: #{$color-success};
  --rds-color-warning: #{$color-warning};
  --rds-color-error: #{$color-error};
  --rds-color-info: #{$color-info};

  // Typography
  --rds-font-sans: #{$font-sans};
  --rds-font-serif: #{$font-serif};
  --rds-font-mono: #{$font-mono};

  // Spacing
  --rds-spacing-1: #{$spacing-1};
  --rds-spacing-2: #{$spacing-2};
  --rds-spacing-3: #{$spacing-3};
  --rds-spacing-4: #{$spacing-4};
  --rds-spacing-6: #{$spacing-6};
  --rds-spacing-8: #{$spacing-8};

  // Border radius
  --rds-radius-sm: #{$radius-sm};
  --rds-radius-md: #{$radius-md};
  --rds-radius-lg: #{$radius-lg};

  // Shadows
  --rds-shadow-sm: #{$shadow-sm};
  --rds-shadow-md: #{$shadow-md};
  --rds-shadow-lg: #{$shadow-lg};
}

// Dark mode
.dark {
  --rds-color-black: #{$cu-white};
  --rds-color-white: #{$cu-black};
  --rds-gray-50: #{$gray-900};
  --rds-gray-100: #{$gray-800};
  --rds-gray-200: #{$gray-700};
  // ... invert other colors
}
```

### 2.2 Theme Customization

Users can override with CSS:

```css
/* Custom theme */
:root {
  --rds-color-primary: #0066cc;
  --rds-color-primary-dark: #004499;
  --rds-font-sans: 'Roboto', sans-serif;
}
```

---

## Phase 3: Component Migration

### Migration Checklist per Component

- [ ] Create `ComponentName.module.scss`
- [ ] Define component styles using variables and mixins
- [ ] Update component to use CSS module classes
- [ ] Add data-testid attributes for testing
- [ ] Update Storybook stories
- [ ] Test all variants
- [ ] Test responsive behavior
- [ ] Test dark mode
- [ ] Update component documentation
- [ ] Visual regression test

### Example: Button Migration

**Before (Tailwind):**

```tsx
// Button.tsx
export function Button({ color = 'red', isSmall, children }) {
  const colorClasses = {
    red: 'bg-cu-red text-white hover:bg-cu-red-dark',
    grey: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  }

  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center',
        'px-4 py-2 rounded-md font-medium text-sm',
        'transition-colors duration-200',
        colorClasses[color],
        isSmall && 'px-3 py-1.5 text-xs'
      )}
    >
      {children}
    </button>
  )
}
```

**After (SCSS Module):**

```scss
// Button.module.scss
@use '../../styles/abstracts' as *;

.button {
  @include button-base;
  @include focus-ring;

  &--red {
    background-color: var(--rds-color-primary);
    color: var(--rds-color-white);

    &:hover:not(:disabled) {
      background-color: var(--rds-color-primary-dark);
    }
  }

  &--grey {
    background-color: var(--rds-gray-200);
    color: var(--rds-gray-800);

    &:hover:not(:disabled) {
      background-color: var(--rds-gray-300);
    }
  }

  &--darkGrey {
    background-color: var(--rds-gray-600);
    color: var(--rds-color-white);

    &:hover:not(:disabled) {
      background-color: var(--rds-gray-700);
    }
  }

  &--black {
    background-color: var(--rds-color-black);
    color: var(--rds-color-white);

    &:hover:not(:disabled) {
      background-color: var(--rds-gray-900);
    }
  }

  &--white {
    background-color: var(--rds-color-white);
    color: var(--rds-gray-900);
    border: 1px solid var(--rds-gray-300);

    &:hover:not(:disabled) {
      background-color: var(--rds-gray-50);
    }
  }

  &--small {
    padding: $spacing-1 $spacing-3;
    font-size: $text-xs;
  }

  &--full {
    width: 100%;
  }
}
```

```tsx
// Button.tsx
import styles from './Button.module.scss'
import clsx from 'clsx'

export interface ButtonProps {
  color?: 'red' | 'grey' | 'dark-grey' | 'black' | 'white'
  isSmall?: boolean
  isFull?: boolean
  isDisabled?: boolean
  children: React.ReactNode
}

export function Button({
  color = 'red',
  isSmall = false,
  isFull = false,
  isDisabled = false,
  children,
  ...props
}: ButtonProps) {
  // Map color prop to style key
  const colorKey = color === 'dark-grey' ? 'darkGrey' : color

  return (
    <button
      className={clsx(
        styles.button,
        styles[`button--${colorKey}`],
        isSmall && styles['button--small'],
        isFull && styles['button--full']
      )}
      disabled={isDisabled}
      data-testid="rds-button"
      {...props}
    >
      {children}
    </button>
  )
}
```

---

## Phase 4: Cleanup

### 4.1 Remove Tailwind Dependencies

```bash
npm uninstall tailwindcss @tailwindcss/forms @tailwindcss/typography
npm uninstall @tailwindcss/aspect-ratio @tailwindcss/container-queries
npm uninstall rds-tailwind-theme postcss-nesting
```

### 4.2 Update Configuration

Remove Tailwind from:
- `vite.config.ts`
- `postcss.config.js`
- Delete `tailwind.config.ts`

### 4.3 Update Build Process

```typescript
// vite.config.ts
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./lib/styles/abstracts" as *;`,
      },
    },
  },
})
```

### 4.4 Update Documentation

- Remove Tailwind references
- Update component documentation
- Update Gutenberg integration guide

---

## Technical Details

### CSS Modules Configuration

```typescript
// vite.config.ts
export default defineConfig({
  css: {
    modules: {
      // Generate readable class names in dev
      generateScopedName: process.env.NODE_ENV === 'production'
        ? '[hash:base64:8]'
        : '[name]__[local]___[hash:base64:5]',
      localsConvention: 'camelCase',
    },
  },
})
```

### SCSS Import Pattern

```scss
// In component SCSS files
@use '../../styles/abstracts' as *;

.component {
  // Use variables directly
  color: $cu-red;

  // Or CSS custom properties for theming
  color: var(--rds-color-primary);

  // Use mixins
  @include respond-to('md') {
    // Tablet styles
  }
}
```

### TypeScript Support

```typescript
// src/styles.d.ts
declare module '*.module.scss' {
  const classes: { [key: string]: string }
  export default classes
}
```

---

## Component Migration Guide

### Order of Migration

```
1. Foundation components (no dependencies)
   - Icon
   - Badge
   - Avatar
   - Alert

2. Interactive components
   - Button
   - ButtonGroup

3. Composite components
   - Card (+ all subcomponents)
   - Listing (+ all subcomponents)

4. Form components
   - Input
   - TextArea
   - Select
   - Checkbox
   - Radio
   - DateTime
   - FileUpload
   - Form wrapper

5. Navigation
   - Nav (+ all subcomponents)

6. Layout components
   - Section
   - Column
   - Article
   - Aside
   - Main
   - Body

7. Complex components
   - Splash
   - Modal
   - Dialog
   - Toast

8. Remaining components
   - All others
```

### Per-Component Steps

1. **Create SCSS module**
   ```
   ComponentName/
   ├── ComponentName.tsx
   ├── ComponentName.module.scss  ← Add this
   └── ComponentName.stories.tsx
   ```

2. **Write styles using design tokens**

3. **Update component imports**
   ```tsx
   import styles from './ComponentName.module.scss'
   ```

4. **Replace Tailwind classes with module classes**

5. **Test thoroughly**

6. **Update Storybook**

7. **Document any breaking changes**

---

## Testing Strategy

### Visual Regression Testing

Before migration:
1. Capture screenshots of all component states
2. Save as baseline

After migration:
1. Capture new screenshots
2. Compare with baseline
3. Fix any visual differences

### Automated Tests

```typescript
// Ensure styles are applied
it('applies correct color class', () => {
  cy.mount(<Button color="red">Click</Button>)
  cy.get('[data-testid="rds-button"]')
    .should('have.css', 'background-color', 'rgb(191, 17, 43)') // $cu-red
})
```

### Manual Testing Checklist

- [ ] All color variants render correctly
- [ ] Hover states work
- [ ] Focus states work
- [ ] Disabled states work
- [ ] Responsive behavior matches
- [ ] Dark mode works
- [ ] No style leakage to other components
- [ ] Works in Gutenberg editor
- [ ] Works on WordPress frontend

---

## Rollback Plan

### If Migration Fails

1. **Git branches**: Each phase in separate branch
2. **Feature flags**: Can disable SCSS per component
3. **Parallel styles**: Keep Tailwind until fully migrated
4. **Semantic versioning**: Major version for breaking changes

### Rollback Steps

```bash
# Revert to last working state
git checkout main
git branch -D feature/scss-migration

# Or selective revert
git revert <commit-hash>
```

---

## Success Criteria

### Phase 1 Complete When:
- [ ] SCSS infrastructure in place
- [ ] Variables and mixins defined
- [ ] Build process works

### Phase 2 Complete When:
- [ ] All design tokens as CSS custom properties
- [ ] Theme customization documented

### Phase 3 Complete When:
- [ ] All 51 components migrated
- [ ] All tests passing
- [ ] Visual regression clean

### Phase 4 Complete When:
- [ ] Tailwind removed
- [ ] Bundle size reduced
- [ ] Documentation updated
- [ ] Gutenberg compatibility verified

---

## Related Documentation

- [Architecture](./ARCHITECTURE.md) - Current architecture
- [Styling](./STYLING.md) - Current Tailwind setup
- [Components](./COMPONENTS.md) - Component catalog
- [Gutenberg](./GUTENBERG.md) - WordPress integration
