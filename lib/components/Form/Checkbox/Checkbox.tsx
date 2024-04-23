import { Field, ErrorMessage, FieldProps } from 'formik'
import Error from '../Error/Error'
import { primaryStyles, textStyles, fieldStyles } from '../../../styles/form'

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
  }[]
}

export const Checkbox = ({ ...props }: CheckboxProps) => {
  const { label, name, options, isInline, helper, checkBoxRight, required, ...rest } = props
  const requiredClass = required ? primaryStyles.required : ''
  const displayInline = isInline ? fieldStyles.horizontalOptions : fieldStyles.verticalOptions

  return (
    <div className={`${primaryStyles.wrapper} ${requiredClass} form-control`}>
      <fieldset className={displayInline} aria-describedby={name}>
        <legend className={textStyles.legend} id={name}>
          {label}
        </legend>

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
                    />
                    {!checkBoxRight && <label htmlFor={option.key}>{option.value}</label>}
                  </div>
                )
              })
            )
          }}
        </Field>
      </fieldset>

      {helper && (
        <div id={name} className={`${textStyles.helper} ${textStyles.legendHelper}`}>
          {helper}
        </div>
      )}

      <ErrorMessage name={name}>{(error) => <Error>{error}</Error>}</ErrorMessage>
    </div>
  )
}
