import React from 'react'
import { layoutSpacing } from '../../utils/globalClasses'

export interface SectionProps {
  children?: React.ReactNode
  as?: 'section' | 'div'
  isGrey?: boolean
  maxWidth?: 'none' | 'full' | '5xl' | '7xl'
}

export const Section = ({ children, as = 'section', isGrey, maxWidth = '5xl' }: SectionProps) => {
  const SectionComponent = as
  const childWidth = maxWidth ? `cu-section-${maxWidth}` : ''
  const bgStyles = isGrey ? layoutSpacing.containerGrey : layoutSpacing.containerWhite

  return (
    <SectionComponent className={`cu-section ${childWidth} not-contained ${bgStyles}`}>{children}</SectionComponent>
  )
}
