import React from 'react'
import { Link } from '../../Link/Link'
import { CalendarDaysIcon, MapPinIcon, ChevronRightIcon, ClockIcon } from '@heroicons/react/24/outline'
import { isSameDay, getDate, parse, format } from 'date-fns'
import { Badge } from '../../Badge/Badge'

// Set types for as props
type BaseItemTypeProps = 'li' | 'div'
type TitleTypeProps = 'h2' | 'h3'

interface Tags {
  category: { id: number; name: string; slug: string }[]
  audience: { id: number; name: string; slug: string }[]
}
export interface EventItemProps {
  children?: React.ReactNode
  fontSize?: 'base' | 'lg' | 'xl'
  title?: string
  link?: string
  startDateTime: string
  endDateTime: string
  featuredImage?: string
  description?: string
  on_campus?: boolean
  on_campus_building?: string | null
  on_campus_room_number?: string | null
  event_address?: string
  tags?: Tags
}

export interface ItemBaseProps {
  as?: keyof JSX.IntrinsicElements
}

export interface BaseItemProps {
  as?: BaseItemTypeProps
}

export interface TitleProps {
  as?: TitleTypeProps
}

export const EventItem = ({
  as: Component = 'div',
  link,
  title,
  startDateTime,
  endDateTime,
  featuredImage,
  on_campus,
  on_campus_building,
  on_campus_room_number,
  event_address,
  tags,
}: ItemBaseProps & EventItemProps) => {
  const defaultImage =
    'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80'

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

  // Datebox values
  const eventStartMonth = format(startDate, 'MMM')
  const eventStartDay = getDate(startDate)

  // Check if multiday
  const multiDayDisplay = () => {
    if (!isEventSameDay) {
      return (
        <>
          <CalendarDaysIcon className="mr-2 h-6 w-6 flex-shrink-0 text-cu-red-300" aria-hidden="true" />
          {`${startMonth} ${startDay} — ${endMonth} ${endDay}`}
        </>
      )
    } else {
      return (
        <>
          <ClockIcon className="mr-2 h-6 w-6 flex-shrink-0 text-cu-red-300" aria-hidden="true" />
          {`${startTime} — ${endTime}`}
        </>
      )
    }
  }

  return (
    <Component className="not-prose group relative @container">
      <Link
        href={link}
        className="group relative flex h-full cursor-pointer flex-col gap-6 bg-white p-6 hover:bg-slate-50 focus:outline-none @xl:md:flex-row @2xl:lg:gap-8"
      >
        <div className="relative hidden max-w-[40%] md:block">
          <img
            className="hidden w-full rounded-md object-cover @4xl:lg:block"
            src={featuredImage ? featuredImage : defaultImage}
            alt=""
          />
          <div className="hidden h-20 w-20 flex-col items-center justify-center rounded-md bg-white shadow-md group-hover:bg-cu-red md:flex @4xl:lg:hidden">
            <p className="text-xs font-bold uppercase text-cu-red group-hover:text-white">{eventStartMonth}</p>
            <p className="text-2xl font-bold uppercase text-cu-black-800 group-hover:text-white">{eventStartDay}</p>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-1.5 pr-6 md:gap-3.5 @lg:md:pt-1.5">
          <h3 className="text-lg font-semibold text-cu-black group-hover:text-cu-red @lg:md:text-xl @4xl:lg:text-2xl">
            {title}
          </h3>

          <ul className="flex flex-col flex-wrap gap-2">
            <li className="flex items-center text-sm text-cu-black-700 @2xl:lg:text-base">{multiDayDisplay()}</li>
            <li className="flex items-start text-sm text-cu-black-700 @2xl:lg:text-base">
              <MapPinIcon className="mr-2 h-6 w-6 flex-shrink-0 text-cu-red-300" />
              {on_campus ? on_campus_room_number + ', ' + on_campus_building : event_address}
            </li>
          </ul>

          <div className="mt-auto">
            {tags?.category?.map((tag) => (
              <Badge key={tag.id}>{tag.name}</Badge>
            ))}
          </div>
        </div>

        <div className="absolute top-1/2 right-4 -mt-3">
          <ChevronRightIcon
            className="ml-auto h-6 w-6 flex-none text-cu-black-300 group-hover:text-cu-red"
            aria-hidden="true"
          />
        </div>
      </Link>
    </Component>
  )
}
