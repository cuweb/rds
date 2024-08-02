import React from 'react'
import { proseStyles } from '../../utils/globalClasses'

export interface AsideProps {
  children: React.ReactNode
  isSticky?: boolean
  topSpace?: number
  noProse?: boolean
}

export const Aside = ({ children, noProse = false, isSticky, topSpace = 0 }: AsideProps) => {
  const useProse = noProse ? '' : proseStyles.base

  return (
    <aside className={`relative cu-aside ${useProse}`}>
      {isSticky ? (
        <div className="sticky" style={{ top: `${topSpace}px` }}>
          {children}
        </div>
      ) : (
        children
      )}
    </aside>
  )
}
