import { useField, useFormikContext } from 'formik'
import Select from 'react-select'
import './style.css'
import { FieldProps, FormField } from '../FormField/FormField'
import useErrorClass from '../UserError'

interface Option {
  value: string
  label: string
}

export interface AutoSuggestProps extends FieldProps {
  disabled?: boolean
  options?: Option[]
}

export const AutoSuggest = ({ ...props }: AutoSuggestProps) => {
  const {
    name,
    label,
    maxWidth,
    helper,
    helperpostop,
    options,
    disabled = false,
    required,
    displayError,
    ...rest
  } = props
  const [field] = useField(name)
  const { setFieldValue } = useFormikContext<unknown>()

  const errorClass = useErrorClass(name)

  return (
    <FormField
      name={name}
      label={label}
      maxWidth={maxWidth}
      helper={helper}
      helperpostop={helperpostop}
      required={required}
      displayError={displayError}
    >
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
        className={`cu-autosuggest ${errorClass}`}
      />
    </FormField>
  )
}

export default AutoSuggest
