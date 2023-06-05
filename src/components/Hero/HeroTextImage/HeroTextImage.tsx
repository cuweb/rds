import React from 'react'
import { styles } from './HeroTextImage.Styles'

export interface HeroTextImageProps {
  children?: React.ReactNode
  title: string
  image?: string
  headerSmall?: boolean
  imageAngle?: boolean
  imageTall?: boolean
}

export const rdsMaxWidth = {
  '5xl': 'max-w-5xl',
  '7xl': 'max-w-7xl',
  max: 'max-w-screen-2xl',
}

export const HeroTextImage = ({ children, title, image, headerSmall, imageAngle, imageTall }: HeroTextImageProps) => {
  const headerSize = headerSmall ? '' : 'xl:text-5xl xl:leading-[3.5rem]'

  // Set background image
  const imageUrl = image
  const inlineStyle = {
    backgroundImage: `url(${imageUrl})`,
  }

  // Set classes base on image var being set
  const gridClasses = imageUrl ? styles.gridWithImage : styles.gridNoImage
  const maxWidth = imageUrl ? rdsMaxWidth['7xl'] : rdsMaxWidth['5xl']
  const contentPadding = imageUrl ? 'md:py-8' : 'md:pt-6'

  // Image height for mobile
  const hasTallImage = imageTall ? 'min-h-[420px]' : 'min-h-[220px]'

  return (
    <div className={`${styles.base} ${styles.grid} ${gridClasses} ${styles.bottom} ${maxWidth}`}>
      <div className={`${styles.content} ${contentPadding}`}>
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
