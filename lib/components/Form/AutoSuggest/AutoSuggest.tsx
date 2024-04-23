import { useField, ErrorMessage, useFormikContext } from 'formik'
import Select from 'react-select'
import { primaryStyles, textStyles, fieldStyles } from '../../../styles/form'
import { maxWidthClasses } from '../../../helpers/optionClasses'
import Error from '../Error/Error'

interface Option {
  value: string
  label: string
}

export interface AutoSuggestProps {
  label: string
  name: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
  helper?: string
  required?: boolean
  options?: { value: string; label: string }[]
  disabled?: boolean
}

export const AutoSuggest = ({ ...props }: AutoSuggestProps) => {
  const { label, name, options, maxWidth, helper, disabled = false, required, ...rest } = props

  const fieldmaxWidth = maxWidth ? maxWidthClasses[maxWidth] : ''
  const requiredClass = required ? primaryStyles.required : ''
  const [field] = useField(name)
  const { setFieldValue } = useFormikContext<unknown>()

  return (
    <div className={`${primaryStyles.wrapper} ${fieldmaxWidth} ${requiredClass} form-control`}>
      <label htmlFor={name} className={textStyles.label}>
        {label} {required && <span className={textStyles.required}>*</span>}
      </label>

      {helper && <div className={textStyles.helper}>{helper}</div>}

      <Select
        {...rest}
        inputId={name}
        options={options}
        value={options?.find((option) => option.value === field.value)}
        onChange={(option: Option | null) => setFieldValue(name, option?.value)}
        onBlur={field.onBlur}
        isSearchable={true}
        isClearable={true}
        isDisabled={disabled}
        className={`${fieldStyles.input} ${fieldStyles.disabled}`}
      />

      <ErrorMessage name={name}>{(error) => <Error>{error}</Error>}</ErrorMessage>
    </div>
  )
}

export default AutoSuggest
