import React from 'react'

export interface ColumnContentProps {
  children: React.ReactNode
  reverse?: boolean
}

export const ColumnContent = ({ children, reverse = false }: ColumnContentProps) => {
  const columnOrder = reverse ? 'order-1' : 'order-none'

  return <div className={`cu-column-content ${columnOrder}`}>{children}</div>
}

ColumnContent.displayName = 'Column.Content'
