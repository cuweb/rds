import { useEffect, Fragment, PropsWithChildren, useState } from 'react'
import { Combobox, Dialog, Transition } from '@headlessui/react'
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon'
import XMarkIcon from '@heroicons/react/24/solid/XMarkIcon'
import { rdsOverlay } from '../../utils/optionClasses'
import { useLinkContext } from '../LinkProvider/useLinkContext'

export interface SourceDataProps {
  [k: string]: string | number
}
export interface SearchProps {
  sourceData: SourceDataProps[]
  searchOn?: string
  callback: (k: boolean) => void
}

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ')
}

export const Search = ({ searchOn = 'title', sourceData, children, callback }: PropsWithChildren<SearchProps>) => {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)

  const filteredDatabase =
    query === ''
      ? []
      : sourceData.filter((data: SourceDataProps) => {
          return data[searchOn].toString().toLowerCase().includes(query.toLowerCase())
        })

  const searchAvatar = children ? (
    children
  ) : (
    <MagnifyingGlassIcon className="left-4 h-5 w-5 cursor-pointer text-gray-400" aria-hidden="true" />
  )

  const handleComboboxChange = (selectedOption: SourceDataProps) => {
    if (selectedOption) {
      const url = String(selectedOption.url)
      window.location.href = url
      setOpen(false)
    }
  }

  useEffect(() => {
    function onKeydown(event: KeyboardEvent) {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        setOpen(!open)
      }
    }

    window.addEventListener('keydown', onKeydown)
    return () => {
      window.removeEventListener('keydown', onKeydown)
    }
  }, [open])

  useEffect(() => {
    callback(open)
  }, [open, callback])

  const LinkComponent = useLinkContext()

  return (
    <>
      <button onClick={() => setOpen(true)} aria-label="search" className="not-prose">
        {searchAvatar}
      </button>

      <Transition.Root show={open} as={Fragment} afterLeave={() => setQuery('')} appear>
        <Dialog as="div" className="cu-search not-prose relative z-50" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className={`fixed inset-0 transition-opacity ${rdsOverlay} `} />
          </Transition.Child>

          <div className="z-100 fixed inset-0 overflow-y-auto p-4 sm:p-6 md:p-20">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="mx-auto mt-[20vh] max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                <Combobox onChange={handleComboboxChange}>
                  <div className="relative">
                    <MagnifyingGlassIcon
                      className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <Combobox.Input
                      className="h-12 w-full rounded-lg border border-cu-black-100 bg-transparent pl-11 pr-4 text-sm text-cu-black-800 placeholder-cu-black-300 focus:border-cu-black-300 focus:ring-0"
                      placeholder="Search..."
                      onChange={(event) => setQuery(event.target.value)}
                    />
                    {query && (
                      <XMarkIcon
                        className="absolute right-4 top-3.5 h-4 w-4 text-gray-400"
                        aria-hidden="true"
                        onClick={() => {
                          setQuery('')
                        }}
                      />
                    )}
                  </div>

                  {filteredDatabase.length > 0 && (
                    <Combobox.Options
                      static
                      className="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
                    >
                      {filteredDatabase.map((record) => (
                        <Combobox.Option
                          key={record.id}
                          value={record}
                          className={({ active }) =>
                            classNames('cursor-default select-none px-4 py-2', active && 'bg-cu-red text-white')
                          }
                        >
                          <LinkComponent href={`${record.url}`} onClick={() => setOpen(false)}>
                            {record[searchOn]}
                          </LinkComponent>
                        </Combobox.Option>
                      ))}
                    </Combobox.Options>
                  )}

                  {query !== '' && filteredDatabase.length === 0 && (
                    <p className="p-4 text-sm text-gray-500">Search not found</p>
                  )}
                </Combobox>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
