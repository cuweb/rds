import { getDate, parse, format, isSameDay } from 'date-fns'

export interface CardDateThumbProps {
  startDate: string
  endDate: string
}

export const CardDateThumb = ({ startDate, endDate }: CardDateThumbProps) => {
  const eventStartDate = parse(startDate, 'yyyy-MM-dd HH:mm:ss', new Date())
  const eventEndDate = parse(endDate, 'yyyy-MM-dd HH:mm:ss', new Date())

  const eventStartMonth = format(eventStartDate, 'MMM')
  const eventStartDay = getDate(eventStartDate)

  const isMultiDay = !isSameDay(eventStartDate, eventEndDate)

  return (
    <div className="z-10 flex flex-col items-center justify-center w-20 h-20 mx-6 mb-2 -mt-16 bg-white rounded-md shadow-md">
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
    </div>
  )
}

CardDateThumb.displayName = 'Card.DateThumb'
