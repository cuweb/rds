import { useEffect, PropsWithChildren } from 'react'
import { NavLogo } from './NavLogo'
import { NavAside } from './NavAside'
import { NavPrimary } from './NavPrimary'
import { NavSecondary } from './NavSecondary'
import { NavMenu } from './NavMenu'
import { navBaseStyles } from './Nav.Styles'
import menuPriority from './priorityPlus'
import setupMenuToggle, { setupArrowToggle } from './navToggles'

export const NavWrapper = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    menuPriority('.cu-nav__menu')
    setupMenuToggle('.cu-nav__parent-item')
    setupArrowToggle('.cu-nav__subarrow')
  })

  return <header className={navBaseStyles.header}>{children}</header>
}

export const Nav = Object.assign(NavWrapper, {
  Logo: NavLogo,
  Aside: NavAside,
  Primary: NavPrimary,
  Secondary: NavSecondary,
  Menu: NavMenu,
})
