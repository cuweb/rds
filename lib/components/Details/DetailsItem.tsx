import React from 'react'

export interface DetailsItemProps {
  children?: React.ReactNode
  as?: 'li'
  isBold?: boolean
}

export const DetailsItem = ({ children, as = 'li', isBold = false }: DetailsItemProps) => {
  const DeatilsItemComponent = as
  const boldStyle = isBold ? 'font-bold' : ''

  return <DeatilsItemComponent className={`${boldStyle}`}>{children}</DeatilsItemComponent>
}

DetailsItem.displayName = 'Details.Item'
