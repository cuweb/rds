import React from 'react'
import { layoutSpacing, proseStyles } from '../../utils/globalClasses'

export interface SectionProps {
  children?: React.ReactNode
  maxWidth?: 'full' | '5xl' | '7xl'
  hasProse?: boolean
}

export const Section = ({ children, maxWidth = '5xl', hasProse }: SectionProps) => {
  const addProse = hasProse ? proseStyles.base : ''
  const childWidth = maxWidth ? `cu-section-${maxWidth}` : ''

  return (
    <section className={`cu-section bg-white ${layoutSpacing.section} ${childWidth} ${addProse}`}>{children}</section>
  )
}
