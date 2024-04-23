import { Field, ErrorMessage } from 'formik'
import { primaryStyles, textStyles, fieldStyles } from '../../../styles/form'
import { maxWidthClasses } from '../../../helpers/optionClasses'
import Error from '../Error/Error'

export interface InputProps {
  label: string
  hiddenLabel?: boolean
  name: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
  helper?: string
  required?: boolean
  displayError?: boolean
}

export const Input = ({ ...props }: InputProps) => {
  const { label, hiddenLabel, name, maxWidth, helper, required, displayError = true, ...rest } = props
  const fieldmaxWidth = maxWidth ? maxWidthClasses[maxWidth] : ''
  const requiredClass = required ? primaryStyles.required : ''

  return (
    <div className={`${primaryStyles.wrapper} ${fieldmaxWidth} ${requiredClass} form-control`}>
      <label htmlFor={name} className={textStyles.label + (hiddenLabel ? ' sr-only' : '')}>
        {label} {required && <span className={textStyles.required}>*</span>}
      </label>

      {helper && <div className={textStyles.helper}>{helper}</div>}

      <Field type="text" id={name} name={name} className={`${fieldStyles.input} ${fieldStyles.disabled}`} {...rest} />

      {displayError && <ErrorMessage name={name}>{(error) => <Error>{error}</Error>}</ErrorMessage>}
    </div>
  )
}
