import { forwardRef } from 'react'
import { Field } from 'formik'
import { FieldSetComponentProps } from '../FormFieldSet/FormFieldSet'
import { fieldStyles } from '../form.Styles'
import useErrorClass from '../UseError'
import { Ref } from 'react'

export interface RadioProps extends FieldSetComponentProps {
  options?: {
    label: string
    value: string
  }[]
  refs?: Ref<HTMLInputElement | HTMLSelectElement>
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(({ ...props }, ref) => {
  const { name, options, ...rest } = props

  const errorClass = useErrorClass(name)

  return (
    <>
      {options &&
        options.map((option) => (
          <label key={option.label} className={fieldStyles.radioCheck}>
            <Field
              type="radio"
              name={name}
              className={`${fieldStyles.disabled} ${errorClass}`}
              value={option.value}
              innerRef={ref}
              {...rest}
            />
            {option.label}
          </label>
        ))}
    </>
  )
})
