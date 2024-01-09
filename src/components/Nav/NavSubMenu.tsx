import { navSubMenuStyles, navItemStyles } from './Nav.Styles'

export interface submenu {
  href: string
  title: string
}

export interface submenuProps {
  submenu: submenu[]
}

export const NavSubMenu = ({ submenu }: submenuProps) => {
  return (
    <ul className={navSubMenuStyles.subMenuContainer}>
      {submenu.map((topBarSubLink: submenu, index: number) => (
        <li key={index} className={navSubMenuStyles.subMenuWrapper}>
          <a href={topBarSubLink.href} className={navItemStyles.navItem + ` ` + navSubMenuStyles.subMenuItem}>
            {topBarSubLink.title}
          </a>
        </li>
      ))}
    </ul>
  )
}

NavSubMenu.displayName = 'Nav.SubMenu'
