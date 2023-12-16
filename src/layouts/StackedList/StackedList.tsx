import React from 'react'
import { styles } from './StackedList.styles'
import { Panel } from '../Panel/Panel'

export interface StackedListProps {
  children: React.ReactNode
  as?: 'ul' | 'div'
  cols?: '1' | '2'
  listType?: 'posts' | 'toc'
  header?: string
  hasBorder?: boolean
  hasShadow?: boolean
}

export const StackedList = ({
  children,
  as = 'ul',
  cols = '2',
  listType = 'posts',
  header,
  hasBorder,
  hasShadow,
}: StackedListProps) => {
  const gridColumns = cols === '1' ? styles.oneCol : styles.twoCol
  const ListComponent = as

  return (
    <Panel hasShadow={hasShadow} hasBorder={hasBorder}>
      {header && <h2 className={`${styles.title}`}>{header}</h2>}
      <ListComponent className={`cu-stackedlist-${listType} ${styles[as]} ${gridColumns}`}>{children}</ListComponent>
    </Panel>
  )
}
