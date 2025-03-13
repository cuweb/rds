import React from 'react'

export interface ColumnContentProps {
  children: React.ReactNode
  reverse?: boolean
}

export const ColumnContent = ({ children, reverse = false }: ColumnContentProps) => {
  return <div className={`cu-column-content ${reverse ? 'order-1' : 'order-none'}`}>{children}</div>
}

ColumnContent.displayName = 'Column.Content'
