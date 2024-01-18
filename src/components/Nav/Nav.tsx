import { useEffect, ReactNode } from 'react'
import { NavLogo } from './NavLogo'
import { NavAside } from './NavAside'
import { NavPrimary } from './NavPrimary'
import { NavSecondary } from './NavSecondary'
import { NavMenu } from './NavMenu'
import { navStyles } from './Nav.Styles'
import menuPriority from './priorityPlus'
import setupMenuToggle from './navToggles'
export interface NavWrapperProps {
  navType?: 'primary' | 'secondary'
  children: ReactNode
}

export const NavWrapper = ({ navType, children }: NavWrapperProps) => {
  useEffect(() => {
    menuPriority()
    setupMenuToggle()
  }, [])

  return (
    <header className={`${navStyles.header} ${navType != 'secondary' ? navStyles.headerPrimary : ''}`}>
      <nav className={`cu-nav--${navType} ${navStyles.nav} ${navType != 'secondary' ? navStyles.navPrimary : ''}`}>
        {children}
      </nav>
    </header>
  )
}

export const Nav = Object.assign(NavWrapper, {
  Logo: NavLogo,
  Aside: NavAside,
  Primary: NavPrimary,
  Secondary: NavSecondary,
  Menu: NavMenu,
})
