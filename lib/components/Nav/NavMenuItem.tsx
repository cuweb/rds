import { navMenuItemStyles } from './Nav.Styles'
import ImenuItem from './NavInterface'
import { useLinkContext } from '../LinkProvider/useLinkContext'
import convertToSlug from './convertToSlug'

export interface menuItemProps {
  menuItem: ImenuItem
  isSubMenu: boolean
  isInnerSubMenu: boolean
  id: string
}

export const NavMenuItem = ({ menuItem, isSubMenu, isInnerSubMenu, id }: menuItemProps) => {
  const LinkComponent = useLinkContext()

  return (
    <span
      className={navMenuItemStyles.navItemWrapper}
      role="navigation"
      data-menu-item={convertToSlug(id)}
      aria-expanded="false"
    >
      {menuItem.onClickHandler ? (
        <a
          onClick={menuItem.onClickHandler}
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
          <span className={menuItem.title.length > 25 ? 'cu-nav__parent-inner' : ''}>{menuItem.title}</span>

          {menuItem.submenu && !isInnerSubMenu ? (
            <button className={`hidden ` + navMenuItemStyles.innerSubNavToggler + ' ' + navMenuItemStyles.navArrow}>
              <span className="sr-only">Click to open inner submenu</span>
            </button>
          ) : (
            <></>
          )}
        </a>
      ) : (
        <LinkComponent
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
          <span className={menuItem.title.length > 25 ? 'cu-nav__parent-inner' : ''}>{menuItem.title}</span>

          {menuItem.submenu && !isInnerSubMenu ? (
            <button className={`hidden ` + navMenuItemStyles.innerSubNavToggler + ' ' + navMenuItemStyles.navArrow}>
              <span className="sr-only">Click to open inner submenu</span>
            </button>
          ) : (
            <></>
          )}
        </LinkComponent>
      )}

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
