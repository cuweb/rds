import { fieldStyles } from '../../../styles/form'
import { FieldComponentProps } from '../FormField/FormField'
import useErrorClass from '../UseError'

export const FileUpload = ({ ...props }: FieldComponentProps) => {
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
