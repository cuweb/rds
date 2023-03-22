import React from 'react'
import { globalStyles } from '../../utils/globalClasses'

export interface ArticleBaseProps {
  as?: keyof JSX.IntrinsicElements
}

export interface ArticleProps {
  children?: React.ReactNode
  content?: string
}

export const Article = ({ children, content }: ArticleProps) => {
  return (
    <>
      {content && <article className={`${globalStyles.prose}`} dangerouslySetInnerHTML={{ __html: content }} />}
      {!content && <article className={`${globalStyles.prose}`}>{children}</article>}
    </>
  )
}
