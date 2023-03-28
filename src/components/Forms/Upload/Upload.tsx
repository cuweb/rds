import { InputHTMLAttributes, ClassAttributes, useState } from 'react'
import { useField } from 'formik'
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'
import { formStyles, formErrorStyles } from '../../../utils/formClasses'
import { XMarkIcon } from '@heroicons/react/24/outline'

export interface UploadProps {
  label?: string
  name: string
  type?: string
  setPreview?: any
  resetUpload?: any
  condition?: () => boolean
}

export const Upload = ({
  label,
  condition = () => true,
  setPreview,
  resetUpload,
  ...props
}: UploadProps & InputHTMLAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement>) => {
  const [field, meta, helpers] = useField(props)

  // image types
  const imageMimeType = /image\/(png|jpg|jpeg)/i

  // set image preview
  const imagePreview = (event: any) => {
    const image = event.target.files[0]
    if (!image.type.match(imageMimeType)) {
      return setPreview(null)
    }
    const fileReader = new FileReader()
    fileReader.readAsDataURL(image)
    fileReader.onload = (e) => {
      setPreview(e.target?.result)
    }
  }

  // upload reset
  const inputReset = () => {
    helpers.setValue('')
    setPreview(null)
    resetUpload()
  }

  return (
    <>
      {condition() && (
        <div className={formStyles.elementSpace}>
          <label htmlFor={field.name} className={formStyles.label}>
            {label} {props.required && <span className="text-cu-red">*</span>}
          </label>

          <div className="flex">
            {/* Input Field  */}
            <input
              {...field}
              {...props}
              id={field.name}
              type="file"
              onChange={imagePreview}
              className={`${formStyles.input} ${meta.touched && meta.error ? formErrorStyles.inputBorder : ''}`}
              aria-invalid={meta.touched && meta.error ? true : false}
              aria-describedby={field.name + (meta.touched && meta.error ? '-error' : '')}
            />
            <button
              type="button"
              onClick={inputReset}
              className="font-semibol relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm"
            >
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {/* Validation Error Icon*/}
          {meta.touched && meta.error && (
            <div className={formErrorStyles.messageDiv}>
              <ExclamationCircleIcon className={formErrorStyles.errorIcon} aria-hidden="true" />
              <p className={formErrorStyles.errorText} id="email-error">
                {meta.error}
              </p>
            </div>
          )}
        </div>
      )}
    </>
  )
}

Upload.displayName = 'Form.Upload'
