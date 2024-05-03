import { fieldStyles } from '../../../styles/form'
import { FormField } from '../FormField/FormField'

export interface FileUploadProps {
  label: string
  name: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
  helper?: string
  required?: boolean
}

export const FileUpload = ({ ...props }: FileUploadProps) => {
  const { name, required, ...rest } = props
  return (
    <FormField name={name} required={required} {...rest}>
      <input type="file" id="file" name={name} className={fieldStyles.uploads + ' ' + fieldStyles.disabled} {...rest} />
    </FormField>
  )
}
