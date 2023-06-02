import React from 'react'
import { ColumnContent } from './ColumnContent'
import { rdsGridColumns, rdsGridSpacing, rdsMaxWidth } from '../../utils/optionClasses'

export interface ColumnProps {
  children: React.ReactNode
  maxWidth?: 'full' | '5xl' | '7xl'
  gridGap?: '0' | '5' | '10'
  cols?: '1' | '2' | '3' | '4' | '1/3' | '2/3'
}

const styles = {
  column: `cu-column not-contained mx-auto grid`,
}

export const ColumnWrapper = ({ children, maxWidth = '5xl', gridGap = '10', cols = '1' }: ColumnProps) => {
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

export const Column = Object.assign(ColumnWrapper, {
  Content: ColumnContent,
})
