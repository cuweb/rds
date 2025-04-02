import React from 'react'
import { DetailsItem } from './DetailsItem'

export interface DetailsProps {
  children?: React.ReactNode
  as?: 'ul' | 'ol'
  hasDividers?: boolean
  isGrey?: boolean
}

export const DetailsWrapper = ({ children, as = 'ul', hasDividers = false, isGrey = false }: DetailsProps) => {
  const DetailsComponent = as
  const bgStyles = isGrey ? 'bg-cu-black-50 rounded-xl py-6 px-10' : ''

  const dividerStyle = hasDividers ? 'cu-details--dividers' : ''

  return <DetailsComponent className={`cu-details not-prose ${bgStyles} ${dividerStyle}`}>{children}</DetailsComponent>
}

export const Details = Object.assign(DetailsWrapper, {
  Item: DetailsItem,
})

DetailsWrapper.displayName = 'Details'
