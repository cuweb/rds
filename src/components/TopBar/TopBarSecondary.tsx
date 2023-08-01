import { PropsWithChildren } from 'react'
import { navBaseStyles } from './TopBar.Styles'

export const TopBarSecondary = ({ children }: PropsWithChildren) => {
  return (
    <nav className={navBaseStyles.secondaryWrapper}>
      <div className={navBaseStyles.navInnerWrapper}>{children}</div>
    </nav>
  )
}

TopBarSecondary.displayName = 'TopBar.Secondary'
