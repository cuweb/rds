import React from 'react'
import { CalendarIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { rdsFontSizes } from '../../../utils/tailwindClasses'
import { Link } from '../../Link/Link'

// Set types for as props
type BaseItemTypeProps = 'li' | 'div'
type TitleTypeProps = 'h2' | 'h3'

export interface JobItemProps {
  children?: React.ReactNode
  fontSize?: 'base' | 'lg' | 'xl'
  title?: string
  link?: string
  department?: string
  dateData?: string
  date?: string
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

const JobItemBase = ({ as: Component = 'div', children, link }: ItemBaseProps & JobItemProps) => {
  return (
    <Component>
      <Link
        href={link}
        className="not-prose group relative flex h-full cursor-pointer items-center gap-2 p-6 hover:bg-gray-50 focus:outline-none"
      >
        <div className="flex items-center gap-4">{children}</div>
        <ChevronRightIcon className="ml-auto h-5 w-5 flex-none text-cu-black-300" aria-hidden="true" />
      </Link>
    </Component>
  )
}

const Content = ({ children }: JobItemProps) => {
  return <div className="flex flex-auto flex-col gap-2">{children}</div>
}

const Title = ({ as = 'h3', fontSize = 'base', title }: TitleProps & JobItemProps) => {
  return React.createElement(
    as,
    {
      className: `text-sm font-semibold text-cu-black group-hover:text-cu-red ${rdsFontSizes[fontSize]}`,
    },
    title,
  )
}

const Details = ({ dateData, date }: JobItemProps) => {
  return (
    <p className="flex text-xs text-cu-black-900">
      <CalendarIcon className="mr-1 h-4 w-4 text-cu-red" aria-hidden="true" />
      <time dateTime={dateData}>Closes {date}</time>
    </p>
  )
}

// Set default for base component as props
JobItemBase.defaultProps = {
  as: 'li',
}

JobItemBase.displayName = 'JobItem'
Content.displayName = 'JobItem.Content'
Title.displayName = 'JobItem.Title'
Details.displayName = 'JobItem.Details'

export const JobItem = Object.assign(JobItemBase, {
  Content,
  Title,
  Details,
})
