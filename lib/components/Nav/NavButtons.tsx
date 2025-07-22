import { NavMenuItemWrapperStyles, navMenuItemStyles } from './Nav.Styles'
import { Avatar, UserInfoType } from '../Avatar/Avatar'
import { NavSubMenu } from './NavSubMenu'
import ImenuItem from './NavInterface'
import { useLinkContext } from '../LinkProvider/useLinkContext'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon'
import convertToSlug from './convertToSlug'

export interface NavButtonsGenericProps {
  menu?: ImenuItem[]
  isSearch?: boolean
  onClickSearch?: React.MouseEventHandler<HTMLButtonElement>
}
export interface NavButtonsProps extends NavButtonsGenericProps {
  LoggedInUser?: false
  LoggedOutUser?: false
  LoggedMenu?: null
  userNoImage?: null
  LoggedInLink?: string
  onClickHandler?: React.MouseEventHandler<HTMLAnchorElement>
}

export interface NavButtonsLoggedInProps extends NavButtonsGenericProps {
  LoggedInUser?: false
  LoggedOutUser: true
  LoggedMenu?: null
  userNoImage?: null
  LoggedInLink?: string
  onClickHandler?: React.MouseEventHandler<HTMLAnchorElement>
}

export interface NavButtonsLoggedOutProps extends NavButtonsGenericProps {
  LoggedInUser: true
  LoggedOutUser?: false
  LoggedMenu: ImenuItem[]
  userNoImage: UserInfoType
  LoggedInLink?: string
  onClickHandler?: React.MouseEventHandler<HTMLAnchorElement>
}

export const NavButtons = ({
  menu,
  isSearch,
  onClickSearch,
  LoggedInUser,
  LoggedOutUser,
  LoggedMenu,
  userNoImage,
  LoggedInLink,
  onClickHandler,
}: NavButtonsProps | NavButtonsLoggedInProps | NavButtonsLoggedOutProps) => {
  const LinkComponent = useLinkContext()

  const styles = {
    listItemLink: `text-[15px] md:text-base font-medium text-cu-black-600 hover:text-cu-red-700 cursor-pointer`,
  }

  return (
    <div className="cu-nav__buttons flex items-center gap-5 ml-auto sm:gap-6">
      <ButtonGroup>
        {isSearch && (
          <button onClick={onClickSearch} aria-label="search" className="not-prose">
            <MagnifyingGlassIcon className="w-5 h-5 cursor-pointer text-cu-black-300 left-4" aria-hidden="true" />
          </button>
        )}
        {menu && (
          <ul className="flex items-center gap-4 flex-1 list-none p-0 m-0">
            {menu.map((menuItem: ImenuItem, index: number) => (
              <li className="relative" key={index}>
                <span
                  className={navMenuItemStyles.navItemWrapper}
                  role="navigation"
                  data-menu-item={convertToSlug(menuItem.title)}
                  aria-expanded="false"
                  key={index}
                >
                  <LinkComponent
                    key={index}
                    href={menuItem.href}
                    className={`cu-button ${menuItem.buttonColor ? `cu-button--${menuItem.buttonColor}` : `cu-button-red`} cu-button--small  
              ${
                menuItem.submenu
                  ? navMenuItemStyles.navParentItem +
                    ' ' +
                    navMenuItemStyles.navArrow +
                    ' ' +
                    navMenuItemStyles.navParentArrow
                  : ''
              }`}
                  >
                    {menuItem.title}

                    {menuItem.submenu ? (
                      <button
                        className={`hidden ` + navMenuItemStyles.innerSubNavToggler + ' ' + navMenuItemStyles.navArrow}
                      >
                        <span className="sr-only">Click to open inner submenu</span>
                      </button>
                    ) : (
                      <></>
                    )}
                  </LinkComponent>
                </span>
                {menuItem.submenu && (
                  <NavSubMenu
                    submenu={menuItem.submenu}
                    isSubMenu={true}
                    isInnerSubMenu={false}
                    id={menuItem.title}
                    key={`submenu` + index}
                  />
                )}
              </li>
            ))}
          </ul>
        )}

        {(LoggedOutUser || LoggedInUser) && (
          <ul
            className={
              `flex items-center gap-5 py-1 pl-5 sm:gap-6 sm:pl-6 mt-0` +
              ' ' +
              (isSearch || menu ? `border-l border-solid border-cu-black-100` : ``)
            }
          >
            {LoggedOutUser && (
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
            )}
            {LoggedInUser &&
              (LoggedMenu ? (
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
              ) : (
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
              ))}
          </ul>
        )}
      </ButtonGroup>
    </div>
  )
}

NavButtons.displayName = 'Nav.Buttons'
