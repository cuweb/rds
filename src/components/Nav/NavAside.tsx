import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { navMenuItemStyles, navAsideStyles } from './Nav.Styles'
import { Avatar, UserInfoType } from './../Avatar/Avatar'
import { NavSubMenu } from './NavSubMenu'
import ImenuItem from './NavInterface'

export interface NavAsideProps {
  menu?: ImenuItem[]
  LoggedInUser?: false
  LoggedOutUser?: false
  LoggedMenu?: null
  userNoImage?: null
}

export interface NavAsideLoggedInProps {
  menu?: ImenuItem[]
  LoggedInUser?: false
  LoggedOutUser?: true
  LoggedMenu?: null
  userNoImage?: null
}
export interface NavAsideLoggedOutProps {
  menu?: ImenuItem[]
  LoggedInUser?: true
  LoggedOutUser?: false
  LoggedMenu: ImenuItem[]
  userNoImage: UserInfoType
}

export const NavAside = ({
  menu,
  LoggedInUser,
  LoggedOutUser,
  LoggedMenu,
  userNoImage,
}: NavAsideProps | NavAsideLoggedInProps | NavAsideLoggedOutProps) => {
  return (
    <div className={navAsideStyles.asideWrapper}>
      <MagnifyingGlassIcon className={navAsideStyles.searchIcon} />
      <ul className={navAsideStyles.unorderedList}>
        {menu &&
          menu.map((menuItem: ImenuItem, index: number) => (
            <li key={index} className={navAsideStyles.listHidden}>
              <a href={menuItem.href} className={navAsideStyles.listItemLink}>
                {menuItem.title}
              </a>
            </li>
          ))}
        {LoggedOutUser && (
          <li>
            <a href="/" className={navAsideStyles.listItemLink}>
              Login
            </a>
          </li>
        )}
        {LoggedInUser ? (
          LoggedMenu ? (
            <li className={navMenuItemStyles.menuWrapper}>
              <span className={navMenuItemStyles.navItemWrapper} data-menu-item="profile">
                <a href="/" className={navMenuItemStyles.navParentItem}>
                  <Avatar user={userNoImage} size="xs" rounded="full" />
                </a>
              </span>
              <NavSubMenu submenu={LoggedMenu} isSubMenu={true} isInnerSubMenu={false} id="profile" />
            </li>
          ) : (
            <li>
              <a href="/" className={navAsideStyles.listItemLink}>
                Logout
              </a>
            </li>
          )
        ) : (
          <></>
        )}
      </ul>
    </div>
  )
}

NavAside.displayName = 'Nav.Aside'
