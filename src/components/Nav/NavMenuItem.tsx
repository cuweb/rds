import { navMenuItemStyles, navSubMenuItemStyles } from './Nav.Styles'

export interface menuItem {
  href: string
  title: string
  submenu?: menuItem[]
}

export interface menuItemProps {
  menuItem: menuItem
  isInnerSubMenu?: boolean
}

const convertToSlug = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

export const NavMenuItem = ({ menuItem, isInnerSubMenu }: menuItemProps) => {
  return (
    <li className={isInnerSubMenu ? navSubMenuItemStyles.subMenuWrapper : navMenuItemStyles.navItemWrapper}>
      <span className="flex items-stretch justify-between" data-menu-item={convertToSlug(menuItem.title)}>
        <a
          href={menuItem.href}
          className={
            (menuItem.submenu && !isInnerSubMenu
              ? navMenuItemStyles.navParentItem + ' ' + navMenuItemStyles.navArrow
              : '') +
            ` ` +
            navMenuItemStyles.navItem +
            ` ` +
            (isInnerSubMenu ? navSubMenuItemStyles.subMenuItem : '')
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

      {menuItem.submenu ? (
        (() => {
          return (
            <ul
              id={convertToSlug(menuItem.title)}
              className={
                isInnerSubMenu ? navSubMenuItemStyles.innerSubMenuContainer : navSubMenuItemStyles.subMenuContainer
              }
            >
              {menuItem.submenu.map((menuItem: menuItem, index: number) => (
                <NavMenuItem key={index} menuItem={menuItem} isInnerSubMenu={true} />
              ))}
            </ul>
          )
        })()
      ) : (
        <></>
      )}
    </li>
  )
}

NavMenuItem.displayName = 'Nav.NavMenuItem'
