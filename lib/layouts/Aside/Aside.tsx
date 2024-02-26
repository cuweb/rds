import React from 'react'
import { rdsTopSpacing } from '../../utils/optionClasses'

export interface AsideProps {
  children: React.ReactNode
  isSticky?: boolean
  topSpace?: '5' | '10'
}

export const Aside = ({ children, isSticky, topSpace }: AsideProps) => {
  const stickyClass = isSticky ? 'sticky' : ''
  const topClass = topSpace ? rdsTopSpacing[topSpace] : ''

  return (
    <aside className="cu-aside relative">
      <div className={`${stickyClass} ${topClass}`}>{children}</div>
    </aside>
  )
}
