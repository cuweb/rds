import { Fragment, useState, useEffect } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosurePanel,
  DisclosureButton,
  Menu,
  MenuItems,
  MenuItem,
  MenuButton,
  Popover,
  PopoverGroup,
  PopoverButton,
  PopoverPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useLinkContext } from '../LinkProvider/useLinkContext'

export interface FilterProps {
  sortOptions?: {
    name: string
    href: string
    current: boolean
  }[]
  filters: {
    id: string
    name: string
    options: {
      value: string
      label: string
      checked: boolean
    }[]
  }[]
  callback: (k: string[]) => void
}

const styles = {
  dropDownTitles: `inline-flex justify-center text-sm font-medium text-cu-black-800 group hover:text-cu-red`,
  chevron: `flex-shrink-0 w-5 h-5 ml-1 text-cu-black-300 group-hover:text-cu-black-600`,
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const Filter = ({ sortOptions, filters, callback }: FilterProps) => {
  const [open, setOpen] = useState(false)
  const [sortItem, setSortItem] = useState('')
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  const isSelected = (name: string) => selectedItems.includes(name)
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const handleSelect = (name: string) => {
    const selected: string = name
    if (!selectedItems.includes(selected)) {
      return setSelectedItems([...selectedItems, selected])
    }
    return setSelectedItems([...selectedItems].filter((item) => item !== selected))
  }

  const handleRemove = (name: string) => {
    const selected: string = name
    return setSelectedItems([...selectedItems].filter((item) => item !== selected))
  }

  useEffect(() => {
    setSortItem(sortItem)
    setActiveFilters(selectedItems)
  }, [sortItem, selectedItems])

  useEffect(() => {
    callback(selectedItems)
  }, [selectedItems, callback])

  const LinkComponent = useLinkContext()

  return (
    <div className="cu-filter cu-component not-prose">
      {/* Mobile filter dialog */}
      <Transition show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 sm:hidden" onClose={setOpen}>
          <TransitionChild
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div className="fixed inset-0 z-40 flex">
            <TransitionChild
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <DialogPanel className="relative flex flex-col w-full h-full max-w-xs ml-auto overflow-y-auto bg-white shadow-xl">
                <div className="flex items-center justify-between px-4 py-3 bg-cu-black-50">
                  <h2 className="text-base font-medium text-cu-black-800">Filters</h2>
                  <button
                    type="button"
                    className="flex items-center justify-center w-8 h-8 p-2 -mr-1 bg-white rounded-md text-cu-black-600"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form>
                  {filters.map((section) => (
                    <Disclosure as="div" key={section.name} className="px-4 py-6 border-t border-cu-black-100">
                      {({ open }) => (
                        <>
                          <h3 className="flow-root -mx-2 -my-3 group">
                            <DisclosureButton className="flex items-center justify-between w-full px-2 py-3 text-sm bg-white text-cu-black-300 group-hover:text-cu-black-600">
                              <span className="font-medium text-cu-black-600">{section.name}</span>
                              <span className="flex items-center ml-6">
                                <ChevronDownIcon
                                  className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 transform')}
                                  aria-hidden="true"
                                />
                              </span>
                            </DisclosureButton>
                          </h3>
                          <DisclosurePanel className="pt-6">
                            <div className="space-y-6">
                              {section.options.map((option, optionIdx) => (
                                <div key={optionIdx} className="flex items-center">
                                  <input
                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.label}
                                    type="checkbox"
                                    onChange={() => handleSelect(option.label)}
                                    defaultChecked={isSelected(option.label)}
                                    className="w-4 h-4 rounded border-cu-black-200 text-cu-red focus:ring-cu-red-100"
                                  />
                                  <label
                                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-cu-black-600"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>

      <section aria-labelledby="filter-heading">
        <h2 id="filter-heading" className="sr-only">
          Filters
        </h2>

        {/* Filter selectors */}
        <div className="py-4 border rounded-tl-lg rounded-tr-lg border-cu-black-100 bg-gray-50">
          <div className="flex justify-between px-4 sm:px-6">
            <Menu as="div" className="relative">
              {sortOptions && sortOptions?.length > 0 && (
                <div>
                  <MenuButton className={styles.dropDownTitles}>
                    Sort
                    <ChevronDownIcon className={styles.chevron} aria-hidden="true" />
                  </MenuButton>
                </div>
              )}

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                {/* Sort drop down menu */}
                <MenuItems className="absolute z-10 w-40 mt-2 bg-white rounded-md shadow-lg -left-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {sortOptions && sortOptions?.length > 0 && (
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <MenuItem key={option.name}>
                          {({ active }) => (
                            <LinkComponent
                              href={option.href}
                              className={classNames(
                                option.name === sortItem ? 'font-medium text-cu-black-800' : 'text-cu-black-600',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm',
                              )}
                            >
                              {/* TODO: error reported here https://itsjira.carleton.ca/browse/WSDEV-2392 */}
                              {/* <span onClick={() => setSortItem(option.name)}>{option.name}</span> */}
                            </LinkComponent>
                          )}
                        </MenuItem>
                      ))}
                    </div>
                  )}
                </MenuItems>
              </Transition>
            </Menu>

            <button
              type="button"
              className="inline-block text-sm font-medium text-cu-black-800 hover:text-cu-red sm:hidden"
              onClick={() => setOpen(true)}
            >
              Filters
            </button>

            <div className="hidden sm:block">
              <div className="flow-root">
                <PopoverGroup className="flex items-center -mx-4 divide-x divide-gray-200">
                  {filters.map((section, sectionIdx) => (
                    <Popover key={sectionIdx} className="relative inline-block px-4 text-left">
                      <PopoverButton className={styles.dropDownTitles}>
                        <span>{section.name}</span>
                        <ChevronDownIcon className={styles.chevron} aria-hidden="true" />
                      </PopoverButton>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <PopoverPanel className="absolute right-0 z-10 p-4 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <form className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div key={optionIdx} className="flex items-center">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.label}
                                  type="checkbox"
                                  onChange={() => handleSelect(option.label)}
                                  defaultChecked={isSelected(option.label)}
                                  className="w-4 h-4 rounded border-cu-black-200 text-cu-red focus:ring-cu-red-100"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="pr-6 ml-3 text-sm whitespace-nowrap text-cu-black-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </form>
                        </PopoverPanel>
                      </Transition>
                    </Popover>
                  ))}
                </PopoverGroup>
              </div>
            </div>
          </div>
        </div>

        {/* Active filters */}
        <div className="bg-white border border-t-0 rounded-bl-lg rounded-br-lg border-cu-black-100">
          <div className="px-4 py-3 sm:flex sm:items-center sm:px-6">
            <h3 className="py-1 text-sm text-cu-black-600">
              Filters
              <span className="sr-only">, active</span>
            </h3>

            <div aria-hidden="true" className="hidden w-px h-5 bg-gray-300 sm:ml-4 sm:block" />

            <div className="mt-4 sm:ml-4 sm:mt-0">
              <div className="flex flex-wrap items-center gap-3 -m-1">
                {activeFilters.map((activeFilter, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center py-1 pl-3 pr-2 text-sm bg-white border rounded-lg border-cu-black-100 text-cu-black-600"
                  >
                    <span>{activeFilter}</span>
                    <button
                      type="button"
                      onClick={() => handleRemove(activeFilter)}
                      className="inline-flex flex-shrink-0 w-4 h-4 p-1 ml-1 rounded-full text-cu-black-400 hover:bg-cu-red hover:text-white"
                    >
                      <span className="sr-only">Remove filter for {activeFilter}</span>
                      <svg className="w-2 h-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                        <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
                      </svg>
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
