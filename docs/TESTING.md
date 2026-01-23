# Testing Guide

This document covers testing practices for RDS components using Cypress and Storybook.

## Table of Contents

- [Overview](#overview)
- [Test Stack](#test-stack)
- [Running Tests](#running-tests)
- [Cypress Testing](#cypress-testing)
- [Storybook Testing](#storybook-testing)
- [Writing Tests](#writing-tests)
- [Testing Patterns](#testing-patterns)
- [Accessibility Testing](#accessibility-testing)
- [CI/CD Integration](#cicd-integration)
- [Best Practices](#best-practices)

---

## Overview

RDS uses a multi-layered testing approach:

1. **Storybook** - Visual component documentation and interactive testing
2. **Cypress** - E2E and component testing
3. **TypeScript** - Static type checking

### Coverage Goals

| Category | Coverage Target |
|----------|-----------------|
| Critical components | 90%+ |
| Form components | 85%+ |
| Layout components | 70%+ |
| Utility functions | 95%+ |

---

## Test Stack

### Dependencies

```json
{
  "devDependencies": {
    "@storybook/react": "^8.6.14",
    "@storybook/addon-a11y": "^8.6.14",
    "@storybook/addon-interactions": "^8.6.14",
    "@storybook/test": "^8.6.14",
    "cypress": "^15.8.1",
    "@testing-library/cypress": "^10.0.0"
  }
}
```

### Configuration Files

| File | Purpose |
|------|---------|
| `cypress.config.ts` | Cypress configuration |
| `.storybook/main.ts` | Storybook configuration |
| `.storybook/preview.ts` | Storybook preview settings |

---

## Running Tests

### Development Commands

```bash
# Start Storybook (required for Cypress)
npm run storybook

# Open Cypress test runner
npm run test

# Run Cypress headless
npm run test:ci

# Build Storybook for deployment
npm run build:storybook
```

### Test Scripts

```json
{
  "scripts": {
    "storybook": "storybook dev -p 6006",
    "build:storybook": "storybook build",
    "test": "concurrently \"npm run storybook --quiet --ci -p 6006\" \"npx cypress open\"",
    "test:ci": "concurrently \"npm run storybook --quiet --ci -p 6006\" \"npx cypress run --headless\""
  }
}
```

---

## Cypress Testing

### Configuration

`cypress.config.ts`:

```typescript
import { defineConfig } from 'cypress'

export default defineConfig({
  viewportWidth: 1280,
  viewportHeight: 800,
  video: false,
  screenshotOnRunFailure: true,

  e2e: {
    baseUrl: 'http://localhost:6006',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.ts',
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}',
  },
})
```

### Directory Structure

```
cypress/
├── e2e/
│   ├── button.cy.ts
│   ├── card.cy.ts
│   ├── form.cy.ts
│   └── navigation.cy.ts
├── component/
│   ├── Button.cy.tsx
│   └── Card.cy.tsx
├── fixtures/
│   └── test-data.json
├── support/
│   ├── commands.ts
│   ├── e2e.ts
│   └── component.ts
└── downloads/
```

### E2E Test Example

```typescript
// cypress/e2e/button.cy.ts
describe('Button Component', () => {
  beforeEach(() => {
    // Navigate to Storybook
    cy.visit('/iframe.html?id=components-button--primary')
  })

  it('renders with correct text', () => {
    cy.get('button').should('contain', 'Button')
  })

  it('has correct color class', () => {
    cy.get('button').should('have.class', 'bg-cu-red')
  })

  it('is clickable', () => {
    cy.get('button').click()
    // Verify action was triggered
  })

  it('can be disabled', () => {
    cy.visit('/iframe.html?id=components-button--disabled')
    cy.get('button').should('be.disabled')
  })
})
```

### Component Test Example

```typescript
// cypress/component/Button.cy.tsx
import { Button } from '../../lib/components/Button/Button'

describe('Button Component', () => {
  it('renders with default props', () => {
    cy.mount(<Button>Click Me</Button>)
    cy.get('button').should('contain', 'Click Me')
  })

  it('applies color variant', () => {
    cy.mount(<Button color="grey">Grey Button</Button>)
    cy.get('button').should('have.class', 'bg-gray-200')
  })

  it('handles click events', () => {
    const onClick = cy.stub().as('clickHandler')
    cy.mount(<Button onClick={onClick}>Click</Button>)

    cy.get('button').click()
    cy.get('@clickHandler').should('have.been.calledOnce')
  })

  it('renders as disabled', () => {
    cy.mount(<Button isDisabled>Disabled</Button>)
    cy.get('button')
      .should('be.disabled')
      .should('have.class', 'opacity-50')
  })
})
```

### Custom Commands

```typescript
// cypress/support/commands.ts
import '@testing-library/cypress/add-commands'

declare global {
  namespace Cypress {
    interface Chainable {
      visitStory(storyId: string): Chainable<void>
      getByTestId(testId: string): Chainable<JQuery<HTMLElement>>
    }
  }
}

// Visit a Storybook story
Cypress.Commands.add('visitStory', (storyId: string) => {
  cy.visit(`/iframe.html?id=${storyId}`)
})

// Get element by data-testid
Cypress.Commands.add('getByTestId', (testId: string) => {
  return cy.get(`[data-testid="${testId}"]`)
})
```

---

## Storybook Testing

### Story Structure

```typescript
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['red', 'grey', 'dark-grey', 'black', 'white'],
    },
    isSmall: { control: 'boolean' },
    isFull: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Button>

// Default story
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    color: 'red',
  },
}

// Variant stories
export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    color: 'grey',
  },
}

export const Small: Story = {
  args: {
    children: 'Small Button',
    isSmall: true,
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    isDisabled: true,
  },
}

// Interactive test
export const ClickTest: Story = {
  args: {
    children: 'Click Me',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')

    // Verify initial state
    await expect(button).toBeInTheDocument()

    // Simulate click
    await userEvent.click(button)

    // Verify click was registered
    await expect(button).toHaveFocus()
  },
}

// Form submission test
export const FormSubmit: Story = {
  render: () => (
    <form onSubmit={(e) => e.preventDefault()}>
      <Button type="submit">Submit</Button>
    </form>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')

    await userEvent.click(button)
  },
}
```

### Interaction Testing

```typescript
// Card.stories.tsx
import { within, userEvent, expect } from '@storybook/test'

export const InteractiveCard: Story = {
  render: () => (
    <Card>
      <Card.Body>
        <Card.Header title="Interactive Card" />
        <Card.Content>
          <button data-testid="card-button">Click Me</button>
        </Card.Content>
      </Card.Body>
    </Card>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Find and click button
    const button = canvas.getByTestId('card-button')
    await userEvent.click(button)

    // Verify interaction
    await expect(button).toHaveFocus()
  },
}
```

### Accessibility Testing

```typescript
// Storybook automatically runs a11y checks with addon-a11y
// Configure in .storybook/preview.ts

export const parameters = {
  a11y: {
    // Axe configuration
    config: {
      rules: [
        { id: 'color-contrast', enabled: true },
        { id: 'label', enabled: true },
        { id: 'button-name', enabled: true },
      ],
    },
    // Elements to check
    element: '#storybook-root',
    // Manual run mode (vs automatic)
    manual: false,
  },
}
```

---

## Writing Tests

### Component Test Checklist

For each component, test:

- [ ] Renders without errors
- [ ] Displays correct content
- [ ] Applies correct CSS classes
- [ ] Handles all prop variants
- [ ] Responds to user interactions
- [ ] Handles edge cases (empty, null, undefined)
- [ ] Accessible (keyboard, screen reader)

### Test Template

```typescript
// ComponentName.cy.tsx
import { ComponentName } from './ComponentName'

describe('ComponentName', () => {
  // Rendering tests
  describe('Rendering', () => {
    it('renders without errors', () => {
      cy.mount(<ComponentName />)
      cy.get('[data-testid="component-name"]').should('exist')
    })

    it('displays provided content', () => {
      cy.mount(<ComponentName>Content</ComponentName>)
      cy.get('[data-testid="component-name"]').should('contain', 'Content')
    })
  })

  // Props tests
  describe('Props', () => {
    it('applies variant prop correctly', () => {
      cy.mount(<ComponentName variant="secondary" />)
      cy.get('[data-testid="component-name"]')
        .should('have.class', 'variant-secondary')
    })

    it('handles disabled state', () => {
      cy.mount(<ComponentName disabled />)
      cy.get('[data-testid="component-name"]')
        .should('have.attr', 'disabled')
    })
  })

  // Interaction tests
  describe('Interactions', () => {
    it('calls onClick when clicked', () => {
      const onClick = cy.stub().as('click')
      cy.mount(<ComponentName onClick={onClick} />)

      cy.get('[data-testid="component-name"]').click()
      cy.get('@click').should('have.been.called')
    })

    it('supports keyboard navigation', () => {
      cy.mount(<ComponentName />)
      cy.get('[data-testid="component-name"]')
        .focus()
        .type('{enter}')
    })
  })

  // Edge cases
  describe('Edge Cases', () => {
    it('handles empty content', () => {
      cy.mount(<ComponentName>{null}</ComponentName>)
      cy.get('[data-testid="component-name"]').should('exist')
    })

    it('handles long content', () => {
      const longText = 'A'.repeat(1000)
      cy.mount(<ComponentName>{longText}</ComponentName>)
      cy.get('[data-testid="component-name"]').should('exist')
    })
  })
})
```

---

## Testing Patterns

### Form Testing

```typescript
// Form.cy.tsx
import { Form, Input, Select } from '@carletonuniversity/rds'

describe('Form Component', () => {
  const initialValues = { email: '', category: '' }

  it('submits form with valid data', () => {
    const onSubmit = cy.stub().as('submit')

    cy.mount(
      <Form
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form.Field name="email" label="Email">
          <Input name="email" type="email" />
        </Form.Field>
        <Form.Button type="submit">Submit</Form.Button>
      </Form>
    )

    cy.get('input[name="email"]').type('test@example.com')
    cy.get('button[type="submit"]').click()

    cy.get('@submit').should('have.been.calledWith', {
      email: 'test@example.com',
      category: '',
    })
  })

  it('shows validation errors', () => {
    cy.mount(
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={cy.stub()}
      >
        <Form.Field name="email" label="Email">
          <Input name="email" type="email" />
        </Form.Field>
        <Form.Button type="submit">Submit</Form.Button>
      </Form>
    )

    cy.get('button[type="submit"]').click()
    cy.contains('Email is required').should('be.visible')
  })
})
```

### Async Testing

```typescript
// AsyncComponent.cy.tsx
describe('Async Component', () => {
  it('shows loading state', () => {
    cy.intercept('/api/data', { delay: 1000 }).as('getData')

    cy.mount(<AsyncComponent />)
    cy.get('[data-testid="loader"]').should('be.visible')

    cy.wait('@getData')
    cy.get('[data-testid="loader"]').should('not.exist')
    cy.get('[data-testid="content"]').should('be.visible')
  })

  it('handles error state', () => {
    cy.intercept('/api/data', { statusCode: 500 }).as('getData')

    cy.mount(<AsyncComponent />)
    cy.wait('@getData')

    cy.get('[data-testid="error"]').should('be.visible')
  })
})
```

### Modal Testing

```typescript
// Modal.cy.tsx
describe('Modal Component', () => {
  it('opens and closes', () => {
    cy.mount(
      <div>
        <button data-testid="open">Open Modal</button>
        <Modal isOpen={false} onClose={cy.stub()}>
          <p>Modal Content</p>
        </Modal>
      </div>
    )

    // Initially closed
    cy.get('[data-testid="modal"]').should('not.exist')

    // Open modal
    cy.get('[data-testid="open"]').click()
    cy.get('[data-testid="modal"]').should('be.visible')

    // Close with escape key
    cy.get('body').type('{esc}')
    cy.get('[data-testid="modal"]').should('not.exist')
  })

  it('traps focus within modal', () => {
    cy.mount(
      <Modal isOpen={true} onClose={cy.stub()}>
        <button>First</button>
        <button>Second</button>
        <button>Close</button>
      </Modal>
    )

    // Tab through elements
    cy.get('body').tab()
    cy.focused().should('contain', 'First')

    cy.get('body').tab()
    cy.focused().should('contain', 'Second')

    cy.get('body').tab()
    cy.focused().should('contain', 'Close')

    // Should wrap back to first
    cy.get('body').tab()
    cy.focused().should('contain', 'First')
  })
})
```

---

## Accessibility Testing

### Automated Checks

Storybook's a11y addon runs automated accessibility checks:

```typescript
// .storybook/preview.ts
export const parameters = {
  a11y: {
    config: {
      rules: [
        { id: 'color-contrast', enabled: true },
        { id: 'label', enabled: true },
        { id: 'button-name', enabled: true },
        { id: 'image-alt', enabled: true },
        { id: 'link-name', enabled: true },
        { id: 'heading-order', enabled: true },
      ],
    },
  },
}
```

### Manual Checks

```typescript
// Cypress a11y testing with axe
import 'cypress-axe'

describe('Accessibility', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-button--primary')
    cy.injectAxe()
  })

  it('has no accessibility violations', () => {
    cy.checkA11y()
  })

  it('has no critical violations', () => {
    cy.checkA11y(null, {
      includedImpacts: ['critical', 'serious'],
    })
  })
})
```

### Keyboard Navigation

```typescript
describe('Keyboard Navigation', () => {
  it('buttons are keyboard accessible', () => {
    cy.mount(<Button>Click Me</Button>)

    cy.get('button')
      .focus()
      .should('have.focus')
      .type('{enter}')
  })

  it('tab order is correct', () => {
    cy.mount(
      <div>
        <Button>First</Button>
        <Button>Second</Button>
        <Button>Third</Button>
      </div>
    )

    cy.get('body').tab()
    cy.focused().should('contain', 'First')

    cy.get('body').tab()
    cy.focused().should('contain', 'Second')

    cy.get('body').tab()
    cy.focused().should('contain', 'Third')
  })
})
```

---

## CI/CD Integration

### GitHub Actions

```yaml
# .github/workflows/test.yml
name: Test

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Run Cypress tests
        uses: cypress-io/github-action@v6
        with:
          start: npm run storybook -- --ci
          wait-on: 'http://localhost:6006'
          wait-on-timeout: 120

      - name: Upload test artifacts
        uses: actions/upload-artifact@v4
        if: failure()
        with:
          name: cypress-screenshots
          path: cypress/screenshots
```

### Test Reports

```typescript
// cypress.config.ts
export default defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },
})
```

---

## Best Practices

### 1. Test Behavior, Not Implementation

```typescript
// Good: Tests user-visible behavior
it('shows error when form is invalid', () => {
  cy.mount(<Form />)
  cy.get('button[type="submit"]').click()
  cy.contains('Required field').should('be.visible')
})

// Bad: Tests implementation details
it('sets error state to true', () => {
  // Testing internal state
})
```

### 2. Use Meaningful Test IDs

```tsx
// Good
<button data-testid="submit-form">Submit</button>

// Bad
<button data-testid="btn1">Submit</button>
```

### 3. Keep Tests Independent

```typescript
// Good: Each test is independent
describe('Button', () => {
  it('test 1', () => {
    cy.mount(<Button />)
    // ...
  })

  it('test 2', () => {
    cy.mount(<Button />)
    // ...
  })
})

// Bad: Tests depend on each other
```

### 4. Test Error States

```typescript
it('handles API error gracefully', () => {
  cy.intercept('/api/data', { statusCode: 500 })
  cy.mount(<DataComponent />)
  cy.contains('Something went wrong').should('be.visible')
})
```

### 5. Avoid Flaky Tests

```typescript
// Good: Wait for specific element
cy.get('[data-testid="loaded"]').should('be.visible')

// Bad: Arbitrary wait
cy.wait(1000)
```

### 6. Test Responsiveness

```typescript
describe('Responsive', () => {
  const viewports = ['iphone-6', 'ipad-2', [1280, 720]]

  viewports.forEach((viewport) => {
    it(`renders correctly on ${viewport}`, () => {
      cy.viewport(viewport)
      cy.mount(<Component />)
      cy.get('[data-testid="component"]').should('be.visible')
    })
  })
})
```

---

## Related Documentation

- [Components](./COMPONENTS.md) - Component catalog
- [Contributing](./CONTRIBUTING.md) - Contribution guidelines
- [Storybook Docs](https://storybook.js.org/docs)
- [Cypress Docs](https://docs.cypress.io)
