import { forwardRef } from 'react'
import { Field } from 'formik'
import { fieldStyles } from '../form.Styles'
import { FieldComponentProps } from '../FormField/FormField'
import useErrorClass from '../UseError'

export const TextArea = forwardRef<HTMLInputElement, FieldComponentProps>(({ ...props }, ref) => {
  const { name, ...rest } = props

  const errorClass = useErrorClass(name)

  return (
    <Field
      as="textarea"
      id={name}
      name={name}
      className={`${fieldStyles.input} ${fieldStyles.disabled} ${errorClass}`}
      innerRef={ref}
      {...rest}
    />
  )
})
