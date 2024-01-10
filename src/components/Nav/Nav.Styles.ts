export const navBaseStyles = {
  header: `cu-nav sticky z-50 duration-300 ease-in-out bg-white border-t-2 border-t-cu-red border-b border-b-cu-black-100 transition-top overflow`,
  wrapper: `py-3.5 px-5 sm:px-8`,
  primaryWrapper: `cu-nav__primary sticky top-0 w-full flex items-center gap-8 mx-auto max-w-screen-2xl `,
  secondaryWrapper: `cu-nav__secondary nav nav--bottom sticky top-0 z-30 bg-cu-black-25`,
  secondaryInnerWrapper: `flex gap-6 mx-auto max-w-screen-2xl`,
}

export const navLogo = {
  logoWrapper: `flex items-center gap-3 md:gap-5 shrink-1 md:shrink-0`,
  cuLogoLink: `shrink-0`,
  cuLogo: `w-[130px] h-[35px] hidden md:block shrink-0`,
  cuShield: `w-[28px] h-[35px] block md:hidden shrink-0`,
  siteTitleWrapper: `leading-none max-w-[200px] md:max-w-[220px]`,
  siteTitle: `text-base md:text-lg font-semibold text-cu-black-800 hover:text-cu-red-700`,
}

export const navItemStyles = {
  navBarWrapper: `grow`,
  navBar: `cu-nav__menu flex gap-4 items-center`,
  navItemWrapper: `relative flex items-center grow-0 pr-3 last:pr-0`,
  navItem: `flex items-center gap-0.5 text-[15px] font-medium text-cu-black-700 hover:text-cu-red-700 transition ease-in`,
  navParentItem: `cu-nav__parent-item`,
  navArrow: `flex-none w-4 h-4 text-cu-black-400 -rotate-90 transition ease-in duration-300`,
}

export const navSubMenuStyles = {
  subMenuContainer: `cu-nav__submenu hidden absolute top-[43px] left-0 max-w-xs w-64 overflow-hidden bg-white border rounded shadow-lg border-cu-black-100`,
  subMenuWrapper: `block text-sm font-medium text-cu-black-600 border-b hover:bg-cu-black-50/50 border-b-cu-black-50 last:border-b-0`,
  subMenuItem: `px-5 py-3.5`,
}

export const navAsideStyles = {
  asideWrapper: `flex items-center gap-5 ml-auto`,
  searchIcon: `w-5 h-5 text-cu-black-400`,
  unorderedList: `items-center hidden gap-5 pl-5 border-l md:flex border-cu-black-100`,
  listHidden: `hidden lg:block`,
  listItemLink: `text-[15px] font-medium text-cu-black-600 hover:text-cu-red`,
  megaMenuButton: `px-3 py-2 text-sm font-medium rounded md:text-[15px] text-cu-black-700 md:px-3.5 md:py-2.5 whitespace-nowrap cu-topnav--mega hover:text-white focus:outline-none bg-cu-black-50 hover:bg-cu-red`,
}
