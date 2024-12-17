import { NavMenuItemWrapper } from './NavMenuItemWrapper'
import ImenuItem from './NavInterface'

export interface navMenuProps {
  menu: ImenuItem[]
}

export const NavMenu = ({ menu }: navMenuProps) => {
  return (
    <div className="flex items-center grow relative">
      <ul className="flex items-center gap-4 cu-nav__menu">
        {menu.map((menuItem: ImenuItem, index: number) => (
          <NavMenuItemWrapper key={index} menuItem={menuItem} isSubMenu={false} isInnerSubMenu={false} />
        ))}
      </ul>
      <ul data-overflow-nav="" className="p-plus__overflow" aria-hidden="true">
        {menu.map((menuItem: ImenuItem, index: number) => (
          <NavMenuItemWrapper key={index} menuItem={menuItem} isSubMenu={false} isInnerSubMenu={false} />
        ))}
      </ul>
    </div>
  )
}

NavMenu.displayName = 'Nav.Menu'
