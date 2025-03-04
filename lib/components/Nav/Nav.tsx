import { useEffect, ReactNode, Children, isValidElement } from 'react'
import { NavTop } from './NavTop'
import { NavLogo } from './NavLogo'
import { NavButtons } from './NavButtons'
import { NavAside } from './NavAside'
import { NavBottom } from './NavBottom'
import { NavMenu } from './NavMenu'
import setupMenuToggle from './navToggles'
import scrollingNav from './scrollingNav'
import menuPriority from './priorityPlus'

export interface NavWrapperProps {
  children: ReactNode
}

export const NavWrapper = ({ children }: NavWrapperProps) => {
  useEffect(() => {
    menuPriority()
    setupMenuToggle()
    scrollingNav()
  }, [])

  const navType = Children.toArray(children).some((child) => isValidElement(child) && child.type === NavBottom)
    ? 'bottom'
    : 'top'
  return (
    <header
      className={`cu-header border-t-2 border-t-cu-red px-5 sm:px-8 sticky top-0 z-40 duration-300 ease-in-out bg-white transition-top  border-b border-b-cu-black-100`}
    >
      <nav
        className={`cu-nav cu-nav--${navType} flex flex-wrap items-center gap-x-8 ${
          navType !== 'bottom' ? 'sm:flex-nowrap' : ''
        }`}
      >
        {children}
      </nav>
    </header>
  )
}

export const Nav = Object.assign(NavWrapper, {
  Top: NavTop,
  Logo: NavLogo,
  Buttons: NavButtons,
  Aside: NavAside,
  Bottom: NavBottom,
  Menu: NavMenu,
})
