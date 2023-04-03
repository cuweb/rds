import { getDate, getMonth, parseISO } from 'date-fns'
import { eventStyles } from './Card.Styles'

export interface CardDateBoxProps {
  startDate: string
}

export const CardDateBox = ({ startDate }: CardDateBoxProps) => {
  const getMonthName = (month: number, short = false) => {
    const d = new Date()
    d.setMonth(month)
    const monthName = d.toLocaleString('default', {
      month: short ? 'short' : 'long',
    })
    return monthName
  }

  const getStartDate = parseISO(startDate)
  const eventStartDate = getDate(getStartDate)
  const eventStartMonth = getMonth(getStartDate)

  return (
    <div className={eventStyles.dateBox}>
      <p className={eventStyles.dateBoxMonth}>{getMonthName(eventStartMonth, true)}</p>
      <p className={eventStyles.dateBoxDay}>{eventStartDate}</p>
    </div>
  )
}
