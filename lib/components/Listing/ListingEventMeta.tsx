import { isSameDay, parse, format, getDate } from 'date-fns'
import { Icon } from '../Icon'

export interface ListingEventMetaProps {
  startDateTime: string
  endDateTime: string
  onCampus: boolean
  onCampusBuilding?: string | null
  onCampusRoomNumber?: string | null
  eventAddress?: string
}

const styles = {
  redIcon: 'mr-2 flex-shrink-0',
  iconSize: 22,
  iconColor: '#f48c90',
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
          <Icon
            iconPath="/assets/font-awesome/"
            name="calendar-days"
            size={styles.iconSize}
            color={styles.iconColor}
            className={styles.redIcon}
          />
          {`${startMonth} ${startDay} — ${endMonth} ${endDay}`}
        </>
      )
    } else {
      return (
        <>
          <Icon
            iconPath="/assets/font-awesome/"
            name="clock"
            size={styles.iconSize}
            color={styles.iconColor}
            className={styles.redIcon}
          />
          {`${startTime} — ${endTime}`}
        </>
      )
    }
  }

  return (
    <ul className="space-y-3 text-sm text-cu-black-600 @sm:md:text-base list-none">
      <li className="flex">{multiDayDisplay()}</li>
      <li className="flex">
        <Icon
          iconPath="/assets/font-awesome/"
          name="location-dot"
          size={styles.iconSize}
          color={styles.iconColor}
          className={styles.redIcon}
        />
        {onCampus ? onCampusRoomNumber + ' ' + onCampusBuilding : eventAddress}
      </li>
    </ul>
  )
}

ListingEventMeta.displayName = 'Listing.EventMeta'
