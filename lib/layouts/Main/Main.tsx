import React from 'react'

export interface MainProps {
  children: React.ReactNode
  isDark?: boolean
}

export const Main = ({ children, isDark = false }: MainProps) => {
  const useDarkMode = isDark ? 'bg-cu-black-900' : 'bg-white'
  return (
    <main className={`cu-main cu-section-5xl py-4 md:py-6 lg:py-12 px-6 md:px-8 lg:px-10 ${useDarkMode}`}>
      {children}
    </main>
  )
}
