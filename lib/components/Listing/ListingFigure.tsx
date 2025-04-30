import React from 'react'

export interface ListingFigureProps {
  children: React.ReactNode
  isSquare?: boolean
  isSmall?: boolean
  hideMobile?: boolean
}

export const ListingFigure = ({ children, isSquare, isSmall = false, hideMobile = false }: ListingFigureProps) => {
  const imageStyles = isSquare ? 'aspect-square' : 'aspect-[3/2]'
  const figureSize = isSmall ? 'max-w-[30%] @sm:md:max-w-[25%]' : 'max-w-[45%] @xl:md:max-w-[30%]'
  const mobileView = hideMobile ? 'hidden md:block' : ''

  return <figure className={`flex-none ${figureSize} ${mobileView} ${imageStyles}`}>{children}</figure>
}

ListingFigure.displayName = 'Listing.Figure'
