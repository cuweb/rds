import React from 'react'
import { rdsMaxWidth, rdsOpacity } from '../../utils/optionClasses'
import { styles } from './WideImage.Styles'

export interface WideImageProps {
  children?: React.ReactNode
  title?: string
  image?: string
  headerType?: 'h1' | 'h2'
  maxWidth?: 'full' | '5xl' | '7xl' | 'max'
  opacity?: 40 | 50 | 60 | 70 | 80
  focalPointX?: string
  focalPointY?: string
}

export const WideImage = ({
  children,
  title,
  image,
  headerType = 'h2',
  maxWidth = 'max',
  opacity = 70,
  focalPointX = '50',
  focalPointY = '50',
}: WideImageProps) => {
  const inlineStyle = {
    backgroundImage: `url(${image})`,
    backgroundPosition: `${focalPointX}% ${focalPointY}%`,
  }

  const hasImageStyles = image ? styles.imageBg : styles.noImage
  const imageTextStyles = image ? 'text-white' : 'text-cu-black-700'

  return (
    <div style={inlineStyle} className={`${styles.baseBg} ${rdsMaxWidth[maxWidth]} ${hasImageStyles}`}>
      {image && <div className={`${styles.imageOverlay} ${rdsOpacity[opacity]}`}></div>}

      <div className={styles.content}>
        {headerType === 'h1' && <h1 className={`${styles.header} ${styles.headerOne} ${imageTextStyles}`}>{title}</h1>}
        {headerType === 'h2' && <h2 className={`${styles.header} ${styles.headerTwo} ${imageTextStyles}`}>{title}</h2>}
        {children}
      </div>
    </div>
  )
}
