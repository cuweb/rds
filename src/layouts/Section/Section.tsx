import React from 'react'
import { globalSpace, globalStyles } from '../../utils/globalClasses'

export interface SectionProps {
  children?: React.ReactNode
  maxWidth?: 'full' | '5xl' | '7xl'
  hasProse?: boolean
}

export const Section = ({ children, maxWidth = '5xl', hasProse }: SectionProps) => {
  const addProse = hasProse ? globalStyles.prose : ''
  const childWidth = maxWidth ? `cu-section-${maxWidth}` : ''

  return (
    <section className={`cu-section bg-white ${globalSpace.padding} ${childWidth} ${addProse}`}>{children}</section>
  )
}
