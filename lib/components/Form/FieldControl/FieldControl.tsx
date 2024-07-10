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
    case 'textarea':
    case 'select':
    case 'autosuggest':
    case 'datetime':
    case 'fileUpload': {
      const Component =
        control === 'text'
          ? Input
          : control === 'textarea'
            ? TextArea
            : control === 'select'
              ? Select
              : control === 'autosuggest'
                ? AutoSuggest
                : control === 'datetime'
                  ? DateTime
                  : control === 'fileUpload'
                    ? FileUpload
                    : null
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
          {Component && <Component label={label} name={name} {...rest} />}
        </FormField>
      )
    }

    case 'checkbox':
    case 'radio': {
      const Component = control === 'checkbox' ? Checkbox : Radio
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
          <Component label={label} name={name} {...rest} />
        </FormFieldSet>
      )
    }
    default:
      return null
  }
}
