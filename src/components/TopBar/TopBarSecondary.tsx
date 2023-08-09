import { PropsWithChildren } from 'react'
import { navBaseStyles } from './TopBar.Styles'

export const TopBarSecondary = ({ children }: PropsWithChildren) => {
  return (
    <nav className="cu-topbar--secondary border-t border-t-cu-black-100 bg-cu-black-25">
      <div className={navBaseStyles.navInnerWrapper}>{children}</div>
    </nav>
  )
}

TopBarSecondary.displayName = 'TopBar.Secondary'
