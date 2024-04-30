import { useState, Suspense } from 'react'
import { useField } from 'formik'
import 'react-quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'
import { FormField } from '../FormField/FormField'

export interface WYSIWYGProps {
  label: string
  name: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
  helper?: string
  required?: boolean
  displayError?: boolean
}

export const WYSIWYG = ({ ...props }: WYSIWYGProps) => {
  const { name, ...rest } = props
  const [field] = useField(name)
  const [text, setText] = useState(field.value)

  const handleTextChange = (value: unknown) => {
    setText(value)
    field.onChange({ target: { name, value: value } })
  }

  return (
    <FormField name={name} {...rest}>
      {/* Use Suspense to wrap the lazy-loaded component */}
      <Suspense fallback={<div>Loading...</div>}>
        <ReactQuill value={text} onChange={handleTextChange} {...rest} />
      </Suspense>
    </FormField>
  )
}
