# Layout Components

Layout components provide structural elements for building page layouts. They handle responsive behavior, spacing, and content organization.

## Table of Contents

- [Overview](#overview)
- [Article](#article)
- [Aside](#aside)
- [Body](#body)
- [Column](#column)
- [FloatBox](#floatbox)
- [ImageCover](#imagecover)
- [Main](#main)
- [Section](#section)
- [StackedList](#stackedlist)
- [WideWave](#widewave)
- [Layout Patterns](#layout-patterns)

---

## Overview

Layout components wrap content and provide:

- **Responsive grid systems** - Adapt to different screen sizes
- **Max-width constraints** - Control content width
- **Spacing utilities** - Consistent padding and margins
- **Semantic HTML** - Proper document structure

### Import

```tsx
import {
  Article,
  Aside,
  Body,
  Column,
  FloatBox,
  ImageCover,
  Main,
  Section,
  StackedList,
  WideWave,
} from '@carletonuniversity/rds'
```

---

## Article

Wrapper for article content, providing proper semantic HTML and typography styles.

```tsx
import { Article } from '@carletonuniversity/rds'

<Article>
  <h1>Article Title</h1>
  <p>Article content with proper typography styling...</p>
</Article>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Article content |
| `className` | `string` | - | Additional CSS classes |

**Use Cases:**
- Blog posts
- News articles
- Documentation pages
- Long-form content

---

## Aside

Sidebar or complementary content area.

```tsx
import { Aside } from '@carletonuniversity/rds'

<div className="flex">
  <Main>
    <p>Main content</p>
  </Main>
  <Aside>
    <h3>Related Links</h3>
    <ul>
      <li><a href="#">Link 1</a></li>
      <li><a href="#">Link 2</a></li>
    </ul>
  </Aside>
</div>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Sidebar content |
| `position` | `'left' \| 'right'` | `'right'` | Sidebar position |
| `width` | `'narrow' \| 'wide'` | `'narrow'` | Sidebar width |
| `className` | `string` | - | Additional CSS classes |

**Use Cases:**
- Navigation sidebars
- Related content
- Filter panels
- Supplementary information

---

## Body

Page body wrapper that provides base styling and layout constraints.

```tsx
import { Body } from '@carletonuniversity/rds'

<Body>
  <Nav>...</Nav>
  <Main>...</Main>
  <Footer>...</Footer>
</Body>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Page content |
| `className` | `string` | - | Additional CSS classes |

**Use Cases:**
- Root layout wrapper
- Provides base typography
- Sets up CSS custom properties

---

## Column

Responsive grid column system for creating multi-column layouts.

```tsx
import { Column } from '@carletonuniversity/rds'

// Two columns
<Column cols="2">
  <div>Column 1</div>
  <div>Column 2</div>
</Column>

// Three columns with gap
<Column cols="3" gap="lg">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</Column>

// Responsive columns
<Column cols="1" md="2" lg="3">
  <div>Responsive columns</div>
  <div>Stack on mobile</div>
  <div>Grid on desktop</div>
</Column>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `cols` | `'1' \| '2' \| '3' \| '4' \| '6' \| '12'` | `'1'` | Number of columns |
| `sm` | `string` | - | Columns at sm breakpoint |
| `md` | `string` | - | Columns at md breakpoint |
| `lg` | `string` | - | Columns at lg breakpoint |
| `xl` | `string` | - | Columns at xl breakpoint |
| `gap` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Grid gap size |
| `children` | `ReactNode` | - | Column content |
| `className` | `string` | - | Additional CSS classes |

**Grid Gap Sizes:**
| Value | Size |
|-------|------|
| `none` | 0 |
| `sm` | 0.5rem (8px) |
| `md` | 1rem (16px) |
| `lg` | 1.5rem (24px) |
| `xl` | 2rem (32px) |

**Use Cases:**
- Card grids
- Feature lists
- Image galleries
- Multi-column text

---

## FloatBox

Floating content box that can be positioned within text content.

```tsx
import { FloatBox } from '@carletonuniversity/rds'

<Article>
  <p>Main article text...</p>

  <FloatBox position="right" width="sm">
    <img src="/sidebar-image.jpg" alt="Related" />
    <p>Image caption or sidebar content</p>
  </FloatBox>

  <p>Text wraps around the floating box...</p>
</Article>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `position` | `'left' \| 'right'` | `'right'` | Float direction |
| `width` | `'sm' \| 'md' \| 'lg'` | `'md'` | Box width |
| `children` | `ReactNode` | - | Box content |
| `className` | `string` | - | Additional CSS classes |

**Use Cases:**
- Pull quotes
- Sidebar images
- Related content boxes
- Quick facts

---

## ImageCover

Full-screen image background with overlay content.

```tsx
import { ImageCover } from '@carletonuniversity/rds'

<ImageCover
  src="/hero-image.jpg"
  alt="Hero background"
  overlay="dark"
>
  <h1>Hero Title</h1>
  <p>Hero description text</p>
  <Button>Call to Action</Button>
</ImageCover>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Background image URL |
| `alt` | `string` | - | Image alt text |
| `overlay` | `'none' \| 'light' \| 'dark'` | `'dark'` | Overlay style |
| `height` | `'full' \| 'half' \| 'auto'` | `'full'` | Section height |
| `position` | `'center' \| 'top' \| 'bottom'` | `'center'` | Content position |
| `children` | `ReactNode` | - | Overlay content |
| `className` | `string` | - | Additional CSS classes |

**Overlay Options:**
| Value | Effect |
|-------|--------|
| `none` | No overlay |
| `light` | White semi-transparent overlay |
| `dark` | Black semi-transparent overlay |

**Use Cases:**
- Hero sections
- Full-bleed images
- Landing pages
- Campaign pages

---

## Main

Main content area wrapper with semantic `<main>` element.

```tsx
import { Main } from '@carletonuniversity/rds'

<Body>
  <Nav>...</Nav>
  <Main>
    <Section>
      <h1>Page Title</h1>
      <p>Main page content</p>
    </Section>
  </Main>
  <Footer>...</Footer>
</Body>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Main content |
| `className` | `string` | - | Additional CSS classes |

**Use Cases:**
- Primary content wrapper
- Accessibility landmark
- Skip-link target

---

## Section

Content section with max-width constraints and spacing.

```tsx
import { Section } from '@carletonuniversity/rds'

// Default section
<Section>
  <h2>Section Title</h2>
  <p>Section content...</p>
</Section>

// Full width section
<Section maxWidth="full">
  <ImageGrid images={images} />
</Section>

// Narrow section
<Section maxWidth="narrow">
  <Article>
    <p>Narrow content for readability...</p>
  </Article>
</Section>

// With background
<Section bgColor="grey-50">
  <h2>Highlighted Section</h2>
</Section>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `maxWidth` | `'narrow' \| 'small' \| 'base' \| 'large' \| 'full' \| '7xl'` | `'7xl'` | Max width constraint |
| `bgColor` | `string` | - | Background color class |
| `padding` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Vertical padding |
| `children` | `ReactNode` | - | Section content |
| `className` | `string` | - | Additional CSS classes |

**Max Width Values:**
| Value | Width |
|-------|-------|
| `narrow` | 640px |
| `small` | 768px |
| `base` | 1024px |
| `large` | 1280px |
| `7xl` | 1536px |
| `full` | 100% |

**Use Cases:**
- Page sections
- Content containers
- Feature areas
- Alternating backgrounds

---

## StackedList

Vertical list layout with consistent spacing.

```tsx
import { StackedList } from '@carletonuniversity/rds'

<StackedList>
  <Listing>...</Listing>
  <Listing>...</Listing>
  <Listing>...</Listing>
</StackedList>

// With dividers
<StackedList hasDividers>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</StackedList>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `hasDividers` | `boolean` | `false` | Show dividers between items |
| `spacing` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Item spacing |
| `children` | `ReactNode` | - | List items |
| `className` | `string` | - | Additional CSS classes |

**Use Cases:**
- News listings
- Search results
- Event lists
- Feed displays

---

## WideWave

Wave decoration background layout for visual interest.

```tsx
import { WideWave } from '@carletonuniversity/rds'

<WideWave color="red" position="top">
  <Section>
    <h2>Featured Content</h2>
    <p>Content with wave decoration above</p>
  </Section>
</WideWave>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `'red' \| 'grey' \| 'white'` | `'red'` | Wave color |
| `position` | `'top' \| 'bottom' \| 'both'` | `'top'` | Wave position |
| `children` | `ReactNode` | - | Section content |
| `className` | `string` | - | Additional CSS classes |

**Use Cases:**
- Section dividers
- Call-to-action areas
- Visual breaks
- Brand elements

---

## Layout Patterns

### Basic Page Layout

```tsx
import { Body, Main, Section, Nav, FooterStandard } from '@carletonuniversity/rds'

function PageLayout({ children }) {
  return (
    <Body>
      <Nav>...</Nav>
      <Main>
        <Section>
          {children}
        </Section>
      </Main>
      <FooterStandard>...</FooterStandard>
    </Body>
  )
}
```

### Two-Column Layout

```tsx
import { Main, Section, Column, Aside } from '@carletonuniversity/rds'

function TwoColumnLayout({ content, sidebar }) {
  return (
    <Main>
      <Section>
        <div className="flex gap-8">
          <div className="flex-1">
            {content}
          </div>
          <Aside width="narrow">
            {sidebar}
          </Aside>
        </div>
      </Section>
    </Main>
  )
}
```

### Card Grid Layout

```tsx
import { Section, Column, Card } from '@carletonuniversity/rds'

function CardGrid({ cards }) {
  return (
    <Section>
      <Column cols="1" md="2" lg="3" gap="lg">
        {cards.map((card) => (
          <Card key={card.id}>
            <Card.Figure>
              <img src={card.image} alt={card.title} />
            </Card.Figure>
            <Card.Body>
              <Card.Header title={card.title} />
              <Card.Excerpt text={card.excerpt} />
            </Card.Body>
          </Card>
        ))}
      </Column>
    </Section>
  )
}
```

### Hero + Content Layout

```tsx
import { ImageCover, Section, Article } from '@carletonuniversity/rds'

function HeroPage({ hero, content }) {
  return (
    <>
      <ImageCover
        src={hero.image}
        alt={hero.alt}
        height="half"
      >
        <h1>{hero.title}</h1>
      </ImageCover>

      <Section maxWidth="narrow">
        <Article>
          {content}
        </Article>
      </Section>
    </>
  )
}
```

### Alternating Sections

```tsx
import { Section, WideWave, TextImage } from '@carletonuniversity/rds'

function AlternatingSections({ sections }) {
  return (
    <>
      {sections.map((section, index) => (
        <Section
          key={index}
          bgColor={index % 2 === 0 ? 'white' : 'grey-50'}
        >
          <TextImage
            title={section.title}
            content={section.content}
            image={section.image}
            imagePosition={index % 2 === 0 ? 'right' : 'left'}
          />
        </Section>
      ))}
    </>
  )
}
```

---

## Responsive Behavior

All layout components are responsive by default:

| Breakpoint | Width | Typical Use |
|------------|-------|-------------|
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

### Mobile-First Approach

Components use mobile-first responsive design:

```tsx
// Stacks on mobile, 2 columns on tablet, 3 on desktop
<Column cols="1" md="2" lg="3">
  ...
</Column>
```

---

## Accessibility

Layout components include:

- Semantic HTML elements (`<main>`, `<aside>`, `<article>`, `<section>`)
- Proper heading hierarchy support
- Skip-link compatibility
- Screen reader landmarks
- Keyboard navigation support

---

## Related Documentation

- [Components](./COMPONENTS.md) - UI components
- [Styling](./STYLING.md) - CSS and styling
- [Gutenberg Integration](./GUTENBERG.md) - WordPress blocks
