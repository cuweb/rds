import { ErrorMessage } from 'formik'
import { primaryStyles, textStyles } from '../form.Styles'
import { maxWidthClasses } from '../../../helpers/optionClasses' // TODO: convert to main propClasses
import Error from '../Error/Error'

type maxWidthKeys = keyof typeof maxWidthClasses

export interface FieldComponentProps {
  name: string
  required?: boolean
}

export interface FieldProps extends FieldComponentProps {
  label: string
  hiddenLabel?: boolean
  maxWidth?: maxWidthKeys
  helper?: string
  helperpostop?: boolean
  displayError?: boolean
}

export interface FormFieldProps extends FieldProps {
  children: React.ReactNode
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
