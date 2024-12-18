import { NavMenuItemWrapper } from './NavMenuItemWrapper'
import ImenuItem from './NavInterface'

export interface navMenuProps {
  menu: ImenuItem[]
}

export const NavMenu = ({ menu }: navMenuProps) => {
  return (
    <div className="flex items-center grow relative cu-nav__menu">
      <div className="p-plus-container" data-container="true">
        <div className="p-plus" data-main="">
          <div className="p-plus__primary-wrapper" data-primary-nav-wrapper="">
            <ul className="flex items-center gap-4 p-plus__primary" data-primary-nav="">
              {menu.map((menuItem: ImenuItem, index: number) => (
                <NavMenuItemWrapper key={index} menuItem={menuItem} isSubMenu={false} isInnerSubMenu={false} />
              ))}
            </ul>
          </div>
          <button data-toggle-btn="" className="p-plus__toggle-btn" aria-expanded="false">
            Browse
          </button>
        </div>
        <ul data-overflow-nav="" className="overflow-nav p-plus__overflow" aria-hidden="true">
          {menu.map((menuItem: ImenuItem, index: number) => (
            <NavMenuItemWrapper key={index} menuItem={menuItem} isSubMenu={false} isInnerSubMenu={false} />
          ))}
        </ul>
      </div>
    </div>
  )
}

NavMenu.displayName = 'Nav.Menu'
