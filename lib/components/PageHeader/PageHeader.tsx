import React from 'react'
import { PageHeaderPeople } from './PageHeaderPeople'
import { PageHeaderEvent } from './PageHeaderEvent'
import { headerSizeClasses } from '../../utils/propClasses'

type headerSizeKeys = keyof typeof headerSizeClasses

export interface PageHeaderProps {
  children?: React.ReactNode
  as?: 'h1' | 'h2' | 'h3'
  header: string
  content?: string
  size?: headerSizeKeys
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
  isWhite,
  isCenter,
  noUnderline = false,
  pronoun,
}: PageHeaderProps) => {
  const HeaderComponent = as

  // Set spacing for header with underline
  let headerPadding
  let contentStyle

  switch (size) {
    case 'xs':
      headerPadding = 'pb-3 after:w-6'
      contentStyle = 'prose-md md:prose-lg font-light'
      break
    case 'sm':
      headerPadding = 'pb-3.5 after:w-7'
      contentStyle = 'prose-lg md:prose-xl font-light'
      break
    case 'md':
      headerPadding = 'pb-4 after:w-8'
      contentStyle = 'prose-xl md:prose-xl font-light'
      break
    case 'lg':
      headerPadding = 'pb-5 after:w-10'
      contentStyle = 'prose-lg md:prose-2xl font-light'
      break
    default:
      headerPadding = 'pb-6 after:w-10'
      contentStyle = 'prose-lg md:prose-2xl font-light'
      break
  }

  // Truncate content if it's longer than 320 characters
  const truncatedContent = content && content.length > 320 ? `${content.substring(0, 320)}...` : content

  let hasUnderline
  switch (noUnderline) {
    case false:
      hasUnderline = `relative after:absolute after:h-px after:bottom-0 ${headerPadding}`
      if (isWhite) {
        hasUnderline = `${hasUnderline} after:bg-white`
      } else {
        hasUnderline = `${hasUnderline} after:bg-cu-red`
      }
      break
    default:
      hasUnderline = ''
  }

  const centerText = isCenter ? 'cu-pageheader--center text-center mx-auto' : ''
  const centerUnderline =
    isCenter && !noUnderline ? `${hasUnderline} after:left-1/2 after:-ml-5` : `${hasUnderline} after:left-px`

  return (
    <header
      className={`cu-pageheader cu-component ${centerText} ${children ? `mb-6 md:mb-12` : `cu-prose-first-last`} `}
    >
      <HeaderComponent
        className={`cu-prose-first-last font-semibold !mt-2 mb-4 md:mb-6 ${headerSizeClasses[size]} ${centerText} ${centerUnderline}`}
      >
        {header}{' '}
        {pronoun && <span className="text-xl font-light lowercase lg:text-3xl text-cu-black-500">({pronoun})</span>}
      </HeaderComponent>
      {truncatedContent && <p className={`max-w-5xl ${contentStyle} ${centerText}`}>{truncatedContent}</p>}
      {children}
    </header>
  )
}

export const PageHeader = Object.assign(PageHeaderWrapper, {
  People: PageHeaderPeople,
  Event: PageHeaderEvent,
})

PageHeaderWrapper.displayName = 'PageHeader'
