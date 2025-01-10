import React from 'react'
import { maxWidthClasses } from '../../utils/propClasses'

type maxWidthKeys = keyof typeof maxWidthClasses

export interface SectionProps {
  children?: React.ReactNode
  as?: 'section' | 'div'
  isGrey?: boolean
  maxWidth?: maxWidthKeys
  proseType?: 'none' | 'light' | 'dark'
}

export const Section = ({ children, as = 'section', isGrey, maxWidth = '5xl' }: SectionProps) => {
  const SectionComponent = as
  const sectionClass = isGrey ? 'cu-section--grey' : 'cu-section--white'
  const bgStyles = isGrey ? 'bg-cu-black-50 max-w-screen-2xl mx-auto rounded-xl' : ''
  const greySpacing = isGrey ? 'px-6 py-5 md:px-14 md:py-12' : ''

  // TODO: primary spacing --> px-4 md:px-6 lg:px-12
  // TODO: break out of main width --> w-screen ml-offset-center

  return (
    <>
      <SectionComponent className={`cu-section ${sectionClass} w-screen ml-offset-center px-4 md:px-6 lg:px-12`}>
        <div className={`cu-max-w-child-${maxWidth} ${bgStyles} ${greySpacing} cu-prose-first-last`}>{children}</div>
      </SectionComponent>
    </>
  )
}
