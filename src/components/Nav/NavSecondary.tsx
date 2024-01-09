import { PropsWithChildren } from 'react'
import { navBaseStyles } from './Nav.Styles'

export const NavSecondary = ({ children }: PropsWithChildren) => {
  return <div className={navBaseStyles.secondaryWrapper}>
    <div className={navBaseStyles.navInnerWrapper}>{children}</div>
  </div>
}

NavSecondary.displayName = 'Nav.Secondary'
