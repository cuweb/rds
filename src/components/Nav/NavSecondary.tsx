import { PropsWithChildren } from 'react'
import { navBaseStyles } from './Nav.Styles'

export const NavSecondary = ({ children }: PropsWithChildren) => {
  return (
    <div className={navBaseStyles.secondaryWrapper + ` border-t border-t-cu-black-100`}>
      <div className={navBaseStyles.secondaryInnerWrapper}>{children}</div>
    </div>
  )
}

NavSecondary.displayName = 'Nav.Secondary'
