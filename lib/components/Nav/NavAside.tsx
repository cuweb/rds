import { ReactNode } from 'react'
import { NavMenuItemWrapperStyles, navMenuItemStyles } from './Nav.Styles'
import { Avatar, UserInfoType } from './../Avatar/Avatar'
import { NavSubMenu } from './NavSubMenu'
import ImenuItem from './NavInterface'
import { useLinkContext } from '../LinkProvider/useLinkContext'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'

export const styles = {
  listItemLink: `text-[15px] md:text-base font-medium text-cu-black-600 hover:text-cu-red-700 cursor-pointer`,
}

export interface NavAsideProps {
  menu?: ImenuItem[]
  LoggedInUser?: false
  LoggedOutUser?: false
  LoggedMenu?: null
  userNoImage?: null
  children?: ReactNode
  LoggedInLink?: string
  onClickHandler?: React.MouseEventHandler<HTMLAnchorElement>
}

export interface NavAsideLoggedInProps {
  menu?: ImenuItem[]
  LoggedInUser?: false
  LoggedOutUser: true
  LoggedMenu?: null
  userNoImage?: null
  children?: ReactNode
  LoggedInLink?: string
  onClickHandler?: React.MouseEventHandler<HTMLAnchorElement>
}

export interface NavAsideLoggedOutProps {
  menu?: ImenuItem[]
  LoggedInUser: true
  LoggedOutUser?: false
  LoggedMenu: ImenuItem[]
  userNoImage: UserInfoType
  children?: ReactNode
  LoggedInLink?: string
  onClickHandler?: React.MouseEventHandler<HTMLAnchorElement>
}

export const NavAside = ({
  menu,
  LoggedInUser,
  LoggedOutUser,
  LoggedMenu,
  userNoImage,
  children,
  LoggedInLink,
  onClickHandler,
}: NavAsideProps | NavAsideLoggedInProps | NavAsideLoggedOutProps) => {
  const LinkComponent = useLinkContext()

  return (
    <div className="flex items-center gap-5 ml-auto cu-nav__aside sm:gap-6">
      {children}
      {menu && (
        <ButtonGroup>
          {menu.map((menuItem: ImenuItem, index: number) => (
            <LinkComponent
              key={index}
              href={menuItem.href}
              className={`cu-button cu-button--${menuItem.buttonColor} cu-button--small`}
            >
              {menuItem.title}
            </LinkComponent>
          ))}
        </ButtonGroup>
      )}

      {LoggedOutUser && (
        <ul
          className={
            `flex items-center gap-5 py-1 pl-5 sm:gap-6 sm:pl-6` +
            ' ' +
            (children ? `border-l border-solid border-cu-black-100` : ``)
          }
        >
          <li>
            {onClickHandler ? (
              <a onClick={onClickHandler} className={styles.listItemLink}>
                Login
              </a>
            ) : (
              <LinkComponent href={LoggedInLink ? LoggedInLink : '/'} className={styles.listItemLink}>
                Login
              </LinkComponent>
            )}
          </li>
        </ul>
      )}
      {LoggedInUser ? (
        LoggedMenu ? (
          <ul
            className={
              `flex items-center gap-5 py-1 pl-5 sm:gap-6 sm:pl-6` +
              ' ' +
              (children ? `border-l border-solid border-cu-black-100` : ``)
            }
          >
            <li className={NavMenuItemWrapperStyles.menuWrapper}>
              <div className={navMenuItemStyles.navItemWrapper} role="navigation" data-menu-item="profile">
                {onClickHandler ? (
                  <a onClick={onClickHandler} className={navMenuItemStyles.navParentItem}>
                    <Avatar user={userNoImage} size="xs" isCircle />
                  </a>
                ) : (
                  <div className={navMenuItemStyles.navParentItem}>
                    <Avatar user={userNoImage} size="xs" isCircle />
                  </div>
                )}
              </div>
              <NavSubMenu submenu={LoggedMenu} isSubMenu={true} isInnerSubMenu={false} id="profile" />
            </li>
          </ul>
        ) : (
          <ul
            className={
              `flex items-center gap-5 py-1 pl-5 sm:gap-6 sm:pl-6` +
              ' ' +
              (children ? `border-l border-solid border-cu-black-100` : ``)
            }
          >
            <li>
              {onClickHandler ? (
                <a onClick={onClickHandler} className={styles.listItemLink}>
                  Logout
                </a>
              ) : (
                <LinkComponent href="/" className={styles.listItemLink}>
                  Logout
                </LinkComponent>
              )}
            </li>
          </ul>
        )
      ) : (
        <></>
      )}
    </div>
  )
}

NavAside.displayName = 'Nav.Aside'
