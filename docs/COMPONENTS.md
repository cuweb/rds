# Component Catalog

Complete reference for all RDS components organized by category.

## Table of Contents

- [Core UI Components](#core-ui-components)
- [Banner & Hero Components](#banner--hero-components)
- [Footer Components](#footer-components)
- [Navigation](#navigation)
- [Data Display](#data-display)
- [Feedback Components](#feedback-components)
- [Media Components](#media-components)
- [Skeleton Loaders](#skeleton-loaders)
- [Error Pages](#error-pages)

---

## Core UI Components

### Alert

Displays contextual feedback messages.

```tsx
import { Alert } from '@carletonuniversity/rds'

<Alert type="success" title="Success!">
  Your changes have been saved.
</Alert>

<Alert type="warning" title="Warning">
  Please review before continuing.
</Alert>

<Alert type="error" title="Error">
  Something went wrong.
</Alert>

<Alert type="info" title="Info">
  Here's some helpful information.
</Alert>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'success' \| 'warning' \| 'error' \| 'info'` | `'info'` | Alert style variant |
| `title` | `string` | - | Alert heading |
| `children` | `ReactNode` | - | Alert content |

---

### Avatar

User profile images with fallback support.

```tsx
import { Avatar } from '@carletonuniversity/rds'

<Avatar
  src="/user.jpg"
  alt="John Doe"
  size="md"
/>

// With initials fallback
<Avatar
  initials="JD"
  size="lg"
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Image URL |
| `alt` | `string` | - | Alt text |
| `initials` | `string` | - | Fallback initials |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Avatar size |

---

### Badge / BadgeGroup

Small status indicators and labels.

```tsx
import { Badge, BadgeGroup } from '@carletonuniversity/rds'

<Badge color="red">New</Badge>
<Badge color="grey">Draft</Badge>

<BadgeGroup>
  <Badge>Tag 1</Badge>
  <Badge>Tag 2</Badge>
  <Badge>Tag 3</Badge>
</BadgeGroup>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `'red' \| 'grey' \| 'green' \| 'blue'` | `'grey'` | Badge color |
| `children` | `ReactNode` | - | Badge content |

---

### Button / ButtonGroup

Interactive buttons with multiple variants.

```tsx
import { Button, ButtonGroup } from '@carletonuniversity/rds'

// Color variants
<Button color="red">Primary Action</Button>
<Button color="grey">Secondary</Button>
<Button color="dark-grey">Tertiary</Button>
<Button color="black">Dark</Button>
<Button color="white">Light</Button>

// Sizes and states
<Button isSmall>Small Button</Button>
<Button isFull>Full Width</Button>
<Button isDisabled>Disabled</Button>

// Button group
<ButtonGroup>
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `'red' \| 'grey' \| 'dark-grey' \| 'black' \| 'white'` | `'red'` | Button color |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Button type |
| `isSmall` | `boolean` | `false` | Small size variant |
| `isFull` | `boolean` | `false` | Full width |
| `isDisabled` | `boolean` | `false` | Disabled state |

---

### Card

Versatile card component with 14 subcomponents for flexible composition.

```tsx
import { Card } from '@carletonuniversity/rds'

// Basic card
<Card>
  <Card.Figure>
    <img src="/image.jpg" alt="Card image" />
  </Card.Figure>
  <Card.Body>
    <Card.Header title="Card Title" />
    <Card.Excerpt text="Brief description of the card content." />
    <Card.Footer>
      <Button>Learn More</Button>
    </Card.Footer>
  </Card.Body>
</Card>

// Event card with date thumbnail
<Card>
  <Card.DateThumb date="2024-03-15" />
  <Card.Body>
    <Card.Header title="Event Title" />
    <Card.EventMeta
      startDate="2024-03-15"
      endDate="2024-03-15"
      location="Room 101"
    />
  </Card.Body>
</Card>

// People card
<Card>
  <Card.Initials initials="JD" />
  <Card.Body>
    <Card.Header title="John Doe" />
    <Card.PeopleMeta
      jobTitle="Professor"
      department="Computer Science"
    />
  </Card.Body>
</Card>
```

**Subcomponents:**
| Component | Description |
|-----------|-------------|
| `Card.Figure` | Image container |
| `Card.ImageThumb` | Small image thumbnail |
| `Card.DateThumb` | Date display thumbnail |
| `Card.IconThumb` | Icon thumbnail |
| `Card.Initials` | Initials avatar |
| `Card.Video` | Video embed |
| `Card.Header` | Title and subtitle |
| `Card.Body` | Content wrapper |
| `Card.Content` | Main content area |
| `Card.Footer` | Footer actions |
| `Card.Excerpt` | Brief text excerpt |
| `Card.EventMeta` | Event metadata |
| `Card.PeopleMeta` | Person metadata |
| `Card.Stats` | Statistics display |

---

### Listing

List item component with similar structure to Card.

```tsx
import { Listing } from '@carletonuniversity/rds'

;<Listing>
  <Listing.Figure>
    <img src="/thumb.jpg" alt="" />
  </Listing.Figure>
  <Listing.Body>
    <Listing.Header title="List Item Title" />
    <Listing.Excerpt text="Description text" />
  </Listing.Body>
</Listing>
```

**Subcomponents:**
| Component | Description |
|-----------|-------------|
| `Listing.Figure` | Image container |
| `Listing.DateThumb` | Date thumbnail |
| `Listing.IconThumb` | Icon thumbnail |
| `Listing.Initials` | Initials avatar |
| `Listing.Header` | Title area |
| `Listing.Body` | Content wrapper |
| `Listing.Content` | Main content |
| `Listing.Footer` | Footer area |
| `Listing.Excerpt` | Text excerpt |
| `Listing.EventMeta` | Event metadata |
| `Listing.PeopleMeta` | Person metadata |

---

### Description

Descriptive text blocks, often used for definition lists.

```tsx
import { Description } from '@carletonuniversity/rds'

;<Description title="Term" content="Definition or explanation of the term." />
```

---

### Details

Expandable/collapsible content section.

```tsx
import { Details } from '@carletonuniversity/rds'

;<Details summary="Click to expand">
  <p>Hidden content revealed when expanded.</p>
</Details>
```

---

### Dialog / Modal

Overlay dialogs and modals.

```tsx
import { Dialog, Modal } from '@carletonuniversity/rds'

// Dialog
<Dialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Dialog Title"
>
  <p>Dialog content here.</p>
</Dialog>

// Modal
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
>
  <Modal.Header title="Modal Title" />
  <Modal.Body>
    <p>Modal content</p>
  </Modal.Body>
  <Modal.Footer>
    <Button onClick={() => setIsOpen(false)}>Close</Button>
  </Modal.Footer>
</Modal>
```

---

### Icon

Font Awesome icon wrapper.

```tsx
import { Icon } from '@carletonuniversity/rds'

<Icon icon="fa-solid fa-check" />
<Icon icon="fa-solid fa-times" size="lg" />
<Icon icon="fa-brands fa-github" />
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `string` | - | Font Awesome class |
| `size` | `number \| string` | - | Icon size (4-24) |

---

### Table

Data table with sorting support.

```tsx
import { Table } from '@carletonuniversity/rds'

;<Table>
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Name</Table.HeaderCell>
      <Table.HeaderCell>Email</Table.HeaderCell>
      <Table.HeaderCell>Role</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell>John Doe</Table.Cell>
      <Table.Cell>john@example.com</Table.Cell>
      <Table.Cell>Admin</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
```

---

### Pagination

Page navigation component.

```tsx
import { Pagination } from '@carletonuniversity/rds'

;<Pagination currentPage={1} totalPages={10} onPageChange={(page) => setCurrentPage(page)} />
```

---

### Calendar

Date selection calendar.

```tsx
import { Calendar } from '@carletonuniversity/rds'

;<Calendar selectedDate={selectedDate} onDateSelect={(date) => setSelectedDate(date)} />
```

---

## Banner & Hero Components

### Splash

Full-screen hero banner with video/image support.

```tsx
import { Splash } from '@carletonuniversity/rds'

;<Splash>
  <Splash.Background>
    <Splash.Video src="/hero-video.mp4" />
    {/* or */}
    <Splash.Image src="/hero.jpg" alt="Hero" />
  </Splash.Background>
  <Splash.Content>
    <h1>Welcome to RDS</h1>
    <p>Your component library</p>
    <Button>Get Started</Button>
  </Splash.Content>
</Splash>
```

**Subcomponents:**
| Component | Description |
|-----------|-------------|
| `Splash.Background` | Background container |
| `Splash.Video` | Background video |
| `Splash.Image` | Background image |
| `Splash.Content` | Overlay content |

---

### FullBanner / WideBanner

Full-width banner sections.

```tsx
import { FullBanner, WideBanner } from '@carletonuniversity/rds'

<FullBanner
  title="Banner Title"
  content="Banner description text"
  image="/banner.jpg"
/>

<WideBanner
  title="Wide Banner"
  alignment="left"
>
  <p>Custom content</p>
</WideBanner>
```

---

### WideImage

Full-width image section.

```tsx
import { WideImage } from '@carletonuniversity/rds'

;<WideImage src="/wide-image.jpg" alt="Description" caption="Image caption" />
```

---

### PageHeader

Page header with title and metadata.

```tsx
import { PageHeader } from '@carletonuniversity/rds'

;<PageHeader
  title="Page Title"
  subtitle="Page subtitle"
  breadcrumbs={[
    { label: 'Home', href: '/' },
    { label: 'Section', href: '/section' },
  ]}
/>
```

---

## Footer Components

### FooterBasic

Minimal footer with copyright.

```tsx
import { FooterBasic } from '@carletonuniversity/rds'

;<FooterBasic copyrightYear={2024} organization="Carleton University" />
```

### FooterStandard

Standard footer with navigation links.

```tsx
import { FooterStandard } from '@carletonuniversity/rds'

;<FooterStandard links={footerLinks} socialLinks={socialLinks} />
```

### FooterAthletics

Athletics-specific footer design.

### FooterCookie

Cookie consent footer.

### FooterLogoLinks

Footer with logos and links.

---

## Navigation

### Nav

Complex navigation component with responsive support.

```tsx
import { Nav } from '@carletonuniversity/rds'

;<Nav>
  <Nav.Top>
    <Nav.Logo src="/logo.svg" alt="Logo" />
    <Nav.Buttons>
      <Button>Login</Button>
    </Nav.Buttons>
  </Nav.Top>
  <Nav.Bottom>
    <Nav.Menu>
      <Nav.MenuItem href="/" label="Home" />
      <Nav.MenuItem href="/about" label="About">
        <Nav.SubMenu>
          <Nav.MenuItem href="/about/team" label="Team" />
          <Nav.MenuItem href="/about/history" label="History" />
        </Nav.SubMenu>
      </Nav.MenuItem>
    </Nav.Menu>
  </Nav.Bottom>
</Nav>
```

**Subcomponents:**
| Component | Description |
|-----------|-------------|
| `Nav.Top` | Top navigation bar |
| `Nav.Bottom` | Main navigation bar |
| `Nav.Aside` | Sidebar navigation |
| `Nav.Menu` | Menu container |
| `Nav.SubMenu` | Dropdown submenu |
| `Nav.MenuItem` | Menu item |
| `Nav.MenuItemWrapper` | Menu item wrapper |
| `Nav.Logo` | Logo component |
| `Nav.Buttons` | Button group |

---

## Data Display

### TextImage / TextMedia

Side-by-side text and media layouts.

```tsx
import { TextImage, TextMedia } from '@carletonuniversity/rds'

<TextImage
  title="Section Title"
  content="Description text"
  image="/image.jpg"
  imagePosition="right"
/>

<TextMedia
  title="Video Section"
  content="Watch our introduction"
  media={{ type: 'video', src: '/video.mp4' }}
/>
```

---

### Quote

Styled blockquotes.

```tsx
import { Quote } from '@carletonuniversity/rds'

;<Quote text="This is a quoted statement." author="John Doe" citation="Source Publication" />
```

---

### Testimonial

Testimonial/review blocks.

```tsx
import { Testimonial } from '@carletonuniversity/rds'

;<Testimonial quote="Great experience working with RDS!" author="Jane Smith" role="Developer" image="/jane.jpg" />
```

---

### Timeline

Event timeline visualization.

```tsx
import { Timeline } from '@carletonuniversity/rds'

;<Timeline
  items={[
    { date: '2024-01', title: 'Project Started', description: '...' },
    { date: '2024-03', title: 'Beta Release', description: '...' },
    { date: '2024-06', title: 'v1.0 Launch', description: '...' },
  ]}
/>
```

---

### FilterPanel

Filter sidebar for search results.

```tsx
import { FilterPanel } from '@carletonuniversity/rds'

;<FilterPanel
  filters={[
    {
      name: 'category',
      label: 'Category',
      options: [
        { value: 'news', label: 'News' },
        { value: 'events', label: 'Events' },
      ],
    },
  ]}
  onFilterChange={handleFilterChange}
/>
```

---

## Feedback Components

### Toast

Notification toasts.

```tsx
import { Toast } from '@carletonuniversity/rds'

;<Toast
  type="success"
  message="Action completed successfully!"
  isVisible={showToast}
  onClose={() => setShowToast(false)}
/>
```

---

### CallOut

Highlighted callout boxes.

```tsx
import { CallOut } from '@carletonuniversity/rds'

;<CallOut type="info" title="Note">
  Important information for the user.
</CallOut>
```

---

### Placeholder

Skeleton loading placeholders.

```tsx
import { Placeholder } from '@carletonuniversity/rds'

<Placeholder type="text" lines={3} />
<Placeholder type="image" aspectRatio="16:9" />
```

---

## Media Components

### Figure

Images with captions.

```tsx
import { Figure } from '@carletonuniversity/rds'

;<Figure src="/image.jpg" alt="Image description" caption="Figure 1: Image caption" />
```

---

### Embed

Embedded content (YouTube, Vimeo, HubSpot).

```tsx
import { Embed } from '@carletonuniversity/rds'

<Embed
  type="youtube"
  videoId="dQw4w9WgXcQ"
/>

<Embed
  type="vimeo"
  videoId="123456789"
/>
```

---

### ImageGrid

Grid layout for multiple images.

```tsx
import { ImageGrid } from '@carletonuniversity/rds'

;<ImageGrid
  images={[
    { src: '/img1.jpg', alt: 'Image 1' },
    { src: '/img2.jpg', alt: 'Image 2' },
    { src: '/img3.jpg', alt: 'Image 3' },
  ]}
  columns={3}
/>
```

---

### ImageSlider

Image carousel/slider.

```tsx
import { ImageSlider } from '@carletonuniversity/rds'

;<ImageSlider
  images={[
    { src: '/slide1.jpg', alt: 'Slide 1' },
    { src: '/slide2.jpg', alt: 'Slide 2' },
  ]}
  autoPlay
  interval={5000}
/>
```

---

## Skeleton Loaders

Pre-built loading states for components.

```tsx
import {
  CardEventLoader,
  CardNewsLoader,
  CardPeopleLoader,
  ListingEventLoader,
  PageHeaderLoader,
  TableLoader,
} from '@carletonuniversity/rds'

// Use while data is loading
{
  isLoading ? <CardNewsLoader /> : <Card>...</Card>
}
```

**Available Loaders:**

- `CardEventLoader`, `CardIconLoader`, `CardNewsLoader`, `CardPageLoader`, `CardPeopleLoader`, `CardVideoLoader`
- `ListingEventLoader`, `ListingIconLoader`, `ListingNewsLoader`, `ListingPageLoader`, `ListingPeopleLoader`, `ListingDescriptionLoader`
- `CalendarLoader`, `DescriptionLoader`, `DescriptionLoaderAccordion`
- `EventLoader`, `PageLoader`, `TopNavLoader`
- `PageHeaderLoader`, `PageHeaderEventLoader`, `PageHeaderPeopleLoader`
- `FormLoader`, `BlockLoader`, `ButtonLoader`, `TableLoader`, `PaginationLoader`

---

## Error Pages

### Forbidden403

403 Forbidden error page.

```tsx
import { Forbidden403 } from '@carletonuniversity/rds'

;<Forbidden403 message="You don't have permission to access this page." homeLink="/" />
```

### NotFound404

404 Not Found error page.

```tsx
import { NotFound404 } from '@carletonuniversity/rds'

;<NotFound404 message="The page you're looking for doesn't exist." homeLink="/" searchLink="/search" />
```

---

## Additional Components

### Login

Login form component.

### Location / LocationPicker

Location display and Google Maps picker.

### SearchInput

Search bar component.

### SocialIcons

Social media icon links.

### Carleton360

Custom Carleton University 360 viewer component.

---

## Component Development Notes

### Naming Conventions

- PascalCase for component names
- camelCase for props
- Prefix boolean props with `is`, `has`, or `should`

### File Structure

```
ComponentName/
├── ComponentName.tsx         # Main export
├── ComponentName.stories.tsx # Storybook
├── styles.css                # Scoped styles
└── SubComponent.tsx          # Subcomponents
```

### Testing Components

Each component should have:

1. Storybook stories covering all variants
2. Cypress tests for interactive behavior
3. Accessibility checks via Storybook a11y addon

See [TESTING.md](./TESTING.md) for testing guidelines.
