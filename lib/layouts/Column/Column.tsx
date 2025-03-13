import React from 'react'
import { ColumnContent } from './ColumnContent'
import { gridColumnClasses } from '../../utils/propClasses'

type gridColumnKeys = keyof typeof gridColumnClasses

export interface ColumnProps {
  children: React.ReactNode
  cols?: gridColumnKeys
  reverse?: boolean
}

export const ColumnWrapper = ({ children, cols = '1', reverse = false }: ColumnProps) => {
  const $componentMarginY = `my-6 md:my-10 first:mt-0`

  return (
    <div className={`cu-column mx-auto grid gap-6 md:gap-10 ${gridColumnClasses[cols]} ${$componentMarginY}`}>
      {React.Children.map(children, (child, index) => (
        <ColumnContent reverse={reverse && index === 0}>{child}</ColumnContent>
      ))}
    </div>
  )
}

export const Column = Object.assign(ColumnWrapper, {
  Content: ColumnContent,
})

ColumnWrapper.displayName = 'Column'
