import { isSameDay, parse, format, getDate } from 'date-fns'
import CalendarDaysIcon from '../Icons/CalendarDaysIcon'
import ClockIcon from '../Icons/ClockIcon'
import MapPinIcon from '../Icons/MapPinIcon'
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
  const startDate = parse(startDateTime, 'yyyy-MM-dd HH:mm:ss', new Date())
  const startMonth = format(startDate, 'MMMM')
  const startDay = getDate(startDate)
  const startHours = startDate.getHours() % 12 || 12
  const startMinutes = format(startDate, 'mm')
  const startAmPm = format(startDate, 'a')

  const endDate = parse(endDateTime, 'yyyy-MM-dd HH:mm:ss', new Date())
  const endMonth = format(endDate, 'MMMM')
  const endDay = getDate(endDate)
  const endHours = endDate.getHours() % 12 || 12
  const endMinutes = format(endDate, 'mm')
  const endAmPm = format(endDate, 'a')

  const startTime = `${startHours}:${startMinutes} ${startAmPm}`
  const endTime = `${endHours}:${endMinutes} ${endAmPm}`

  const isEventSameDay = isSameDay(startDate, endDate)

  const styles = {
    redIcon: `flex-shrink-0 w-5 h-5 @sm:md:w-6 @sm:md:h-6 mr-2 text-cu-red-300`,
  }

  const multiDayDisplay = () => {
    if (!isEventSameDay) {
      return (
        <>
          <CalendarDaysIcon className={styles.redIcon} />
          {`${startMonth} ${startDay} — ${endMonth} ${endDay}`}
        </>
      )
    } else {
      return (
        <>
          <ClockIcon className={styles.redIcon} />
          {`${startTime} — ${endTime}`}
        </>
      )
    }
  }

  return (
    <ul className="space-y-2 text-sm text-cu-black-600 @sm:md:text-base">
      <li className="flex">{multiDayDisplay()}</li>
      <li className="flex">
        <MapPinIcon className={styles.redIcon} />
        {onCampus ? onCampusRoomNumber + ' ' + onCampusBuilding : eventAddress}
      </li>
    </ul>
  )
}

CardEventMeta.displayName = 'Card.EventMeta'
