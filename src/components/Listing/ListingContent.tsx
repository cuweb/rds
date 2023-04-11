import React from 'react'
import { styles } from './Listing.Styles'

export interface ListingContentProps {
  children: React.ReactNode
  isSmall?: boolean
}

export const ListingContent = ({ children, isSmall }: ListingContentProps) => {
  const listItemSize = isSmall ? 'cu-listing--small' : ''
  return <div className={`${styles.content} ${listItemSize}`}>{children}</div>
}

ListingContent.displayName = 'Listing.Content'
