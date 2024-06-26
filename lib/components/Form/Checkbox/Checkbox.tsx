import { Field } from 'formik'
import { FieldSetProps, FormFieldSet } from '../FormFieldSet/FormFieldSet'
import { fieldStyles } from '../../../styles/form'
import useErrorClass from '../UserError'

export interface CheckboxProps extends FieldSetProps {
  checkBoxRight?: boolean
  options?: {
    label: string
    value: string
  }[]
}

export const Checkbox = ({ ...props }: CheckboxProps) => {
  const {
    label,
    name,
    options,
    checkBoxRight,
    required,
    maxWidth,
    helper,
    displayError,
    helperpostop,
    isInline,
    hiddenLabel,
    ...rest
  } = props
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
      hiddenLabel={hiddenLabel}
      {...rest}
    >
      {options &&
        options.map((option) => (
          <label key={option.value} className={checkBoxRight ? fieldStyles.radioCheckRight : fieldStyles.radioCheck}>
            <Field
              type="checkbox"
              name={name}
              value={option.value}
              className={`${fieldStyles.disabled} ${errorClass}`}
              {...rest}
            />
            {option.label}
          </label>
        ))}
    </FormFieldSet>
  )
}
