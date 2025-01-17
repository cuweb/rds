/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef } from 'react'
import { Input } from '../Input/Input'
import { TextArea } from '../TextArea/TextArea'
import { Select } from '../Select/Select'
import { Checkbox } from '../Checkbox/Checkbox'
import { Radio } from '../Radio/Radio'
import { AutoSuggest } from '../AutoSuggest/AutoSuggest'
import { DateTime } from '../DateTime/DateTime'
import { FileUpload } from '../FileUpload/FileUpload'
import { FieldProps, FormField } from '../FormField/FormField'
import { PlacesAutoComplete } from '../PlacesAutoComplete/PlacesAutoComplete'
import { FieldSetProps, FormFieldSet } from '../FormFieldSet/FormFieldSet'

export interface FieldControlProps extends FieldProps {
  control: 'text' | 'textarea' | 'select' | 'autosuggest' | 'datetime' | 'fileUpload' | 'placesAutoComplete'
  [key: string]: any
}

export interface FieldControlSetProps extends FieldSetProps {
  control: 'checkbox' | 'radio'
  [key: string]: any
}

export const FieldControl = forwardRef<HTMLInputElement, FieldControlProps>(({ ...props }, ref) => {
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
    case 'placesAutoComplete':
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
                    : control === 'placesAutoComplete'
                      ? PlacesAutoComplete
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
          {Component && <Component name={name} innerRef={ref} {...rest} />}
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
          <Component name={name} innerRef={ref} {...rest} />
        </FormFieldSet>
      )
    }

    default:
      return null
  }
})
export default FieldControl
