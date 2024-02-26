import { getDate, parse, format, isSameDay } from 'date-fns'

export interface ListingDateThumbProps {
  startDate: string
  endDate: string
}

export const ListingDateThumb = ({ startDate, endDate }: ListingDateThumbProps) => {
  const eventStartDate = parse(startDate, 'yyyy-MM-dd HH:mm:ss', new Date())
  const eventEndDate = parse(endDate, 'yyyy-MM-dd HH:mm:ss', new Date())

  const eventStartMonth = format(eventStartDate, 'MMM')
  const eventStartDay = getDate(eventStartDate)

  const isMultiDay = !isSameDay(eventStartDate, eventEndDate)

  return (
    <h3 className="h-20 w-20 @4xl:lg:h-32 @4xl:lg:w-32 flex-col items-center justify-center rounded-md bg-white shadow-md group-hover:bg-cu-red flex">
      <span className="block text-xs @4xl:lg:text-lg font-bold uppercase text-cu-red group-hover:text-white">
        {isMultiDay ? 'Multi' : eventStartMonth}
      </span>
      <span className="block text-2xl @4xl:lg:text-4xl font-bold uppercase text-cu-black-800 group-hover:text-white">
        {isMultiDay ? 'Day' : eventStartDay}
      </span>
    </h3>
  )
}

ListingDateThumb.displayName = 'Listing.DateThumb'
