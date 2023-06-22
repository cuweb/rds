import React from 'react'
import { styles } from './HeroTextImage.Styles'

export interface HeroTextImageContentProps {
  children?: React.ReactNode
  title: string
  paragraph?: string
  headerSmall?: boolean
  headerType?: 'h1' | 'h2'
  image?: string
  imageAngle?: boolean
  focalPointX?: string
  focalPointY?: string
}

const mobileImageTypes = {
  default: 'min-h-[220px]',
  tall: 'min-h-[420px]',
  square: 'min-h-[220px] aspect-square',
}

export const HeroTextImageContent = ({
  children,
  title,
  paragraph,
  headerType = 'h2',
  image,
  imageAngle,
  focalPointX = '50',
  focalPointY = '50',
}: HeroTextImageContentProps) => {
  // Set background image
  const imageUrl = image
  const imagePadding = imageUrl ? 'md:py-8' : 'md:pt-6'

  const inlineStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: `${focalPointX}% ${focalPointY}%`,
  }

  return (
    <>
      <div className={`${styles.contentWrapper} ${imagePadding}`}>
        {headerType === 'h1' && <h1 className={`${styles.header} ${styles.headerH1}`}>{title}</h1>}
        {headerType === 'h2' && <h2 className={`${styles.header}`}>{title}</h2>}
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
              <svg xmlns="http://www.w3.org/2000/svg" className={styles.svg} fill="none" viewBox="0 0 123 440">
                <path
                  fill="#fff"
                  d="M0 440h6c-4.4 0-4.5-3-3.5-6C49.344 293.466 118.06 4.849 119 2.5c1-2.5 3-2.5 4-2.5H0v440Z"
                />
              </svg>
            )}
          </div>
        </div>
      )}
    </>
  )
}

HeroTextImageContent.displayName = 'HeroTextImage.Content'
