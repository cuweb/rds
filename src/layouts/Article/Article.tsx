import React from 'react'
import styles from './Article.styles'

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
      {content && <article className={`${styles.prose}`} dangerouslySetInnerHTML={{ __html: content }} />}
      {!content && <article className={`${styles.prose}`}>{children}</article>}
    </>
  )
}
