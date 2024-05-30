import { useEffect, useState } from 'react'
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

export const Search = ({ searchOn = 'title', sourceData, children, callback }) => {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)

  const filteredDatabase =
    query === ''
      ? []
      : sourceData.filter((data) => {
          return data[searchOn].toString().toLowerCase().includes(query.toLowerCase())
        })

  const searchAvatar = children ? (
    children
  ) : (
    <MagnifyingGlassIcon className="w-5 h-5 cursor-pointer text-cu-black-300 left-4" aria-hidden="true" />
  )

  const handleComboboxChange = (selectedOption) => {
    if (selectedOption) {
      const url = String(selectedOption.url)
      window.location.href = url
      setOpen(false)
    }
  }

  useEffect(() => {
    function onKeydown(event) {
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

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-xl">
            <div className="relative p-4">
              <MagnifyingGlassIcon className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" aria-hidden="true" />
              <input
                type="text"
                className="w-full h-12 pr-4 text-sm bg-transparent border rounded-lg border-cu-black-100 pl-11 text-cu-black-800 placeholder-cu-black-300 focus:border-cu-black-300 focus:ring-0"
                placeholder="Search..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              {query && (
                <XMarkIcon
                  className="absolute right-4 top-3.5 h-4 w-4 text-gray-400 cursor-pointer"
                  aria-hidden="true"
                  onClick={() => {
                    setQuery('')
                  }}
                />
              )}
            </div>

            {filteredDatabase.length > 0 && (
              <ul className="py-2 overflow-y-auto text-sm text-gray-800 max-h-72 scroll-py-2">
                {filteredDatabase.map((record) => (
                  <li
                    key={record.id}
                    className="cursor-default select-none px-4 py-2 hover:bg-cu-red hover:text-white"
                    onClick={() => handleComboboxChange(record)}
                  >
                    <LinkComponent href={`${record.url}`} onClick={() => setOpen(false)}>
                      {record[searchOn]}
                    </LinkComponent>
                  </li>
                ))}
              </ul>
            )}

            {query !== '' && filteredDatabase.length === 0 && (
              <p className="p-4 text-sm text-gray-500">Search not found</p>
            )}
          </div>
        </div>
      )}
    </>
  )
}
