import { ErrorMessage } from 'formik'
import { primaryStyles, textStyles, fieldStyles } from '../../../styles/form'
import { maxWidthClasses } from '../../../helpers/optionClasses'
import Error from '../Error/Error'

export interface FieldSetComponentProps {
  name: string
  required?: boolean
}

export interface FieldSetProps extends FieldSetComponentProps {
  label: string
  hiddenLabel?: boolean
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
  helper?: string
  helperpostop?: boolean
  isInline?: boolean
  displayError?: boolean
}

export interface FormFieldSetProps extends FieldSetProps {
  children: React.ReactNode
}

export const FormFieldSet = ({ ...props }: FormFieldSetProps) => {
  const { children, label, name, maxWidth, helper, isInline, displayError = true, required, helperpostop } = props
  const fieldmaxWidth = maxWidth ? maxWidthClasses[maxWidth] : ''

  const displayInline = isInline ? fieldStyles.horizontalOptions : fieldStyles.verticalOptions

  return (
    <div className={`${primaryStyles.wrapper} ${fieldmaxWidth} form-control`}>
      <fieldset aria-describedby={name}>
        <legend className={textStyles.legend} id={name}>
          {label} {required && <span className={textStyles.required}>*</span>}
        </legend>
        {helper && helperpostop && <div className={textStyles.helper}>{helper}</div>}

        <div className={displayInline}>{children}</div>
        {helper && !helperpostop && <div className={textStyles.helper}>{helper}</div>}
      </fieldset>

      {displayError && <ErrorMessage name={name}>{(error) => <Error>{error}</Error>}</ErrorMessage>}
    </div>
  )
}
