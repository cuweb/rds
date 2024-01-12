import { navMenuItemStyles, navSubMenuItemStyles } from './Nav.Styles'
import { NavMenuItem, ImenuItem } from './NavMenuItem'
import { NavSubMenu } from './NavSubMenu'

export interface NavMenuItemWrapperProps {
  menuItem: ImenuItem
  isSubMenu?: boolean
  isInnerSubMenu?: boolean
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
