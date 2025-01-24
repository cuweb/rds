import { ErrorMessage } from 'formik'
import { fieldStyles, primaryStyles, textStyles } from '../form.Styles'
import { maxWidthClasses } from '../../../helpers/optionClasses' // TODO: convert to main propClasses
import Error from '../Error/Error'

type maxWidthKeys = keyof typeof maxWidthClasses

export interface FieldComponentProps {
  name: string
  required?: boolean
  innerRef?: React.Ref<HTMLInputElement>
}

export interface FieldProps extends FieldComponentProps {
  label: string
  hiddenLabel?: boolean
  maxWidth?: maxWidthKeys
  helper?: string
  helperpostop?: boolean
  displayError?: boolean
  isLoading?: boolean
  isError?: string
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
  isLoading,
  isError,
}: FormFieldProps) => {
  const fieldmaxWidth = maxWidth ? maxWidthClasses[maxWidth] : ''

  const renderContent = () => {
    if (isError) {
      return <div className={fieldStyles.errorField}>{isError}</div>
    } else if (isLoading) {
      return <div className={fieldStyles.loadingField}>Loading</div>
    } else {
      return (
        <>
          {helper && helperpostop && <div className={textStyles.helper}>{helper}</div>}
          {children}
          {helper && !helperpostop && <div className={textStyles.helper}>{helper}</div>}
          {displayError && <ErrorMessage name={name}>{(error) => <Error>{error}</Error>}</ErrorMessage>}
        </>
      )
    }
  }

  return (
    <div className={`${primaryStyles.wrapper} ${fieldmaxWidth} form-control`}>
      <label htmlFor={name} className={textStyles.label + (hiddenLabel ? ' sr-only' : '')}>
        {label} {required && <span className={textStyles.required}>*</span>}
      </label>

      {renderContent()}
    </div>
  )
}

export default FormField
