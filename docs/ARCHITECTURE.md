# Architecture

This document describes the system architecture, project structure, and build process for the Raven Design System.

## Table of Contents

- [Project Structure](#project-structure)
- [Build System](#build-system)
- [Module System](#module-system)
- [Component Architecture](#component-architecture)
- [Dependency Management](#dependency-management)
- [Configuration Files](#configuration-files)

## Project Structure

```
rds/
├── lib/                          # Source code
│   ├── components/               # 51 UI components
│   │   ├── Alert/
│   │   │   ├── Alert.tsx         # Component implementation
│   │   │   ├── Alert.stories.tsx # Storybook stories
│   │   │   └── styles.css        # Component styles
│   │   └── ...
│   ├── layouts/                  # 10 layout components
│   ├── data/                     # Sample data for stories (26 files)
│   ├── helpers/                  # Validation schemas, utilities
│   ├── hooks/                    # Custom React hooks (3 hooks)
│   ├── styles/                   # Global CSS files
│   ├── utils/                    # Utility functions and prop classes
│   ├── docs/                     # Storybook MDX documentation
│   ├── main.ts                   # Main export barrel file
│   └── style.css                 # Primary CSS entry point
│
├── .storybook/                   # Storybook configuration
│   ├── main.ts                   # Main config
│   └── preview.ts                # Preview config
│
├── cypress/                      # E2E and component tests
│   ├── e2e/                      # E2E test files
│   ├── fixtures/                 # Test fixtures
│   └── support/                  # Test helpers
│
├── public/                       # Static assets
│   ├── assets/
│   │   ├── font-awesome/         # Icons
│   │   └── bg-images/            # Background images
│   └── sample-imgs/              # Sample images for demos
│
├── dist/                         # Build output (generated)
│   ├── rds.es.js                 # ES module bundle
│   ├── rds.umd.js                # UMD bundle
│   ├── main.d.ts                 # TypeScript declarations
│   └── style.css                 # Compiled CSS
│
└── Configuration files
    ├── vite.config.ts            # Vite/Rollup configuration
    ├── tailwind.config.ts        # Tailwind CSS configuration
    ├── tsconfig.json             # TypeScript configuration
    ├── eslint.config.mjs         # ESLint configuration
    ├── .prettierrc               # Prettier configuration
    ├── cypress.config.ts         # Cypress configuration
    └── package.json              # Dependencies and scripts
```

## Build System

### Vite + Rollup

The library uses Vite 6.3 with Rollup for production builds.

**Key Configuration** (`vite.config.ts`):

```typescript
export default defineConfig({
  plugins: [react(), dts({ rollupTypes: true })],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'rds',
      formats: ['es', 'umd'],
      fileName: (format) => `rds.${format}.js`,
    },
    rollupOptions: {
      external: [
        /* all dependencies externalized */
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          // ... other globals
        },
      },
    },
  },
})
```

### Build Outputs

| Output            | Format     | Use Case                                |
| ----------------- | ---------- | --------------------------------------- |
| `dist/rds.es.js`  | ES Modules | Modern bundlers (Vite, webpack 5+)      |
| `dist/rds.umd.js` | UMD        | Browser `<script>` tags, older bundlers |
| `dist/main.d.ts`  | TypeScript | Type definitions                        |
| `dist/style.css`  | CSS        | Compiled styles                         |

### Bundle Size Limits

Enforced via `size-limit` package:

```json
{
  "size-limit": [
    { "path": "dist/rds.es.js", "limit": "200 kB" },
    { "path": "dist/rds.umd.js", "limit": "200 kB" }
  ]
}
```

### Build Scripts

```bash
# Full build (lint, format, compile, size check)
npm run build

# Storybook build
npm run build:storybook

# Generate asset lists
npm run create-lists
```

### CSS Processing

PostCSS pipeline with:

1. **Tailwind CSS** - Utility-first styles
2. **PostCSS Nesting** - CSS nesting support
3. **Autoprefixer** - Browser prefixes

## Module System

### Export Pattern

The library uses a **barrel export pattern** in `lib/main.ts`:

```typescript
// Components
export { Alert } from './components/Alert/Alert'
export { Button } from './components/Button/Button'
export { Card } from './components/Card/Card'
// ... 50+ more

// Layouts
export { Article } from './layouts/Article/Article'
export { Column } from './layouts/Column/Column'
// ... more layouts

// Utilities
export * as utils from './utils/propClasses'
export { iconNames } from '../public/assets/font-awesome/icon-list.js'
export { bgImageNames } from '../public/assets/bg-images/bg-image-list.js'

// CSS (side effect)
import './style.css'
```

### Package Exports

```json
{
  "exports": {
    ".": {
      "types": "./dist/main.d.ts",
      "import": "./dist/rds.es.js",
      "require": "./dist/rds.umd.js"
    },
    "./dist/style.css": "./dist/style.css"
  }
}
```

### External Dependencies

All dependencies are externalized to avoid bundling:

```typescript
external: [
  'react',
  'react-dom',
  'formik',
  'yup',
  'date-fns',
  'react-select',
  'react-player',
  'dompurify',
  '@react-google-maps/api',
  // ... etc
]
```

## Component Architecture

### Standard Component Structure

```
ComponentName/
├── ComponentName.tsx         # Main component
├── ComponentName.stories.tsx # Storybook stories
├── styles.css                # Component-scoped styles
└── [SubComponents.tsx]       # Optional sub-components
```

### Composite Component Pattern

Complex components use `Object.assign` for sub-component attachment:

```typescript
// Card.tsx
const CardWrapper = ({ children, ...props }) => (
  <div {...props}>{children}</div>
)

export const Card = Object.assign(CardWrapper, {
  Figure: CardFigure,
  Header: CardHeader,
  Body: CardBody,
  Content: CardContent,
  Footer: CardFooter,
  // ... more subcomponents
})
```

**Usage:**

```tsx
<Card>
  <Card.Figure src="/image.jpg" />
  <Card.Body>
    <Card.Header title="Card Title" />
    <Card.Content>Content here</Card.Content>
  </Card.Body>
</Card>
```

### TypeScript Patterns

**Props Interface Pattern:**

```typescript
export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  color?: 'red' | 'grey' | 'dark-grey' | 'black' | 'white'
  isSmall?: boolean
  isFull?: boolean
  isDisabled?: boolean
}
```

**Discriminated Union Pattern:**

```typescript
// Button with title
interface ButtonTitleProps extends BaseButtonProps {
  title: string
  children?: never
}

// Button with children
interface ButtonChildrenProps extends BaseButtonProps {
  children: React.ReactNode
  title?: never
}

type ButtonProps = ButtonTitleProps | ButtonChildrenProps
```

### Context Providers

**LinkProvider** for customizable link components:

```typescript
// LinkContext.tsx
export const LinkContext = createContext<React.ElementType>('a')
export const useLinkContext = () => useContext(LinkContext)

// Usage in component
const Link = useLinkContext()
return <Link href={url}>{children}</Link>

// App-level customization
import { Link } from 'next/link'
<LinkProvider value={Link}>
  <App />
</LinkProvider>
```

## Dependency Management

### Peer Dependencies

```json
{
  "peerDependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0"
  }
}
```

### Key Runtime Dependencies

| Package                  | Version | Purpose                  |
| ------------------------ | ------- | ------------------------ |
| `formik`                 | 2.4.9   | Form state management    |
| `yup`                    | 1.7.1   | Schema validation        |
| `date-fns`               | 4.1.0   | Date utilities           |
| `react-select`           | 5.10.2  | Enhanced select dropdown |
| `react-player`           | 3.4.0   | Video player             |
| `dompurify`              | 3.3.1   | HTML sanitization        |
| `@react-google-maps/api` | 2.20.8  | Google Maps              |

### Styling Dependencies

| Package                          | Purpose                      |
| -------------------------------- | ---------------------------- |
| `tailwindcss`                    | Utility CSS framework        |
| `rds-tailwind-theme`             | Carleton custom theme preset |
| `@tailwindcss/forms`             | Form element styles          |
| `@tailwindcss/typography`        | Prose styles                 |
| `@tailwindcss/aspect-ratio`      | Aspect ratio utilities       |
| `@tailwindcss/container-queries` | Container queries            |

## Configuration Files

### TypeScript (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "skipLibCheck": true,
    "noEmit": true
  }
}
```

### Tailwind (`tailwind.config.ts`)

```typescript
export default {
  presets: [require('rds-tailwind-theme')],
  content: ['./lib/**/*.{tsx,ts,jsx,js}'],
  darkMode: 'selector', // .dark class-based
  // Theme extensions...
}
```

### ESLint (`eslint.config.mjs`)

- Flat config format (ESLint 9+)
- TypeScript support
- React/React Hooks rules
- Prettier integration
- Storybook plugin
- Cypress plugin

### Prettier (`.prettierrc`)

```json
{
  "trailingComma": "all",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true,
  "printWidth": 120,
  "bracketSpacing": true
}
```

## Areas for Improvement

### Current Issues

1. **Large bundle size** - CSS includes unused Tailwind utilities
2. **No tree-shaking** - All components bundled together
3. **Tight Tailwind coupling** - Hard to customize without Tailwind knowledge
4. **Limited CSS isolation** - Global styles can leak

### Planned Improvements

1. **SCSS Migration** - Move to CSS modules for better isolation
2. **Component-level exports** - Enable tree-shaking
3. **CSS extraction** - Separate critical and non-critical CSS
4. **Better TypeScript** - Stricter types for Gutenberg integration

See [MIGRATION.md](./MIGRATION.md) for the Tailwind to SCSS migration plan.
