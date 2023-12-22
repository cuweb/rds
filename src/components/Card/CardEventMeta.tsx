import { isSameDay, parse, format, getDate } from 'date-fns'
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
  // Get start date and time
  const startDate = parse(startDateTime, 'yyyy-MM-dd HH:mm:ss', new Date())
  const startMonth = format(startDate, 'MMMM')
  const startDay = getDate(startDate)
  const startHours = startDate.getHours() % 12 || 12
  const startMinutes = format(startDate, 'mm')
  const startAmPm = format(startDate, 'a')

  // Get end date and time
  const endDate = parse(endDateTime, 'yyyy-MM-dd HH:mm:ss', new Date())
  const endMonth = format(endDate, 'MMMM')
  const endDay = getDate(endDate)
  const endHours = endDate.getHours() % 12 || 12
  const endMinutes = format(endDate, 'mm')
  const endAmPm = format(endDate, 'a')

  // Set final meta
  const startTime = `${startHours}:${startMinutes} ${startAmPm}`
  const endTime = `${endHours}:${endMinutes} ${endAmPm}`

  // Check if start and end date is the same
  const isEventSameDay = isSameDay(startDate, endDate)

  // Check if multiday
  const multiDayDisplay = () => {
    if (!isEventSameDay) {
      return (
        <>
          <CalendarDaysIcon className={metaStyles.redIcon} aria-hidden="true" />
          {`${startMonth} ${startDay} — ${endMonth} ${endDay}`}
        </>
      )
    } else {
      return (
        <>
          <ClockIcon className={metaStyles.redIcon} aria-hidden="true" />
          {`${startTime} — ${endTime}`}
        </>
      )
    }
  }

  return (
    <ul className={metaStyles.list}>
      <li className={`${metaStyles.font} ${metaStyles.alignIcon}`}>{multiDayDisplay()}</li>
      <li className={`${metaStyles.font} ${metaStyles.alignIcon}`}>
        <MapPinIcon className={metaStyles.redIcon} aria-hidden="true" />
        {onCampus ? onCampusRoomNumber + ' ' + onCampusBuilding : eventAddress}
      </li>
    </ul>
  )
}

CardEventMeta.displayName = 'Card.EventMeta'
