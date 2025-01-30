import React from 'react'
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

  // TODO GLOBAL: break out of main width
  const $breakoutMaxWidth = `w-screen ml-offset-center`

  // TODO GLOBAL:
  // const $primarySpacing = `px-4 md:px-6 lg:px-12`
  const $primarySpacing = `px-6 md:px-8 lg:px-14`

  return (
    <>
      <SectionComponent className={`cu-section ${sectionClass} ${$breakoutMaxWidth} ${$primarySpacing}`}>
        <div
          className={`cu-max-w-child-${maxWidth} space-y-6 md:space-y-10 ${bgStyles} ${greySpacing} cu-prose-first-last`}
        >
          {children}
        </div>
      </SectionComponent>
    </>
  )
}
