import { useField } from 'formik'
import DatePicker from 'react-datepicker'
import { fieldStyles } from '../../../styles/form'
import 'react-datepicker/dist/react-datepicker.css'
import { FormField } from '../FormField/FormField'
import useErrorClass from '../UserError'
import { Ref } from 'react'

export interface DateTimeProps {
  label: string
  name: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
  helper?: string
  required?: boolean
  minDate?: Date
  maxDate?: Date
  showTime?: boolean
  dateFormat?: string
  timeFormat?: string
  placeholder?: string
  refs?: Ref<HTMLInputElement | HTMLSelectElement>
}

export const DateTime = ({ ...props }: DateTimeProps) => {
  const {
    name,
    placeholder,
    showTime,
    dateFormat = 'MMMM d, yyyy',
    timeFormat = 'HH:mm',
    minDate,
    maxDate,
    required,
    ...rest
  } = props

  const [field, , helpers] = useField(name)
  const { setValue, setTouched, setError } = helpers

  const handleDateChange = (date: Date) => {
    setValue(date)
    setTouched(true)
    setError(undefined)
  }
  const errorClass = useErrorClass(name)

  return (
    <FormField name={name} required={required} {...rest}>
      <DatePicker
        selected={field.value}
        name={name}
        id={name}
        onChange={(date: Date) => {
          handleDateChange(date)
        }}
        showTimeSelect={showTime}
        timeFormat={timeFormat}
        dateFormat={dateFormat}
        minDate={minDate}
        maxDate={maxDate}
        placeholderText={placeholder ? placeholder : dateFormat}
        className={`${fieldStyles.input} ${fieldStyles.disabled} ${errorClass} w-full`}
        {...rest}
      />
    </FormField>
  )
}
