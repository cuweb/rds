import { PropsWithChildren } from 'react'
import { navBaseStyles } from './Nav.Styles'

export const NavPrimary = ({ children }: PropsWithChildren) => {
  return <div className={navBaseStyles.primaryWrapper + ` ` + navBaseStyles.wrapper}>{children}</div>
}

NavPrimary.displayName = 'Nav.Primary'
