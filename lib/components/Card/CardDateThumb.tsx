import { getDate, parse, format, isSameDay } from 'date-fns'

export interface CardDateThumbProps {
  as?: 'h2' | 'h3'
  startDate: string
  endDate: string
}

export const CardDateThumb = ({ as = 'h2', startDate, endDate }: CardDateThumbProps) => {
  const DateWrapperComponent = as

  const eventStartDate = parse(startDate, 'yyyy-MM-dd HH:mm:ss', new Date())
  const eventEndDate = parse(endDate, 'yyyy-MM-dd HH:mm:ss', new Date())

  const eventStartMonth = format(eventStartDate, 'MMM')
  const eventStartDay = getDate(eventStartDate)

  const isMultiDay = !isSameDay(eventStartDate, eventEndDate)

  return (
    <DateWrapperComponent className="z-10 flex flex-col items-center justify-center w-20 h-20 mx-6 mb-2 -mt-16 bg-white rounded-md shadow-md">
      {isMultiDay ? (
        <>
          <span className="block text-xs font-bold uppercase text-cu-red">Multi</span>
          <span className="block text-2xl font-bold uppercase text-cu-black-800">Day</span>
        </>
      ) : (
        <>
          <span className="block text-xs font-bold uppercase text-cu-red">{eventStartMonth}</span>
          <span className="block text-2xl font-bold uppercase text-cu-black-800">{eventStartDay}</span>
        </>
      )}
    </DateWrapperComponent>
  )
}

CardDateThumb.displayName = 'Card.DateThumb'
