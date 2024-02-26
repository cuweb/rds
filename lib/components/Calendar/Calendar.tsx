import { useState, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { Button } from '../Button/Button'

import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isBefore,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from 'date-fns'

export interface CalendarProps {
  events?: {
    id: number
    name: string
    imageUrl: string
    startDatetime: string
    endDatetime: string
  }[]
  callback: (d: Date) => void
  defaultDate?: string
}

const styles = {
  prevNextArrows: `flex items-center justify-center flex-none p-2 text-cu-black-800 hover:text-cu-red`,
  calendarGrid: `grid grid-cols-7 gap-px mt-4 text-center`,
}

const classNames = (...classes: (string | boolean)[]) => {
  return classes.filter(Boolean).join(' ')
}

export const Calendar = ({ events, callback, defaultDate }: CalendarProps) => {
  const today = startOfToday()

  const [selectedDay, setSelectedDay] = useState(defaultDate ? new Date(defaultDate) : new Date())
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
    callback(selectedDay)
  }, [selectedDay, callback])

  return (
    <div className="cu-calendar not-prose">
      <div className="flex items-center py-2 mb-6 bg-white border rounded-lg not-prose border-cu-black-100">
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
        className={`${styles.calendarGrid} isolate overflow-hidden rounded-lg border border-cu-black-100 bg-cu-black-50 text-sm`}
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
                setSelectedDay(day)
                setShowClear(true)
              }}
              className={classNames(
                isEqual(day, selectedDay) && 'text-white',
                isSameDay(day, selectedDay) && 'text-white',
                !isEqual(day, selectedDay) && isToday(day) && 'text-cu-red',
                !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  isSameMonth(day, firstDayCurrentMonth) &&
                  'text-cu-black-900',
                !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  !isSameMonth(day, firstDayCurrentMonth) &&
                  'text-cu-black-400',
                isEqual(day, selectedDay) && isToday(day) && 'bg-cu-red',
                isEqual(day, selectedDay) && !isToday(day) && 'bg-cu-red',
                isSameDay(day, selectedDay) && isToday(day) && 'bg-cu-red',
                isSameDay(day, selectedDay) && !isToday(day) && 'bg-cu-red',
                !isEqual(day, selectedDay) && 'hover:bg-cu-red hover:text-white',
                (isEqual(day, selectedDay) || isToday(day)) && 'font-semibold',
                'mx-auto flex h-8 w-8 items-center justify-center rounded-full disabled:bg-cu-black-50 disabled:text-cu-black-900',
              )}
            >
              <time dateTime={format(day, 'yyyy-MM-dd')}>{format(day, 'd')}</time>
            </button>

            <div className="w-1 h-1 mx-auto mt-1">
              {events?.some((event) => isSameDay(parseISO(event.startDatetime), day)) && (
                <div className="w-1 h-1 rounded-full bg-sky-500"></div>
              )}
            </div>
          </div>
        ))}
      </div>
      {showClear && (
        <div className="mt-2">
          <Button
            title="Clear Calendar"
            isCenter
            isSmall
            onClick={() => {
              setSelectedDay(new Date())
              setShowClear(false)
            }}
          />
        </div>
      )}
    </div>
  )
}
