import React from 'react'
import { contentStyles } from './HeroTextImage.Styles'

export interface HeroTextImageContentProps {
  children?: React.ReactNode
  title: string
  paragraph?: string
  headerType?: 'h1' | 'h2'
  isCenter?: boolean
  hasMediaCol?: boolean
}

export const HeroTextImageContent = ({
  children,
  title,
  paragraph,
  headerType = 'h2',
  isCenter,
  hasMediaCol,
}: HeroTextImageContentProps) => {
  const contentPadding = hasMediaCol ? 'md:py-4' : ''
  const verticallyCenter = isCenter ? 'justify-center' : ''

  return (
    <div className={`${contentStyles.contentWrapper} ${contentPadding} ${verticallyCenter}`}>
      {headerType === 'h1' && <h1 className={`${contentStyles.header} ${contentStyles.headerOne}`}>{title}</h1>}
      {headerType === 'h2' && <h2 className={`${contentStyles.header} ${contentStyles.headerTwo}`}>{title}</h2>}

      {paragraph && <p className={contentStyles.largeText}>{paragraph}</p>}

      {children}
    </div>
  )
}

HeroTextImageContent.displayName = 'HeroTextImage.Content'
