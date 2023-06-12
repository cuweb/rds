import React from 'react'
import { HeroTextImageContent } from './HeroTextImageContent'
import { styles } from './HeroTextImage.Styles'

export interface HeroTextImageProps {
  children?: React.ReactNode
  title: string
  image?: string
  hasBorder?: boolean
  headerSmall?: boolean
  imageAngle?: boolean
  imageTall?: boolean
}

export const rdsMaxWidth = {
  '5xl': 'max-w-5xl',
  '7xl': 'max-w-7xl',
  max: 'max-w-screen-2xl',
}

export const HeroTextImageWrapper = ({
  children,
  title,
  image,
  hasBorder,
  headerSmall,
  imageAngle,
  imageTall,
}: HeroTextImageProps) => {
  const headerSize = headerSmall ? '' : 'lg:text-5xl lg:leading-[3.5rem]'

  // Add bottom border
  const borderStyle = hasBorder ? styles.border : ''

  // Set background image
  const imageUrl = image
  const inlineStyle = {
    backgroundImage: `url(${imageUrl})`,
  }

  // Set classes base on image var being set
  const padding = imageUrl ? 'md:py-8' : 'md:pt-6'
  const withImage = imageUrl
    ? `${styles.gridWithImage} ${rdsMaxWidth['7xl']}`
    : `${styles.gridNoImage} ${rdsMaxWidth['5xl']}`

  // Image height for mobile
  const hasTallImage = imageTall ? 'min-h-[420px]' : 'min-h-[220px]'

  return (
    <div className={`${styles.base} ${styles.grid} ${withImage} ${borderStyle}`}>
      <div className={`${styles.contentSpacing} ${styles.contentAlignment} ${padding}`}>
        <h1 className={`${styles.header} ${headerSize}`}>{title}</h1>
        {children}
      </div>

      {imageUrl && (
        <div className={`relative ${hasTallImage} ${styles.image}`}>
          {imageAngle && (
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.svg} fill="none" viewBox="0 0 138 500">
              <path fill="#fff" d="M0 0h137.384L2.106 500H0V0Z" />
            </svg>
          )}
          <div className={`relative ${hasTallImage} ${styles.image}`} style={inlineStyle}></div>
        </div>
      )}
    </div>
  )
}

export const HeroTextImage = Object.assign(HeroTextImageWrapper, {
  Content: HeroTextImageContent,
})
