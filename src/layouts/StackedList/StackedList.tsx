import React from 'react'
import styles, { gridStyles } from './StackedList.styles'

export interface StackedListProps {
  children: React.ReactNode
  cols?: '1' | '2'
  header?: string
  hasBorder?: boolean
  hasShadow?: boolean
}

export const StackedList = ({ children, cols = '1', header, hasBorder, hasShadow }: StackedListProps) => {
  const borderStyle = hasBorder ? styles.border : ''
  const shadowStyle = hasShadow ? styles.shadow : ''
  const gridColumns = cols === '1' ? gridStyles.oneCol : gridStyles.twoCol

  return (
    <div className={`${styles.wrapper} ${borderStyle} ${shadowStyle}`}>
      {header && <h2 className={`${styles.title}`}>{header}</h2>}
      <ul className={`${styles.grid} ${gridColumns}`}>{children}</ul>
    </div>
  )
}
