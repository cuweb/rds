import React from 'react'
import { proseStyles, layoutSpacing } from '../../utils/globalClasses'

export interface SectionProps {
  children?: React.ReactNode
  as?: 'section' | 'div'
  isGrey?: boolean
  maxWidth?: 'none' | 'full' | '5xl' | '7xl'
  noProse?: boolean
}

export const Section = ({ children, as = 'section', noProse = false, isGrey, maxWidth = '5xl' }: SectionProps) => {
  const SectionComponent = as
  const childWidth = maxWidth ? `cu-section-${maxWidth}` : ''
  const bgStyles = isGrey ? layoutSpacing.containerGrey : layoutSpacing.containerWhite
  const useProse = noProse ? '' : proseStyles.base

  return (
    <SectionComponent className={`cu-section ${childWidth} not-contained ${bgStyles} ${useProse}`}>
      {children}
    </SectionComponent>
  )
}
