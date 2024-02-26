import React from 'react'

export interface ListingBodyProps {
  children: React.ReactNode
}

export const ListingBody = ({ children }: ListingBodyProps) => {
  return <div className="flex flex-col flex-1 gap-3">{children}</div>
}

ListingBody.displayName = 'Listing.Body'
