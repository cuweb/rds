import React, { PropsWithChildren, useState } from 'react'
import { InView } from 'react-intersection-observer'
import { TopBarMoreNav } from './TopBarMoreNav'
import { navItemStyles } from './TopBar.Styles'

export const TopBarMenu = (props: PropsWithChildren) => {
  // create sub menu for invisible items
  const [sideMenu, setSideMenu] = useState<React.ReactNode[]>([])
  const navLinks = React.Children.toArray(props.children)

  // add or remove menu item to sub menu based on visisbility
  const updateMenu = (inView: boolean, entry: any, menuItem: React.ReactNode) => {
    entry.target.classList.toggle('invisible', !inView)
    if (inView) {
      sideMenu.shift()
      setSideMenu((sideMenu) => [...sideMenu])
    } else {
      setSideMenu((sideMenu) => [menuItem, ...sideMenu])
    }
  }

  return (
    <>
      {navLinks && (
        <>
          <ul className={`${navItemStyles.navWrapper}`}>
            {navLinks.map((navMenuItem, index: number) => (
              <InView
                key={'nav-' + index}
                threshold={0.99}
                onChange={(inView, entry) => updateMenu(inView, entry, navMenuItem)}
              >
                {({ ref }) => (
                  <li ref={ref} className="cu-topbar--parent-link invisible">
                    {navMenuItem}
                  </li>
                )}
              </InView>
            ))}
          </ul>

          {sideMenu.length > 0 && <TopBarMoreNav sideMenu={sideMenu} />}
        </>
      )}
    </>
  )
}

TopBarMenu.displayName = 'TopBar.Menu'
