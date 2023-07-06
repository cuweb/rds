import React from 'react'

export interface MainProps {
  children: React.ReactNode
  hasOverlap?: boolean
}

export const Main = ({ children, hasOverlap }: MainProps) => {
  const overlapStyles = hasOverlap ? 'z-20 cu-overlap' : ''

  return <main className={`cu-main relative ${overlapStyles}`}>{children}</main>
}
