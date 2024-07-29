import { Field } from 'formik'
import { FieldSetComponentProps } from '../FormFieldSet/FormFieldSet'
import { fieldStyles } from '../../../styles/form'
import useErrorClass from '../UseError'
import { Ref } from 'react'

export interface RadioProps extends FieldSetComponentProps {
  options?: {
    label: string
    value: string
  }[]
  refs?: Ref<HTMLInputElement | HTMLSelectElement>
}

export const Radio = ({ ...props }: RadioProps) => {
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
              {...rest}
            />
            {option.label}
          </label>
        ))}
    </>
  )
}
