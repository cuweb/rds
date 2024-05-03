import { Field } from 'formik'
import { FormFieldSet } from '../FormFieldSet/FormFieldSet'
import { fieldStyles } from '../../../styles/form'

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
}

export const Radio = ({ ...props }: RadioProps) => {
  const { label, name, options, required, isInline, ...rest } = props

  return (
    <FormFieldSet label={label} name={name} key={name} required={required} isInline={isInline} {...rest}>
      {options &&
        options.map((option) => (
          <label key={option.label} className={fieldStyles.radioCheck}>
            <Field type="radio" name={name} value={option.value} {...rest} />
            {option.label}
          </label>
        ))}
    </FormFieldSet>
  )
}
