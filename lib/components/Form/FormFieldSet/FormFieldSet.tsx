import { ErrorMessage } from 'formik'
import { primaryStyles, textStyles, fieldStyles } from '../../../styles/form'
import { maxWidthClasses } from '../../../helpers/optionClasses'
import Error from '../Error/Error'

export interface FormFieldProps {
  children: React.ReactNode
  label: string
  name: string
  helper?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
  isInline?: boolean
  required?: boolean
  displayError?: boolean
}

export const FormFieldSet = ({ ...props }: FormFieldProps) => {
  const { children, label, name, maxWidth, helper, isInline, displayError = true, required } = props
  const fieldmaxWidth = maxWidth ? maxWidthClasses[maxWidth] : ''

  const displayInline = isInline ? fieldStyles.horizontalOptions : fieldStyles.verticalOptions

  return (
    <div className={`${primaryStyles.wrapper} ${fieldmaxWidth} form-control`}>
      <fieldset aria-describedby={name}>
        <legend className={textStyles.legend} id={name}>
          {label} {required && <span className={textStyles.required}>*</span>}
        </legend>
        <div className={displayInline}>{children}</div>
        {helper && <div className={textStyles.helper}>{helper}</div>}
      </fieldset>

      {displayError && <ErrorMessage name={name}>{(error) => <Error>{error}</Error>}</ErrorMessage>}
    </div>
  )
}
