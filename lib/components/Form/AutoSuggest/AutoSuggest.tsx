import { useField, useFormikContext } from 'formik'
import Select from 'react-select'
import { FieldComponentProps } from '../FormField/FormField'
import useErrorClass from '../UseError'
import { useEffect, useState } from 'react';

interface Option {
  value: string
  label: string
}

export interface AutoSuggestProps extends FieldComponentProps {
  disabled?: boolean
  options?: Option[]
}

export const AutoSuggest = ({ ...props }: AutoSuggestProps) => {
  const { name, options, disabled = false, ...rest } = props;
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext<unknown>();
  const errorClass = useErrorClass(name);



  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  
  useEffect(() => {
    const initialOption = options?.find((option) =>   option.value === field.value)
    
    setSelectedOption(initialOption || null)
  }, [field.value, options])

  console.log("selectedOption", selectedOption)
  
    useEffect(() => {
    if (meta.touched && !meta.value) {
      setFieldValue(name, '')
      setSelectedOption(null)
    }
    }, [meta.touched, meta.value])
  
  
  // value={options?.find((option) => option.value === field.value)}

  return (
    <Select
      {...rest}
      inputId={name}
      options={options}
      value={selectedOption}
      onChange={(option: Option | null) => { setFieldValue(name, option?.value); setSelectedOption(option) }}
      onBlur={field.onBlur}
      isSearchable={true}
      isClearable={true}
      className={errorClass + ` cu-autosuggest`}
      isDisabled={disabled}
    />
  )
}
