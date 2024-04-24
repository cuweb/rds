import { useState, Suspense } from 'react'
import { ErrorMessage, useField } from 'formik'
import { primaryStyles, textStyles } from '../../../styles/form'
import { maxWidthClasses } from '../../../helpers/optionClasses'
import Error from '../Error/Error'
import HelperText from '../HelperText/HelperText'
import 'react-quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'

export interface WYSIWYGProps {
  label: string
  name: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
  helper?: string
  required?: boolean
  displayError?: boolean
}

export const WYSIWYG = ({ ...props }: WYSIWYGProps) => {
  const { label, name, maxWidth, helper, required, displayError = true, ...rest } = props
  const fieldmaxWidth = maxWidth ? maxWidthClasses[maxWidth] : ''
  const [field] = useField(name)
  const [text, setText] = useState(field.value)

  const handleTextChange = (value: unknown) => {
    setText(value)
    field.onChange({ target: { name, value: value } })
  }

  return (
    <div className={`${primaryStyles.wrapper} ${fieldmaxWidth} form-control`}>
      <label htmlFor={name} className={textStyles.label}>
        {label} {required && <span className={textStyles.required}>*</span>}
      </label>

      {helper && <HelperText>{helper}</HelperText>}

      {/* Use Suspense to wrap the lazy-loaded component */}
      <Suspense fallback={<div>Loading...</div>}>
        <ReactQuill value={text} onChange={handleTextChange} {...rest} />
      </Suspense>

      {displayError && <ErrorMessage name={name}>{(error) => <Error>{error}</Error>}</ErrorMessage>}
    </div>
  )
}
