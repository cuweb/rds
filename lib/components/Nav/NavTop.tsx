import { PropsWithChildren } from 'react'

export const NavTop = ({ children }: PropsWithChildren) => {
  return (
    <div className="cu-nav__top w-full max-w-screen-2xl mx-auto flex flex-col sm:flex-row gap-x-8 sm:flex-nowrap items-center">
      {children}
    </div>
  )
}

NavTop.displayName = 'Nav.Top'
