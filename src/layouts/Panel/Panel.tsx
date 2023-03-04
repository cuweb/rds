import React from 'react'
import styles from './Panel.styles'

export interface PanelProps {
  children: React.ReactNode
  hasBorder?: boolean
  hasShadow?: boolean
  hasSpacing?: boolean
}

export const Panel = ({ children, hasBorder, hasShadow, hasSpacing }: PanelProps) => {
  const borderStyle = hasBorder ? styles.border : ''
  const shadowStyle = hasShadow ? styles.shadow : ''
  const spacingStyle = hasSpacing ? styles.spacing : ''

  return <div className={`${styles.wrapper} ${borderStyle} ${shadowStyle} ${spacingStyle}`}>{children}</div>
}
