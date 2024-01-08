export const navBaseStyles = {
  header: `sticky z-50 duration-300 ease-in-out bg-white border-t-2 border-b cu-topbar border-b-cu-black-100 border-t-cu-red transition-top`,
  primaryWrapper: `flex items-center h-[64px] gap-8 px-8 py-3 mx-auto max-w-screen-2xl cu-topbar--primary`,
  secondaryWrapper: `border-t border-t-cu-black-100 bg-cu-black-25 cu-topbar--secondary`,
  navInnerWrapper: `flex gap-6 px-8 py-3.5 mx-auto max-w-screen-2xl`,
}

export const navLogoTitle = {
  logoWrapper: `flex items-center gap-3 md:gap-5 cu-topbar--logo shrink-1 md:shrink-0`,
  cuLogoLink: `shrink-0`, // added to rds/src/styles/topbar.css
  cuLogo: `w-[130px] h-[35px] hidden md:block shrink-0`, // added to rds/src/styles/topbar.css
  cuShield: `w-[28px] h-[35px] block md:hidden shrink-0`, // added to rds/src/styles/topbar.css
  siteTitle: `font-semibold md:text-lg hover:text-cu-red text-cu-black-800`,
  oneLineHeader: `text-base whitespace-nowrap`,
  twoLineHeader: `text-sm ms:text-base line-clamp-2`,
}

export const navItemStyles = {
  navWrapper: `flex gap-6 text-sm md:text-[15px] items-center overflow-hidden cu-topbar--menu`,
  navItem: `text-sm font-medium text-cu-black-600 whitespace-nowrap hover:text-cu-red whitespace-nowrap`, // added to rds/src/styles/topbar.css
  navItemChildren: `flex items-center -mb-px`,
  navItemMoreNav: `text-sm font-medium whitespace-nowrap hover:text-cu-red`,
  navArrow: `flex-none w-5 h-5 pt-1 text-cu-black-400`,
}

export const navDropDownStyles = {
  dropDownContainer: `hidden absolute max-w-xs w-64 mt-2.5 -ml-3 overflow-hidden bg-white border rounded shadow-lg border-cu-black-100`, // added to rds/src/styles/topbar.css
  dropDownItems: `block text-sm font-medium text-cu-black-600 px-5 py-4 border-b hover:text-cu-black-900 hover:bg-cu-black-50/50 border-b-cu-black-50 last:border-b-0`, // added to rds/src/styles/topbar.css
  moreMenuWrapper: `relative inline-block text-left cu-topbar--morenav`,
  moreMenuContainer: `origin-top-right focus:outline-none`,
  moreMenuDropDown: `border-b border-b-cu-black-50 last:border-b-0`,
  moreMenuParentItem: `flex justify-between w-full px-5 py-4 text-sm font-medium text-cu-black-600 hover:text-cu-black-900 hover:bg-cu-black-50/50`,
  moreMenuChildItem: `block px-5 py-3 text-sm font-medium text-cu-black-600 hover:text-cu-black-900 hover:bg-cu-black-50/50`,
  moreMenuParentArrow: `h-5 w-5 text-cu-black-400 transform duration-300 ease-in-out`,
}

export const navAsideStyles = {
  asideWrapper: `flex items-center gap-5 ml-auto`,
  searchIcon: `w-5 h-5 text-cu-black-400`,
  unorderedList: `items-center hidden gap-5 pl-5 border-l md:flex border-cu-black-100`,
  listHidden: `hidden lg:block`,
  listItemLink: `text-[15px] font-medium text-cu-black-600 hover:text-cu-red`,
  megaMenuButton: `px-3 py-2 text-sm font-medium rounded md:text-[15px] text-cu-black-700 md:px-3.5 md:py-2.5 whitespace-nowrap cu-topnav--mega hover:text-white focus:outline-none bg-cu-black-50 hover:bg-cu-red`,
}
