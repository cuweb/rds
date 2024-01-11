import { navSubMenuStyles, navItemStyles } from './Nav.Styles'

export interface menuItem {
  href: string
  title: string
  submenu ?: menuItem[]
}

export interface menuItemProps {
  menuItem: menuItem
  menuLevel?: number
}

const convertToSlug = (text:string) => {
  return text.toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}

export const NavMenuItem = ({ menuItem, menuLevel }: menuItemProps) => {

  return (
    <li className={menuLevel ? navSubMenuStyles.subMenuWrapper : navItemStyles.navItemWrapper}>
      
      <span className='flex items-center justify-between' data-menu-item={convertToSlug(menuItem.title)}>
        <a href={menuItem.href} className={(menuItem.submenu && ! menuLevel ? navItemStyles.navParentItem : '') + ` ` + navItemStyles.navItem + ` ` + (menuLevel ? navSubMenuStyles.subMenuItem : '')}>
          {menuItem.title}
          {menuItem.submenu && !menuLevel ? <span className={navItemStyles.arrow + ' ' + navItemStyles.navArrow}></span> : ''}
        </a>

        { menuItem.submenu && menuLevel ? 
            <button className={menuLevel ? navSubMenuStyles.subNavArrowWrapper : ''} aria-expanded="false">
              <span className={navItemStyles.arrow + ' ' + navSubMenuStyles.subNavArrow}></span>
            </button>
          :
            <></>
        }
      </span>

      {menuItem.submenu ? (
        (() => {
          const menuLevelUp = menuLevel ? menuLevel + 1 : 1;
          return (
            <ul id={convertToSlug(menuItem.title)} className={menuLevel ? navSubMenuStyles.subMenuContainer1 : navSubMenuStyles.subMenuContainer}>
              {menuItem.submenu.map((menuItem: menuItem, index: number) => (
                <NavMenuItem key={index} menuItem={menuItem} menuLevel={menuLevelUp} />
              ))}
            </ul>
          );
        })()
      ) : (
        <></>
      )}
    </li>
  )
}

NavMenuItem.displayName = 'Nav.NavMenuItem'
