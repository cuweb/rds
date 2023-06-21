import React from 'react'
import { figureStyles } from './Card.Styles'

export interface CardFigureProps {
  children: React.ReactNode
  isRound?: boolean
}

export const CardFigure = ({ children, isRound }: CardFigureProps) => {
  const roundedImage = isRound ? `cu-figure--round ${figureStyles.round}` : ''

  return <figure className={`cu-figure ${roundedImage} ${figureStyles.figure}`}>{children}</figure>
}

CardFigure.displayName = 'Card.Figure'
