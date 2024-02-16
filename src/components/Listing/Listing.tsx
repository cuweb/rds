import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

import { ListingFigure } from './ListingFigure'
import { ListingBody } from './ListingBody'
import { ListingHeader } from './ListingHeader'
import { ListingExcerpt } from './ListingExcerpt'
import { ListingDateThumb } from './ListingDateThumb'
import { ListingIconThumb } from './ListingIconThumb'
import { ListingInitials } from './ListingInitials'
import { ListingEventMeta } from './ListingEventMeta'
import { ListingPeopleMeta } from './ListingPeopleMeta'
import { ListingFooter } from './ListingFooter'

export interface ListingProps {
  children: React.ReactNode
  useArrow?: boolean
}

export const ListingWrapper = ({ children, useArrow }: ListingProps) => {
  const arrowStyles = useArrow ? 'pr-14' : ''

  return (
    <li className={`cu-listing not-prose relative overflow-hidden @container bg-white p-6 ${arrowStyles}`}>
      <div className="flex flex-col @lg:md:flex-row gap-5 @lg:md:gap-7 h-full">
        {children}

        {useArrow && (
          <div className="absolute -mt-3 top-1/2 right-4">
            <ChevronRightIcon
              className="flex-none w-6 h-6 ml-auto text-cu-black-300 group-hover:text-cu-red"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
    </li>
  )
}

export const Listing = Object.assign(ListingWrapper, {
  Figure: ListingFigure,
  Body: ListingBody,
  Header: ListingHeader,
  Excerpt: ListingExcerpt,
  DateThumb: ListingDateThumb,
  IconThumb: ListingIconThumb,
  Initials: ListingInitials,
  EventMeta: ListingEventMeta,
  PeopleMeta: ListingPeopleMeta,
  Footer: ListingFooter,
})
