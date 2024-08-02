import React from 'react'
import { proseStyles } from '../../utils/globalClasses'

export interface ArticleProps {
  children?: React.ReactNode
  content?: string
  noProse?: boolean
}

export const Article = ({ children, content, noProse = false }: ArticleProps) => {
  const useProse = noProse ? '' : proseStyles.base

  return (
    <>
      {content && <article className={`cu-article ${useProse}`} dangerouslySetInnerHTML={{ __html: content }} />}
      {!content && <article className={`cu-article ${useProse}`}>{children}</article>}
    </>
  )
}
