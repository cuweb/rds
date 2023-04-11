import { getDate, parse, format } from 'date-fns'
import { eventStyles } from './Listing.Styles'

export interface ListingDateBoxProps {
  startDate: string
}

export const ListingDateBox = ({ startDate }: ListingDateBoxProps) => {
  const eventStartDate = parse(startDate, 'yyyy-MM-dd HH:mm:ss', new Date())
  const eventStartMonth = format(eventStartDate, 'MMM')
  const eventStartDay = getDate(eventStartDate)

  return (
    <div className={eventStyles.dateBox}>
      <p className={eventStyles.dateBoxMonth}>{eventStartMonth}</p>
      <p className={eventStyles.dateBoxDay}>{eventStartDay}</p>
    </div>
  )
}

ListingDateBox.displayName = 'Listing.DateBox'
