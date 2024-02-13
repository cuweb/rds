import { Fragment, useState, useEffect } from 'react'
import { Dialog, Disclosure, Menu, Popover, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import styles from './Filter.styles'
import { useLinkContext } from '../LinkProvider'

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
    <div className="cu-filter not-prose">
      {/* Mobile filter dialog */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 sm:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white shadow-xl">
                <div className="flex items-center justify-between bg-cu-black-50 px-4 py-3">
                  <h2 className="text-base font-medium text-cu-black-800">Filters</h2>
                  <button
                    type="button"
                    className="-mr-1 flex h-8 w-8 items-center justify-center rounded-md bg-white p-2 text-cu-black-600"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form>
                  {filters.map((section) => (
                    <Disclosure as="div" key={section.name} className="border-t border-cu-black-100 px-4 py-6">
                      {({ open }) => (
                        <>
                          <h3 className="group -mx-2 -my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-cu-black-300 group-hover:text-cu-black-600">
                              <span className="font-medium text-cu-black-600">{section.name}</span>
                              <span className="ml-6 flex items-center">
                                <ChevronDownIcon
                                  className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 transform')}
                                  aria-hidden="true"
                                />
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
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
                                    className="h-4 w-4 rounded border-cu-black-200 text-cu-red focus:ring-cu-red-100"
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
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <section aria-labelledby="filter-heading">
        <h2 id="filter-heading" className="sr-only">
          Filters
        </h2>

        {/* Filter selectors */}
        <div className="rounded-tl-lg rounded-tr-lg border border-cu-black-100 bg-gray-50 py-4">
          <div className="flex justify-between px-4 sm:px-6">
            <Menu as="div" className="relative">
              {sortOptions && sortOptions?.length > 0 && (
                <div>
                  <Menu.Button className={styles.dropDownTitles}>
                    Sort
                    <ChevronDownIcon className={styles.chevron} aria-hidden="true" />
                  </Menu.Button>
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
                <Menu.Items className="absolute -left-4 z-10 mt-2 w-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {sortOptions && sortOptions?.length > 0 && (
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
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
                        </Menu.Item>
                      ))}
                    </div>
                  )}
                </Menu.Items>
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
                <Popover.Group className="-mx-4 flex items-center divide-x divide-gray-200">
                  {filters.map((section, sectionIdx) => (
                    <Popover key={sectionIdx} className="relative inline-block px-4 text-left">
                      <Popover.Button className={styles.dropDownTitles}>
                        <span>{section.name}</span>
                        <ChevronDownIcon className={styles.chevron} aria-hidden="true" />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Popover.Panel className="absolute right-0 z-10 mt-2 rounded-md bg-white p-4 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                                  className="h-4 w-4 rounded border-cu-black-200 text-cu-red focus:ring-cu-red-100"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 whitespace-nowrap pr-6 text-sm text-cu-black-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </form>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                  ))}
                </Popover.Group>
              </div>
            </div>
          </div>
        </div>

        {/* Active filters */}
        <div className="rounded-bl-lg rounded-br-lg border border-t-0 border-cu-black-100 bg-white">
          <div className="px-4 py-3 sm:flex sm:items-center sm:px-6">
            <h3 className="py-1 text-sm text-cu-black-600">
              Filters
              <span className="sr-only">, active</span>
            </h3>

            <div aria-hidden="true" className="hidden h-5 w-px bg-gray-300 sm:ml-4 sm:block" />

            <div className="mt-4 sm:ml-4 sm:mt-0">
              <div className="-m-1 flex flex-wrap items-center gap-3">
                {activeFilters.map((activeFilter, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-lg border border-cu-black-100 bg-white py-1 pl-3 pr-2 text-sm text-cu-black-600"
                  >
                    <span>{activeFilter}</span>
                    <button
                      type="button"
                      onClick={() => handleRemove(activeFilter)}
                      className="ml-1 inline-flex h-4 w-4 flex-shrink-0 rounded-full p-1 text-cu-black-400 hover:bg-cu-red hover:text-white"
                    >
                      <span className="sr-only">Remove filter for {activeFilter}</span>
                      <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
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
