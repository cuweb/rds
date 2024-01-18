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

  // Children.map(children, (child: ReactNode) => {
    
  //   const item = child as ReactElement<PropsWithChildren<NavAsideLoggedOutProps>>;

  //   if (navType === 'secondary' && item.type === NavAside) {
  //     if (isValidElement(child)) {
  //       console.log(item.props, { ...item.props, hideMobile: true }, 's')
  //       return <NavAside hideMobile={true}/>;
  //     }
  //   }

  //   return child;
  // })

  return (
    <header
      className={`${navStyles.header} ${navType != 'secondary' ? navStyles.headerPrimary : ''}`}
    >
      <nav className={`${navStyles.nav} ${navType != 'secondary' ? navStyles.navPrimary : ''}`}>
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
