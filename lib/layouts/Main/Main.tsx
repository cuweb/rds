import React from 'react'
import { maxWidthClasses } from '../../utils/propClasses'

type maxWidthKeys = keyof typeof maxWidthClasses

export interface MainProps {
  children: React.ReactNode
  maxWidth?: maxWidthKeys
  noProse?: boolean
}

export const Main = ({ children, maxWidth = '5xl', noProse }: MainProps) => {
  const proseClass = noProse ? '' : 'cu-prose cu-prose-dark'

  // TODO: primary spacing --> px-4 md:px-6 lg:px-12

  return (
    <>
      <main className={`cu-main flex justify-center px-4 md:px-6 lg:px-12 ${proseClass}`}>
        <section className={`cu-section cu-section--primary cu-max-w-${maxWidth} box-border relative w-full`}>
          {children}
        </section>
      </main>
    </>
  )
}
