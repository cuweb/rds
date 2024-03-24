import React from 'react'
import { PageHeadersPeople } from './PageHeadersPeople'
import { PageHeadersEvent } from './PageHeadersEvent'

export interface PageHeadersProps {
  children?: React.ReactNode
  header: string
  as?: 'h1' | 'h2' | 'h3'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  pronoun?: string
  noUnderline?: boolean
}

const headerSize = {
  xs: `text-lg md:text-xl lg:text-2xl lg:leading-[2rem]`,
  sm: `text-xl md:text-2xl lg:text-3xl lg:leading-[2.5rem]`,
  md: `text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem]`,
  lg: `text-3xl md:text-4xl lg:text-5xl lg:leading-[3.5rem]`,
}

export const PageHeadersWrapper = ({
  children,
  header,
  as = 'h1',
  size = 'lg',
  noUnderline = false,
  pronoun,
}: PageHeadersProps) => {
  const HeaderComponent = as

  // Set spacing for header with underline
  let headerPadding
  let headerMargin
  switch (size) {
    case 'xs':
      headerPadding = 'pb-4'
      headerMargin = 'mb-8'
      break
    case 'sm':
      headerPadding = 'pb-5'
      headerMargin = 'mb-10'
      break
    case 'md':
      headerPadding = 'pb-6'
      headerMargin = 'mb-10'
      break
    case 'lg':
      headerPadding = 'pb-8'
      headerMargin = 'mb-10'
      break
    default:
      headerPadding = 'pb-8'
      headerMargin = 'mb-10'
      break
  }

  const hasUnderline = !noUnderline
    ? `relative after:absolute after:w-10 after:h-px after:bottom-0 after:bg-cu-red after:left-px ${headerPadding} ${headerMargin}`
    : headerMargin

  return (
    <>
      <HeaderComponent className={`${headerSize[size]} font-semibold text-cu-black-700 not-prose ${hasUnderline}`}>
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
