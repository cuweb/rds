/* eslint-disable @typescript-eslint/no-explicit-any */
import { Field } from 'formik'
import { fieldStyles } from '../../../styles/form'
import { FormField } from '../FormField/FormField'
import useErrorClass from '../UserError'
import { Ref } from 'react'

export interface InputProps {
  label: string
  hiddenLabel?: boolean
  name: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
  helper?: string
  required?: boolean
  displayError?: boolean
  refs?: Ref<HTMLInputElement | HTMLSelectElement>
}

export const Input = ({ ...props }: InputProps) => {
  const { name, required, ...rest } = props

  const errorClass = useErrorClass(name)

  return (
    <FormField name={name} required={required} {...rest}>
      <Field
        type="text"
        id={name}
        name={name}
        className={`${fieldStyles.input} ${fieldStyles.disabled} ${errorClass}`}
        {...rest}
      />
    </FormField>
  )
}
