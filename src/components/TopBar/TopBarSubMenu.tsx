import { Fragment, PropsWithChildren } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { navItemStyles } from './TopBar.Styles'

export interface TopBarSubMenuProps {
  label: string
}

export const TopBarSubMenu = ({ label, children }: PropsWithChildren<TopBarSubMenuProps>) => {
  return (
    <Popover>
      <Popover.Button className={`${navItemStyles.navItem} ${navItemStyles.navItemChildren}`}>
        {label}
        <ChevronDownIcon className={navItemStyles.navArrow} aria-hidden="true" />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="cu-topbar--dropdown">{children}</Popover.Panel>
      </Transition>
    </Popover>
  )
}

TopBarSubMenu.displayName = 'TopBar.SubMenu'
