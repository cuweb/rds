# Form System

RDS provides a comprehensive form system built on Formik and Yup for state management and validation.

## Table of Contents

- [Overview](#overview)
- [Core Components](#core-components)
- [Field Components](#field-components)
- [Validation](#validation)
- [Form Patterns](#form-patterns)
- [Gutenberg Integration](#gutenberg-integration)
- [Troubleshooting](#troubleshooting)

---

## Overview

### Dependencies

| Package            | Version | Purpose                   |
| ------------------ | ------- | ------------------------- |
| `formik`           | 2.4.9   | Form state management     |
| `yup`              | 1.7.1   | Schema validation         |
| `react-select`     | 5.10.2  | Enhanced select dropdowns |
| `react-datepicker` | 9.1.0   | Date picker               |

### Import

```tsx
import {
  Form,
  Input,
  TextArea,
  Select,
  Checkbox,
  Radio,
  DateTime,
  FileUpload,
  AutoSuggest,
  PlacesAutoComplete,
} from '@carletonuniversity/rds'
```

---

## Core Components

### Form

Main form wrapper that provides Formik context.

```tsx
import { Form } from '@carletonuniversity/rds'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
})

const initialValues = {
  name: '',
  email: '',
}

function ContactForm() {
  return (
    <Form
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      <Form.Field name="name" label="Name">
        <Input name="name" />
      </Form.Field>

      <Form.Field name="email" label="Email">
        <Input name="email" type="email" />
      </Form.Field>

      <Form.Button type="submit">Submit</Form.Button>
    </Form>
  )
}
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `initialValues` | `object` | - | Initial form values |
| `validationSchema` | `Yup.Schema` | - | Yup validation schema |
| `onSubmit` | `(values) => void` | - | Submit handler |
| `enableReinitialize` | `boolean` | `false` | Reset on initialValues change |
| `validateOnChange` | `boolean` | `true` | Validate on field change |
| `validateOnBlur` | `boolean` | `true` | Validate on field blur |
| `children` | `ReactNode` | - | Form content |

### Form Subcomponents

| Component                  | Description                        |
| -------------------------- | ---------------------------------- |
| `Form.Field`               | Field wrapper with label and error |
| `Form.FieldSet`            | Group of related fields            |
| `Form.Button`              | Styled form button                 |
| `Form.FieldGroup`          | Horizontal field group             |
| `Form.FieldControl`        | Field control wrapper              |
| `Form.FieldArrayContainer` | Dynamic field arrays               |
| `Form.FieldWrapper`        | Generic field wrapper              |
| `Form.Error`               | Error message display              |
| `Form.UseError`            | Hook for custom errors             |

---

### Form.Field

Wraps form inputs with label, helper text, and error display.

```tsx
<Form.Field name="email" label="Email Address" helperText="We'll never share your email" required>
  <Input name="email" type="email" placeholder="Enter email" />
</Form.Field>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | - | Field name (matches Formik field) |
| `label` | `string` | - | Field label |
| `helperText` | `string` | - | Helper text below field |
| `required` | `boolean` | `false` | Show required indicator |
| `children` | `ReactNode` | - | Input component |

---

### Form.FieldSet

Groups related fields with legend.

```tsx
<Form.FieldSet legend="Personal Information">
  <Form.Field name="firstName" label="First Name">
    <Input name="firstName" />
  </Form.Field>
  <Form.Field name="lastName" label="Last Name">
    <Input name="lastName" />
  </Form.Field>
</Form.FieldSet>
```

---

### Form.FieldGroup

Horizontal layout for multiple fields.

```tsx
<Form.FieldGroup>
  <Form.Field name="city" label="City">
    <Input name="city" />
  </Form.Field>
  <Form.Field name="province" label="Province">
    <Select name="province" options={provinces} />
  </Form.Field>
  <Form.Field name="postalCode" label="Postal Code">
    <Input name="postalCode" />
  </Form.Field>
</Form.FieldGroup>
```

---

### Form.FieldArrayContainer

Dynamic field arrays for repeatable fields.

```tsx
import { FieldArray } from 'formik'

;<FieldArray name="addresses">
  {({ push, remove }) => (
    <Form.FieldArrayContainer>
      {values.addresses.map((_, index) => (
        <div key={index}>
          <Form.Field name={`addresses.${index}.street`} label="Street">
            <Input name={`addresses.${index}.street`} />
          </Form.Field>
          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={() => push({ street: '' })}>
        Add Address
      </button>
    </Form.FieldArrayContainer>
  )}
</FieldArray>
```

---

## Field Components

### Input

Text input field with various types.

```tsx
import { Input } from '@carletonuniversity/rds'

// Text input
<Input name="username" placeholder="Enter username" />

// Email
<Input name="email" type="email" />

// Password
<Input name="password" type="password" />

// Number
<Input name="age" type="number" min={0} max={120} />

// With prefix/suffix via InputAddon
<InputAddon prefix="$">
  <Input name="price" type="number" />
</InputAddon>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | - | Field name |
| `type` | `'text' \| 'email' \| 'password' \| 'number' \| 'tel' \| 'url'` | `'text'` | Input type |
| `placeholder` | `string` | - | Placeholder text |
| `disabled` | `boolean` | `false` | Disable input |
| `readOnly` | `boolean` | `false` | Read-only mode |

---

### TextArea

Multi-line text input.

```tsx
import { TextArea } from '@carletonuniversity/rds'

;<TextArea name="description" rows={5} placeholder="Enter description..." />
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | - | Field name |
| `rows` | `number` | `4` | Number of rows |
| `placeholder` | `string` | - | Placeholder text |
| `maxLength` | `number` | - | Max character count |

---

### Select

Dropdown select using react-select.

```tsx
import { Select } from '@carletonuniversity/rds'

const options = [
  { value: 'ca', label: 'Canada' },
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
]

// Single select
<Select
  name="country"
  options={options}
  placeholder="Select country"
/>

// Multi-select
<Select
  name="countries"
  options={options}
  isMulti
  placeholder="Select countries"
/>

// Searchable
<Select
  name="country"
  options={options}
  isSearchable
/>

// Clearable
<Select
  name="country"
  options={options}
  isClearable
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | - | Field name |
| `options` | `Array<{value, label}>` | - | Select options |
| `isMulti` | `boolean` | `false` | Allow multiple selections |
| `isSearchable` | `boolean` | `false` | Enable search |
| `isClearable` | `boolean` | `false` | Show clear button |
| `placeholder` | `string` | - | Placeholder text |
| `isDisabled` | `boolean` | `false` | Disable select |

---

### Checkbox

Checkbox input for boolean values.

```tsx
import { Checkbox } from '@carletonuniversity/rds'

// Single checkbox
<Checkbox name="agreeToTerms" label="I agree to the terms" />

// Checkbox group
<Form.FieldSet legend="Interests">
  <Checkbox name="interests" value="sports" label="Sports" />
  <Checkbox name="interests" value="music" label="Music" />
  <Checkbox name="interests" value="art" label="Art" />
</Form.FieldSet>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | - | Field name |
| `value` | `string` | - | Value for checkbox groups |
| `label` | `string` | - | Checkbox label |
| `disabled` | `boolean` | `false` | Disable checkbox |

---

### Radio

Radio button for single selection from options.

```tsx
import { Radio } from '@carletonuniversity/rds'

;<Form.FieldSet legend="Preferred Contact Method">
  <Radio name="contactMethod" value="email" label="Email" />
  <Radio name="contactMethod" value="phone" label="Phone" />
  <Radio name="contactMethod" value="mail" label="Mail" />
</Form.FieldSet>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | - | Field name |
| `value` | `string` | - | Radio value |
| `label` | `string` | - | Radio label |
| `disabled` | `boolean` | `false` | Disable radio |

---

### DateTime

Date and time picker.

```tsx
import { DateTime } from '@carletonuniversity/rds'

// Date only
<DateTime
  name="birthDate"
  dateFormat="yyyy-MM-dd"
/>

// Date and time
<DateTime
  name="eventStart"
  showTimeSelect
  dateFormat="yyyy-MM-dd HH:mm"
/>

// Time only
<DateTime
  name="startTime"
  showTimeSelect
  showTimeSelectOnly
  dateFormat="HH:mm"
/>

// With min/max dates
<DateTime
  name="appointmentDate"
  minDate={new Date()}
  maxDate={addDays(new Date(), 30)}
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | - | Field name |
| `dateFormat` | `string` | `'yyyy-MM-dd'` | Date format string |
| `showTimeSelect` | `boolean` | `false` | Show time picker |
| `showTimeSelectOnly` | `boolean` | `false` | Time only mode |
| `minDate` | `Date` | - | Minimum selectable date |
| `maxDate` | `Date` | - | Maximum selectable date |
| `placeholderText` | `string` | - | Placeholder text |

---

### FileUpload

File upload with drag and drop.

```tsx
import { FileUpload } from '@carletonuniversity/rds'

<FileUpload
  name="documents"
  accept=".pdf,.doc,.docx"
  maxSize={5242880} // 5MB
  multiple
/>

// Image upload
<FileUpload
  name="avatar"
  accept="image/*"
  maxSize={2097152} // 2MB
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | - | Field name |
| `accept` | `string` | - | Accepted file types |
| `maxSize` | `number` | - | Max file size in bytes |
| `multiple` | `boolean` | `false` | Allow multiple files |

---

### AutoSuggest

Auto-suggestion input with custom suggestions.

```tsx
import { AutoSuggest } from '@carletonuniversity/rds'

const suggestions = ['Apple', 'Banana', 'Cherry', 'Date']

<AutoSuggest
  name="fruit"
  suggestions={suggestions}
  placeholder="Type to search..."
/>

// With async suggestions
<AutoSuggest
  name="search"
  onSuggestionsFetchRequested={async (query) => {
    const results = await fetchSuggestions(query)
    return results
  }}
/>
```

---

### PlacesAutoComplete

Google Places autocomplete for address input.

```tsx
import { PlacesAutoComplete } from '@carletonuniversity/rds'

;<PlacesAutoComplete
  name="address"
  placeholder="Enter address"
  onPlaceSelected={(place) => {
    setFieldValue('latitude', place.geometry.location.lat())
    setFieldValue('longitude', place.geometry.location.lng())
  }}
/>
```

**Note:** Requires Google Maps API key configuration.

---

### InputAddon

Input with prefix or suffix addon.

```tsx
import { InputAddon, Input } from '@carletonuniversity/rds'

// Prefix
<InputAddon prefix="$">
  <Input name="price" type="number" />
</InputAddon>

// Suffix
<InputAddon suffix=".ca">
  <Input name="domain" />
</InputAddon>

// Both
<InputAddon prefix="https://" suffix=".com">
  <Input name="website" />
</InputAddon>
```

---

### HelperText

Helper text display for additional field information.

```tsx
import { HelperText } from '@carletonuniversity/rds'

;<Form.Field name="password" label="Password">
  <Input name="password" type="password" />
  <HelperText>Must be at least 8 characters with one uppercase letter</HelperText>
</Form.Field>
```

---

## Validation

### Yup Schema Validation

RDS uses Yup for declarative validation schemas.

```tsx
import * as Yup from 'yup'

const validationSchema = Yup.object({
  // Required string
  name: Yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),

  // Email
  email: Yup.string().email('Invalid email address').required('Email is required'),

  // Phone (optional)
  phone: Yup.string().matches(/^\d{10}$/, 'Phone must be 10 digits'),

  // Number range
  age: Yup.number().min(18, 'Must be at least 18').max(120, 'Must be under 120').required('Age is required'),

  // Conditional validation
  website: Yup.string()
    .url('Must be a valid URL')
    .when('hasWebsite', {
      is: true,
      then: (schema) => schema.required('Website is required'),
    }),

  // Array validation
  tags: Yup.array().of(Yup.string()).min(1, 'Select at least one tag'),

  // Nested object
  address: Yup.object({
    street: Yup.string().required('Street is required'),
    city: Yup.string().required('City is required'),
    postalCode: Yup.string().matches(/^[A-Z]\d[A-Z] \d[A-Z]\d$/, 'Invalid postal code'),
  }),
})
```

### Built-in Validation Schemas

RDS provides pre-built validation schemas in `/lib/helpers/`:

```tsx
import { fileUploadValidationSchema, imageUploadValidationSchema } from '@carletonuniversity/rds'

// File upload validation
const schema = Yup.object({
  document: fileUploadValidationSchema({
    maxSize: 5242880, // 5MB
    allowedTypes: ['application/pdf', 'application/msword'],
  }),
})

// Image upload validation
const schema = Yup.object({
  avatar: imageUploadValidationSchema({
    maxSize: 2097152, // 2MB
    minWidth: 200,
    minHeight: 200,
  }),
})
```

---

## Form Patterns

### Contact Form

```tsx
function ContactForm() {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email().required('Email is required'),
    message: Yup.string().required('Message is required').min(10),
  })

  return (
    <Form
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        await submitContact(values)
        resetForm()
        setSubmitting(false)
      }}
    >
      <Form.Field name="name" label="Name" required>
        <Input name="name" />
      </Form.Field>

      <Form.Field name="email" label="Email" required>
        <Input name="email" type="email" />
      </Form.Field>

      <Form.Field name="message" label="Message" required>
        <TextArea name="message" rows={5} />
      </Form.Field>

      <Form.Button type="submit">Send Message</Form.Button>
    </Form>
  )
}
```

### Registration Form

```tsx
function RegistrationForm() {
  const validationSchema = Yup.object({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required(),
    agreeToTerms: Yup.boolean().oneOf([true], 'You must accept the terms'),
  })

  return (
    <Form
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
      }}
      validationSchema={validationSchema}
      onSubmit={handleRegister}
    >
      <Form.FieldGroup>
        <Form.Field name="firstName" label="First Name" required>
          <Input name="firstName" />
        </Form.Field>
        <Form.Field name="lastName" label="Last Name" required>
          <Input name="lastName" />
        </Form.Field>
      </Form.FieldGroup>

      <Form.Field name="email" label="Email" required>
        <Input name="email" type="email" />
      </Form.Field>

      <Form.Field name="password" label="Password" required>
        <Input name="password" type="password" />
      </Form.Field>

      <Form.Field name="confirmPassword" label="Confirm Password" required>
        <Input name="confirmPassword" type="password" />
      </Form.Field>

      <Checkbox name="agreeToTerms" label="I agree to the terms and conditions" />

      <Form.Button type="submit">Register</Form.Button>
    </Form>
  )
}
```

### Event Form with Date/Time

```tsx
function EventForm() {
  return (
    <Form
      initialValues={{
        title: '',
        startDate: null,
        endDate: null,
        location: '',
        description: '',
      }}
      validationSchema={eventSchema}
      onSubmit={handleCreateEvent}
    >
      <Form.Field name="title" label="Event Title" required>
        <Input name="title" />
      </Form.Field>

      <Form.FieldGroup>
        <Form.Field name="startDate" label="Start Date & Time" required>
          <DateTime name="startDate" showTimeSelect />
        </Form.Field>
        <Form.Field name="endDate" label="End Date & Time" required>
          <DateTime name="endDate" showTimeSelect />
        </Form.Field>
      </Form.FieldGroup>

      <Form.Field name="location" label="Location">
        <PlacesAutoComplete name="location" />
      </Form.Field>

      <Form.Field name="description" label="Description">
        <TextArea name="description" rows={4} />
      </Form.Field>

      <Form.Button type="submit">Create Event</Form.Button>
    </Form>
  )
}
```

---

## Gutenberg Integration

### Using Forms in Gutenberg Blocks

When using RDS forms in WordPress Gutenberg blocks:

```jsx
// Block editor component
import { Form, Input, Select } from '@carletonuniversity/rds'

function MyBlockEdit({ attributes, setAttributes }) {
  return (
    <Form initialValues={attributes} onSubmit={(values) => setAttributes(values)} enableReinitialize>
      <Form.Field name="title" label="Title">
        <Input name="title" />
      </Form.Field>

      <Form.Field name="category" label="Category">
        <Select name="category" options={categoryOptions} />
      </Form.Field>
    </Form>
  )
}

// Frontend component
function MyBlockView({ attributes }) {
  return (
    <Form initialValues={{}} onSubmit={handleSubmit}>
      {/* Form fields */}
    </Form>
  )
}
```

### Considerations

1. **Server-side validation** - Always validate on the server
2. **Nonce handling** - Use WordPress nonces for security
3. **REST API** - Submit via WP REST API endpoints
4. **Block attributes** - Map form values to block attributes

---

## Troubleshooting

### Common Issues

**1. Field not updating**

```tsx
// Ensure name prop matches initialValues key
<Input name="email" /> // Must have initialValues.email
```

**2. Validation not triggering**

```tsx
// Check schema field names match form field names
const schema = Yup.object({
  email: Yup.string().email(), // Must match <Input name="email" />
})
```

**3. Select not working with Formik**

```tsx
// Use the RDS Select component, not native <select>
import { Select } from '@carletonuniversity/rds'
```

**4. Date values**

```tsx
// DateTime returns Date objects
// Convert for API if needed
onSubmit={(values) => {
  const data = {
    ...values,
    startDate: values.startDate?.toISOString(),
  }
}}
```

### Debug Mode

Enable Formik debug mode:

```tsx
import { useFormikContext } from 'formik'

function FormDebug() {
  const { values, errors, touched } = useFormikContext()

  if (process.env.NODE_ENV !== 'development') return null

  return <pre>{JSON.stringify({ values, errors, touched }, null, 2)}</pre>
}
```

---

## Related Documentation

- [Components](./COMPONENTS.md) - UI components
- [Validation Helpers](./UTILITIES.md) - Built-in validators
- [Gutenberg Integration](./GUTENBERG.md) - WordPress blocks
