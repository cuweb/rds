import { navMenuItemStyles } from './Nav.Styles'
import { NavMenuItem, menuItem } from './NavMenuItem'

export interface navMenuProps {
  menu: menuItem[]
}

export const NavMenu = ({ menu }: navMenuProps) => {
  return (
    <>
      <div className={navMenuItemStyles.navBarWrapper}>
        <ul className={navMenuItemStyles.navBar}>
          {menu.map((menuItem: menuItem, index: number) => (
            <NavMenuItem key={index} menuItem={menuItem} />
          ))}
        </ul>
      </div>
    </>
  )
}

NavMenu.displayName = 'Nav.Menu'
