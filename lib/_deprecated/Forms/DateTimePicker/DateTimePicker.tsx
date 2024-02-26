import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { format } from 'date-fns'
import { useField } from 'formik'
import type { FieldHookConfig } from 'formik'
import { useCallback, useEffect, useState } from 'react'
import { formStyles } from '../../../utils/formClasses'
import { Calendar } from '../../../components/Calendar/Calendar'

const styles = {
  select: `text-xs rounded-md outline-none appearance-none border-cu-black-100 text-cu-black-900 focus:border-red-500 focus:ring-0`,
}

export interface PickerProps {
  label?: string
  condition?: () => boolean
  startDate?: string
  endDate?: string
}

export const DateTimePicker = ({
  startDate,
  endDate,
  label,
  condition = () => true,
  ...props
}: PickerProps & FieldHookConfig<string>) => {
  const [field, meta, helper] = useField(props)

  const Hour12FormatDate = startDate
    ? format(new Date(startDate), 'h:mm a')
    : endDate
      ? format(new Date(endDate), 'h:mm a')
      : null

  const DateSplit = Hour12FormatDate?.split(' ').join(':').split(':')

  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'))
  const [minutes, setMinutes] = useState(
    startDate && DateSplit ? DateSplit[1] : endDate && DateSplit ? DateSplit[1] : '00',
  )
  const [hours, setHours] = useState(startDate && DateSplit ? DateSplit[0] : endDate && DateSplit ? DateSplit[0] : '01')
  const [noon, setNoon] = useState(startDate && DateSplit ? DateSplit[2] : endDate && DateSplit ? DateSplit[2] : 'AM')

  const callbackcal = useCallback(
    (itemSelected: Date) => setSelectedDate(format(new Date(itemSelected), 'yyyy-MM-dd')),
    [setSelectedDate],
  )

  const convertTime12to24 = (time12h: string) => {
    const [time, modifier] = time12h.split(' ')
    const timeSplit = time.split(':')

    if (timeSplit[0] === '12') {
      timeSplit[0] = '00'
    }

    if (modifier === 'PM') {
      timeSplit[0] = `${parseInt(timeSplit[0], 10) + 12}`
    }

    return `${timeSplit[0].padStart(2, '0')}:${timeSplit[1]}:00`
  }

  const time = convertTime12to24(`${hours}:${minutes} ${noon}`)
  const handleMinutesChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMinutes(event.target.value)
  }

  const handleHoursChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setHours(event.target.value)
    field.onChange(event)
  }

  const handleNoonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNoon(event.target.value)
    field.onChange(event)
  }

  useEffect(() => {
    helper.setValue(selectedDate + ' ' + time)
  }, [time, selectedDate])

  return (
    <>
      {condition() && (
        <div className={`cu-formdatetimepicker ${formStyles.elementSpace}`}>
          <label htmlFor={field.name} className={formStyles.label}>
            {label} {props.required && <span className="text-cu-red">*</span>}
          </label>
          <div {...field} id={field.name} aria-invalid={meta.touched && meta.error ? true : false}>
            <Calendar callback={callbackcal} defaultDate={startDate ? startDate : endDate} />
            <div className="inline-flex gap-3 p-3 mt-6 bg-white border rounded-lg border-cu-black-100">
              <div>
                <select
                  id="field-hours"
                  value={hours}
                  onChange={handleHoursChange}
                  name="hours"
                  className={styles.select}
                >
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                      {num < 10 ? '0' + num : num}
                    </option>
                  ))}
                </select>
                <div className="absolute right-2 top-3">
                  <ChevronDownIcon width="12" height="12" />
                </div>
              </div>

              <div>
                <select
                  id="field-minutes"
                  value={minutes}
                  onChange={handleMinutesChange}
                  name="minutes"
                  className={styles.select}
                >
                  <option key="00" value="00">
                    00
                  </option>
                  <option key="15" value="15">
                    15
                  </option>
                  <option key="30" value="30">
                    30
                  </option>
                  <option key="45" value="45">
                    45
                  </option>
                </select>
                <div className="absolute right-2 top-3">
                  <ChevronDownIcon width="12" height="12" />
                </div>
              </div>

              <div>
                <select id="field-ampm" value={noon} onChange={handleNoonChange} name="ampm" className={styles.select}>
                  <option key="AM" value="AM">
                    AM
                  </option>
                  <option key="PM" value="PM">
                    PM
                  </option>
                </select>
                <div className="absolute right-2 top-3">
                  <ChevronDownIcon width="12" height="12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
