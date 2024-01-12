import { navMenuItemStyles } from './Nav.Styles'
import { ImenuItem } from './NavMenuItem'
import { NavMenuItemWrapper } from './NavMenuItemWrapper'

export interface navMenuProps {
  menu: ImenuItem[]
}

export const NavMenu = ({ menu }: navMenuProps) => {
  return (
    <>
      <div className={navMenuItemStyles.navBarWrapper}>
        <ul className={navMenuItemStyles.navBar}>
          {menu.map((menuItem: ImenuItem, index: number) => (
            <NavMenuItemWrapper key={index} menuItem={menuItem} />
          ))}
        </ul>
      </div>
    </>
  )
}

NavMenu.displayName = 'Nav.Menu'
