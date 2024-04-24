import { ErrorMessage, useFormik } from 'formik'
import fileUploadValidationSchema from '../../../helpers/fileUploadValidationSchema'
import { primaryStyles, textStyles, fieldStyles } from '../../../styles/form'
import { maxWidthClasses } from '../../../helpers/optionClasses'
import Error from '../Error/Error'

export interface FileUploadProps {
  label: string
  name: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
  helper?: string
  required?: boolean
}

export const FileUpload = ({ ...props }: FileUploadProps) => {
  const { label, name, maxWidth, helper, required, ...rest } = props
  const fieldmaxWidth = maxWidth ? maxWidthClasses[maxWidth] : ''
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
    <div className={`${primaryStyles.wrapper} ${fieldmaxWidth} form-control`}>
      <label htmlFor={name} className={textStyles.label}>
        {label} {required && <span className={textStyles.required}>*</span>}
      </label>

      {helper && <div className={textStyles.helper}>{helper}</div>}

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

      <ErrorMessage name={name}>{(error) => <Error>{error}</Error>}</ErrorMessage>
    </div>
  )
}
