import { PropsWithChildren } from 'react'
import { navSecondaryStyles } from './Nav.Styles'

export const NavSecondary = ({ children }: PropsWithChildren) => {
  return (
    <div className={navSecondaryStyles.navSecondary}>
      <div className={navSecondaryStyles.inner}>{children}</div>
    </div>
  )
}

NavSecondary.displayName = 'Nav.Secondary'
