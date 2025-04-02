import React from 'react'

export interface DetailsItemProps {
  children?: React.ReactNode
  as?: 'li'
  isBold?: boolean
}

export const DetailsItem = ({ children, as = 'li', isBold = false }: DetailsItemProps) => {
  const DetailsItemComponent = as
  const boldStyle = isBold ? 'font-bold' : ''

  return <DetailsItemComponent className={`${boldStyle}`}>{children}</DetailsItemComponent>
}

DetailsItem.displayName = 'Details.Item'
