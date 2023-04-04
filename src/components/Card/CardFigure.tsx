import React from 'react'
import { figureStyles } from './Card.Styles'

export interface CardFigureProps {
  children: React.ReactNode
  isRound?: boolean
}

export const CardFigure = ({ children, isRound }: CardFigureProps) => {
  const roundedImage = isRound ? `cu-figure cu-figure--round ${figureStyles.round}` : 'cu-figure'

  return <figure className={`${roundedImage} ${figureStyles.figure}`}>{children}</figure>
}
