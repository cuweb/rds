import React from 'react'

export interface MainProps {
  children: React.ReactNode
  hasOverlap?: boolean
}

const styles = {
  core: `relative mx-8`,
  overlap: `z-20 md:-mt-16 md:[&>.cu-container-white:first-child]:pt-0`,
}

export const Main = ({ children, hasOverlap }: MainProps) => {
  const overlapStyles = hasOverlap ? styles.overlap : ''

  return <main className={`${styles.core} ${overlapStyles}`}>{children}</main>
}
