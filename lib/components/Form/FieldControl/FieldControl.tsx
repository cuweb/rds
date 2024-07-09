/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from '../Input/Input'
import { TextArea } from '../TextArea/TextArea'
import { Select } from '../Select/Select'
import { Checkbox } from '../Checkbox/Checkbox'
import { Radio } from '../Radio/Radio'
import { AutoSuggest } from '../AutoSuggest/AutoSuggest'
import { DateTime } from '../DateTime/DateTime'
import { FileUpload } from '../FileUpload/FileUpload'
import { FieldProps, FormField } from '../FormField/FormField'
import { FieldSetProps, FormFieldSet } from '../FormFieldSet/FormFieldSet'

export interface FieldControlProps extends FieldProps {
  control: 'text' | 'textarea' | 'select' | 'autosuggest' | 'datetime' | 'fileUpload'
  [key: string]: any
}

export interface FieldControlSetProps extends FieldSetProps {
  control: 'checkbox' | 'radio'
  [key: string]: any
}

export const FieldControl = ({ ...props }: FieldControlProps | FieldControlSetProps) => {
  const {
    control,
    name,
    label,
    maxWidth,
    helper,
    helperpostop,
    required,
    displayError,
    hiddenLabel,
    isInline,
    ...rest
  } = props

  switch (control) {
    case 'text':
      return (
        <FormField
          name={name}
          label={label}
          maxWidth={maxWidth}
          helper={helper}
          helperpostop={helperpostop}
          required={required}
          displayError={displayError}
          hiddenLabel={hiddenLabel}
        >
          <Input label={label} name={name} {...rest} />
        </FormField>
      )
    case 'textarea':
      return (
        <FormField
          name={name}
          label={label}
          maxWidth={maxWidth}
          helper={helper}
          helperpostop={helperpostop}
          required={required}
          displayError={displayError}
          hiddenLabel={hiddenLabel}
        >
          <TextArea label={rest.label} name={rest.name} {...rest} />
        </FormField>
      )
    case 'select':
      return (
        <FormField
          name={name}
          label={label}
          maxWidth={maxWidth}
          helper={helper}
          helperpostop={helperpostop}
          required={required}
          displayError={displayError}
          hiddenLabel={hiddenLabel}
        >
          <Select label={rest.label} name={rest.name} {...rest} />
        </FormField>
      )
    case 'checkbox':
      return (
        <FormFieldSet
          name={name}
          label={label}
          maxWidth={maxWidth}
          helper={helper}
          helperpostop={helperpostop}
          required={required}
          displayError={displayError}
          key={name}
          isInline={isInline}
          hiddenLabel={hiddenLabel}
          {...rest}
        >
          <Checkbox label={rest.label} name={rest.name} {...rest} />
        </FormFieldSet>
      )
    case 'radio':
      return (
        <FormFieldSet
          name={name}
          label={label}
          maxWidth={maxWidth}
          helper={helper}
          helperpostop={helperpostop}
          required={required}
          displayError={displayError}
          key={name}
          isInline={isInline}
          hiddenLabel={hiddenLabel}
          {...rest}
        >
          <Radio label={rest.label} name={rest.name} {...rest} />
        </FormFieldSet>
      )
    case 'autosuggest':
      return (
        <FormField
          name={name}
          label={label}
          maxWidth={maxWidth}
          helper={helper}
          helperpostop={helperpostop}
          required={required}
          displayError={displayError}
          hiddenLabel={hiddenLabel}
        >
          <AutoSuggest label={rest.label} name={rest.name} {...rest} />
        </FormField>
      )
    case 'datetime':
      return (
        <FormField
          name={name}
          label={label}
          maxWidth={maxWidth}
          helper={helper}
          helperpostop={helperpostop}
          required={required}
          displayError={displayError}
          hiddenLabel={hiddenLabel}
        >
          <DateTime label={rest.label} name={rest.name} {...rest} />
        </FormField>
      )
    case 'fileUpload':
      return (
        <FormField
          name={name}
          label={label}
          maxWidth={maxWidth}
          helper={helper}
          helperpostop={helperpostop}
          required={required}
          displayError={displayError}
          hiddenLabel={hiddenLabel}
        >
          <FileUpload label={rest.label} name={rest.name} {...rest} />
        </FormField>
      )
    default:
      return null
  }
}
