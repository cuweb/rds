import { PropsWithChildren, Children, useEffect } from 'react'
import { navItemStyles } from './Nav.Styles'
import menuPriority from './priorityPlus'
import setupMenuToggle from './navToggles'

export const NavMenu = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    menuPriority('.cu-topbar--menu1')

    // Setup submenu toggle
    setupMenuToggle('.cu-topbar--parent-link')

    // Setup sub-submenu toggle
    setupMenuToggle('.nav-grandchild-menu-toggle')
  })

  return (
    <>
      {children && (
        <ul className={navItemStyles.navWrapper}>
          {Children.map(children, (child, i) => (
            <li key={i} className="11">
              {child}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

NavMenu.displayName = 'Nav.Menu'
