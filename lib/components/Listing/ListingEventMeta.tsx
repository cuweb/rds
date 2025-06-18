import { isSameDay, parse, format, getDate } from 'date-fns'
import { Icon } from '../Icon/Icon'

export interface ListingEventMetaProps {
  startDateTime: string
  endDateTime: string
  onCampus: boolean
  onCampusBuilding?: string | null
  onCampusRoomNumber?: string | null
  eventAddress?: string
}

const styles = {
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

  const multiDayDisplay = () => {
    if (!isEventSameDay) {
      return (
        <>
          <Icon name="calendar-days" className={styles.redIcon} />
          {`${startMonth} ${startDay} — ${endMonth} ${endDay}`}
        </>
      )
    } else {
      return (
        <>
          <Icon name="clock" className={styles.redIcon} />
          {`${startTime} — ${endTime}`}
        </>
      )
    }
  }

  return (
    <ul className="space-y-3 text-sm text-cu-black-600 @sm:md:text-base list-none">
      <li className="flex">{multiDayDisplay()}</li>
      <li className="flex">
        <Icon name="map-pin" className={styles.redIcon} />
        {onCampus ? onCampusRoomNumber + ' ' + onCampusBuilding : eventAddress}
      </li>
    </ul>
  )
}

ListingEventMeta.displayName = 'Listing.EventMeta'
