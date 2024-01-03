import React from 'react'

export interface ListingFigureProps {
  children: React.ReactNode
}

export const ListingFigure = ({ children }: ListingFigureProps) => {
  return <figure className="flex-none max-w-[40%] @xl:md:max-w-[25%]">{children}</figure>
}

ListingFigure.displayName = 'Listing.Figure'
