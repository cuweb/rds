import { useField } from 'formik'
import DatePicker from 'react-datepicker'
import { fieldStyles } from '../../../styles/form'
import 'react-datepicker/dist/react-datepicker.css'
import { FormField } from '../FormField/FormField'

export interface DateTimeProps {
  label: string
  name: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
  helper?: string
  required?: boolean
  customMinDate?: Date
  customMaxDate?: Date
  showTime?: boolean
  dateFormat?: string
  timeFormat?: string
}

export const DateTime = ({ ...props }: DateTimeProps) => {
  const {
    name,
    showTime,
    dateFormat = 'MMMM d, yyyy',
    timeFormat = 'HH:mm',
    customMinDate,
    customMaxDate,
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
        minDate={customMinDate}
        maxDate={customMaxDate}
        placeholderText={dateFormat}
        className={`${fieldStyles.input} ${fieldStyles.disabled} w-full`}
        {...rest}
      />
    </FormField>
  )
}
