export const navStyles = {
  header: `cu-header border-t-2 border-t-cu-red px-5 sm:px-8 sticky top-0 z-50 duration-300 ease-in-out bg-white transition-top`,
  headerPrimary: `border-b border-b-cu-black-100`,
  nav: `cu-nav flex flex-wrap items-center gap-x-8`,
  navPrimary: `sm:flex-nowrap`,
}

export const navPrimaryStyles = {
  navPrimary: `cu-nav__primary flex items-center justify-center gap-4 lg:gap-8 grow max-sm:py-3.5 max-sm:w-[calc(100%+40px)] max-sm:-mx-[20px] max-sm:px-[20px] max-sm:bg-cu-black-25 max-sm:border-t max-sm:border-t-cu-black-100 sm:border-0`,
}

export const navSecondaryStyles = {
  navSecondary: `cu-nav__secondary bg-cu-black-25 border-t border-t-cu-black-100 border-b border-b-cu-black-100 w-[calc(100%+40px)] md:w-[calc(100%+64px)] -mx-[20px] md:-mx-[32px] px-[20px] md:px-[2rem] py-3.5`,
  inner: `flex gap-6`,
}

export const navLogoStyles = {
  wrapper: `flex items-center py-3.5 gap-3 md:gap-5 shrink-1 md:shrink-0 max-sm:grow`,
  link: `shrink-0`,
  logo: `w-[130px] h-[35px] hidden md:block shrink-0`,
  shield: `w-[28px] h-[35px] block md:hidden shrink-0`,
  siteTitleWrapper: `leading-none max-w-[200px] md:max-w-[220px]`,
  siteTitle: `text-base md:text-lg font-semibold text-cu-black-800 hover:text-cu-red-700 text-ellipsis line-clamp-2 overflow-hidden`,
}

export const navMenuStyles = {
  wrapper: `grow flex items-center`,
  navBar: `cu-nav__menu flex gap-4 items-center`,
}

export const NavMenuItemWrapperStyles = {
  menuWrapper: `relative flex items-center grow-0 min-h-8 pr-3 last:pr-0`,
  subMenuWrapper: `block text-sm font-medium text-cu-black-600 border-b border-b-cu-black-50 last:border-b-0`,
}

export const navMenuItemStyles = {
  navItemWrapper: `flex items-stretch justify-between`,
  navItem: `flex w-auto grow items-center gap-0.5 text-[15px] font-medium text-cu-black-700 hover:text-cu-red-700 transition ease-in`,
  navParentItem: `cu-nav__parent-item items-between after:w-1.5 after:h-1.5`,
  navArrow: `after:content-[''] hover:after:border-current after:ml-2 after:border-t after:border-t-cu-black-700 after:border-l after:border-l-cu-black-700 after:rotate-[135deg] after:transition after:ease-in after:duration-300`,
  navParentArrow: `after:w-1.5 after:h-1.5`,
  subMenuItem: `px-5 py-3.5 hover:bg-cu-black-50/50`,
  innerSubNavToggler: `cu-nav__inner-submenu-toggle flex items-center justify-center !w-[45px] h--[15px] hover:bg-cu-black-50/50 transition ease-in duration-300 border-l border-l-cu-black-50 after:w-2.5 after:h-2.5 after:-left-1.5 after:relative`,
}

export const NavSubMenuStyles = {
  subMenuContainer: `cu-nav__submenu hidden absolute top-[36px] left-0 max-w-xs w-64 overflow-hidden bg-white border rounded shadow-lg border-cu-black-100`,
  innerSubMenuContainer: `cu-nav__inner-submenu hidden w-full overflow-hidden bg-cu-black-50/35`,
}

export const navAsideStyles = {
  asideWrapper: `nav__aside flex items-center gap-4 sm:gap-5 ml-auto`,
  searchIcon: `w-5 h-5 text-cu-black-400`,
  unorderedList: `flex items-center flex gap-4 sm:gap-5 pl-4 sm:pl-5 border-l border-cu-black-100`,
  listHidden: `block`,
  listItemLink: `text-[15px] font-medium text-cu-black-600 hover:text-cu-red`,
  megaMenuButton: `px-3 py-2 text-sm font-medium rounded md:text-[15px] text-cu-black-700 md:px-3.5 md:py-2.5 whitespace-nowrap  hover:text-white focus:outline-none bg-cu-black-50 hover:bg-cu-red`,
}
