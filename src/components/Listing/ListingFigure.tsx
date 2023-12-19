import React from 'react'
import { figureStyles } from './Listing.Styles'

export interface ListingFigureProps {
  children: React.ReactNode
  // size?: 'small' | 'default'
}

export const ListingFigure = ({ children }: ListingFigureProps) => {
  return <figure className={`cu-figure ${figureStyles.figure}`}>{children}</figure>
}

ListingFigure.displayName = 'Listing.Figure'
