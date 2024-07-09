import { fieldStyles } from '../../../styles/form'
import { FieldProps } from '../FormField/FormField'
import useErrorClass from '../UseError'

export const FileUpload = ({ ...props }: FieldProps) => {
  const { name, ...rest } = props

  const errorClass = useErrorClass(name)

  return (
    <input
      type="file"
      id="file"
      name={name}
      className={fieldStyles.uploads + ' ' + fieldStyles.disabled + errorClass}
      {...rest}
    />
  )
}
