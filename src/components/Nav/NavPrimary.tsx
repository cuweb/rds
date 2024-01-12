import { PropsWithChildren } from 'react'
import { navBaseStyles } from './Nav.Styles'

export const NavPrimary = ({ children }: PropsWithChildren) => {
  return <nav className={navBaseStyles.primaryWrapper + ` ` + navBaseStyles.wrapper}>{children}</nav>
}

NavPrimary.displayName = 'Nav.Primary'
