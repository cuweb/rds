import { navMenuItemStyles, navSubMenuItemStyles } from './Nav.Styles'
import { NavMenuItem } from './NavMenuItem'
import { NavSubMenu } from './NavSubMenu'
import ImenuItem from './NavInterface'
export interface NavMenuItemWrapperProps {
  menuItem: ImenuItem
  isSubMenu: boolean
  isInnerSubMenu: boolean
}

export const NavMenuItemWrapper = ({ menuItem, isSubMenu, isInnerSubMenu }: NavMenuItemWrapperProps) => {
  return (
    <li className={isSubMenu ? navSubMenuItemStyles.subMenuWrapper : navMenuItemStyles.menuWrapper}>
      <NavMenuItem menuItem={menuItem} isSubMenu={isSubMenu} isInnerSubMenu={isInnerSubMenu} id={menuItem.title} />
      {menuItem.submenu ? (
        <NavSubMenu submenu={menuItem.submenu} isSubMenu={true} isInnerSubMenu={isInnerSubMenu} id={menuItem.title} />
      ) : (
        <></>
      )}
    </li>
  )
}

NavMenuItemWrapper.displayName = 'Nav.NavMenuItemWrapper'
