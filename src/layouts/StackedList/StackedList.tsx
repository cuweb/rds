import React from 'react'
import { rdsMaxWidth } from '../../utils/optionClasses'
import styles, { gridStyles } from './StackedList.styles'

export interface StackedListProps {
  children: React.ReactNode
  maxWidth?: 'full' | '5xl' | '7xl'
  cols?: '1' | '2'
  header?: string
  hasBorder?: boolean
  hasShadow?: boolean
}

export const StackedList = ({
  children,
  maxWidth = '5xl',
  cols = '1',
  header,
  hasBorder,
  hasShadow,
}: StackedListProps) => {
  const borderStyle = hasBorder ? styles.border : ''
  const shadowStyle = hasShadow ? styles.shadow : ''
  const gridColumns = cols === '1' ? gridStyles.oneCol : gridStyles.twoCol

  return (
    <div className={`${styles.wrapper} ${rdsMaxWidth[maxWidth]} ${borderStyle} ${shadowStyle}`}>
      {header && <h2 className={`${styles.title}`}>{header}</h2>}
      <ul className={`cu-stackedlist ${styles.grid} ${gridColumns}`}>{children}</ul>
    </div>
  )
}
