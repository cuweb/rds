import { useField } from 'formik'
import DatePicker from 'react-datepicker'
import { fieldStyles } from '../../../styles/form'
import 'react-datepicker/dist/react-datepicker.css'
import { FieldProps, FormField } from '../FormField/FormField'
import useErrorClass from '../UseError'

export interface DateTimeProps extends FieldProps {
  minDate?: Date
  maxDate?: Date
  showTime?: boolean
  dateFormat?: string
  timeFormat?: string
  placeholder?: string
  onChange?: (date: Date) => void
}

export const DateTime = ({ ...props }: DateTimeProps) => {
  const {
    name,
    label,
    maxWidth,
    helper,
    helperpostop,
    displayError,
    placeholder,
    showTime,
    dateFormat = 'MMMM d, yyyy',
    timeFormat = 'HH:mm',
    required,
    hiddenLabel,
    onChange,
    ...rest
  } = props

  const [field, , helpers] = useField(name)

  const { setValue, setTouched, setError } = helpers

  const handleDateChange = (date: Date) => {
    setValue(date)
    setTouched(true)
    setError(undefined)

    if (onChange) {
      onChange(date)
    }
  }
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
      hiddenLabel={hiddenLabel}
    >
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
        placeholderText={placeholder ? placeholder : dateFormat}
        className={`${fieldStyles.input} ${fieldStyles.disabled} ${errorClass} w-full`}
        {...rest}
      />
    </FormField>
  )
}
