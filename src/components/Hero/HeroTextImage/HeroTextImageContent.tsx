import React from 'react'
import { contentStyles } from './HeroTextImage.Styles'

export interface HeroTextImageContentProps {
  children?: React.ReactNode
  title: string
  paragraph?: string
  headerType?: 'h1' | 'h2'
  hasMediaCol?: boolean
}

export const HeroTextImageContent = ({
  children,
  title,
  paragraph,
  headerType = 'h2',
  hasMediaCol,
}: HeroTextImageContentProps) => {
  const contentPadding = hasMediaCol ? 'md:py-4' : ''

  return (
    <div className={`${contentStyles.contentWrapper} ${contentPadding}`}>
      {headerType === 'h1' && <h1 className={`${contentStyles.header} ${contentStyles.headerOne}`}>{title}</h1>}
      {headerType === 'h2' && <h2 className={`${contentStyles.header}`}>{title}</h2>}

      {paragraph && <p className={contentStyles.largeText}>{paragraph}</p>}

      {children}
    </div>
  )
}

HeroTextImageContent.displayName = 'HeroTextImage.Content'
