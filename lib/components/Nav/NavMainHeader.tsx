import { PropsWithChildren } from 'react'

export const NavMainHeader = ({ children }: PropsWithChildren) => {
  return (
    <div className="cu-nav__mainheader w-full max-w-screen-2xl mx-auto flex flex-col sm:flex-row gap-x-8 sm:flex-nowrap items-center">
      {children}
    </div>
  )
}

NavMainHeader.displayName = 'Nav.MainHeader'
