import React from 'react'
import { proseStyles } from '../../utils/globalClasses'

export interface ArticleProps {
  children?: React.ReactNode
  content?: string
}

export const Article = ({ children, content }: ArticleProps) => {
  return (
    <>
      {content && (
        <article className={`cu-article ${proseStyles.base}`} dangerouslySetInnerHTML={{ __html: content }} />
      )}
      {!content && <article className={`cu-article ${proseStyles.base}`}>{children}</article>}
    </>
  )
}
