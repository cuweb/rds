import { Field } from 'formik'
import { FormFieldSet } from '../FormFieldSet/FormFieldSet'
import { fieldStyles } from '../../../styles/form'

export interface CheckboxProps {
  label: string
  name: string
  helper?: string
  isInline?: boolean
  required?: boolean
  checkBoxRight?: boolean
  options?: {
    label: string
    value: string
  }[]
}

export const Checkbox = ({ ...props }: CheckboxProps) => {
  const { label, name, options, checkBoxRight, required, isInline, ...rest } = props

  return (
    <FormFieldSet label={label} name={name} key={name} required={required} isInline={isInline} {...rest}>
      {options &&
        options.map((option) => (
          <label key={option.value} className={checkBoxRight ? fieldStyles.radioCheckRight : fieldStyles.radioCheck}>
            <Field type="checkbox" name={name} value={option.value} className={`${fieldStyles.disabled}`} {...rest} />
            {option.label}
          </label>
        ))}
    </FormFieldSet>
  )
}
