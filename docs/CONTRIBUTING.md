# Contributing Guide

Guidelines for contributing to the Raven Design System.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Code Standards](#code-standards)
- [Component Guidelines](#component-guidelines)
- [Commit Conventions](#commit-conventions)
- [Pull Request Process](#pull-request-process)
- [Documentation](#documentation)
- [Testing Requirements](#testing-requirements)

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+
- Git

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd rds

# Install dependencies
npm install

# Start Storybook development server
npm run storybook
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run storybook` | Start Storybook dev server on port 6006 |
| `npm run build` | Build the library |
| `npm run build:storybook` | Build Storybook for deployment |
| `npm run lint` | Run ESLint |
| `npm run prettier` | Format code with Prettier |
| `npm run test` | Run Cypress tests |
| `npm run test:ci` | Run tests in CI mode |

---

## Development Workflow

### Branch Strategy

```
main              # Production-ready code
├── develop       # Integration branch
│   ├── feature/* # New features
│   ├── fix/*     # Bug fixes
│   ├── refactor/*# Refactoring
│   └── docs/*    # Documentation updates
```

### Creating a Branch

```bash
# Feature
git checkout -b feature/button-loading-state

# Bug fix
git checkout -b fix/card-overflow-issue

# Refactor
git checkout -b refactor/form-validation

# Documentation
git checkout -b docs/update-readme
```

### Workflow Steps

1. **Create branch** from `develop`
2. **Make changes** following code standards
3. **Write tests** for new functionality
4. **Update documentation** if needed
5. **Run checks** (`npm run lint && npm run test`)
6. **Commit** using conventional commits
7. **Push** and create pull request

---

## Code Standards

### TypeScript

- Use strict TypeScript (`strict: true`)
- Define explicit types for all props
- Avoid `any` - use `unknown` if type is truly unknown
- Export component interfaces

```typescript
// Good
export interface ButtonProps {
  color?: 'red' | 'grey' | 'dark-grey'
  isDisabled?: boolean
  children: React.ReactNode
}

// Bad
export interface ButtonProps {
  color?: string
  isDisabled?: any
  children: any
}
```

### ESLint

Configuration enforces:
- React hooks rules
- TypeScript best practices
- Import ordering
- Accessibility rules

```bash
# Check linting
npm run lint

# Fix auto-fixable issues
npm run lint -- --fix
```

### Prettier

Code formatting is automated:

```json
{
  "trailingComma": "all",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true,
  "printWidth": 120
}
```

```bash
# Format all files
npm run prettier

# Check formatting
npm run prettier -- --check
```

### File Naming

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `Button.tsx` |
| Stories | PascalCase + .stories | `Button.stories.tsx` |
| Styles | PascalCase + .css | `Button.css` or `styles.css` |
| Hooks | camelCase with use prefix | `usePagination.ts` |
| Utilities | camelCase | `propClasses.tsx` |
| Types | PascalCase | `ButtonTypes.ts` |

---

## Component Guidelines

### Component Structure

```
ComponentName/
├── ComponentName.tsx         # Main component
├── ComponentName.stories.tsx # Storybook stories
├── styles.css                # Component styles
├── SubComponent.tsx          # Optional subcomponents
└── index.ts                  # Optional barrel export
```

### Component Template

```tsx
// ComponentName.tsx
import { ComponentPropsWithoutRef, forwardRef } from 'react'
import './styles.css'

export interface ComponentNameProps extends ComponentPropsWithoutRef<'div'> {
  /** Description of the variant prop */
  variant?: 'primary' | 'secondary'
  /** Description of the children prop */
  children: React.ReactNode
}

/**
 * ComponentName description.
 *
 * @example
 * <ComponentName variant="primary">Content</ComponentName>
 */
export const ComponentName = forwardRef<HTMLDivElement, ComponentNameProps>(
  ({ variant = 'primary', children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`cu-component-name cu-component-name--${variant} ${className || ''}`}
        data-testid="component-name"
        {...props}
      >
        {children}
      </div>
    )
  }
)

ComponentName.displayName = 'ComponentName'
```

### Props Guidelines

1. **Use descriptive names**
   ```typescript
   // Good
   isDisabled, hasIcon, showLabel

   // Bad
   disabled, icon, label
   ```

2. **Provide sensible defaults**
   ```typescript
   color = 'red'
   size = 'md'
   ```

3. **Use TypeScript unions for variants**
   ```typescript
   color?: 'red' | 'grey' | 'black'
   size?: 'sm' | 'md' | 'lg'
   ```

4. **Extend HTML element props**
   ```typescript
   interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
     // Custom props
   }
   ```

### Styling Guidelines

1. **Use CSS classes, not inline styles**
2. **Prefix classes with `cu-`**
3. **Use BEM-like naming**: `cu-component`, `cu-component--variant`, `cu-component__element`
4. **Support className prop** for customization
5. **Use CSS custom properties** for theming

```css
/* styles.css */
.cu-button {
  /* Base styles */
}

.cu-button--primary {
  background-color: var(--rds-color-primary);
}

.cu-button__icon {
  /* Icon styles */
}
```

### Accessibility

All components must:

- Support keyboard navigation
- Include proper ARIA attributes
- Have sufficient color contrast
- Work with screen readers
- Support reduced motion preferences

```tsx
<button
  aria-label={ariaLabel}
  aria-disabled={isDisabled}
  tabIndex={isDisabled ? -1 : 0}
>
  {children}
</button>
```

---

## Commit Conventions

### Conventional Commits

Format: `<type>: <description>`

### Commit Types

| Type | Description |
|------|-------------|
| `add` | New component or feature |
| `change` | Modification to existing code |
| `deprecate` | Deprecation notice |
| `doc` | Documentation updates |
| `fix` | Bug fixes |
| `finish` | Feature completion |
| `refactor` | Code refactoring |
| `release` | Release preparation |
| `revert` | Revert previous commit |
| `test` | Test-related changes |
| `upgrade` | Package upgrades |

### Examples

```bash
# New feature
git commit -m "add: Button loading state"

# Bug fix
git commit -m "fix: Card overflow on mobile"

# Documentation
git commit -m "doc: Update Button props documentation"

# Refactor
git commit -m "refactor: Simplify form validation logic"

# Dependency update
git commit -m "upgrade: Update React to 19.2"
```

### Commit Message Guidelines

- Use imperative mood ("Add feature" not "Added feature")
- Keep first line under 72 characters
- Reference issues when applicable
- Include context in body if needed

```bash
git commit -m "fix: Resolve Card image overflow issue

The Card component's figure element wasn't constraining
images properly on mobile viewports. Added max-width
and object-fit properties.

Fixes #123"
```

---

## Pull Request Process

### Before Creating PR

- [ ] Code follows style guidelines
- [ ] All tests pass
- [ ] Documentation is updated
- [ ] Storybook stories are added/updated
- [ ] No console errors or warnings
- [ ] Changes are rebased on latest develop

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] New feature
- [ ] Bug fix
- [ ] Refactor
- [ ] Documentation
- [ ] Other (describe)

## Related Issues
Fixes #123

## Testing
- [ ] Unit tests added/updated
- [ ] Storybook stories added/updated
- [ ] Manual testing completed

## Screenshots (if applicable)
[Add screenshots]

## Checklist
- [ ] Code follows project standards
- [ ] Self-reviewed code
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No breaking changes (or documented)
```

### Review Process

1. **Create PR** against `develop`
2. **Automated checks** run (lint, tests)
3. **Code review** by maintainer
4. **Address feedback** if needed
5. **Approval and merge**

### Merge Strategy

- Squash and merge for feature branches
- Keep commits atomic and meaningful
- Delete branch after merge

---

## Documentation

### Component Documentation

Every component needs:

1. **JSDoc comments** on the component
2. **Storybook stories** with all variants
3. **Props table** in Storybook
4. **Usage examples**

### Storybook Story Template

```typescript
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Primary button component for user actions.',
      },
    },
  },
  argTypes: {
    color: {
      description: 'Button color variant',
      control: 'select',
      options: ['red', 'grey', 'dark-grey', 'black', 'white'],
      table: {
        defaultValue: { summary: 'red' },
      },
    },
    isDisabled: {
      description: 'Disable button interactions',
      control: 'boolean',
    },
    children: {
      description: 'Button content',
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    color: 'red',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button color="red">Red</Button>
      <Button color="grey">Grey</Button>
      <Button color="dark-grey">Dark Grey</Button>
      <Button color="black">Black</Button>
      <Button color="white">White</Button>
    </div>
  ),
}
```

### Updating Documentation

When making changes:

1. Update component JSDoc
2. Update Storybook stories
3. Update relevant `/docs/*.md` files
4. Update README if needed

---

## Testing Requirements

### What to Test

- Component renders correctly
- All prop variants work
- User interactions function
- Accessibility requirements met
- Edge cases handled

### Test Coverage

| Component Type | Minimum Coverage |
|----------------|------------------|
| Critical (Button, Form) | 90% |
| Standard | 70% |
| Layout | 60% |

### Adding Tests

```typescript
// Button.cy.tsx
import { Button } from './Button'

describe('Button', () => {
  it('renders with default props', () => {
    cy.mount(<Button>Click Me</Button>)
    cy.get('[data-testid="rds-button"]')
      .should('exist')
      .should('contain', 'Click Me')
  })

  it('applies color variant', () => {
    cy.mount(<Button color="grey">Grey Button</Button>)
    cy.get('[data-testid="rds-button"]')
      .should('have.class', 'cu-button--grey')
  })

  it('handles click events', () => {
    const onClick = cy.stub().as('click')
    cy.mount(<Button onClick={onClick}>Click</Button>)
    cy.get('[data-testid="rds-button"]').click()
    cy.get('@click').should('have.been.called')
  })

  it('is disabled when isDisabled is true', () => {
    cy.mount(<Button isDisabled>Disabled</Button>)
    cy.get('[data-testid="rds-button"]').should('be.disabled')
  })
})
```

### Running Tests

```bash
# Open Cypress UI
npm run test

# Run headless (CI)
npm run test:ci
```

---

## Questions?

If you have questions:

1. Check existing documentation
2. Search closed issues/PRs
3. Ask in project discussions
4. Create an issue with `question` label

---

## Related Documentation

- [Architecture](./ARCHITECTURE.md) - System architecture
- [Components](./COMPONENTS.md) - Component catalog
- [Testing](./TESTING.md) - Testing guide
- [Styling](./STYLING.md) - CSS guidelines
