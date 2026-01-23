# Raven Design System (RDS) Documentation

Welcome to the documentation for the Raven Design System - Carleton University's React component library.

## Quick Links

| Document | Description |
|----------|-------------|
| [Architecture](./ARCHITECTURE.md) | System architecture, build process, and project structure |
| [Components](./COMPONENTS.md) | Complete component catalog with usage examples |
| [Layouts](./LAYOUTS.md) | Layout components for page structure |
| [Forms](./FORMS.md) | Form system with Formik integration |
| [Styling](./STYLING.md) | Current Tailwind CSS implementation |
| [Utilities](./UTILITIES.md) | Utility functions and helper classes |
| [Gutenberg Integration](./GUTENBERG.md) | WordPress block development guide |
| [Testing](./TESTING.md) | Testing with Cypress and Storybook |
| [Migration Plan](./MIGRATION.md) | Tailwind to SCSS migration roadmap |
| [Contributing](./CONTRIBUTING.md) | Contribution guidelines and standards |

## Overview

RDS is a production-ready, TypeScript-first React component library built with modern tooling. It powers over 70 custom Gutenberg blocks for Carleton University websites.

### Key Statistics

- **51 UI Components**
- **10 Layout Components**
- **21 Skeleton Loaders**
- **27 Form Components**
- **React 19** compatible
- **TypeScript** with strict type checking
- **Storybook 8.6** for component development

### Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 19, TypeScript 5.9 |
| Build | Vite 6.3, Rollup |
| Styling | Tailwind CSS 3.4 (migrating to SCSS) |
| Forms | Formik 2.4, Yup 1.7 |
| Testing | Cypress 15.8, Storybook 8.6 |
| Linting | ESLint 9, Prettier 3.7 |
| Git Hooks | Husky 9, Commitlint |

## Installation

```bash
npm install @carletonuniversity/rds
```

## Basic Usage

```tsx
import { Button, Card, Alert } from '@carletonuniversity/rds'
import '@carletonuniversity/rds/dist/style.css'

function MyComponent() {
  return (
    <Card>
      <Card.Header title="Welcome" />
      <Card.Body>
        <Card.Content>
          <Alert type="success" title="Success!">
            Your component is working.
          </Alert>
          <Button color="red">Click Me</Button>
        </Card.Content>
      </Card.Body>
    </Card>
  )
}
```

## Package Exports

The library provides multiple export formats:

```json
{
  "main": "dist/rds.umd.js",      // CommonJS/UMD
  "module": "dist/rds.es.js",     // ES Modules
  "types": "dist/main.d.ts"       // TypeScript definitions
}
```

## Development

```bash
# Install dependencies
npm install

# Start Storybook development server
npm run storybook

# Build library
npm run build

# Run tests
npm run test

# Lint and format
npm run lint
npm run prettier
```

## Project Goals

### Current Focus
1. Document existing components and patterns
2. Identify inconsistencies and areas for improvement
3. Improve Gutenberg block integration

### Future Plans
1. Migrate from Tailwind CSS to SCSS modules
2. Improve bundle size and tree-shaking
3. Add more comprehensive testing
4. Create better TypeScript types for Gutenberg

## Support

- **Storybook**: Run `npm run storybook` for interactive component documentation
- **Issues**: Report issues in the project repository
- **Updates**: Check [CHANGELOG](../CHANGELOG.md) for version updates
