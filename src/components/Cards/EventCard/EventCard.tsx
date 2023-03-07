import { CalendarDaysIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { getDate, getMonth, isSameDay, parseISO } from 'date-fns'
import { Badge } from '../../Badge/Badge'
import { Link } from '../../Link/Link'

interface Tags {
  category: { id: number; name: string; slug: string }[]
  audience: { id: number; name: string; slug: string }[]
}

export interface EventCardProps {
  title?: string
  heading?: 'h2' | 'h3'
  link: string
  startDateTime: string
  endDateTime: string
  featuredImage?: string
  description?: string
  onCampus: boolean
  onCampusBuilding?: string | null
  onCampusRoomNumber?: string | null
  eventAddress?: string
  tags?: Tags
}

export const EventCard = ({
  title,
  heading: HeadLevel = 'h3',
  link,
  startDateTime,
  endDateTime,
  featuredImage,
  onCampus,
  onCampusBuilding,
  onCampusRoomNumber,
  eventAddress,
  tags,
}: EventCardProps) => {
  const defaultImage =
    'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80'

  const getMonthName = (month: any, short = false) => {
    const d = new Date()
    d.setMonth(month)
    const monthName = d.toLocaleString('default', {
      month: short ? 'short' : 'long',
    })
    return monthName
  }

  const formatTime = (date: any) => {
    let hours = date.getHours()
    let minutes = date.getMinutes()
    const ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    hours = hours ? hours : 12
    minutes = minutes < 10 ? '0' + minutes : minutes
    const strTime = hours + ':' + minutes + ' ' + ampm
    return strTime
  }

  const startDate = parseISO(startDateTime)
  const endDate = parseISO(endDateTime)

  const eventStartDate = getDate(startDate)
  const eventStartMonth = getMonth(startDate)
  const eventEndDate = getDate(endDate)
  const isEventSameDay = isSameDay(startDate, endDate)

  const multiDayDisplay = () => {
    if (!isEventSameDay) {
      return <CalendarDaysIcon className="mr-2 h-6 w-6 flex-shrink-0 text-cu-red-300" aria-hidden="true" />
    } else {
      return <ClockIcon className="mr-2 h-6 w-6 flex-shrink-0 text-cu-red-300" aria-hidden="true" />
    }
  }

  return (
    <div className="not-prose group relative overflow-hidden rounded-lg bg-white shadow-lg duration-300 ease-in @container hover:scale-105 md:max-w-lg">
      <Link href={link} className="relative flex h-full cursor-pointer flex-col">
        <div className="relative">
          <div className="aspect-w-16 aspect-h-9 @sm:md:aspect-h-6">
            <img className="w-full object-cover" src={featuredImage ? featuredImage : defaultImage} alt="" />
          </div>
          <div className="absolute left-6 -bottom-10 z-10 flex h-20 w-20 flex-col items-center justify-center rounded-md bg-white shadow-md group-hover:bg-cu-red">
            <p className="text-xs font-bold uppercase text-cu-red group-hover:text-white">
              {getMonthName(eventStartMonth, true)}
            </p>
            <p className="text-2xl font-bold uppercase text-cu-black-800 group-hover:text-white">{eventStartDate}</p>
          </div>
        </div>

        <div className="flex flex-col gap-px px-7 pt-16 pb-8">
          <HeadLevel className="text-lg font-semibold text-cu-black group-hover:text-cu-red @sm:md:text-xl">
            {title}
          </HeadLevel>
          <ul className="mt-4 flex flex-col gap-2">
            <li className="flex text-sm text-cu-black-600 @sm:md:text-base">
              {multiDayDisplay()}
              {isEventSameDay
                ? formatTime(startDate) + ' — ' + formatTime(endDate)
                : getMonthName(eventStartMonth) + ' ' + eventStartDate + ' — ' + eventEndDate}
            </li>
            <li className="flex text-sm text-cu-black-600 @sm:md:text-base">
              <MapPinIcon className="mr-2 h-6 w-6 flex-shrink-0 text-cu-red-300" aria-hidden="true" />
              {onCampus ? onCampusBuilding + ', ' + onCampusRoomNumber : eventAddress}
            </li>
          </ul>
        </div>

        <div className="mt-auto px-7 pb-5">
          {tags?.category?.map((tag) => (
            <Badge key={tag.id}>{tag.name}</Badge>
          ))}
        </div>
      </Link>
    </div>
  )
}
