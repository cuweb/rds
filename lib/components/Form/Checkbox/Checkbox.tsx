import { Field, FieldProps } from 'formik'
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
    key: string
    value: string
    checked?: boolean
  }[]
}

export const Checkbox = ({ ...props }: CheckboxProps) => {
  const { label, name, options, checkBoxRight, ...rest } = props

  return (
    <FormFieldSet label={label} name={name} {...rest}>
      <Field name={name} {...rest}>
        {({ field }: FieldProps) => {
          return (
            options &&
            options.map((option) => {
              return (
                <div key={option.key} className={fieldStyles.radioCheck}>
                  {checkBoxRight && <label htmlFor={option.key}>{option.value}</label>}
                  <input
                    type="checkbox"
                    id={option.key}
                    {...field}
                    {...rest}
                    value={option.key}
                    className={fieldStyles.disabledCheckbox}
                    checked={option?.checked === true ? true : false}
                  />
                  {!checkBoxRight && <label htmlFor={option.key}>{option.value}</label>}
                </div>
              )
            })
          )
        }}
      </Field>
    </FormFieldSet>
  )
}
