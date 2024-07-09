import { fieldStyles } from '../../../styles/form'
import { FieldProps, FormField } from '../FormField/FormField'
import useErrorClass from '../UseError'

export const FileUpload = ({ ...props }: FieldProps) => {
  const { name, label, maxWidth, helper, helperpostop, displayError, required, hiddenLabel, ...rest } = props

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
      <input
        type="file"
        id="file"
        name={name}
        className={fieldStyles.uploads + ' ' + fieldStyles.disabled + errorClass}
        {...rest}
      />
    </FormField>
  )
}
