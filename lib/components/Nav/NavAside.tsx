import { PropsWithChildren } from 'react'

export const NavAside = ({ children }: PropsWithChildren) => {
  return (
    <div className="cu-nav__aside flex items-center justify-center gap-4 lg:gap-8 grow max-sm:py-3.5 max-sm:w-[calc(100%+40px)] max-sm:-mx-[20px] max-sm:px-[20px] max-sm:bg-cu-black-25 max-sm:border-t max-sm:border-t-cu-black-100 sm:border-0">
      {children}
    </div>
  )
}

NavAside.displayName = 'Nav.Aside'
