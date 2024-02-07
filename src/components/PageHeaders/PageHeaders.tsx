import React from 'react'
import { PageHeadersPeople } from './PageHeadersPeople'
import { PageHeadersEvent } from './PageHeadersEvent'

export interface PageHeadersProps {
  children?: React.ReactNode
  header: string
  pronoun?: string
}

export const PageHeadersWrapper = ({ children, header, pronoun }: PageHeadersProps) => {
  return (
    <>
      <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl lg:leading-[3.5rem] text-cu-black-700 not-prose relative mb-6 after:absolute after:w-10 after:h-px after:bottom-0 after:bg-cu-red after:left-px pb-6">
        {header}{' '}
        {pronoun && <span className="text-xl font-light lowercase lg:text-3xl text-cu-black-500">({pronoun})</span>}
      </h1>
      {children}
    </>
  )
}

export const PageHeaders = Object.assign(PageHeadersWrapper, {
  People: PageHeadersPeople,
  Event: PageHeadersEvent,
})
