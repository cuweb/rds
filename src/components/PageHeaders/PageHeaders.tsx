import React from 'react'
import { PageHeadersPeople } from './PageHeadersPeople'
import { PageHeadersEvent } from './PageHeadersEvent'

export interface PageHeadersProps {
  children?: React.ReactNode
  header: string
  as?: 'h1' | 'h2' | 'h3'
  size?: 'sm' | 'md' | 'lg'
  pronoun?: string
}

const headerSize = {
  sm: `text-xl md:text-2xl lg:text-3xl lg:leading-[3.5rem] pb-2`,
  md: `text-2xl md:text-3xl lg:text-4xl lg:leading-[3.5rem] pb-4`,
  lg: `text-3xl md:text-4xl lg:text-5xl lg:leading-[3.5rem] pb-6`,
}

export const PageHeadersWrapper = ({ children, header, as = 'h1', size = 'lg', pronoun }: PageHeadersProps) => {
  const HeaderComponent = as

  return (
    <>
      <HeaderComponent
        className={`${headerSize[size]} font-semibold text-cu-black-700 not-prose relative mb-6 after:absolute after:w-10 after:h-px after:bottom-0 after:bg-cu-red after:left-px`}
      >
        {header}{' '}
        {pronoun && <span className="text-xl font-light lowercase lg:text-3xl text-cu-black-500">({pronoun})</span>}
      </HeaderComponent>
      {children}
    </>
  )
}

export const PageHeaders = Object.assign(PageHeadersWrapper, {
  People: PageHeadersPeople,
  Event: PageHeadersEvent,
})
