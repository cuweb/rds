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
  const [, meta] = useField(name)
  const { setFieldValue } = useFormikContext<unknown>()

  const errorClass = useErrorClass(name)

  const [selectedOption, setSelectedOption] = useState<Option | null>(null)

  const optionValue = options?.find((option) => option.value === meta?.value)

  useEffect(() => {
    setSelectedOption(optionValue || null)
  }, [optionValue])

  return (
    <Select
      {...rest}
      inputId={name}
      options={options}
      value={selectedOption}
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
