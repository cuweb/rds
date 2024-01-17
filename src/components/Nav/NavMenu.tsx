import { navMenuItemStyles } from './Nav.Styles'
import { NavMenuItemWrapper } from './NavMenuItemWrapper'
import ImenuItem from './NavInterface'
export interface navMenuProps {
  menu: ImenuItem[]
  mobileAsideMenu?: ImenuItem[]
}

export const NavMenu = ({ menu, mobileAsideMenu }: navMenuProps) => {
  return (
    <>
      <div className={navMenuItemStyles.navBarWrapper}>
        <ul className={navMenuItemStyles.navBar}>
          {menu.map((menuItem: ImenuItem, index: number) => (
            <NavMenuItemWrapper key={index} menuItem={menuItem} isSubMenu={false} isInnerSubMenu={false} />
          ))}
        </ul>
        {mobileAsideMenu && (
          <ul className={navMenuItemStyles.navBar}>
            {mobileAsideMenu.map((menuItem: ImenuItem, index: number) => (
              <NavMenuItemWrapper key={index} menuItem={menuItem} isSubMenu={false} isInnerSubMenu={false} />
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

NavMenu.displayName = 'Nav.Menu'
