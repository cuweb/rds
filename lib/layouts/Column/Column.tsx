import React from 'react'
import { ColumnContent } from './ColumnContent'
import { gridColumnClasses } from '../../utils/propClasses'
type gridColumnKeys = keyof typeof gridColumnClasses
export interface ColumnProps {
  children: React.ReactNode
  cols?: gridColumnKeys
}
export const ColumnWrapper = ({ children, cols = '1' }: ColumnProps) => {
  // TODO GLOBAL: margin-y
  const $componentMarginY = `my-6 md:my-10 first:mt-0`
  return (
    <div className={`cu-column mx-auto grid gap-6 md:gap-10 ${gridColumnClasses[cols]} ${$componentMarginY}`}>
      {children}
    </div>
  )
}
export const Column = Object.assign(ColumnWrapper, {
  Content: ColumnContent,
})
ColumnWrapper.displayName = 'Column'
