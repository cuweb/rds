import React from 'react'
import { rdsMaxWidth } from '../../../utils/optionClasses'
import { PageBannerContent } from './PageBannerContent'
import { styles } from './PageBanner.Styles'

export interface PageBannerProps {
  children?: React.ReactNode
  maxWidth?: 'full' | '5xl' | '7xl'
  hasBorder?: boolean
}

export const PageBannerWrapper = ({ children, hasBorder, maxWidth = '7xl' }: PageBannerProps) => {
  // Add bottom border
  const borderStyle = hasBorder ? styles.border : ''

  // Set classes base on image var being set
  const isWide = maxWidth === '7xl' ? styles.gridWithImage : styles.gridNoImage

  return <div className={`${styles.base} ${rdsMaxWidth[maxWidth]} ${isWide} ${borderStyle}`}>{children}</div>
}

export const PageBanner = Object.assign(PageBannerWrapper, {
  Content: PageBannerContent,
})
