import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

import { styles, linkStyles } from './Listing.Styles'
import { ListingFigure } from './ListingFigure'
import { ListingInitials } from './ListingInitials'
import { ListingContent } from './ListingContent'
import { ListingDateBox } from './ListingDateBox'
import { ListingHeader } from './ListingHeader'
import { ListingExcerpt } from './ListingExcerpt'
import { ListingBadges } from './ListingBadges'
import { ListingPostMeta } from './ListingPostMeta'
import { ListingEventMeta } from './ListingEventMeta'
import { ListingPeopleMeta } from './ListingPeopleMeta'

export interface ListingProps {
  children: React.ReactNode
  noLink?: boolean
}

export const ListingWrapper = ({ children, noLink }: ListingProps) => {
  const noLinkStyles = noLink ? 'cu-listing--nolink  p-8' : linkStyles.baseLink
  return (
    <li className={`cu-listing ${styles.base} ${noLinkStyles}`}>
      {children}

      {!noLink && (
        <div className={styles.arrowArea}>
          <ChevronRightIcon className={styles.arrowIcon} aria-hidden="true" />
        </div>
      )}
    </li>
  )
}

export const Listing = Object.assign(ListingWrapper, {
  Figure: ListingFigure,
  Content: ListingContent,
  DateBox: ListingDateBox,
  Header: ListingHeader,
  Excerpt: ListingExcerpt,
  Badges: ListingBadges,
  PostMeta: ListingPostMeta,
  EventMeta: ListingEventMeta,
  PeopleMeta: ListingPeopleMeta,
  Initials: ListingInitials,
})
