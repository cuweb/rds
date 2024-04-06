import React from 'react'
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
}

export const ListingWrapper = ({ children }: ListingProps) => {
  return (
    <li className={`cu-listing not-prose relative overflow-hidden @container bg-white p-6`}>
      <div className="flex flex-col @lg:md:flex-row gap-5 @lg:md:gap-7 h-full">{children}</div>
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
