import { Ref } from 'react'
import { fieldStyles } from '../../../styles/form'
import { FormField } from '../FormField/FormField'
import useErrorClass from '../UserError'

export interface FileUploadProps {
  label: string
  name: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
  helper?: string
  required?: boolean
  refs?: Ref<HTMLInputElement | HTMLSelectElement>
}

export const FileUpload = ({ ...props }: FileUploadProps) => {
  const { name, required, ...rest } = props

  const errorClass = useErrorClass(name)

  return (
    <FormField name={name} required={required} {...rest}>
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
