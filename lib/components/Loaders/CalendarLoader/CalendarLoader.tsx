// interface FormLoaderWrapperProps {
//   children: React.ReactNode
// }

import { format, getDay, isBefore, startOfToday, eachDayOfInterval, endOfMonth, parse } from 'date-fns'
import { ButtonLoader } from '../ButtonLoader/ButtonLoader'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

// // Define FormLoader component
// export const FormLoaderWrapper = ({ children }: FormLoaderWrapperProps) => {
//   // Return FormLoader with children and RowLoader as property
//   return <div className="cu-loader-form cu-component flex flex-col gap-8 w-full">{children}</div>
// }

const styles = {
  prevNextArrows: `flex items-center justify-center flex-none p-2 text-cu-black-800 hover:text-cu-red`,
  calendarGrid: `grid grid-cols-7 gap-px mt-4 text-center`,
  element: `w-8 h-8 bg-cu-black-200 rounded-full `,
}

const classNames = (...classes: (string | boolean)[]) => {
  return classes.filter(Boolean).join(' ')
}

export interface CalendarLoaderProps {
  showClearButton?: boolean
}

export const CalendarLoader = ({ showClearButton }: CalendarLoaderProps) => {
  const today = startOfToday()
  const [currentMonth] = useState(format(today, 'MMM-yyyy'))
  // const [showClear, setShowClear] = useState(true)
  const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())
  const colStartClasses = ['', 'col-start-2', 'col-start-3', 'col-start-4', 'col-start-5', 'col-start-6', 'col-start-7']
  const days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })

  return (
    <>
      <div className="animate-pulse">
        <div className="cu-calendar cu-component not-prose">
          <div className="flex items-center py-2 mb-6 bg-white border rounded-lg border-cu-black-100">
            <button type="button" className={`${styles.prevNextArrows}`}>
              <span className="text-base sr-only">Previous month</span>
              <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
            </button>
            <div className="flex items-center justify-center   mx-auto">
              {/* {format(firstDayCurrentMonth, 'MMMM yyyy')} */}
              <span className="block h-6 w-48 rounded-md bg-cu-black-200"></span>
            </div>
            <button type="button" className={`${styles.prevNextArrows}`}>
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
                  // className={classNames(
                  //   isEqual(day, selectedDay) && 'text-white',
                  //   isSameDay(day, selectedDay) && 'text-white',
                  //   !isEqual(day, selectedDay) && isToday(day) && 'text-cu-red',
                  //   !isEqual(day, selectedDay) &&
                  //     !isToday(day) &&
                  //     isSameMonth(day, firstDayCurrentMonth) &&
                  //     'text-cu-black-900',
                  //   !isEqual(day, selectedDay) &&
                  //     !isToday(day) &&
                  //     !isSameMonth(day, firstDayCurrentMonth) &&
                  //     'text-cu-black-400',
                  //   isEqual(day, selectedDay) && isToday(day) && 'bg-cu-red',
                  //   isEqual(day, selectedDay) && !isToday(day) && 'bg-cu-red',
                  //   isSameDay(day, selectedDay) && isToday(day) && 'bg-cu-red',
                  //   isSameDay(day, selectedDay) && !isToday(day) && 'bg-cu-red',
                  //   !isEqual(day, selectedDay) && 'hover:bg-cu-red hover:text-white',
                  //   (isEqual(day, selectedDay) || isToday(day)) && 'font-semibold',
                  //   'mx-auto flex h-8 w-8 items-center justify-center rounded-full disabled:bg-cu-black-50 disabled:text-cu-black-900',
                  // )}
                >
                  {/* <time dateTime={format(day, 'yyyy-MM-dd')}>{format(day, 'd')}</time> */}
                  <div className={styles.element}></div>
                </button>

                <div className="w-1 h-1 mx-auto mt-1">
                  {/* {events?.some((event) => isSameDay(parseISO(event.startDatetime), day)) && (
                    <div className="w-1 h-1 rounded-full bg-sky-500"></div>
                  )} */}
                </div>
              </div>
            ))}
          </div>
          {showClearButton && (
            <div className="mt-4 flex justify-center items-center">
              <ButtonLoader number={1} isSmall={true} />
            </div>
          )}
        </div>
      </div>
    </>
  )
}
