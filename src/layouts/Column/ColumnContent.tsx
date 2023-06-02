import React from 'react'
import { proseStyles } from '../../utils/globalClasses'

export interface ColumnContentProps {
  children: React.ReactNode
}

export const ColumnContent = ({ children }: ColumnContentProps) => {
  return <div className={proseStyles.base}>{children}</div>
}

ColumnContent.displayName = 'Column.Content'
