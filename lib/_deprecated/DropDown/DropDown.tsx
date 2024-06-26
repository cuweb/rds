import { Popover, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import ChevronDownIcon from '@heroicons/react/20/solid/ChevronDownIcon'
import { Icon } from '../../components/Icon/Icon'
import { useLinkContext } from '../../components/LinkProvider/useLinkContext'

export interface DropDownItemProps {
  title: string | React.ReactNode
  icon?: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>
  href?: string
  onClick?: (event: React.MouseEvent<MouseEvent | HTMLAnchorElement>) => void
}

export interface DropDownProps {
  children?: React.ReactNode
  text?: string
  menuAlign?: 'left' | 'right'
  listItems: DropDownItemProps[]
  hasBorder?: boolean
}

export const DropDown = ({ children, text, menuAlign = 'left', listItems, hasBorder }: DropDownProps) => {
  const LinkComponent = useLinkContext()
  const borderStyle = hasBorder ? 'border border-cu-black-100 px-3 py-2 rounded-md' : ''

  return (
    <Popover as="div" className={`relative flex-shrink-0 inline-block cu-dropdown not-prose`}>
      <div>
        <Popover.Button as="div" className={`cursor-pointer ${borderStyle}`}>
          <span className="sr-only">Open menu</span>
          {children && !text ? (
            children
          ) : (
            <p className="flex">
              {text}
              <ChevronDownIcon className="w-4 h-4 mt-1 ml-1" aria-hidden="true" />
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
        <Popover.Panel
          static
          className={`absolute z-10 mt-2 w-48 py-1 origin-top-left bg-white border rounded-md shadow-lg border-cu-black-100 focus:outline-none ${menuAlign === 'left' ? 'left-0' : 'right-0'}`}
        >
          {({ close }) => (
            <>
              {listItems &&
                listItems.map((item, index) => (
                  <div key={index}>
                    <LinkComponent
                      href={item.href ? item.href : ''}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 group hover:bg-gray-100 hover:text-gray-900"
                      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                        item.onClick && e.preventDefault()
                        item.onClick && item.onClick(e)
                        close()
                      }}
                    >
                      {item.icon && <Icon icon={item.icon} aria-hidden="true" size={4} />}
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
