import { NavMenuItemWrapper } from './NavMenuItemWrapper'
import ImenuItem from './NavInterface'

export interface menuItemProps {
  submenu: ImenuItem[]
  isSubMenu: boolean
  isInnerSubMenu: boolean
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
      className={
        isInnerSubMenu
          ? 'cu-nav__inner-submenu hidden w-full overflow-hidden bg-cu-black-50/35'
          : 'cu-nav__submenu hidden absolute left-0 max-w-xs w-64 overflow-hidden bg-white border rounded shadow-lg border-cu-black-100'
      }
    >
      {submenu.map((menuItem: ImenuItem, index: number) => (
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
