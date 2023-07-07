import { getDate, parse, format, isSameDay } from 'date-fns'
import { eventStyles } from './Listing.Styles'

export interface ListingDateBoxProps {
  startDate: string
  endDate: string
}

export const ListingDateBox = ({ startDate, endDate }: ListingDateBoxProps) => {
  const eventStartDate = parse(startDate, 'yyyy-MM-dd HH:mm:ss', new Date())
  const eventEndDate = parse(endDate, 'yyyy-MM-dd HH:mm:ss', new Date())

  const eventStartMonth = format(eventStartDate, 'MMM')
  const eventStartDay = getDate(eventStartDate)

  const isMultiDay = !isSameDay(eventStartDate, eventEndDate)

  return (
    <div className={eventStyles.dateBox}>
      {isMultiDay ? (
        <>
          <p className={eventStyles.dateBoxMonth}>Multi</p>
          <p className={eventStyles.dateBoxDay}>Day</p>
        </>
      ) : (
        <>
          <p className={eventStyles.dateBoxMonth}>{eventStartMonth}</p>
          <p className={eventStyles.dateBoxDay}>{eventStartDay}</p>
        </>
      )}
    </div>
  )
}

ListingDateBox.displayName = 'Listing.DateBox'
