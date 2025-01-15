import { forwardRef } from 'react'
import { Field } from 'formik'
import { fieldStyles } from '../form.Styles'
import { FieldComponentProps } from '../FormField/FormField'
import useErrorClass from '../UseError'
import { Ref } from 'react'

export interface SelectOptions {
  label: string
  value: string
}
export interface SelectProps extends FieldComponentProps {
  options?: SelectOptions[]
  refs?: Ref<HTMLInputElement | HTMLSelectElement>
}

export const Select = forwardRef<HTMLInputElement, SelectProps>(({ ...props }, ref) => {
  const { name, options, ...rest } = props

  const errorClass = useErrorClass(name)

  return (
    <Field
      as="select"
      id={name}
      name={name}
      className={`${fieldStyles.input} ${fieldStyles.disabled} ${errorClass}`}
      innerRef={ref}
      {...rest}
    >
      {options &&
        options.map((option: SelectOptions) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          )
        })}
    </Field>
  )
})
