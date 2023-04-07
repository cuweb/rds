import React from 'react'
import { styles } from './Listing.Styles'

export interface ListingContentProps {
  children: React.ReactNode
}

export const ListingContent = ({ children }: ListingContentProps) => {
  return <div className={`${styles.content}`}>{children}</div>
}

ListingContent.displayName = 'Listing.Content'
