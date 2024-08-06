import React from 'react'

export interface ArticleProps {
  children?: React.ReactNode
  content?: string
}

export const Article = ({ children, content }: ArticleProps) => {
  return (
    <>
      {content && <article className="cu-article" dangerouslySetInnerHTML={{ __html: content }} />}
      {!content && <article className="cu-article">{children}</article>}
    </>
  )
}
