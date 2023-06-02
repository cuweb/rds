import { InputHTMLAttributes, ClassAttributes } from 'react'
import { useField, Field } from 'formik'
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'
import { formStyles, formErrorStyles } from '../../../utils/formClasses'

export interface CheckboxProps {
  label?: string
  caption?: string
  name: string
  options?: {
    name: string
    label: string
    id: number
  }[]
  condition?: () => boolean
}

export const Checkbox = ({
  label,
  options,
  condition = () => true,
  ...props
}: CheckboxProps & InputHTMLAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement>) => {
  const [field, meta] = useField(props)

  return (
    <>
      {condition() && (
        <fieldset className={`cu-formcheckbox ${formStyles.elementSpace}`}>
          <legend className={formStyles.label}>
            {label} {props.required && <span className="text-cu-red">*</span>}
          </legend>

          {options?.map((option) => (
            <div className={`${formStyles.checkboxList}`} key={option.id}>
              <Field
                {...field}
                id={option.name}
                type="checkbox"
                className={`${formStyles.checkboxInput} ${
                  meta.touched && meta.error ? formErrorStyles.inputBorder : formStyles.inputBorder
                }`}
                value={option.name}
              />
              <label htmlFor={option.name} className={formStyles.checkboxLabel}>
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

Checkbox.displayName = 'Form.Checkbox'
