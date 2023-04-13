import { Field, useField } from 'formik'
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'
import { formStyles, formErrorStyles } from '../../../utils/formClasses'
import { XMarkIcon } from '@heroicons/react/24/outline'

export interface UploadProps {
  label?: string
  name: string
  type?: string
  setPreview?: any
  onReset?: any
  onUpload?: any
  onValidate?: any
  condition?: () => boolean
}

export const Upload = ({ label, onReset, onUpload, onValidate, setPreview, condition = () => true, ...props }: any) => {
  const [field, meta, helpers] = useField(props.name)

  // image types
  const imageMimeType = /image\/(png|jpg|jpeg)/i

  // set image preview
  const imagePreview = async (event: any) => {
    const image = event.target.files[0]

    if (!image) {
      helpers.setValue(undefined)
      setPreview(null)
      return
    }

    helpers.setError('MOO')

    // helpers.setValue(await onUpload(image))

    if (!image.type.match(imageMimeType)) {
      return setPreview(null)
    }

    const fileReader = new FileReader()
    fileReader.readAsDataURL(image)
    fileReader.onloadend = (e) => {
      setPreview(e.target?.result)
    }
  }

  // upload reset
  const inputReset = () => {
    onReset(meta.value)
    setPreview(null)
    helpers.setValue('')
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
            <Field
              field={field}
              id={field.name}
              component={UploadField}
              onChange={imagePreview}
              className={`${formStyles.input} ${
                meta.touched && meta.error ? formErrorStyles.inputBorder : ''
              } text-transparent`}
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
          {meta.error && (
            <div className={formErrorStyles.messageDiv}>
              <ExclamationCircleIcon className={formErrorStyles.errorIcon} aria-hidden="true" />
              <p className={formErrorStyles.errorText} id="email-error">
                {meta.error}
              </p>
            </div>
          )}
          {meta.error}
        </div>
      )}
    </>
  )
}

const UploadField = ({ label, ...props }: any) => {
  return (
    <>
      <Field variant="outlined" name="uploader" title={label} type={'file'} {...props} />
    </>
  )
}

Upload.displayName = 'Form.Upload'
