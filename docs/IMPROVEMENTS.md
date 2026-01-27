# Identified Issues and Improvements

This document catalogs issues, inconsistencies, and improvement opportunities identified during the documentation review.

## Table of Contents

- [High Priority](#high-priority)
- [Medium Priority](#medium-priority)
- [Low Priority](#low-priority)
- [Gutenberg-Specific Issues](#gutenberg-specific-issues)
- [Technical Debt](#technical-debt)
- [Documentation Gaps](#documentation-gaps)

---

## High Priority

### 1. Large CSS Bundle Size

**Issue:** The compiled CSS is ~150KB+ and includes many unused Tailwind utilities.

**Impact:** Slower page loads, especially on mobile.

**Recommendation:**

- Implement SCSS migration (see [MIGRATION.md](./MIGRATION.md))
- Use CSS-in-JS or CSS Modules for better tree-shaking
- Extract critical CSS for above-the-fold content

---

### 2. No Component-Level Exports

**Issue:** All components are bundled together in `rds.es.js`. Importing one component imports all.

**Current:**

```javascript
// Imports entire library
import { Button } from '@carletonuniversity/rds'
```

**Recommendation:**

```javascript
// Ideal: Import only what you need
import { Button } from '@carletonuniversity/rds/components/Button'
```

**Action Items:**

- [ ] Configure Vite/Rollup for per-component builds
- [ ] Update package.json exports map
- [ ] Test tree-shaking with different bundlers

---

### 3. Tailwind Class Conflicts in WordPress

**Issue:** Tailwind's base styles conflict with WordPress core styles, causing:

- Button styling inconsistencies
- Form element conflicts
- Typography issues in Gutenberg editor

**Recommendation:**

- Use CSS scoping with `.rds-scope` wrapper
- Migrate to SCSS modules for better isolation
- Document required CSS reset for WordPress

---

### 4. Missing TypeScript Strict Types for Some Components

**Issue:** Some components have loose typing:

- `any` types in event handlers
- Missing return types
- Optional props without explicit undefined

**Files to Review:**

- Form components
- Card subcomponents
- Navigation components

**Recommendation:**

- Enable `noImplicitAny` verification
- Add explicit return types to all components
- Use discriminated unions for variant props

---

## Medium Priority

### 5. Inconsistent Prop Naming

**Issue:** Props naming varies across components:

| Component | Prop         | Alternative  |
| --------- | ------------ | ------------ |
| Button    | `isDisabled` | `disabled`   |
| Input     | `disabled`   | `isDisabled` |
| Card      | `hasImage`   | `showImage`  |

**Recommendation:**

- Standardize on `is*` for boolean states
- Standardize on `has*` for feature toggles
- Document prop naming conventions

---

### 6. No Dark Mode Documentation

**Issue:** Dark mode is supported via Tailwind's `selector` strategy but:

- No documentation on how to enable
- No Storybook stories showing dark variants
- Some components may not have dark mode styles

**Recommendation:**

- Add dark mode toggle to Storybook
- Create dark mode stories for all components
- Document dark mode implementation

---

### 7. Missing Error Boundaries

**Issue:** No error boundary components for graceful degradation.

**Recommendation:**

- Create `ErrorBoundary` component
- Add error states to data-fetching components
- Document error handling patterns

---

### 8. Accessibility Gaps

**Issues Identified:**

- Some interactive elements missing `aria-*` attributes
- Focus management in modals/dialogs needs review
- Color contrast not verified for all variants

**Recommendation:**

- Run full a11y audit with axe-core
- Add keyboard navigation tests
- Verify WCAG 2.1 AA compliance

---

### 9. No Loading/Skeleton Strategy Documentation

**Issue:** 21 loader components exist but:

- No documentation on when to use which
- No loading state patterns documented
- Inconsistent naming (`Loader` vs `Skeleton`)

**Recommendation:**

- Create loading state documentation
- Standardize naming convention
- Show loading state patterns in Storybook

---

### 10. Large Number of Dependencies

**Issue:** Many runtime dependencies increase bundle size:

- `formik` + `yup` for forms
- `react-select` for dropdowns
- `react-player` for video
- `@react-google-maps/api` for maps

**Recommendation:**

- Audit dependency usage
- Consider lighter alternatives
- Make heavy dependencies optional/lazy-loaded

---

## Low Priority

### 11. Storybook Organization

**Issue:** Stories could be better organized:

- No consistent story categories
- Some components lack comprehensive stories
- Missing interaction tests

**Recommendation:**

- Reorganize into clear categories
- Add interaction tests to critical components
- Create "Examples" section for complex use cases

---

### 12. Test Coverage Gaps

**Issue:** Not all components have Cypress tests.

**Recommendation:**

- Set coverage targets per component type
- Add tests for untested components
- Set up coverage reporting in CI

---

### 13. Missing PropTypes for Runtime Validation

**Issue:** TypeScript provides compile-time checks but no runtime validation for JavaScript consumers.

**Recommendation:**

- Consider adding PropTypes for critical components
- Or document TypeScript requirement clearly

---

### 14. No Changelog Automation

**Issue:** Changelog requires manual updates.

**Recommendation:**

- Implement conventional-changelog
- Auto-generate changelog from commits
- Add changelog CI step

---

### 15. Asset Management

**Issue:** Icons and images are stored in `public/` but:

- Large icon list impacts bundle
- No lazy loading for images
- Background images not documented

**Recommendation:**

- Lazy load icon list
- Document available assets
- Consider SVG sprite for icons

---

## Gutenberg-Specific Issues

### G1. No Direct Gutenberg Integration

**Issue:** RDS doesn't include WordPress-specific code. Blocks are in separate repository.

**Impact:**

- Duplicated effort in block plugins
- Inconsistent implementation across 70+ blocks
- Hard to maintain compatibility

**Recommendation:**

- Create `@carletonuniversity/rds-blocks` package
- Provide block wrapper components
- Share block registration patterns

---

### G2. WordPress Style Conflicts

**Issue:** Tailwind reset conflicts with WordPress styles.

**Specific Conflicts:**

```css
/* Tailwind resets buttons */
button {
  background: transparent;
}

/* WordPress expects */
.button {
  /* WordPress styles */
}

/* Gutenberg editor */
.block-editor {
  /* May override RDS */
}
```

**Recommendation:**

- Document CSS reset requirements
- Provide WordPress-specific stylesheet
- Use higher specificity for RDS styles

---

### G3. React Version Mismatch

**Issue:** RDS uses React 19, WordPress uses React 18.

**Impact:** Potential compatibility issues in block editor.

**Recommendation:**

- Test with WordPress React version
- Document React version requirements
- Consider React 18 compatibility mode

---

### G4. Block Attribute Type Mismatches

**Issue:** Component props don't always align with WordPress block attributes.

**Example:**

```typescript
// RDS Component
interface CardProps {
  image: { src: string; alt: string }
}

// Block Attribute
{
  imageId: { type: 'number' },
  imageUrl: { type: 'string' },
}
```

**Recommendation:**

- Create prop-to-attribute mapping utilities
- Document common attribute patterns
- Provide TypeScript types for block attributes

---

### G5. Server-Side Rendering Gaps

**Issue:** Some components may not work with WordPress PHP rendering.

**Components to Review:**

- Components using browser APIs
- Components with client-side state
- Interactive components (forms, modals)

**Recommendation:**

- Document SSR compatibility per component
- Provide PHP render alternatives
- Mark client-only components clearly

---

## Technical Debt

### T1. Legacy CSS Files

**Files:**

- `public/index.css` (151KB) - appears to be precompiled CSS
- Multiple `styles.css` files with mixed approaches

**Recommendation:**

- Audit CSS file usage
- Remove unused CSS files
- Consolidate CSS architecture

---

### T2. Mixed Export Patterns

**Issue:** Some files use default exports, others named exports.

**Recommendation:**

- Standardize on named exports
- Update barrel exports in `main.ts`
- Document export conventions

---

### T3. Utility Class Duplication

**Issue:** `propClasses.tsx` duplicates Tailwind class definitions.

**Recommendation:**

- Use CSS custom properties instead
- Remove after SCSS migration
- Or generate from Tailwind config

---

### T4. No Build Caching

**Issue:** Full rebuild on every change.

**Recommendation:**

- Enable Vite caching
- Consider incremental TypeScript builds
- Add Storybook build caching

---

### T5. Missing Code Splitting

**Issue:** Heavy components loaded upfront.

**Components to Split:**

- Form components (Formik)
- Map components (Google Maps)
- Video components (react-player)

**Recommendation:**

- Implement React.lazy for heavy components
- Document dynamic import patterns
- Test loading states

---

## Documentation Gaps

### D1. Missing API Reference

**Issue:** No auto-generated API documentation from TypeScript.

**Recommendation:**

- Set up TypeDoc or similar
- Generate prop tables automatically
- Keep API docs in sync

---

### D2. No Migration Guide from Older Versions

**Issue:** No upgrade path documentation.

**Recommendation:**

- Document breaking changes per version
- Provide codemods for major changes
- Create upgrade guide

---

### D3. Missing Troubleshooting Guide

**Recommendation:** Create common issues and solutions doc covering:

- Installation problems
- Style conflicts
- TypeScript errors
- Build issues

---

### D4. No Performance Guide

**Recommendation:** Document:

- Bundle size optimization
- Lazy loading patterns
- Image optimization
- Component memoization

---

## Action Plan

### Immediate (Next Sprint)

1. [ ] Document dark mode usage
2. [ ] Add TypeScript strict checks review
3. [ ] Create loading state documentation

### Short Term (1-2 Months)

1. [ ] Implement per-component exports
2. [ ] Run accessibility audit
3. [ ] Standardize prop naming

### Medium Term (3-6 Months)

1. [ ] Begin SCSS migration
2. [ ] Create Gutenberg integration package
3. [ ] Add comprehensive tests

### Long Term (6+ Months)

1. [ ] Complete SCSS migration
2. [ ] Full Gutenberg compatibility
3. [ ] Performance optimization

---

## Tracking

Use issue labels to track:

- `priority:high` / `priority:medium` / `priority:low`
- `type:bug` / `type:enhancement` / `type:docs`
- `component:*` for component-specific issues
- `gutenberg` for WordPress-specific issues

---

## Related Documentation

- [Migration Plan](./MIGRATION.md) - Tailwind to SCSS migration
- [Gutenberg Guide](./GUTENBERG.md) - WordPress integration
- [Testing](./TESTING.md) - Testing requirements
- [Contributing](./CONTRIBUTING.md) - How to contribute fixes
