import React from 'react'
import { rdsTopSpacing } from '../../utils/tailwindClasses'

export interface AsideProps {
  children: React.ReactNode
  isSticky?: boolean
  topSpace?: '8' | '12' | '16' | '20' | '24'
}

export const Aside = ({ children, isSticky, topSpace }: AsideProps) => {
  const stickyClass = isSticky ? 'sticky' : ''
  const topClass = topSpace ? rdsTopSpacing[topSpace] : ''

  return (
    <aside className="relative">
      <div className={`${stickyClass} ${topClass}`}>{children}</div>
    </aside>
  )
}
