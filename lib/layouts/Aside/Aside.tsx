import React from 'react'

export interface AsideProps {
  children: React.ReactNode
  isSticky?: boolean
  topSpace?: number
}

export const Aside = ({ children, isSticky, topSpace = 0 }: AsideProps) => {
  return (
    <aside className="relative cu-aside cu-prose">
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
