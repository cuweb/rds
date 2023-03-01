import React from 'react'

const styles = {
  wrapper: `cu-panel not-prose overflow-hidden rounded-lg bg-white`,
  border: `border border-cu-black-100`,
  shadow: `shadow-lg`,
}

export interface PanelProps {
  children: React.ReactNode
  hasBorder?: boolean
  hasShadow?: boolean
}

export const Panel = ({ children, hasBorder, hasShadow }: PanelProps) => {
  const borderStyle = hasBorder ? styles.border : ''
  const shadowStyle = hasShadow ? styles.shadow : ''

  return <div className={`${styles.wrapper} ${borderStyle} ${shadowStyle}`}>{children}</div>
}
