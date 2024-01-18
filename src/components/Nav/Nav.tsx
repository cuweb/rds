import { useEffect, ReactNode } from 'react'
import { NavLogo } from './NavLogo'
import { NavAside } from './NavAside'
import { NavPrimary } from './NavPrimary'
import { NavSecondary } from './NavSecondary'
import { NavMenu } from './NavMenu'
import menuPriority from './priorityPlus'
import setupMenuToggle from './navToggles'

interface NavWrapperProps {
  navType?: 'primary' | 'secondary'
  children: ReactNode
}

export const NavWrapper = ({ navType, children }: NavWrapperProps) => {
  useEffect(() => {
    menuPriority()
    setupMenuToggle()
  }, [])

  const classes = navType != 'primary' ? 'border-b border-b-cu-black-100' : ''

  return (
    <header
      className={
        'cu-nav border-t-2 border-t-cu-red px-5 sm:px-8 sticky top-0 z-50 duration-300 ease-in-out bg-white transition-top' +
        ' ' +
        classes
      }
    >
      <nav className="flex flex-wrap sm:flex-nowrap items-center gap-x-8">{children}</nav>
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
