import React from 'react'

export interface ListingFigureProps {
  children: React.ReactNode
  isSquare?: boolean
}

export const ListingFigure = ({ children, isSquare }: ListingFigureProps) => {
  const imageStyles = isSquare ? 'aspect-square' : 'aspect-square'

  return <figure className={`flex-none max-w-[45%] @xl:md:max-w-[25%] ${imageStyles}`}>{children}</figure>
}

ListingFigure.displayName = 'Listing.Figure'
