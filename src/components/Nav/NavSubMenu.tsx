import { navSubMenuItemStyles } from './Nav.Styles'
import { NavMenuItemWrapper } from './NavMenuItemWrapper'

export interface menuItem {
  href: string
  title: string
  submenu?: menuItem[]
}

export interface menuItemProps {
  submenu: menuItem[]
  isSubMenu?: boolean
  isInnerSubMenu?: boolean
  id: string
}

const convertToSlug = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

export const NavSubMenu = ({ submenu, isSubMenu, isInnerSubMenu, id }: menuItemProps) => {
  return (
    <ul
      id={convertToSlug(id)}
      className={isInnerSubMenu ? navSubMenuItemStyles.innerSubMenuContainer : navSubMenuItemStyles.subMenuContainer}
    >
      {submenu.map((menuItem: menuItem, index: number) => (
        <NavMenuItemWrapper
          key={index}
          menuItem={menuItem}
          isSubMenu={isSubMenu}
          isInnerSubMenu={menuItem.submenu ? true : false}
        />
      ))}
    </ul>
  )
}

NavSubMenu.displayName = 'Nav.NavSubMenu'
