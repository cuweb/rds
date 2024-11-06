import { useField } from 'formik'
import DatePicker from 'react-datepicker'
import { fieldStyles } from '../form.Styles'
import 'react-datepicker/dist/react-datepicker.css'
import { FieldComponentProps } from '../FormField/FormField'
import useErrorClass from '../UseError'

export interface DateTimeProps extends FieldComponentProps {
  minDate?: Date
  maxDate?: Date
  showTime?: boolean
  dateFormat?: string
  timeFormat?: string
  placeholder?: string
  isClearable?: boolean
  onChange?: (date: Date | null) => void
}

export const DateTime = ({ ...props }: DateTimeProps) => {
  const { name, placeholder, dateFormat = 'MMMM d, yyyy', showTime, timeFormat, onChange, isClearable, ...rest } = props

  const [field, , helpers] = useField(name)

  const { setValue, setError, setTouched } = helpers

  const handleDateChange = (date: Date | null) => {
    setValue(date, true)
    setError(undefined)
    if (onChange) {
      onChange(date)
    }
  }

  const errorClass = useErrorClass(name)

  return (
    <>
      <DatePicker
        isClearable={isClearable}
        name={name}
        id={name}
        autoComplete="on"
        selected={field.value ? field.value : null}
        timeFormat={timeFormat}
        dateFormat={dateFormat}
        placeholderText={placeholder ? placeholder : dateFormat}
        showTimeSelect={showTime}
        onBlur={() => {
          setTouched(true, true)
        }}
        onChange={(date: Date | null) => {
          handleDateChange(date)
        }}
        className={`${fieldStyles.input} ${fieldStyles.disabled} ${errorClass} w-full`}
        {...rest}
      />
    </>
  )
}
