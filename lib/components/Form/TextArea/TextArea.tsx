import { Field } from 'formik'
import { fieldStyles } from '../../../styles/form'
import { FormField } from '../FormField/FormField'

export interface TextAreaProps {
  label: string
  name: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
  helper?: string
  required?: boolean
}

export const TextArea = ({ ...props }: TextAreaProps) => {
  const { name, ...rest } = props

  return (
    <FormField name={name} {...rest}>
      <Field as="textarea" id={name} name={name} className={`${fieldStyles.input} ${fieldStyles.disabled}`} {...rest} />
    </FormField>
  )
}
