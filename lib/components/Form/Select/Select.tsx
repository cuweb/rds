'use client'
import { Field } from 'formik'
import { fieldStyles } from '../../../styles/form'
import { FieldProps } from '../FormField/FormField'
import useErrorClass from '../UseError'

export interface SelectProps extends FieldProps {
  options?: {
    label: string
    value: string
  }[]
}

export const Select = ({ ...props }: SelectProps) => {
  const { name, options, ...rest } = props

  const errorClass = useErrorClass(name)

  return (
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
  )
}
