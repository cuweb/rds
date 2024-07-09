import { Field } from 'formik'
import { fieldStyles } from '../../../styles/form'
import { FieldProps, FormField } from '../FormField/FormField'
import useErrorClass from '../UseError'

export const Input = ({ ...props }: FieldProps) => {
  const { name, label, maxWidth, helper, helperpostop, required, displayError, hiddenLabel, ...rest } = props

  const errorClass = useErrorClass(name)

  return (
    <FormField
      name={name}
      label={label}
      maxWidth={maxWidth}
      helper={helper}
      helperpostop={helperpostop}
      required={required}
      displayError={displayError}
      hiddenLabel={hiddenLabel}
    >
      <Field
        type="text"
        id={name}
        name={name}
        className={`${fieldStyles.input} ${fieldStyles.disabled} ${errorClass}`}
        {...rest}
      />
    </FormField>
  )
}
