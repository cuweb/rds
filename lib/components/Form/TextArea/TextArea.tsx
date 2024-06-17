import { Field } from 'formik'
import { fieldStyles } from '../../../styles/form'
import { FieldProps, FormField } from '../FormField/FormField'
import useErrorClass from '../UserError'

export const TextArea = ({ ...props }: FieldProps) => {
  const { name, label, maxWidth, helper, helperpostop, required, displayError, ...rest } = props

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
    >
      <Field
        as="textarea"
        id={name}
        name={name}
        className={`${fieldStyles.input} ${fieldStyles.disabled} ${errorClass}`}
        {...rest}
      />
    </FormField>
  )
}
