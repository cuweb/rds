import React from 'react'

export interface CardFigureProps {
  children: React.ReactNode
  isRound?: boolean
}

export const CardFigure = ({ children, isRound }: CardFigureProps) => {
  const roundedImage = isRound ? `cu-figure--round pt-8 pb-2 px-6` : ''

  return <div className={`mb-2 overflow-hidden rounded-t-lg ${roundedImage}`}>{children}</div>
}

CardFigure.displayName = 'Card.Figure'
