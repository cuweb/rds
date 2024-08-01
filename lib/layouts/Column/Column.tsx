import React from 'react'
import { ColumnContent } from './ColumnContent'
import { gridColumnClasses, gridGapClasses, maxWidthClasses } from '../../utils/propClasses'

type maxWidthKeys = keyof typeof maxWidthClasses
type gridColumnKeys = keyof typeof gridColumnClasses
type gridGapKeys = keyof typeof gridGapClasses

export interface ColumnProps {
  children: React.ReactNode
  maxWidth?: maxWidthKeys
  cols?: gridColumnKeys
  gridGap?: gridGapKeys
  reverse?: boolean
}

const styles = {
  column: `cu-column cu-component not-contained mx-auto grid`,
}

export const ColumnWrapper = ({ children, maxWidth = '5xl', gridGap = '10', cols = '1', reverse }: ColumnProps) => {
  const reverseGrid = reverse && (cols === '1/3' || cols === '2/3') ? 'cu-column--reverse' : ''

  return (
    <div
      className={`
        ${styles.column}
        ${gridColumnClasses[cols]}
        ${maxWidthClasses[maxWidth]} ${gridGapClasses[gridGap]}
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
