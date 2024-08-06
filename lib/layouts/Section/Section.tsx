import React from 'react'
import { maxWidthClasses } from '../../utils/propClasses'

const layoutSpacing = {
  main: 'px-8 py-6 md:py-10 md:px-10',
  containerWhite: 'bg-white',
  containerGrey: 'max-w-screen-2xl mx-auto bg-cu-black-50 rounded-xl px-6 py-5 md:px-14 md:py-12',
}

type maxWidthKeys = keyof typeof maxWidthClasses

export interface SectionProps {
  children?: React.ReactNode
  as?: 'section' | 'div'
  isGrey?: boolean
  maxWidth?: maxWidthKeys
  noProse?: boolean
}

export const Section = ({ children, as = 'section', noProse = false, isGrey, maxWidth = '5xl' }: SectionProps) => {
  const SectionComponent = as
  const childWidth = maxWidth ? `cu-section-${maxWidth}` : ''
  const bgStyles = isGrey ? layoutSpacing.containerGrey : layoutSpacing.containerWhite
  const useProse = noProse ? '' : 'cu-prose'

  return (
    <SectionComponent className={`cu-section ${childWidth} not-contained ${bgStyles} ${useProse}`}>
      {children}
    </SectionComponent>
  )
}
