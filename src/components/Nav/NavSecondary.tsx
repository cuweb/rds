import { PropsWithChildren } from 'react'
import { navBaseStyles } from './Nav.Styles'

export const NavSecondary = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={
        navBaseStyles.secondaryWrapper +
        ` border-t border-t-cu-black-100 test py-3.5 w-[calc(100%+40px)] md:w-[calc(100%+64px)] -mx-[20px] md:-mx-[32px] px-[20px] bg-cu-black-25`
      }
    >
      <div className={navBaseStyles.secondaryInnerWrapper}>{children}</div>
    </div>
  )
}

NavSecondary.displayName = 'Nav.Secondary'
