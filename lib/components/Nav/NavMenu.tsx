import { NavMenuItemWrapper } from './NavMenuItemWrapper'
import ImenuItem from './NavInterface'

export interface navMenuProps {
  menu: ImenuItem[]
}

export const NavMenu = ({ menu }: navMenuProps) => {
  return (
    <div className="flex items-center grow static sm:relative cu-nav__menu">
      <div className="p-plus-container static md:relative w-full" data-container="true">
        <div className="p-plus" data-main="">
          <div className="p-plus__primary-wrapper flex grow" data-primary-nav-wrapper="">
            <ul className="p-plus__primary flex items-center gap-4 flex-1 list-none p-0 m-0 " data-primary-nav="">
              {menu.map((menuItem: ImenuItem, index: number) => (
                <NavMenuItemWrapper key={index} menuItem={menuItem} isSubMenu={false} isInnerSubMenu={false} />
              ))}
            </ul>
          </div>
          <button
            className="p-plus__toggle-btn mb-0 flex-shrink-0 flex gap-0.5 items-center text-[15px] font-medium text-cu-black-700 hover:text-cu-red-700 transition ease-in after:content-[''] hover:after:border-current after:w-1.5 after:h-1.5 after:ml-1 after:mt-px after:border-t after:border-t-cu-black-700 after:border-l after:border-l-cu-black-700 after:rotate-[135deg] after:transition after:ease-in after:duration-300"
            data-toggle-btn=""
            aria-expanded="false"
          >
            Browse
          </button>
        </div>
        <ul
          className="p-plus__overflow absolute left-0 sm:left-auto top-full sm:top-[36px] w-full sm:w-64 max-w-full sm:max-w-xs h-[calc(100vh-62px)] sm:h-auto pb-[2rem] sm:pb-0 rounded-none sm:rounded overflow-y-auto overflow-scroll sm:overflow-hidden hidden flex-col z-40 right-0 bg-white border border-cu-black-100 shadow-lg"
          data-overflow-nav=""
          aria-hidden="true"
        >
          {menu.map((menuItem: ImenuItem, index: number) => (
            <NavMenuItemWrapper key={index} menuItem={menuItem} isSubMenu={false} isInnerSubMenu={false} />
          ))}
        </ul>
      </div>
    </div>
  )
}

NavMenu.displayName = 'Nav.Menu'
