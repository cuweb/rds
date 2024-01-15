import { PropsWithChildren } from 'react'
import { navBaseStyles } from './Nav.Styles'

export const NavSecondary = ({ children }: PropsWithChildren) => {
  return (
    <div className={navBaseStyles.secondaryWrapper + ` ` + navBaseStyles.wrapper}>
      <div className={navBaseStyles.secondaryInnerWrapper}>{children}</div>
    </div>
  )
}

NavSecondary.displayName = 'Nav.Secondary'