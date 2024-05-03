import { useFormik } from 'formik'
import fileUploadValidationSchema from '../../../helpers/fileUploadValidationSchema'
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
  const initialValues = {
    file: null,
  }
  const validationSchema = fileUploadValidationSchema
  const onSubmit = () => {
    // You can handle the file here, e.g., upload it to a server
  }
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })
  return (
    <FormField name={name} required={required} {...rest}>
      <input
        type="file"
        id="file"
        name="file"
        className={fieldStyles.uploads}
        onChange={(event) => {
          const selectedFile = event.currentTarget.files?.[0]
          formik.setFieldValue('file', selectedFile)
        }}
        onBlur={formik.handleBlur}
        {...rest}
      />
    </FormField>
  )
}
