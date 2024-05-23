import React from 'react'
import { ColumnContent } from './ColumnContent'
import { rdsGridColumns, rdsGridSpacing, rdsMaxWidth } from '../../utils/optionClasses'

export interface ColumnProps {
  children: React.ReactNode
  maxWidth?: '5xl' | '7xl'
  gridGap?: '0' | '5' | '10'
  cols?: '1' | '2' | '3' | '4' | '1/3' | '2/3'
  reverse?: boolean
}

const styles = {
  column: `cu-column cu-component-spacing not-contained mx-auto grid`,
}

export const ColumnWrapper = ({ children, maxWidth = '5xl', gridGap = '10', cols = '1', reverse }: ColumnProps) => {
  const reverseGrid = reverse && (cols === '1/3' || cols === '2/3') ? 'cu-column--reverse' : ''

  return (
    <div
      className={`
        ${styles.column}
        ${rdsGridColumns[cols]}
        ${rdsMaxWidth[maxWidth]} ${rdsGridSpacing[gridGap]}
        ${reverseGrid}
      `}
    >
      {children}
    </div>
  )
}

export const Column = Object.assign(ColumnWrapper, {
  Content: ColumnContent,
})
