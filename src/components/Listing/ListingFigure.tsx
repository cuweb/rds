import React from 'react'
import { figureStyles } from './Listing.Styles'

export interface ListingFigureProps {
  children: React.ReactNode
  size?: 'small' | 'default'
}

export const ListingFigure = ({ children, size = 'default' }: ListingFigureProps) => {
  return <figure className={`cu-figure ${figureStyles.figure} ${figureStyles[size]}`}>{children}</figure>
}
