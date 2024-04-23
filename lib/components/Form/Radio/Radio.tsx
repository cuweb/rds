import { Field, ErrorMessage, FieldProps } from 'formik'
import { primaryStyles, textStyles, fieldStyles } from '../../../styles/form'
import Error from '../Error/Error'

export interface RadioProps {
  label: string
  name: string
  helper?: string
  isInline?: boolean
  required?: boolean
  options?: {
    key: string
    value: string
  }[]
}

export const Radio = ({ ...props }: RadioProps) => {
  const { label, name, options, isInline, helper, required, ...rest } = props
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
                  <div key={option.value} className={fieldStyles.radioCheck}>
                    <input
                      type="radio"
                      id={option.key}
                      {...field}
                      {...rest}
                      value={option.value}
                      className={fieldStyles.disabledCheckbox}
                    />
                    <label htmlFor={option.key}>{option.value}</label>
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
