import { ErrorMessage } from 'formik'
import { primaryStyles, textStyles, fieldStyles } from '../form.Styles'
import { maxWidthClasses } from '../../../helpers/optionClasses' // TODO: convert to main propClasses
import Error from '../Error/Error'

type maxWidthKeys = keyof typeof maxWidthClasses

export interface FieldSetComponentProps {
  name: string
  required?: boolean
  innerRef?: React.Ref<HTMLInputElement>
}

export interface FieldSetProps extends FieldSetComponentProps {
  label: string
  hiddenLabel?: boolean
  maxWidth?: maxWidthKeys
  helper?: string
  helperpostop?: boolean
  isInline?: boolean
  displayError?: boolean
  isLoading?: boolean
  isError?: string
}

export interface FormFieldSetProps extends FieldSetProps {
  children: React.ReactNode
}

export const FormFieldSet = ({ ...props }: FormFieldSetProps) => {
  const {
    children,
    label,
    name,
    maxWidth,
    helper,
    isInline,
    displayError = true,
    required,
    helperpostop,
    isError,
    isLoading,
  } = props
  const fieldmaxWidth = maxWidth ? maxWidthClasses[maxWidth] : ''

  const displayInline = isInline ? fieldStyles.horizontalOptions : fieldStyles.verticalOptions

  const renderContent = () => {
    if (isError) {
      return <div className={fieldStyles.errorFieldSet}>{isError}</div>
    } else if (isLoading) {
      return <div className={fieldStyles.loadingFieldSet}>Loading</div>
    } else {
      return (
        <>
          {helper && helperpostop && <div className={textStyles.helper}>{helper}</div>}
          <div className={displayInline}>{children}</div>
          {helper && !helperpostop && <div className={textStyles.helper}>{helper}</div>}
        </>
      )
    }
  }
  return (
    <div className={`${primaryStyles.wrapper} ${fieldmaxWidth} form-control`}>
      <fieldset aria-describedby={name}>
        <legend className={textStyles.legend} id={name}>
          {label} {required && <span className={textStyles.required}>*</span>}
        </legend>
        {renderContent()}
      </fieldset>

      {displayError && !isError && !isLoading && (
        <ErrorMessage name={name}>{(error) => <Error>{error}</Error>}</ErrorMessage>
      )}
    </div>
  )
}
