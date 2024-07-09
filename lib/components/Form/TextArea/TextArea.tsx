import { Field } from 'formik'
import { fieldStyles } from '../../../styles/form'
import { FieldProps } from '../FormField/FormField'
import useErrorClass from '../UseError'

export const TextArea = ({ ...props }: FieldProps) => {
  const { name, ...rest } = props

  const errorClass = useErrorClass(name)

  return (
    <Field
      as="textarea"
      id={name}
      name={name}
      className={`${fieldStyles.input} ${fieldStyles.disabled} ${errorClass}`}
      {...rest}
    />
  )
}
