import React from 'react'

export interface ArticleBaseProps {
  as?: keyof JSX.IntrinsicElements
}

export interface ArticleProps {
  children?: React.ReactNode
  content?: string
}

const styles = {
  prose: `prose prose-rds prose-lg md:prose-xl max-w-none prose-img:w-full prose-img:rounded-lg`,
}

export const Article = ({ children, content }: ArticleProps) => {
  return (
    <>
      {content && <article className={`${styles.prose}`} dangerouslySetInnerHTML={{ __html: content }} />}
      {!content && <article className={`${styles.prose}`}>{children}</article>}
    </>
  )
}
