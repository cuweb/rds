import { ErrorMessage } from 'formik'
import { primaryStyles, textStyles } from '../../../styles/form'
import { maxWidthClasses } from '../../../helpers/optionClasses'
import Error from '../Error/Error'

export interface FormFieldProps {
  children: React.ReactNode
  label: string
  hiddenLabel?: boolean
  name: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
  helper?: string
  required?: boolean
  displayError?: boolean
}

export const FormField = ({ ...props }: FormFieldProps) => {
  const { children, label, hiddenLabel, name, maxWidth, helper, required, displayError = true } = props
  const fieldmaxWidth = maxWidth ? maxWidthClasses[maxWidth] : ''

  return (
    <div className={`${primaryStyles.wrapper} ${fieldmaxWidth} form-control`}>
      <label htmlFor={name} className={textStyles.label + (hiddenLabel ? ' sr-only' : '')}>
        {label} {required && <span className={textStyles.required}>*</span>}
      </label>

      {children}

      {helper && <div className={textStyles.helper}>{helper}</div>}

      {displayError && <ErrorMessage name={name}>{(error) => <Error>{error}</Error>}</ErrorMessage>}
    </div>
  )
}
