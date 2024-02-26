export const NavMenuItemWrapperStyles = {
  menuWrapper: `relative flex items-center grow-0 min-h-8 pr-3 last:pr-0`,
  subMenuWrapper: `block text-sm font-medium text-cu-black-600 border-b border-b-cu-black-50 last:border-b-0`,
}

export const navMenuItemStyles = {
  navItemWrapper: `flex items-stretch justify-between`,
  navItem: `flex w-auto grow items-center gap-0.5 text-[15px] font-medium text-cu-black-700 hover:text-cu-red-700 transition ease-in`,
  navParentItem: `cu-nav__parent-item items-between after:w-1.5 after:h-1.5 after:grow-0 after:shrink-0 after:basis-[6px]`,
  navArrow: `after:content-[''] hover:after:border-current after:ml-1 after:mt-px after:border-t after:border-t-cu-black-700 after:border-l after:border-l-cu-black-700 after:rotate-[135deg] after:transition after:ease-in after:duration-300`,
  navParentArrow: `after:w-1.5 after:h-1.5`,
  subMenuItem: `px-5 py-3.5 hover:bg-cu-black-50/50`,
  innerSubNavToggler: `cu-nav__inner-submenu-toggle flex grow-0 shrink-0 basis-12 items-center justify-center w-12 hover:bg-cu-black-50/50 transition ease-in duration-300 after:w-1.5 after:h-1.5 after:right-1 after:relative`,
}
