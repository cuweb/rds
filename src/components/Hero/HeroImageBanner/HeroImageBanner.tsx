import React from 'react'
import { rdsBgOpacity } from '../../../utils/optionClasses'
import { styles } from './HeroTextImage.Styles'

export interface HeroImageBannerProps {
  children?: React.ReactNode
  title?: string
  image?: string
  opacity?: 40 | 50 | 60 | 70 | 80
  focalPointX?: string
  focalPointY?: string
}

export const HeroImageBanner = ({
  children,
  title,
  image,
  opacity = 70,
  focalPointX = '50',
  focalPointY = '50',
}: HeroImageBannerProps) => {
  const inlineStyle = {
    backgroundImage: `url(${image})`,
    backgroundPosition: `${focalPointX}% ${focalPointY}%`,
  }

  const hasImageStyles = image ? styles.imageBg : styles.noImage
  const imageTextStyles = image ? 'text-white' : 'text-cu-black-800'

  return (
    <div style={inlineStyle} className={`${styles.baseBg} ${hasImageStyles}`}>
      {image && <div className={`${styles.imageOverlay} ${rdsBgOpacity[opacity]}`}></div>}

      <div className={styles.content}>
        <h1 className={`${styles.header} ${imageTextStyles}`}>{title}</h1>
        {children}
      </div>
    </div>
  )
}
