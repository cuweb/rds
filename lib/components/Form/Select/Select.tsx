'use client'
import { Field } from 'formik'
import { fieldStyles } from '../../../styles/form'
import { FieldProps, FormField } from '../FormField/FormField'
import useErrorClass from '../UserError'

export interface SelectProps extends FieldProps {
  options?: {
    label: string
    value: string
  }[]
}

export const Select = ({ ...props }: SelectProps) => {
  const { name, options, label, maxWidth, helper, helperpostop, required, displayError, hiddenLabel, ...rest } = props

  const errorClass = useErrorClass(name)

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
      <Field
        as="select"
        id={name}
        name={name}
        className={`${fieldStyles.input} ${fieldStyles.disabled} ${errorClass}`}
        {...rest}
      >
        {options &&
          options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            )
          })}
      </Field>
    </FormField>
  )
}
