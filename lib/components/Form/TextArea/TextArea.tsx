import { Field, ErrorMessage } from 'formik'
import { primaryStyles, textStyles, fieldStyles } from '../../../styles/form'
import { maxWidthClasses } from '../../../helpers/optionClasses'
import Error from '../Error/Error'

export interface TextAreaProps {
  label: string
  name: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
  helper?: string
  required?: boolean
}

export const TextArea = ({ ...props }: TextAreaProps) => {
  const { label, name, maxWidth, helper, required, ...rest } = props
  const fieldmaxWidth = maxWidth ? maxWidthClasses[maxWidth] : ''

  return (
    <div className={`${primaryStyles.wrapper} ${fieldmaxWidth} form-control`}>
      <label htmlFor={name} className={textStyles.label}>
        {label} {required && <span className={textStyles.required}>*</span>}
      </label>

      {helper && <div className={textStyles.helper}>{helper}</div>}

      <Field as="textarea" id={name} name={name} className={`${fieldStyles.input} ${fieldStyles.disabled}`} {...rest} />

      <ErrorMessage name={name}>{(error) => <Error>{error}</Error>}</ErrorMessage>
    </div>
  )
}
