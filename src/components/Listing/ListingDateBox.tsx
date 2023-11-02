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
    <h3 className={eventStyles.dateBox}>
      {isMultiDay ? (
        <>
          <span className={eventStyles.dateBoxMonth}>Multi</span>
          <span className={eventStyles.dateBoxDay}>Day</span>
        </>
      ) : (
        <>
          <span className={eventStyles.dateBoxMonth}>{eventStartMonth}</span>
          <span className={eventStyles.dateBoxDay}>{eventStartDay}</span>
        </>
      )}
    </h3>
  )
}

ListingDateBox.displayName = 'Listing.DateBox'
