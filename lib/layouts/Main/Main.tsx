import React from 'react'

export interface MainProps {
  children: React.ReactNode
}

export const Main = ({ children }: MainProps) => {
  return <main className="cu-main cu-section-5xl cu-browsers-edge py-4 md:py-6 lg:py-12">{children}</main>
}
