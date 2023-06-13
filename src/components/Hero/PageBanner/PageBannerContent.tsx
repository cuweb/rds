import React from 'react'
import { styles } from './PageBanner.Styles'

export interface PageBannerContentProps {
  children?: React.ReactNode
  title: string
  paragraph?: string
  headerSmall?: boolean
}

export const PageBannerContent = ({ children, headerSmall, title, paragraph }: PageBannerContentProps) => {
  const headerSize = headerSmall ? '' : 'lg:text-5xl lg:leading-[3.5rem]'

  return (
    <>
      <h2 className={`${styles.header} ${headerSize}`}>{title}</h2>
      {paragraph && <p className={styles.paragraph}>{paragraph}</p>}
      {children}
    </>
  )
}

PageBannerContent.displayName = 'PageBanner.Content'
