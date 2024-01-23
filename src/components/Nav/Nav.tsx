import { useEffect, ReactNode } from 'react'
import { NavLogo } from './NavLogo'
import { NavAside } from './NavAside'
import { NavPrimary } from './NavPrimary'
import { NavSecondary } from './NavSecondary'
import { NavMenu } from './NavMenu'
import menuPriority from './priorityPlus'
import setupMenuToggle from './navToggles'
import scrollingNav from './scrollingNav'

export interface NavWrapperProps {
  navType?: 'primary' | 'secondary'
  children: ReactNode
}

export const NavWrapper = ({ navType, children }: NavWrapperProps) => {
  useEffect(() => {
    menuPriority()
    setupMenuToggle()
    scrollingNav()
  }, [])

  return (
    <header
      className={`cu-header border-t-2 border-t-cu-red px-5 sm:px-8 sticky top-0 z-50 duration-300 ease-in-out bg-white transition-top ${
        navType != 'secondary' ? 'border-b border-b-cu-black-100' : ''
      }`}
    >
      <nav
        className={`cu-nav--${navType} cu-nav flex flex-wrap items-center gap-x-8 ${
          navType != 'secondary' ? 'sm:flex-nowrap' : ''
        }`}
      >
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
