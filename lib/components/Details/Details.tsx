import React from 'react'
import { DetailsItem } from './DetailsItem'

export interface DetailsProps {
  children?: React.ReactNode
  as?: 'ul' | 'ol'
  hasDividers?: boolean
}

export const DetailsWrapper = ({ children, as = 'ul', hasDividers = false }: DetailsProps) => {
  const DetailsComponent = as
  const dividerStyle = hasDividers ? 'cu-details--dividers' : ''

  return <DetailsComponent className={`cu-details not-prose ${dividerStyle}`}>{children}</DetailsComponent>
}

export const Details = Object.assign(DetailsWrapper, {
  Item: DetailsItem,
})

DetailsWrapper.displayName = 'Details'
