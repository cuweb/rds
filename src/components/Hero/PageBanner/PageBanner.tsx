import React from 'react'
import { rdsMaxWidth } from '../../../utils/optionClasses'
import { PageBannerContent } from './PageBannerContent'
import { styles } from './PageBanner.Styles'

export interface PageBannerProps {
  children?: React.ReactNode
  image?: string
  hasBorder?: boolean
  imageAngle?: boolean
  imageMobile?: 'default' | 'square' | 'tall'
}

const mobileImageTypes = {
  default: 'min-h-[220px]',
  tall: 'min-h-[420px]',
  square: 'min-h-[220px] aspect-square',
}

export const PageBannerWrapper = ({
  children,
  image,
  hasBorder,
  imageAngle,
  imageMobile = 'square',
}: PageBannerProps) => {
  // Add bottom border
  const borderStyle = hasBorder ? styles.border : ''

  // Set background image
  const imageUrl = image
  const inlineStyle = {
    backgroundImage: `url(${imageUrl})`,
  }

  // Set classes base on image var being set
  const imagePadding = imageUrl ? 'md:py-8' : 'md:pt-6'
  const hasImage = imageUrl
    ? `${styles.gridWithImage} ${rdsMaxWidth['7xl']}`
    : `${styles.gridNoImage} ${rdsMaxWidth['5xl']}`

  return (
    <div className={`${styles.base} ${hasImage} ${borderStyle}`}>
      <div className={`${styles.contentWrapper} ${imagePadding}`}>{children}</div>

      {imageUrl && (
        <div className={`relative ${mobileImageTypes[imageMobile]} ${styles.image}`}>
          {imageAngle && (
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.svg} fill="none" viewBox="0 0 138 500">
              <path fill="#fff" d="M0 0h137.384L2.106 500H0V0Z" />
            </svg>
          )}
          <div className={`relative ${mobileImageTypes[imageMobile]} ${styles.image}`} style={inlineStyle}></div>
        </div>
      )}
    </div>
  )
}

export const PageBanner = Object.assign(PageBannerWrapper, {
  Content: PageBannerContent,
})
