export const navBaseStyles = {
  header: `cu-nav px-5 sm:px-8 sticky top-0 z-50 duration-300 ease-in-out bg-white border-t-2 border-t-cu-red border-b border-b-cu-black-100 transition-top overflow`,
  wrapper: `py-3.5`,
  primaryWrapper: `cu-nav__primary w-full flex items-center gap-4 md:gap-8 mx-auto max-w-screen-2xl `,
  secondaryWrapper: `cu-nav__secondary  px-5 sm:px-8 border-b border-b-cu-black-100 sticky top-0 z-30 bg-cu-black-25`,
  secondaryInnerWrapper: `flex gap-6 mx-auto max-w-screen-2xl`,
}

export const navLogo = {
  logoWrapper: `flex items-center gap-3 md:gap-5 shrink-1 md:shrink-0`,
  cuLogoLink: `shrink-0`,
  cuLogo: `w-[130px] h-[35px] hidden md:block shrink-0`,
  cuShield: `w-[28px] h-[35px] block md:hidden shrink-0`,
  siteTitleWrapper: `leading-none max-w-[200px] md:max-w-[220px]`,
  siteTitle: `text-base md:text-lg font-semibold text-cu-black-800 hover:text-cu-red-700 text-ellipsis line-clamp-2 overflow-hidden`,
}

export const navMenuItemStyles = {
  navBarWrapper: `grow`,
  navBar: `cu-nav__menu flex gap-4 items-center`,
  menuWrapper: `relative flex items-center grow-0 min-h-8 pr-3 last:pr-0`,
  navItemWrapper: `flex items-stretch justify-between`,
  navItem: `flex w-auto grow items-center gap-0.5 text-[15px] font-medium text-cu-black-700 hover:text-cu-red-700 transition ease-in`,
  navParentItem: `cu-nav__parent-item items-between after:w-1.5 after:h-1.5`,
  navArrow: `after:content-[''] hover:after:border-current after:ml-2 after:border-t after:border-t-cu-black-700 after:border-l after:border-l-cu-black-700 after:rotate-[135deg] after:transition after:ease-in after:duration-300`,
  navParentArrow: `after:w-1.5 after:h-1.5`,
}

export const navSubMenuItemStyles = {
  subMenuContainer: `cu-nav__submenu hidden absolute top-[36px] left-0 max-w-xs w-64 overflow-hidden bg-white border rounded shadow-lg border-cu-black-100`,
  subMenuWrapper: `block text-sm font-medium text-cu-black-600 border-b border-b-cu-black-50 last:border-b-0`,
  subMenuItem: `px-5 py-3.5 hover:bg-cu-black-50/50`,
  innerSubMenuContainer: `cu-nav__inner-submenu hidden w-full overflow-hidden bg-cu-black-50/35`,
  innerSubNavToggler: `cu-nav__inner-submenu-toggle flex items-center justify-center !w-[45px] h--[15px] hover:bg-cu-black-50/50 transition ease-in duration-300 border-l border-l-cu-black-50 after:w-2.5 after:h-2.5 after:-left-1.5 after:relative`,
}

export const navAsideStyles = {
  asideWrapper: `flex items-center gap-5 ml-auto`,
  searchIcon: `w-5 h-5 text-cu-black-400`,
  unorderedList: `items-center hidden gap-5 pl-5 border-l md:flex border-cu-black-100`,
  listHidden: `hidden md:block`,
  listItemLink: `text-[15px] font-medium text-cu-black-600 hover:text-cu-red`,
  megaMenuButton: `px-3 py-2 text-sm font-medium rounded md:text-[15px] text-cu-black-700 md:px-3.5 md:py-2.5 whitespace-nowrap cu-topnav--mega hover:text-white focus:outline-none bg-cu-black-50 hover:bg-cu-red`,
}
