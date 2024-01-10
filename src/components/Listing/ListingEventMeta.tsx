import { isSameDay, parse, format, getDate } from 'date-fns'
import { CalendarDaysIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline'

export interface ListingEventMetaProps {
  startDateTime: string
  endDateTime: string
  onCampus: boolean
  onCampusBuilding?: string | null
  onCampusRoomNumber?: string | null
  eventAddress?: string
}

export const styles = {
  redIcon: `mr-2 h-6 w-6 flex-shrink-0 text-cu-red-300`,
}

export const ListingEventMeta = ({
  startDateTime,
  endDateTime,
  onCampus,
  onCampusBuilding,
  onCampusRoomNumber,
  eventAddress,
}: ListingEventMetaProps) => {
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
          <CalendarDaysIcon className={styles.redIcon} aria-hidden="true" />
          {`${startMonth} ${startDay} — ${endMonth} ${endDay}`}
        </>
      )
    } else {
      return (
        <>
          <ClockIcon className={styles.redIcon} aria-hidden="true" />
          {`${startTime} — ${endTime}`}
        </>
      )
    }
  }

  return (
    <ul className="space-y-3 text-sm text-cu-black-600 @sm:md:text-base list-none">
      <li className="flex">{multiDayDisplay()}</li>
      <li className="flex">
        <MapPinIcon className={styles.redIcon} aria-hidden="true" />
        {onCampus ? onCampusRoomNumber + ' ' + onCampusBuilding : eventAddress}
      </li>
    </ul>
  )
}

ListingEventMeta.displayName = 'Listing.EventMeta'
