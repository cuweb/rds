import React from 'react'
import { PageHeader } from '../PageHeader/PageHeader'
import { justifyContentClasses } from '../../utils/propClasses'

type justifyContentKeys = keyof typeof justifyContentClasses

export interface TextMediaContentProps {
  children?: React.ReactNode
  title: string
  headerType?: 'h1' | 'h2'
  width?: number
  align?: justifyContentKeys
  hasUnderline?: boolean
  isWhite?: boolean
}

export const TextMediaContent = ({
  children,
  title,
  headerType = 'h2',
  width = 60,
  align = 'start',
  hasUnderline = true,
  isWhite = false,
}: TextMediaContentProps) => {
  const inlineContentStyles = {
    flex: `0 0 ${width}%`,
  }

  return (
    <div
      className={`cu-textmedia-content cu-prose-first-last ${justifyContentClasses[align]}`}
      style={inlineContentStyles}
    >
      <PageHeader
        as={headerType}
        header={title}
        size={headerType === 'h2' ? 'md' : 'lg'}
        noUnderline={hasUnderline ? false : true}
        isWhite={isWhite ? true : false}
      />
      {children}
    </div>
  )
}

TextMediaContent.displayName = 'TextMedia.Content'
