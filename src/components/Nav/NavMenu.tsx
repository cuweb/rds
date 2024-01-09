import { PropsWithChildren, Children, useEffect } from 'react'
import { navItemStyles } from './Nav.Styles'
import menuPriority from './priorityPlus'
import setupMenuToggle from './navToggles'

export const NavMenu = ({ children }: PropsWithChildren) => {
  useEffect(() => {

    menuPriority('.cu-nav')
    setupMenuToggle('.cu-nav-parent-item')
  })

  return (
    <>
      {children && (
        <ul className={navItemStyles.navWrapper}>
          {Children.map(children, (child, i) => (
            <li key={i} className={navItemStyles.navItemWrapper}>
              {child}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

NavMenu.displayName = 'Nav.Menu'
