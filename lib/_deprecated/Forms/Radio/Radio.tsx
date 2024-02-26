import { InputHTMLAttributes, ClassAttributes } from 'react'
import { useField, Field } from 'formik'
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'
import { formStyles, formErrorStyles } from '../../../utils/formClasses'

export interface RadioProps {
  label?: string
  caption?: string
  name: string
  options?: {
    name: string
    label: string
  }[]
  condition?: () => boolean
}

export const Radio = ({
  label,
  options,
  condition = () => true,
  ...props
}: RadioProps & InputHTMLAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement>) => {
  const [field, meta] = useField(props)

  return (
    <>
      {condition() && (
        <fieldset className={`cu-formradio ${formStyles.elementSpace}`}>
          <legend className={formStyles.label}>
            {label} {props.required && <span className="text-cu-red">*</span>}
          </legend>

          {options?.map((option) => (
            <div key={option.name} className={`${formStyles.radioList}`}>
              <Field
                {...field}
                id={option.name}
                type="radio"
                className={`${formStyles.radioInput} ${
                  meta.touched && meta.error ? formErrorStyles.inputBorder : formStyles.inputBorder
                }`}
                value={option.name}
              />
              <label htmlFor={option.name} className={formStyles.radioLabel}>
                {option.label}
              </label>
            </div>
          ))}

          {/* Validation Error Icon*/}
          {meta.touched && meta.error && (
            <div className={formErrorStyles.messageDiv}>
              <ExclamationCircleIcon className={formErrorStyles.errorIcon} aria-hidden="true" />
              <p className={formErrorStyles.errorText} id="email-error">
                {meta.error}
              </p>
            </div>
          )}
        </fieldset>
      )}
    </>
  )
}

Radio.displayName = 'Form.Radio'
