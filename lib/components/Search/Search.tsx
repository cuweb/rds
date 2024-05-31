import { useState } from 'react'
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon'
import XMarkIcon from '@heroicons/react/24/solid/XMarkIcon'
import { SearchResults } from './SearchResults'

export interface SearchWrapper {
  searchQuery: (query: string) => void
  children?: React.ReactNode
}

export const SearchWrapper = ({ searchQuery, children }: SearchWrapper) => {
  const [query, setQuery] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setQuery(newValue) // Update state
    searchQuery(newValue) // Call the provided callback with the new value
  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
        <div className="relative bg-white rounded-lg shadow-xl">
          <div className="relative p-4">
            <MagnifyingGlassIcon
              className="absolute left-6 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <input
              type="text"
              className="w-full h-12 pr-10 text-sm bg-transparent border rounded-lg border-cu-black-100 pl-11 text-cu-black-800 placeholder-cu-black-300 focus:border-cu-black-300 focus:ring-0"
              placeholder="Search..."
              value={query}
              onChange={handleInputChange}
            />
            {query && (
              <XMarkIcon
                className="absolute right-6 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 cursor-pointer"
                aria-hidden="true"
                onClick={() => {
                  setQuery('')
                  searchQuery('')
                }}
              />
            )}
          </div>

          <div className="absolute top-full -mt-4 left-0 right-0 bg-white rounded-lg shadow-xl">{children}</div>
        </div>
      </div>
    </>
  )
}

export const Search = Object.assign(SearchWrapper, {
  Results: SearchResults,
})

SearchWrapper.displayName = 'Search'
