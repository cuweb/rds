import React from 'react'
import { PageHeaderEvent } from './PageHeaderEvent'
import { headerSizeClasses } from '../../utils/propClasses'

type HeaderSize = keyof typeof headerSizeClasses

const SIZE_CONFIG = {
  xs: { headerPadding: 'pb-3 after:w-6', contentStyle: 'prose-md md:prose-lg font-light' },
  sm: { headerPadding: 'pb-3.5 after:w-7', contentStyle: 'prose-lg md:prose-xl font-light' },
  md: { headerPadding: 'pb-4 after:w-8', contentStyle: 'prose-xl md:prose-xl font-light' },
  lg: { headerPadding: 'pb-5 after:w-10', contentStyle: 'prose-xl md:prose-2xl font-light' },
  default: { headerPadding: 'pb-6 after:w-10', contentStyle: 'prose-lg md:prose-2xl font-light' },
}

export interface PageHeaderProps {
  children?: React.ReactNode
  as?: 'h1' | 'h2' | 'h3'
  preHeader?: string
  header: string
  content?: string
  metaData?: React.ReactNode
  size?: HeaderSize
  isLight?: boolean
  isWhite?: boolean
  isCenter?: boolean
  pronoun?: string
  noUnderline?: boolean
}

function getHeaderPadding(size: HeaderSize, isWhite: boolean, isCenter: boolean, noUnderline: boolean) {
  if (noUnderline) return ''
  const { headerPadding } = SIZE_CONFIG[size] || SIZE_CONFIG.default
  const underlineColor = isWhite ? 'after:bg-white' : 'after:bg-cu-red'
  const position = isCenter ? 'after:left-1/2 after:-ml-5' : 'after:left-px'
  return `relative after:absolute after:h-px after:bottom-0 ${headerPadding} ${underlineColor} ${position}`
}

export const PageHeaderWrapper = ({
  children,
  as = 'h1',
  preHeader,
  header,
  content,
  size = 'lg',
  isLight,
  isWhite,
  isCenter,
  noUnderline = false,
  pronoun,
  metaData,
}: PageHeaderProps) => {
  const HeaderComponent = as
  const { contentStyle } = SIZE_CONFIG[size] || SIZE_CONFIG.default
  const truncatedContent = content && content.length > 320 ? `${content.substring(0, 320)}...` : content
  const textColor = isWhite ? 'text-white' : 'text-cu-black-700'
  const centerText = isCenter ? 'cu-pageheader--center text-center mx-auto' : ''
  const underlineClass = getHeaderPadding(size, isWhite ?? false, isCenter ?? false, noUnderline)

  return (
    <header
      className={[
        'cu-pageheader',
        isLight ? contentStyle : '',
        'cu-component-updated',
        centerText,
        children ? 'mb-6 md:mb-12' : 'cu-prose-first-last',
      ].join(' ')}
    >
      <HeaderComponent
        className={[
          'font-semibold not-prose',
          textColor,
          '!mt-2 mb-4 md:mb-6',
          headerSizeClasses[size],
          centerText,
          underlineClass,
        ].join(' ')}
      >
        {preHeader && <span className="text-xl block font-normal">{preHeader}</span>}
        {header}
        {pronoun && <span className="text-xl font-light lowercase lg:text-3xl text-cu-black-500">({pronoun})</span>}
      </HeaderComponent>
      {metaData && <div className={`cu-pageheader__meta ${centerText}`}>{metaData}</div>}
      {truncatedContent && <p className={`max-w-5xl ${centerText}`}>{truncatedContent}</p>}
      {children}
    </header>
  )
}

export const PageHeader = Object.assign(PageHeaderWrapper, {
  Event: PageHeaderEvent,
})

PageHeaderWrapper.displayName = 'PageHeader'
