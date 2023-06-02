import React from 'react'
import { globalStyles } from '../../utils/globalClasses'

export interface ArticleProps {
  children?: React.ReactNode
  content?: string
}

export const Article = ({ children, content }: ArticleProps) => {
  return (
    <>
      {content && (
        <article className={`cu-article ${globalStyles.prose}`} dangerouslySetInnerHTML={{ __html: content }} />
      )}
      {!content && <article className={`cu-article ${globalStyles.prose}`}>{children}</article>}
    </>
  )
}
