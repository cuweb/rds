import React from 'react'
import { styles } from './PageBanner.Styles'

export interface PageBannerContentProps {
  children?: React.ReactNode
  title: string
  paragraph?: string
  headerSmall?: boolean
  image?: string
  imageAngle?: boolean
}

const mobileImageTypes = {
  default: 'min-h-[220px]',
  tall: 'min-h-[420px]',
  square: 'min-h-[220px] aspect-square',
}

export const PageBannerContent = ({
  children,
  title,
  paragraph,
  image,
  imageAngle,
  headerSmall,
}: PageBannerContentProps) => {
  const headerSize = headerSmall ? '' : 'lg:text-5xl lg:leading-[3.5rem]'

  // Set background image
  const imageUrl = image
  const imagePadding = imageUrl ? 'md:py-8' : 'md:pt-6'
  const inlineStyle = {
    backgroundImage: `url(${imageUrl})`,
  }

  return (
    <>
      <div className={`${styles.contentWrapper} ${imagePadding}`}>
        <h1 className={`${styles.header} ${headerSize}`}>{title}</h1>
        {paragraph && <p className={styles.paragraph}>{paragraph}</p>}
        {children}
      </div>
      {imageUrl && (
        <div className={`relative ${mobileImageTypes.default} ${styles.imageWrapper} ${styles.fullHeight}`}>
          <div
            className={`relative ${mobileImageTypes.default} ${styles.image} ${styles.fullHeight}`}
            style={inlineStyle}
          >
            {imageAngle && (
              <svg xmlns="http://www.w3.org/2000/svg" className={styles.svg} fill="none" viewBox="0 0 138 500">
                <path fill="#fff" d="M0 0h137.384L2.106 500H0V0Z" />
              </svg>
            )}
          </div>
        </div>
      )}
    </>
  )
}

PageBannerContent.displayName = 'PageBanner.Content'
