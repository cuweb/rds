import React from 'react'

export interface MainProps {
  children: React.ReactNode
  noProse?: boolean
}

export const Main = ({ children, noProse = false }: MainProps) => {
  const useProse = noProse ? '' : 'cu-prose'

  return <main className={`cu-main cu-section-5xl px-8 py-6 md:py-10 md:px-10 ${useProse}`}>{children}</main>
}
