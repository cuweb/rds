import { useState, useEffect } from 'react'
import { ReactComponent as ChevronLeftIcon } from '../../assets/font-awesome/chevron-left.svg'
import { ReactComponent as ChevronRightIcon } from '../../assets/font-awesome/chevron-right.svg'
import { Button } from '../Button/Button'

import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isBefore,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from 'date-fns'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'

export interface MultiDayCalendarProps {
  events?: {
    id: number
    name: string
    imageUrl: string
    startDatetime: string
    endDatetime: string
  }[]
  callback: (selectedDays: Date[]) => void
  defaultDate?: string
}

const styles = {
  prevNextArrows: `flex items-center justify-center flex-none p-2 text-cu-black-800 hover:text-cu-red`,
  calendarGrid: `grid grid-cols-7 gap-px mt-4 text-center`,
}

const classNames = (...classes: (string | boolean)[]) => {
  return classes.filter(Boolean).join(' ')
}

export const MultiDayCalendar = ({ events, callback, defaultDate }: MultiDayCalendarProps) => {
  const today = startOfToday()

  const [selectedDays, setSelectedDays] = useState<Date[]>(defaultDate ? [new Date(defaultDate)] : [])
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  const [showClear, setShowClear] = useState(false)
  const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())
  const colStartClasses = ['', 'col-start-2', 'col-start-3', 'col-start-4', 'col-start-5', 'col-start-6', 'col-start-7']
  const days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })

  const previousMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  const nextMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  useEffect(() => {
    callback(selectedDays)
  }, [selectedDays, callback])

  return (
    <div className="cu-calendar cu-component-updated not-prose">
      <div className="flex items-center py-2 mb-6 bg-white border rounded-lg border-cu-black-100">
        <button type="button" onClick={previousMonth} className={`${styles.prevNextArrows}`}>
          <span className="text-base sr-only">Previous month</span>
          <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
        </button>
        <h2 className="flex-auto text-base font-semibold text-center text-cu-black-900">
          {format(firstDayCurrentMonth, 'MMMM yyyy')}
        </h2>
        <button onClick={nextMonth} type="button" className={`${styles.prevNextArrows}`}>
          <span className="text-base sr-only">Next month</span>
          <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>

      <div className={`${styles.calendarGrid} text-xs text-cu-black-600`}>
        <div>S</div>
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
      </div>

      <div
        className={`${styles.calendarGrid} cu-component isolate overflow-hidden rounded-lg border border-cu-black-100 bg-cu-black-50 text-sm`}
      >
        {days.map((day, dayIdx) => (
          <div
            key={day.toString()}
            className={classNames(dayIdx === 0 && colStartClasses[getDay(day)], 'bg-white py-2')}
          >
            <button
              type="button"
              disabled={isBefore(day, today)}
              onClick={() => {
                const selectedDaysISO = selectedDays.map((selectedDay) => selectedDay.toISOString())
                if (selectedDaysISO.includes(day.toISOString())) {
                  setSelectedDays(selectedDays.filter((selectedDay) => !isSameDay(selectedDay, day)))
                } else {
                  if (selectedDays.length >= 2) {
                    if (day.getTime() < selectedDays[0].getTime()) {
                      setSelectedDays([day, selectedDays[0]])
                    } else if (day.getTime() > selectedDays[0].getTime()) {
                      setSelectedDays([selectedDays[0], day])
                    }
                  } else {
                    if (selectedDays.length === 0 || selectedDays[0].getTime() < day.getTime()) {
                      setSelectedDays([...selectedDays, day])
                    } else {
                      setSelectedDays([day, ...selectedDays])
                    }
                  }
                }
                setShowClear(true)
              }}
              className={classNames(
                selectedDays.some((selectedDay) => isSameDay(selectedDay, day)) && 'selected',
                selectedDays.length === 2 &&
                  day.getTime() >= selectedDays[0].getTime() &&
                  day.getTime() <= selectedDays[1].getTime() &&
                  'bg-cu-red text-white',
                !selectedDays.some((selectedDay) => isSameDay(selectedDay, day)) && isToday(day) && 'text-cu-red',
                !selectedDays.some((selectedDay) => isSameDay(selectedDay, day)) &&
                  isSameMonth(day, firstDayCurrentMonth) &&
                  'text-cu-black-900',
                !selectedDays.some((selectedDay) => isSameDay(selectedDay, day)) &&
                  !isSameMonth(day, firstDayCurrentMonth) &&
                  'text-cu-black-400',
                selectedDays.some((selectedDay) => isSameDay(selectedDay, day)) && isToday(day) && 'bg-cu-red',
                selectedDays.some((selectedDay) => isSameDay(selectedDay, day)) &&
                  !isToday(day) &&
                  'bg-cu-red text-white',
                !selectedDays.some((selectedDay) => isSameDay(selectedDay, day)) && 'hover:bg-cu-red hover:text-white',
                isToday(day) || (selectedDays.some((selectedDay) => isSameDay(selectedDay, day)) && 'font-semibold'),
                'mx-auto flex h-8 w-8 items-center justify-center rounded-full disabled:bg-cu-black-50 disabled:text-cu-black-900',
              )}
            >
              <time dateTime={format(day, 'yyyy-MM-dd')}>{format(day, 'd')}</time>
            </button>

            <div className="w-1 h-1 mx-auto mt-1">
              {events?.some((event) => isSameDay(parseISO(event.startDatetime), day)) && (
                <div className="w-1 h-1 rounded-full bg-cu-red"></div>
              )}
            </div>
          </div>
        ))}
      </div>

      {showClear && (
        <ButtonGroup align="center">
          <Button
            title="Clear Calendar"
            isSmall
            onClick={() => {
              setSelectedDays([])
              setShowClear(false)
            }}
          />
        </ButtonGroup>
      )}
    </div>
  )
}
