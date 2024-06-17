import { Field } from 'formik'
import { FieldSetProps, FormFieldSet } from '../FormFieldSet/FormFieldSet'
import { fieldStyles } from '../../../styles/form'
import useErrorClass from '../UserError'

export interface RadioProps extends FieldSetProps {
  options?: {
    label: string
    value: string
  }[]
}

export const Radio = ({ ...props }: RadioProps) => {
  const { label, name, options, required, maxWidth, helper, displayError, helperpostop, isInline, ...rest } = props

  const errorClass = useErrorClass(name)

  return (
    <FormFieldSet
      name={name}
      label={label}
      maxWidth={maxWidth}
      helper={helper}
      helperpostop={helperpostop}
      required={required}
      displayError={displayError}
      key={name}
      isInline={isInline}
      {...rest}
    >
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
