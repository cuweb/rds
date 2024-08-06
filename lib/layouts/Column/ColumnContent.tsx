import React from 'react'

export interface ColumnContentProps {
  children: React.ReactNode
}

export const ColumnContent = ({ children }: ColumnContentProps) => {
  return <div className="cu-prose cu-column-content">{children}</div>
}

ColumnContent.displayName = 'Column.Content'
