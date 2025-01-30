import React from 'react'
import { PageHeaderEvent } from './PageHeaderEvent'
import { headerSizeClasses } from '../../utils/propClasses'

type headerSizeKeys = keyof typeof headerSizeClasses

export interface PageHeaderProps {
  children?: React.ReactNode
  as?: 'h1' | 'h2' | 'h3'
  header: string
  content?: string
  size?: headerSizeKeys
  isLight?: boolean
  isWhite?: boolean
  isCenter?: boolean
  pronoun?: string
  noUnderline?: boolean
}

export const PageHeaderWrapper = ({
  children,
  as = 'h1',
  header,
  content,
  size = 'lg',
  isLight,
  isWhite,
  isCenter,
  noUnderline = false,
  pronoun,
}: PageHeaderProps) => {
  const HeaderComponent = as

  // Set spacing for header with underline
  const sizeConfig = {
    xs: { headerPadding: 'pb-3 after:w-6', contentStyle: 'prose-md md:prose-lg font-light' },
    sm: { headerPadding: 'pb-3.5 after:w-7', contentStyle: 'prose-lg md:prose-xl font-light' },
    md: { headerPadding: 'pb-4 after:w-8', contentStyle: 'prose-xl md:prose-xl font-light' },
    lg: { headerPadding: 'pb-5 after:w-10', contentStyle: 'prose-xl md:prose-2xl font-light' },
    default: { headerPadding: 'pb-6 after:w-10', contentStyle: 'prose-lg md:prose-2xl font-light' },
  }

  const { headerPadding, contentStyle } = sizeConfig[size] || sizeConfig.default

  // Truncate content if it's longer than 320 characters
  const truncatedContent = content && content.length > 320 ? `${content.substring(0, 320)}...` : content

  // Determine underline styles
  let hasUnderline = ''
  if (!noUnderline) {
    hasUnderline = `relative after:absolute after:h-px after:bottom-0 ${headerPadding}`
    hasUnderline += isWhite ? ' after:bg-white' : ' after:bg-cu-red'
  }

  const centerText = isCenter ? 'cu-pageheader--center text-center mx-auto' : ''
  const centerUnderline =
    isCenter && !noUnderline ? `${hasUnderline} after:left-1/2 after:-ml-5` : `${hasUnderline} after:left-px`

  return (
    <header
      className={`cu-pageheader ${isLight ? contentStyle : ''} cu-component-updated ${centerText} ${children ? 'mb-6 md:mb-12' : 'cu-prose-first-last'}`}
    >
      <HeaderComponent
        className={`font-semibold not-prose text-cu-black-700 !mt-2 mb-4 md:mb-6 ${headerSizeClasses[size]} ${centerText} ${centerUnderline}`}
      >
        {header}{' '}
        {pronoun && <span className="text-xl font-light lowercase lg:text-3xl text-cu-black-500">({pronoun})</span>}
      </HeaderComponent>
      {truncatedContent && <p className={`max-w-5xl ${centerText}`}>{truncatedContent}</p>}
      {children}
    </header>
  )
}

export const PageHeader = Object.assign(PageHeaderWrapper, {
  Event: PageHeaderEvent,
})

PageHeaderWrapper.displayName = 'PageHeader'
