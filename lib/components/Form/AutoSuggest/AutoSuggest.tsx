import { useField, useFormikContext } from 'formik'
import Select from 'react-select'
import { FieldComponentProps } from '../FormField/FormField'
import useErrorClass from '../UseError'
import { useEffect, useState } from 'react'
import { CSSObject } from '@emotion/react'

interface Option {
  value: string
  label: string
  [key: string]: string | number | boolean
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

  const optionValue = options?.find((option: Option) => option.value === meta?.value)

  useEffect(() => {
    setSelectedOption(optionValue || null)
  }, [optionValue])

  const customStyles = {
    option: (provided: CSSObject) => ({
      ...provided,
      cursor: 'pointer',
      fontSize: '1rem',
    }),
    menu: (provided: CSSObject) => ({
      ...provided,
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      paddingBottom: '0.5rem',
    }),
  }

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
      styles={customStyles}
    />
  )
}
