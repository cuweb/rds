import React from 'react'
import { rdsGridColumns, rdsGridSpacing, rdsMaxWidth } from '../../utils/tailwindClasses'
import styles from './Column.styles'

export interface ColumnProps {
  children: React.ReactNode
  maxWidth?: 'full' | '5xl' | '7xl'
  gridGap?: '0' | '5' | '10'
  cols?: '1' | '2' | '3' | '4' | '1/3' | '2/3'
}

export const Column = ({ children, maxWidth = '5xl', gridGap = '10', cols = '1' }: ColumnProps) => {
  return (
    <div
      className={`
        ${styles.column}
        ${rdsGridColumns[cols]}
        ${rdsMaxWidth[maxWidth]} ${rdsGridSpacing[gridGap]}
      `}
    >
      {children}
    </div>
  )
}
