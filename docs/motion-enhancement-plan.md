# Motion & Interactivity Enhancement Plan — Raven Design System

> **Status:** Draft for team review. No code changes yet.
> **Branch:** `add/animation-station`
> **Compliance target:** WCAG 2.1 AA (floor) + AODA. AAA where cheap to hit.
> **Last updated:** 2026-05-11

This plan proposes a cohesive motion-and-interactivity layer for RDS. It is an _enhancement_ pass, not a redesign: existing aesthetics are preserved and no component visual identity changes. Every animation must degrade gracefully under `prefers-reduced-motion: reduce`, must not trap focus, and must use GPU-friendly properties (`transform` / `opacity`).

---

## Table of Contents

1. [Goals & Guiding Principles](#1-goals--guiding-principles)
2. [Current-State Assessment](#2-current-state-assessment)
3. [Cross-Cutting Infrastructure (lands first)](#3-cross-cutting-infrastructure-lands-first)
4. [Component Inventory](#4-component-inventory)
5. [Per-Component Enhancement Plan](#5-per-component-enhancement-plan)
6. [New Component Candidates](#6-new-component-candidates)
7. [Testing & Verification](#7-testing--verification)
8. [Phased Roadmap](#8-phased-roadmap)
9. [Open Questions for the Team](#9-open-questions-for-the-team)

---

## 1. Goals & Guiding Principles

### What we want

- **Subtle, purposeful motion.** Motion communicates state, hierarchy, and relationship. It is never decoration for its own sake.
- **A unified motion vocabulary.** Durations, easings, and patterns are tokenised so the whole system feels coherent.
- **Accessibility-first by default.** Every animation has a reduced-motion answer. No motion blocks interaction or focus.
- **Performance-first.** Animate `transform` and `opacity` only. No layout thrash. Hooks tree-shake and add < 1 KB gzipped per use.
- **No new heavy dependencies.** No Framer Motion, no GSAP. CSS + tiny custom hooks only. (RDS already has bundle-size concerns flagged in `docs/IMPROVEMENTS.md`.)

### Non-goals

- Wholesale visual redesign.
- Decorative parallax, hover-tilt, "wow" effects.
- Auto-playing motion without user control.
- Motion that runs longer than 5 seconds without a pause control (WCAG 2.2.2 _Pause, Stop, Hide_).
- Motion that delivers information by movement alone (WCAG 1.4.13 / 2.3.x).

### Hard rules (apply universally)

| #   | Rule                                                                                                                | Why                         |
| --- | ------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| H1  | Every `transition-*` / `animate-*` class is paired with a `motion-reduce:` override or wrapped in `motion-safe:`    | WCAG 2.3.3 / user safety    |
| H2  | Any JS-driven animation reads `prefers-reduced-motion` via `useReducedMotion` and skips/instant-completes when true | WCAG 2.3.3                  |
| H3  | Animate `transform` / `opacity` only, never `top`/`left`/`width`/`height`                                           | Performance, jank avoidance |
| H4  | Durations 150–500 ms, except progress fills (≤ 1500 ms) and skeletons (≥ 1500 ms loop)                              | Perceptual sweet spot       |
| H5  | Focus is never gated on animation completion. Focus moves immediately; motion is decorative on top.                 | WCAG 2.4.7                  |
| H6  | Auto-playing motion ≥ 5 s requires a user-controllable pause                                                        | WCAG 2.2.2                  |
| H7  | No parallax, no scroll-jacking, no carousel auto-advance without explicit opt-in + pause                            | WCAG, AODA                  |
| H8  | Storybook story per animated state (idle, hover, focus, active, open/closed, reduced-motion)                        | Verifiability               |

---

## 2. Current-State Assessment

### 2.1 Motion already in the codebase

| Component                              | Motion present                                     | File:line                                                                   | Notes                                                            |
| -------------------------------------- | -------------------------------------------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Card                                   | hover scale (1.02) + shadow                        | `lib/components/Card/Card.tsx:45`                                           | `duration-300 ease-in`. No `motion-reduce`                       |
| Toast                                  | slide-in + fade, JS removal after 200 ms           | `lib/components/Toast/Toast.tsx:48,57`                                      | Hard-coded timeout couples JS to CSS                             |
| Nav                                    | header hide-on-scroll                              | `lib/components/Nav/Nav.tsx:28`, `scrollingNav.ts:12-32`                    | Unthrottled scroll listener; no `motion-reduce`                  |
| Nav                                    | item color transitions, arrow rotation             | `lib/components/Nav/Nav.Styles.ts:8-13`, `priority-plus.css:17,60`          | No `motion-reduce`                                               |
| Description                            | accordion icon rotation (`rotate-0` ↔ `rotate-90`) | `lib/components/Description/DescriptionAccordion.tsx:27`, `script.ts`       | Content shows/hides via `hidden` attribute — no height animation |
| FilterPanel                            | dropdown arrow rotation + color                    | `lib/components/FilterPanel/FilterPanelTop.tsx:34`, `dropdown.ts:66,88,141` | No `motion-reduce`                                               |
| ProgressBar                            | width fill animation                               | `lib/components/ProgressBar/ProgressBar.tsx:31-32`                          | `transition-all duration-1000` — animates `width` (H3 violation) |
| ImageSlider                            | carousel slide (inline `transform 0.5s`)           | `lib/components/ImageSlider/script.ts:78-113`                               | JS-set transitions; 50 ms timeouts to sequence phases            |
| ImageSlider item                       | 5 s background-image transition                    | `lib/components/ImageSlider/ImageSliderItem.tsx:31`                         | `duration-[5000]`. Borderline H6                                 |
| Loaders (21+)                          | `animate-pulse` skeletons                          | `lib/components/Loaders/**`                                                 | None opt into `motion-reduce` (Tailwind does NOT auto-disable)   |
| PageLoader                             | `animate-spin` + slowed-spin under reduced-motion  | `lib/components/Loaders/PageLoader/PageLoader.tsx:5`                        | **Only** component currently honouring reduced-motion            |
| TopNavLoader                           | `animate-spin`                                     | `lib/components/Loaders/TopNavLoader/TopNavLoader.tsx:6`                    | No `motion-reduce`                                               |
| Splash / FullBanner / WideBanner video | `autoPlay muted loop playsInline`                  | `lib/hooks/useVideoBanner.tsx:39-41`                                        | Loops indefinitely. No pause control. **H6 risk.**               |
| Modal                                  | none (snap `block`/`hidden`)                       | `lib/components/Modal/Modal.tsx:129`                                        | Open/close is instant — felt jarring per typical UX              |
| Dialog                                 | none (uses native `<dialog>` `showModal()`)        | `lib/components/Dialog/Dialog.tsx:21`                                       | Same — no entrance/exit                                          |

### 2.2 What's missing

- **No motion design tokens.** Durations and easings are hard-coded (`duration-200`, `duration-300`, `duration-1000`, `duration-[5000]`, inline `0.5s`).
- **No `useReducedMotion` hook.** Only one component (PageLoader) uses a `motion-reduce:` Tailwind variant.
- **No IntersectionObserver-based scroll-reveal utility.** Priority Plus Nav uses `IntersectionObserver` internally but there's no shared hook.
- **No motion stories in Storybook.** 113 stories exist; zero exercise animation states or reduced-motion.
- **No Cypress tests around motion.** `cypress/e2e/Alert.cy.js` is the only e2e file; no motion-related assertions.
- **No documented motion principles** for contributors.

### 2.3 Accessibility risks already in code

| Severity   | Risk                                                             | Where                                                | Mitigation in this plan                                                      |
| ---------- | ---------------------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------- |
| **High**   | Auto-playing looped video with no pause control                  | `useVideoBanner.tsx`, Splash, FullBanner, WideBanner | Add pause button + respect `prefers-reduced-motion` (Phase 1 + 2)            |
| **High**   | All `animate-pulse` skeletons run during reduced-motion sessions | All Loaders                                          | Wrap with `motion-safe:` (Phase 1)                                           |
| **Medium** | Unthrottled scroll listener drives nav hide/show                 | `scrollingNav.ts:12`                                 | Throttle via `requestAnimationFrame`; add `motion-reduce:` guard (Phase 2)   |
| **Medium** | Card hover scale not disabled under reduced-motion               | `Card.tsx:45`                                        | Add `motion-safe:` (Phase 1)                                                 |
| **Medium** | Toast 200 ms JS timeout is coupled to CSS class                  | `Toast.tsx:48-50`                                    | Use `transitionend` event or derive from token (Phase 2)                     |
| **Low**    | ProgressBar animates `width` (not transform)                     | `ProgressBar.tsx:31-32`                              | Switch to `transform: scaleX()` with `transform-origin: left` (Phase 2)      |
| **Low**    | ImageSlider inline-style transitions are brittle                 | `ImageSlider/script.ts:78-113`                       | Move to data-attribute + CSS class transitions (Phase 3)                     |
| **Low**    | Accordion shows/hides instantly via `hidden` attr                | `DescriptionAccordion.tsx`, `script.ts`              | Use `details`-style height animation OR a 200 ms opacity/translate (Phase 2) |

---

## 3. Cross-Cutting Infrastructure (lands first)

These foundational pieces are prerequisites for the per-component work. Build them in order; later components consume them.

### 3.1 Motion design tokens

Add a `motion` section to the Tailwind theme (`rds-tailwind-theme` if appropriate; otherwise extend locally in `tailwind.config.ts`).

**Proposed token set:**

```ts
// Durations (ms)
duration: {
  'cu-instant': '100ms',
  'cu-fast':    '150ms',
  'cu-base':    '250ms',
  'cu-slow':    '400ms',
  'cu-slower':  '600ms',
  // Reserved for skeletons & progress only:
  'cu-fill':    '1200ms',
  'cu-loop':    '1800ms',
}

// Easings (matched to perceptual roles)
transitionTimingFunction: {
  'cu-standard': 'cubic-bezier(0.2, 0, 0, 1)',   // most UI motion
  'cu-emphasized': 'cubic-bezier(0.3, 0, 0, 1)', // entrance
  'cu-accelerate': 'cubic-bezier(0.3, 0, 1, 1)', // exit
}
```

**Effort:** SMALL (1–2 h). **Decision needed:** add to `rds-tailwind-theme` package or extend in `tailwind.config.ts` locally (see Open Question OQ1).

### 3.2 `useReducedMotion` hook

A tiny (~25 LOC) hook used by every component that animates via JavaScript.

**Location:** `lib/hooks/useReducedMotion.ts`
**Contract:**

```ts
// Returns true if user prefers reduced motion.
// Updates if the OS-level preference changes mid-session.
export const useReducedMotion = (): boolean
```

Implementation: `matchMedia('(prefers-reduced-motion: reduce)')` + `useState` + `addEventListener('change')`. SSR-safe (returns `false` if `window` unavailable).

**Effort:** SMALL (1 h, including stories + a Cypress unit test).

### 3.3 `useScrollReveal` hook (IntersectionObserver-based)

Used by Card grids, Listing, Timeline, ImageGrid, content blocks for entrance animations on scroll-into-view.

**Location:** `lib/hooks/useScrollReveal.ts`
**Contract:**

```ts
useScrollReveal<T extends Element = HTMLDivElement>(
  options?: {
    threshold?: number;        // default 0.15
    rootMargin?: string;       // default '0px 0px -10% 0px'
    once?: boolean;            // default true — fire only on first reveal
    disabled?: boolean;        // bypass when consumer wants to opt out
  }
): { ref: React.RefObject<T>, isVisible: boolean }
```

Implementation rules:

- **Auto-disables under `prefers-reduced-motion`** — `isVisible` is `true` from first render.
- Cleans up its observer on unmount.
- Reuses a single observer per component instance.

**Effort:** SMALL–MEDIUM (2–3 h with stories and Cypress test).

### 3.4 `useFocusTrap` hook (optional, only if Modal/Dialog improvements need it)

Modal/Dialog currently rely on native `<dialog>` semantics plus an `Escape` handler. If we add entrance/exit transitions we should NOT gate focus on the transition. If we add a non-`<dialog>` overlay anywhere, we need this. Otherwise skip.

**Effort:** SMALL (only if needed).

### 3.5 Shared CSS keyframes

A single `lib/styles/animations.css` (imported from `lib/style.css`) defining the keyframes used across components:

```css
@keyframes cu-fade-in {
  /* opacity 0 → 1 */
}
@keyframes cu-fade-up {
  /* translateY(8px) → 0, opacity 0 → 1 */
}
@keyframes cu-scale-in {
  /* scale(0.96) → 1, opacity 0 → 1 */
}
@keyframes cu-slide-in-right {
  /* translateX(8px) → 0, opacity 0 → 1 */
}
@keyframes cu-shimmer {
  /* for skeleton replacements, GPU-friendly */
}

@media (prefers-reduced-motion: reduce) {
  .cu-anim-fade-in,
  .cu-anim-fade-up,
  .cu-anim-scale-in,
  .cu-anim-slide-in-right {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
  .cu-anim-shimmer {
    animation-duration: 0s !important;
  }
}
```

**Effort:** SMALL (1 h).

### 3.6 Vanilla JS runtime — `cu-motion.js` (WordPress / non-React)

A framework-free counterpart to `useScrollReveal`, shipped as a static asset in `dist/vanilla-js/cu-motion.js` for consumption by Gutenberg blocks, WordPress themes, and any non-React context that uses the RDS CSS.

**Location:** `public/vanilla-js/cu-motion.js` (auto-copied to `dist/vanilla-js/cu-motion.js` by Vite's `copyPublicDir`).
**Contract:**

- Auto-discovers elements with `data-cu-reveal` on `DOMContentLoaded`.
- Sets `data-revealed="true"` on each when it scrolls into view (`threshold: 0.15`, `rootMargin: '0px 0px -10% 0px'` — identical to the React hook).
- Honours `prefers-reduced-motion: reduce` by revealing everything immediately, no observer attached.
- Exposes `window.cuMotion.register(container)` for content inserted after page load (AJAX, load-more buttons).
- Idempotent — safe to load multiple times; second load is a no-op.
- ~60 lines, no dependencies, plain ES5-compatible JS (works in every browser RDS targets without transpilation).

**Consumption (WordPress):**

```php
// functions.php
wp_enqueue_style(
  'rds-styles',
  '...rds/dist/style.css'
);
wp_enqueue_script(
  'cu-motion',
  '...rds/dist/vanilla-js/cu-motion.js',
  array(),
  '1.0',
  true
);
```

```php
// a dynamic block's render.php
<div class="cu-card" data-cu-reveal>
  <h3><?= esc_html($attributes['title']) ?></h3>
  <p><?= wp_kses_post($attributes['excerpt']) ?></p>
</div>
```

The same CSS that animates React Cards animates these PHP-rendered Cards. The vanilla JS replaces only the trigger mechanism.

**Caveat (no-JS fallback):** the current CSS sets `opacity: 0` on `.cu-card` unconditionally. If `cu-motion.js` fails to load on a WordPress page, cards will be invisible. Two ways to fix:

1. Gate the initial-hidden state on `[data-cu-reveal]` — cards without the attribute render visibly. Requires React `Card` / `Listing` to emit `data-cu-reveal` when `revealOnScroll` is `true`. **Recommended.**
2. Add a `.cu-motion-ready` class to `<html>` from `cu-motion.js` and gate the hidden state on that. Progressive enhancement — no JS = no animation, but cards are visible.

Either fix is small (~15 minutes); not yet applied. See [OQ12](#9-open-questions-for-the-team).

**Effort:** SMALL (already implemented as of 2026-05-11).

### 3.7 Storybook conventions

- Every animated component gains a **`Motion States` story** showing: idle / hover / focus / active / open / closed.
- Every animated component gains a **`Reduced Motion` story** that wraps the component in a `<div className="cu-force-reduced-motion">` toggle (a CSS class that applies the reduced-motion overrides regardless of OS setting, for visual review).
- A new `lib/docs/Motion.mdx` documents the tokens, hooks, and rules listed above.

**Effort:** MEDIUM (half day for convention + docs; per-component story additions counted in per-component effort).

### 3.8 Testing approach

| Concern                           | How we test                                                                                                                                                                         |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `prefers-reduced-motion` honoured | Cypress: stub `window.matchMedia('(prefers-reduced-motion: reduce)')` to return `matches: true`, assert no `animate-*` classes are active and `transitionDuration` computes to `0s` |
| Focus order during open/close     | Cypress: tab through after Modal opens; first focusable is body, last focus restored on close                                                                                       |
| No layout shift from hover scale  | Manual CLS check via Lighthouse on Card grids                                                                                                                                       |
| Axe a11y pass                     | `@storybook/addon-a11y` already in devDependencies — use the story-level a11y panel; add to CI                                                                                      |
| Visual regression                 | _Out of scope for v1_ (no current solution); consider Chromatic for Phase 5                                                                                                         |

**Effort:** MEDIUM (cycle setup ~half day; per-test work counted per component).

---

## 4. Component Inventory

Counts: **53** component directories under `lib/components/`, **10** layouts under `lib/layouts/`, **21** loaders. Source: `lib/main.ts` exports.

### Legend

- **Story?** ✓ has `*.stories.tsx`, — otherwise.
- **CSS?** ✓ has component-local `styles.css`, — otherwise.
- **Motion now?** existing animation/transition code present.

### 4.1 Navigation & Disclosure

| Component                                     | Files                          | Story? | CSS? | Motion now?                             |
| --------------------------------------------- | ------------------------------ | ------ | ---- | --------------------------------------- |
| Nav (Top, Bottom, Logo, Buttons, Aside, Menu) | `lib/components/Nav/`          | ✓      | ✓    | yes — scroll hide, hover, priority-plus |
| Pagination                                    | `lib/components/Pagination/`   | ✓      | —    | no                                      |
| FilterPanel                                   | `lib/components/FilterPanel/`  | ✓      | —    | yes — dropdown rotation                 |
| Modal                                         | `lib/components/Modal/`        | ✓      | —    | no                                      |
| Dialog                                        | `lib/components/Dialog/`       | ✓      | ✓    | no                                      |
| Description (Accordion)                       | `lib/components/Description/`  | ✓      | ✓    | yes — icon rotation                     |
| Details                                       | `lib/components/Details/`      | ✓      | ✓    | no (uses native `<details>`?)           |
| LinkProvider                                  | `lib/components/LinkProvider/` | —      | —    | no                                      |

### 4.2 Forms

| Component                | Files                              | Story?    | CSS? | Motion now?               |
| ------------------------ | ---------------------------------- | --------- | ---- | ------------------------- |
| Form (root + sub-fields) | `lib/components/Form/`             | ✓         | ✓    | minor — focus transitions |
| Form.AutoSuggest         | `lib/components/Form/AutoSuggest/` | (in Form) | ✓    | minor                     |
| Form.DateTime            | `lib/components/Form/DateTime/`    | (in Form) | ✓    | minor                     |
| InputAddon               | `lib/components/Form/InputAddon/`  | (in Form) | —    | no                        |
| SearchInput              | `lib/components/SearchInput/`      | ✓         | —    | no                        |
| LocationPicker           | `lib/components/LocationPicker/`   | ✓         | —    | no                        |
| Login                    | `lib/components/Login/`            | ✓         | ✓    | no                        |

### 4.3 Cards & Listings

| Component             | Files                         | Story? | CSS? | Motion now?       |
| --------------------- | ----------------------------- | ------ | ---- | ----------------- |
| Card (+ 15 sub-parts) | `lib/components/Card/`        | ✓      | ✓    | yes — hover scale |
| Listing               | `lib/components/Listing/`     | ✓      | ✓    | no                |
| Carleton360           | `lib/components/Carleton360/` | ✓      | ✓    | no                |

### 4.4 Content Blocks

| Component      | Files                            | Story? | CSS? | Motion now? |
| -------------- | -------------------------------- | ------ | ---- | ----------- |
| CallOut        | `lib/components/CallOut/`        | ✓      | ✓    | no          |
| Quote          | `lib/components/Quote/`          | ✓      | —    | no          |
| Testimonial    | `lib/components/Testimonial/`    | ✓      | —    | no          |
| TextImage      | `lib/components/TextImage/`      | ✓      | ✓    | no          |
| TextMedia      | `lib/components/TextMedia/`      | ✓      | —    | no          |
| Figure         | `lib/components/Figure/`         | ✓      | ✓    | no          |
| FundingDetails | `lib/components/FundingDetails/` | ✓      | ✓    | no          |
| Meta           | `lib/components/Meta/`           | —      | —    | no          |
| Placeholder    | `lib/components/Placeholder/`    | ✓      | —    | no          |

### 4.5 Banners, Heroes & Splash

| Component  | Files                        | Story? | CSS? | Motion now?                                |
| ---------- | ---------------------------- | ------ | ---- | ------------------------------------------ |
| Splash     | `lib/components/Splash/`     | ✓      | ✓    | yes — auto-play video bg                   |
| FullBanner | `lib/components/FullBanner/` | ✓      | ✓    | yes — auto-play video bg (when video used) |
| WideBanner | `lib/components/WideBanner/` | ✓      | ✓    | yes — auto-play video bg (when video used) |
| WideImage  | `lib/components/WideImage/`  | ✓      | ✓    | no                                         |
| PageHeader | `lib/components/PageHeader/` | ✓      | ✓    | no                                         |

### 4.6 Media

| Component           | Files                                 | Story? | CSS? | Motion now?          |
| ------------------- | ------------------------------------- | ------ | ---- | -------------------- |
| Embed (+ HubSpot)   | `lib/components/Embed/`               | ✓      | ✓    | no                   |
| ImageGrid           | `lib/components/ImageGrid/`           | ✓      | ✓    | no                   |
| ImageSlider         | `lib/components/ImageSlider/`         | ✓      | —    | yes — slide carousel |
| ImageCaptionOverlay | `lib/components/ImageCaptionOverlay/` | —      | —    | no                   |
| Icon                | `lib/components/Icon/`                | ✓      | —    | no                   |
| Avatar              | `lib/components/Avatar/`              | ✓      | —    | no                   |
| SocialIcons         | `lib/components/SocialIcons/`         | ✓      | ✓    | minor — hover        |

### 4.7 Calendar & Data Display

| Component        | Files                              | Story? | CSS? | Motion now? |
| ---------------- | ---------------------------------- | ------ | ---- | ----------- |
| Calendar         | `lib/components/Calendar/`         | ✓      | —    | no          |
| MultiDayCalendar | `lib/components/MultiDayCalendar/` | ✓      | —    | no          |
| Table            | `lib/components/Table/`            | ✓      | —    | no          |
| Timeline         | `lib/components/Timeline/`         | ✓      | ✓    | no          |
| Location         | `lib/components/Location/`         | ✓      | —    | no          |

### 4.8 Feedback & Status

| Component                  | Files                           | Story?                     | CSS? | Motion now?           |
| -------------------------- | ------------------------------- | -------------------------- | ---- | --------------------- |
| Alert                      | `lib/components/Alert/`         | ✓                          | ✓    | no                    |
| Toast                      | `lib/components/Toast/`         | ✓                          | —    | yes — slide-in/out    |
| Badge                      | `lib/components/Badge/`         | ✓                          | ✓    | no                    |
| BadgeGroup                 | `lib/components/BadgeGroup/`    | ✓                          | —    | no                    |
| Button                     | `lib/components/Button/`        | ✓                          | ✓    | minor — hover/focus   |
| ButtonGroup                | `lib/components/ButtonGroup/`   | ✓                          | —    | no                    |
| ProgressBar                | `lib/components/ProgressBar/`   | — (no story file detected) | —    | yes — width animation |
| Forbidden403 / NotFound404 | `lib/components/ErrorMessages/` | ✓                          | —    | no                    |

### 4.9 Skeleton Loaders (21)

All use `animate-pulse`; none currently wrap with `motion-safe:`.

| Loader                            | File                                                                                 |
| --------------------------------- | ------------------------------------------------------------------------------------ |
| BlockLoader                       | `lib/components/Loaders/BlockLoader/BlockLoader.tsx`                                 |
| ButtonLoader                      | `lib/components/Loaders/ButtonLoader/ButtonLoader.tsx`                               |
| CalendarLoader                    | `lib/components/Loaders/CalendarLoader/CalendarLoader.tsx`                           |
| CardEventLoader                   | `lib/components/Loaders/CardLoader/CardEventLoader.tsx`                              |
| CardIconLoader                    | `lib/components/Loaders/CardLoader/CardIconLoader.tsx`                               |
| CardNewsLoader                    | `lib/components/Loaders/CardLoader/CardNewsLoader.tsx`                               |
| CardPageLoader                    | `lib/components/Loaders/CardLoader/CardPageLoader.tsx`                               |
| CardPeopleLoader                  | `lib/components/Loaders/CardLoader/CardPeopleLoader.tsx`                             |
| CardVideoLoader                   | `lib/components/Loaders/CardLoader/CardVideoLoader.tsx`                              |
| DescriptionLoader                 | `lib/components/Loaders/DescriptionLoader/DescriptionLoader.tsx`                     |
| DescriptionLoaderAccordion        | `lib/components/Loaders/DescriptionLoader/DescriptionLoaderAccordion.tsx`            |
| EventLoader                       | `lib/components/Loaders/EventLoader/EventLoader.tsx`                                 |
| FormLoader (incl. RowLoader)      | `lib/components/Loaders/FormLoader/`                                                 |
| ListingDescriptionLoader          | `lib/components/Loaders/ListingLoader/ListingDescriptionLoader.tsx`                  |
| ListingEventLoader                | `lib/components/Loaders/ListingLoader/ListingEventLoader.tsx`                        |
| ListingIconLoader                 | `lib/components/Loaders/ListingLoader/ListingIconLoader.tsx`                         |
| ListingNewsLoader                 | `lib/components/Loaders/ListingLoader/ListingNewsLoader.tsx`                         |
| ListingPageLoader                 | `lib/components/Loaders/ListingLoader/ListingPageLoader.tsx`                         |
| ListingPeopleLoader               | `lib/components/Loaders/ListingLoader/ListingPeopleLoader.tsx`                       |
| PageHeaderLoader (+ Event/People) | `lib/components/Loaders/PageHeaderLoader/`                                           |
| PageLoader                        | `lib/components/Loaders/PageLoader/PageLoader.tsx` — _only one with `motion-reduce`_ |
| PaginationLoader                  | `lib/components/Loaders/PaginationLoader/PaginationLoader.tsx`                       |
| TableLoader                       | `lib/components/Loaders/TableLoader/TableLoader.tsx`                                 |
| TopNavLoader                      | `lib/components/Loaders/TopNavLoader/TopNavLoader.tsx`                               |

### 4.10 Layouts

| Component   | Files                      | Story? | CSS? | Motion now? |
| ----------- | -------------------------- | ------ | ---- | ----------- |
| Article     | `lib/layouts/Article/`     | ✓      | —    | no          |
| Aside       | `lib/layouts/Aside/`       | ✓      | —    | no          |
| Body        | `lib/layouts/Body/`        | ✓      | —    | no          |
| Column      | `lib/layouts/Column/`      | ✓      | ✓    | no          |
| FloatBox    | `lib/layouts/FloatBox/`    | ✓      | —    | no          |
| ImageCover  | `lib/layouts/ImageCover/`  | ✓      | ✓    | no          |
| Main        | `lib/layouts/Main/`        | ✓      | —    | no          |
| Section     | `lib/layouts/Section/`     | ✓      | —    | no          |
| StackedList | `lib/layouts/StackedList/` | ✓      | ✓    | no          |
| WideWave    | `lib/layouts/WideWave/`    | ✓      | ✓    | no          |

---

## 5. Per-Component Enhancement Plan

> Priority: **HIGH** = high-traffic, high-impact; **MEDIUM** = visible but not on every page; **LOW** = edge / already polished.
> Effort: **S** = < 1 h; **M** = ½ day; **L** = multi-day, may need design input.

### 5.1 Navigation & Disclosure

#### Nav — HIGH / M

- **Today:** Header has scroll-driven hide/show (top mobile, bottom always). Item hovers transition color. Priority-plus menu uses `IntersectionObserver` to collapse overflow items.
- **Enhancements:**
  - Replace unthrottled scroll listener with `requestAnimationFrame`-throttled handler in `scrollingNav.ts`.
  - Animate menu open/close (mobile menu) with `cu-fade-up` + 250 ms; today it's instant.
  - Add subtle underline-grow on hover (CSS pseudo, transform: scaleX). Honour focus-visible only.
  - Add `motion-reduce:` overrides for all `transition` classes (`Nav.Styles.ts:8-13`, `priority-plus.css:17,60`).
- **A11y:** Header hide must NEVER hide focused links. Test tabbing: if a link inside the header is focused while scrolled, the header must reveal. Mobile menu open/close must trap focus and return focus to trigger.

#### Pagination — MEDIUM / S

- **Today:** Static numeric pagination, no transitions.
- **Enhancements:** Active-page indicator slides between items (CSS `transform` on a single underline pill, not per-item background). 150 ms.
- **A11y:** Use `aria-current="page"`. Indicator is decorative — semantic state is in ARIA.

#### FilterPanel — MEDIUM / M

- **Today:** Arrow rotates 180° via class toggle; panel shows/hides instantly.
- **Enhancements:**
  - Panel open: `cu-fade-up` (200 ms entrance).
  - Panel close: snap (50 ms fade-out) — slower exits feel laggy.
  - Animate the chevron with `transition-transform duration-cu-base ease-cu-standard` (token-driven).
- **A11y:** `aria-expanded` must update; focus must NOT jump on open (preserve user position).

#### Modal — HIGH / M

- **Today:** Renders or doesn't (`isOpen ? 'block' : 'hidden'`). Instant snap.
- **Enhancements:**
  - Backdrop: fade in (`cu-fade-in`, 200 ms) and fade out (150 ms).
  - Dialog: `cu-scale-in` (200 ms, scale 0.96 → 1 + opacity).
  - Decouple unmount from animation: use a `mounted` state that lingers for the exit duration; OR use `transitionend`.
- **A11y:**
  - Focus moves to first focusable inside Modal immediately on open — DO NOT wait for animation (H5).
  - Focus restored to trigger on close, immediately.
  - `Escape` key already handled; keep that behavior.
  - Modal must NEVER autoplay any media.

#### Dialog — HIGH / M

- **Today:** Uses native `<dialog>.showModal()` / `.close()`. No animation.
- **Enhancements:** Same as Modal. Native `<dialog>` supports CSS animations via `&[open]` and `&::backdrop`. Animate scale/opacity; respect `motion-reduce`.
- **A11y:** Same rules as Modal. `preventClose` behavior (current implementation prevents Esc/backdrop close) is intentional — keep it.

#### Description.Accordion — MEDIUM / M

- **Today:** Toggles `hidden` attribute; icon rotates `rotate-0` ↔ `rotate-90`. No height transition.
- **Enhancements:**
  - Replace `hidden` toggle with CSS-only `[data-open="true"]` controlling `grid-template-rows: 0fr → 1fr` trick (no JS height measurement, smooth open). 250 ms.
  - Icon rotation: keep, add `motion-reduce:rotate-0` fallback (just snap).
- **A11y:** Maintain `aria-expanded` on the toggle. Content must remain keyboard-focusable when open. Avoid relying on `hidden` (it removes from tab order); use `aria-hidden` + CSS instead, or keep `hidden` but unset it _before_ animation starts.

#### Details — LOW / S

- **Today:** Appears to be presentational, not a `<details>` element. No motion.
- **Enhancements:** If used as a disclosure, mirror Description.Accordion. Otherwise no work.

### 5.2 Forms

#### Form fields (Input, Select, Textarea, Checkbox, Radio, etc.) — HIGH / M

- **Today:** Tailwind `@tailwindcss/forms` plugin handles base styling; minor focus transitions.
- **Enhancements:**
  - Standardise focus ring transition: 150 ms, `cu-standard`.
  - Validation icon: fade-in on error (`cu-fade-in`, 150 ms).
  - Label float on focused/filled (only if Carleton design language permits — see OQ4).
- **A11y:**
  - Focus ring must be visible at all times when keyboard-focused — no opacity fade on focus itself.
  - Error icon's appearance is decorative; the error message text is the semantic signal.

#### Form.AutoSuggest — MEDIUM / M

- **Today:** Built on `react-select`; has internal transitions.
- **Enhancements:** Suggestion dropdown should `cu-fade-up` on open. Limit to 200 ms.
- **A11y:** `aria-activedescendant` semantics already provided by react-select; ensure highlight is not motion-only.

#### Form.DateTime — MEDIUM / M

- **Today:** Wraps `react-date-picker` / `react-datepicker`.
- **Enhancements:** Picker open uses `cu-fade-up`. Month-change transitions should be SHORT (< 200 ms) and respect reduced-motion.
- **A11y:** Date picker has known a11y challenges; defer significant motion work until a11y baseline is verified.

#### SearchInput — MEDIUM / S

- **Today:** Static input.
- **Enhancements:**
  - Clear button fade-in/out (`cu-fade-in`, 150 ms) when text present/absent.
  - Submit-button hover: subtle background shift.
- **A11y:** Clear button must be a real `<button>` with `aria-label="Clear search"`.

#### LocationPicker — LOW / S

- Map is a Google Maps embed — its own motion. Wrap loading state with skeleton fade. No further motion needed.

#### Login — LOW / S

- Likely a static page layout. No motion required beyond standard form-field treatment.

### 5.3 Cards & Listings

#### Card — HIGH / M

- **Today:** Hover scales to 1.02 + shadow deepens. `duration-300 ease-in`.
- **Enhancements:**
  - Replace `duration-300 ease-in` with tokenised `duration-cu-base ease-cu-standard`.
  - Wrap entire hover-styles block in `motion-safe:` so the scale doesn't apply under reduced-motion (still shows the shadow change for visual feedback — that's fine without motion).
  - Add `:focus-visible` mirror of `:hover` styles (currently absent). Card focus state today probably depends on the inner anchor's outline only — wrap Card content in a way that the card itself can be the focus target where appropriate.
  - Optionally fade-up entrance via `useScrollReveal` when used in a grid (opt-in via `revealOnScroll` prop, defaults to off — see OQ5).
- **A11y:**
  - Avoid scale-on-hover increasing the visible card area beyond grid cell → grid must use `place-items: stretch` and the scale must originate from center.
  - Focus state must be perceptible without color alone (use outline + shadow change).

#### Listing — MEDIUM / M

- **Today:** Static list of items.
- **Enhancements:** Stagger reveal of children on initial load via `useScrollReveal` + a small `--cu-stagger-index` CSS variable. Children fade-up 200 ms with 40 ms stagger. Cap at 6 items staggered; the rest appear immediately. Respect reduced-motion (snap all in).
- **A11y:** The stagger is purely decorative; assistive tech sees items immediately.

#### Carleton360 — MEDIUM / M

- **Today:** Unique campus-recruitment component. No motion.
- **Enhancements:** Subtle entrance via `useScrollReveal` for sub-sections. Keep static under reduced-motion.

### 5.4 Content Blocks

#### CallOut — LOW / S

- Static block. Add only a `useScrollReveal` opt-in.

#### Quote, Testimonial — LOW / S

- Same as CallOut — single `useScrollReveal` opt-in for entrance.

#### TextImage, TextMedia — MEDIUM / S

- Add `useScrollReveal` entrance for the image side (slides in from `translateX(8px)`). Text side fades up. Stagger by 80 ms.
- Respect reduced-motion: both snap into place.

#### Figure — LOW / S

- Caption could fade-in 150 ms after image loads. No further motion.

#### FundingDetails — LOW / S

- Static stats block. Optional animated number counter (see [§6 New Components](#6-new-component-candidates) — the AnimatedStat candidate).

#### Meta, Placeholder — LOW / S

- No motion needed.

### 5.5 Banners, Heroes & Splash

#### Splash — HIGH / M

- **Today:** Full-screen section. When a video background is used (`useVideoBanner.tsx`), video `autoPlay muted loop playsInline`.
- **Enhancements:**
  - **Add a user-visible pause/play control** (WCAG 2.2.2 hard requirement for motion ≥ 5 s). Position bottom-right of viewport. Show within 1 s of page load.
  - On `prefers-reduced-motion: reduce`, **do not autoplay** — show poster image; reveal play button.
  - Content overlay: `cu-fade-up` entrance, 400 ms, `cu-emphasized` easing.
- **A11y:**
  - Video must have `aria-hidden="true"` if purely decorative (no captions needed); otherwise provide captions.
  - Pause control must be keyboard-reachable and the first interactive element after the skip-link.

#### FullBanner / WideBanner — HIGH / M

- Same auto-play concerns as Splash when using video. Same enhancements (pause control + reduced-motion poster).
- For image variants: optional `cu-fade-in` of the content overlay; no parallax.

#### WideImage — LOW / S

- Static. Optional `useScrollReveal`.

#### PageHeader — MEDIUM / S

- Add `cu-fade-up` for the title block on mount, 300 ms, single play. Skip under reduced-motion.

### 5.6 Media

#### Embed (+ EmbedHubSpot) — LOW / S

- Wrap iframe load with skeleton; fade-in on load (`cu-fade-in`, 200 ms).

#### ImageGrid — MEDIUM / M

- **Today:** Static grid.
- **Enhancements:** Hover lift on each image (scale 1.01 + brightness 1.05). Tap target focus state on each link. `useScrollReveal` stagger for initial reveal.
- **A11y:** Each image link must have an `aria-label` describing the destination.

#### ImageSlider — HIGH / L

- **Today:** Carousel with inline `transform 0.5s ease`, JS-set transitions with 50 ms timeouts to sequence phases. Manual navigation only (no auto-advance). Backgrounds have a 5 s transition class (`duration-[5000]`).
- **Enhancements:**
  - Refactor `script.ts:78-113` to use CSS class swaps + `transitionend` instead of JS-set styles + `setTimeout(50)`.
  - Tokenise duration: 350 ms standard.
  - Remove or shorten the 5 s background image transition — borderline of WCAG 2.2.2; not user-paused.
  - Add prev/next button focus-visible animation.
  - Verify no auto-advance is ever added without an opt-in + pause (document this in code).
- **A11y:**
  - Slider container should be `role="region"` with `aria-roledescription="carousel"` and `aria-label`.
  - Slide changes should be `aria-live="polite"` ONLY during user navigation (not on every render).
  - Keyboard: arrow keys cycle slides; focus stays on active control.
- **Effort note:** Refactor is substantial because the inline-style approach is brittle.

#### ImageCaptionOverlay — LOW / S

- Caption fade-in on image hover/focus (`cu-fade-in`, 200 ms), with `motion-reduce` showing caption always-visible.
- **A11y:** Caption must be in DOM, visible on focus (not just hover).

#### Icon, Avatar — LOW / S

- Optional ring/glow on hover. No required motion.

#### SocialIcons — LOW / S

- Subtle hover lift (`translateY(-1px)`) on each icon. 150 ms. `motion-safe:`.

### 5.7 Calendar & Data Display

#### Calendar / MultiDayCalendar — MEDIUM / M

- **Today:** No transitions.
- **Enhancements:**
  - Month-to-month change: fade-cross 150 ms (outgoing fade-out 100 ms, incoming fade-in 150 ms, no spatial transform — avoids confusion).
  - Day-hover: 100 ms background-color transition.
  - Selected-day: animated indicator (CSS-only, scale-in 200 ms when selection changes).
- **A11y:**
  - Month change must not move focus.
  - Selected state announced via `aria-selected` + visible text (e.g., "Selected: May 11, 2026") in an `aria-live` region.

#### Table — MEDIUM / M

- **Today:** Sortable via `useSortableTable`. No row-reordering animation.
- **Enhancements:**
  - Sort indicator: 150 ms rotation of caret icon.
  - Row hover: background-color transition 100 ms.
  - Optional: FLIP animation for sort reordering — but **defer** to Phase 4 (significant complexity, low payoff for content tables).
- **A11y:** `aria-sort` on `<th>`.

#### Timeline — MEDIUM / M

- **Today:** Vertical timeline component, static.
- **Enhancements:**
  - Each `Timeline.Item` reveals via `useScrollReveal` (fade-up + 80 ms stagger).
  - Optional: animated "progress line" that fills as user scrolls (CSS only, using `scroll-timeline` if supported, fallback to no animation under reduced motion or unsupported browsers).
- **A11y:** Items are static content; motion is decorative. List semantics (`<ol>`) preserved.

#### Location — LOW / S

- Google Maps embed; no additional motion.

### 5.8 Feedback & Status

#### Alert — MEDIUM / S

- **Today:** Static block, dismissible (likely).
- **Enhancements:** Mount → `cu-fade-up` 200 ms. Dismiss → fade + slide-up exit 150 ms.
- **A11y:** `role="alert"` on errors only (it auto-announces). `role="status"` on info. Don't add `role="alert"` to long-lived dismissible info — too noisy for screen readers.

#### Toast — HIGH / M

- **Today:** Slide-in/out via `translate-y-2` / `translate-y-0` + opacity. JS `setTimeout(200)` to remove after exit transition. Class string is `transform transition ease-in duration-200`.
- **Enhancements:**
  - Switch the JS timeout to a `transitionend` listener on the toast element — decouples JS from CSS duration.
  - Tokenise the 200 ms.
  - Add a slight scale-in (0.96 → 1) on entrance for more polish.
  - Optionally: stack multiple toasts with FLIP-style positional animation (Phase 4).
- **A11y:**
  - Toaster wrapper already has `aria-live="assertive"`. Confirm errors use assertive, info/success use polite (currently they're all in the same Toaster, which is wrong — see OQ6).
  - Auto-dismiss timer must be at least 6 s for short messages (WCAG 2.2.1) AND user must be able to dismiss manually. Currently dismiss is manual only — verify or add.

#### Badge / BadgeGroup — LOW / S

- Optional: when used dynamically (e.g., count badge updates), pulse once on change (`cu-scale-in`, 200 ms). Skip if `prefers-reduced-motion`.
- **A11y:** Count changes should be in a `aria-live="polite"` region if relevant.

#### Button — HIGH / S

- **Today:** Tailwind hover/focus, no explicit transition class.
- **Enhancements:**
  - Standardise `transition duration-cu-fast ease-cu-standard` on all variants.
  - Add `active:scale-[0.98]` (motion-safe) for tactile feedback. 100 ms.
  - Loading state: replace icon with inline mini-spinner; respect `motion-reduce` (pulse opacity instead of spin).
- **A11y:** Focus ring must be visible always when `:focus-visible`. Disabled state must not be solely color-coded.

#### ButtonGroup — LOW / S

- No motion of its own; inherits from Buttons.

#### ProgressBar — HIGH / S

- **Today:** Width fill via `transition-all duration-1000 ease-out`. Animates `width` (H3 violation).
- **Enhancements:**
  - Switch implementation: outer container `overflow-hidden`, inner bar uses `transform: scaleX(value)` with `transform-origin: left`.
  - Tokenise duration to `cu-fill`.
  - `motion-reduce`: bar snaps to value (no transition).
- **A11y:**
  - `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, `aria-label`.
  - Add a Storybook story showing this component.

#### Forbidden403 / NotFound404 — LOW / S

- Static error pages. Optional `cu-fade-up` for the heading + illustration on mount. Skip under reduced-motion.

### 5.9 Skeleton Loaders (all 21) — HIGH (collectively) / S each

- **Today:** All use Tailwind `animate-pulse`.
- **Enhancements:** Wrap each `animate-pulse` with `motion-safe:animate-pulse`. This is a one-line change per file (~21 files). Alternative: define a shared `.cu-skeleton` class that does this automatically and apply uniformly.
- **PageLoader**: keep its existing `motion-reduce:animate-[spin_1.5s_linear_infinite]` (slowed spin). Consider also slowing TopNavLoader the same way.
- **Optional Phase 4**: replace pulse with a subtler shimmer (`cu-shimmer` keyframe in `animations.css`), translate-based, looped — disabled under reduced-motion.
- **A11y:** Loaders should be wrapped with `aria-busy="true"` + a `role="status"` element containing visually-hidden text ("Loading…"). Verify each loader does this.

### 5.10 Layouts (Article, Aside, Body, Column, FloatBox, ImageCover, Main, Section, StackedList, WideWave) — LOW / S

- Layouts are structural; they should not carry motion themselves.
- One exception: **Section** could expose a `revealOnScroll` prop that wraps children in a scroll-reveal container. Opt-in only. Keep tree-shakable.
- WideWave has decorative SVG — could subtly drift on scroll (parallax-lite), but **don't do this** — H7 says no parallax. Leave static.

---

## 6. New Component Candidates

Only items that fit a university content site are included. Items the audit suggested but I'm **not** recommending: command palette (overkill for a content site), filterable card grid (already covered by FilterPanel + Listing), interactive timeline beyond what Timeline does, sticky TOC (better as a layout pattern, not a packaged component — but see Phase 5).

| Candidate           | Why it fits a university site                                                                                                                                                                           | Effort | Priority |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | -------- |
| **AnimatedStat**    | Faculties love "1,200+ students placed" callouts. CSS-counter animation triggered by `useScrollReveal`. Respects reduced-motion (snaps to final value).                                                 | S      | HIGH     |
| **ReadingProgress** | Long-form articles (research stories, faculty profiles). Top-of-page horizontal bar showing scroll progress. CSS-only via `scroll-timeline` where supported; fallback uses throttled `scroll` listener. | S      | MEDIUM   |
| **StickyTOC**       | Long-form article pages benefit from sticky in-page navigation that highlights the current section. Uses `IntersectionObserver`.                                                                        | M      | MEDIUM   |
| **SkeletonGroup**   | Convenience wrapper that orchestrates multiple loaders so a "page loading" composition is one component. Solves the "21 loaders, no story" gap from `docs/IMPROVEMENTS.md`.                             | S      | MEDIUM   |
| **Tabs**            | Many program pages need program-overview tabs. Existing alternative is awkward toggle UI. Animated indicator slides between tabs.                                                                       | M      | HIGH     |
| **Disclosure**      | A reusable, accessible disclosure primitive that DescriptionAccordion and Details could both wrap. Centralises the open/close motion logic.                                                             | M      | MEDIUM   |
| **CopyButton**      | Faculty/contact pages copy email addresses. Inline button with checkmark transition on success.                                                                                                         | S      | LOW      |
| **BackToTop**       | Long pages; floating button reveal on scroll past 600 px. Smooth scroll respects reduced-motion (instant jump).                                                                                         | S      | LOW      |

**Not recommended (don't add):**

- Command palette / global search overlay — wrong product surface.
- Toast notification _system_ (queue manager) — current Toast is enough; queue logic is consumer's responsibility.
- Animated counter that loops indefinitely — H6 violation.
- Hover-tilt cards — outside Carleton aesthetic.
- Page transition router-level animations — not the design system's concern.

---

## 7. Testing & Verification

### 7.1 Storybook

- Add `lib/docs/Motion.mdx` documenting tokens, hooks, principles, and example usage.
- Per animated component: a `Motion States` story and a `Reduced Motion` story (see §3.6).
- Continue using `@storybook/addon-a11y` (already installed) — make a11y panel review part of every motion PR.

### 7.2 Cypress

Per-component motion tests are not always practical; focus instead on **principle tests** at the system level plus **critical-path tests** for high-priority components.

**System-level tests:**

| Test                  | What it verifies                                                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `reducedMotion.cy.ts` | Stubs `matchMedia` → asserts all `.animate-*` classes have `animation-duration: 0s` computed style on representative components |
| `tokens.cy.ts`        | Asserts components consume the motion tokens, not hard-coded values (computed style snapshot)                                   |

**Critical-path tests:**

| Component           | Test                                                                                                |
| ------------------- | --------------------------------------------------------------------------------------------------- |
| Modal               | Opens, focus moves to dialog immediately (does not wait for transition), Esc closes, focus restored |
| Toast               | Slides in, dismiss button removes element after transitionend, no zombie nodes                      |
| ImageSlider         | Arrow keys cycle slides, slide change announces via aria-live, no autoplay                          |
| Splash (when video) | Pause button is keyboard-reachable, pauses the video, reduced-motion does not autoplay              |
| ProgressBar         | aria-valuenow updates correctly; under reduced-motion, no transition applied                        |

### 7.3 Manual a11y checklist

A short checklist per PR — add to `docs/CONTRIBUTING.md`:

- [ ] Did you add or modify a `transition-*` / `animate-*` class? Then paired with `motion-reduce:` or `motion-safe:`?
- [ ] Did you add JS-driven motion? Then `useReducedMotion` checked?
- [ ] Does the animation move focus, or is focus independent?
- [ ] Tested with macOS System Settings → Accessibility → Display → Reduce motion → ON?
- [ ] Tested with keyboard only?
- [ ] axe-core panel in Storybook shows no new violations?

### 7.4 Performance budget

- No component should add > 1 KB gzipped of motion-related JS over its current size.
- No new runtime dependencies for motion (no Framer Motion).
- Lighthouse CLS score on Card grids should remain ≤ 0.05.

---

## 8. Phased Roadmap

### Phase 1 — Foundations (1 sprint, ~1 week)

Goal: Land the infrastructure that everything else depends on. **No user-visible changes** at the end of Phase 1, but the system is ready.

1. Motion tokens in Tailwind (`§3.1`).
2. `useReducedMotion` hook (`§3.2`).
3. `useScrollReveal` hook (`§3.3`).
4. `lib/styles/animations.css` with keyframes (`§3.5`).
5. Wrap every existing `animate-pulse` and motion class with `motion-safe:` / `motion-reduce:` overrides. This is the **biggest single a11y win** in the entire plan — closes the reduced-motion gap across all 21 loaders + Card + Toast + Nav + FilterPanel + Description.
6. Throttle `scrollingNav.ts` with `requestAnimationFrame`.
7. Convert `ProgressBar` to `transform: scaleX()` (H3 fix).
8. Decouple `Toast` removal timer via `transitionend`.
9. Storybook convention doc + `Motion.mdx` (`§3.6`).
10. Cypress `reducedMotion.cy.ts` baseline test.

### Phase 2 — High-priority component enhancements (2 sprints, ~2 weeks)

- Modal + Dialog open/close transitions.
- Nav mobile menu open/close.
- Card hover + focus parity + tokenised durations.
- Button microinteractions (active scale, loading spinner).
- Splash / FullBanner / WideBanner pause-control + reduced-motion poster.
- ImageSlider refactor (CSS-class swaps, tokenise duration).
- Toast scale-in entrance + tokens.

### Phase 3 — Medium-priority components (2 sprints, ~2 weeks)

- Description.Accordion height transition (grid-template-rows trick).
- FilterPanel open animation.
- Pagination indicator slide.
- Calendar / MultiDayCalendar month-change cross-fade.
- Table sort indicator + row hover.
- Timeline scroll-reveal stagger.
- ImageGrid hover + reveal stagger.
- Listing reveal stagger.
- Alert mount/dismiss.
- TextImage / TextMedia / PageHeader entrance.

### Phase 4 — New components (2 sprints, ~2 weeks)

- AnimatedStat (highest payoff for marketing/recruitment pages).
- Tabs.
- ReadingProgress.
- StickyTOC.
- Disclosure (primitive that consolidates accordion behaviors).
- SkeletonGroup.
- CopyButton, BackToTop (small).

### Phase 5 — Documentation & Storybook polish (1 sprint, ~1 week)

- Motion States + Reduced Motion stories for every animated component.
- Update `docs/COMPONENTS.md` to reference motion behavior.
- Per-component a11y checklist results documented.
- (Optional) Visual regression — Chromatic — if budget allows.
- Migrate any remaining hard-coded durations to tokens (sweep).

### Estimated total

~8 sprints (≈ 8 weeks of focused effort). Phases 1 and 2 deliver the bulk of the user-visible improvement and a11y wins (~3 weeks).

---

## 9. Open Questions for the Team

These need human decisions before work begins. Each has a recommendation in italics where I have a confident default.

| #               | Question                                                                                                                                                                                                                                                       | Why it matters                                                                                                                      | My default                                                                                                                                                                                        |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| OQ1             | Should motion tokens live in the `rds-tailwind-theme` package or be added locally to `rds`'s `tailwind.config.ts`?                                                                                                                                             | Theme package is shared with other consumers; local extension keeps changes scoped but creates drift.                               | _Add to `rds-tailwind-theme` so other Carleton products inherit the vocabulary. Falls back to local extension if the theme package's release cycle is too slow._                                  |
| OQ2             | Do we ever want auto-advancing carousels? `ImageSlider` is manual today. Should the design system disallow auto-advance entirely, or expose it as an explicit opt-in with mandatory pause control?                                                             | WCAG 2.2.2 hard-requires pause control if added.                                                                                    | _Forbid auto-advance in the design system; if a campus site needs one, they own the implementation outside RDS._                                                                                  |
| OQ3             | What's the policy on video backgrounds in `Splash` / `FullBanner` / `WideBanner`? Should we **default** them to paused (with a play button) and require an opt-in to autoplay?                                                                                 | Today they autoplay loop with no pause. This is a live a11y gap.                                                                    | _Default to paused-with-poster. Autoplay becomes an explicit `autoplayOptIn` prop that requires a `pauseLabel` prop to be passed too._                                                            |
| OQ4             | Are floating labels (Material-style) part of Carleton's design language for forms, or should we keep static top labels?                                                                                                                                        | Affects Form fields scope.                                                                                                          | _Keep static top labels unless design team explicitly wants floating._                                                                                                                            |
| OQ5             | Should `useScrollReveal` be opt-in (component gets a `revealOnScroll` prop, defaults to off) or opt-out (default on)?                                                                                                                                          | Opt-out means subtle motion appears across every site automatically — bigger visual change. Opt-in is safer but adoption is slower. | _Opt-in. Default off. Site authors can enable per-component. Reduces blast radius and respects sites that prefer no motion._                                                                      |
| OQ6             | The Toaster currently uses `aria-live="assertive"` for ALL toast types (including info/success). Should we split into two regions (assertive for errors, polite for the rest)?                                                                                 | Assertive interrupts a screen reader; using it for routine info is rude.                                                            | _Split: errors → assertive; success / warning / info → polite. Toaster takes a type-aware approach._                                                                                              |
| OQ7             | What is our minimum supported browser baseline? `scroll-timeline` (used by ReadingProgress proposal) is supported in Chrome/Edge 115+ but not Safari < 18 or older Firefox.                                                                                    | Affects ReadingProgress implementation strategy.                                                                                    | _Use `scroll-timeline` with feature detection and a `scroll`-listener fallback. Document the degradation in MDX._                                                                                 |
| OQ8             | Is there budget/appetite for a visual regression tool (e.g., Chromatic) in Phase 5, or do we rely on Storybook a11y panel + Cypress + manual review?                                                                                                           | Affects testing confidence for motion.                                                                                              | _Defer Chromatic; it's a recurring cost. Rely on a11y addon + Cypress + manual checklist for v1._                                                                                                 |
| OQ9             | Should the Nav scroll-hide behavior be kept, or removed? It adds value on mobile but the unthrottled scroll listener is a measurable perf cost and the motion can be disorienting.                                                                             | Affects Nav scope.                                                                                                                  | _Keep, but throttle via rAF and add `motion-reduce` to disable the slide (header stays put for reduced-motion users)._                                                                            |
| OQ10            | The CSS bundle is already flagged as oversized in `docs/IMPROVEMENTS.md`. Adding `animations.css` with shared keyframes adds ~1 KB. Acceptable?                                                                                                                | Bundle-size sensitivity.                                                                                                            | _Acceptable. ~1 KB for ~5 reusable keyframes is a good trade vs. duplicating definitions per component._                                                                                          |
| OQ11            | Does Carleton have brand-level guidance on motion (timing curves, principles) we should align with?                                                                                                                                                            | Could change easing tokens.                                                                                                         | _Check with brand team before finalising token values. The proposed easings (`cubic-bezier(0.2, 0, 0, 1)` family) are conservative defaults._                                                     |
| OQ12 ✓ resolved | The `.cu-card` / `.cu-listing` CSS sets `opacity: 0` unconditionally. If `cu-motion.js` (or the React hook) doesn't run, those elements are invisible. Should we gate the hidden state on `[data-cu-reveal]` so plain `<div class="cu-card">` renders visibly? | No-JS fallback robustness on WordPress pages.                                                                                       | **Resolved 2026-05-11**: gated on `[data-cu-reveal]`. React `Card` / `Listing` emit the attribute when `revealOnScroll` is `true`. WordPress consumers add `data-cu-reveal` explicitly to opt in. |

---

## Appendix A — Files most likely to change in Phase 1

For estimation purposes. Phase 1 touches:

- `tailwind.config.ts` (or `rds-tailwind-theme` package)
- `lib/hooks/useReducedMotion.ts` _(new)_
- `lib/hooks/useScrollReveal.ts` _(new)_
- `lib/styles/animations.css` _(new)_
- `lib/style.css` (import the new animations file)
- `lib/components/Loaders/**/*.tsx` (21 files — `motion-safe:` prefix sweep)
- `lib/components/Card/Card.tsx`
- `lib/components/Toast/Toast.tsx`
- `lib/components/Nav/scrollingNav.ts`, `Nav.tsx`, `Nav.Styles.ts`, `priority-plus/priority-plus.css`
- `lib/components/FilterPanel/FilterPanelTop.tsx`, `dropdown.ts`
- `lib/components/Description/DescriptionAccordion.tsx`, `script.ts`
- `lib/components/ProgressBar/ProgressBar.tsx`
- `lib/docs/Motion.mdx` _(new)_
- `cypress/e2e/reducedMotion.cy.ts` _(new)_

Estimated ~35 file touches for Phase 1; most are 1–3 line changes.
