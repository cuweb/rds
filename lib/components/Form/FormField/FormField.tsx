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
  helperpostop?: boolean
  required?: boolean
  displayError?: boolean
  disabled?: boolean // Add disabled to the interface if needed
}

export const FormField = ({
  children,
  label,
  hiddenLabel,
  name,
  maxWidth,
  helper,
  helperpostop = false,
  required = false,
  displayError = true,
}: FormFieldProps) => {
  const fieldmaxWidth = maxWidth ? maxWidthClasses[maxWidth] : ''

  return (
    <div className={`${primaryStyles.wrapper} ${fieldmaxWidth} form-control`}>
      <label htmlFor={name} className={textStyles.label + (hiddenLabel ? ' sr-only' : '')}>
        {label} {required && <span className={textStyles.required}>*</span>}
      </label>

      {helper && helperpostop && <div className={textStyles.helper}>{helper}</div>}

      {children}

      {helper && !helperpostop && <div className={textStyles.helper}>{helper}</div>}

      {displayError && <ErrorMessage name={name}>{(error) => <Error>{error}</Error>}</ErrorMessage>}
    </div>
  )
}

export default FormField
