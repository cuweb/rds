import { Field } from 'formik'
import { FormFieldSet } from '../FormFieldSet/FormFieldSet'
import { fieldStyles } from '../../../styles/form'
import useErrorClass from '../UserError'
import { Ref } from 'react'

export interface RadioProps {
  label: string
  name: string
  helper?: string
  isInline?: boolean
  required?: boolean
  options?: {
    value: string
    label: string
  }[]
  refs?: Ref<HTMLInputElement | HTMLSelectElement>
}

export const Radio = ({ ...props }: RadioProps) => {
  const { label, name, options, required, isInline, ...rest } = props

  const errorClass = useErrorClass(name)

  return (
    <FormFieldSet label={label} name={name} key={name} required={required} isInline={isInline} {...rest}>
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
    </FormFieldSet>
  )
}
