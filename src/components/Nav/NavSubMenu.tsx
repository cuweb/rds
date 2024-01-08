import { navDropDownStyles } from './Nav.Styles'

export interface submenu {
  href: string
  title: string
}

export interface submenuProps {
  submenu: submenu[]
}

export const NavSubMenu = ({ submenu }: submenuProps) => {
  return (
    <ul className={navDropDownStyles.dropDownContainer}>
      {submenu.map((topBarSubLink: submenu, index: number) => (
        <li key={index} className={navDropDownStyles.dropDownItems}>
          <a href={topBarSubLink.href} className={`cu-topbar--more-nav`}>
            {topBarSubLink.title}
          </a>
        </li>
      ))}
    </ul>
  )
}

NavSubMenu.displayName = 'Nav.SubMenu'
