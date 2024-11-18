import { useField, useFormikContext } from 'formik'
import Select from 'react-select'
import { FieldComponentProps } from '../FormField/FormField'
import useErrorClass from '../UseError'
import { useEffect, useState } from 'react'

interface Option {
  value: string
  label: string
}

export interface AutoSuggestProps extends FieldComponentProps {
  disabled?: boolean
  options?: Option[]
  onChange?: (option: string | null | undefined) => void
}

export const AutoSuggest = ({ ...props }: AutoSuggestProps) => {
  const { name, options, disabled = false, ...rest } = props
  const [field, meta] = useField(name)
  const { setFieldValue } = useFormikContext<unknown>()

  const errorClass = useErrorClass(name)

  const [selectedOption, setSelectedOption] = useState<Option | null>(null)

  console.log(field.value)

  useEffect(() => {
    const initialOption = options?.find((option) => option.value === meta?.initialValue)
    setSelectedOption(initialOption || null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (meta.touched && !meta.value) {
      setFieldValue(name, '')
      setSelectedOption(null)
    }
  }, [meta.touched, meta.value, name, setFieldValue])

  return (
    <Select
      {...rest}
      inputId={name}
      options={options}
      value={selectedOption || null}
      onChange={(option: Option | null) => {
        setFieldValue(name, option?.value)
        setSelectedOption(option)
        if (rest?.onChange) {
          rest?.onChange(option?.value)
        }
      }}
      isSearchable={true}
      isClearable={true}
      className={errorClass + ` cu-autosuggest`}
      isDisabled={disabled}
    />
  )
}
