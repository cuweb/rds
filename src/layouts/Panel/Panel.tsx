import React from 'react'

const styles = {
  wrapper: `cu-panel not-prose overflow-hidden rounded-lg bg-white`,
  border: `border border-cu-black-100`,
  shadow: `shadow-lg`,
  spacing: `p-6`,
}

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
