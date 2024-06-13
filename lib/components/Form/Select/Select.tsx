'use client'
import { Field } from 'formik'
import { fieldStyles } from '../../../styles/form'
import { FormField } from '../FormField/FormField'
import useErrorClass from '../UserError'

export interface InputProps {
  label: string
  name: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
  helper?: string
  required?: boolean
  options?: {
    label: string
    value: string
  }[]
}

export const Select = ({ ...props }: InputProps) => {
  const { name, options, required, ...rest } = props

  const errorClass = useErrorClass(name)

  return (
    <FormField name={name} required={required} {...rest}>
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
