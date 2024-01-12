import { navMenuItemStyles, navSubMenuItemStyles } from './Nav.Styles'

export interface ImenuItem {
  href: string
  title: string
  submenu?: ImenuItem[]
}
export interface menuItemProps {
  menuItem: ImenuItem
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
          (isSubMenu ? navSubMenuItemStyles.subMenuItem : '')
        }
      >
        {menuItem.title}
      </a>

      {menuItem.submenu && isInnerSubMenu ? (
        <button
          className={isInnerSubMenu ? navSubMenuItemStyles.innerSubNavToggler + ' ' + navMenuItemStyles.navArrow : ''}
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
