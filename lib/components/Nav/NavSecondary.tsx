import { PropsWithChildren } from 'react'

export const NavSecondary = ({ children }: PropsWithChildren) => {
  return (
    <div className="cu-nav__secondary bg-cu-black-25 border-t border-t-cu-black-100 border-b border-b-cu-black-100 w-[calc(100%+40px)] md:w-[calc(100%+64px)] -mx-[20px] md:-mx-[32px] px-[20px] md:px-[2rem] py-2.5">
      <div className="flex gap-6">{children}</div>
    </div>
  )
}

NavSecondary.displayName = 'Nav.Secondary'
