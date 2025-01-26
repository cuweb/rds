import { PropsWithChildren } from 'react'

export const NavTop = ({ children }: PropsWithChildren) => {
  // TODO GLOBAL: break out of main width
  const $breakoutMaxWidth = `w-screen max-w-screen-2xl mx-auto`
  return (
    <div className={`cu-nav__top ${$breakoutMaxWidth} flex flex-col sm:flex-row gap-x-8 sm:flex-nowrap items-center`}>
      {children}
    </div>
  )
}

NavTop.displayName = 'Nav.Top'
