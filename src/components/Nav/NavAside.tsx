import { ReactNode } from 'react'
import { NavMenuItemWrapperStyles, navMenuItemStyles } from './Nav.Styles'
import { Avatar, UserInfoType } from './../Avatar/Avatar'
import { NavSubMenu } from './NavSubMenu'
import ImenuItem from './NavInterface'
import { useLinkContext } from '../LinkProvider'

export const styles = {
  listItemLink: `text-[15px] md:text-base font-medium text-cu-black-600 hover:text-cu-red`,
}

export interface NavAsideProps {
  menu?: ImenuItem[]
  LoggedInUser?: false
  LoggedOutUser?: false
  LoggedMenu?: null
  userNoImage?: null
  children?: ReactNode
}

export interface NavAsideLoggedInProps {
  menu?: ImenuItem[]
  LoggedInUser?: false
  LoggedOutUser: true
  LoggedMenu?: null
  userNoImage?: null
  children?: ReactNode
}

export interface NavAsideLoggedOutProps {
  menu?: ImenuItem[]
  LoggedInUser: true
  LoggedOutUser?: false
  LoggedMenu: ImenuItem[]
  userNoImage: UserInfoType
  children?: ReactNode
}

export const NavAside = ({
  menu,
  LoggedInUser,
  LoggedOutUser,
  LoggedMenu,
  userNoImage,
  children,
}: NavAsideProps | NavAsideLoggedInProps | NavAsideLoggedOutProps) => {
  const LinkComponent = useLinkContext()

  return (
    <div className="cu-nav__aside flex items-center gap-5 ml-auto sm:gap-6">
      {children}
      <ul
        className={
          `flex items-center gap-5 py-1 pl-5 sm:gap-6 sm:pl-6` +
          ' ' +
          (children ? `border-l border-solid border-cu-black-100` : ``)
        }
      >
        {menu &&
          menu.map((menuItem: ImenuItem, index: number) => (
            <li key={index} className="block">
              <LinkComponent href={menuItem.href} className={styles.listItemLink}>
                {menuItem.title}
              </LinkComponent>
            </li>
          ))}
        {LoggedOutUser && (
          <li>
            <LinkComponent href="/" className={styles.listItemLink}>
              Login
            </LinkComponent>
          </li>
        )}
        {LoggedInUser ? (
          LoggedMenu ? (
            <li className={NavMenuItemWrapperStyles.menuWrapper}>
              <span className={navMenuItemStyles.navItemWrapper} data-menu-item="profile">
                <LinkComponent href="/" className={navMenuItemStyles.navParentItem}>
                  <Avatar user={userNoImage} size="xs" rounded="full" />
                </LinkComponent>
              </span>
              <NavSubMenu submenu={LoggedMenu} isSubMenu={true} isInnerSubMenu={false} id="profile" />
            </li>
          ) : (
            <li>
              <LinkComponent href="/" className={styles.listItemLink}>
                Logout
              </LinkComponent>
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
