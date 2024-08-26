import { useField, useFormikContext } from 'formik'
import Select from 'react-select'
import { FieldComponentProps } from '../FormField/FormField'
import useErrorClass from '../UseError'

interface Option {
  value: string
  label: string
}

export interface AutoSuggestProps extends FieldComponentProps {
  disabled?: boolean
  options?: Option[]
}

export const AutoSuggest = ({ ...props }: AutoSuggestProps) => {
  const { name, options, disabled = false, ...rest } = props
  const [field] = useField(name)
  const { setFieldValue } = useFormikContext<unknown>()

  const errorClass = useErrorClass(name)

  return (
    <Select
      {...rest}
      inputId={name}
      options={options}
      value={options?.find((option) => option.value === field.value)}
      onChange={(option: Option | null) => setFieldValue(name, option?.value)}
      onBlur={field.onBlur}
      isSearchable={true}
      isClearable={true}
      className={errorClass + ` cu-autosuggest`}
      isDisabled={disabled}
    />
  )
}
