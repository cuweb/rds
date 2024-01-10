import React from 'react'
import { styles } from './StackedList.styles'
import { rdsMaxWidth } from '../../utils/optionClasses'

export interface StackedListProps {
  children: React.ReactNode
  as?: 'ul' | 'div'
  cols?: '1' | '2'
  listType?: 'posts' | 'toc'
  maxWidth?: '5xl' | '7xl'
  offset?: 'left' | 'right'
  size?: 'sm' | 'lg'
  header?: string
  hasBorder?: boolean
  hasShadow?: boolean
}

export const StackedList = ({
  children,
  as = 'ul',
  cols = '2',
  listType = 'posts',
  maxWidth = '5xl',
  offset,
  size,
  hasBorder,
  hasShadow,
  header,
}: StackedListProps) => {
  const ListComponent = as
  const gridColumns = cols === '1' ? styles.oneCol : styles.twoCol
  const borderStyle = hasBorder ? styles.border : ''
  const shadowStyle = hasShadow ? styles.shadow : ''
  const sizeStyles = size ? styles[size] : styles.sm
  const offsetStyle = offset ? `${styles[offset]} ${styles.offset} ${sizeStyles}` : rdsMaxWidth[maxWidth]

  return (
    <div className={`${styles.wrapper} ${borderStyle} ${shadowStyle} ${offsetStyle}`}>
      {header && <h2 className={`${styles.title}`}>{header}</h2>}
      <ListComponent className={`cu-stackedlist-${listType} ${gridColumns}`}>{children}</ListComponent>
    </div>
  )
}
