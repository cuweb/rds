import { DropDownItemProps } from '../_deprecated/DropDown/DropDown'

export const DropDownItemData: DropDownItemProps[] = [
  {
    href: '/profile',
    title: 'Profile',
    // icon: 'ArrowDownIcon',
  },
  {
    title: 'Settings',
    onClick: () => alert('Dropdown for settings has been clicked '),
    // icon: 'ShareIcon',
  },
  {
    href: '/signout',
    title: 'Sign out ',
    // icon: 'ArrowDownIcon',
  },
]
