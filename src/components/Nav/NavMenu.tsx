import { navMenuItemStyles } from './Nav.Styles'
import { NavMenuItemWrapper } from './NavMenuItemWrapper'
import ImenuItem from './NavInterface'
export interface navMenuProps {
  menu: ImenuItem[]
  mobileAsideMenu?: ImenuItem[]
}

export const NavMenu = ({ menu, mobileAsideMenu }: navMenuProps) => {
  let navMenu = menu

  if (mobileAsideMenu) {
    const updatedMobileAsideMenu = mobileAsideMenu.map((menuItem: ImenuItem) => ({ ...menuItem, isMobile: true }))

    navMenu = [...menu, ...updatedMobileAsideMenu]
  }

  return (
    <>
      <div className={navMenuItemStyles.navBarWrapper}>
        <ul className={navMenuItemStyles.navBar}>
          {navMenu.map((menuItem: ImenuItem, index: number) => (
            <NavMenuItemWrapper key={index} menuItem={menuItem} isSubMenu={false} isInnerSubMenu={false} />
          ))}
        </ul>
      </div>
    </>
  )
}

NavMenu.displayName = 'Nav.Menu'
