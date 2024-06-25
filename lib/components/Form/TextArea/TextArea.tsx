import { Field } from 'formik'
import { fieldStyles } from '../../../styles/form'
import { FormField } from '../FormField/FormField'
import useErrorClass from '../UserError'
import { Ref } from 'react'

export interface TextAreaProps {
  label: string
  name: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
  helper?: string
  required?: boolean
  refs?: Ref<HTMLInputElement | HTMLSelectElement>
}

export const TextArea = ({ ...props }: TextAreaProps) => {
  const { name, required, ...rest } = props

  const errorClass = useErrorClass(name)

  return (
    <FormField name={name} required={required} {...rest}>
      <Field
        as="textarea"
        id={name}
        name={name}
        className={`${fieldStyles.input} ${fieldStyles.disabled} ${errorClass}`}
        {...rest}
      />
    </FormField>
  )
}
