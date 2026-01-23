# Gutenberg Integration Guide

This guide covers how to use RDS components in WordPress Gutenberg blocks.

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Setting Up a Block](#setting-up-a-block)
- [Using RDS Components](#using-rds-components)
- [Styling Considerations](#styling-considerations)
- [Common Patterns](#common-patterns)
- [Block Examples](#block-examples)
- [Troubleshooting](#troubleshooting)
- [Best Practices](#best-practices)

---

## Overview

RDS powers over 70 custom Gutenberg blocks for Carleton University websites. The component library is designed to be consumed by WordPress block plugins.

### Integration Architecture

```
┌─────────────────────────────────────────────────────┐
│                    WordPress                         │
│  ┌───────────────────────────────────────────────┐  │
│  │              Gutenberg Editor                  │  │
│  │  ┌─────────────────────────────────────────┐  │  │
│  │  │         Custom Block Plugin              │  │  │
│  │  │  ┌─────────────────────────────────┐    │  │  │
│  │  │  │     RDS Components (React)       │    │  │  │
│  │  │  └─────────────────────────────────┘    │  │  │
│  │  └─────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────┐  │
│  │              Frontend (Theme)                  │  │
│  │  ┌─────────────────────────────────────────┐  │  │
│  │  │         RDS Styles (CSS)                 │  │  │
│  │  └─────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

### Key Concepts

1. **Editor View** - React components in the block editor
2. **Frontend View** - Rendered HTML on the public site
3. **Block Attributes** - Data stored in the block
4. **Block Controls** - Editor UI for configuring blocks

---

## Architecture

### Package Distribution

RDS is distributed via npm:

```bash
npm install @carletonuniversity/rds
```

### Export Formats

| Format | File | Use Case |
|--------|------|----------|
| ES Modules | `dist/rds.es.js` | Modern bundlers |
| UMD | `dist/rds.umd.js` | Script tags, older bundlers |
| CSS | `dist/style.css` | Styles |
| Types | `dist/main.d.ts` | TypeScript support |

### Block Plugin Structure

```
my-blocks-plugin/
├── src/
│   ├── blocks/
│   │   ├── alert/
│   │   │   ├── index.js        # Block registration
│   │   │   ├── edit.js         # Editor component
│   │   │   ├── save.js         # Save component (or null for dynamic)
│   │   │   └── block.json      # Block metadata
│   │   └── card/
│   │       └── ...
│   └── index.js                # Entry point
├── build/                      # Compiled assets
├── package.json
└── webpack.config.js           # or block.json build
```

---

## Setting Up a Block

### 1. Block Registration

`block.json`:
```json
{
  "$schema": "https://schemas.wp.org/trunk/block.json",
  "apiVersion": 3,
  "name": "cu/alert",
  "version": "1.0.0",
  "title": "Alert",
  "category": "cu-blocks",
  "icon": "warning",
  "description": "Display an alert message",
  "supports": {
    "html": false
  },
  "attributes": {
    "type": {
      "type": "string",
      "default": "info"
    },
    "title": {
      "type": "string",
      "default": ""
    },
    "content": {
      "type": "string",
      "default": ""
    }
  },
  "textdomain": "cu-blocks",
  "editorScript": "file:./index.js",
  "editorStyle": "file:./index.css",
  "style": "file:./style-index.css"
}
```

### 2. Block Index

`index.js`:
```jsx
import { registerBlockType } from '@wordpress/blocks'
import Edit from './edit'
import Save from './save'
import metadata from './block.json'

registerBlockType(metadata.name, {
  edit: Edit,
  save: Save,
})
```

### 3. Edit Component

`edit.js`:
```jsx
import { useBlockProps, InspectorControls } from '@wordpress/block-editor'
import { PanelBody, SelectControl, TextControl } from '@wordpress/components'
import { Alert } from '@carletonuniversity/rds'

export default function Edit({ attributes, setAttributes }) {
  const { type, title, content } = attributes
  const blockProps = useBlockProps()

  return (
    <>
      <InspectorControls>
        <PanelBody title="Alert Settings">
          <SelectControl
            label="Alert Type"
            value={type}
            options={[
              { label: 'Info', value: 'info' },
              { label: 'Success', value: 'success' },
              { label: 'Warning', value: 'warning' },
              { label: 'Error', value: 'error' },
            ]}
            onChange={(value) => setAttributes({ type: value })}
          />
          <TextControl
            label="Title"
            value={title}
            onChange={(value) => setAttributes({ title: value })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <Alert type={type} title={title}>
          {content || 'Enter alert content...'}
        </Alert>
      </div>
    </>
  )
}
```

### 4. Save Component

For static blocks:
```jsx
import { useBlockProps } from '@wordpress/block-editor'
import { Alert } from '@carletonuniversity/rds'

export default function Save({ attributes }) {
  const { type, title, content } = attributes
  const blockProps = useBlockProps.save()

  return (
    <div {...blockProps}>
      <Alert type={type} title={title}>
        {content}
      </Alert>
    </div>
  )
}
```

For dynamic blocks (PHP rendered):
```jsx
export default function Save() {
  return null // Rendered by PHP
}
```

---

## Using RDS Components

### Importing Components

```jsx
// Named imports (recommended)
import { Button, Card, Alert } from '@carletonuniversity/rds'

// Utilities
import { utils } from '@carletonuniversity/rds'

// Icons and assets
import { iconNames, bgImageNames } from '@carletonuniversity/rds'
```

### Component Props to Block Attributes

Map RDS component props to WordPress block attributes:

```jsx
// RDS Component
<Button
  color="red"
  isSmall={false}
  isFull={true}
>
  Click Me
</Button>

// Block Attributes
{
  "buttonColor": {
    "type": "string",
    "default": "red"
  },
  "isSmall": {
    "type": "boolean",
    "default": false
  },
  "isFull": {
    "type": "boolean",
    "default": true
  },
  "buttonText": {
    "type": "string",
    "default": "Click Me"
  }
}
```

### Composite Components

For composite components like Card:

```jsx
import { Card } from '@carletonuniversity/rds'

function CardBlock({ attributes }) {
  const { imageUrl, title, excerpt, link } = attributes

  return (
    <Card>
      {imageUrl && (
        <Card.Figure>
          <img src={imageUrl} alt={title} />
        </Card.Figure>
      )}
      <Card.Body>
        <Card.Header title={title} />
        {excerpt && <Card.Excerpt text={excerpt} />}
        {link && (
          <Card.Footer>
            <a href={link}>Read More</a>
          </Card.Footer>
        )}
      </Card.Body>
    </Card>
  )
}
```

---

## Styling Considerations

### Loading RDS Styles

In your block plugin:

```php
// PHP: Enqueue RDS styles
function enqueue_rds_styles() {
    wp_enqueue_style(
        'rds-styles',
        plugins_url('node_modules/@carletonuniversity/rds/dist/style.css', __FILE__),
        [],
        '1.0.0'
    );
}
add_action('wp_enqueue_scripts', 'enqueue_rds_styles');
add_action('enqueue_block_editor_assets', 'enqueue_rds_styles');
```

Or in JavaScript:
```jsx
// Import styles in your block entry point
import '@carletonuniversity/rds/dist/style.css'
```

### Style Conflicts

RDS styles may conflict with WordPress defaults. Solutions:

#### 1. Scoped Wrapper Class

```jsx
<div className="rds-scope">
  <Alert type="info">Content</Alert>
</div>
```

```css
.rds-scope {
  /* Reset WordPress styles */
  all: initial;
}

.rds-scope * {
  box-sizing: border-box;
}
```

#### 2. Higher Specificity

```css
/* RDS overrides */
.wp-block-cu-alert .cu-alert {
  /* Increased specificity */
}
```

#### 3. Important Flag (Use Sparingly)

```css
.cu-alert {
  margin: 0 !important;
}
```

### Editor vs Frontend Styles

Some styles only apply in editor:

```css
/* Editor-only styles */
.editor-styles-wrapper .cu-card {
  /* Editor adjustments */
}

/* Frontend-only styles */
.entry-content .cu-card {
  /* Frontend adjustments */
}
```

---

## Common Patterns

### Rich Text Integration

```jsx
import { RichText } from '@wordpress/block-editor'
import { Alert } from '@carletonuniversity/rds'

function AlertEdit({ attributes, setAttributes }) {
  return (
    <Alert type={attributes.type} title={attributes.title}>
      <RichText
        tagName="p"
        value={attributes.content}
        onChange={(content) => setAttributes({ content })}
        placeholder="Enter alert content..."
      />
    </Alert>
  )
}
```

### Media Selection

```jsx
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor'
import { Button as WPButton } from '@wordpress/components'
import { Card } from '@carletonuniversity/rds'

function CardEdit({ attributes, setAttributes }) {
  const { imageId, imageUrl } = attributes

  return (
    <Card>
      <Card.Figure>
        <MediaUploadCheck>
          <MediaUpload
            onSelect={(media) =>
              setAttributes({ imageId: media.id, imageUrl: media.url })
            }
            allowedTypes={['image']}
            value={imageId}
            render={({ open }) => (
              imageUrl ? (
                <img src={imageUrl} onClick={open} alt="" />
              ) : (
                <WPButton onClick={open}>Select Image</WPButton>
              )
            )}
          />
        </MediaUploadCheck>
      </Card.Figure>
      <Card.Body>
        {/* ... */}
      </Card.Body>
    </Card>
  )
}
```

### Link Controls

```jsx
import { __experimentalLinkControl as LinkControl } from '@wordpress/block-editor'
import { Popover, Button as WPButton } from '@wordpress/components'
import { useState } from '@wordpress/element'
import { Button } from '@carletonuniversity/rds'

function ButtonEdit({ attributes, setAttributes }) {
  const [isLinkOpen, setIsLinkOpen] = useState(false)
  const { url, text } = attributes

  return (
    <>
      <Button
        color="red"
        onClick={() => setIsLinkOpen(true)}
      >
        {text || 'Add Text'}
      </Button>

      {isLinkOpen && (
        <Popover onClose={() => setIsLinkOpen(false)}>
          <LinkControl
            value={{ url }}
            onChange={({ url }) => setAttributes({ url })}
          />
        </Popover>
      )}
    </>
  )
}
```

### Inspector Controls Pattern

```jsx
import { InspectorControls } from '@wordpress/block-editor'
import {
  PanelBody,
  PanelRow,
  SelectControl,
  ToggleControl,
  RangeControl,
  ColorPalette,
} from '@wordpress/components'

function BlockInspector({ attributes, setAttributes }) {
  return (
    <InspectorControls>
      <PanelBody title="Display Settings" initialOpen={true}>
        <SelectControl
          label="Layout"
          value={attributes.layout}
          options={[
            { label: 'Grid', value: 'grid' },
            { label: 'List', value: 'list' },
          ]}
          onChange={(layout) => setAttributes({ layout })}
        />

        <RangeControl
          label="Columns"
          value={attributes.columns}
          onChange={(columns) => setAttributes({ columns })}
          min={1}
          max={4}
        />

        <ToggleControl
          label="Show Featured Image"
          checked={attributes.showImage}
          onChange={(showImage) => setAttributes({ showImage })}
        />
      </PanelBody>

      <PanelBody title="Styling" initialOpen={false}>
        <PanelRow>
          <label>Background Color</label>
        </PanelRow>
        <ColorPalette
          colors={[
            { name: 'White', color: '#ffffff' },
            { name: 'Light Gray', color: '#f3f4f6' },
            { name: 'Red', color: '#bf112b' },
          ]}
          value={attributes.backgroundColor}
          onChange={(color) => setAttributes({ backgroundColor: color })}
        />
      </PanelBody>
    </InspectorControls>
  )
}
```

---

## Block Examples

### Alert Block

```jsx
// edit.js
import { useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor'
import { PanelBody, SelectControl, TextControl } from '@wordpress/components'
import { Alert } from '@carletonuniversity/rds'

export default function Edit({ attributes, setAttributes }) {
  const { type, title, content } = attributes

  return (
    <>
      <InspectorControls>
        <PanelBody title="Alert Settings">
          <SelectControl
            label="Type"
            value={type}
            options={[
              { label: 'Info', value: 'info' },
              { label: 'Success', value: 'success' },
              { label: 'Warning', value: 'warning' },
              { label: 'Error', value: 'error' },
            ]}
            onChange={(type) => setAttributes({ type })}
          />
          <TextControl
            label="Title"
            value={title}
            onChange={(title) => setAttributes({ title })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...useBlockProps()}>
        <Alert type={type} title={title}>
          <RichText
            value={content}
            onChange={(content) => setAttributes({ content })}
            placeholder="Alert content..."
          />
        </Alert>
      </div>
    </>
  )
}
```

### Card Grid Block

```jsx
// edit.js
import { useBlockProps, InspectorControls } from '@wordpress/block-editor'
import { PanelBody, RangeControl, ToggleControl } from '@wordpress/components'
import { useSelect } from '@wordpress/data'
import { Card, Column } from '@carletonuniversity/rds'

export default function Edit({ attributes, setAttributes }) {
  const { columns, postType, count, showExcerpt, showImage } = attributes

  const posts = useSelect((select) => {
    return select('core').getEntityRecords('postType', postType, {
      per_page: count,
    })
  }, [postType, count])

  return (
    <>
      <InspectorControls>
        <PanelBody title="Grid Settings">
          <RangeControl
            label="Columns"
            value={columns}
            onChange={(columns) => setAttributes({ columns })}
            min={1}
            max={4}
          />
          <RangeControl
            label="Number of Posts"
            value={count}
            onChange={(count) => setAttributes({ count })}
            min={1}
            max={12}
          />
          <ToggleControl
            label="Show Featured Image"
            checked={showImage}
            onChange={(showImage) => setAttributes({ showImage })}
          />
          <ToggleControl
            label="Show Excerpt"
            checked={showExcerpt}
            onChange={(showExcerpt) => setAttributes({ showExcerpt })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...useBlockProps()}>
        <Column cols={String(columns)}>
          {posts?.map((post) => (
            <Card key={post.id}>
              {showImage && post.featured_media && (
                <Card.Figure>
                  <img
                    src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url}
                    alt={post.title.rendered}
                  />
                </Card.Figure>
              )}
              <Card.Body>
                <Card.Header title={post.title.rendered} />
                {showExcerpt && (
                  <Card.Excerpt text={post.excerpt.rendered} />
                )}
              </Card.Body>
            </Card>
          ))}
        </Column>
      </div>
    </>
  )
}
```

---

## Troubleshooting

### Common Issues

#### 1. Styles Not Loading

```jsx
// Ensure CSS is imported
import '@carletonuniversity/rds/dist/style.css'

// Or in PHP
wp_enqueue_style('rds-styles', '...');
```

#### 2. React Version Mismatch

```json
// package.json - use WordPress's React
{
  "peerDependencies": {
    "react": "*",
    "react-dom": "*"
  }
}
```

```js
// webpack.config.js
externals: {
  react: 'React',
  'react-dom': 'ReactDOM',
}
```

#### 3. Component Not Rendering

```jsx
// Check component import
import { Alert } from '@carletonuniversity/rds' // Correct
import Alert from '@carletonuniversity/rds/Alert' // May not work
```

#### 4. Block Validation Errors

Block HTML must match exactly between edit and save:

```jsx
// If using dynamic rendering, save should return null
export default function Save() {
  return null
}
```

#### 5. InnerBlocks Not Working

```jsx
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor'

// Edit
function Edit() {
  return (
    <div {...useBlockProps()}>
      <InnerBlocks allowedBlocks={['core/paragraph']} />
    </div>
  )
}

// Save
function Save() {
  return (
    <div {...useBlockProps.save()}>
      <InnerBlocks.Content />
    </div>
  )
}
```

---

## Best Practices

### 1. Use Block Attributes Wisely

```json
// Good: Specific, typed attributes
{
  "buttonColor": { "type": "string", "enum": ["red", "grey", "black"] },
  "isFullWidth": { "type": "boolean", "default": false }
}

// Bad: Generic, unvalidated
{
  "settings": { "type": "object" }
}
```

### 2. Provide Good Defaults

```jsx
// Block registration with defaults
registerBlockType('cu/card', {
  attributes: {
    showImage: { type: 'boolean', default: true },
    columns: { type: 'number', default: 3 },
  },
})
```

### 3. Use WordPress Controls

```jsx
// Use WordPress components for consistency
import {
  PanelBody,
  SelectControl,
  ToggleControl,
} from '@wordpress/components'

// Not RDS form components in editor
```

### 4. Handle Loading States

```jsx
function Edit({ attributes }) {
  const posts = useSelect(/* ... */)

  if (!posts) {
    return <Spinner />
  }

  return <CardGrid posts={posts} />
}
```

### 5. Accessibility

```jsx
// Include ARIA labels
<div {...useBlockProps()} aria-label="Alert Block">
  <Alert type={type} title={title}>
    {content}
  </Alert>
</div>
```

### 6. Dynamic vs Static Blocks

- **Static**: Content saved in post_content, no PHP needed
- **Dynamic**: Rendered by PHP on each page load

Choose dynamic for:
- Frequently changing content
- Content pulled from database
- Complex logic

Choose static for:
- Simple content blocks
- Better performance
- Works without PHP

---

## Related Documentation

- [Components](./COMPONENTS.md) - Component reference
- [Forms](./FORMS.md) - Form components
- [Styling](./STYLING.md) - CSS considerations
- [WordPress Block Editor Handbook](https://developer.wordpress.org/block-editor/)
