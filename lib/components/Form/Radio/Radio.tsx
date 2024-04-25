import { Field, FieldProps } from 'formik'
import { FormFieldSet } from '../FormFieldSet/FormFieldSet'
import { fieldStyles } from '../../../styles/form'

export interface RadioProps {
  label: string
  name: string
  helper?: string
  isInline?: boolean
  required?: boolean
  options?: {
    key: string
    value: string
    checked?: boolean
  }[]
}

export const Radio = ({ ...props }: RadioProps) => {
  const { label, name, options, ...rest } = props

  return (
    <FormFieldSet label={label} name={name} {...rest}>
      <Field name={name} {...rest}>
        {({ field }: FieldProps) => {
          return (
            options &&
            options.map((option) => {
              return (
                <div key={option.value} className={fieldStyles.radioCheck}>
                  <input
                    type="radio"
                    id={option.key}
                    {...field}
                    {...rest}
                    value={option.value}
                    className={fieldStyles.disabledCheckbox}
                    checked={option?.checked === true ? true : false}
                  />
                  <label htmlFor={option.key}>{option.value}</label>
                </div>
              )
            })
          )
        }}
      </Field>
    </FormFieldSet>
  )
}
