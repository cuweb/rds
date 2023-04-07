import { getDate, parse, format } from 'date-fns'
import { eventStyles } from './Card.Styles'

export interface CardDateBoxProps {
  startDate: string
}

export const CardDateBox = ({ startDate }: CardDateBoxProps) => {
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

CardDateBox.displayName = 'Card.DateBox'
