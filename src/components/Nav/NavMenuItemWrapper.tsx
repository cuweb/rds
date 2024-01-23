import { NavMenuItemWrapperStyles } from './Nav.Styles'
import { NavMenuItem } from './NavMenuItem'
import { NavSubMenu } from './NavSubMenu'
import ImenuItem from './NavInterface'

interface NavMenuItemWrapperProps {
  menuItem: ImenuItem
  isSubMenu: boolean
  isInnerSubMenu: boolean
}

export const NavMenuItemWrapper = ({ menuItem, isSubMenu, isInnerSubMenu }: NavMenuItemWrapperProps) => {
  return (
    <li className={isSubMenu ? NavMenuItemWrapperStyles.subMenuWrapper : NavMenuItemWrapperStyles.menuWrapper}>
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
