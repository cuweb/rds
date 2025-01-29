import React from 'react'
import { applyScrollbarWidth } from '../../helpers/applyScrollbarWidth'
import { maxWidthClasses } from '../../utils/propClasses'

type maxWidthKeys = keyof typeof maxWidthClasses

export interface SectionProps {
  children?: React.ReactNode
  as?: 'section' | 'div'
  isGrey?: boolean
  maxWidth?: maxWidthKeys
}

export const Section = ({ children, as = 'section', isGrey, maxWidth = '5xl' }: SectionProps) => {
  const SectionComponent = as
  const sectionClass = isGrey ? 'cu-section--grey' : 'cu-section--white'
  const bgStyles = isGrey ? 'bg-cu-black-50 max-w-screen-2xl mx-auto rounded-xl' : ''
  const greySpacing = isGrey ? 'px-6 py-5 md:px-14 md:py-12' : ''

  // Apply scrollbar width adjustment
  React.useEffect(() => {
    applyScrollbarWidth()
  }, [])

  return (
    <>
      <SectionComponent className={`cu-section ${sectionClass} cu-section--adjusted`}>
        <div
          className={`cu-max-w-child-${maxWidth} space-y-6 md:space-y-10 ${bgStyles} ${greySpacing} cu-prose-first-last`}
        >
          {children}
        </div>
      </SectionComponent>
    </>
  )
}
