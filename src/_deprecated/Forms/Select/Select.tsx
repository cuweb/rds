import { SelectHTMLAttributes, ClassAttributes } from 'react'
import { useField } from 'formik'
import { ExclamationCircleIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
import { formStyles, formErrorStyles } from '../../../utils/formClasses'

export interface SelectProps {
  label?: string
  name: string
  options?: {
    label: string
    value: string
  }[]
  condition?: () => boolean
}

export const Select = ({
  label,
  options,
  condition = () => true,
  ...props
}: SelectProps & SelectHTMLAttributes<HTMLSelectElement> & ClassAttributes<HTMLSelectElement>) => {
  const [field, meta] = useField(props)

  return (
    <>
      {condition() && (
        <div className={`cu-formselect ${formStyles.elementSpace}`}>
          <label htmlFor={field.name} className={formStyles.label}>
            {label} {props.required && <span className="text-cu-red">*</span>}
          </label>

          <div className="relative">
            <select
              {...field}
              {...{ ...props, required: false }}
              id={field.name}
              name={field.name}
              className={`${formStyles.input} ${meta.touched && meta.error ? formErrorStyles.inputBorder : ''} bg-none`}
              aria-invalid={meta.touched && meta.error ? true : false}
              aria-describedby={field.name + (meta.touched && meta.error ? '-error' : '')}
            >
              {options?.map((option) => (
                <option value={option.value} key={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="absolute right-3.5 top-2.5">
              <ChevronDownIcon width="16" height="16" />
            </div>
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
