import React from 'react'

export interface ListingFigureProps {
  children: React.ReactNode
  isSquare?: boolean
}

export const ListingFigure = ({ children, isSquare }: ListingFigureProps) => {
  const imageStyles = isSquare ? 'aspect-square' : 'aspect-[3/2]'

  return <figure className={`flex-none max-w-[45%] @xl:md:max-w-[30%] ${imageStyles}`}>{children}</figure>
}

ListingFigure.displayName = 'Listing.Figure'
