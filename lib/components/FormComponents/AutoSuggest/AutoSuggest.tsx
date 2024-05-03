import { useField, useFormikContext } from 'formik'
import Select from 'react-select'
import { fieldStyles } from '../../../styles/form'
import { FormField } from '../FormField/FormField'

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
  const { name, options, disabled = false, required, ...rest } = props
  const [field] = useField(name)
  const { setFieldValue } = useFormikContext<unknown>()

  return (
    <FormField name={name} required={required} {...rest}>
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
    </FormField>
  )
}

export default AutoSuggest
