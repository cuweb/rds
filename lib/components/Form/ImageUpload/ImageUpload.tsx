import { useFormik } from 'formik'
import { fieldStyles } from '../../../styles/form'
import imageUploadValidationSchema from '../../../helpers/imageUploadValidationSchema'
import { FormField } from '../FormField/FormField'

export interface ImageUploadProps {
  label: string
  name: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
  helper?: string
  required?: boolean
}

export const ImageUpload = ({ ...props }: ImageUploadProps) => {
  const { name, ...rest } = props
  const initialValues = {
    file: null,
  }
  const validationSchema = imageUploadValidationSchema
  const onSubmit = () => {
    // You can handle the file here, e.g., upload it to a server
  }
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })
  return (
    <FormField name={name} {...rest}>
      <input
        type="file"
        id="file"
        name="file"
        className={fieldStyles.uploads}
        onChange={(event) => {
          const selectedFile = event.currentTarget.files?.[0] // Use optional chaining
          formik.setFieldValue('file', selectedFile)
        }}
        onBlur={formik.handleBlur}
        {...rest}
      />
    </FormField>
  )
}
