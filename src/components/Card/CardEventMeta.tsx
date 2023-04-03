import { getDate, getMonth, isSameDay, parseISO } from 'date-fns'
import { CalendarDaysIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { metaStyles } from './Card.Styles'

export interface CardEventMetaProps {
  startDateTime: string
  endDateTime: string
  onCampus: boolean
  onCampusBuilding?: string | null
  onCampusRoomNumber?: string | null
  eventAddress?: string
}

export const CardEventMeta = ({
  startDateTime,
  endDateTime,
  onCampus,
  onCampusBuilding,
  onCampusRoomNumber,
  eventAddress,
}: CardEventMetaProps) => {
  // Get event month by name
  const getMonthName = (month: number, short = false) => {
    const d = new Date()
    d.setMonth(month)
    const monthName = d.toLocaleString('default', {
      month: short ? 'short' : 'long',
    })
    return monthName
  }

  // Format event time
  const formatTime = (date: Date) => {
    let hours = date.getHours()
    let minutes = date.getMinutes()
    const ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    hours = hours ? hours : 12
    minutes = minutes < 10 ? 0 + minutes : minutes
    const strTime = hours + ':' + minutes + ' ' + ampm
    return strTime
  }

  // Set start and end date constants
  const startDate = parseISO(startDateTime)
  const endDate = parseISO(endDateTime)
  const eventStartDate = getDate(startDate)
  const eventStartMonth = getMonth(startDate)
  const eventEndDate = getDate(endDate)
  const isEventSameDay = isSameDay(startDate, endDate)

  // Set single and multi-day constants
  const singleDayEvent = formatTime(startDate) + ' — ' + formatTime(endDate)
  const multiDayEvent = getMonthName(eventStartMonth) + ' ' + eventStartDate + ' — ' + eventEndDate

  // Check if multiday
  const multiDayDisplay = () => {
    if (!isEventSameDay) {
      return (
        <>
          <CalendarDaysIcon className={metaStyles.redIcon} aria-hidden="true" />
          {multiDayEvent}
        </>
      )
    } else {
      return (
        <>
          <ClockIcon className={metaStyles.redIcon} aria-hidden="true" />
          {singleDayEvent}
        </>
      )
    }
  }

  return (
    <ul className={metaStyles.wrapper}>
      <li className={`${metaStyles.item} ${metaStyles.alignIcon}`}>{multiDayDisplay()}</li>
      <li className={`${metaStyles.item} ${metaStyles.alignIcon}`}>
        <MapPinIcon className={metaStyles.redIcon} aria-hidden="true" />
        {onCampus ? onCampusRoomNumber + ' ' + onCampusBuilding : eventAddress}
      </li>
    </ul>
  )
}
