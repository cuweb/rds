import React from 'react'
import { ColumnContent } from './ColumnContent'
import { gridColumnClasses, gridGapClasses, maxWidthClasses } from '../../utils/propClasses'
import { proseStyles } from '../../utils/globalClasses'

type maxWidthKeys = keyof typeof maxWidthClasses
type gridColumnKeys = keyof typeof gridColumnClasses
type gridGapKeys = keyof typeof gridGapClasses

export interface ColumnProps {
  children: React.ReactNode
  maxWidth?: maxWidthKeys
  cols?: gridColumnKeys
  gridGap?: gridGapKeys
  reverse?: boolean
  noProse?: boolean
}

const styles = {
  column: `cu-column cu-component not-contained mx-auto grid`,
}

export const ColumnWrapper = ({
  children,
  noProse = false,
  maxWidth = '5xl',
  gridGap = '10',
  cols = '1',
  reverse,
}: ColumnProps) => {
  const useProse = noProse ? '' : proseStyles.base
  const reverseGrid = reverse && (cols === '1/3' || cols === '2/3') ? 'cu-column--reverse' : ''

  return (
    <div
      className={`
        ${useProse}
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

ColumnWrapper.displayName = 'Column'
