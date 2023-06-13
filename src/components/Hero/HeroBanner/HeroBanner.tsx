import React from 'react'
import { rdsMaxWidth } from '../../../utils/optionClasses'
import { HeroBannerContent } from './HeroBannerContent'
import { styles } from './HeroBanner.Styles'

export interface HeroBannerProps {
  children?: React.ReactNode
  maxWidth?: 'full' | '5xl' | '7xl'
  hasBorder?: boolean
}

export const HeroBannerWrapper = ({ children, hasBorder, maxWidth = '7xl' }: HeroBannerProps) => {
  const borderStyle = hasBorder ? styles.border : ''
  const isWide = maxWidth === '7xl' ? styles.gridWithImage : styles.gridNoImage

  return <div className={`${styles.base} ${rdsMaxWidth[maxWidth]} ${isWide} ${borderStyle}`}>{children}</div>
}

export const HeroBanner = Object.assign(HeroBannerWrapper, {
  Content: HeroBannerContent,
})
