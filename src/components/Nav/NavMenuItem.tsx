import { navMenuItemStyles } from './Nav.Styles'
import ImenuItem from './NavInterface'
export interface menuItemProps {
  menuItem: ImenuItem
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

export const NavMenuItem = ({ menuItem, isSubMenu, isInnerSubMenu, id }: menuItemProps) => {
  return (
    <span className={navMenuItemStyles.navItemWrapper} data-menu-item={convertToSlug(id)}>
      <a
        href={menuItem.href}
        className={
          (menuItem.submenu && !isInnerSubMenu
            ? navMenuItemStyles.navParentItem +
              ' ' +
              navMenuItemStyles.navArrow +
              ' ' +
              navMenuItemStyles.navParentArrow
            : '') +
          ` ` +
          navMenuItemStyles.navItem +
          ` ` +
          (isSubMenu ? navMenuItemStyles.subMenuItem : '')
        }
      >
        {menuItem.title}

        {menuItem.submenu && !isInnerSubMenu ? (
          <button
            className={`hidden ` + navMenuItemStyles.innerSubNavToggler + ' ' + navMenuItemStyles.navArrow}
            aria-expanded="false"
          >
            <span className="sr-only">Click to open inner submenu</span>
          </button>
        ) : (
          <></>
        )}
      </a>

      {menuItem.submenu && isInnerSubMenu ? (
        <button
          className={isInnerSubMenu ? navMenuItemStyles.innerSubNavToggler + ' ' + navMenuItemStyles.navArrow : ''}
          aria-expanded="false"
        >
          <span className="sr-only">Click to open inner submenu</span>
        </button>
      ) : (
        <></>
      )}
    </span>
  )
}

NavMenuItem.displayName = 'Nav.NavMenuItem'
