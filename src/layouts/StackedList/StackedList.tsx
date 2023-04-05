import React from 'react'
import styles, { gridStyles } from './StackedList.styles'
import { Panel } from '../Panel/Panel'

export interface StackedListProps {
  children: React.ReactNode
  cols?: '1' | '2'
  header?: string
  hasBorder?: boolean
  hasShadow?: boolean
}

export const StackedList = ({ children, cols = '1', header, hasBorder, hasShadow }: StackedListProps) => {
  const gridColumns = cols === '1' ? gridStyles.oneCol : gridStyles.twoCol

  return (
    <Panel hasShadow={hasShadow} hasBorder={hasBorder}>
      {header && <h2 className={`${styles.title}`}>{header}</h2>}
      <ul className={`cu-stackedlist ${styles.grid} ${gridColumns}`}>{children}</ul>
    </Panel>
  )
}
