'use client'
import { Field, ErrorMessage } from 'formik'
import { primaryStyles, textStyles, fieldStyles } from '../../../styles/form'
import { maxWidthClasses } from '../../../helpers/optionClasses'
import Error from '../Error/Error'

export interface InputProps {
  label: string
  name: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
  helper?: string
  required?: boolean
  options?: {
    label: string
    value: string
  }[]
}

export const Select = ({ ...props }: InputProps) => {
  const { label, name, options, maxWidth, helper, required, ...rest } = props
  const fieldmaxWidth = maxWidth ? maxWidthClasses[maxWidth] : ''
  const requiredClass = required ? primaryStyles.required : ''

  return (
    <div className={`${primaryStyles.wrapper} ${fieldmaxWidth} ${requiredClass} form-control`}>
      <label htmlFor={name} className={textStyles.label}>
        {label} {required && <span className={textStyles.required}>*</span>}
      </label>

      {helper && <div className={textStyles.helper}>{helper}</div>}

      <Field as="select" id={name} name={name} className={`${fieldStyles.input} ${fieldStyles.disabled}`} {...rest}>
        {options &&
          options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            )
          })}
      </Field>

      <ErrorMessage name={name}>{(error) => <Error>{error}</Error>}</ErrorMessage>
    </div>
  )
}
