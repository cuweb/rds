import React from 'react'
import styles from './Panel.styles'
import { rdsMaxWidth } from '../../utils/optionClasses'

export interface PanelProps {
  children: React.ReactNode
  maxWidth?: 'full' | '5xl' | '7xl'
  hasBorder?: boolean
  hasShadow?: boolean
  hasSpacing?: boolean
}

export const Panel = ({ children, maxWidth = '5xl', hasBorder, hasShadow, hasSpacing }: PanelProps) => {
  const borderStyle = hasBorder ? styles.border : ''
  const shadowStyle = hasShadow ? styles.shadow : ''
  const spacingStyle = hasSpacing ? styles.spacing : ''

  return (
    <div className={`${styles.wrapper} ${rdsMaxWidth[maxWidth]} ${borderStyle} ${shadowStyle} ${spacingStyle}`}>
      {children}
    </div>
  )
}
