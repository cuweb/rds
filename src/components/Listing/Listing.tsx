import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

import { styles } from './Listing.Styles'
import { ListingFigure } from './ListingFigure'
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
  const addPadding = noLink ? 'p-8' : ''
  return (
    <li className={`cu-listing ${styles.base} ${addPadding}`}>
      {children}
      <div className={styles.arrowArea}>
        <ChevronRightIcon className={styles.arrowIcon} aria-hidden="true" />
      </div>
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
})
