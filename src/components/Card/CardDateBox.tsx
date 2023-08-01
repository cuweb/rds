import { getDate, parse, format, isSameDay } from 'date-fns'
import { eventStyles } from './Card.Styles'

export interface CardDateBoxProps {
  startDate: string
  endDate: string
}

export const CardDateBox = ({ startDate, endDate }: CardDateBoxProps) => {
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

CardDateBox.displayName = 'Card.DateBox'
