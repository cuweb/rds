import React from 'react'

export interface CardFigureProps {
  children: React.ReactNode
}

export const figureStyles = {
  figure: ``,
}

export const CardFigure = ({ children }: CardFigureProps) => {
  return <div className="mb-2 overflow-hidden rounded-t-lg bg-cu-black-200">{children}</div>
}

CardFigure.displayName = 'Card.Figure'
