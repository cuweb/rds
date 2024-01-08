import { useState, useEffect, PropsWithChildren } from 'react'
import { NavLogo } from './NavLogo'
import { NavAside } from './NavAside'
import { NavPrimary } from './NavPrimary'
import { NavMenu } from './NavMenu'
import { NavSubMenu } from './NavSubMenu'
import { navBaseStyles } from './Nav.Styles'

export const NavWrapper = ({ children }: PropsWithChildren) => {
  const [navPosition, setNavPosition] = useState('top-0')
  const [navScroll, setNavScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const isScrollingUp = window.scrollY < navScroll

      // If use is scrolling up set the position to top-0
      setNavPosition(isScrollingUp ? 'top-0' : '-top-[66px]')
      setNavScroll(window.scrollY)
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [navScroll])

  return <header className={`${navPosition} ${navBaseStyles.header}`}>{children}</header>
}

export const Nav = Object.assign(NavWrapper, {
  Logo: NavLogo,
  Aside: NavAside,
  Primary: NavPrimary,
  Menu: NavMenu,
  SubMenu: NavSubMenu,
})
