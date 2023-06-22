import React from 'react'
import { rdsMaxWidth } from '../../../utils/optionClasses'
import { HeroTextImageContent } from './HeroTextImageContent'
import { styles } from './HeroTextImage.Styles'

export interface HeroTextImageProps {
  children?: React.ReactNode
  maxWidth?: 'full' | '5xl' | '7xl'
  hasBorder?: boolean
  reverse?: boolean
}

export const HeroTextImageWrapper = ({ children, hasBorder, reverse, maxWidth = '7xl' }: HeroTextImageProps) => {
  const borderStyle = hasBorder ? styles.border : ''
  const imagePosition = reverse ? styles.gridImageLeft : styles.gridImageRight
  const isWide = maxWidth === '7xl' ? imagePosition : styles.gridNoImage

  return <div className={`${styles.base} ${rdsMaxWidth[maxWidth]} ${isWide} ${borderStyle}`}>{children}</div>
}

export const HeroTextImage = Object.assign(HeroTextImageWrapper, {
  Content: HeroTextImageContent,
})
