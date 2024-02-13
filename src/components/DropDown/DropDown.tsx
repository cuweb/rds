import { Popover, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import ChevronDownIcon from '@heroicons/react/20/solid/ChevronDownIcon'
import { Icon } from '../Icon/Icon'
import styles from './DropDown.styles'
import { useLinkContext } from '../LinkProvider'

export interface DropDownItemProps {
  title: string | React.ReactNode
  icon?: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>
  href?: string
  onClick?: (event: React.MouseEvent<MouseEvent | HTMLAnchorElement>) => void
}

export interface DropDownProps {
  children?: React.ReactNode
  buttonText?: string
  renderAs?: 'button' | 'div'
  menuAlign?: 'left' | 'right'
  listItems: DropDownItemProps[]
}

export const DropDown = ({
  children,
  buttonText,
  renderAs = 'div',
  listItems,
  //   icon,
  menuAlign = 'left',
}: DropDownProps) => {
  const LinkComponent = useLinkContext()

  return (
    <Popover as="div" className="cu-dropdown not-prose relative inline-block flex-shrink-0">
      <div>
        <Popover.Button as={renderAs} className="cursor-pointer">
          <span className="sr-only">Open menu</span>
          {children && !buttonText ? (
            children
          ) : (
            <p className="flex">
              {buttonText}
              <ChevronDownIcon className="ml-1 mt-1 h-4 w-4" aria-hidden="true" />
            </p>
          )}
        </Popover.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Popover.Panel static className={`${styles.core} ${menuAlign === 'left' ? 'left-0' : 'right-0'}`}>
          {({ close }) => (
            <>
              {listItems &&
                listItems.map((item, index) => (
                  <div key={index}>
                    <LinkComponent
                      href={item.href ? item.href : ''}
                      className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                        item.onClick && e.preventDefault()
                        item.onClick && item.onClick(e)
                        close()
                      }}
                    >
                      {item.icon && <Icon icon={item.icon} aria-hidden="true" size="4" />}
                      <span className={item.icon ? 'ml-3' : ''}>{item.title}</span>
                    </LinkComponent>
                  </div>
                ))}
            </>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
