# Utilities and Helpers

This document covers the utility functions, helper classes, and hooks available in RDS.

## Table of Contents

- [Overview](#overview)
- [Prop Classes](#prop-classes)
- [Validation Schemas](#validation-schemas)
- [Custom Hooks](#custom-hooks)
- [Helper Functions](#helper-functions)
- [Asset Lists](#asset-lists)
- [Context Providers](#context-providers)

---

## Overview

RDS exports utilities via the `utils` namespace:

```tsx
import { utils } from '@carletonuniversity/rds'

// Access utility classes
const widthClass = utils.maxWidthClasses['7xl']
```

### File Locations

```
lib/
├── utils/
│   └── propClasses.tsx      # CSS class mappings
├── helpers/
│   ├── functions.js         # Helper functions
│   ├── optionClasses.tsx    # Option styling
│   ├── fileUploadValidationSchema.tsx
│   └── imageUploadValidationSchema.tsx
└── hooks/
    ├── usePagination.ts
    ├── useSortableTable.tsx
    └── useVideoBanner.tsx
```

---

## Prop Classes

### Max Width Classes

Control maximum width of containers:

```tsx
import { utils } from '@carletonuniversity/rds'

export const maxWidthClasses = {
  narrow: 'max-w-2xl',    // 672px
  small: 'max-w-3xl',     // 768px
  base: 'max-w-4xl',      // 896px
  large: 'max-w-5xl',     // 1024px
  full: 'max-w-full',     // 100%
  '7xl': 'max-w-7xl',     // 1280px
}

// Usage
<div className={utils.maxWidthClasses['7xl']}>
  Content with max width
</div>
```

### Small Width Classes

Narrower width constraints:

```tsx
export const smallWidthClasses = {
  xs: 'max-w-xs',     // 320px
  sm: 'max-w-sm',     // 384px
  md: 'max-w-md',     // 448px
  lg: 'max-w-lg',     // 512px
  xl: 'max-w-xl',     // 576px
  '2xl': 'max-w-2xl', // 672px
}
```

### Grid Column Classes

Grid layout utilities:

```tsx
export const gridColumnClasses = {
  '1': 'grid-cols-1',
  '2': 'grid-cols-2',
  '3': 'grid-cols-3',
  '4': 'grid-cols-4',
  '6': 'grid-cols-6',
  '12': 'grid-cols-12',
}

// Usage
<div className={`grid ${utils.gridColumnClasses['3']} gap-4`}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Grid Gap Classes

Spacing between grid items:

```tsx
export const gridGapClasses = {
  none: 'gap-0',
  sm: 'gap-2',    // 8px
  md: 'gap-4',    // 16px
  lg: 'gap-6',    // 24px
  xl: 'gap-8',    // 32px
}
```

### Margin Auto Classes

Centering and alignment:

```tsx
export const marginAutoClasses = {
  auto: 'mx-auto',
  left: 'mr-auto',
  right: 'ml-auto',
  none: '',
}
```

### Flex Direction Classes

Flexbox layouts:

```tsx
export const flexColClasses = {
  col: 'flex-col',
  'col-reverse': 'flex-col-reverse',
}

export const flexRowClasses = {
  row: 'flex-row',
  'row-reverse': 'flex-row-reverse',
}
```

### Grid Span Classes

Column and row spanning:

```tsx
export const colSpanClasses = {
  '1': 'col-span-1',
  '2': 'col-span-2',
  '3': 'col-span-3',
  '4': 'col-span-4',
  '6': 'col-span-6',
  '12': 'col-span-12',
  full: 'col-span-full',
}

export const rowSpanClasses = {
  '1': 'row-span-1',
  '2': 'row-span-2',
  '3': 'row-span-3',
  '4': 'row-span-4',
  '6': 'row-span-6',
  full: 'row-span-full',
}
```

### Aspect Ratio Classes

Image and video aspect ratios:

```tsx
export const aspectRatioClasses = {
  square: 'aspect-square',    // 1:1
  landscape: 'aspect-video',  // 16:9
  portrait: 'aspect-[3/4]',   // 3:4
  wide: 'aspect-[21/9]',      // 21:9
}

// Usage
<div className={utils.aspectRatioClasses.landscape}>
  <img src="/image.jpg" className="object-cover w-full h-full" />
</div>
```

### Header Size Classes

Responsive heading sizes:

```tsx
export const headerSizeClasses = {
  xs: 'text-lg md:text-xl',
  sm: 'text-xl md:text-2xl',
  md: 'text-2xl md:text-3xl',
  lg: 'text-3xl md:text-4xl',
  xl: 'text-4xl md:text-5xl',
}
```

### Text Color Classes

Text color options:

```tsx
export const textColorClasses = {
  black: 'text-black',
  white: 'text-white',
  red: 'text-cu-red',
  grey: 'text-gray-600',
  'dark-grey': 'text-gray-800',
}
```

### Alignment Classes

Flex alignment:

```tsx
export const justifyContentClasses = {
  start: 'justify-start',
  end: 'justify-end',
  center: 'justify-center',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
}

export const alignItemsClasses = {
  start: 'items-start',
  end: 'items-end',
  center: 'items-center',
  baseline: 'items-baseline',
  stretch: 'items-stretch',
}
```

### Figure Classes

Image figure sizing and alignment:

```tsx
export const figureSizeClasses = {
  xs: 'w-16',
  sm: 'w-24',
  md: 'w-32',
  lg: 'w-48',
  xl: 'w-64',
  full: 'w-full',
}

export const figureAlignClasses = {
  left: 'float-left mr-4',
  right: 'float-right ml-4',
  center: 'mx-auto',
  none: '',
}
```

### Background Opacity Classes

Overlay opacity levels:

```tsx
export const bgOpacityClasses = {
  0: 'bg-opacity-0',
  10: 'bg-opacity-10',
  20: 'bg-opacity-20',
  30: 'bg-opacity-30',
  40: 'bg-opacity-40',
  50: 'bg-opacity-50',
  60: 'bg-opacity-60',
  70: 'bg-opacity-70',
  80: 'bg-opacity-80',
  90: 'bg-opacity-90',
  100: 'bg-opacity-100',
}
```

### Border Classes

Border styling:

```tsx
export const borderRadiusClasses = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  full: 'rounded-full',
}

export const borderWidthClasses = {
  0: 'border-0',
  1: 'border',
  2: 'border-2',
  4: 'border-4',
  8: 'border-8',
}

export const borderColorClasses = {
  transparent: 'border-transparent',
  black: 'border-black',
  white: 'border-white',
  grey: 'border-gray-300',
  red: 'border-cu-red',
}
```

### Icon Size Classes

Icon dimensions:

```tsx
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

// Usage
<Icon icon="fa-solid fa-check" className={utils.iconSizeClasses[6]} />
```

---

## Validation Schemas

### File Upload Validation

```tsx
import * as Yup from 'yup'

// lib/helpers/fileUploadValidationSchema.tsx
export const fileUploadValidationSchema = (options = {}) => {
  const {
    maxSize = 5242880, // 5MB default
    allowedTypes = [],
    required = false,
  } = options

  let schema = Yup.mixed()

  if (required) {
    schema = schema.required('File is required')
  }

  schema = schema.test('fileSize', 'File is too large', (value) => {
    if (!value) return true
    return value.size <= maxSize
  })

  if (allowedTypes.length > 0) {
    schema = schema.test('fileType', 'Invalid file type', (value) => {
      if (!value) return true
      return allowedTypes.includes(value.type)
    })
  }

  return schema
}

// Usage
const validationSchema = Yup.object({
  document: fileUploadValidationSchema({
    maxSize: 10485760, // 10MB
    allowedTypes: ['application/pdf', 'application/msword'],
    required: true,
  }),
})
```

### Image Upload Validation

```tsx
// lib/helpers/imageUploadValidationSchema.tsx
export const imageUploadValidationSchema = (options = {}) => {
  const {
    maxSize = 2097152, // 2MB default
    minWidth = 0,
    minHeight = 0,
    maxWidth = Infinity,
    maxHeight = Infinity,
    required = false,
  } = options

  return Yup.mixed()
    .test('required', 'Image is required', (value) => {
      if (!required) return true
      return !!value
    })
    .test('fileSize', 'Image is too large', (value) => {
      if (!value) return true
      return value.size <= maxSize
    })
    .test('fileType', 'Only images are allowed', (value) => {
      if (!value) return true
      return value.type.startsWith('image/')
    })
    .test('dimensions', 'Invalid image dimensions', async (value) => {
      if (!value) return true

      return new Promise((resolve) => {
        const img = new Image()
        img.onload = () => {
          const valid =
            img.width >= minWidth &&
            img.height >= minHeight &&
            img.width <= maxWidth &&
            img.height <= maxHeight
          resolve(valid)
        }
        img.onerror = () => resolve(false)
        img.src = URL.createObjectURL(value)
      })
    })
}

// Usage
const validationSchema = Yup.object({
  avatar: imageUploadValidationSchema({
    maxSize: 1048576, // 1MB
    minWidth: 200,
    minHeight: 200,
  }),
})
```

---

## Custom Hooks

### usePagination

Pagination logic hook:

```tsx
import { usePagination } from '@carletonuniversity/rds'

function PaginatedList({ items, itemsPerPage = 10 }) {
  const {
    currentPage,
    totalPages,
    paginatedItems,
    goToPage,
    nextPage,
    prevPage,
    hasNextPage,
    hasPrevPage,
  } = usePagination(items, itemsPerPage)

  return (
    <div>
      {paginatedItems.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}

      <div className="pagination">
        <button onClick={prevPage} disabled={!hasPrevPage}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={nextPage} disabled={!hasNextPage}>
          Next
        </button>
      </div>
    </div>
  )
}
```

**Return Values:**
| Property | Type | Description |
|----------|------|-------------|
| `currentPage` | `number` | Current page number (1-indexed) |
| `totalPages` | `number` | Total number of pages |
| `paginatedItems` | `T[]` | Items for current page |
| `goToPage` | `(page: number) => void` | Navigate to specific page |
| `nextPage` | `() => void` | Go to next page |
| `prevPage` | `() => void` | Go to previous page |
| `hasNextPage` | `boolean` | Has more pages after current |
| `hasPrevPage` | `boolean` | Has pages before current |

### useSortableTable

Table sorting logic:

```tsx
import { useSortableTable } from '@carletonuniversity/rds'

function SortableTable({ data, columns }) {
  const { sortedData, sortConfig, requestSort, getSortDirection } =
    useSortableTable(data)

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.key}
              onClick={() => requestSort(column.key)}
              className={getSortDirection(column.key)}
            >
              {column.label}
              {sortConfig.key === column.key && (
                <span>{sortConfig.direction === 'asc' ? '▲' : '▼'}</span>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row) => (
          <tr key={row.id}>
            {columns.map((column) => (
              <td key={column.key}>{row[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
```

**Return Values:**
| Property | Type | Description |
|----------|------|-------------|
| `sortedData` | `T[]` | Data sorted by current config |
| `sortConfig` | `{ key: string, direction: 'asc' \| 'desc' }` | Current sort state |
| `requestSort` | `(key: string) => void` | Toggle sort on column |
| `getSortDirection` | `(key: string) => string` | Get CSS class for column |

### useVideoBanner

Video banner management:

```tsx
import { useVideoBanner } from '@carletonuniversity/rds'

function HeroBanner({ videoSrc, imageSrc }) {
  const {
    isVideoLoaded,
    isVideoPlaying,
    videoRef,
    playVideo,
    pauseVideo,
    toggleVideo,
  } = useVideoBanner()

  return (
    <div className="relative">
      {/* Fallback image */}
      <img
        src={imageSrc}
        className={isVideoLoaded ? 'hidden' : 'block'}
        alt=""
      />

      {/* Video */}
      <video
        ref={videoRef}
        src={videoSrc}
        className={isVideoLoaded ? 'block' : 'hidden'}
        muted
        loop
        playsInline
      />

      <button onClick={toggleVideo}>
        {isVideoPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  )
}
```

**Return Values:**
| Property | Type | Description |
|----------|------|-------------|
| `isVideoLoaded` | `boolean` | Video has loaded |
| `isVideoPlaying` | `boolean` | Video is currently playing |
| `videoRef` | `RefObject<HTMLVideoElement>` | Ref to attach to video |
| `playVideo` | `() => void` | Start playing |
| `pauseVideo` | `() => void` | Pause playback |
| `toggleVideo` | `() => void` | Toggle play/pause |

---

## Helper Functions

### Option Classes

Styling for select options:

```tsx
// lib/helpers/optionClasses.tsx
export const optionClasses = {
  // React Select customization
  control: (state) => ({
    ...baseControlStyles,
    borderColor: state.isFocused ? '#bf112b' : '#d1d5db',
  }),
  option: (state) => ({
    ...baseOptionStyles,
    backgroundColor: state.isSelected ? '#bf112b' : 'white',
    color: state.isSelected ? 'white' : '#374151',
  }),
  // ... more customizations
}
```

### General Functions

```tsx
// lib/helpers/functions.js

// Format date for display
export function formatDate(date, format = 'MMM d, yyyy') {
  // Implementation using date-fns
}

// Sanitize HTML content
export function sanitizeHtml(html) {
  // Implementation using DOMPurify
}

// Generate unique ID
export function generateId(prefix = 'rds') {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
}

// Debounce function
export function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Truncate text
export function truncateText(text, maxLength, suffix = '...') {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength - suffix.length) + suffix
}
```

---

## Asset Lists

### Icon Names

Available Font Awesome icons:

```tsx
import { iconNames } from '@carletonuniversity/rds'

// iconNames is an array of available icon class names
// ['fa-solid fa-check', 'fa-solid fa-times', 'fa-brands fa-github', ...]

function IconPicker({ value, onChange }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {iconNames.map((icon) => (
        <option key={icon} value={icon}>
          {icon}
        </option>
      ))}
    </select>
  )
}
```

### Background Image Names

Available background images:

```tsx
import { bgImageNames } from '@carletonuniversity/rds'

// bgImageNames is an array of background image file names
// ['pattern-1.svg', 'pattern-2.svg', 'gradient-1.jpg', ...]

function BackgroundPicker({ value, onChange }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {bgImageNames.map((bg) => (
        <option key={bg} value={bg}>
          {bg}
        </option>
      ))}
    </select>
  )
}
```

### Video Lists

Available video resources:

```tsx
import { videoBanner, videoSplash } from '@carletonuniversity/rds'

// videoBanner - list of banner video options
// videoSplash - list of splash/hero video options
```

---

## Context Providers

### LinkProvider

Customize link component across all RDS components:

```tsx
import { LinkProvider } from '@carletonuniversity/rds'
import Link from 'next/link'

// Use Next.js Link component
function App({ children }) {
  return (
    <LinkProvider value={Link}>
      {children}
    </LinkProvider>
  )
}

// Use React Router Link
import { Link as RouterLink } from 'react-router-dom'

function App({ children }) {
  return (
    <LinkProvider value={RouterLink}>
      {children}
    </LinkProvider>
  )
}
```

### useLinkContext

Access link component in custom components:

```tsx
import { useLinkContext } from '@carletonuniversity/rds'

function MyComponent({ href, children }) {
  const Link = useLinkContext()

  return (
    <Link href={href} className="my-link">
      {children}
    </Link>
  )
}
```

---

## Usage Examples

### Building a Responsive Card Grid

```tsx
import { utils, Card, Column } from '@carletonuniversity/rds'

function CardGrid({ cards, columns = '3', gap = 'lg' }) {
  return (
    <div className={utils.maxWidthClasses['7xl']}>
      <Column cols={columns} gap={gap}>
        {cards.map((card) => (
          <Card key={card.id}>
            <Card.Figure className={utils.aspectRatioClasses.landscape}>
              <img src={card.image} alt={card.title} />
            </Card.Figure>
            <Card.Body>
              <Card.Header
                title={card.title}
                className={utils.headerSizeClasses.sm}
              />
              <Card.Excerpt text={card.excerpt} />
            </Card.Body>
          </Card>
        ))}
      </Column>
    </div>
  )
}
```

### Form with Validation

```tsx
import { Form, Input, FileUpload } from '@carletonuniversity/rds'
import { fileUploadValidationSchema } from '@carletonuniversity/rds'
import * as Yup from 'yup'

const schema = Yup.object({
  name: Yup.string().required('Name is required'),
  document: fileUploadValidationSchema({
    maxSize: 5242880,
    allowedTypes: ['application/pdf'],
    required: true,
  }),
})

function ApplicationForm() {
  return (
    <Form
      initialValues={{ name: '', document: null }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form.Field name="name" label="Name" required>
        <Input name="name" />
      </Form.Field>

      <Form.Field name="document" label="Upload PDF" required>
        <FileUpload name="document" accept=".pdf" />
      </Form.Field>

      <Form.Button type="submit">Submit</Form.Button>
    </Form>
  )
}
```

### Paginated List

```tsx
import { usePagination, Listing, Pagination } from '@carletonuniversity/rds'

function NewsList({ news }) {
  const {
    currentPage,
    totalPages,
    paginatedItems,
    goToPage,
  } = usePagination(news, 10)

  return (
    <div>
      {paginatedItems.map((item) => (
        <Listing key={item.id}>
          <Listing.Header title={item.title} />
          <Listing.Excerpt text={item.excerpt} />
        </Listing>
      ))}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={goToPage}
      />
    </div>
  )
}
```

---

## Related Documentation

- [Components](./COMPONENTS.md) - Component catalog
- [Forms](./FORMS.md) - Form system
- [Styling](./STYLING.md) - CSS utilities
