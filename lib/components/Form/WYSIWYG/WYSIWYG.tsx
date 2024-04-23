import React, { useState, Suspense } from 'react'
import { ErrorMessage, useField } from 'formik'
import { primaryStyles, textStyles } from '../../../styles/form'
import { maxWidthClasses } from '../../../helpers/optionClasses'
import Error from '../Error/Error'
import 'react-quill/dist/quill.snow.css'

// Define a function that returns a Promise for the component import
const importReactQuill = () => import('react-quill')

// Lazy load the ReactQuill component
const LazyReactQuill = React.lazy(importReactQuill)

export interface WYSIWYGUploadProps {
  label: string
  name: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
  helper?: string
  required?: boolean
}

export const WYSIWYG = ({ ...props }: WYSIWYGUploadProps) => {
  const { label, name, maxWidth, helper, required, ...rest } = props
  const fieldmaxWidth = maxWidth ? maxWidthClasses[maxWidth] : ''
  const requiredClass = required ? primaryStyles.required : ''
  const [field] = useField(name)
  const [text, setText] = useState(field.value)

  const handleTextChange = (value: unknown) => {
    setText(value)
    field.onChange({ target: { name, value: value } })
  }

  return (
    <div className={`${primaryStyles.wrapper} ${fieldmaxWidth} ${requiredClass} form-control`}>
      <label htmlFor={name} className={textStyles.label}>
        {label} {required && <span className={textStyles.required}>*</span>}
      </label>

      {helper && <div className={textStyles.helper}>{helper}</div>}

      {/* Use Suspense to wrap the lazy-loaded component */}
      <Suspense fallback={<div>Loading...</div>}>
        <LazyReactQuill value={text} onChange={handleTextChange} {...rest} />
      </Suspense>

      <ErrorMessage name={name}>{(error) => <Error>{error}</Error>}</ErrorMessage>
    </div>
  )
}
